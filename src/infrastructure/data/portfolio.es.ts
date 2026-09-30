import type { Portfolio } from "@domain/entities/portfolio";

export const portfolioEs: Portfolio = {
	identity: {
		fullName: "Kevin Aquino",
		initials: "KA",
		handle: "kevin.aquino",
		languages: ["ES", "EN"],
		activeLanguage: "ES",
	},

	navigation: [
		{ label: "Perfil", href: "#perfil" },
		{ label: "Stack", href: "#stack" },
		{ label: "Experiencia", href: "#experiencia" },
		{ label: "Proyectos", href: "#proyectos" },
		{ label: "Contacto", href: "#contacto" },
	],

	hero: {
		availability: "Disponible para nuevos proyectos · 2026",
		context: "Portfolio / CV — Frontend Engineering",
		role: {
			primary: "Senior Frontend Developer",
			secondary: "UI engineer.",
		},
		valueProposition:
			"Desarrollo interfaces web rápidas, accesibles y escalables, convirtiendo diseños en componentes reutilizables con código limpio, buena arquitectura y atención al detalle.",
		primaryAction: { label: "Ver proyectos", href: "#proyectos" },
		secondaryAction: { label: "Contactar", href: "#contacto" },
		professionalLinks: [
			{
				label: "LINKEDIN ↗",
				href: "https://www.linkedin.com/in/alexrivera",
			},
			{ label: "GITHUB ↗", href: "https://github.com/alexrivera" },
			{ label: "DESCARGAR CV ↓", href: "#" },
		],
		portrait: {
			image: {
				src: "/images/retrato.jpg",
				alt: "Retrato de Kevin Aquino con gafas, iluminado por luces de neón",
			},
			code: "PROFILE_001",
			baseLabel: "BASE",
			location: "Madrid / Remoto",
			coordinates: "40.4168° N · 003.7038° W",
		},
	},

	profile: {
		label: "Perfil",
		title: "Código limpio. Interfaces que escalan.",
		biography:
			"Soy Kevin Aquino, desarrollador frontend senior con más de 8 años construyendo aplicaciones web para plataformas B2B, fintech y productos de consumo. Trabajo del componente a la arquitectura, siempre cerca de diseño, backend y negocio.",
		focus: "Me especializo en arquitecturas frontend mantenibles, design systems en código, rendimiento web y accesibilidad. Me gusta dejar bases sólidas: tipado estricto, tests y convenciones que permiten a un equipo crecer sin frenarse.",
		metrics: [
			{ value: "8+", label: "años en desarrollo frontend" },
			{ value: "30+", label: "proyectos en producción" },
			{ value: "5", label: "equipos con design system propio" },
			{ value: "ES / EN", label: "idiomas de trabajo" },
		],
	},

	skills: {
		intro: {
			label: "Stack & conocimiento",
			title: "Herramientas para construir, probar y escalar.",
			description:
				"Un stack moderno centrado en TypeScript: frameworks de componentes, estilos mantenibles y calidad automatizada de principio a fin.",
		},
		groups: [
			{
				code: "S.01",
				title: "Frameworks & lenguajes",
				description:
					"Una base sólida y tipada para cualquier producto.",
				technologies: [
					"TypeScript",
					"JavaScript",
					"React",
					"Angular",
					"Astro",
					"Next.js",
				],
			},
			{
				code: "S.02",
				title: "UI & estilos",
				description:
					"Interfaces consistentes, accesibles y responsive.",
				technologies: [
					"SCSS",
					"BEM",
					"Tailwind CSS",
					"Design systems",
					"Storybook",
					"Accessibility",
				],
			},
			{
				code: "S.03",
				title: "Calidad & arquitectura",
				description: "Código que crece al ritmo del equipo.",
				technologies: [
					"Clean code",
					"Arquitectura hexagonal",
					"Testing",
					"Vitest",
					"Playwright",
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
					title: "Visión de arquitectura",
					description:
						"Defino capas, contratos y dependencias antes de escribir el primer componente.",
				},
				{
					icon: "waypoints",
					title: "Puente entre diseño y backend",
					description:
						"Traduzco diseños y APIs en interfaces coherentes, alineando decisiones técnicas con cada equipo.",
				},
				{
					icon: "sparkles",
					title: "Detalle y rendimiento",
					description:
						"Cuido cada interacción, cada milisegundo de carga y cada criterio de accesibilidad.",
				},
			],
		},
	},

	experience: {
		intro: {
			label: "Experiencia",
			title: "Experiencia construyendo productos que escalan.",
			description:
				"Equipos de producto donde he liderado la arquitectura frontend, la calidad del código y la entrega continua.",
		},
		currentLabel: "ACTUAL",
		presentLabel: "AHORA",
		positions: [
			{
				company: "Nébula Labs",
				role: "Lead Frontend Engineer",
				location: "Madrid · Híbrido",
				period: { startYear: 2023, endYear: null },
				summary:
					"Lidero el frontend de una plataforma SaaS de inteligencia operativa: arquitectura, design system en código y calidad técnica del equipo.",
				achievements: [
					"Migré la aplicación a una arquitectura modular y reduje un 40% el tiempo de carga inicial.",
					"Construí una librería de componentes adoptada por 5 squads y 3 productos.",
					"Implanté testing automatizado y CI que redujeron un 60% los bugs en producción.",
				],
			},
			{
				company: "Orbit Finance",
				role: "Senior Frontend Developer",
				location: "Barcelona · Remoto",
				period: { startYear: 2020, endYear: 2023 },
				summary:
					"Desarrollé los flujos de onboarding, pagos y analítica de una fintech B2B en expansión europea.",
				achievements: [
					"Reconstruí el onboarding en React y la activación subió del 54% al 71%.",
					"Llevé los flujos críticos al nivel de accesibilidad WCAG 2.1 AA.",
					"Mentoricé a 4 desarrolladores junior en buenas prácticas y code review.",
				],
			},
			{
				company: "Studio Norte",
				role: "Frontend Developer",
				location: "Valencia · Presencial",
				period: { startYear: 2018, endYear: 2020 },
				summary:
					"Desarrollé sitios y aplicaciones web para startups y organizaciones culturales.",
				achievements: [
					"Lancé 12 proyectos web y mobile junto a equipos de diseño y backend.",
					"Introduje componentes reutilizables que aceleraron cada nuevo desarrollo.",
				],
			},
		],
	},

	projects: {
		intro: {
			label: "Trabajo seleccionado",
			title: "Código que mueve métricas, no solo píxeles.",
			description:
				"Casos seleccionados con contexto técnico, resultados y stack. Cada bloque está listo para enlazar a un caso completo.",
		},
		items: [
			{
				code: "CASE_STUDY_01",
				category: "SaaS · Dashboard · 2026",
				title: "Nébula Command Center",
				summary:
					"Frontend de una plataforma de inteligencia operativa en tiempo real: visualización de datos, arquitectura modular y un rendimiento que soporta miles de eventos por minuto.",
				preview: {
					src: "/images/proyecto-nebula.jpg",
					alt: "Dashboard de Nébula Command Center en un monitor de escritorio",
				},
				tone: "primary",
				technologies: ["React", "TypeScript", "WebSockets", "D3.js"],
				results: [
					{ value: "−40%", label: "tiempo de carga" },
					{ value: "98", label: "Lighthouse performance" },
				],
				link: { label: "Ver caso", href: "#" },
				featured: true,
			},
			{
				code: "CASE_STUDY_02",
				category: "Fintech · Activación",
				title: "Orbit onboarding",
				summary:
					"Onboarding progresivo en React que convirtió requisitos regulatorios en un flujo guiado, accesible y validado paso a paso.",
				preview: {
					src: "/images/proyecto-orbit.jpg",
					alt: "Pantallas móviles del onboarding de Orbit",
				},
				tone: "secondary",
				technologies: ["React", "Testing"],
				results: [{ value: "+17pp", label: "activación" }],
				link: { label: "Ver caso Orbit onboarding", href: "#" },
				featured: false,
			},
			{
				code: "CASE_STUDY_03",
				category: "Sistema · Escala",
				title: "Atlas design system",
				summary:
					"Librería de componentes con tokens, Storybook y versionado semántico para alinear diseño e ingeniería en cinco squads.",
				preview: {
					src: "/images/proyecto-atlas.jpg",
					alt: "Documentación de componentes del design system Atlas",
				},
				tone: "tertiary",
				technologies: ["Storybook", "SCSS"],
				results: [{ value: "3×", label: "velocidad de entrega" }],
				link: { label: "Ver caso Atlas design system", href: "#" },
				featured: false,
			},
		],
	},

	education: {
		intro: {
			label: "Aprendizaje & método",
			title: "Curiosidad estructurada. Código que evoluciona.",
			description:
				"Formación, certificaciones y el método con el que llevo cada funcionalidad de la idea a producción.",
		},
		credentialsLabel: "Formación / Certificaciones",
		credentials: [
			{
				year: 2025,
				type: "Certificación",
				title: "Web Accessibility Specialist",
				institution: "IAAP · Online",
			},
			{
				year: 2022,
				type: "Programa avanzado",
				title: "Arquitectura Frontend Escalable",
				institution: "Frontend Masters · Online",
			},
			{
				year: 2018,
				type: "Grado",
				title: "Ingeniería de Software",
				institution: "Universidad Politécnica de Madrid",
			},
		],
		method: {
			label: "Mi forma de trabajar",
			status: "● ITERATIVA",
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
		label: "Contacto",
		title: "¿Construimos algo que merezca existir?",
		description:
			"Estoy disponible para roles de frontend senior, colaboraciones y conversaciones sobre arquitectura web, design systems y rendimiento.",
		email: "hola@alexrivera.design",
		availability: "Disponible · Q4 2026",
		channels: [
			{
				icon: "linkedin",
				label: "LinkedIn",
				value: "/in/alexrivera",
				href: "https://www.linkedin.com/in/alexrivera",
			},
			{
				icon: "github",
				label: "GitHub",
				value: "@alexrivera",
				href: "https://github.com/alexrivera",
			},
			{
				icon: "map-pin",
				label: "Base",
				value: "Madrid · Remoto",
				href: "https://maps.google.com/?q=Madrid",
			},
		],
	},

	footer: {
		note: "CONSTRUIDO CON ASTRO · TYPESCRIPT · SCSS",
		copyright: "© 2026 Kevin Aquino. Todos los derechos reservados.",
	},
};
