/**
 * Base de los adaptadores de salida en memoria.
 * @packageDocumentation
 */
import type { Locale } from "@domain/entities/locale";

/**
 * Repositorio de contenido estático indexado por idioma (un módulo por
 * idioma). Los adaptadores concretos lo extienden e implementan su puerto.
 * @typeParam Content Tipo del contenido de un idioma.
 */
export abstract class InMemoryLocalizedRepository<Content> {
	/** @param contentByLocale Contenido disponible, indexado por idioma. */
	constructor(
		private readonly contentByLocale: Partial<Record<Locale, Content>>,
	) {}

	async findByLocale(locale: Locale): Promise<Content> {
		const content = this.contentByLocale[locale];
		if (!content) {
			throw new Error(
				`No hay contenido disponible para el idioma "${locale}".`,
			);
		}
		return content;
	}
}
