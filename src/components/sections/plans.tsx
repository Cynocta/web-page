"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import CurrencyToggle from "@/components/currency-toggle";
import { useI18n } from "@/components/i18n-provider";
import { formatCurrency } from "@/lib/content";
import { buildWhatsappLink } from "@/lib/site-data";

export default function PlansSection() {
    const plansGridRef = useRef<HTMLDivElement>(null);
    const { copy, currency } = useI18n();
    const [titleLine1, titleLine2] = copy.plans.title.split("\n");

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
            <div className="cyn-plans-header">
                <div>
                    <p className="cyn-section-tag">{copy.plans.tag}</p>
                    <h2 className="cyn-section-title">
                        {titleLine1}
                        <br />
                        {titleLine2}
                    </h2>
                    <p className="cyn-section-sub">{copy.plans.subtitle}</p>
                    <p className="cyn-plan-note">{copy.plans.note}</p>
                </div>
                <div className="cyn-plans-currency">
                    <span className="cyn-plans-currency-label">{copy.plans.currencyLabel}</span>
                    <CurrencyToggle className="cyn-toggle--compact" />
                </div>
            </div>

            <div ref={plansGridRef} className="cyn-plans-grid">
                {copy.plans.items.map((plan, i) => (
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
                                {plan.uniquePaymentCOP !== null && (
                                    <div>
                                        <p className="cyn-plan-price-label">
                                            {plan.featured ? copy.plans.labels.setupUnique : copy.plans.labels.oneTime}
                                        </p>
                                        <p className="cyn-plan-price">
                                            {formatCurrency(plan.uniquePaymentCOP, currency)}
                                        </p>
                                    </div>
                                )}
                                {plan.delivery && (
                                    <div>
                                        <p className="cyn-plan-price-label">{copy.plans.labels.delivery}</p>
                                        <p className="cyn-plan-timeframe">{plan.delivery}</p>
                                    </div>
                                )}
                                {plan.monthlySubscriptionCOP !== null && (
                                    <div>
                                        <p className="cyn-plan-price-label">{copy.plans.labels.monthly}</p>
                                        <p className="cyn-plan-price">
                                            {formatCurrency(plan.monthlySubscriptionCOP, currency)}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="cyn-plan-preview" aria-label={copy.plans.previewLabel}>
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
                                    {copy.plans.cta}
                                </Link>
                                {plan.disclaimer && (
                                    <p className="cyn-plan-disclaimer">{plan.disclaimer}</p>
                                )}
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}
