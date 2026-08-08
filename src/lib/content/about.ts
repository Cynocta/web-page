/**
 * Copy for /nosotros.
 *
 * ⚠️ BORRADOR — pendiente de aprobación de los fundadores.
 *
 * Mission, vision, values and culture below are a proposal written from what
 * the rest of the site already claims, not statements the founders have
 * approved. They read as facts about the company, so they should be reviewed
 * and edited before this page is treated as final.
 *
 * `history` is deliberately null: a founding story is not something that can be
 * inferred, and inventing one would be fabricating the company's own record.
 * The page skips the section entirely until it is filled in.
 */

export type Value = { num: string; title: string; description: string };

export const about = {
    metaTitle: "Nosotros",
    metaDescription:
        "Cynocta es un estudio de software enfocado en automatización e inteligencia artificial para empresas en Latinoamérica. Cómo trabajamos y quiénes estamos detrás.",

    eyebrow: "Nosotros",
    heading: "Un equipo pequeño que construye sistemas que aguantan.",
    intro:
        "Cynocta nace de una observación simple: la mayoría de los negocios no pierde clientes por su producto, sino por el sistema que hay alrededor. Nos dedicamos a cerrar esa distancia con software, automatización e inteligencia artificial.",
    facts: [
        { value: "Colombia", label: "Dónde estamos" },
        { value: "LATAM", label: "Dónde trabajamos" },
        { value: "Español", label: "Idioma" },
    ],

    /**
     * Null until the founders write it. Rendering a plausible-sounding origin
     * story would be inventing the company's own history.
     */
    history: null as { title: string; body: string[] } | null,

    mission: {
        eyebrow: "Misión",
        title: "Que la tecnología deje de ser un proyecto y pase a ser una herramienta.",
        body: "Implementamos sistemas que hacen un trabajo concreto y medible desde la primera semana. No vendemos transformación digital ni horas de desarrollo: entregamos una pieza que funciona, se puede medir y el cliente puede llevarse si mañana decide trabajar con otro.",
    },

    vision: {
        eyebrow: "Visión",
        title: "Que automatizar deje de ser algo solo para empresas grandes.",
        body: "Las herramientas para automatizar un negocio llevan años siendo accesibles. Lo que falta es quien las implemente bien y en español, sin proyectos de seis meses ni contratos de permanencia. Queremos ser esa opción para las PYMES de Latinoamérica.",
    },

    valuesEyebrow: "Valores",
    valuesTitle: "Cuatro cosas que no negociamos",
    valuesIntro:
        "No son un póster de oficina. Son las reglas con las que decidimos qué aceptamos, qué cobramos y qué recomendamos.",
    values: [
        {
            num: "01",
            title: "Decir que no",
            description:
                "Si un proyecto no va a mover la aguja, lo decimos antes de cotizar. Cobrar por implementar algo que no hacía falta es la forma más rápida de perder una recomendación.",
        },
        {
            num: "02",
            title: "Sin ataduras",
            description:
                "El código, los flujos y los datos quedan a tu nombre. Construimos sobre herramientas estándar y abiertas para que cambiar de proveedor sea una decisión tuya, no un rescate.",
        },
        {
            num: "03",
            title: "Números antes que opiniones",
            description:
                "Cada implementación sale con analítica configurada. Si no se puede medir si funcionó, no sabemos si funcionó, y entonces la siguiente decisión es una corazonada.",
        },
        {
            num: "04",
            title: "Entregar antes de prometer",
            description:
                "Trabajamos por etapas y cada una sale a producción antes de empezar la siguiente. Es más lento de vender y mucho más difícil de fallar.",
        },
    ] satisfies Value[],

    cultureEyebrow: "Cultura",
    cultureTitle: "Cómo es trabajar con nosotros",
    culture: [
        {
            title: "Equipo pequeño, a propósito",
            description:
                "Hablas con quien construye. No hay una capa de gestión de cuenta entre tú y la persona que escribe el código, y eso se nota en la velocidad de las decisiones.",
        },
        {
            title: "Pocos proyectos a la vez",
            description:
                "Preferimos rechazar trabajo antes que repartir la atención. Si te decimos que empezamos en tres semanas, es porque en tres semanas hay alguien libre de verdad.",
        },
        {
            title: "Remoto y asíncrono",
            description:
                "Trabajamos desde Colombia con clientes de toda LATAM. Las reuniones son pocas y con agenda; el resto se resuelve por escrito, que además deja registro.",
        },
        {
            title: "Documentar es parte del trabajo",
            description:
                "Cada flujo queda explicado: qué lo dispara, qué hace y qué pasa si falla. Una automatización que solo nosotros entendemos es un problema futuro tuyo.",
        },
    ],

    processEyebrow: "Forma de trabajar",
    processIntro:
        "El mismo método en todos los proyectos, sea una web de dos semanas o una integración de dos meses.",

    ctaTitle: "¿Hablamos de tu caso?",
    ctaBody:
        "Media hora para entender qué se te está escapando. Si no somos la opción correcta, te lo decimos ahí mismo.",
    ctaLabel: "Agendar diagnóstico",
};
