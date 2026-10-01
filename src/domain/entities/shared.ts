/**
 * Tipos básicos compartidos por todas las entidades del dominio.
 * @packageDocumentation
 */

/** Iconos que el contenido puede referenciar; la presentación decide cómo pintarlos. */
export type IconName =
	"radar" | "waypoints" | "sparkles" | "linkedin" | "github" | "map-pin";

/**
 * Tono de acento semántico de un elemento. Es independiente de la paleta:
 * la presentación lo traduce a un color concreto.
 */
export type AccentTone = "primary" | "secondary" | "tertiary";

/** Enlace navegable con su texto visible. */
export interface Link {
	/** Texto visible del enlace. */
	readonly label: string;
	/** URL absoluta, ruta del sitio o ancla (`#seccion`). */
	readonly href: string;
}

/** Imagen con su texto alternativo para accesibilidad. */
export interface Image {
	/** Ruta pública de la imagen (p. ej. `/images/retrato.jpg`). */
	readonly src: string;
	/** Descripción de la imagen para lectores de pantalla y buscadores. */
	readonly alt: string;
}

/** Dato destacado con su descripción, p. ej. `5+` · «años de experiencia». */
export interface Metric {
	/** Valor destacado tal como se muestra (`"5+"`, `"−40%"`). */
	readonly value: string;
	/** Descripción breve del valor. */
	readonly label: string;
}

/** Cabecera común de las secciones de la página. */
export interface SectionIntro {
	/** Etiqueta corta que precede al título (p. ej. «Experiencia»). */
	readonly sectionLabel: string;
	/** Titular principal de la sección. */
	readonly title: string;
	/** Texto de apoyo opcional junto al titular. */
	readonly description?: string;
}
