import { Fragment } from "react";
import { content, type Locale } from "@/lib/content";
import { pricingPageByLocale, type ComparisonValue } from "@/lib/content/pricing";
import s from "./pricing-page.module.css";

const LABELS = {
    es: { feature: "Característica", included: "Incluido", notIncluded: "No incluido" },
    en: { feature: "Feature", included: "Included", notIncluded: "Not included" },
} satisfies Record<Locale, Record<string, string>>;

function Cell({ value, locale }: { value: ComparisonValue; locale: Locale }) {
    if (value === true) {
        return (
            <span className={s.yes} aria-label={LABELS[locale].included}>
                ✓
            </span>
        );
    }
    if (value === false) {
        return (
            <span className={s.no} aria-label={LABELS[locale].notIncluded}>
                —
            </span>
        );
    }
    return <>{value}</>;
}

/**
 * The full feature matrix.
 *
 * Plan names come from the same source the cards use, so a rename can't leave
 * the table disagreeing with them. The header row sticks while the body scrolls,
 * which is what keeps a long comparison readable.
 */
export default function PlanComparison({ locale = "es" }: { locale?: Locale }) {
    const plans = content[locale].plans.items;
    const pricingPage = pricingPageByLocale[locale];
    /** Index of the recommended plan, so the column can be highlighted from one place. */
    const FEATURED = plans.findIndex((p) => p.featured);

    return (
        <div className={s.tableWrap}>
            <table className={s.table}>
                <caption className="sr-only">{pricingPage.comparisonTitle}</caption>
                <thead>
                    <tr>
                        <th scope="col">{LABELS[locale].feature}</th>
                        {plans.map((plan, i) => (
                            <th
                                key={plan.plan}
                                scope="col"
                                className={i === FEATURED ? s.colHighlight : ""}
                            >
                                {plan.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {pricingPage.comparison.map((group) => (
                        <Fragment key={group.label}>
                            <tr className={s.groupRow}>
                                <td colSpan={plans.length + 1}>{group.label}</td>
                            </tr>
                            {group.rows.map((row) => (
                                <tr key={`${group.label}-${row.label}`}>
                                    <th scope="row" className={s.rowLabel}>
                                        {row.label}
                                    </th>
                                    {row.values.map((value, i) => (
                                        <td
                                            key={i}
                                            className={`${s.cell} ${i === FEATURED ? s.cellHighlight : ""}`}
                                        >
                                            <Cell value={value} locale={locale} />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
