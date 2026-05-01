"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { buildWhatsappLink, plans } from "@/lib/site-data";

export default function PlansSection() {
    const plansGridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!plansGridRef.current || typeof window === "undefined" || window.innerWidth > 1024) {
            return;
        }

        const centerFeaturedCard = () => {
            const grid = plansGridRef.current;
            const featuredCard = grid?.querySelector(".cyn-plan-card-expandable.featured") as HTMLElement | null;

            if (!grid || !featuredCard) {
                return;
            }

            const targetScrollLeft =
                featuredCard.offsetLeft - (grid.clientWidth / 2 - featuredCard.offsetWidth / 2);

            grid.scrollTo({
                left: Math.max(0, targetScrollLeft),
                behavior: "auto",
            });
        };

        const frame = window.requestAnimationFrame(centerFeaturedCard);

        return () => window.cancelAnimationFrame(frame);
    }, []);

    return (
        <section className="cyn-section" id="planes">
            <p className="cyn-section-tag">Planes</p>
            <h2 className="cyn-section-title">
                Elige tu nivel
                <br />
                de transformacion.
            </h2>
            <p className="cyn-section-sub">Sin contratos largos. Implementacion en dias, no meses.</p>
            <p className="cyn-plan-note">Compara opciones de entrada, automatizacion y escala sin perder claridad.</p>

            <div ref={plansGridRef} className="cyn-plans-grid">
                {plans.map((plan, i) => (
                    <div key={i} className="cyn-plan-card-wrapper">
                        <article className={`cyn-plan-card-expandable ${plan.featured ? "featured" : ""}`}>
                            <div className="cyn-plan-header">
                                <div className="cyn-plan-header-top">
                                    <p className="cyn-plan-name">{plan.plan}</p>
                                    {plan.badge && plan.featured && (
                                        <div className="cyn-plan-badge-inline">{plan.badge}</div>
                                    )}
                                </div>
                                <h3 className="cyn-plan-title">{plan.title}</h3>
                                <p className="cyn-plan-subtitle">{plan.description}</p>
                            </div>

                            <div className="cyn-plan-price-compact">
                                {plan.uniquePayment && (
                                    <div>
                                        <p className="cyn-plan-price-label">{plan.featured ? "Setup único desde" : "Pago único desde"}</p>
                                        <p className="cyn-plan-price">{plan.uniquePayment}</p>
                                    </div>
                                )}
                                {plan.delivery && (
                                    <div>
                                        <p className="cyn-plan-price-label">Entrega</p>
                                        <p className="cyn-plan-timeframe">{plan.delivery}</p>
                                    </div>
                                )}
                                {plan.monthlySubscription && plan.monthlySubscription.trim() && (
                                    <div>
                                        <p className="cyn-plan-price-label">Suscripción mensual desde</p>
                                        <p className="cyn-plan-price">{plan.monthlySubscription}</p>
                                    </div>
                                )}
                            </div>

                            <div className="cyn-plan-preview" aria-label="Resumen del plan">
                                {plan.features
                                    .filter((feature) => feature.active)
                                    .slice(0, 3)
                                    .map((feature) => (
                                        <span key={feature.label} className="cyn-plan-preview-chip">
                                            {feature.label}
                                        </span>
                                    ))}
                            </div>

                            <div className="cyn-plan-content">
                                <div className="cyn-plan-divider" />

                                <div className="cyn-plan-features">
                                    {plan.features.map((feature) => (
                                        <p key={feature.label} className={`cyn-plan-feature ${feature.active ? "active" : ""}`}>
                                            {feature.label}
                                        </p>
                                    ))}
                                </div>

                                <div className="cyn-plan-guarantee">
                                    <p className="cyn-plan-guarantee-title">{plan.guaranteeTitle}</p>
                                    <p className="cyn-plan-guarantee-text">{plan.guaranteeText}</p>
                                </div>

                                <Link
                                    href={buildWhatsappLink(plan.whatsappText)}
                                    className="cyn-plan-cta"
                                    target="_blank"
                                >
                                    Cotizar
                                </Link>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}
