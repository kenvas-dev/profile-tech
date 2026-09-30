import type { SectionIntro } from "./shared";

export interface Credential {
	readonly year: number;
	readonly type: string;
	readonly title: string;
	readonly institution: string;
}

export interface MethodStep {
	readonly title: string;
	readonly description: string;
}

export interface Education {
	readonly intro: SectionIntro;
	readonly credentialsLabel: string;
	readonly credentials: readonly Credential[];
	readonly method: {
		readonly label: string;
		readonly status: string;
		readonly steps: readonly MethodStep[];
	};
}
