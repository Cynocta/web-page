"use client";

import { AnimatePresence, motion, type Variants, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Clock3,
  DatabaseZap,
  Globe,
  Menu,
  MessageCircle,
  Rocket,
  Sparkles,
  UserRoundX,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const whatsappNumber = "1234567890";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

const painPoints = [
  {
    title: "Clientes que preguntan y desaparecen",
    description:
      "Recibes interes, pero entre respuesta tardia y poco seguimiento, la oportunidad se enfria.",
    icon: UserRoundX,
  },
  {
    title: "Demasiado tiempo en tareas repetidas",
    description:
      "El equipo se atasca en responder lo mismo, agendar manualmente o copiar datos entre apps.",
    icon: Clock3,
  },
  {
    title: "Informacion dispersa",
    description:
      "Contactos, leads y clientes viven en distintos lugares y cuesta saber que funciona de verdad.",
    icon: DatabaseZap,
  },
];

const services = [
  {
    title: "Landing pages que convierten",
    description:
      "Paginas web claras y rapidas para captar leads, con enfoque comercial real para negocios que quieren escalar.",
    points: [
      "Mensajes comerciales directos",
      "Diseño responsive con alto impacto",
      "CTA optimizado para WhatsApp",
    ],
    icon: Globe,
  },
  {
    title: "Automatizacion de conversaciones",
    description:
      "Flujos para WhatsApp y canales de contacto que filtran, responden y derivan automaticamente.",
    points: [
      "Respuestas instantaneas",
      "Calificacion de prospectos",
      "Seguimiento sin friccion",
    ],
    icon: Bot,
  },
  {
    title: "Operacion sin caos",
    description:
      "Conectamos tus procesos para que el negocio trabaje con orden y datos utiles.",
    points: [
      "Centralizacion de contactos",
      "Alertas y recordatorios automaticos",
      "Integraciones ligeras a medida",
    ],
    icon: Workflow,
  },
  {
    title: "Reportes para decidir mejor",
    description:
      "Visualiza indicadores clave para saber que canal vende mas y donde optimizar.",
    points: [
      "Panel de conversion",
      "Embudo simple por etapas",
      "Metrica accionable para crecimiento",
    ],
    icon: ChartNoAxesCombined,
  },
];

const processSteps = [
  {
    title: "Diagnostico express",
    detail:
      "Detectamos cuellos de botella en captacion, respuesta y seguimiento en una sesion corta.",
  },
  {
    title: "Propuesta por etapas",
    detail:
      "Definimos un plan realista con entregables rapidos para que veas resultados desde el inicio.",
  },
  {
    title: "Implementacion guiada",
    detail:
      "Construimos la pagina, automatizaciones e integraciones con foco en simplicidad operativa.",
  },
  {
    title: "Optimizacion continua",
    detail:
      "Medimos conversion y ajustamos mensajes, flujos y ofertas para escalar tus ventas.",
  },
];

const plans = [
  {
    name: "Lanzamiento Digital",
    tagline: "Para empezar rapido",
    description:
      "Ideal si necesitas presencia profesional y generar conversaciones en WhatsApp.",
    features: [
      "Landing page completa",
      "Formulario y CTA por WhatsApp",
      "Copy comercial base",
      "Entrega optimizada para movil",
    ],
    highlighted: false,
    whatsappText: "Hola, me interesa el plan Lanzamiento Digital",
  },
  {
    name: "Automatizacion Comercial",
    tagline: "El plan mas solicitado",
    description:
      "Transforma consultas en oportunidades con respuestas, filtros y seguimiento automatico.",
    features: [
      "Todo lo del plan anterior",
      "Flujos de respuesta automatica",
      "Segmentacion de prospectos",
      "Recordatorios inteligentes",
      "Puesta en marcha completa",
    ],
    highlighted: true,
    whatsappText: "Hola, me interesa el plan Automatizacion Comercial",
  },
  {
    name: "Sistema de Crecimiento",
    tagline: "Escala con control",
    description:
      "Ordena tu operacion comercial con datos, seguimiento y reportes faciles de usar.",
    features: [
      "Base de clientes centralizada",
      "Pipeline de ventas visual",
      "Reportes de conversion",
      "Automatizaciones avanzadas",
    ],
    highlighted: false,
    whatsappText: "Hola, me interesa el plan Sistema de Crecimiento",
  },
];

const caseStudies = [
  {
    company: "Clinica Dental Local",
    summary:
      "Pasaron de responder manualmente a agendar citas con un flujo automatico conectado a WhatsApp.",
    stats: [
      { label: "Mas citas cerradas", value: "+43%" },
      { label: "Tiempo ahorrado por dia", value: "3h" },
      { label: "Tiempo de primera respuesta", value: "<2 min" },
    ],
  },
  {
    company: "Taller Automotriz",
    summary:
      "Implementamos landing, filtros y seguimiento. Hoy priorizan clientes listos para comprar.",
    stats: [
      { label: "Leads calificados", value: "+58%" },
      { label: "No-shows", value: "-35%" },
      { label: "Recompras en 60 dias", value: "+21%" },
    ],
  },
  {
    company: "Escuela de Idiomas",
    summary:
      "Automatizamos respuestas por programa y nivel. El equipo se enfoca en vender, no en repetir mensajes.",
    stats: [
      { label: "Conversion de contacto", value: "+37%" },
      { label: "Mensajes manuales", value: "-68%" },
      { label: "Prospectos bien segmentados", value: "92%" },
    ],
  },
];

const faqs = [
  {
    question: "No tengo nombre definitivo para mi marca, puedo iniciar igual?",
    answer:
      "Si. Podemos trabajar con una identidad temporal y dejar estructura lista para cambiar nombre, dominio y estilo sin rehacer todo.",
  },
  {
    question: "Esto sirve si mi negocio es pequeno y no tengo equipo tecnico?",
    answer:
      "Justo para eso esta pensado. Priorizamos herramientas simples, automatizaciones mantenibles y una implementacion guiada paso a paso.",
  },
  {
    question: "Cuanto tarda tener algo funcionando?",
    answer:
      "Depende del alcance, pero normalmente puedes tener una primera version funcional en pocos dias con mejoras iterativas.",
  },
  {
    question: "Puedo usar solo una parte del servicio?",
    answer:
      "Claro. Puedes contratar solo pagina web, solo automatizacion o un plan completo segun tu etapa de negocio.",
  },
];

const fadeUpDefault: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerDefault: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const staggerReduced: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const buildWhatsappLink = (text: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCase, setActiveCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeUp = shouldReduceMotion ? fadeUpReduced : fadeUpDefault;
  const stagger = shouldReduceMotion ? staggerReduced : staggerDefault;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="relative">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffdf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
          <Link href="#inicio" className="group flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="rounded-xl bg-emerald-500/15 p-2 text-emerald-700">
              <Rocket className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide text-slate-900">
                Tu StartApp
              </p>
              <p className="hidden text-xs text-slate-500 sm:block">nombre en construccion</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-1 py-2 transition-colors hover:text-emerald-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={buildWhatsappLink("Hola, quiero una propuesta para mi negocio")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">Agenda por WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Abrir menu de navegacion"
              aria-expanded={isMobileMenuOpen}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-black/5 bg-[#fffdf8] md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 active:scale-[0.99]"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href={buildWhatsappLink("Hola, quiero una propuesta para mi negocio")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-emerald-950"
                >
                  Hablar por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section
          id="inicio"
          className="scroll-mt-28 mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 md:pt-14 md:pb-14 lg:px-8 xl:px-10"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14"
          >
            <motion.div variants={fadeUp}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/75 px-4 py-2 text-xs font-medium text-emerald-800 sm:text-sm">
                <Sparkles className="h-4 w-4" />
                Soluciones tecnologicas para negocios en crecimiento
              </span>

              <h1 className="text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl">
                Convierte tu negocio en una maquina de ventas con
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  automatizacion y web inteligente
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Diseñamos paginas web, automatizaciones y sistemas simples para que
                tu empresa responda mas rapido, venda mejor y opere sin caos.
              </p>

              <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={buildWhatsappLink(
                    "Hola, quiero automatizar mi negocio y ver opciones"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-bold text-emerald-950 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hablar ahora
                </a>

                <Link
                  href="#servicios"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-slate-900 sm:w-auto"
                >
                  Ver servicios
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 sm:mt-8 sm:gap-3 sm:text-sm">
                <span className="rounded-full bg-white/80 px-3 py-1">Sin tecnicismos</span>
                <span className="rounded-full bg-white/80 px-3 py-1">Implementacion guiada</span>
                <span className="rounded-full bg-white/80 px-3 py-1">Enfoque en resultados</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl border border-slate-900/10 bg-white/70 p-4 shadow-xl backdrop-blur-xl sm:p-6 md:ml-auto md:w-full md:max-w-[34rem]"
            >
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="text-sm text-slate-500">Estado del negocio</p>
                  <p className="text-lg font-bold text-slate-900">Modo crecimiento</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Activo
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Primera respuesta", value: "< 2 min" },
                  { label: "Leads organizados", value: "100%" },
                  { label: "Tareas manuales", value: "-60%" },
                  { label: "Visibilidad comercial", value: "Total" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="problemas"
          className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 xl:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700"
            >
              Lo que estamos resolviendo
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-3xl text-2xl text-slate-900 sm:text-3xl md:text-4xl"
            >
              Los bloqueos mas comunes en los negocios no son de ventas, son de proceso
            </motion.h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {painPoints.map((problem) => {
                const Icon = problem.icon;
                return (
                  <motion.article
                    key={problem.title}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="rounded-3xl border border-red-200/60 bg-white/85 p-5 shadow-[0_18px_40px_-35px_rgba(15,23,42,0.95)] sm:p-6"
                  >
                    <span className="inline-flex rounded-2xl bg-red-50 p-3 text-red-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">{problem.title}</h3>
                    <p className="mt-3 text-slate-600">{problem.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section
          id="servicios"
          className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 xl:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              Servicios
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-3xl text-2xl text-slate-900 sm:text-3xl md:text-4xl"
            >
              Construimos soluciones digitales que generan mas clientes y menos friccion
            </motion.h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    variants={fadeUp}
                    whileHover={{ y: -10, scale: 1.01 }}
                    className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white p-5 shadow-[0_20px_45px_-35px_rgba(2,6,23,0.85)] sm:p-7"
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-200 to-cyan-100 opacity-75 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <span className="inline-flex rounded-2xl bg-slate-900 p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">{service.title}</h3>
                      <p className="mt-3 text-slate-600">{service.description}</p>

                      <ul className="mt-5 space-y-2">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-slate-700">
                            <Check className="h-4 w-4 text-emerald-600" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section
          id="proceso"
          className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 xl:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="rounded-[2rem] border border-slate-900/10 bg-gradient-to-br from-slate-950 to-slate-800 p-6 text-white sm:p-8 md:p-12"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300"
            >
              Metodo de trabajo
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-2xl sm:text-3xl md:text-4xl">
              Proceso claro, rapido y sin complicaciones
            </motion.h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"
                >
                  <p className="text-sm font-semibold text-emerald-300">Paso {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-slate-300">{step.detail}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="planes"
          className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 xl:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700"
            >
              Planes
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-2xl text-slate-900 sm:text-3xl md:text-4xl"
            >
              Elige el nivel de transformacion para tu negocio
            </motion.h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <motion.article
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className={`rounded-3xl border p-5 shadow-[0_20px_45px_-34px_rgba(2,6,23,0.85)] sm:p-7 ${plan.highlighted
                    ? "border-emerald-500 bg-slate-900/90 text-white backdrop-blur-xl"
                    : "border-slate-900/10 bg-white text-slate-900"
                    }`}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.16em] ${plan.highlighted ? "text-emerald-300" : "text-slate-500"
                      }`}
                  >
                    {plan.tagline}
                  </p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">{plan.name}</h3>
                  <p
                    className={`mt-3 ${plan.highlighted ? "text-slate-200" : "text-slate-600"
                      }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check
                          className={`h-4 w-4 ${plan.highlighted ? "text-emerald-300" : "text-emerald-600"
                            }`}
                        />
                        <span className={plan.highlighted ? "text-slate-100" : "text-slate-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildWhatsappLink(plan.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-colors ${plan.highlighted
                      ? "bg-emerald-400 text-emerald-950 hover:bg-emerald-300"
                      : "bg-slate-900 text-white hover:bg-slate-700"
                      }`}
                  >
                    Elegir plan
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="casos"
          className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 xl:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="rounded-[2rem] border border-emerald-900/10 bg-white p-5 shadow-[0_20px_45px_-35px_rgba(2,6,23,0.65)] sm:p-7 md:p-10"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              Casos de referencia
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-2xl text-slate-900 sm:text-3xl md:text-4xl"
            >
              Resultados reales en negocios parecidos al tuyo
            </motion.h2>

            <div className="mt-7 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap">
              {caseStudies.map((study, index) => (
                <button
                  key={study.company}
                  type="button"
                  onClick={() => setActiveCase(index)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeCase === index
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                >
                  {study.company}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/75 p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={caseStudies[activeCase].company}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {caseStudies[activeCase].company}
                  </h3>
                  <p className="mt-3 text-slate-600">{caseStudies[activeCase].summary}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {caseStudies[activeCase].stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-2xl font-bold text-emerald-700">{stat.value}</p>
                        <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        <section
          id="faq"
          className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 xl:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-amber-700"
            >
              Preguntas frecuentes
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-3 max-w-2xl text-center text-2xl text-slate-900 sm:text-3xl md:text-4xl"
            >
              Todo pensado para que avances sin trabas tecnicas
            </motion.h2>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.article
                    key={faq.question}
                    variants={fadeUp}
                    className="rounded-2xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex min-h-11 w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-slate-900">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-slate-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-emerald-900/20 bg-gradient-to-r from-emerald-500 to-cyan-500 p-6 text-white sm:p-10 md:p-14"
          >
            <div className="absolute -right-12 -top-14 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-emerald-900/25 blur-3xl" />

            <h2 className="relative z-10 max-w-2xl text-2xl sm:text-3xl md:text-5xl">
              Si tu negocio ya crecio, tus procesos tambien deben hacerlo
            </h2>
            <p className="relative z-10 mt-4 max-w-2xl text-emerald-50">
              Agenda una llamada breve y te muestro como llevar tu captacion,
              seguimiento y conversion a un sistema escalable.
            </p>

            <a
              href={buildWhatsappLink("Hola, quiero una auditoria de automatizacion")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Quiero mi diagnostico
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-900/10 bg-white/70 px-4 py-7 text-center text-sm text-slate-500 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
        <p>© 2026 Tu StartApp. Soluciones tecnologicas para negocios en crecimiento.</p>
      </footer>

      <a
        href={buildWhatsappLink("Hola, me interesa automatizar mi negocio")}
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 sm:right-6 sm:h-14 sm:w-14"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
