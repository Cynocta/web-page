"use client";

import Link from "next/link";
import { useState } from "react";

const whatsappNumber = "1234567890";
const fallbackSiteUrl = "https://cynocta.com";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (() => {
    if (!rawSiteUrl) {
        return fallbackSiteUrl;
    }

    try {
        return new URL(rawSiteUrl).origin;
    } catch {
        return fallbackSiteUrl;
    }
})();

const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Planes", href: "#planes" },
];

type ServiceKind = "web" | "chat" | "ops" | "kpi";

const painPoints = [
    {
        num: "01",
        title: "Clientes que se enfrian",
        description:
            "Recibes interes pero la respuesta tarda horas. Para cuando contestas, el cliente ya eligio a otro.",
    },
    {
        num: "02",
        title: "Equipo atrapado en lo repetitivo",
        description:
            "Agendar manualmente, copiar datos entre apps y responder lo mismo frena tu crecimiento.",
    },
    {
        num: "03",
        title: "Sin visibilidad para decidir",
        description:
            "Contactos en distintos lugares, sin saber que canal funciona ni que mensajes convierten.",
    },
];

const services: Array<{
    title: string;
    description: string;
    tags: string[];
    kind: ServiceKind;
}> = [
        {
            title: "Web que convierte",
            description:
                "Landing pages y sitios con estructura comercial real, disenados para generar leads y cerrar.",
            tags: ["Diseno", "Copy", "Conversion"],
            kind: "web",
        },
        {
            title: "Automatizacion de conversaciones",
            description:
                "Flujos para WhatsApp y otros canales que filtran prospectos, responden rapido y derivan automaticamente.",
            tags: ["WhatsApp", "Calificacion", "Seguimiento"],
            kind: "chat",
        },
        {
            title: "Operacion centralizada",
            description:
                "Conectamos herramientas y procesos para que todo funcione en un sistema coherente y accionable.",
            tags: ["CRM", "Integracion", "Flujos"],
            kind: "ops",
        },
        {
            title: "Reportes accionables",
            description:
                "Panel de conversion, embudo por etapas y metricas para optimizar donde mas impacta.",
            tags: ["Dashboard", "Embudo", "KPIs"],
            kind: "kpi",
        },
    ];

const processSteps = [
    {
        num: "01",
        title: "Diagnostico",
        description:
            "Detectamos cuellos de botella en captacion, respuesta y seguimiento en una sesion express.",
    },
    {
        num: "02",
        title: "Propuesta por etapas",
        description:
            "Plan realista con entregables rapidos para que veas resultados desde el inicio.",
    },
    {
        num: "03",
        title: "Implementacion guiada",
        description:
            "Construimos web, automatizaciones e integraciones con foco en simplicidad operativa.",
    },
    {
        num: "04",
        title: "Optimizacion continua",
        description:
            "Medimos conversion y ajustamos mensajes, flujos y ofertas para escalar resultados.",
    },
];

const plans = [
    {
        tier: "Entrada",
        title: "Lanzamiento Digital",
        badge: null,
        featured: false,
        features: [
            { label: "Landing page completa", active: true },
            { label: "Formulario + CTA WhatsApp", active: true },
            { label: "Copy comercial optimizado", active: true },
            { label: "Responsive y rapida", active: true },
            { label: "Automatizaciones", active: false },
            { label: "CRM y reportes", active: false },
        ],
        whatsappText: "Hola, me interesa el plan Lanzamiento Digital",
    },
    {
        tier: "Crecimiento",
        title: "Automatizacion Comercial",
        badge: "Mas solicitado",
        featured: true,
        features: [
            { label: "Todo el plan anterior", active: true },
            { label: "Flujos automaticos WhatsApp", active: true },
            { label: "Calificacion de prospectos", active: true },
            { label: "Recordatorios inteligentes", active: true },
            { label: "Puesta en marcha completa", active: true },
            { label: "CRM avanzado", active: false },
        ],
        whatsappText: "Hola, me interesa el plan Automatizacion Comercial",
    },
    {
        tier: "Escala",
        title: "Sistema de Crecimiento",
        badge: null,
        featured: false,
        features: [
            { label: "Todo lo anterior", active: true },
            { label: "CRM centralizado", active: true },
            { label: "Pipeline visual de ventas", active: true },
            { label: "Reportes de conversion", active: true },
            { label: "Automatizaciones avanzadas", active: true },
            { label: "Soporte prioritario", active: true },
        ],
        whatsappText: "Hola, me interesa el plan Sistema de Crecimiento",
    },
];

