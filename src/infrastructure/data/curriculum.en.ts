/**
 * CV en inglés, redactado para reclutadores y sistemas ATS. Es independiente
 * del contenido de la web (`portfolio.en.ts`); los hechos comunes se importan
 * de `curriculum.shared.ts` y `portfolio.shared.ts`.
 *
 * Pautas de redacción: verbo de acción + qué + resultado; sin adornos ni
 * cifras que no se puedan defender en una entrevista.
 * @packageDocumentation
 */
import type { Curriculum } from "@domain/entities/curriculum";
import {
	CURRICULUM_CONTACTS,
	PORTFOLIO_PROJECT_LINKS,
	PORTFOLIO_PROJECT_TECHNOLOGIES,
	POSITION_DATES,
	POSITION_TECHNOLOGIES,
	SKILLS,
} from "./curriculum.shared";
import { CREDENTIAL_FACTS, IDENTITY } from "./portfolio.shared";

export const curriculumEn: Curriculum = {
	identity: IDENTITY,
	headline: "Senior Frontend Developer · Full Stack",
	location: "Quezaltepeque, El Salvador (GMT-6) · Open to remote",
	contacts: CURRICULUM_CONTACTS,

	summary:
		"Frontend Lead with 5 years of experience building web applications with Angular, React and TypeScript, on a full stack foundation in Node.js. Since 2022 I have led frontend development of the corporate CRM at a financial institution in El Salvador, owning the architecture, code standards and integration with internal services. I have delivered 7 projects alongside 3 design teams for clients in Chile and El Salvador, focusing on maintainable architecture, performance and accessibility.",

	experience: [
		{
			companyName: "Financial institution (confidential)",
			jobTitle: "Frontend Lead",
			workLocation: "El Salvador",
			startDate: POSITION_DATES.financialInstitution.start,
			endDate: POSITION_DATES.financialInstitution.end,
			// TODO(metrics): CRM users/business units, team size and a
			// measurable outcome (delivery time, performance, defects).
			highlights: [
				"Lead frontend development of the corporate CRM that orchestrates the institution's core customer management processes.",
				"Designed a modular frontend architecture that lets the team add new business workflows without compromising maintainability.",
				"Set the team's quality standards: reusable components, strict typing and mandatory code reviews.",
				"Coordinate integration with backend services and design teams to ship business-critical features continuously.",
			],
			technologies: POSITION_TECHNOLOGIES.financialInstitution,
		},
		{
			companyName: "Freelance",
			jobTitle: "Full Stack Developer",
			workLocation: "El Salvador · Remote",
			startDate: POSITION_DATES.freelance.start,
			endDate: POSITION_DATES.freelance.end,
			// TODO(metrics): number of sites delivered and Lighthouse scores, if any.
			highlights: [
				"Design and build custom websites end to end, from frontend architecture to backend services.",
				"Built photography portfolios centered on image galleries, plus responsive blogs and landing pages with easy-to-update content.",
				"Developed landing pages for churches and organizations featuring activity schedules and contact channels.",
			],
			technologies: POSITION_TECHNOLOGIES.freelance,
		},
		{
			companyName: "Waresoft",
			jobTitle: "Full Stack Developer / Frontend Lead",
			workLocation: "Chile and El Salvador",
			startDate: POSITION_DATES.waresoft.start,
			endDate: POSITION_DATES.waresoft.end,
			highlights: [
				"Promoted from full stack developer to Frontend Lead, leading frontend development of Diparvel with Angular 14.",
				"Sherwin-Williams: built the admin panel and main website with Angular 12 and supported the Flutter mobile app.",
				"GIMH: built a rental management application end to end with React, Node.js, PostgreSQL and CouchDB.",
				"Mundo Terrenos: implemented interactive maps with property geolocation for a real estate platform.",
			],
			technologies: POSITION_TECHNOLOGIES.waresoft,
		},
	],

	skillGroups: [
		{ title: "Frontend", skills: SKILLS.frontend },
		{ title: "Backend & data", skills: SKILLS.backend },
		{ title: "Mobile", skills: SKILLS.mobile },
		{
			title: "Architecture & quality",
			skills: [
				"Hexagonal architecture",
				"Clean code",
				"DDD",
				"TDD",
				"Testing",
				"CI/CD",
				"Design systems",
				"Web accessibility",
				"Web performance",
			],
		},
	],

	projects: [
		{
			title: "Bilingual portfolio & resume",
			description:
				"Personal website in Spanish and English built with hexagonal architecture, technical SEO and structured data, with a PDF resume generated from the same content source.",
			technologies: PORTFOLIO_PROJECT_TECHNOLOGIES,
			links: PORTFOLIO_PROJECT_LINKS,
		},
	],

	education: [
		{
			...CREDENTIAL_FACTS.utec,
			credentialType: "Bachelor's degree",
			title: "Bachelor's Degree in Computer Science",
		},
		{
			...CREDENTIAL_FACTS.kodigo,
			credentialType: "Certification",
			title: "Full Stack Development",
		},
	],

	languages: [
		{ name: "Spanish", proficiency: "Native" },
		// TODO(metrics): specify the level (B2, C1…) or certification.
		{ name: "English", proficiency: "Professional working proficiency" },
	],

	labels: {
		summary: "Summary",
		experience: "Experience",
		skills: "Technical skills",
		projects: "Projects",
		education: "Education",
		languages: "Languages",
		present: "Present",
		technologies: "Tech",
	},
};
