import type { Period } from "@domain/entities/experience";

export const formatPeriod = (
	{ startYear, endYear }: Period,
	presentLabel: string,
): string => `${startYear} — ${endYear ?? presentLabel}`;
