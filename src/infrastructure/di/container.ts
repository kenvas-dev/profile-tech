/**
 * Composition root: único punto donde se conectan puertos y adaptadores.
 * Las páginas (adaptadores de entrada) solo importan desde aquí.
 * @packageDocumentation
 */
import { GetCurriculum } from "@application/use-cases/GetCurriculum";
import { GetPortfolio } from "@application/use-cases/GetPortfolio";
import { curriculumEn } from "../data/curriculum.en";
import { curriculumEs } from "../data/curriculum.es";
import { portfolioEn } from "../data/portfolio.en";
import { portfolioEs } from "../data/portfolio.es";
import { InMemoryCurriculumRepository } from "../repositories/InMemoryCurriculumRepository";
import { InMemoryPortfolioRepository } from "../repositories/InMemoryPortfolioRepository";

const portfolioRepository = new InMemoryPortfolioRepository({
	es: portfolioEs,
	en: portfolioEn,
});

const curriculumRepository = new InMemoryCurriculumRepository({
	es: curriculumEs,
	en: curriculumEn,
});

/** Caso de uso listo para usar: `await getPortfolioUseCase.execute("es")`. */
export const getPortfolioUseCase = new GetPortfolio(portfolioRepository);

/** Caso de uso listo para usar: `await getCurriculumUseCase.execute("es")`. */
export const getCurriculumUseCase = new GetCurriculum(curriculumRepository);
