import type { Image, Link } from "./shared";

export interface Identity {
	readonly fullName: string;
	/** Marca que se muestra como logo en la cabecera y el pie. */
	readonly logo: string;
	readonly handle: string;
	readonly address: Address;
}

export interface Address {
	readonly locality: string;
	readonly region: string;
	/** Código ISO 3166-1 alfa-2. */
	readonly countryCode: string;
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
