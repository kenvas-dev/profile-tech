/**
 * Datos estructurados schema.org (JSON-LD) para buscadores.
 * @packageDocumentation
 */
import type { PortfolioOverview } from "@application/use-cases/GetPortfolio";
import type { IconName } from "@domain/entities/shared";

interface StructuredDataUrls {
	/** Raíz del sitio, p. ej. https://profile-tech.vercel.app/ */
	readonly site: URL;
	/** URL canónica de la página actual. */
	readonly page: URL;
	/** Etiqueta BCP 47 del idioma de la página, p. ej. "es-SV". */
	readonly language: string;
	readonly languages: readonly string[];
}

/** Perfiles que Google puede asociar a la persona (sameAs). */
const SOCIAL_PROFILES: readonly IconName[] = ["linkedin", "github"];

/** Quita las llaves decorativas de la marca: "{UN1T7D}" → "UN1T7D". */
const plainBrand = (logo: string) => logo.replace(/[{}]/g, "");

/**
 * Grafo JSON-LD (schema.org) con la persona, el sitio y la página de perfil.
 * Se deriva del contenido del portfolio para no duplicar datos.
 */
export const buildStructuredData = (
	portfolio: PortfolioOverview,
	urls: StructuredDataUrls,
) => {
	const { identity, seo, hero, contact, education } = portfolio;
	const absolute = (path: string) => new URL(path, urls.site).href;

	const personId = absolute("#person");
	const websiteId = absolute("#website");

	const person = {
		"@type": "Person",
		"@id": personId,
		name: identity.fullName,
		alternateName: plainBrand(identity.brandMark),
		url: urls.page.href,
		image: absolute(hero.portrait.image.src),
		jobTitle: seo.jobTitles,
		description: seo.description,
		email: `mailto:${contact.email}`,
		address: {
			"@type": "PostalAddress",
			addressLocality: identity.address.locality,
			addressRegion: identity.address.region,
			addressCountry: identity.address.countryCode,
		},
		sameAs: contact.channels
			.filter((channel) => SOCIAL_PROFILES.includes(channel.iconName))
			.map((channel) => channel.href),
		knowsAbout: seo.expertise,
		knowsLanguage: urls.languages,
		alumniOf: education.credentials.map((credential) => ({
			"@type": "EducationalOrganization",
			name: credential.institutionName,
		})),
		hasCredential: education.credentials.map((credential) => ({
			"@type": "EducationalOccupationalCredential",
			name: credential.title,
			credentialCategory: credential.credentialType,
			dateCreated: String(credential.completionYear),
			recognizedBy: {
				"@type": "EducationalOrganization",
				name: credential.institutionName,
			},
		})),
	};

	const website = {
		"@type": "WebSite",
		"@id": websiteId,
		url: urls.site.href,
		name: `${identity.fullName} — Portfolio`,
		inLanguage: urls.languages,
		publisher: { "@id": personId },
	};

	const profilePage = {
		"@type": "ProfilePage",
		"@id": `${urls.page.href}#profilepage`,
		url: urls.page.href,
		name: seo.title,
		description: seo.description,
		inLanguage: urls.language,
		isPartOf: { "@id": websiteId },
		about: { "@id": personId },
		mainEntity: { "@id": personId },
		primaryImageOfPage: {
			"@type": "ImageObject",
			url: absolute(seo.socialImage.src),
			width: 1200,
			height: 630,
		},
	};

	return {
		"@context": "https://schema.org",
		"@graph": [person, website, profilePage],
	};
};
