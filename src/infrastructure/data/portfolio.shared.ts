/**
 * Hechos del portfolio que no dependen del idioma: fuente única para
 * `portfolio.es.ts` y `portfolio.en.ts`. Cambiar un dato aquí lo actualiza en
 * todas las versiones (y en el CV en PDF tras `npm run cv:pdf`).
 * @packageDocumentation
 */
import type { ContactChannel } from "@domain/entities/contact";
import type { Credential } from "@domain/entities/education";
import type { Period } from "@domain/entities/experience";
import type {
	HeroHeadline,
	Identity,
	Portrait,
} from "@domain/entities/identity";
import type { Locale } from "@domain/entities/locale";
import type { Project } from "@domain/entities/projects";

/** Datos personales de la persona. */
export const IDENTITY: Identity = {
	fullName: "Kevin Aquino",
	brandMark: "{UN1T7D}",
	username: "kevin.aquino",
	address: {
		locality: "Quezaltepeque",
		region: "La Libertad",
		countryCode: "SV",
	},
};

export const CONTACT_EMAIL = "kevin.aquino.vasquez@gmail.com";

/** URLs públicas de los perfiles profesionales. */
export const PROFILE_URLS = {
	linkedin: "https://www.linkedin.com/in/kevin-v%C3%A1squez-46a0701b4",
	github: "https://github.com/kenvas-dev",
	map: "https://maps.google.com/?q=Quezaltepeque,+El+Salvador",
} as const;

/** CV en PDF por idioma (generado con `npm run cv:pdf`). */
export const CV_URLS: Record<Locale, string> = {
	es: "/cv/kevin-aquino-cv-es.pdf",
	en: "/cv/kevin-aquino-cv-en.pdf",
};

/** Imagen social (Open Graph / Twitter) por idioma. */
export const SOCIAL_IMAGE_URLS: Record<Locale, string> = {
	es: "/og/og-es.jpg",
	en: "/og/og-en.jpg",
};

/** Anclas de cada sección (coinciden con los `id` de la presentación). */
export const SECTION_ANCHORS = {
	profile: "#perfil",
	stack: "#stack",
	experience: "#experiencia",
	projects: "#proyectos",
	contact: "#contacto",
} as const;

/** Titular del hero: los cargos se mantienen en inglés en ambos idiomas. */
export const HERO_HEADLINE: HeroHeadline = {
	primaryRole: "Senior Frontend Developer",
	secondaryRole: "UI engineer.",
};

export const PORTRAIT_IMAGE_SRC = "/images/retrato.jpg";

/** Metadatos tipo HUD del retrato (el texto alternativo se traduce aparte). */
export const PORTRAIT_HUD: Omit<Portrait, "image"> = {
	badgeCode: "PROFILE_001",
	locationLabel: "BASE",
	locationName: "Quezaltepeque, SV",
	coordinates: "13.8350° N · 089.2720° W",
};

/** Tecnologías con nombre propio (no se traducen). */
export const TECH_STACK = {
	frameworksAndLanguages: [
		"TypeScript",
		"JavaScript",
		"React",
		"Angular",
		"Astro",
		"Node.js",
		"Express.js",
		"NestJS",
		"Dart",
		"Flutter",
	],
	uiAndStyling: [
		"SCSS",
		"BEM",
		"Tailwind CSS",
		"Material Angular",
		"PrimeNG",
		"Bulma",
		"Bootstrap",
		"Design systems",
	],
} as const satisfies Record<string, readonly string[]>;

/** Canales de contacto con nombre propio (el de ubicación se traduce aparte). */
export const CONTACT_CHANNELS = {
	linkedin: {
		iconName: "linkedin",
		platformLabel: "LinkedIn",
		displayValue: "/in/kevin-vásquez",
		href: PROFILE_URLS.linkedin,
	},
	github: {
		iconName: "github",
		platformLabel: "GitHub",
		displayValue: "@kenvas-dev",
		href: PROFILE_URLS.github,
	},
} as const satisfies Record<string, ContactChannel>;

/** Ubicación del canal «Base / Location» (la etiqueta se traduce aparte). */
export const LOCATION_CHANNEL: Omit<ContactChannel, "platformLabel"> = {
	iconName: "map-pin",
	displayValue: "Quezaltepeque, El Salvador",
	href: PROFILE_URLS.map,
};

/** Fechas de cada puesto. */
export const POSITION_PERIODS = {
	freelance: { startYear: 2024, endYear: null },
	financialInstitution: { startYear: 2022, endYear: null },
	waresoft: { startYear: 2021, endYear: 2022 },
} as const satisfies Record<string, Period>;

/** Datos fijos de cada credencial (tipo y título se traducen aparte). */
export const CREDENTIAL_FACTS = {
	kodigo: { completionYear: 2025, institutionName: "Kodigo · El Salvador" },
	utec: {
		completionYear: 2024,
		institutionName: "Universidad Tecnológica de El Salvador (UTEC)",
	},
} as const satisfies Record<
	string,
	Pick<Credential, "completionYear" | "institutionName">
>;

/** Metadatos de cada proyecto que no dependen del idioma. */
export const PROJECT_METADATA = {
	crm: {
		caseStudyCode: "CASE_STUDY_01",
		productKind: "crm",
		accentTone: "primary",
		isFeatured: true,
	},
	mundoTerrenos: {
		caseStudyCode: "CASE_STUDY_02",
		productKind: "real-estate",
		accentTone: "secondary",
		isFeatured: false,
	},
	sherwinWilliams: {
		caseStudyCode: "CASE_STUDY_03",
		productKind: "admin-panel",
		accentTone: "tertiary",
		isFeatured: false,
	},
	gimh: {
		caseStudyCode: "CASE_STUDY_04",
		productKind: "rentals",
		accentTone: "primary",
		isFeatured: false,
	},
	customWebsites: {
		caseStudyCode: "CASE_STUDY_05",
		productKind: "websites",
		accentTone: "secondary",
		isFeatured: false,
	},
} as const satisfies Record<
	string,
	Pick<Project, "caseStudyCode" | "productKind" | "accentTone" | "isFeatured">
>;
