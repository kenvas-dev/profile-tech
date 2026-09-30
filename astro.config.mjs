// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const stylesPath = fileURLToPath(
	new URL("./src/presentation/styles", import.meta.url),
);

// https://astro.build/config
export default defineConfig({
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
