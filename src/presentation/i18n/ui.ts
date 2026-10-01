/**
 * Textos de interfaz que no forman parte del contenido del portfolio
 * (etiquetas de accesibilidad, navegación, textos del CV).
 * El contenido traducible vive en `src/infrastructure/data/portfolio.*.ts`.
 * @packageDocumentation
 */
import { DEFAULT_LOCALE, isLocale, type Locale } from "@domain/entities/locale";

/** Textos del CV en PDF que no existen en el contenido del portfolio. */
export interface CvTranslations {
	/** Título del documento (pestaña del navegador y metadatos del PDF). */
	readonly documentTitle: (fullName: string) => string;
	readonly languagesHeading: string;
	readonly spokenLanguages: string;
}

/** Textos de interfaz de un idioma. */
export interface UiTranslations {
	/** `aria-label` de la navegación principal. */
	readonly mainNavigationLabel: string;
	/** `aria-label` del selector de idioma. */
	readonly languageSwitcherLabel: string;
	/** Nombre de cada idioma, escrito en el idioma actual. */
	readonly languageNames: Record<Locale, string>;
	/** `aria-label` del panel de fortalezas. */
	readonly strengthsPanelLabel: string;
	/** `aria-label` de la lista de canales de contacto. */
	readonly contactChannelsLabel: string;
	/** `aria-label` del editor de código animado. */
	readonly sourceCodeLabel: string;
	/** Texto del botón flotante «volver arriba». */
	readonly backToTopLabel: string;
	/** Texto alternativo de la ilustración de un proyecto. */
	readonly projectIllustrationAlt: (projectTitle: string) => string;
	readonly cv: CvTranslations;
}

const UI_TRANSLATIONS: Record<Locale, UiTranslations> = {
	es: {
		mainNavigationLabel: "Principal",
		languageSwitcherLabel: "Idioma",
		languageNames: { es: "Español", en: "Inglés" },
		strengthsPanelLabel: "Fortalezas",
		contactChannelsLabel: "Canales de contacto",
		sourceCodeLabel: "Fragmentos del código fuente de este sitio",
		backToTopLabel: "Volver arriba",
		projectIllustrationAlt: (projectTitle) =>
			`Ilustración del proyecto ${projectTitle}`,
		cv: {
			documentTitle: (fullName) => `${fullName} — Currículum`,
			languagesHeading: "Idiomas",
			spokenLanguages: "Español · Inglés",
		},
	},
	en: {
		mainNavigationLabel: "Main",
		languageSwitcherLabel: "Language",
		languageNames: { es: "Spanish", en: "English" },
		strengthsPanelLabel: "Strengths",
		contactChannelsLabel: "Contact channels",
		sourceCodeLabel: "Snippets from this site's source code",
		backToTopLabel: "Back to top",
		projectIllustrationAlt: (projectTitle) =>
			`Illustration of the ${projectTitle} project`,
		cv: {
			documentTitle: (fullName) => `${fullName} — Resume`,
			languagesHeading: "Languages",
			spokenLanguages: "Spanish · English",
		},
	},
};

/**
 * Normaliza un código de idioma arbitrario (p. ej. `Astro.currentLocale`, que
 * puede ser `undefined`) a un idioma soportado.
 */
export const resolveLocale = (localeCode: string | undefined): Locale =>
	isLocale(localeCode) ? localeCode : DEFAULT_LOCALE;

/** Devuelve los textos de interfaz de un idioma soportado. */
export const getUiTranslations = (locale: Locale): UiTranslations =>
	UI_TRANSLATIONS[locale];

/**
 * Atajo para componentes Astro: `getUiTranslationsFor(Astro.currentLocale)`.
 * @param localeCode Idioma de la página; si no es válido se usa el predeterminado.
 */
export const getUiTranslationsFor = (
	localeCode: string | undefined,
): UiTranslations => getUiTranslations(resolveLocale(localeCode));
