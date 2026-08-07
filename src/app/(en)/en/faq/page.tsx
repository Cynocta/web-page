import type { Metadata } from "next";
import FaqPageBody from "@/components/pages/faq-page";
import { alternatesFor } from "@/lib/i18n/routes";

const DESCRIPTION =
    "Pricing, timelines, the WhatsApp API, CRM integration, maintenance and guarantees. Direct answers about automating your customer service.";

export const metadata: Metadata = {
    title: "Frequently asked questions about AI automation",
    description: DESCRIPTION,
    alternates: alternatesFor("faq", "en"),
    openGraph: {
        title: "Frequently asked questions | Cynocta",
        description: DESCRIPTION,
        url: alternatesFor("faq", "en").canonical,
    },
};

export default function FaqPage() {
    return <FaqPageBody locale="en" />;
}
