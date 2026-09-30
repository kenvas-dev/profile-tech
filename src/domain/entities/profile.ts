import type { Metric } from "./shared";

export interface Profile {
	readonly label: string;
	readonly title: string;
	readonly biography: string;
	readonly focus: string;
	readonly metrics: readonly Metric[];
}
