/**
 * Hechos del CV que no dependen del idioma: fuente única para
 * `curriculum.es.ts` y `curriculum.en.ts`. Reutiliza los datos del portfolio
 * (`portfolio.shared.ts`) para que web y CV nunca se contradigan.
 * @packageDocumentation
 */
import type {
	CurriculumContact,
	PartialDate,
} from "@domain/entities/curriculum";
import { CONTACT_EMAIL, PROFILE_URLS } from "./portfolio.shared";

/**
 * Convierte una URL en texto legible para papel: sin protocolo, `www.` ni
 * barra final, y con los caracteres acentuados decodificados.
 */
const toDisplayUrl = (url: string): string =>
	decodeURI(url)
		.replace(/^https?:\/\/(www\.)?/, "")
		.replace(/\/$/, "");

/** URL pública del sitio (`site` de `astro.config.mjs`). */
const SITE_URL = import.meta.env.SITE;

/** Repositorio público de este portfolio. */
const SOURCE_REPOSITORY_URL = "https://github.com/kenvas-dev/profile-tech";

/** Canales de contacto en el orden en que los lee un reclutador. */
export const CURRICULUM_CONTACTS: readonly CurriculumContact[] = [
	{ displayValue: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
	{
		displayValue: toDisplayUrl(PROFILE_URLS.linkedin),
		href: PROFILE_URLS.linkedin,
	},
	{
		displayValue: toDisplayUrl(PROFILE_URLS.github),
		href: PROFILE_URLS.github,
	},
	{ displayValue: toDisplayUrl(SITE_URL), href: SITE_URL },
];

/** Enlaces del proyecto «portfolio personal». */
export const PORTFOLIO_PROJECT_LINKS: readonly CurriculumContact[] = [
	{ displayValue: toDisplayUrl(SITE_URL), href: SITE_URL },
	{
		displayValue: toDisplayUrl(SOURCE_REPOSITORY_URL),
		href: SOURCE_REPOSITORY_URL,
	},
];

/** Fechas de cada puesto (el mes solo cuando se conoce). */
export const POSITION_DATES = {
	financialInstitution: { start: { year: 2022, month: 10 }, end: null },
	freelance: { start: { year: 2024 }, end: null },
	waresoft: { start: { year: 2021 }, end: { year: 2022, month: 10 } },
} as const satisfies Record<
	string,
	{ start: PartialDate; end: PartialDate | null }
>;

/** Tecnologías con nombre propio de cada puesto (no se traducen). */
export const POSITION_TECHNOLOGIES = {
	financialInstitution: [
		"Angular 21",
		"Nx (monorepo)",
		"TypeScript",
		"Spring Boot (APIs)",
	],
	freelance: ["Angular 14+", "TypeScript", "Node.js", "SCSS"],
	waresoft: [
		"Angular 12/14",
		"React",
		"TypeScript",
		"Node.js",
		"PostgreSQL",
		"CouchDB",
		"Flutter",
	],
} as const satisfies Record<string, readonly string[]>;

/** Tecnologías del portfolio personal. */
export const PORTFOLIO_PROJECT_TECHNOLOGIES = [
	"Astro",
	"TypeScript",
	"SCSS / BEM",
	"Stylelint",
	"Prettier",
	"Husky",
] as const;

/** Habilidades con nombre propio, agrupadas (los títulos se traducen aparte). */
export const SKILLS = {
	frontend: [
		"Angular",
		"React",
		"TypeScript",
		"Nx",
		"JavaScript",
		"Astro",
		"HTML5",
		"SCSS / BEM",
		"Tailwind CSS",
		"Angular Material",
		"PrimeNG",
	],
	backend: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "CouchDB"],
	mobile: ["Flutter", "Dart"],
} as const satisfies Record<string, readonly string[]>;
