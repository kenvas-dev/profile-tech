/**
 * Idiomas soportados.
 * @packageDocumentation
 */

/**
 * Idiomas en los que se publica el portfolio.
 * Deben coincidir con `i18n.locales` de `astro.config.mjs`.
 */
export const LOCALES = ["es", "en"] as const;

/** Código de idioma soportado. */
export type Locale = (typeof LOCALES)[number];

/** Idioma servido en la raíz del sitio (`/`). */
export const DEFAULT_LOCALE: Locale = "es";

/** Type guard: indica si un valor arbitrario es un idioma soportado. */
export const isLocale = (value: unknown): value is Locale =>
	LOCALES.includes(value as Locale);
