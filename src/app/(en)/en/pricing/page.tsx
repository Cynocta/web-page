import type { Metadata } from "next";
import PricingPage from "@/components/pages/pricing-page";
import { pricingPageByLocale } from "@/lib/content/pricing";
import { alternatesFor } from "@/lib/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

const copy = pricingPageByLocale.en;

export const metadata: Metadata = pageMetadata({
    path: alternatesFor("pricing", "en").canonical,
    title: copy.metaTitle,
    description: copy.metaDescription,
    locale: "en",
    alternates: alternatesFor("pricing", "en"),
});

export default function EnPricingPage() {
    return <PricingPage locale="en" />;
}
