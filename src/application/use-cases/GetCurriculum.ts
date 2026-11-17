/**
 * Caso de uso: obtener el CV listo para presentarse.
 * @packageDocumentation
 */
import type { Curriculum } from "@domain/entities/curriculum";
import type { Credential } from "@domain/entities/education";
import type { Locale } from "@domain/entities/locale";
import type { CurriculumRepository } from "@domain/ports/CurriculumRepository";

/** Ordena las credenciales de la más reciente a la más antigua. */
const byMostRecentCredential = (
	first: Credential,
	second: Credential,
): number => second.completionYear - first.completionYear;

/**
 * Obtiene el CV de un idioma y aplica sus reglas de presentación.
 *
 * La experiencia respeta el orden del contenido (el puesto principal primero,
 * aunque haya puestos simultáneos más recientes); la formación se ordena de
 * la más reciente a la más antigua.
 */
export class GetCurriculum {
	constructor(private readonly repository: CurriculumRepository) {}

	/**
	 * @param locale Idioma del contenido.
	 * @throws Error si no hay contenido para el idioma o no hay experiencia.
	 */
	async execute(locale: Locale): Promise<Curriculum> {
		const curriculum = await this.repository.findByLocale(locale);

		if (curriculum.experience.length === 0) {
			throw new Error("El CV debe incluir al menos un puesto.");
		}

		return {
			...curriculum,
			education: [...curriculum.education].sort(byMostRecentCredential),
		};
	}
}
