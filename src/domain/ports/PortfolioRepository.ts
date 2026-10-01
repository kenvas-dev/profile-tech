/**
 * Puertos de salida del dominio.
 * @packageDocumentation
 */
import type { Locale } from "../entities/locale";
import type { Portfolio } from "../entities/portfolio";

/**
 * Puerto de salida para obtener el contenido del portfolio.
 * Cualquier fuente (módulos en memoria, CMS, API) debe implementarlo; la
 * aplicación depende solo de este contrato, nunca de un adaptador concreto.
 */
export interface PortfolioRepository {
	/**
	 * Devuelve el contenido completo en el idioma indicado.
	 * @throws Error si no hay contenido para ese idioma.
	 */
	findByLocale(locale: Locale): Promise<Portfolio>;
}
