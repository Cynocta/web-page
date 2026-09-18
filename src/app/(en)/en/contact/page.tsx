import type { Metadata } from "next";
import ContactPage, { contactCopy } from "@/components/pages/contact-page";
import { alternatesFor } from "@/lib/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
    path: alternatesFor("contact", "en").canonical,
    title: contactCopy.en.metaTitle,
    description: contactCopy.en.metaDescription,
    locale: "en",
    alternates: alternatesFor("contact", "en"),
});

export default function EnContactPage() {
    return <ContactPage locale="en" />;
}
