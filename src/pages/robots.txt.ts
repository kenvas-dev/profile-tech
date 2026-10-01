import type { APIRoute } from "astro";

/** robots.txt generado con la URL del sitio para enlazar el sitemap. */
export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL("sitemap-index.xml", site).href;

	return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
