import type { IconName, Link } from "./shared";

export interface ContactChannel {
	readonly icon: IconName;
	readonly label: string;
	readonly value: string;
	readonly href: string;
}

/** Mini sección que explica con qué está construido el propio sitio. */
export interface BuiltWith {
	readonly label: string;
	readonly title: string;
	readonly description: string;
	readonly technologies: readonly string[];
}

export interface Contact {
	readonly label: string;
	readonly title: string;
	readonly description: string;
	readonly email: string;
	readonly availability: string;
	readonly channels: readonly ContactChannel[];
	readonly builtWith: BuiltWith;
}

export interface Footer {
	readonly note: string;
	readonly copyright: string;
}

export type NavigationLink = Link;
