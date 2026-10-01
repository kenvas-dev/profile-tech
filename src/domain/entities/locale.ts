/** Idiomas en los que se publica el portfolio. */
export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const isLocale = (value: unknown): value is Locale =>
	LOCALES.includes(value as Locale);
