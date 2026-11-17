/**
 * Adaptador de salida en memoria del portfolio.
 * @packageDocumentation
 */
import type { Portfolio } from "@domain/entities/portfolio";
import type { PortfolioRepository } from "@domain/ports/PortfolioRepository";
import { InMemoryLocalizedRepository } from "./InMemoryLocalizedRepository";

/**
 * Implementa {@link PortfolioRepository} con contenido estático (un módulo por
 * idioma). Para usar un CMS o una API basta con otro adaptador del mismo puerto.
 */
export class InMemoryPortfolioRepository
	extends InMemoryLocalizedRepository<Portfolio>
	implements PortfolioRepository {}
