/**
 * Puerto de salida del currículum.
 * @packageDocumentation
 */
import type { Curriculum } from "../entities/curriculum";
import type { Locale } from "../entities/locale";

/**
 * Puerto de salida para obtener el contenido del CV. Es independiente de
 * {@link PortfolioRepository}: el CV se redacta para reclutadores y puede
 * evolucionar sin tocar la web.
 */
export interface CurriculumRepository {
	/**
	 * Devuelve el CV en el idioma indicado.
	 * @throws Error si no hay contenido para ese idioma.
	 */
	findByLocale(locale: Locale): Promise<Curriculum>;
}
