/**
 * Adaptador de salida en memoria del CV.
 * @packageDocumentation
 */
import type { Curriculum } from "@domain/entities/curriculum";
import type { CurriculumRepository } from "@domain/ports/CurriculumRepository";
import { InMemoryLocalizedRepository } from "./InMemoryLocalizedRepository";

/** Implementa {@link CurriculumRepository} con contenido estático (un módulo por idioma). */
export class InMemoryCurriculumRepository
	extends InMemoryLocalizedRepository<Curriculum>
	implements CurriculumRepository {}
