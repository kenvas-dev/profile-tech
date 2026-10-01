/**
 * Identidad de la persona y contenido de la cabecera principal (hero).
 * @packageDocumentation
 */
import type { Image, Link } from "./shared";

/** Datos que identifican a la persona en todo el sitio. */
export interface Identity {
	/** Nombre y apellidos. */
	readonly fullName: string;
	/** Marca que se muestra como logo en la cabecera y el pie (p. ej. `{UN1T7D}`). */
	readonly brandMark: string;
	/** Alias que acompaña al logo y se usa como `profile:username`. */
	readonly username: string;
	/** Ubicación estructurada (datos estructurados de schema.org). */
	readonly address: Address;
}

/** Dirección postal resumida. */
export interface Address {
	/** Ciudad o municipio. */
	readonly locality: string;
	/** Departamento, provincia o estado. */
	readonly region: string;
	/** Código de país ISO 3166-1 alfa-2 (p. ej. `SV`). */
	readonly countryCode: string;
}

/** Titular de la cabecera: dos roles unidos por un acento visual (`A + B`). */
export interface HeroHeadline {
	readonly primaryRole: string;
	readonly secondaryRole: string;
}

/** Retrato del hero y los metadatos tipo HUD que lo acompañan. */
export interface Portrait {
	readonly image: Image;
	/** Código decorativo mostrado sobre el retrato (p. ej. `PROFILE_001`). */
	readonly badgeCode: string;
	/** Rótulo que precede a la ubicación (p. ej. `BASE`). */
	readonly locationLabel: string;
	/** Ubicación abreviada (p. ej. «Quezaltepeque, SV»). */
	readonly locationName: string;
	/** Coordenadas geográficas en formato legible. */
	readonly coordinates: string;
}

/** Contenido de la cabecera principal de la página. */
export interface Hero {
	/** Estado de disponibilidad laboral (p. ej. «Disponible para nuevos proyectos»). */
	readonly availabilityStatus: string;
	/** Línea corta sobre el nombre (p. ej. «Portfolio / CV — Frontend Engineering»). */
	readonly tagline: string;
	readonly headline: HeroHeadline;
	/** Propuesta de valor: qué haces y por qué importa. */
	readonly valueProposition: string;
	/** Llamada a la acción principal. */
	readonly primaryAction: Link;
	/** Llamada a la acción secundaria. */
	readonly secondaryAction: Link;
	/** Enlaces profesionales (LinkedIn, GitHub, CV…). */
	readonly professionalLinks: readonly Link[];
	readonly portrait: Portrait;
}
