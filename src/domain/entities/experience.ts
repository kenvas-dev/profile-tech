/**
 * Trayectoria profesional.
 * @packageDocumentation
 */
import type { SectionIntro } from "./shared";

/** Intervalo de años de un puesto. */
export interface Period {
	readonly startYear: number;
	/** Año de fin; `null` indica que el puesto sigue activo. */
	readonly endYear: number | null;
}

/** Puesto de trabajo. */
export interface Position {
	readonly companyName: string;
	readonly jobTitle: string;
	/** Ubicación o modalidad (p. ej. «El Salvador · Remoto»). */
	readonly workLocation: string;
	readonly period: Period;
	/** Resumen de responsabilidades. */
	readonly summary: string;
	/** Logros o proyectos destacados del puesto. */
	readonly achievements: readonly string[];
}

/** Sección de experiencia. */
export interface Experience {
	readonly intro: SectionIntro;
	/** Etiqueta para los puestos en curso (p. ej. «ACTUAL»). */
	readonly currentPositionLabel: string;
	/** Texto para la fecha de fin de un puesto en curso (p. ej. «AHORA»). */
	readonly presentDateLabel: string;
	/** Puestos; la aplicación los ordena (en curso primero, luego por año de inicio). */
	readonly positions: readonly Position[];
}

/** Indica si el puesto sigue activo (no tiene año de fin). */
export const isCurrentPosition = (position: Position): boolean =>
	position.period.endYear === null;
