import Link from "next/link";
import { buildWhatsappLink, heroStats } from "@/lib/site-data";

export default function HeroSection() {
    return (
        <section className="cyn-hero" id="inicio">
            <div className="cyn-hero-grid" />
            <div className="cyn-hero-glow" />

            <div className="cyn-hero-content">
                <div className="cyn-hero-layout">
                    <div className="cyn-hero-copy">
                        <p className="cyn-eyebrow">Automatizacion con IA para empresas en crecimiento</p>
                        <h1>
                            <em>Automatiza</em> tu negocio y
                            <br />
                            deja de perder <em>clientes</em>.
                        </h1>
                        <p className="cyn-hero-sub">
                            Implementamos automatizaciones, IA y sistemas web que capturan clientes,
                            responden 24/7 y escalan tu operacion sin esfuerzo.
                        </p>

                        <div className="cyn-hero-actions">
                            <a
                                href={buildWhatsappLink("Hola, quiero agendar un diagnostico gratis")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyn-btn-primary"
                            >
                                Agendar diagnostico gratis
                            </a>
                            <Link href="#resultados" className="cyn-btn-ghost">
                                Ver casos reales
                            </Link>
                        </div>

                        <div className="cyn-hero-stats" aria-label="Beneficios clave">
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

                    <aside className="cyn-hero-visual" aria-label="Demostracion de automatizacion">
                        <div className="cyn-hero-visual-orbit" aria-hidden="true" />
                        <div className="cyn-hero-visual-shell">
                            <div className="cyn-hero-visual-header">
                                <div>
                                    <p className="cyn-hero-visual-kicker">Sistema activo</p>
                                    <h2>Dashboard de ventas con IA</h2>
                                </div>
                                <span className="cyn-hero-visual-pill">+32% este mes</span>
                            </div>

                            <div className="cyn-hero-visual-grid">
                                <article className="cyn-hero-visual-panel cyn-hero-visual-panel-main">
                                    <div className="cyn-hero-visual-panel-top">
                                        <span>Embudo en vivo</span>
                                        <span>Actualizado 12 min</span>
                                    </div>

                                    <div className="cyn-hero-visual-metrics">
                                        <div>
                                            <span>Consultas</span>
                                            <strong>128</strong>
                                        </div>
                                        <div>
                                            <span>Respuestas</span>
                                            <strong>94%</strong>
                                        </div>
                                        <div>
                                            <span>Citas</span>
                                            <strong>36</strong>
                                        </div>
                                    </div>

                                    <div className="cyn-hero-visual-bars" aria-hidden="true">
                                        <span style={{ height: "36%" }} />
                                        <span style={{ height: "52%" }} />
                                        <span style={{ height: "68%" }} />
                                        <span style={{ height: "58%" }} />
                                        <span style={{ height: "80%" }} />
                                        <span style={{ height: "91%" }} />
                                    </div>
                                </article>

                                <article className="cyn-hero-visual-panel cyn-hero-visual-panel-chat">
                                    <p className="cyn-hero-visual-panel-title">Chatbot 24/7</p>
                                    <div className="cyn-hero-chat-stack">
                                        <div className="cyn-hero-chat-message is-user">
                                            Necesito responder mas rapido a mis consultas.
                                        </div>
                                        <div className="cyn-hero-chat-message is-bot">
                                            Listo. Te muestro el flujo y agendo una llamada.
                                        </div>
                                    </div>
                                    <div className="cyn-hero-response">
                                        <span>Respuesta promedio</span>
                                        <strong>&lt;5s</strong>
                                    </div>
                                </article>
                            </div>

                            <div className="cyn-hero-visual-flow" aria-label="Flujo de automatizacion">
                                <span>Ads</span>
                                <span>IA</span>
                                <span>Agenda</span>
                                <span>Venta</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
