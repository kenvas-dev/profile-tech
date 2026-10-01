export type TokenType =
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

export interface Token {
	readonly type: TokenType;
	readonly text: string;
}

const KEYWORDS =
	"import|from|export|default|const|type|class|async|await|return|private|readonly|as|typeof|new";

/** Reglas evaluadas en orden; la primera que coincide al inicio del texto gana. */
const RULES: readonly (readonly [TokenType, RegExp])[] = [
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

const tokenizeLine = (line: string): Token[] => {
	const tokens: Token[] = [];
	let rest = line;

	const push = (type: TokenType, text: string) => {
		const last = tokens.at(-1);
		if (last && last.type === type && type === "plain") {
			tokens[tokens.length - 1] = { type, text: last.text + text };
		} else {
			tokens.push({ type, text });
		}
	};

	while (rest.length > 0) {
		const rule = RULES.find(([, pattern]) => pattern.test(rest));
		const match = rule ? (rule[1].exec(rest)?.[0] ?? rest[0]) : rest[0];
		push(rule?.[0] ?? "plain", match);
		rest = rest.slice(match.length);
	}

	return tokens;
};

/** Divide el código en líneas de tokens para pintarlo con resaltado de sintaxis. */
export const highlight = (code: string): Token[][] =>
	code.split("\n").map(tokenizeLine);
