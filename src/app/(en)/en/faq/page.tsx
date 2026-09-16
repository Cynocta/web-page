import type { Metadata } from "next";
import FaqPageBody from "@/components/pages/faq-page";
import { alternatesFor } from "@/lib/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

const DESCRIPTION =
    "Pricing, timelines, the WhatsApp API, CRM integration, maintenance and guarantees. Direct answers about automating your customer service.";

export const metadata: Metadata = pageMetadata({
    path: alternatesFor("faq", "en").canonical,
    title: "Frequently asked questions about AI automation",
    description: DESCRIPTION,
    locale: "en",
    alternates: alternatesFor("faq", "en"),
});

export default function FaqPage() {
    return <FaqPageBody locale="en" />;
}
