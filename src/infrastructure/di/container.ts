import { GetPortfolio } from "@application/use-cases/GetPortfolio";
import { portfolioEs } from "../data/portfolio.es";
import { InMemoryPortfolioRepository } from "../repositories/InMemoryPortfolioRepository";

/** Composition root: único punto donde se conectan puertos y adaptadores. */
const portfolioRepository = new InMemoryPortfolioRepository({
	es: portfolioEs,
});

export const getPortfolio = new GetPortfolio(portfolioRepository);
