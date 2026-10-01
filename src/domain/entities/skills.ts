/**
 * Stack técnico y fortalezas.
 * @packageDocumentation
 */
import type { IconName, SectionIntro } from "./shared";

/** Grupo de tecnologías relacionadas. */
export interface SkillGroup {
	/** Código ordinal decorativo (p. ej. `S.01`). */
	readonly sequenceCode: string;
	readonly title: string;
	readonly description: string;
	readonly technologies: readonly string[];
}

/** Fortaleza profesional. */
export interface Strength {
	readonly iconName: IconName;
	readonly title: string;
	readonly description: string;
}

/** Panel de fortalezas con estética de terminal. */
export interface StrengthsPanel {
	/** Rótulo del panel (p. ej. `CORE_STRENGTHS`). */
	readonly sectionLabel: string;
	/** Versión decorativa (p. ej. `v.08.26`). */
	readonly versionTag: string;
	readonly items: readonly Strength[];
}

/** Sección de stack y conocimiento. */
export interface Skills {
	readonly intro: SectionIntro;
	readonly skillGroups: readonly SkillGroup[];
	readonly strengths: StrengthsPanel;
}
