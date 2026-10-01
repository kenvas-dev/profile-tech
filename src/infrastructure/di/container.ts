import { GetPortfolio } from "@application/use-cases/GetPortfolio";
import { portfolioEn } from "../data/portfolio.en";
import { portfolioEs } from "../data/portfolio.es";
import { InMemoryPortfolioRepository } from "../repositories/InMemoryPortfolioRepository";

/** Composition root: único punto donde se conectan puertos y adaptadores. */
const portfolioRepository = new InMemoryPortfolioRepository({
	es: portfolioEs,
	en: portfolioEn,
});

export const getPortfolio = new GetPortfolio(portfolioRepository);
