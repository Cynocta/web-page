import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import FaqSection from "@/components/sections/faq";
import { JsonLd } from "@/components/structured-data";
import { faqContent, type Locale } from "@/lib/content";
import { faqJsonLd } from "@/lib/schema";
import { ROUTE_MAP } from "@/lib/i18n/routes";
import { siteUrl } from "@/lib/site-data";

export default function FaqPageBody({ locale }: { locale: Locale }) {
    const path = ROUTE_MAP.faq[locale];
    const homePath = ROUTE_MAP.home[locale];

    return (
        <div className="cyn-page">
            <JsonLd data={faqJsonLd(locale, `${siteUrl}${path}`)} />
            <Navigation />

            <main>
                <FaqSection faq={faqContent[locale]} ctaHref={`${homePath === "/" ? "" : homePath}/#formulario`} />
            </main>

            <Footer />
        </div>
    );
}
