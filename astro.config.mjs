// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const stylesPath = fileURLToPath(
	new URL("./src/presentation/styles", import.meta.url),
);

// https://astro.build/config
export default defineConfig({
	i18n: {
		// Debe coincidir con LOCALES / DEFAULT_LOCALE de src/domain/entities/locale.ts
		locales: ["es", "en"],
		defaultLocale: "es",
		routing: {
			// Español en "/", inglés en "/en/"
			prefixDefaultLocale: false,
		},
	},
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
