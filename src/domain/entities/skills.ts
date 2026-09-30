import type { IconName, SectionIntro } from "./shared";

export interface SkillGroup {
	readonly code: string;
	readonly title: string;
	readonly description: string;
	readonly technologies: readonly string[];
}

export interface Strength {
	readonly icon: IconName;
	readonly title: string;
	readonly description: string;
}

export interface Skills {
	readonly intro: SectionIntro;
	readonly groups: readonly SkillGroup[];
	readonly strengths: {
		readonly label: string;
		readonly version: string;
		readonly items: readonly Strength[];
	};
}
