import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import SectionLink from "@/components/ui/section-link";
import type { Locale } from "@/lib/content";
import { homeContent } from "@/lib/content/home";
import { serviceList, servicePath, servicesByLocale } from "@/lib/content/services";
import { localePath } from "@/lib/i18n/routes";
import ServiceExplorer, { type ExplorerFamily } from "./service-explorer";

/**
 * Homepage services block — the first section after the hero.
 *
 * It was four identical cards, each an icon, a line and a "see services"
 * toggle: the grid every template ships with. It is now an explorer, where each
 * family gets its own illustration of what the work actually looks like and
 * lists its services with their summaries.
 *
 * This part stays on the server: it resolves titles, summaries and links from
 * the service registry and hands the client explorer plain strings, so the
 * full service copy never travels to the browser.
 */
export default function ServicesOverviewSection({ locale = "es" }: { locale?: Locale }) {
    const copy = homeContent[locale].services;
    const services = servicesByLocale[locale];

    const families: ExplorerFamily[] = copy.families.map((family) => ({
        title: family.title,
        summary: family.summary,
        icon: family.icon,
        items: family.slugs.map((slug) => {
            const card = copy.cards?.[slug] ?? {
                title: services[slug].cardTitle,
                summary: services[slug].cardSummary,
            };
            return { href: servicePath(slug, locale), title: card.title, summary: card.summary };
        }),
    }));

    return (
        <Section id="servicios" tone="surface">
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} layout="split" />

            <ServiceExplorer
                families={families}
                listLabel={copy.listLabel}
                visuals={copy.visuals}
            />

            <SectionLink
                href={localePath("services", locale)}
                label={copy.allLabel.replace("{n}", String(serviceList.length))}
            />
        </Section>
    );
}
