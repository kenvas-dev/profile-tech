/**
 * Adaptador de salida en memoria.
 * @packageDocumentation
 */
import type { Locale } from "@domain/entities/locale";
import type { Portfolio } from "@domain/entities/portfolio";
import type { PortfolioRepository } from "@domain/ports/PortfolioRepository";

/**
 * Implementa {@link PortfolioRepository} con contenido estático (un módulo por
 * idioma). Para usar un CMS o una API basta con otro adaptador del mismo puerto.
 */
export class InMemoryPortfolioRepository implements PortfolioRepository {
	/** @param contentByLocale Contenido disponible, indexado por idioma. */
	constructor(
		private readonly contentByLocale: Partial<Record<Locale, Portfolio>>,
	) {}

	async findByLocale(locale: Locale): Promise<Portfolio> {
		const portfolio = this.contentByLocale[locale];
		if (!portfolio) {
			throw new Error(
				`No hay contenido disponible para el idioma "${locale}".`,
			);
		}
		return portfolio;
	}
}
