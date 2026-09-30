import { isCurrentPosition, type Position } from "@domain/entities/experience";
import type { Portfolio } from "@domain/entities/portfolio";
import type { Project } from "@domain/entities/projects";
import type {
	Locale,
	PortfolioRepository,
} from "@domain/ports/PortfolioRepository";

export interface PortfolioOverview extends Omit<Portfolio, "projects"> {
	readonly projects: Portfolio["projects"] & {
		readonly featured: Project;
		readonly others: readonly Project[];
	};
}

const byMostRecent = (a: Position, b: Position): number => {
	if (isCurrentPosition(a) !== isCurrentPosition(b))
		return isCurrentPosition(a) ? -1 : 1;
	return b.period.startYear - a.period.startYear;
};

export class GetPortfolio {
	constructor(private readonly repository: PortfolioRepository) {}

	async execute(locale: Locale): Promise<PortfolioOverview> {
		const portfolio = await this.repository.findByLocale(locale);

		return {
			...portfolio,
			experience: {
				...portfolio.experience,
				positions: [...portfolio.experience.positions].sort(
					byMostRecent,
				),
			},
			projects: {
				...portfolio.projects,
				...this.splitProjects(portfolio.projects.items),
			},
		};
	}

	private splitProjects(projects: readonly Project[]) {
		const featured = projects.find((project) => project.featured);
		if (!featured) {
			throw new Error(
				"El portfolio debe tener al menos un proyecto destacado.",
			);
		}
		return {
			featured,
			others: projects.filter((project) => project !== featured),
		};
	}
}
