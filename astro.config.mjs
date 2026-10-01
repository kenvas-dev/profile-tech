// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const stylesPath = fileURLToPath(
	new URL("./src/presentation/styles", import.meta.url),
);

/**
 * URL pública del sitio (canónicas, Open Graph, sitemap, hreflang).
 * 1. SITE_URL: para fijar un dominio propio.
 * 2. VERCEL_PROJECT_PRODUCTION_URL: la inyecta Vercel en cada build.
 * 3. Valor por defecto del proyecto en Vercel.
 */
const site =
	process.env.SITE_URL ??
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: "https://profile-tech.vercel.app");

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: "ignore",
	i18n: {
		// Debe coincidir con LOCALES / DEFAULT_LOCALE de src/domain/entities/locale.ts
		locales: ["es", "en"],
		defaultLocale: "es",
		routing: {
			// Español en "/", inglés en "/en/"
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// El CV existe solo para generar el PDF (noindex).
			filter: (page) => !/\/cv\/?$/.test(new URL(page).pathname),
			i18n: {
				defaultLocale: "es",
				locales: { es: "es-SV", en: "en-US" },
			},
		}),
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					loadPaths: [stylesPath],
				},
			},
		},
	},
});
