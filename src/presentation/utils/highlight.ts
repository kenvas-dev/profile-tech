/**
 * Resaltador de sintaxis mínimo (sin dependencias) para el `CodeEditor`.
 * Reconoce lo necesario para TypeScript, JavaScript y SCSS en extractos cortos.
 * @packageDocumentation
 */

/** Categoría de un fragmento de código; cada una tiene su color en el editor. */
export type TokenCategory =
	| "comment"
	| "string"
	| "keyword"
	| "at-rule"
	| "selector"
	| "number"
	| "function"
	| "property"
	| "punctuation"
	| "plain";

/** Fragmento de código con su categoría. */
export interface Token {
	readonly category: TokenCategory;
	readonly text: string;
}

const KEYWORDS =
	"import|from|export|default|const|type|class|async|await|return|private|readonly|as|typeof|new";

/** Reglas evaluadas en orden; la primera que coincide al inicio del texto gana. */
const TOKEN_RULES: readonly (readonly [TokenCategory, RegExp])[] = [
	["comment", /^\/\/.*/],
	["string", /^"(?:[^"\\]|\\.)*"/],
	["at-rule", /^@[\w-]+/],
	["selector", /^(?:\.c-[\w-]+|&[\w-]+)/],
	["keyword", new RegExp(`^(?:${KEYWORDS})\\b`)],
	["number", /^\d+(?:\.\d+)?(?:px|%|deg|s)?/],
	["function", /^[A-Za-z_$][\w$-]*(?=\()/],
	["property", /^[A-Za-z_$][\w$-]*(?=\s*:)/],
	["plain", /^[A-Za-z_$][\w$-]*/],
	["punctuation", /^[{}()[\];,.:=<>|&?!+*/-]/],
	["plain", /^\s+/],
];

/** Divide una línea en tokens; fusiona los fragmentos `plain` consecutivos. */
const tokenizeLine = (line: string): Token[] => {
	const tokens: Token[] = [];
	let remainingText = line;

	const appendToken = (category: TokenCategory, text: string) => {
		const previousToken = tokens.at(-1);
		if (previousToken?.category === "plain" && category === "plain") {
			tokens[tokens.length - 1] = {
				category,
				text: previousToken.text + text,
			};
		} else {
			tokens.push({ category, text });
		}
	};

	while (remainingText.length > 0) {
		const matchingRule = TOKEN_RULES.find(([, pattern]) =>
			pattern.test(remainingText),
		);
		const matchedText = matchingRule
			? (matchingRule[1].exec(remainingText)?.[0] ?? remainingText[0])
			: remainingText[0];
		appendToken(matchingRule?.[0] ?? "plain", matchedText);
		remainingText = remainingText.slice(matchedText.length);
	}

	return tokens;
};

/**
 * Divide el código en líneas de tokens para pintarlo con resaltado de sintaxis.
 * @param code Código fuente (puede contener varias líneas).
 * @returns Una lista de tokens por línea.
 */
export const highlight = (code: string): Token[][] =>
	code.split("\n").map(tokenizeLine);
