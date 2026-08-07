import type { SolutionDetail, SolutionSlug, SolutionsHub } from "./types";

export const solutionsHubEs: SolutionsHub = {
    metaTitle: "Soluciones de automatización por tipo de negocio",
    metaDescription:
        "Automatización comercial, operativa e IA empresarial para PYMES y empresas en Latinoamérica. Elige por tu situación, no por la tecnología.",
    eyebrow: "Soluciones",
    heading: "Empieza por tu problema, no por la herramienta.",
    intro:
        "Los servicios describen lo que construimos. Las soluciones describen para quién y para qué. Si no sabes qué necesitas, este es el camino más corto.",
    listTitle: "Cinco puntos de partida",
};

export const solutionsEs: Record<SolutionSlug, SolutionDetail> = {
    pymes: {
        slug: "pymes",
        navLabel: "Para PYMES",
        cardTitle: "Para PYMES",
        cardSummary:
            "Todo pasa por el dueño y el día no da para más. Automatizar lo que no exige criterio.",
        metaTitle: "Automatización con IA para PYMES",
        metaDescription:
            "Automatización para pequeñas y medianas empresas: responder a tiempo, dejar de depender del dueño y ordenar el seguimiento sin contratar más gente.",
        eyebrow: "Solución",
        heading: "Crecer sin que todo dependa de ti.",
        intro:
            "En una PYME el cuello de botella casi nunca es el producto: es que las decisiones, las respuestas y el seguimiento pasan por una o dos personas. Automatizamos la parte que no exige criterio para que tu tiempo vaya a la que sí.",
        facts: [
            { value: "Desde 750 USD", label: "Proyecto inicial" },
            { value: "2–4 semanas", label: "Primera entrega" },
            { value: "Por etapas", label: "Cómo se implementa" },
        ],
        situation: {
            title: "Si te suena, es para ti",
            body: "Contestas mensajes entre reuniones. Los prospectos se enfrían porque nadie hizo seguimiento. Si te tomas una semana libre, el negocio se frena. No es falta de esfuerzo: es que no hay un sistema que trabaje cuando tú no puedes.",
        },
        outcomes: {
            title: "Qué cambia",
            items: [
                {
                    title: "Dejas de perder por responder tarde",
                    description:
                        "Las consultas se atienden en segundos a cualquier hora, y las que valen tu tiempo llegan filtradas.",
                },
                {
                    title: "El negocio deja de depender de tu presencia",
                    description:
                        "Agendar, responder dudas frecuentes y hacer seguimiento ocurre sin que nadie lo empuje.",
                },
                {
                    title: "Empiezas pequeño y creces con datos",
                    description:
                        "Un flujo primero, medido y funcionando, antes de invertir en el siguiente. Sin proyectos de seis meses.",
                },
            ],
        },
        delivers: {
            title: "Con qué se resuelve",
            intro: "Casi siempre es una combinación de estos dos o tres servicios.",
            services: ["chatbot-whatsapp", "paginas-web-que-convierten", "integracion-crm"],
        },
        ctaTitle: "¿Empezamos por lo que más te duele?",
        ctaBody:
            "Cuéntanos tu caso en cuatro preguntas. Te decimos qué automatizar primero y qué no vale la pena todavía.",
    },

    empresas: {
        slug: "empresas",
        navLabel: "Para Empresas",
        cardTitle: "Para Empresas",
        cardSummary:
            "Varios equipos, varios sistemas y datos que no se hablan entre sí.",
        metaTitle: "Automatización e IA para empresas medianas y grandes",
        metaDescription:
            "Integración de sistemas, automatización de procesos entre áreas y agentes de IA sobre datos propios, con trazabilidad y control de accesos.",
        eyebrow: "Solución",
        heading: "Conectar lo que ya tienes, no reemplazarlo.",
        intro:
            "Cuando hay varias áreas y varios sistemas, el problema deja de ser la falta de herramientas y pasa a ser que ninguna se habla con la otra. El trabajo real está en las costuras: los traspasos entre equipos, los datos que se copian a mano y los procesos que nadie ve completos.",
        facts: [
            { value: "Proyecto a medida", label: "Alcance" },
            { value: "Por fases", label: "Implementación" },
            { value: "Con trazabilidad", label: "Auditoría" },
        ],
        situation: {
            title: "Si te suena, es para ti",
            body: "Tienes CRM, ERP y hojas de cálculo que conviven mal. Cada área tiene su versión de los números. Un proceso que cruza tres equipos tarda días porque cada traspaso es manual. Y cambiar de sistema no es una opción realista.",
        },
        outcomes: {
            title: "Qué cambia",
            items: [
                {
                    title: "Los sistemas dejan de ser islas",
                    description:
                        "Integraciones sobre las APIs que ya existen, con manejo de errores y reintentos, no scripts que fallan en silencio.",
                },
                {
                    title: "Los procesos cruzan áreas sin fricción",
                    description:
                        "Los traspasos entre equipos se ejecutan solos y quedan registrados, con alertas cuando algo se atasca.",
                },
                {
                    title: "Todo queda auditable",
                    description:
                        "Cada acción automatizada deja rastro. Las decisiones sensibles siguen requiriendo confirmación humana.",
                },
            ],
        },
        delivers: {
            title: "Con qué se resuelve",
            intro: "Proyectos que casi siempre combinan integración, automatización y agentes.",
            services: ["integracion-crm", "automatizacion-de-procesos", "agentes-ia"],
        },
        ctaTitle: "Hablemos del proceso que más te cuesta",
        ctaBody:
            "Una sesión para mapear dónde se atasca hoy y qué tendría más retorno automatizar primero.",
    },

    "automatizacion-comercial": {
        slug: "automatizacion-comercial",
        navLabel: "Automatización Comercial",
        cardTitle: "Automatización Comercial",
        cardSummary:
            "Del primer mensaje al cierre: captar, calificar, agendar y hacer seguimiento.",
        metaTitle: "Automatización comercial: captación, calificación y seguimiento",
        metaDescription:
            "Automatiza el embudo comercial completo: respuesta inmediata, calificación de prospectos, agendamiento y seguimiento sin que nadie lo empuje.",
        eyebrow: "Solución",
        heading: "El embudo funciona cuando nadie tiene que empujarlo.",
        intro:
            "La mayoría de los negocios no tiene un problema de generación de leads: tiene un problema de qué pasa después. Entre que alguien pregunta y alguien compra hay cuatro o cinco pasos que hoy dependen de que una persona se acuerde.",
        facts: [
            { value: "< 5 s", label: "Primera respuesta" },
            { value: "24/7", label: "Cobertura" },
            { value: "Medible", label: "Cada etapa" },
        ],
        situation: {
            title: "Si te suena, es para ti",
            body: "Inviertes en publicidad y los leads llegan, pero se enfrían. Nadie sabe cuántos quedaron sin respuesta. El equipo comercial dedica la mitad del día a filtrar gente que nunca iba a comprar.",
        },
        outcomes: {
            title: "Qué cambia",
            items: [
                {
                    title: "Nadie espera",
                    description:
                        "La respuesta inicial es inmediata en el canal donde preguntó el cliente, con la información que necesita para avanzar.",
                },
                {
                    title: "El equipo solo habla con quien vale",
                    description:
                        "La calificación ocurre antes: presupuesto, urgencia y encaje se resuelven en la conversación automática.",
                },
                {
                    title: "El seguimiento no se olvida",
                    description:
                        "Secuencias que reactivan al que no respondió, sin que nadie tenga que revisar una lista.",
                },
            ],
        },
        delivers: {
            title: "Con qué se resuelve",
            intro: "El bloque comercial completo, de la captación al CRM.",
            services: ["chatbot-whatsapp", "integracion-crm", "paginas-web-que-convierten"],
        },
        ctaTitle: "¿Cuántos leads se te enfriaron este mes?",
        ctaBody:
            "Si no lo sabes, ese es el primer dato que vamos a poner sobre la mesa.",
    },

    "automatizacion-operativa": {
        slug: "automatizacion-operativa",
        navLabel: "Automatización Operativa",
        cardTitle: "Automatización Operativa",
        cardSummary:
            "Tareas internas repetitivas: traspaso de datos, reportes, facturación y recordatorios.",
        metaTitle: "Automatización de procesos operativos internos",
        metaDescription:
            "Elimina el trabajo manual repetitivo: traspaso de datos entre sistemas, generación de reportes, facturación recurrente y recordatorios automáticos.",
        eyebrow: "Solución",
        heading: "El trabajo que nadie debería estar haciendo a mano.",
        intro:
            "Copiar datos de un sistema a otro, armar el reporte del mes, enviar el mismo recordatorio de siempre. Son horas que se van en tareas con reglas claras, donde una automatización no se cansa ni se equivoca.",
        facts: [
            { value: "1–3 semanas", label: "Por flujo" },
            { value: "Desde 750 USD", label: "Proyecto" },
            { value: "Documentado", label: "Cada flujo" },
        ],
        situation: {
            title: "Si te suena, es para ti",
            body: "Alguien de tu equipo dedica varias horas a la semana a mover información entre herramientas. El reporte mensual se arma a mano. Los errores aparecen justo donde hubo copiar y pegar.",
        },
        outcomes: {
            title: "Qué cambia",
            items: [
                {
                    title: "Se recuperan horas cada semana",
                    description:
                        "Las tareas con reglas claras dejan de ocupar a una persona, sin despedir a nadie: ese tiempo se reasigna.",
                },
                {
                    title: "Los errores manuales desaparecen",
                    description:
                        "Los datos viajan una sola vez y siempre igual, con validación y reintentos si algo falla.",
                },
                {
                    title: "Todo queda documentado",
                    description:
                        "Qué dispara cada flujo, qué hace y qué pasa si falla. No una caja negra que solo nosotros entendemos.",
                },
            ],
        },
        delivers: {
            title: "Con qué se resuelve",
            intro: "Automatización de procesos, apoyada en integraciones cuando hace falta.",
            services: ["automatizacion-de-procesos", "integracion-crm"],
        },
        ctaTitle: "¿Qué tarea repites cada semana?",
        ctaBody:
            "Empezamos por la que más horas consume con la lógica más simple. Suele pagarse sola en el primer mes.",
    },

    "ia-empresarial": {
        slug: "ia-empresarial",
        navLabel: "IA Empresarial",
        cardTitle: "IA Empresarial",
        cardSummary:
            "Agentes que razonan sobre tus datos y ejecutan acciones, con límites y trazabilidad.",
        metaTitle: "Inteligencia artificial aplicada a empresas",
        metaDescription:
            "Agentes de IA sobre datos propios: consultan tu información, deciden qué herramienta usar y ejecutan acciones con salvaguardas y registro auditable.",
        eyebrow: "Solución",
        heading: "IA que hace algo, no que solo conversa.",
        intro:
            "La conversación no es el producto. Lo valioso es que el sistema consulte tu información real, decida qué hacer y lo ejecute: agendar, registrar, escalar o responder con datos que puedes verificar.",
        facts: [
            { value: "Sobre tus datos", label: "Conocimiento" },
            { value: "Con salvaguardas", label: "Control" },
            { value: "Auditable", label: "Cada decisión" },
        ],
        situation: {
            title: "Si te suena, es para ti",
            body: "Probaste un chatbot y respondía genérico. O te preocupa que un modelo invente datos frente a un cliente. O tienes información valiosa —catálogo, políticas, histórico— que nadie consulta porque está dispersa.",
        },
        outcomes: {
            title: "Qué cambia",
            items: [
                {
                    title: "Responde con tu información, no de memoria",
                    description:
                        "Recuperación sobre fuentes tuyas. Cuando no encuentra el dato, lo dice y deriva, en vez de completar.",
                },
                {
                    title: "Ejecuta, no solo sugiere",
                    description:
                        "Consulta disponibilidad, crea registros y agenda. Las acciones sensibles requieren confirmación humana.",
                },
                {
                    title: "Puedes auditar qué hizo y por qué",
                    description:
                        "Cada decisión y cada acción queda registrada. Medimos aciertos sobre casos reales y ajustamos con esos datos.",
                },
            ],
        },
        delivers: {
            title: "Con qué se resuelve",
            intro: "Agentes como núcleo, con automatización e integraciones alrededor.",
            services: ["agentes-ia", "chatbot-whatsapp", "automatizacion-de-procesos"],
        },
        ctaTitle: "¿Qué debería poder resolver solo?",
        ctaBody:
            "Definimos el alcance y los límites antes de construir nada. Es la parte que más determina si funciona.",
    },
};
