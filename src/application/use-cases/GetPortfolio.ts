/**
 * Caso de uso: obtener el portfolio listo para presentarse.
 * @packageDocumentation
 */
import type { Credential } from "@domain/entities/education";
import { isCurrentPosition, type Position } from "@domain/entities/experience";
import type { Locale } from "@domain/entities/locale";
import type { Portfolio } from "@domain/entities/portfolio";
import type { Project, Projects } from "@domain/entities/projects";
import type { PortfolioRepository } from "@domain/ports/PortfolioRepository";

/** Proyectos separados en el destacado y el resto, en su orden original. */
export interface ProjectsOverview extends Projects {
	readonly featuredProject: Project;
	readonly otherProjects: readonly Project[];
}

/** Portfolio con las reglas de presentación ya aplicadas (orden y destacados). */
export interface PortfolioOverview extends Omit<Portfolio, "projects"> {
	readonly projects: ProjectsOverview;
}

/** Ordena los puestos: primero los vigentes y después por año de inicio descendente. */
const byMostRecentPosition = (first: Position, second: Position): number => {
	if (isCurrentPosition(first) !== isCurrentPosition(second)) {
		return isCurrentPosition(first) ? -1 : 1;
	}
	return second.period.startYear - first.period.startYear;
};

/** Ordena las credenciales de la más reciente a la más antigua. */
const byMostRecentCredential = (
	first: Credential,
	second: Credential,
): number => second.completionYear - first.completionYear;

/**
 * Obtiene el contenido de un idioma y aplica las reglas de negocio de la
 * presentación: orden de la experiencia, orden de la formación y separación
 * del proyecto destacado.
 */
export class GetPortfolio {
	constructor(private readonly repository: PortfolioRepository) {}

	/**
	 * @param locale Idioma del contenido.
	 * @throws Error si no hay contenido para el idioma o ningún proyecto es destacado.
	 */
	async execute(locale: Locale): Promise<PortfolioOverview> {
		const portfolio = await this.repository.findByLocale(locale);

		return {
			...portfolio,
			experience: {
				...portfolio.experience,
				positions: [...portfolio.experience.positions].sort(
					byMostRecentPosition,
				),
			},
			education: {
				...portfolio.education,
				credentials: [...portfolio.education.credentials].sort(
					byMostRecentCredential,
				),
			},
			projects: this.separateFeaturedProject(portfolio.projects),
		};
	}

	/** Separa el proyecto destacado del resto, sin alterar su orden. */
	private separateFeaturedProject(projects: Projects): ProjectsOverview {
		const featuredProject = projects.items.find(
			(project) => project.isFeatured,
		);
		if (!featuredProject) {
			throw new Error("El portfolio debe tener un proyecto destacado.");
		}
		return {
			...projects,
			featuredProject,
			otherProjects: projects.items.filter(
				(project) => project !== featuredProject,
			),
		};
	}
}
