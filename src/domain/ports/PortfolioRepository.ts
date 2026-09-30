import type { Portfolio } from "../entities/portfolio";

export type Locale = "es" | "en";

/** Puerto de salida: cualquier fuente de contenido (memoria, CMS, API) debe implementarlo. */
export interface PortfolioRepository {
	findByLocale(locale: Locale): Promise<Portfolio>;
}
