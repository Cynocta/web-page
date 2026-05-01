import Image from "next/image";
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

                    <div className="cyn-hero-brand" aria-label="Logo de Cynocta">
                        <div className="cyn-hero-logo-card">
                            <Image
                                src="/cynocta-reference-card.svg"
                                alt="Referencia visual del logo Cynocta"
                                className="cyn-hero-reference-image"
                                width={604}
                                height={584}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