const results = [
    {
        context: "Clinica dental local",
        metric: "+43%",
        metricLabel: "mas citas cerradas en 30 dias",
        summary:
            "Pasaron de agendar manualmente a un flujo automatico en WhatsApp con confirmaciones y recordatorios.",
    },
    {
        context: "Taller automotriz",
        metric: "3h",
        metricLabel: "ahorradas por dia en tareas manuales",
        summary:
            "Centralizaron leads, presupuestos y seguimiento en un sistema simple que todo el equipo usa.",
    },
    {
        context: "Escuela de idiomas online",
        metric: "<2min",
        metricLabel: "tiempo de primera respuesta",
        summary:
            "Su conversion de consulta a inscripcion subio al automatizar la primera respuesta.",
    },
];

const heroStats = [
    { prefix: "<", value: "2min", label: "Primera respuesta" },
    { prefix: "+", value: "43%", label: "Tasa de cierre" },
    { prefix: "-", value: "60%", label: "Tareas manuales" },
];

const buildWhatsappLink = (text: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

function LogoMark() {
    return (
        <svg
            className="cyn-logo-mark"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect x="1" y="1" width="32" height="32" rx="7" stroke="currentColor" strokeWidth="1" />
            <circle cx="17" cy="17" r="5" stroke="currentColor" strokeWidth="1.2" />
            <line x1="17" y1="6" x2="17" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="17" y1="22" x2="17" y2="28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="6" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="22" y1="17" x2="28" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="17" cy="6" r="1.5" fill="currentColor" />
            <circle cx="28" cy="17" r="1.5" fill="currentColor" />
            <circle cx="17" cy="28" r="1.5" fill="currentColor" />
            <circle cx="6" cy="17" r="1.5" fill="currentColor" />
        </svg>
    );
}

function ServiceIcon({ kind }: { kind: ServiceKind }) {
    if (kind === "web") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="14" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        );
    }

    if (kind === "chat") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        );
    }

    if (kind === "ops") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 0-14.14 0M21 12a9 9 0 0 1-9 9M3 12a9 9 0 0 1 9-9" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    );
}

