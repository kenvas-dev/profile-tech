import type { Portfolio } from "@domain/entities/portfolio";

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
			src: "/og/og-en.jpg",
			alt: "Kevin Aquino — Senior Frontend & Full Stack Developer",
		},
	},

	identity: {
		fullName: "Kevin Aquino",
		logo: "{UN1T7D}",
		handle: "kevin.aquino",
		address: {
			locality: "Quezaltepeque",
			region: "La Libertad",
			countryCode: "SV",
		},
	},

	navigation: [
		{ label: "Profile", href: "#perfil" },
		{ label: "Stack", href: "#stack" },
		{ label: "Experience", href: "#experiencia" },
		{ label: "Projects", href: "#proyectos" },
		{ label: "Contact", href: "#contacto" },
	],

	hero: {
		availability: "Available for new projects · 2026",
		context: "Portfolio / CV — Frontend Engineering",
		role: {
			primary: "Senior Frontend Developer",
			secondary: "UI engineer.",
		},
		valueProposition:
			"I build fast, accessible and scalable web interfaces, turning designs into reusable components with clean code, solid architecture and attention to detail.",
		primaryAction: { label: "View projects", href: "#proyectos" },
		secondaryAction: { label: "Get in touch", href: "#contacto" },
		professionalLinks: [
			{
				label: "LINKEDIN ↗",
				href: "https://www.linkedin.com/in/kevin-v%C3%A1squez-46a0701b4",
			},
			{ label: "GITHUB ↗", href: "https://github.com/kenvas-dev" },
			{ label: "DOWNLOAD CV ↓", href: "#" },
		],
		portrait: {
			image: {
				src: "/images/retrato.jpg",
				alt: "Portrait of Kevin Aquino wearing glasses, lit by neon lights",
			},
			code: "PROFILE_001",
			baseLabel: "BASE",
			location: "Quezaltepeque, SV",
			coordinates: "13.8350° N · 089.2720° W",
		},
	},

	profile: {
		label: "Profile",
		title: "Clean code. Interfaces that scale.",
		biography:
			"I'm Kevin Aquino, a senior frontend and full stack developer with 5 years of experience, from backend to frontend. I've worked on 7 projects alongside 3 design teams, turning ideas into solid products.",
		focus: "My backend background helps me build interfaces that understand the data and APIs behind them. I specialize in maintainable frontend architecture, design systems in code, performance and accessibility.",
		metrics: [
			{ value: "5+", label: "years in web development" },
			{ value: "7", label: "projects delivered" },
			{ value: "3", label: "design teams" },
			{ value: "ES / EN", label: "working languages" },
		],
	},

	skills: {
		intro: {
			label: "Stack & expertise",
			title: "Tools to build, test and scale.",
			description:
				"A modern, TypeScript-centered stack: component frameworks, maintainable styles and automated quality from end to end.",
		},
		groups: [
			{
				code: "S.01",
				title: "Frameworks & languages",
				description: "A solid, typed foundation for any product.",
				technologies: [
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
			},
			{
				code: "S.02",
				title: "UI & styling",
				description:
					"Consistent, accessible and responsive interfaces.",
				technologies: [
					"SCSS",
					"BEM",
					"Tailwind CSS",
					"Material Angular",
					"PrimeNG",
					"Bulma",
					"Bootstrap",
					"Design systems",
				],
			},
			{
				code: "S.03",
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
			label: "CORE_STRENGTHS",
			version: "v.08.26",
			items: [
				{
					icon: "radar",
					title: "Architectural vision",
					description:
						"I define layers, contracts and dependencies before writing the first component.",
				},
				{
					icon: "waypoints",
					title: "Bridge between design and backend",
					description:
						"My backend experience and work with 3 design teams let me bring APIs and designs together into coherent interfaces.",
				},
				{
					icon: "sparkles",
					title: "Detail and performance",
					description:
						"I care about every interaction, every millisecond of load time and every accessibility criterion.",
				},
			],
		},
	},

	experience: {
		intro: {
			label: "Experience",
			title: "Experience building products that scale.",
			description:
				"5 years across the full stack: I started as a full stack developer and now lead frontend, always working closely with design teams.",
		},
		currentLabel: "CURRENT",
		presentLabel: "NOW",
		positions: [
			{
				company: "Freelance",
				role: "Full Stack Developer",
				location: "El Salvador · Remote",
				period: { startYear: 2024, endYear: null },
				summary:
					"I design and build custom websites for professionals and organizations, from frontend architecture to backend services, with Angular (v14+) and Node.js.",
				achievements: [
					"Web portfolios for photographers, focused on showcasing image galleries.",
					"Blogs and informational landing pages with responsive design and easy-to-update content.",
					"Landing pages for churches and organizations, featuring their activities and contact channels.",
				],
			},
			{
				company: "Financial institution",
				role: "Frontend Lead",
				location: "El Salvador · Since Oct. 2022",
				period: { startYear: 2022, endYear: null },
				summary:
					"I lead frontend development of the corporate CRM of a financial institution in El Salvador, the platform that orchestrates key customer management processes. I define the application architecture, coding standards and integration with internal services to deliver a consistent, secure and scalable experience for business teams.",
				achievements: [
					"Designed a modular frontend architecture that allows new management flows to be added without compromising maintainability.",
					"Established quality standards for the team: reusable components, strict typing and code reviews.",
					"Coordinate integration with backend services and design teams to continuously deliver critical features.",
				],
			},
			{
				company: "Waresoft",
				role: "Full Stack Developer → Frontend Lead",
				location: "Chile & El Salvador · Until Oct. 2022",
				period: { startYear: 2021, endYear: 2022 },
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
			label: "Selected work",
			title: "Real projects, from banking to custom web.",
			description:
				"A selection of projects I've worked on: financial services, real estate, retail and custom websites for professionals and organizations.",
		},
		items: [
			{
				code: "CASE_STUDY_01",
				kind: "crm",
				category: "Financial services · CRM · 2022 – present",
				title: "Customer management CRM",
				summary:
					"Corporate platform that orchestrates the core customer management features of a financial institution in El Salvador. I lead its frontend development: architecture, coding standards and integration with internal services.",
				tone: "primary",
				technologies: [
					"Frontend architecture",
					"Service integration",
					"Technical leadership",
				],
				results: [
					{ value: "Lead", label: "frontend development" },
					{ value: "2022+", label: "continuously evolving" },
				],
				featured: true,
			},
			{
				code: "CASE_STUDY_02",
				kind: "real-estate",
				category: "Real estate · Chile · Waresoft",
				title: "Mundo Terrenos",
				summary:
					"Real estate sales platform with interactive maps and markers to locate each property.",
				tone: "secondary",
				technologies: ["Maps", "Geolocation"],
				results: [{ value: "Maps", label: "location-based search" }],
				featured: false,
			},
			{
				code: "CASE_STUDY_03",
				kind: "admin-panel",
				category: "Retail · Web + Mobile · Waresoft",
				title: "Sherwin-Williams",
				summary:
					"End-to-end development with Angular 12, from the admin panel to the main site, plus support on the mobile version built with Flutter.",
				tone: "tertiary",
				technologies: ["Angular 12", "Flutter"],
				results: [
					{ value: "Web + App", label: "admin, site and mobile" },
				],
				featured: false,
			},
			{
				code: "CASE_STUDY_04",
				kind: "rentals",
				category: "Rentals · Full stack · Waresoft",
				title: "GIMH",
				summary:
					"Rental management application built end to end, from the React frontend to the API and databases.",
				tone: "primary",
				technologies: ["React", "Node.js", "PostgreSQL", "CouchDB"],
				results: [
					{ value: "Full stack", label: "from UI to database" },
				],
				featured: false,
			},
			{
				code: "CASE_STUDY_05",
				kind: "websites",
				category: "Freelance · Web · 2024 – present",
				title: "Custom websites",
				summary:
					"Portfolios for photographers, blogs and informational landing pages for churches and organizations, built from start to finish.",
				tone: "secondary",
				technologies: ["Angular 14+", "Node.js"],
				results: [{ value: "2024+", label: "freelance projects" }],
				featured: false,
			},
		],
	},

	education: {
		intro: {
			label: "Learning & method",
			title: "Structured curiosity. Evolving code.",
			description:
				"Education, certifications and the method I use to take each feature from idea to production.",
		},
		credentialsLabel: "Education / Certifications",
		credentials: [
			{
				year: 2025,
				type: "Certification",
				title: "Full Stack Development",
				institution: "Kodigo · El Salvador",
			},
			{
				year: 2024,
				type: "Bachelor's degree",
				title: "Bachelor's Degree in Computer Science",
				institution: "Universidad Tecnológica de El Salvador (UTEC)",
			},
		],
		method: {
			label: "How I work",
			status: "● ITERATIVE",
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
		label: "Contact",
		title: "Shall we build something worth existing?",
		description:
			"I work remotely from El Salvador (GMT-6) and I'm available for senior frontend roles, collaborations and conversations about web architecture, design systems and performance.",
		email: "kevin.aquino.vasquez@gmail.com",
		availability: "Available · Q4 2026",
		channels: [
			{
				icon: "linkedin",
				label: "LinkedIn",
				value: "/in/kevin-vásquez",
				href: "https://www.linkedin.com/in/kevin-v%C3%A1squez-46a0701b4",
			},
			{
				icon: "github",
				label: "GitHub",
				value: "@kenvas-dev",
				href: "https://github.com/kenvas-dev",
			},
			{
				icon: "map-pin",
				label: "Location",
				value: "Quezaltepeque, El Salvador",
				href: "https://maps.google.com/?q=Quezaltepeque,+El+Salvador",
			},
		],
		builtWith: {
			label: "SOURCE_CODE",
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
		note: "BUILT WITH ASTRO · TYPESCRIPT · SCSS",
		copyright: "© 2026 Kevin Aquino. All rights reserved.",
	},
};
