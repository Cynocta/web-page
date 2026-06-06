"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CurrencyToggle from "@/components/currency-toggle";
import { useI18n } from "@/components/i18n-provider";
import { formatCurrency } from "@/lib/content";
import { buildWhatsappLink } from "@/lib/site-data";
import s from "./plans.module.css";

// ── SVG icons ── //
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="3.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className={`${s.chevron} ${open ? s.chevronOpen : ""}`}>
        <path d="m6 9 6 6 6-6" />
    </svg>
);

export default function PlansSection() {
    const plansGridRef = useRef<HTMLDivElement>(null);
    const { copy, currency } = useI18n();
    const [titleLine1, titleLine2] = copy.plans.title.split("\n");
    const [openCards, setOpenCards] = useState<Record<number, boolean>>({});

    const toggleCard = (index: number) => {
        setOpenCards((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    useEffect(() => {
        if (!plansGridRef.current || typeof window === "undefined" || window.innerWidth > 1024) {
            return;
        }
        const centerFeaturedCard = () => {
            const grid = plansGridRef.current;
            const featuredCard = grid?.querySelector(`.${s.card}.${s.featured}`) as HTMLElement | null;
            if (!grid || !featuredCard) return;
            const targetScrollLeft =
                featuredCard.offsetLeft - (grid.clientWidth / 2 - featuredCard.offsetWidth / 2);
            grid.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: "auto" });
        };
        const frame = window.requestAnimationFrame(centerFeaturedCard);
        return () => window.cancelAnimationFrame(frame);
    }, []);

    return (
        <section id="planes" className={s.sectionOuter}>
            <div className={`cyn-section ${s.sectionContent}`}>
                <div className={s.plansHeader}>
                    <div>
                        <p className="cyn-section-tag">{copy.plans.tag}</p>
                        <h2 className="cyn-section-title">
                            {titleLine1}<br />{titleLine2}
                        </h2>
                        <p className="cyn-section-sub">{copy.plans.subtitle}</p>
                        <p className={s.planNote}>{copy.plans.note}</p>
                    </div>
                    <div className={s.plansCurrency}>
                        <span className={s.plansCurrencyLabel}>{copy.plans.currencyLabel}</span>
                        <CurrencyToggle className="cyn-toggle--compact" />
                    </div>
                </div>

                <div ref={plansGridRef} className={s.plansGrid}>
                    {copy.plans.items.map((plan, i) => {
                        const isOpen = !!openCards[i];
                        const activeFeatures = plan.features.filter((f) => f.active);

                        return (
                            <div key={i} className={s.cardWrapper}>
                                <article className={`${s.card} ${plan.featured ? s.featured : ""}`}>
                                    {/* ── Header ── */}
                                    <div className={s.header}>
                                        <div className={s.headerTop}>
                                            <p className={s.planName}>{plan.plan}</p>
                                            {plan.badge && plan.featured && (
                                                <span className={s.badge}>{plan.badge}</span>
                                            )}
                                        </div>
                                        <h3 className={s.planTitle}>{plan.title}</h3>
                                        <p className={s.planSub}>{plan.description}</p>
                                    </div>

                                    {/* ── Pricing ── */}
                                    <div className={s.pricing}>
                                        {plan.uniquePaymentCOP !== null && (
                                            <div className={s.priceBlock}>
                                                <p className={s.priceValue}>
                                                    {formatCurrency(plan.uniquePaymentCOP, currency)}
                                                </p>
                                                <p className={s.priceTag}>
                                                    {plan.featured ? copy.plans.labels.setupUnique : copy.plans.labels.oneTime}
                                                </p>
                                            </div>
                                        )}
                                        {plan.monthlySubscriptionCOP !== null && (
                                            <div className={s.priceBlock}>
                                                <p className={s.priceValue}>
                                                    {formatCurrency(plan.monthlySubscriptionCOP, currency)}
                                                    <span className={s.pricePeriod}>/mes</span>
                                                </p>
                                                <p className={s.priceTag}>{copy.plans.labels.monthly}</p>
                                            </div>
                                        )}
                                        {plan.delivery && (
                                            <p className={s.delivery}>{plan.delivery}</p>
                                        )}
                                        {plan.disclaimer && (
                                            <p className={s.disclaimerInline}>{plan.disclaimer}</p>
                                        )}
                                    </div>

                                    {/* ── Feature highlights (always visible) ── */}
                                    <div className={s.highlights}>
                                        {activeFeatures.slice(0, 3).map((f) => (
                                            <span key={f.label} className={s.chip}>
                                                <CheckIcon /> {f.label}
                                            </span>
                                        ))}
                                        {activeFeatures.length > 3 && (
                                            <span className={s.chipMore}>
                                                +{activeFeatures.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* ── Expand toggle ── */}
                                    <button
                                        type="button"
                                        className={s.toggle}
                                        onClick={() => toggleCard(i)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{isOpen ? copy.plans.detailsHide : copy.plans.detailsShow}</span>
                                        <ChevronIcon open={isOpen} />
                                    </button>

                                    {/* ── Expandable details ── */}
                                    <div className={s.details} data-open={isOpen}>
                                        <div className={s.detailsInner}>
                                            <div className={s.divider} />
                                            <div className={s.featureList}>
                                                {plan.features.map((f) => (
                                                    <p key={f.label} className={`${s.feat} ${f.active ? s.featActive : ""}`}>
                                                        <span className={s.featDot} />
                                                        {f.label}
                                                    </p>
                                                ))}
                                            </div>
                                            <div className={s.guarantee}>
                                                <p className={s.guaranteeLabel}>{plan.guaranteeTitle}</p>
                                                <p className={s.guaranteeText}>{plan.guaranteeText}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── CTA ── */}
                                    <Link
                                        href={buildWhatsappLink(plan.whatsappText)}
                                        className={s.cta}
                                        target="_blank"
                                    >
                                        {copy.plans.cta}
                                    </Link>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
