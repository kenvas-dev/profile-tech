/**
 * Contenido del portfolio en inglés. Los datos que no dependen del idioma
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

export const portfolioEn: Portfolio = {
	seo: {
		title: "Kevin Aquino | Senior Frontend & Full Stack Developer",
		description:
			"Senior Frontend and Full Stack Developer based in El Salvador with 5 years of experience in Angular, React, TypeScript and Node.js. Available for remote work.",
		keywords: [
			"Frontend Developer",
			"Senior Frontend Developer",
			"Full Stack Developer",
			"Full Stack Engineer",
			"Web Developer",
			"Angular Developer",
			"React Developer",
			"TypeScript",
			"Node.js",
			"Astro",
			"Remote developer",
			"Developer in El Salvador",
			"Kevin Aquino",
			"UN1T7D",
		],
		jobTitles: [
			"Senior Frontend Developer",
			"Full Stack Developer",
			"Frontend Lead",
		],
		expertise: [
			"Frontend development",
			"Full stack development",
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
			"Hexagonal architecture",
			"Web accessibility",
		],
		socialImage: {
			src: SOCIAL_IMAGE_URLS.en,
			alt: "Kevin Aquino — Senior Frontend & Full Stack Developer",
		},
	},

	identity: IDENTITY,

	navigation: [
		{ label: "Profile", href: SECTION_ANCHORS.profile },
		{ label: "Stack", href: SECTION_ANCHORS.stack },
		{ label: "Experience", href: SECTION_ANCHORS.experience },
		{ label: "Projects", href: SECTION_ANCHORS.projects },
		{ label: "Contact", href: SECTION_ANCHORS.contact },
	],

	hero: {
		availabilityStatus: "Available for new projects · 2026",
		tagline: "Portfolio / CV — Frontend Engineering",
		headline: HERO_HEADLINE,
		valueProposition:
			"I build fast, accessible and scalable web interfaces, turning designs into reusable components with clean code, solid architecture and attention to detail.",
		primaryAction: {
			label: "View projects",
			href: SECTION_ANCHORS.projects,
		},
		secondaryAction: {
			label: "Get in touch",
			href: SECTION_ANCHORS.contact,
		},
		professionalLinks: [
			{
				label: "LINKEDIN ↗",
				href: PROFILE_URLS.linkedin,
			},
			{ label: "GITHUB ↗", href: PROFILE_URLS.github },
			{ label: "DOWNLOAD CV ↓", href: CV_URLS.en },
		],
		portrait: {
			image: {
				src: PORTRAIT_IMAGE_SRC,
				alt: "Portrait of Kevin Aquino wearing glasses, lit by neon lights",
			},
			...PORTRAIT_HUD,
		},
	},

	profile: {
		sectionLabel: "Profile",
		title: "Clean code. Interfaces that scale.",
		biography:
			"I'm Kevin Aquino, a senior frontend and full stack developer with 5 years of experience, from backend to frontend. I've worked on 7 projects alongside 3 design teams, turning ideas into solid products.",
		specialization:
			"My backend background helps me build interfaces that understand the data and APIs behind them. I specialize in maintainable frontend architecture, design systems in code, performance and accessibility.",
		metrics: [
			{ value: "5+", label: "years in web development" },
			{ value: "7", label: "projects delivered" },
			{ value: "3", label: "design teams" },
			{ value: "ES / EN", label: "working languages" },
		],
	},

	skills: {
		intro: {
			sectionLabel: "Stack & expertise",
			title: "Tools to build, test and scale.",
			description:
				"A modern, TypeScript-centered stack: component frameworks, maintainable styles and automated quality from end to end.",
		},
		skillGroups: [
			{
				sequenceCode: "S.01",
				title: "Frameworks & languages",
				description: "A solid, typed foundation for any product.",
				technologies: TECH_STACK.frameworksAndLanguages,
			},
			{
				sequenceCode: "S.02",
				title: "UI & styling",
				description:
					"Consistent, accessible and responsive interfaces.",
				technologies: TECH_STACK.uiAndStyling,
			},
			{
				sequenceCode: "S.03",
				title: "Quality & architecture",
				description: "Code that grows at the team's pace.",
				technologies: [
					"Clean code",
					"Hexagonal architecture",
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
					title: "Architectural vision",
					description:
						"I define layers, contracts and dependencies before writing the first component.",
				},
				{
					iconName: "waypoints",
					title: "Bridge between design and backend",
					description:
						"My backend experience and work with 3 design teams let me bring APIs and designs together into coherent interfaces.",
				},
				{
					iconName: "sparkles",
					title: "Detail and performance",
					description:
						"I care about every interaction, every millisecond of load time and every accessibility criterion.",
				},
			],
		},
	},

	experience: {
		intro: {
			sectionLabel: "Experience",
			title: "Experience building products that scale.",
			description:
				"5 years across the full stack: I started as a full stack developer and now lead frontend, always working closely with design teams.",
		},
		currentPositionLabel: "CURRENT",
		presentDateLabel: "NOW",
		positions: [
			{
				companyName: "Freelance",
				jobTitle: "Full Stack Developer",
				workLocation: "El Salvador · Remote",
				period: POSITION_PERIODS.freelance,
				summary:
					"I design and build custom websites for professionals and organizations, from frontend architecture to backend services, with Angular (v14+) and Node.js.",
				achievements: [
					"Web portfolios for photographers, focused on showcasing image galleries.",
					"Blogs and informational landing pages with responsive design and easy-to-update content.",
					"Landing pages for churches and organizations, featuring their activities and contact channels.",
				],
			},
			{
				companyName: "Financial institution",
				jobTitle: "Frontend Lead",
				workLocation: "El Salvador · Since Oct. 2022",
				period: POSITION_PERIODS.financialInstitution,
				summary:
					"I lead frontend development of the corporate CRM of a financial institution in El Salvador, the platform that orchestrates key customer management processes. I define the application architecture, coding standards and integration with internal services to deliver a consistent, secure and scalable experience for business teams.",
				achievements: [
					"Designed a modular frontend architecture that allows new management flows to be added without compromising maintainability.",
					"Established quality standards for the team: reusable components, strict typing and code reviews.",
					"Coordinate integration with backend services and design teams to continuously deliver critical features.",
				],
			},
			{
				companyName: "Waresoft",
				jobTitle: "Full Stack Developer → Frontend Lead",
				workLocation: "Chile & El Salvador · Until Oct. 2022",
				period: POSITION_PERIODS.waresoft,
				summary:
					"Built web and mobile applications for clients in Chile and El Salvador, first as a full stack developer and later leading frontend on Angular projects.",
				achievements: [
					"Mundo Terrenos: real estate sales platform with interactive maps and property geolocation through markers.",
					"GIMH: rental management app built full stack with React, Node.js, PostgreSQL and CouchDB.",
					"Sherwin-Williams: end-to-end development with Angular 12, from the admin panel to the main site, plus support on the Flutter mobile version.",
					"Diparvel: led frontend development of the application with Angular 14.",
				],
			},
		],
	},

	projects: {
		intro: {
			sectionLabel: "Selected work",
			title: "Real projects, from banking to custom web.",
			description:
				"A selection of projects I've worked on: financial services, real estate, retail and custom websites for professionals and organizations.",
		},
		items: [
			{
				...PROJECT_METADATA.crm,
				category: "Financial services · CRM · 2022 – present",
				title: "Customer management CRM",
				summary:
					"Corporate platform that orchestrates the core customer management features of a financial institution in El Salvador. I lead its frontend development: architecture, coding standards and integration with internal services.",
				technologies: [
					"Frontend architecture",
					"Service integration",
					"Technical leadership",
				],
				results: [
					{ value: "Lead", label: "frontend development" },
					{ value: "2022+", label: "continuously evolving" },
				],
			},
			{
				...PROJECT_METADATA.mundoTerrenos,
				category: "Real estate · Chile · Waresoft",
				title: "Mundo Terrenos",
				summary:
					"Real estate sales platform with interactive maps and markers to locate each property.",
				technologies: ["Maps", "Geolocation"],
				results: [{ value: "Maps", label: "location-based search" }],
			},
			{
				...PROJECT_METADATA.sherwinWilliams,
				category: "Retail · Web + Mobile · Waresoft",
				title: "Sherwin-Williams",
				summary:
					"End-to-end development with Angular 12, from the admin panel to the main site, plus support on the mobile version built with Flutter.",
				technologies: ["Angular 12", "Flutter"],
				results: [
					{ value: "Web + App", label: "admin, site and mobile" },
				],
			},
			{
				...PROJECT_METADATA.gimh,
				category: "Rentals · Full stack · Waresoft",
				title: "GIMH",
				summary:
					"Rental management application built end to end, from the React frontend to the API and databases.",
				technologies: ["React", "Node.js", "PostgreSQL", "CouchDB"],
				results: [
					{ value: "Full stack", label: "from UI to database" },
				],
			},
			{
				...PROJECT_METADATA.customWebsites,
				category: "Freelance · Web · 2024 – present",
				title: "Custom websites",
				summary:
					"Portfolios for photographers, blogs and informational landing pages for churches and organizations, built from start to finish.",
				technologies: ["Angular 14+", "Node.js"],
				results: [{ value: "2024+", label: "freelance projects" }],
			},
		],
	},

	education: {
		intro: {
			sectionLabel: "Learning & method",
			title: "Structured curiosity. Evolving code.",
			description:
				"Education, certifications and the method I use to take each feature from idea to production.",
		},
		credentialsLabel: "Education / Certifications",
		credentials: [
			{
				...CREDENTIAL_FACTS.kodigo,
				credentialType: "Certification",
				title: "Full Stack Development",
			},
			{
				...CREDENTIAL_FACTS.utec,
				credentialType: "Bachelor's degree",
				title: "Bachelor's Degree in Computer Science",
			},
		],
		workMethod: {
			sectionLabel: "How I work",
			statusLabel: "● ITERATIVE",
			steps: [
				{
					title: "Understand the problem",
					description:
						"I review designs, requirements and APIs before writing a single line of code.",
				},
				{
					title: "Design the architecture",
					description:
						"I define layers, contracts and components so the code can scale.",
				},
				{
					title: "Build with quality",
					description:
						"I develop with strict typing, tests and code reviews.",
				},
				{
					title: "Measure and improve",
					description:
						"I measure performance and accessibility, and turn findings into improvements.",
				},
			],
		},
	},

	contact: {
		sectionLabel: "Contact",
		title: "Shall we build something worth existing?",
		description:
			"I work remotely from El Salvador (GMT-6) and I'm available for senior frontend roles, collaborations and conversations about web architecture, design systems and performance.",
		email: CONTACT_EMAIL,
		availabilityStatus: "Available · Q4 2026",
		channels: [
			CONTACT_CHANNELS.linkedin,
			CONTACT_CHANNELS.github,
			{ ...LOCATION_CHANNEL, platformLabel: "Location" },
		],
		builtWith: {
			sectionLabel: "SOURCE_CODE",
			title: "This site is built with Astro",
			description:
				"TypeScript, SCSS with BEM and hexagonal architecture. Here's a look inside:",
			technologies: [
				"Astro",
				"TypeScript",
				"SCSS + BEM",
				"Hexagonal architecture",
				"i18n ES / EN",
				"Stylelint",
				"Prettier",
				"Husky",
			],
		},
	},

	footer: {
		builtWithNote: "BUILT WITH ASTRO · TYPESCRIPT · SCSS",
		copyrightNotice: "© 2026 Kevin Aquino. All rights reserved.",
	},
};
