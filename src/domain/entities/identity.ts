import type { Image, Link } from "./shared";

export interface Identity {
	readonly fullName: string;
	readonly initials: string;
	readonly handle: string;
	readonly languages: readonly string[];
	readonly activeLanguage: string;
}

export interface Hero {
	readonly availability: string;
	readonly context: string;
	readonly role: {
		readonly primary: string;
		readonly secondary: string;
	};
	readonly valueProposition: string;
	readonly primaryAction: Link;
	readonly secondaryAction: Link;
	readonly professionalLinks: readonly Link[];
	readonly portrait: {
		readonly image: Image;
		readonly code: string;
		readonly baseLabel: string;
		readonly location: string;
		readonly coordinates: string;
	};
}
