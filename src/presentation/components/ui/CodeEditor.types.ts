/**
 * Tipos del componente `CodeEditor`.
 * @packageDocumentation
 */

/** Archivo que muestra el editor de código animado. */
export interface CodeFile {
	/** Nombre visible en la pestaña (p. ej. `astro.config.mjs`). */
	readonly name: string;
	/** Lenguaje mostrado en la barra de estado (p. ej. `TypeScript`). */
	readonly language: string;
	/** Código fuente; se recortan los saltos de línea iniciales y finales. */
	readonly code: string;
}
