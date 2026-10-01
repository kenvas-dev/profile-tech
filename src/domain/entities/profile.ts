/**
 * Resumen profesional.
 * @packageDocumentation
 */
import type { Metric } from "./shared";

/** Sección de perfil. */
export interface Profile {
	readonly sectionLabel: string;
	readonly title: string;
	/** Presentación en primera persona (párrafo principal). */
	readonly biography: string;
	/** Especialidades y forma de trabajar (párrafo secundario). */
	readonly specialization: string;
	/** Cifras destacadas (años de experiencia, proyectos…). */
	readonly metrics: readonly Metric[];
}
