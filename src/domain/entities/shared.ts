export type IconName =
	"radar" | "waypoints" | "sparkles" | "linkedin" | "github" | "map-pin";

export type AccentTone = "primary" | "secondary" | "tertiary";

export interface Link {
	readonly label: string;
	readonly href: string;
}

export interface Image {
	readonly src: string;
	readonly alt: string;
}

export interface Metric {
	readonly value: string;
	readonly label: string;
}

export interface SectionIntro {
	readonly label: string;
	readonly title: string;
	readonly description?: string;
}
