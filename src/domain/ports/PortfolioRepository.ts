import type { Locale } from "../entities/locale";
import type { Portfolio } from "../entities/portfolio";

/** Puerto de salida: cualquier fuente de contenido (memoria, CMS, API) debe implementarlo. */
export interface PortfolioRepository {
	findByLocale(locale: Locale): Promise<Portfolio>;
}
