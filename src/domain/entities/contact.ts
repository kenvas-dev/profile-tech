import type { IconName, Link } from "./shared";

export interface ContactChannel {
	readonly icon: IconName;
	readonly label: string;
	readonly value: string;
	readonly href: string;
}

export interface Contact {
	readonly label: string;
	readonly title: string;
	readonly description: string;
	readonly email: string;
	readonly availability: string;
	readonly channels: readonly ContactChannel[];
}

export interface Footer {
	readonly note: string;
	readonly copyright: string;
}

export type NavigationLink = Link;
