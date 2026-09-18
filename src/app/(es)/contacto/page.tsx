import type { Metadata } from "next";
import ContactPage, { contactCopy } from "@/components/pages/contact-page";
import { alternatesFor } from "@/lib/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
    path: alternatesFor("contact", "es").canonical,
    title: contactCopy.es.metaTitle,
    description: contactCopy.es.metaDescription,
    alternates: alternatesFor("contact", "es"),
});

export default function ContactoPage() {
    return <ContactPage locale="es" />;
}
