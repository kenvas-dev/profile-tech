/**
 * Metadatos de posicionamiento.
 * @packageDocumentation
 */
import type { Image } from "./shared";

/** Metadatos de posicionamiento de la página, por idioma. */
export interface Seo {
	/** Título del documento y de las tarjetas sociales (≈ 50-60 caracteres). */
	readonly title: string;
	/** Meta descripción (≈ 140-160 caracteres). */
	readonly description: string;
	/** Palabras clave de la meta etiqueta `keywords`. */
	readonly keywords: readonly string[];
	/** Cargos con los que se quiere ser encontrado (datos estructurados `jobTitle`). */
	readonly jobTitles: readonly string[];
	/** Áreas de conocimiento (datos estructurados `knowsAbout`). */
	readonly expertise: readonly string[];
	/** Imagen para Open Graph / Twitter (1200×630). */
	readonly socialImage: Image;
}
