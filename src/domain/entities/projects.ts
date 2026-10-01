import type { AccentTone, Image, Link, Metric, SectionIntro } from "./shared";

/** Tipo de producto: la presentación lo usa para ilustrar el proyecto cuando no hay captura. */
export type ProjectKind =
	"crm" | "real-estate" | "rentals" | "admin-panel" | "websites";

export interface Project {
	readonly code: string;
	readonly kind: ProjectKind;
	readonly category: string;
	readonly title: string;
	readonly summary: string;
	/** Captura real del proyecto; si no existe se muestra una ilustración. */
	readonly preview?: Image;
	readonly tone: AccentTone;
	readonly technologies: readonly string[];
	readonly results: readonly Metric[];
	/** Enlace al caso de estudio o al sitio publicado, si existe. */
	readonly link?: Link;
	readonly featured: boolean;
}

export interface Projects {
	readonly intro: SectionIntro;
	readonly items: readonly Project[];
}
