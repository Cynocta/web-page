import { content, type Locale, type Plan } from "@/lib/content";
import { siteUrl } from "@/lib/site-data";
import { ORGANIZATION_ID } from "./organization";

/** Prices are quoted in USD and converted for display; the schema states the source currency. */
const PRICE_CURRENCY = "USD";

/**
 * Builds the offers for one plan.
 *
 * Returns `undefined` when the plan has no public price (plan 3 is quoted case
 * by case). Emitting an Offer with an invented figure there would be deceptive
 * markup, so the Service is published without one.
 */
function buildOffers(plan: Plan) {
    const offers = [];

    if (plan.uniquePaymentUSD !== null) {
        offers.push({
            "@type": "Offer",
            name: plan.delivery ? `${plan.title} — ${plan.delivery}` : plan.title,
            price: plan.uniquePaymentUSD,
            priceCurrency: PRICE_CURRENCY,
            availability: "https://schema.org/InStock",
            // The figure is a floor, not a closed quote — the same framing the page uses.
            priceSpecification: {
                "@type": "PriceSpecification",
                price: plan.uniquePaymentUSD,
                priceCurrency: PRICE_CURRENCY,
                minPrice: plan.uniquePaymentUSD,
                valueAddedTaxIncluded: false,
            },
        });
    }

    if (plan.monthlySubscriptionUSD !== null) {
        offers.push({
            "@type": "Offer",
            name: `${plan.title} — suscripción mensual`,
            priceCurrency: PRICE_CURRENCY,
            availability: "https://schema.org/InStock",
            priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: plan.monthlySubscriptionUSD,
                priceCurrency: PRICE_CURRENCY,
                minPrice: plan.monthlySubscriptionUSD,
                unitCode: "MON",
                billingDuration: 1,
                valueAddedTaxIncluded: false,
            },
        });
    }

    return offers.length ? offers : undefined;
}

export function plansJsonLd(locale: Locale) {
    const { items } = content[locale].plans;

    return items.map((plan, index) => {
        const offers = buildOffers(plan);

        return {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${siteUrl}/#plan-${index + 1}`,
            name: plan.title,
            description: plan.description,
            inLanguage: locale,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: "Latinoamérica",
            serviceType: plan.features.filter((f) => f.active).map((f) => f.label),
            ...(offers ? { offers } : {}),
        };
    });
}
