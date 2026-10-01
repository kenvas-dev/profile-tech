/**
 * Contacto, navegación y pie de página.
 * @packageDocumentation
 */
import type { IconName, Link } from "./shared";

/** Canal de contacto o perfil profesional. */
export interface ContactChannel {
	readonly iconName: IconName;
	/** Nombre de la plataforma (p. ej. «LinkedIn»). */
	readonly platformLabel: string;
	/** Valor visible, normalmente abreviado (p. ej. `@kenvas-dev`). */
	readonly displayValue: string;
	/** URL completa del canal. */
	readonly href: string;
}

/** Mini sección que explica con qué está construido el propio sitio. */
export interface BuiltWith {
	readonly sectionLabel: string;
	readonly title: string;
	readonly description: string;
	/** Herramientas y prácticas del proyecto, en el orden en que se muestran. */
	readonly technologies: readonly string[];
}

/** Sección de contacto. */
export interface Contact {
	readonly sectionLabel: string;
	/** Llamada a la acción principal de la sección. */
	readonly title: string;
	readonly description: string;
	/** Correo de contacto (se enlaza con `mailto:`). */
	readonly email: string;
	/** Estado de disponibilidad (p. ej. «Disponible · Q4 2026»). */
	readonly availabilityStatus: string;
	readonly channels: readonly ContactChannel[];
	readonly builtWith: BuiltWith;
}

/** Pie de página. */
export interface Footer {
	/** Nota sobre la tecnología del sitio (p. ej. «Construido con Astro…»). */
	readonly builtWithNote: string;
	readonly copyrightNotice: string;
}

/** Enlace de la navegación principal (normalmente un ancla a una sección). */
export type NavigationLink = Link;
