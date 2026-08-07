import PageShell from "@/components/layout/page-shell";
import FaqSection from "@/components/sections/faq";
import { JsonLd } from "@/components/structured-data";
import { faqContent, type Locale } from "@/lib/content";
import { faqJsonLd } from "@/lib/schema";
import { ROUTE_MAP } from "@/lib/i18n/routes";
import { siteUrl } from "@/lib/site-data";

export default function FaqPageBody({ locale }: { locale: Locale }) {
    const path = ROUTE_MAP.faq[locale];
    const isEs = locale === "es";

    return (
        <PageShell
            crumbs={[
                { label: isEs ? "Inicio" : "Home", href: ROUTE_MAP.home[locale] },
                { label: isEs ? "Preguntas frecuentes" : "FAQ", href: path },
            ]}
        >
            <JsonLd data={faqJsonLd(locale, `${siteUrl}${path}`)} />
            <FaqSection faq={faqContent[locale]} ctaHref={isEs ? "/contacto" : "/en#contacto"} />
        </PageShell>
    );
}
