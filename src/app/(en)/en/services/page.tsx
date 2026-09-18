import type { Metadata } from "next";
import ServicesHubPage from "@/components/pages/services-hub-page";
import { servicesHubByLocale } from "@/lib/content/services";
import { alternatesFor } from "@/lib/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

const hub = servicesHubByLocale.en;

export const metadata: Metadata = pageMetadata({
    path: alternatesFor("services", "en").canonical,
    title: hub.metaTitle,
    description: hub.metaDescription,
    locale: "en",
    alternates: alternatesFor("services", "en"),
});

export default function ServicesPage() {
    return <ServicesHubPage locale="en" />;
}
