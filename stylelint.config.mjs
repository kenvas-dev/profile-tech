// Convención de nombres: BEM con namespace obligatorio.
//   c-  componente   ·   l-  layout
//   bloque__elemento--modificador (kebab-case en cada parte)
const kebab = "[a-z0-9]+(?:-[a-z0-9]+)*";
const bemClassPattern = new RegExp(
	`^(?:c|l)-${kebab}(?:__${kebab})?(?:--${kebab})?$`,
);

/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard-scss", "stylelint-config-html/astro"],
	plugins: ["stylelint-order"],
	rules: {
		"selector-class-pattern": [
			bemClassPattern,
			{
				message: (selector) =>
					`"${selector}" no sigue BEM con namespace (c-/l-)`,
			},
		],
		// Un bloque no debe estilar a otro: como máximo bloque + elemento/modificador.
		"selector-max-compound-selectors": 2,
		// :global() es de Astro: estila HTML generado fuera de la plantilla (set:html, JS).
		"selector-pseudo-class-no-unknown": [
			true,
			{ ignorePseudoClasses: ["global"] },
		],
		"selector-max-id": 0,
		"max-nesting-depth": [3, { ignoreAtRules: ["include", "media"] }],
		"declaration-no-important": [true, { severity: "warning" }],
		"color-named": "never",
		"color-no-hex": [true, { severity: "error" }],
		// Kebab-case; el prefijo `_` marca variables privadas del módulo.
		"scss/dollar-variable-pattern": [/^_?[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/],
		"scss/function-no-unknown": [
			true,
			{
				ignoreFunctions: [
					// Funciones propias (abstracts/_functions.scss y componentes).
					"color",
					"color-alpha",
					"font-family",
					"gutter",
					"z",
					"stripe-mask",
					// Falso positivo del plugin con argumentos multilínea.
					"linear-gradient",
				],
			},
		],
		// Orden: variables → @include sin bloque → declaraciones → @include con bloque (media) → reglas anidadas.
		"order/order": [
			"dollar-variables",
			"custom-properties",
			{ type: "at-rule", name: "include", hasBlock: false },
			"declarations",
			{ type: "at-rule", name: "include", hasBlock: true },
			"rules",
			{ type: "at-rule", name: "media" },
		],
	},
	overrides: [
		{
			// Los tokens son el único lugar donde se permiten valores de color literales.
			files: ["src/presentation/styles/abstracts/_variables.scss"],
			rules: { "color-no-hex": null },
		},
	],
};
