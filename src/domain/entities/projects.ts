/**
 * Proyectos y casos de estudio.
 * @packageDocumentation
 */
import type { AccentTone, Image, Link, Metric, SectionIntro } from "./shared";

/** Tipo de producto: la presentación lo usa para ilustrar el proyecto cuando no hay captura. */
export type ProjectKind =
	"crm" | "real-estate" | "rentals" | "admin-panel" | "websites";

/** Proyecto o caso de estudio. */
export interface Project {
	/** Código decorativo del caso (p. ej. `CASE_STUDY_01`). */
	readonly caseStudyCode: string;
	readonly productKind: ProjectKind;
	/** Sector, contexto y fecha (p. ej. «Sector financiero · CRM · 2022 – hoy»). */
	readonly category: string;
	readonly title: string;
	readonly summary: string;
	/** Captura real del proyecto; si no existe se muestra una ilustración. */
	readonly preview?: Image;
	readonly accentTone: AccentTone;
	readonly technologies: readonly string[];
	/** Resultados o datos verificables del proyecto. */
	readonly results: readonly Metric[];
	/** Enlace al caso de estudio o al sitio publicado, si existe. */
	readonly link?: Link;
	/** Proyecto principal de la sección; debe existir exactamente uno. */
	readonly isFeatured: boolean;
}

/** Sección de proyectos. */
export interface Projects {
	readonly intro: SectionIntro;
	readonly items: readonly Project[];
}
