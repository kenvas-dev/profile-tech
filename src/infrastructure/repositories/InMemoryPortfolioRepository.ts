import type { Portfolio } from "@domain/entities/portfolio";
import type {
	Locale,
	PortfolioRepository,
} from "@domain/ports/PortfolioRepository";

/** Adaptador que sirve el contenido desde módulos estáticos, uno por idioma. */
export class InMemoryPortfolioRepository implements PortfolioRepository {
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
