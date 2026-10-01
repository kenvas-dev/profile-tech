import type { Contact, Footer, NavigationLink } from "./contact";
import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Hero, Identity } from "./identity";
import type { Profile } from "./profile";
import type { Projects } from "./projects";
import type { Seo } from "./seo";
import type { Skills } from "./skills";

export interface Portfolio {
	readonly seo: Seo;
	readonly identity: Identity;
	readonly navigation: readonly NavigationLink[];
	readonly hero: Hero;
	readonly profile: Profile;
	readonly skills: Skills;
	readonly experience: Experience;
	readonly projects: Projects;
	readonly education: Education;
	readonly contact: Contact;
	readonly footer: Footer;
}
