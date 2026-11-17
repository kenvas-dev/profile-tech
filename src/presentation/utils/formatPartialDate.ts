/**
 * Formato de fechas del CV, en el estilo que reconocen los sistemas ATS
 * (`Oct 2022 – Presente`).
 * @packageDocumentation
 */
import type { PartialDate } from "@domain/entities/curriculum";
import type { Locale } from "@domain/entities/locale";

/** Separador de rangos de fechas (raya corta, como en tipografía editorial). */
const RANGE_SEPARATOR = " – ";

/** Nombre corto del mes, capitalizado y sin punto: «Oct», «Sept», «Jan». */
const formatShortMonth = (month: number, locale: Locale): string => {
	const monthName = new Intl.DateTimeFormat(locale, {
		month: "short",
		timeZone: "UTC",
	})
		.format(new Date(Date.UTC(2000, month - 1, 1)))
		.replace(".", "");
	return monthName.charAt(0).toUpperCase() + monthName.slice(1);
};

/**
 * Da formato a una fecha parcial: `Oct 2022`, o solo `2021` si no hay mes.
 * @param date Año y, opcionalmente, mes (1–12).
 * @param locale Idioma del nombre del mes.
 */
export const formatPartialDate = (date: PartialDate, locale: Locale): string =>
	date.month === undefined
		? String(date.year)
		: `${formatShortMonth(date.month, locale)} ${date.year}`;

/**
 * Da formato a un rango: `Oct 2022 – Presente` o `2021 – Oct 2022`.
 * @param startDate Inicio del rango.
 * @param endDate Fin del rango; `null` si sigue en curso.
 * @param locale Idioma de los meses.
 * @param presentLabel Texto para un rango en curso (p. ej. «Presente»).
 */
export const formatDateRange = (
	startDate: PartialDate,
	endDate: PartialDate | null,
	locale: Locale,
	presentLabel: string,
): string =>
	formatPartialDate(startDate, locale) +
	RANGE_SEPARATOR +
	(endDate ? formatPartialDate(endDate, locale) : presentLabel);
