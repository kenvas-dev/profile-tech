/**
 * Utilidades de formato de fechas para la presentación.
 * @packageDocumentation
 */
import type { Period } from "@domain/entities/experience";

/**
 * Da formato a un periodo laboral: `2021 — 2022` o `2024 — AHORA`.
 * @param period Años de inicio y fin (`null` si sigue activo).
 * @param presentLabel Texto para un puesto en curso (p. ej. «AHORA»).
 */
export const formatPeriod = (
	{ startYear, endYear }: Period,
	presentLabel: string,
): string => `${startYear} — ${endYear ?? presentLabel}`;
