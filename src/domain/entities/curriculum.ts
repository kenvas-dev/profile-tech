/**
 * Currículum (CV) para procesos de selección: un documento independiente del
 * portfolio web, redactado para reclutadores y sistemas ATS.
 * @packageDocumentation
 */
import type { Credential } from "./education";
import type { Identity } from "./identity";

/** Fecha con precisión de año y, si se conoce, de mes. */
export interface PartialDate {
	readonly year: number;
	/** Mes de 1 (enero) a 12 (diciembre); se omite si no se conoce. */
	readonly month?: number;
}

/** Canal de contacto tal como se imprime en el CV. */
export interface CurriculumContact {
	/** Texto visible y legible en papel (p. ej. `github.com/kenvas-dev`). */
	readonly displayValue: string;
	/** Enlace del canal (`mailto:`, URL del perfil…). */
	readonly href: string;
}

/** Puesto de trabajo redactado como logros. */
export interface CurriculumPosition {
	readonly companyName: string;
	readonly jobTitle: string;
	/** Ubicación o modalidad (p. ej. «El Salvador · Remoto»). */
	readonly workLocation: string;
	readonly startDate: PartialDate;
	/** Fecha de fin; `null` indica que el puesto sigue activo. */
	readonly endDate: PartialDate | null;
	/** Logros en formato acción → resultado, del más relevante al menos. */
	readonly highlights: readonly string[];
	/** Tecnologías usadas en el puesto; vacío si no aplica. */
	readonly technologies: readonly string[];
}

/** Grupo de habilidades técnicas (p. ej. «Frontend»). */
export interface CurriculumSkillGroup {
	readonly title: string;
	readonly skills: readonly string[];
}

/** Proyecto propio o público que respalda el perfil. */
export interface CurriculumProject {
	readonly title: string;
	readonly description: string;
	readonly technologies: readonly string[];
	/** Enlaces públicos del proyecto (sitio, repositorio). */
	readonly links: readonly CurriculumContact[];
}

/** Idioma con su nivel de dominio. */
export interface SpokenLanguage {
	readonly name: string;
	/** Nivel (p. ej. «Nativo», «Profesional (B2)»). */
	readonly proficiency: string;
}

/** Títulos de sección y etiquetas del documento en un idioma. */
export interface CurriculumLabels {
	readonly summary: string;
	readonly experience: string;
	readonly skills: string;
	readonly projects: string;
	readonly education: string;
	readonly languages: string;
	/** Fin de un puesto en curso (p. ej. «Presente»). */
	readonly present: string;
	/** Rótulo de la línea de tecnologías de cada puesto. */
	readonly technologies: string;
}

/** Contenido completo del CV en un idioma. */
export interface Curriculum {
	readonly identity: Identity;
	/** Cargo objetivo bajo el nombre (p. ej. «Senior Frontend Developer»). */
	readonly headline: string;
	/** Ubicación, zona horaria y modalidad en una línea. */
	readonly location: string;
	readonly contacts: readonly CurriculumContact[];
	/** Resumen profesional de 3–4 líneas. */
	readonly summary: string;
	/** Puestos en el orden en que se leen: el más relevante primero. */
	readonly experience: readonly CurriculumPosition[];
	readonly skillGroups: readonly CurriculumSkillGroup[];
	readonly projects: readonly CurriculumProject[];
	/** Formación; la aplicación la ordena de la más reciente a la más antigua. */
	readonly education: readonly Credential[];
	readonly languages: readonly SpokenLanguage[];
	readonly labels: CurriculumLabels;
}

/** Indica si el puesto sigue activo (no tiene fecha de fin). */
export const isOngoingPosition = (position: CurriculumPosition): boolean =>
	position.endDate === null;
