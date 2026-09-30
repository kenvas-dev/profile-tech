import type { Portfolio } from "@domain/entities/portfolio";

export const portfolioEs: Portfolio = {
	identity: {
		fullName: "Alex Rivera",
		initials: "AR",
		handle: "alex.rivera",
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
		context: "Portfolio / CV — contenido de ejemplo editable",
		role: {
			primary: "Product designer",
			secondary: "creative technologist.",
		},
		valueProposition:
			"Diseño productos digitales que convierten complejidad en experiencias claras, combinando estrategia, sistemas visuales y prototipos que se sienten reales.",
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
				alt: "Retrato de Alex Rivera en su estudio",
			},
			code: "PROFILE_001",
			baseLabel: "BASE",
			location: "Madrid / Remoto",
			coordinates: "40.4168° N · 003.7038° W",
		},
	},

	profile: {
		label: "Perfil",
		title: "Pensar en sistemas. Diseñar para personas.",
		biography:
			"Soy Alex Rivera, diseñador de producto con experiencia creando plataformas B2B, herramientas de IA y productos de consumo. Trabajo de la estrategia al detalle visual, siempre cerca de negocio, tecnología y usuarios.",
		focus: "Me especializo en convertir procesos densos en flujos comprensibles, construir sistemas que escalan y validar pronto con prototipos de alta fidelidad. Este texto, como todo el contenido del CV, está preparado para sustituirse por tu propia historia.",
		metrics: [
			{ value: "8+", label: "años diseñando productos" },
			{ value: "24", label: "lanzamientos acompañados" },
			{ value: "4", label: "sectores transformados" },
			{ value: "ES / EN", label: "idiomas de trabajo" },
		],
	},

	skills: {
		intro: {
			label: "Stack & conocimiento",
			title: "Herramientas para diseñar, validar y escalar.",
			description:
				"Un stack híbrido: criterio de producto, craft visual y suficiente código para reducir la distancia entre idea y realidad.",
		},
		groups: [
			{
				code: "S.01",
				title: "Estrategia de producto",
				description: "Definición, foco y decisiones con evidencia.",
				technologies: [
					"Discovery",
					"Research",
					"Jobs to be done",
					"Workshops",
					"Roadmapping",
				],
			},
			{
				code: "S.02",
				title: "Diseño de experiencia",
				description: "Flujos claros, accesibles y medibles.",
				technologies: [
					"UX/UI",
					"Prototyping",
					"IA",
					"Usability testing",
					"Accessibility",
				],
			},
			{
				code: "S.03",
				title: "Sistemas & tecnología",
				description: "Consistencia que acelera equipos.",
				technologies: [
					"Design systems",
					"Figma",
					"Tokens",
					"React",
					"Storybook",
					"AI tools",
				],
			},
		],
		strengths: {
			label: "CORE_STRENGTHS",
			version: "v.08.26",
			items: [
				{
					icon: "radar",
					title: "Visión sistémica",
					description:
						"Conecto patrones, actores y restricciones antes de dibujar pantallas.",
				},
				{
					icon: "waypoints",
					title: "Facilitación",
					description:
						"Alineo perspectivas y convierto conversaciones en decisiones accionables.",
				},
				{
					icon: "sparkles",
					title: "Craft con intención",
					description:
						"Cada detalle visual refuerza jerarquía, confianza y comprensión.",
				},
			],
		},
	},

	experience: {
		intro: {
			label: "Experiencia",
			title: "Experiencia que deja producto, sistema y equipo mejores.",
			description:
				"Trayectoria de ejemplo: sustituye empresas, fechas, ubicaciones y resultados por tu experiencia real.",
		},
		currentLabel: "ACTUAL",
		presentLabel: "AHORA",
		positions: [
			{
				company: "Nébula Labs",
				role: "Lead Product Designer",
				location: "Madrid · Híbrido",
				period: { startYear: 2023, endYear: null },
				summary:
					"Lidero la experiencia de una plataforma de inteligencia operativa para equipos enterprise, desde visión de producto hasta delivery.",
				achievements: [
					"Rediseñé el flujo principal y reduje un 38% el tiempo hasta valor.",
					"Creé un design system adoptado por 5 squads y 3 productos.",
					"Facilité discovery continuo con ventas, soporte y 18 clientes clave.",
				],
			},
			{
				company: "Orbit Finance",
				role: "Senior Product Designer",
				location: "Barcelona · Remoto",
				period: { startYear: 2020, endYear: 2023 },
				summary:
					"Diseñé experiencias de onboarding, pagos y analítica para una fintech B2B en expansión europea.",
				achievements: [
					"Aumenté la activación del onboarding del 54% al 71%.",
					"Convertí la investigación mensual en un ritual compartido de producto.",
					"Coordiné la accesibilidad WCAG AA en los flujos críticos.",
				],
			},
			{
				company: "Studio Norte",
				role: "UX/UI Designer",
				location: "Valencia · Presencial",
				period: { startYear: 2018, endYear: 2020 },
				summary:
					"Colaboré con startups y organizaciones culturales en estrategia, identidad digital y producto.",
				achievements: [
					"Lancé 12 experiencias web y mobile junto a equipos multidisciplinares.",
					"Prototipé conceptos para validar inversión antes de desarrollo.",
				],
			},
		],
	},

	projects: {
		intro: {
			label: "Trabajo seleccionado",
			title: "Proyectos que mueven una métrica, no solo píxeles.",
			description:
				"Casos de ejemplo con contexto, resultados y tecnologías. Cada bloque está listo para enlazar a un caso completo.",
		},
		items: [
			{
				code: "CASE_STUDY_01",
				category: "IA · B2B SaaS · 2026",
				title: "Nébula Command Center",
				summary:
					"Rediseño end-to-end de una plataforma de inteligencia operativa. Simplificamos señales complejas en decisiones priorizadas para líderes y equipos de campo.",
				preview: {
					src: "/images/proyecto-nebula.jpg",
					alt: "Dashboard de Nébula Command Center en un monitor de escritorio",
				},
				tone: "primary",
				technologies: [
					"Research",
					"Product strategy",
					"Figma",
					"React",
				],
				results: [
					{ value: "−38%", label: "tiempo hasta valor" },
					{ value: "+21", label: "NPS de producto" },
				],
				link: { label: "Ver caso", href: "#" },
				featured: true,
			},
			{
				code: "CASE_STUDY_02",
				category: "Fintech · Activación",
				title: "Orbit onboarding",
				summary:
					"Un onboarding progresivo que convirtió requisitos regulatorios en una experiencia guiada y transparente.",
				preview: {
					src: "/images/proyecto-orbit.jpg",
					alt: "Pantallas móviles del onboarding de Orbit",
				},
				tone: "secondary",
				technologies: ["UX/UI", "Testing"],
				results: [{ value: "+17pp", label: "activación" }],
				link: { label: "Ver caso Orbit onboarding", href: "#" },
				featured: false,
			},
			{
				code: "CASE_STUDY_03",
				category: "Sistema · Escala",
				title: "Atlas design system",
				summary:
					"Tokens, componentes y gobernanza para alinear producto, diseño e ingeniería en cinco squads.",
				preview: {
					src: "/images/proyecto-atlas.jpg",
					alt: "Documentación de componentes del design system Atlas",
				},
				tone: "tertiary",
				technologies: ["Tokens", "Storybook"],
				results: [{ value: "3×", label: "velocidad de entrega" }],
				link: { label: "Ver caso Atlas design system", href: "#" },
				featured: false,
			},
		],
	},

	education: {
		intro: {
			label: "Aprendizaje & método",
			title: "Curiosidad estructurada. Progreso visible.",
			description:
				"Formación y certificaciones de ejemplo, más un método simple para convertir incertidumbre en dirección.",
		},
		credentialsLabel: "Formación / Certificaciones",
		credentials: [
			{
				year: 2025,
				type: "Certificación",
				title: "AI Product Management",
				institution: "Product School · Online",
			},
			{
				year: 2022,
				type: "Programa avanzado",
				title: "Service Design",
				institution: "Hyper Island · Madrid",
			},
			{
				year: 2018,
				type: "Grado",
				title: "Diseño y Tecnologías Creativas",
				institution: "Universitat Politècnica de València",
			},
		],
		method: {
			label: "Mi forma de trabajar",
			status: "● ITERATIVA",
			steps: [
				{
					title: "Entender el sistema",
					description:
						"Alineo objetivos, actores y señales antes de definir la solución.",
				},
				{
					title: "Reducir la incertidumbre",
					description:
						"Investigo lo necesario y hago explícitas las hipótesis críticas.",
				},
				{
					title: "Prototipar para decidir",
					description:
						"Materializo opciones pronto para aprender con usuarios y equipo.",
				},
				{
					title: "Medir y evolucionar",
					description:
						"Lanzo con métricas claras y convierto hallazgos en siguientes pasos.",
				},
			],
		},
	},

	contact: {
		label: "Contacto",
		title: "¿Construimos algo que merezca existir?",
		description:
			"Estoy disponible para retos de producto, colaboraciones selectas y conversaciones sobre diseño, tecnología e inteligencia artificial.",
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
		note: "DISEÑADO CON CURIOSIDAD · CONTENIDO EDITABLE",
		copyright: "© 2026 Alex Rivera. Todos los derechos reservados.",
	},
};
