import type { IconName } from "@domain/entities/shared";

export type UiIconName =
	IconName | "arrow-up-right" | "arrow-down-right" | "send" | "scan-line";

interface IconDefinition {
	readonly viewBox: string;
	readonly paths: readonly string[];
	readonly circles?: readonly { cx: number; cy: number; r: number }[];
}

/** Trazados exportados de Figma (Lucide). Se pintan con `currentColor`. */
export const ICONS: Record<UiIconName, IconDefinition> = {
	"arrow-up-right": {
		viewBox: "0 0 16 16",
		paths: ["M11.33 11.33V4.67H4.67M11.33 4.67 4.67 11.33"],
	},
	"arrow-down-right": {
		viewBox: "0 0 16 16",
		paths: ["M4.67 4.67 11.33 11.33M4.67 11.33H11.33V4.67"],
	},
	send: {
		viewBox: "0 0 16 16",
		paths: [
			"M14.57 1.43 7.28 8.72",
			"M9.69 14.46a.33.33 0 0 0 .63-.02L14.65 1.77a.33.33 0 0 0-.42-.42L1.56 5.68a.33.33 0 0 0-.02.63l5.29 2.12c.33.13.61.41.74.74l2.12 5.29Z",
		],
	},
	"scan-line": {
		viewBox: "0 0 14 14",
		paths: [
			"M1.75 4.08V2.92c0-.65.52-1.17 1.17-1.17h1.16",
			"M9.92 1.75h1.16c.65 0 1.17.52 1.17 1.17v1.16",
			"M12.25 9.92v1.16c0 .65-.52 1.17-1.17 1.17H9.92",
			"M4.08 12.25H2.92c-.65 0-1.17-.52-1.17-1.17V9.92",
			"M4.08 7h5.84",
		],
	},
	radar: {
		viewBox: "0 0 20 20",
		paths: [
			"M5.82 2.78A8.33 8.33 0 0 1 15.89 4.11L11.17 8.82",
			"M3.33 5h.01",
			"M1.91 8.02a8.33 8.33 0 1 0 15.85-1.06",
			"M13.53 6.47A5 5 0 0 0 6.86 13.89",
			"M10 15h.01",
			"M14.99 9.72a5 5 0 0 1-1.85 4.17",
		],
		circles: [{ cx: 10, cy: 10, r: 1.67 }],
	},
	waypoints: {
		viewBox: "0 0 20 20",
		paths: ["M8.82 4.51 4.51 8.82", "M15.49 11.18l-4.31 4.31", "M5 10h10"],
		circles: [
			{ cx: 3.33, cy: 10, r: 1.67 },
			{ cx: 16.67, cy: 10, r: 1.67 },
			{ cx: 10, cy: 16.67, r: 1.67 },
			{ cx: 10, cy: 3.33, r: 1.67 },
		],
	},
	sparkles: {
		viewBox: "0 0 20 20",
		paths: [
			"M16.67 1.67V5",
			"M18.33 3.33H15",
			"M9.18 2.35a.83.83 0 0 1 1.64 0l.88 4.63c.12.66.64 1.18 1.32 1.33l4.63.87a.83.83 0 0 1 0 1.64l-4.63.88c-.68.14-1.2.66-1.32 1.32l-.88 4.63a.83.83 0 0 1-1.64 0l-.88-4.63a1.67 1.67 0 0 0-1.32-1.32l-4.63-.88a.83.83 0 0 1 0-1.64l4.63-.87c.67-.15 1.2-.67 1.32-1.33l.88-4.63Z",
		],
		circles: [{ cx: 3.33, cy: 16.67, r: 1.67 }],
	},
	linkedin: {
		viewBox: "0 0 18 18",
		paths: [
			"M12 6a4.5 4.5 0 0 1 4.5 4.5v5.25h-3V10.5a1.5 1.5 0 0 0-3 0v5.25h-3V10.5A4.5 4.5 0 0 1 12 6Z",
			"M4.5 6.75h-3v9h3v-9Z",
		],
		circles: [{ cx: 3, cy: 3, r: 1.5 }],
	},
	github: {
		viewBox: "0 0 18 18",
		paths: [
			"M6.75 16.5v-3a3.57 3.57 0 0 1 .75-2.63c-2.25 0-4.5-1.5-4.5-4.12a4.14 4.14 0 0 1 .75-2.63 4.12 4.12 0 0 1 0-2.62s.75 0 2.25 1.12a10.6 10.6 0 0 1 6 0c1.5-1.12 2.25-1.12 2.25-1.12.21.86.21 1.76 0 2.62a4.1 4.1 0 0 1 .75 2.63c0 2.62-2.25 4.12-4.5 4.12a3.57 3.57 0 0 1 .75 2.63v3",
			"M6.75 13.5C3.37 15 3 12 1.5 12",
		],
	},
	"map-pin": {
		viewBox: "0 0 18 18",
		paths: [
			"M15 7.5c0 3.75-4.15 7.65-5.55 8.85a.75.75 0 0 1-.9 0C7.15 15.15 3 11.25 3 7.5a6 6 0 0 1 12 0Z",
		],
		circles: [{ cx: 9, cy: 7.5, r: 2.25 }],
	},
};
