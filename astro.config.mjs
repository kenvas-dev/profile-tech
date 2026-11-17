// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const stylesPath = fileURLToPath(
	new URL("./src/presentation/styles", import.meta.url),
);

/**
 * URL pública del sitio (canónicas, Open Graph, sitemap, hreflang y el
 * enlace del CV en PDF). Es fija para que todas las builds (producción,
 * previews de Vercel y local) apunten al dominio propio y no al de Vercel.
 * SITE_URL permite sobrescribirla puntualmente.
 */
const site = process.env.SITE_URL ?? "https://www.un1t7d.dev";

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
