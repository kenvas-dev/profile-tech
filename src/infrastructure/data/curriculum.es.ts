/**
 * CV en español, redactado para reclutadores y sistemas ATS. Es independiente
 * del contenido de la web (`portfolio.es.ts`); los hechos comunes se importan
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

export const curriculumEs: Curriculum = {
	identity: IDENTITY,
	headline: "Senior Frontend Developer · Full Stack",
	location: "Quezaltepeque, El Salvador (GMT-6) · Disponible en remoto",
	contacts: CURRICULUM_CONTACTS,

	summary:
		"Frontend Lead con 5 años de experiencia construyendo aplicaciones web con Angular, React y TypeScript, sobre una base full stack en Node.js. Desde 2022 lidero el frontend del CRM corporativo de una entidad financiera en El Salvador (Angular 21 en un monorepo Nx): defino la arquitectura, los estándares de código y la integración con servicios Spring Boot, y co-creé la librería de UI propia del equipo. He participado en 7 proyectos junto a 3 equipos de diseño para clientes de Chile y El Salvador.",

	experience: [
		{
			companyName: "Entidad financiera (confidencial)",
			jobTitle: "Frontend Lead",
			workLocation: "El Salvador",
			startDate: POSITION_DATES.financialInstitution.start,
			endDate: POSITION_DATES.financialInstitution.end,
			// TODO(métricas): nº de usuarios/áreas del CRM y algún resultado
			// medible (tiempos de entrega, rendimiento, bugs).
			highlights: [
				"Lidero el frontend del CRM corporativo de gestión de clientes, construido con Angular 21 en un monorepo Nx, dentro de un equipo de 10 desarrolladores (4 frontend y 6 backend).",
				"Co-creé la librería de UI propia del equipo para Angular: utilidades de estilos tipo Tailwind/PrimeFlex y componentes tipo Angular Material, base visual de toda la plataforma.",
				"Diseñé una arquitectura frontend modular que permite incorporar nuevos flujos de negocio sin comprometer la mantenibilidad.",
				"Definí los estándares de calidad del equipo: componentes reutilizables, tipado estricto y revisiones de código obligatorias.",
				"Coordino la integración con los servicios backend en Spring Boot y con los equipos de diseño para entregar funcionalidades críticas de forma continua.",
			],
			technologies: POSITION_TECHNOLOGIES.financialInstitution,
		},
		{
			companyName: "Freelance",
			jobTitle: "Full Stack Developer",
			workLocation: "El Salvador · Remoto",
			startDate: POSITION_DATES.freelance.start,
			endDate: POSITION_DATES.freelance.end,
			// TODO(métricas): nº de sitios entregados y, si hay, puntuación Lighthouse.
			highlights: [
				"Diseño y desarrollo sitios web a medida de principio a fin, desde la arquitectura del frontend hasta los servicios backend.",
				"Construí portafolios con galerías de imágenes para fotógrafos, blogs y landing pages responsive para iglesias y organizaciones, con contenido fácil de actualizar.",
			],
			technologies: POSITION_TECHNOLOGIES.freelance,
		},
		{
			companyName: "Waresoft",
			jobTitle: "Full Stack Developer / Frontend Lead",
			workLocation: "Chile y El Salvador",
			startDate: POSITION_DATES.waresoft.start,
			endDate: POSITION_DATES.waresoft.end,
			highlights: [
				"Ascendí de desarrollador full stack a Frontend Lead, liderando el frontend de Diparvel con Angular 14.",
				"Sherwin-Williams: desarrollé con Angular 12 el panel administrativo y el sitio principal, y apoyé la versión móvil en Flutter.",
				"GIMH: construí de extremo a extremo una aplicación de arrendamientos con React, Node.js, PostgreSQL y CouchDB.",
				"Mundo Terrenos: implementé mapas interactivos con geolocalización de propiedades para una plataforma inmobiliaria.",
			],
			technologies: POSITION_TECHNOLOGIES.waresoft,
		},
	],

	skillGroups: [
		{ title: "Frontend", skills: SKILLS.frontend },
		{ title: "Backend y datos", skills: SKILLS.backend },
		{ title: "Móvil", skills: SKILLS.mobile },
		{
			title: "Arquitectura y calidad",
			skills: [
				"Arquitectura hexagonal",
				"Clean code",
				"DDD",
				"TDD",
				"Testing",
				"CI/CD",
				"Design systems",
				"Accesibilidad web",
				"Rendimiento web",
			],
		},
	],

	projects: [
		{
			title: "Portfolio y CV bilingüe",
			description:
				"Sitio personal en español e inglés con arquitectura hexagonal, SEO técnico y datos estructurados, y CV en PDF generado desde la misma fuente de contenido.",
			technologies: PORTFOLIO_PROJECT_TECHNOLOGIES,
			links: PORTFOLIO_PROJECT_LINKS,
		},
	],

	education: [
		{
			...CREDENTIAL_FACTS.utec,
			credentialType: "Grado universitario",
			title: "Licenciatura en Informática",
		},
		{
			...CREDENTIAL_FACTS.kodigo,
			credentialType: "Certificación",
			title: "Desarrollo Full Stack",
		},
	],

	languages: [
		{ name: "Español", proficiency: "Nativo" },
		// TODO(métricas): precisar el nivel (B2, C1…) o la certificación.
		{ name: "Inglés", proficiency: "Profesional" },
	],

	labels: {
		summary: "Resumen profesional",
		experience: "Experiencia profesional",
		skills: "Habilidades técnicas",
		projects: "Proyectos",
		educationAndLanguages: "Formación e idiomas",
		languages: "Idiomas",
		present: "Presente",
		technologies: "Tecnologías",
	},
};
