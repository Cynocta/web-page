export type Founder = {
    name: string;
    /** Initials for the photo placeholder. */
    initials: string;
    role: string;
    bio: string;
    /** Empty until the profiles exist — the UI hides the link rather than dead-ending. */
    linkedin?: string;
    github?: string;
    /** Set once the professional photograph replaces the placeholder. */
    photo?: string;
    photoAlt?: string;
};

export const foundersSection = {
    eyebrow: "Equipo",
    title: "Conoce a nuestros fundadores",
    intro:
        "Detrás de Cynocta hay personas apasionadas por crear soluciones tecnológicas que generan impacto real para las empresas.",
    /** Shown on the placeholder so it reads as intentional, not as a broken image. */
    photoPendingLabel: "Fotografía profesional pendiente",
};

export const founders: Founder[] = [
    {
        name: "Diego Carrasquilla",
        initials: "DC",
        role: "Cofundador & Software Engineer",
        bio: "Especialista en desarrollo de software, automatización de procesos, inteligencia artificial y arquitectura de soluciones. Apasionado por crear productos escalables que ayuden a las empresas a crecer mediante tecnología.",
        linkedin: "",
        github: "",
    },
    {
        name: "Mateo Giraldo",
        initials: "MG",
        role: "Cofundador & Software Engineer",
        bio: "Especialista en desarrollo de software y construcción de soluciones tecnológicas enfocadas en rendimiento, calidad y escalabilidad. Trabaja en la creación de productos digitales modernos con una fuerte orientación hacia la experiencia del usuario.",
        linkedin: "",
        github: "",
    },
];
