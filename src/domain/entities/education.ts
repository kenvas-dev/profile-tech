/**
 * Formación, certificaciones y método de trabajo.
 * @packageDocumentation
 */
import type { SectionIntro } from "./shared";

/** Título académico o certificación obtenida. */
export interface Credential {
	/** Año en que se obtuvo. */
	readonly completionYear: number;
	/** Tipo de credencial (p. ej. «Certificación», «Grado universitario»). */
	readonly credentialType: string;
	/** Nombre del título o certificación. */
	readonly title: string;
	/** Institución que la emite, opcionalmente con su ubicación. */
	readonly institutionName: string;
}

/** Paso del método de trabajo. */
export interface MethodStep {
	readonly title: string;
	readonly description: string;
}

/** Panel con el método de trabajo, paso a paso. */
export interface WorkMethod {
	readonly sectionLabel: string;
	/** Etiqueta de estado decorativa (p. ej. «● ITERATIVA»). */
	readonly statusLabel: string;
	/** Pasos en orden de ejecución. */
	readonly steps: readonly MethodStep[];
}

/** Sección de formación. */
export interface Education {
	readonly intro: SectionIntro;
	/** Rótulo de la lista de credenciales. */
	readonly credentialsLabel: string;
	/** Credenciales; la aplicación las ordena de la más reciente a la más antigua. */
	readonly credentials: readonly Credential[];
	readonly workMethod: WorkMethod;
}
