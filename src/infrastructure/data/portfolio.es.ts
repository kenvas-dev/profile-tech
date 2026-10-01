/**
 * Contenido del portfolio en español. Los datos que no dependen del idioma
 * se importan de `portfolio.shared.ts`.
 * @packageDocumentation
 */
import type { Portfolio } from "@domain/entities/portfolio";
import {
	CONTACT_CHANNELS,
	CONTACT_EMAIL,
	CREDENTIAL_FACTS,
	CV_URLS,
	HERO_HEADLINE,
	IDENTITY,
	LOCATION_CHANNEL,
	PORTRAIT_HUD,
	PORTRAIT_IMAGE_SRC,
	POSITION_PERIODS,
	PROFILE_URLS,
	PROJECT_METADATA,
	SECTION_ANCHORS,
	SOCIAL_IMAGE_URLS,
	TECH_STACK,
} from "./portfolio.shared";

export const portfolioEs: Portfolio = {
	seo: {
		title: "Kevin Aquino | Desarrollador Frontend Senior y Full Stack",
		description:
			"Desarrollador Frontend Senior y Full Stack en El Salvador con 5 años de experiencia en Angular, React, TypeScript y Node.js. Disponible para trabajo remoto.",
		keywords: [
			"Desarrollador Frontend",
			"Desarrollador Frontend Senior",
			"Desarrollador Full Stack",
			"Programador Full Stack",
			"Desarrollador Web",
			"Desarrollador Angular",
			"Desarrollador React",
			"TypeScript",
			"Node.js",
			"Astro",
			"Desarrollador en El Salvador",
			"Desarrollador remoto",
			"Kevin Aquino",
			"UN1T7D",
		],
		jobTitles: [
			"Desarrollador Frontend Senior",
			"Desarrollador Full Stack",
			"Frontend Lead",
		],
		expertise: [
			"Desarrollo Frontend",
			"Desarrollo Full Stack",
			"Angular",
			"React",
			"TypeScript",
			"JavaScript",
			"Node.js",
			"NestJS",
			"Astro",
			"Flutter",
			"SCSS",
			"Design systems",
			"Arquitectura hexagonal",
			"Accesibilidad web",
		],
		socialImage: {
			src: SOCIAL_IMAGE_URLS.es,
			alt: "Kevin Aquino — Desarrollador Frontend Senior y Full Stack",
		},
	},

	identity: IDENTITY,

	navigation: [
		{ label: "Perfil", href: SECTION_ANCHORS.profile },
		{ label: "Stack", href: SECTION_ANCHORS.stack },
		{ label: "Experiencia", href: SECTION_ANCHORS.experience },
		{ label: "Proyectos", href: SECTION_ANCHORS.projects },
		{ label: "Contacto", href: SECTION_ANCHORS.contact },
	],

	hero: {
		availabilityStatus: "Disponible para nuevos proyectos · 2026",
		tagline: "Portfolio / CV — Frontend Engineering",
		headline: HERO_HEADLINE,
		valueProposition:
			"Desarrollo interfaces web rápidas, accesibles y escalables, convirtiendo diseños en componentes reutilizables con código limpio, buena arquitectura y atención al detalle.",
		primaryAction: {
			label: "Ver proyectos",
			href: SECTION_ANCHORS.projects,
		},
		secondaryAction: { label: "Contactar", href: SECTION_ANCHORS.contact },
		professionalLinks: [
			{
				label: "LINKEDIN ↗",
				href: PROFILE_URLS.linkedin,
			},
			{ label: "GITHUB ↗", href: PROFILE_URLS.github },
			{ label: "DESCARGAR CV ↓", href: CV_URLS.es },
		],
		portrait: {
			image: {
				src: PORTRAIT_IMAGE_SRC,
				alt: "Retrato de Kevin Aquino con gafas, iluminado por luces de neón",
			},
			...PORTRAIT_HUD,
		},
	},

	profile: {
		sectionLabel: "Perfil",
		title: "Código limpio. Interfaces que escalan.",
		biography:
			"Soy Kevin Aquino, desarrollador frontend senior y full stack con 5 años de experiencia, del backend al frontend. He participado en 7 proyectos junto a 3 equipos de diseño, convirtiendo ideas en productos sólidos.",
		specialization:
			"Mi base en backend me ayuda a construir interfaces que entienden los datos y las APIs que las alimentan. Me especializo en arquitectura frontend mantenible, design systems en código, rendimiento y accesibilidad.",
		metrics: [
			{ value: "5+", label: "años en desarrollo web" },
			{ value: "7", label: "proyectos entregados" },
			{ value: "3", label: "equipos de diseño" },
			{ value: "ES / EN", label: "idiomas de trabajo" },
		],
	},

	skills: {
		intro: {
			sectionLabel: "Stack & conocimiento",
			title: "Herramientas para construir, probar y escalar.",
			description:
				"Un stack moderno centrado en TypeScript: frameworks de componentes, estilos mantenibles y calidad automatizada de principio a fin.",
		},
		skillGroups: [
			{
				sequenceCode: "S.01",
				title: "Frameworks & lenguajes",
				description:
					"Una base sólida y tipada para cualquier producto.",
				technologies: TECH_STACK.frameworksAndLanguages,
			},
			{
				sequenceCode: "S.02",
				title: "UI & estilos",
				description:
					"Interfaces consistentes, accesibles y responsive.",
				technologies: TECH_STACK.uiAndStyling,
			},
			{
				sequenceCode: "S.03",
				title: "Calidad & arquitectura",
				description: "Código que crece al ritmo del equipo.",
				technologies: [
					"Clean code",
					"Arquitectura hexagonal",
					"Testing",
					"DDD",
					"TDD",
					"CI/CD",
				],
			},
		],
		strengths: {
			sectionLabel: "CORE_STRENGTHS",
			versionTag: "v.08.26",
			items: [
				{
					iconName: "radar",
					title: "Visión de arquitectura",
					description:
						"Defino capas, contratos y dependencias antes de escribir el primer componente.",
				},
				{
					iconName: "waypoints",
					title: "Puente entre diseño y backend",
					description:
						"Mi experiencia en backend y con 3 equipos de diseño me permite unir APIs y diseños en interfaces coherentes.",
				},
				{
					iconName: "sparkles",
					title: "Detalle y rendimiento",
					description:
						"Cuido cada interacción, cada milisegundo de carga y cada criterio de accesibilidad.",
				},
			],
		},
	},

	experience: {
		intro: {
			sectionLabel: "Experiencia",
			title: "Experiencia construyendo productos que escalan.",
			description:
				"5 años recorriendo el stack completo: empecé como desarrollador full stack y hoy lidero el frontend, siempre cerca de los equipos de diseño.",
		},
		currentPositionLabel: "ACTUAL",
		presentDateLabel: "AHORA",
		positions: [
			{
				companyName: "Freelance",
				jobTitle: "Full Stack Developer",
				workLocation: "El Salvador · Remoto",
				period: POSITION_PERIODS.freelance,
				summary:
					"Diseño y desarrollo sitios web a medida para profesionales y organizaciones, desde la arquitectura del frontend hasta los servicios backend, con Angular (v14+) y Node.js.",
				achievements: [
					"Portafolios web para fotógrafos, centrados en la presentación de galerías de imágenes.",
					"Blogs y landing pages informativas con diseño responsive y contenido fácil de actualizar.",
					"Landing pages para iglesias y organizaciones, con información de actividades y canales de contacto.",
				],
			},
			{
				companyName: "Entidad financiera",
				jobTitle: "Frontend Lead",
				workLocation: "El Salvador · Desde oct. 2022",
				period: POSITION_PERIODS.financialInstitution,
				summary:
					"Lidero el desarrollo frontend del CRM corporativo de una entidad financiera en El Salvador, la plataforma que orquesta los procesos clave de gestión de clientes. Defino la arquitectura de la aplicación, los estándares de código y la integración con los servicios internos para ofrecer una experiencia consistente, segura y escalable a los equipos de negocio.",
				achievements: [
					"Diseñé una arquitectura frontend modular que permite incorporar nuevos flujos de gestión sin comprometer la mantenibilidad.",
					"Establecí estándares de calidad para el equipo: componentes reutilizables, tipado estricto y revisiones de código.",
					"Coordino la integración con servicios backend y equipos de diseño para entregar funcionalidades críticas de forma continua.",
				],
			},
			{
				companyName: "Waresoft",
				jobTitle: "Full Stack Developer → Frontend Lead",
				workLocation: "Chile y El Salvador · Hasta oct. 2022",
				period: POSITION_PERIODS.waresoft,
				summary:
					"Desarrollé aplicaciones web y móviles para clientes de Chile y El Salvador, primero como desarrollador full stack y después liderando el frontend de proyectos con Angular.",
				achievements: [
					"Mundo Terrenos: plataforma de venta de inmuebles con mapas interactivos y geolocalización de propiedades mediante marcadores.",
					"GIMH: aplicación de arrendamientos desarrollada full stack con React, Node.js, PostgreSQL y CouchDB.",
					"Sherwin-Williams: desarrollo integral con Angular 12, del panel administrativo al sitio principal, y apoyo en la versión móvil con Flutter.",
					"Diparvel: lideré el desarrollo frontend de la aplicación con Angular 14.",
				],
			},
		],
	},

	projects: {
		intro: {
			sectionLabel: "Trabajo seleccionado",
			title: "Proyectos reales, de la banca a la web a medida.",
			description:
				"Una selección de los proyectos en los que he participado: sector financiero, inmobiliario, retail y sitios a medida para profesionales y organizaciones.",
		},
		items: [
			{
				...PROJECT_METADATA.crm,
				category: "Sector financiero · CRM · 2022 – hoy",
				title: "CRM de gestión de clientes",
				summary:
					"Plataforma corporativa que orquesta las funcionalidades principales en la gestión de clientes de una entidad financiera en El Salvador. Lidero su desarrollo frontend: arquitectura, estándares de código e integración con los servicios internos.",
				technologies: [
					"Arquitectura frontend",
					"Integración de servicios",
					"Liderazgo técnico",
				],
				results: [
					{ value: "Lead", label: "desarrollo frontend" },
					{ value: "2022+", label: "en evolución continua" },
				],
			},
			{
				...PROJECT_METADATA.mundoTerrenos,
				category: "Inmobiliaria · Chile · Waresoft",
				title: "Mundo Terrenos",
				summary:
					"Plataforma de venta de inmuebles con mapas interactivos y marcadores para ubicar cada propiedad.",
				technologies: ["Mapas", "Geolocalización"],
				results: [{ value: "Mapas", label: "búsqueda por ubicación" }],
			},
			{
				...PROJECT_METADATA.sherwinWilliams,
				category: "Retail · Web + Mobile · Waresoft",
				title: "Sherwin-Williams",
				summary:
					"Desarrollo integral con Angular 12, del panel administrativo al sitio principal, y apoyo en la versión móvil construida con Flutter.",
				technologies: ["Angular 12", "Flutter"],
				results: [
					{ value: "Web + App", label: "panel, sitio y móvil" },
				],
			},
			{
				...PROJECT_METADATA.gimh,
				category: "Arrendamientos · Full stack · Waresoft",
				title: "GIMH",
				summary:
					"Aplicación de gestión de arrendamientos desarrollada de extremo a extremo, del frontend en React a la API y las bases de datos.",
				technologies: ["React", "Node.js", "PostgreSQL", "CouchDB"],
				results: [
					{
						value: "Full stack",
						label: "de la UI a la base de datos",
					},
				],
			},
			{
				...PROJECT_METADATA.customWebsites,
				category: "Freelance · Web · 2024 – hoy",
				title: "Sitios web a medida",
				summary:
					"Portafolios para fotógrafos, blogs y landing pages informativas para iglesias y organizaciones, desarrollados de principio a fin.",
				technologies: ["Angular 14+", "Node.js"],
				results: [{ value: "2024+", label: "proyectos freelance" }],
			},
		],
	},

	education: {
		intro: {
			sectionLabel: "Aprendizaje & método",
			title: "Curiosidad estructurada. Código que evoluciona.",
			description:
				"Formación, certificaciones y el método con el que llevo cada funcionalidad de la idea a producción.",
		},
		credentialsLabel: "Formación / Certificaciones",
		credentials: [
			{
				...CREDENTIAL_FACTS.kodigo,
				credentialType: "Certificación",
				title: "Desarrollo Full Stack",
			},
			{
				...CREDENTIAL_FACTS.utec,
				credentialType: "Grado universitario",
				title: "Licenciatura en Informática",
			},
		],
		workMethod: {
			sectionLabel: "Mi forma de trabajar",
			statusLabel: "● ITERATIVA",
			steps: [
				{
					title: "Entender el problema",
					description:
						"Reviso diseño, requisitos y APIs antes de escribir una línea de código.",
				},
				{
					title: "Diseñar la arquitectura",
					description:
						"Defino capas, contratos y componentes para que el código escale.",
				},
				{
					title: "Construir con calidad",
					description:
						"Desarrollo con tipado estricto, tests y revisiones de código.",
				},
				{
					title: "Medir y mejorar",
					description:
						"Mido rendimiento y accesibilidad, y convierto hallazgos en mejoras.",
				},
			],
		},
	},

	contact: {
		sectionLabel: "Contacto",
		title: "¿Construimos algo que merezca existir?",
		description:
			"Trabajo en remoto desde El Salvador (GMT-6) y estoy disponible para roles de frontend senior, colaboraciones y conversaciones sobre arquitectura web, design systems y rendimiento.",
		email: CONTACT_EMAIL,
		availabilityStatus: "Disponible · Q4 2026",
		channels: [
			CONTACT_CHANNELS.linkedin,
			CONTACT_CHANNELS.github,
			{ ...LOCATION_CHANNEL, platformLabel: "Base" },
		],
		builtWith: {
			sectionLabel: "SOURCE_CODE",
			title: "Esta web está hecha con Astro",
			description:
				"TypeScript, SCSS con BEM y arquitectura hexagonal. Así se ve por dentro:",
			technologies: [
				"Astro",
				"TypeScript",
				"SCSS + BEM",
				"Arquitectura hexagonal",
				"i18n ES / EN",
				"Stylelint",
				"Prettier",
				"Husky",
			],
		},
	},

	footer: {
		builtWithNote: "CONSTRUIDO CON ASTRO · TYPESCRIPT · SCSS",
		copyrightNotice: "© 2026 Kevin Aquino. Todos los derechos reservados.",
	},
};