export default function Home() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => setMobileOpen(false);

    const professionalServiceJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Cynocta",
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        description:
            "Cynocta implementa automatizacion comercial, desarrollo web y procesos digitales para negocios en crecimiento.",
        serviceType: [
            "Automatizacion comercial",
            "Desarrollo web para negocios",
            "Integracion de procesos digitales",
            "Optimizacion de conversion",
        ],
        areaServed: "Latinoamerica",
    };

    return (
        <div className="cyn-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
            />

            <header className="cyn-nav-wrap">
                <nav className="cyn-nav">
                    <Link href="#inicio" className="cyn-logo" onClick={closeMenu}>
                        <LogoMark />
                        <span className="cyn-logo-text">
                            Cyn<span>o</span>cta
                        </span>
                    </Link>

                    <button
                        type="button"
                        aria-label="Abrir menu"
                        aria-expanded={mobileOpen}
                        className="cyn-menu-btn"
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        {mobileOpen ? "Cerrar" : "Menu"}
                    </button>

                    <ul className="cyn-nav-links">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                        <li>
                            <a
                                href={buildWhatsappLink("Hola, quiero agendar una llamada con Cynocta")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyn-nav-cta"
                            >
                                Agendar llamada
                            </a>
                        </li>
                    </ul>
                </nav>

                {mobileOpen && (
                    <div className="cyn-mobile-menu">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} onClick={closeMenu}>
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href={buildWhatsappLink("Hola, quiero agendar una llamada con Cynocta")}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            Agendar llamada
                        </a>
                    </div>
                )}
            </header>

            <main>
                <section className="cyn-hero" id="inicio">
                    <div className="cyn-hero-grid" />
                    <div className="cyn-hero-glow" />

                    <div className="cyn-hero-content">
                        <p className="cyn-eyebrow">Automatizacion empresarial de precision</p>
                        <h1>
                            Cynocta: tu negocio opera.
                            <br />
                            <em>Nosotros lo hacemos</em>
                            <br />
                            escalar.
                        </h1>
                        <p className="cyn-hero-sub">
                            Disenamos sistemas digitales, web, automatizaciones y flujos inteligentes
                            para que tu empresa capture mas, responda mejor y crezca sin friccion.
                        </p>

                        <div className="cyn-hero-actions">
                            <a
                                href={buildWhatsappLink("Hola, quiero un diagnostico gratuito")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyn-btn-primary"
                            >
                                Diagnostico gratuito
                            </a>
                            <Link href="#servicios" className="cyn-btn-ghost">
                                Ver que hacemos
                            </Link>
                        </div>

                        <div className="cyn-hero-stats">
                            {heroStats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="cyn-stat-val">
                                        <span>{stat.prefix}</span>
                                        {stat.value}
                                    </p>
                                    <p className="cyn-stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cyn-pain-section" id="problemas">
                    <div className="cyn-pain-inner">
                        <div>
                            <p className="cyn-section-tag">El problema real</p>
                            <h2 className="cyn-section-title">
                                Los bloqueos no son de ventas.
                                <br />
                                Son de proceso.
                            </h2>
                            <p className="cyn-section-sub">
                                La mayoria de los negocios pierde clientes no porque su producto falle,
                                sino porque su operacion responde tarde, dispersa y sin datos.
                            </p>
                        </div>

                        <div className="cyn-pain-cards">
                            {painPoints.map((item) => (
                                <article key={item.title} className="cyn-pain-card">
                                    <p className="cyn-pain-num">{item.num}</p>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cyn-section" id="servicios">
                    <p className="cyn-section-tag">Soluciones</p>
                    <h2 className="cyn-section-title">
                        Construimos el sistema
                        <br />
                        digital que tu negocio necesita.
                    </h2>

                    <div className="cyn-services-grid">
                        {services.map((service) => (
                            <article key={service.title} className="cyn-service-card">
                                <div className="cyn-service-icon">
                                    <ServiceIcon kind={service.kind} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div>
                                    {service.tags.map((tag) => (
                                        <span key={tag} className="cyn-service-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="cyn-process-section" id="proceso">
                    <div className="cyn-process-inner">
                        <p className="cyn-section-tag">Metodologia</p>
                        <h2 className="cyn-section-title">
                            Cuatro pasos.
                            <br />
                            Resultados desde la primera semana.
                        </h2>

                        <div className="cyn-process-steps">
                            {processSteps.map((step) => (
                                <article key={step.num} className="cyn-step">
                                    <div className="cyn-step-num">{step.num}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cyn-section" id="planes">
                    <p className="cyn-section-tag">Planes</p>
                    <h2 className="cyn-section-title">
                        Elige tu nivel
                        <br />
                        de transformacion.
                    </h2>
                    <p className="cyn-section-sub">Sin contratos largos. Implementacion en dias, no meses.</p>

                    <div className="cyn-plans-grid">
                        {plans.map((plan) => (
                            <article
                                key={plan.title}
                                className={`cyn-plan-card${plan.featured ? " featured" : ""}`}
                            >
                                {plan.badge && <p className="cyn-plan-badge">{plan.badge}</p>}
                                <p className="cyn-plan-name">{plan.tier}</p>
                                <h3 className="cyn-plan-title">{plan.title}</h3>
                                <div className="cyn-plan-divider" />

                                <div>
                                    {plan.features.map((feature) => (
                                        <p
                                            key={feature.label}
                                            className={`cyn-plan-feature${feature.active ? " active" : ""}`}
                                        >
                                            {feature.label}
                                        </p>
                                    ))}
                                </div>

                                <a
                                    href={buildWhatsappLink(plan.whatsappText)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyn-plan-cta"
                                >
                                    Comenzar
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="cyn-results-section" id="resultados">
                    <div className="cyn-results-inner">
                        <p className="cyn-section-tag">Resultados reales</p>
                        <h2 className="cyn-section-title">Lo que dicen los numeros.</h2>

                        <div className="cyn-results-grid">
                            {results.map((result) => (
                                <article key={result.context} className="cyn-result-card">
                                    <p className="cyn-result-context">{result.context}</p>
                                    <div className="cyn-result-metric">
                                        <p className="cyn-result-num">{result.metric}</p>
                                        <p className="cyn-result-desc">{result.metricLabel}</p>
                                    </div>
                                    <p className="cyn-result-summary">{result.summary}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cyn-cta-section" id="contacto">
                    <p className="cyn-cta-tag">Siguiente paso</p>
                    <h2>
                        Si tu negocio ya crecio,
                        <br />
                        tu sistema <em>tambien debe hacerlo.</em>
                    </h2>
                    <p>
                        Agenda una sesion breve y te mostramos exactamente como llevar tu
                        captacion, seguimiento y conversion a un sistema escalable.
                    </p>
                    <a
                        href={buildWhatsappLink("Hola, quiero mi diagnostico gratuito")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyn-btn-primary"
                    >
                        Quiero mi diagnostico gratuito
                    </a>
                </section>
            </main>

            <footer className="cyn-footer">
                <p className="cyn-footer-copy">© 2026 Cynocta - Automatizacion de precision</p>
                <div className="cyn-footer-links">
                    <Link href="#servicios">Servicios</Link>
                    <Link href="#proceso">Proceso</Link>
                    <Link href="#planes">Planes</Link>
                    <a
                        href={buildWhatsappLink("Hola, quiero contactar a Cynocta")}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contacto
                    </a>
                </div>
            </footer>
        </div>
    );
}
