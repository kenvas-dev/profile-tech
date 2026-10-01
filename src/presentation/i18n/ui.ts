import { DEFAULT_LOCALE, isLocale, type Locale } from "@domain/entities/locale";

/** Textos de interfaz (accesibilidad, navegación) que no forman parte del contenido. */
interface UiStrings {
	readonly mainNavigation: string;
	readonly languageSwitcher: string;
	readonly languageNames: Record<Locale, string>;
	readonly strengths: string;
	readonly contactChannels: string;
	readonly sourceCode: string;
	readonly backToTop: string;
	readonly projectIllustration: (projectTitle: string) => string;
}

const ui: Record<Locale, UiStrings> = {
	es: {
		mainNavigation: "Principal",
		languageSwitcher: "Idioma",
		languageNames: { es: "Español", en: "Inglés" },
		strengths: "Fortalezas",
		contactChannels: "Canales de contacto",
		sourceCode: "Fragmentos del código fuente de este sitio",
		backToTop: "Volver arriba",
		projectIllustration: (title) => `Ilustración del proyecto ${title}`,
	},
	en: {
		mainNavigation: "Main",
		languageSwitcher: "Language",
		languageNames: { es: "Spanish", en: "English" },
		strengths: "Strengths",
		contactChannels: "Contact channels",
		sourceCode: "Snippets from this site's source code",
		backToTop: "Back to top",
		projectIllustration: (title) => `Illustration of the ${title} project`,
	},
};

/** Normaliza `Astro.currentLocale` (puede ser undefined) a un idioma soportado. */
export const resolveLocale = (value: string | undefined): Locale =>
	isLocale(value) ? value : DEFAULT_LOCALE;

export const useTranslations = (locale: Locale): UiStrings => ui[locale];
