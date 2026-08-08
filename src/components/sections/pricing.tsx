"use client";

import Link from "next/link";
import CurrencyToggle from "@/components/currency-toggle";
import { useI18n } from "@/components/i18n-provider";
import Section, { type SectionTone } from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { formatCurrency } from "@/lib/content";
import s from "./pricing.module.css";

const CheckIcon = () => (
    <svg
        className={s.check}
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="m3 8.5 3.2 3.2L13 5" />
    </svg>
);

/** How many features a card shows. Beyond this the list stops being scannable. */
const MAX_FEATURES = 5;

/**
 * Pricing, on the homepage.
 *
 * Every slot — summary, price, features — has a reserved height so the three
 * cards line up row by row. A pricing grid is read sideways, and misaligned
 * rows are what make one hard to compare.
 */
export default function PricingSection({
    ctaHref,
    tone = "black",
}: {
    ctaHref: string;
    /** Set by the caller so the band keeps alternating with whatever precedes it. */
    tone?: SectionTone;
}) {
    const { copy, currency } = useI18n();
    const { plans } = copy;

    return (
        <Section id="precios" tone={tone}>
            <div className={s.head}>
                <SectionHeader
                    eyebrow={plans.tag}
                    title={plans.title.replace("\n", " ")}
                    intro={plans.subtitle}
                />
                <div className={s.currency}>
                    <span className={s.currencyLabel}>{plans.currencyLabel}</span>
                    <CurrencyToggle className="cyn-toggle--compact" />
                </div>
            </div>

            <div className={s.grid}>
                {plans.items.map((plan) => {
                    const active = plan.features.filter((f) => f.active).slice(0, MAX_FEATURES);

                    return (
                        <article
                            key={plan.plan}
                            className={`${s.card} ${plan.featured ? s.featured : ""}`}
                        >
                            {plan.featured && plan.badge && (
                                <span className={s.badge}>{plan.badge}</span>
                            )}

                            <p className={s.plan}>{plan.plan}</p>
                            <h3 className={s.name}>{plan.title}</h3>
                            <p className={s.summary}>{plan.description}</p>

                            <div className={s.price}>
                                {plan.uniquePaymentUSD !== null ? (
                                    <>
                                        <span className={s.from}>{plans.labels.from}</span>
                                        <span className={s.amount}>
                                            {formatCurrency(plan.uniquePaymentUSD, currency)}
                                        </span>
                                        <span className={s.cadence}>
                                            {plans.labels.oneTimeProject}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className={`${s.amount} ${s.custom}`}>
                                            {plan.customPrice}
                                        </span>
                                        {plan.customPriceNote && (
                                            <span className={s.cadence}>{plan.customPriceNote}</span>
                                        )}
                                    </>
                                )}

                                {plan.monthlySubscriptionUSD !== null && (
                                    <p className={s.addon}>
                                        <span aria-hidden="true">+</span>
                                        <span className={s.addonValue}>
                                            {formatCurrency(plan.monthlySubscriptionUSD, currency)}
                                            {plans.labels.perMonth}
                                        </span>
                                        <span>{plans.labels.subscription}</span>
                                    </p>
                                )}
                            </div>

                            <ul className={s.features}>
                                {active.map((feature) => (
                                    <li key={feature.label} className={s.feature}>
                                        <CheckIcon />
                                        {feature.label}
                                    </li>
                                ))}
                            </ul>

                            <Link href={ctaHref} className={s.cta}>
                                {plans.cta}
                            </Link>
                        </article>
                    );
                })}
            </div>

            <div className={s.note}>
                <span>{plans.note}</span>
                <Link href="/precios" className={s.noteLink}>
                    Ver todo lo que incluye →
                </Link>
            </div>
        </Section>
    );
}
