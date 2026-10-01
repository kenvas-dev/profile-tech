/**
 * Composition root: único punto donde se conectan puertos y adaptadores.
 * Las páginas (adaptadores de entrada) solo importan desde aquí.
 * @packageDocumentation
 */
import { GetPortfolio } from "@application/use-cases/GetPortfolio";
import { portfolioEn } from "../data/portfolio.en";
import { portfolioEs } from "../data/portfolio.es";
import { InMemoryPortfolioRepository } from "../repositories/InMemoryPortfolioRepository";

const portfolioRepository = new InMemoryPortfolioRepository({
	es: portfolioEs,
	en: portfolioEn,
});

/** Caso de uso listo para usar: `await getPortfolioUseCase.execute("es")`. */
export const getPortfolioUseCase = new GetPortfolio(portfolioRepository);
