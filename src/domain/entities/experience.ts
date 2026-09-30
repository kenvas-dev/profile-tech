import type { SectionIntro } from "./shared";

export interface Period {
	readonly startYear: number;
	/** `null` indica que el puesto sigue activo. */
	readonly endYear: number | null;
}

export interface Position {
	readonly company: string;
	readonly role: string;
	readonly location: string;
	readonly period: Period;
	readonly summary: string;
	readonly achievements: readonly string[];
}

export interface Experience {
	readonly intro: SectionIntro;
	readonly currentLabel: string;
	readonly presentLabel: string;
	readonly positions: readonly Position[];
}

export const isCurrentPosition = (position: Position): boolean =>
	position.period.endYear === null;
