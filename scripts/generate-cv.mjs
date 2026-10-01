/**
 * Genera el CV en PDF (es / en) a partir de las páginas /cv y /en/cv.
 * Requiere un build previo (`astro build`) y Google Chrome instalado.
 * Ruta de Chrome configurable con CHROME_PATH.
 */
import { spawn } from "node:child_process";
import { createReadStream } from "node:fs";
import { mkdir, mkdtemp, rm, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { extname, join, normalize } from "node:path";

const DIST_DIR = "dist";
const OUTPUT_DIR = "public/cv";
const CHROME =
	process.env.CHROME_PATH ??
	"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PRINT_TIMEOUT_MS = 60_000;

const DOCUMENTS = [
	{ path: "/cv/", file: "kevin-aquino-cv-es.pdf" },
	{ path: "/en/cv/", file: "kevin-aquino-cv-en.pdf" },
];

const CONTENT_TYPES = {
	".html": "text/html; charset=utf-8",
	".css": "text/css",
	".js": "text/javascript",
	".svg": "image/svg+xml",
	".jpg": "image/jpeg",
	".png": "image/png",
	".ico": "image/x-icon",
	".webmanifest": "application/manifest+json",
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fileSize = async (path) => {
	try {
		const info = await stat(path);
		return info.isFile() ? info.size : 0;
	} catch {
		return 0;
	}
};

/** Servidor estático mínimo sobre dist/ (sin procesos externos que cerrar). */
const serveDist = () =>
	new Promise((resolve) => {
		const server = createServer(async (request, response) => {
			const { pathname } = new URL(
				request.url ?? "/",
				"http://localhost",
			);
			const relative = normalize(decodeURIComponent(pathname)).replace(
				/^(\.\.[/\\])+/,
				"",
			);
			const candidate = join(DIST_DIR, relative);
			const indexFile = join(candidate, "index.html");
			const file = (await fileSize(indexFile)) ? indexFile : candidate;

			if (!(await fileSize(file))) {
				response.writeHead(404).end();
				return;
			}
			response.writeHead(200, {
				"Content-Type":
					CONTENT_TYPES[extname(file)] ?? "application/octet-stream",
			});
			createReadStream(file).pipe(response);
		});
		server.listen(0, () => resolve(server));
	});

/**
 * Chrome headless puede no terminar tras imprimir (tareas de fondo), así que
 * se espera a que el PDF exista y deje de crecer, y después se cierra.
 */
const printToPdf = async (url, output, profileDir) => {
	await rm(output, { force: true });
	const chrome = spawn(
		CHROME,
		[
			"--headless=new",
			"--disable-gpu",
			"--no-first-run",
			"--no-default-browser-check",
			"--disable-extensions",
			"--disable-sync",
			"--disable-background-networking",
			"--disable-component-update",
			"--no-pdf-header-footer",
			// Margen para que carguen las fuentes web antes de imprimir.
			"--virtual-time-budget=10000",
			`--user-data-dir=${profileDir}`,
			`--print-to-pdf=${output}`,
			url,
		],
		{ stdio: "ignore" },
	);

	try {
		const deadline = Date.now() + PRINT_TIMEOUT_MS;
		let previousSize = -1;
		while (Date.now() < deadline) {
			const size = await fileSize(output);
			if (size > 0 && size === previousSize) return;
			previousSize = size;
			await sleep(500);
		}
		throw new Error(`Tiempo agotado generando ${output}`);
	} finally {
		chrome.kill();
	}
};

const server = await serveDist();
const { port } = server.address();
const profileDir = await mkdtemp(join(tmpdir(), "cv-chrome-"));

try {
	await mkdir(OUTPUT_DIR, { recursive: true });

	for (const { path, file } of DOCUMENTS) {
		const output = join(OUTPUT_DIR, file);
		await printToPdf(`http://localhost:${port}${path}`, output, profileDir);
		const sizeKb = Math.round((await fileSize(output)) / 1024);
		console.log(`✔ ${output} (${sizeKb} KB)`);
	}
} finally {
	server.close();
	await rm(profileDir, { recursive: true, force: true });
}
