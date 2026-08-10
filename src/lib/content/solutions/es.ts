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

    explainer: {
        title: "Servicios o soluciones",
        body: "Un servicio es una pieza que construimos: un chatbot, una integración, un dashboard. Una solución es un problema completo, que casi siempre necesita dos o tres de esas piezas trabajando juntas. Si ya sabes qué te falta, entra por servicios. Si sabes qué te duele pero no qué lo arregla, empieza aquí: la página te dice qué servicios lo componen y por qué esos.",
    },

    criteria: {
        title: "Cómo elegir si te reconoces en varias",
        intro: "Es lo normal: las cinco se solapan. Estas tres preguntas suelen ordenar la decisión.",
        items: [
            {
                title: "¿El problema está antes o después de la venta?",
                description:
                    "Si se pierden clientes entre que preguntan y compran, es automatización comercial. Si el desgaste está en el trabajo interno una vez cerrada la venta, es operativa.",
            },
            {
                title: "¿Cuántas personas y sistemas hay en medio?",
                description:
                    "Con un equipo pequeño y dos o tres herramientas, empieza por PYMES. Con varias áreas y sistemas que no se hablan, el trabajo real está en las costuras y aplica Empresas.",
            },
            {
                title: "¿Basta con reglas o hace falta criterio?",
                description:
                    "Si las respuestas se pueden escribir por adelantado, no necesitas IA y ahorras dinero. Cuando cada caso es distinto o hay que consultar datos para decidir, entra IA empresarial.",
            },
        ],
    },

    faq: [
        {
            id: "soluciones-cual-primero",
            question: "¿Puedo contratar más de una solución a la vez?",
            answer:
                "Se puede, pero casi nunca conviene. Implementar dos frentes en paralelo duplica el tiempo de tu equipo en revisiones y hace imposible saber cuál de los dos movió el resultado. Lo habitual es cerrar el primero, medirlo y usar ese dato para decidir el siguiente.",
        },
        {
            id: "soluciones-vs-servicios",
            question: "¿Cuesta lo mismo entrar por soluciones que por servicios?",
            answer:
                "Sí: el precio depende de lo que se construye, no de la puerta por la que entras. Una solución es un conjunto de servicios, así que su costo es el de las piezas que la componen. Entrar por aquí solo cambia cómo se decide el alcance.",
        },
        {
            id: "soluciones-no-encaja",
            question: "¿Y si mi caso no encaja en ninguna?",
            answer:
                "Escríbenos y lo miramos. Estas cinco cubren lo que más nos llega, no todo lo que existe. Si tu problema es de otro tipo, la sesión de diagnóstico sirve igual para decirte si podemos ayudarte o si te conviene otro proveedor.",
        },
    ],
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
        approach: {
            title: "Cómo se implementa",
            intro: "Por etapas cortas, para que decidas seguir con un resultado en la mano y no con una promesa.",
            steps: [
                {
                    num: "01",
                    title: "Diagnóstico",
                    description:
                        "Una sesión para ver dónde se pierden consultas y cuánto cuesta cada fuga. Salimos con una lista priorizada, no con una propuesta genérica.",
                },
                {
                    num: "02",
                    title: "Primer flujo",
                    description:
                        "Automatizamos el punto que más duele, casi siempre la primera respuesta. Funcionando en dos o tres semanas.",
                },
                {
                    num: "03",
                    title: "Medición",
                    description:
                        "Dejamos el dato de antes y el de después. Si el flujo no movió nada, se ajusta antes de seguir ampliando.",
                },
                {
                    num: "04",
                    title: "Siguiente etapa",
                    description:
                        "Con el primer resultado decides si continúas. No comprometemos seis meses por adelantado.",
                },
            ],
        },
        faq: [
            {
                id: "pymes-crm-antes",
                question: "¿Necesito tener un CRM antes de automatizar?",
                answer:
                    "No. Se puede empezar por el canal donde ya te escriben, normalmente WhatsApp, y registrar en una hoja de cálculo. El CRM tiene sentido cuando el volumen justifica el orden: instalarlo primero suele terminar en una herramienta cara que nadie usa.",
            },
            {
                id: "pymes-tiempo",
                question: "¿Cuánto tiempo tengo que dedicarle yo?",
                answer:
                    "Unas tres o cuatro horas repartidas en las primeras dos semanas: la sesión de diagnóstico, una revisión de las respuestas que dará el sistema y una prueba antes de publicarlo. Después el mantenimiento normal son minutos al mes.",
            },
            {
                id: "pymes-negocio-especifico",
                question: "¿Y si mi negocio es muy específico?",
                answer:
                    "Es lo habitual, y por eso la primera sesión es de diagnóstico: los flujos se construyen sobre tu proceso real, no sobre una plantilla. Si tu caso no encaja con lo que sabemos hacer, lo decimos en esa sesión y no cobramos por descubrirlo.",
            },
        ],
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
        metaTitle: "Automatización e IA para medianas y grandes",
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
        approach: {
            title: "Cómo se implementa",
            intro: "Una prueba acotada antes que un despliegue grande: valida la integración y convence al resto de la organización.",
            steps: [
                {
                    num: "01",
                    title: "Mapeo",
                    description:
                        "Levantamos el proceso real, no el que está documentado. Casi siempre difieren, y esa diferencia es donde está el problema.",
                },
                {
                    num: "02",
                    title: "Prueba acotada",
                    description:
                        "Un proceso, un área, con el criterio de éxito definido antes de empezar y no después.",
                },
                {
                    num: "03",
                    title: "Integración",
                    description:
                        "Conexión sobre las APIs que ya existen, con manejo de errores, reintentos y alertas. Sin tocar los sistemas de registro.",
                },
                {
                    num: "04",
                    title: "Despliegue por fases",
                    description:
                        "Se amplía área por área. Cada fase entra con su documentación y su plan de reversión.",
                },
            ],
        },
        faq: [
            {
                id: "empresas-cambiar-sistemas",
                question: "¿Hay que cambiar los sistemas que ya usamos?",
                answer:
                    "No. El trabajo se hace sobre las APIs de lo que ya tienes: el CRM, el ERP y las herramientas de cada área siguen siendo el sistema de registro. Reemplazar un sistema es un proyecto distinto, mucho más caro, y rara vez es lo que resuelve el problema de fondo.",
            },
            {
                id: "empresas-acceso-datos",
                question: "¿Cómo se controla el acceso a los datos?",
                answer:
                    "Cada integración usa credenciales propias con el mínimo alcance necesario, y las acciones sensibles requieren confirmación humana. Queda registrado qué se ejecutó, cuándo y con qué datos, de modo que una auditoría pueda reconstruirlo.",
            },
            {
                id: "empresas-fallo-integracion",
                question: "¿Qué pasa si una integración falla?",
                answer:
                    "Se diseña asumiendo que va a fallar: reintentos con espera progresiva, alerta al responsable y una cola con lo que quedó pendiente. Lo que nunca hacemos es dejar que un fallo pase en silencio y se descubra semanas después.",
            },
        ],
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
        metaTitle: "Automatización comercial: captación y cierre",
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
        approach: {
            title: "Cómo se implementa",
            intro: "Se empieza contando lo que hoy se pierde: sin esa línea base, cualquier mejora posterior es una impresión.",
            steps: [
                {
                    num: "01",
                    title: "Auditoría del embudo",
                    description:
                        "Cuántas consultas llegan, cuántas se responden y en qué punto se caen. Ese número es la referencia contra la que se mide todo lo demás.",
                },
                {
                    num: "02",
                    title: "Respuesta y calificación",
                    description:
                        "Se automatiza el primer contacto y las preguntas que deciden si el prospecto encaja.",
                },
                {
                    num: "03",
                    title: "Agenda y CRM",
                    description:
                        "Lo calificado pasa a la agenda y queda registrado, sin que nadie transcriba nada a mano.",
                },
                {
                    num: "04",
                    title: "Seguimiento",
                    description:
                        "Secuencias para quien no respondió, con un corte claro para no perseguir a quien ya dijo que no.",
                },
            ],
        },
        faq: [
            {
                id: "comercial-reemplaza-equipo",
                question: "¿Esto reemplaza a mi equipo comercial?",
                answer:
                    "No: cambia en qué gastan el día. El sistema absorbe la primera respuesta, el filtrado y el seguimiento mecánico, y el equipo entra cuando hay una conversación que merece una persona. Lo que baja es el número de vendedores necesarios por cada cien leads.",
            },
            {
                id: "comercial-espantar-cliente",
                question: "¿Cómo se evita que el bot espante a un buen cliente?",
                answer:
                    "Con dos reglas: el sistema dice desde el principio que es un asistente, y escala a una persona en cuanto aparece una consulta compleja o una queja. Un bot que insiste en resolver lo que no puede pierde más ventas de las que gana.",
            },
            {
                id: "comercial-medir-aporte",
                question: "¿Se puede medir cuánto aporta?",
                answer:
                    "Sí, y es la razón de empezar por la auditoría. Se compara el mismo periodo antes y después en tres cifras: consultas que quedaron sin responder, tiempo hasta la primera respuesta y prospectos que llegaron a agendar.",
            },
        ],
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
        approach: {
            title: "Cómo se implementa",
            intro: "Un flujo a la vez, empezando por el que devuelve horas más rápido.",
            steps: [
                {
                    num: "01",
                    title: "Inventario de tareas",
                    description:
                        "Listamos lo repetitivo con su frecuencia y las horas que consume. Casi siempre aparecen tareas que nadie había contado.",
                },
                {
                    num: "02",
                    title: "Priorización",
                    description:
                        "Se empieza por la de más horas con la lógica más simple, que es donde el retorno llega antes.",
                },
                {
                    num: "03",
                    title: "Construcción",
                    description:
                        "El flujo se construye con validación de datos, reintentos y una alerta si algo falla.",
                },
                {
                    num: "04",
                    title: "Entrega documentada",
                    description:
                        "Qué lo dispara, qué hace, qué ocurre si falla y cómo pausarlo. En tu poder, no en el nuestro.",
                },
            ],
        },
        faq: [
            {
                id: "operativa-que-automatizar",
                question: "¿Qué tareas conviene automatizar primero?",
                answer:
                    "Las que se repiten con reglas claras y sin criterio: mover datos entre sistemas, generar el mismo reporte, enviar recordatorios. Lo que exige juicio —negociar, decidir una excepción— conviene dejarlo en manos de una persona aunque sea técnicamente automatizable.",
            },
            {
                id: "operativa-cambiar-herramienta",
                question: "¿Qué pasa si cambio de herramienta más adelante?",
                answer:
                    "Los flujos se construyen sobre herramientas estándar y quedan exportados en tu cuenta. Cambiar una pieza significa reescribir la conexión de esa pieza, no el proceso entero, y no dependes de nosotros para hacerlo.",
            },
            {
                id: "operativa-mantenimiento",
                question: "¿Cuánto cuesta mantenerlo?",
                answer:
                    "Un flujo estable casi no consume mantenimiento; lo que sí cuesta es la plataforma que lo ejecuta y el servidor si se autoaloja. El gasto crece cuando cambian las herramientas conectadas, no con el volumen de trabajo que el flujo hace.",
            },
        ],
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
        approach: {
            title: "Cómo se implementa",
            intro: "La mayor parte del trabajo no es el modelo: son los límites que lo rodean.",
            steps: [
                {
                    num: "01",
                    title: "Delimitar el alcance",
                    description:
                        "Qué preguntas debe resolver y cuáles no. Un agente sin límites definidos es exactamente el que termina inventando.",
                },
                {
                    num: "02",
                    title: "Conectar los datos",
                    description:
                        "Acceso a tus fuentes reales, para que responda con tu catálogo y tus políticas y no con lo que el modelo recuerde del mundo.",
                },
                {
                    num: "03",
                    title: "Herramientas y permisos",
                    description:
                        "Cada acción que puede ejecutar se define por separado con su alcance. Consultar es seguro; modificar requiere confirmación.",
                },
                {
                    num: "04",
                    title: "Pruebas y techo de gasto",
                    description:
                        "Se prueba con preguntas difíciles antes de publicar, y se fija un límite de consumo por conversación y por mes.",
                },
            ],
        },
        faq: [
            {
                id: "ia-inventa-informacion",
                question: "¿El agente puede inventarse información?",
                answer:
                    "Puede, si se le pregunta algo fuera de los datos que tiene. Se controla acotando sus respuestas a tus fuentes, dándole una salida explícita para decir que no lo sabe y escalando a una persona en lugar de improvisar. Es la parte que más pruebas exige.",
            },
            {
                id: "ia-datos-entrenamiento",
                question: "¿Nuestros datos entran a entrenar el modelo?",
                answer:
                    "No con la configuración que usamos: los planes empresariales de los proveedores permiten desactivar el uso de datos para entrenamiento, y es lo primero que se comprueba. Si el requisito es que la información no salga de tu infraestructura, se plantea con modelos autoalojados.",
            },
            {
                id: "ia-costo-operacion",
                question: "¿Cuánto cuesta operarlo?",
                answer:
                    "Cada conversación consume tokens del modelo, así que el costo crece con el uso y con la longitud de las conversaciones. Se controla acortando el contexto que se envía, cacheando las respuestas frecuentes y resolviendo con reglas lo que no necesita un modelo.",
            },
        ],
        ctaTitle: "¿Qué debería poder resolver solo?",
        ctaBody:
            "Definimos el alcance y los límites antes de construir nada. Es la parte que más determina si funciona.",
    },
};
