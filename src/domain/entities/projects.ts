import type { AccentTone, Image, Link, Metric, SectionIntro } from "./shared";

export interface Project {
	readonly code: string;
	readonly category: string;
	readonly title: string;
	readonly summary: string;
	readonly preview: Image;
	readonly tone: AccentTone;
	readonly technologies: readonly string[];
	readonly results: readonly Metric[];
	readonly link: Link;
	readonly featured: boolean;
}

export interface Projects {
	readonly intro: SectionIntro;
	readonly items: readonly Project[];
}
