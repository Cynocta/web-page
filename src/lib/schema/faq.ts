import { faqContent, type Locale } from "@/lib/content";
import type { FaqItem } from "@/lib/content/faq";
import { siteUrl } from "@/lib/site-data";

/**
 * FAQPage for any page that carries its own questions — a service, a solution,
 * an article. One implementation so the three can't drift apart in how they
 * mark up the same thing.
 *
 * `acceptedAnswer.text` is the answer the page renders, never a shortened
 * variant: answer engines consume it literally.
 */
export function faqItemsJsonLd(items: FaqItem[], pageUrl: string, name?: string) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: "es",
        ...(name ? { name } : {}),
        mainEntity: items.map((item) => ({
            "@type": "Question",
            "@id": `${pageUrl}#${item.id}`,
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
                url: `${pageUrl}#${item.id}`,
            },
        })),
        publisher: { "@id": `${siteUrl}/#organization` },
    };
}

/**
 * FAQPage is the unit answer engines consume literally, so `acceptedAnswer.text`
 * carries the same direct answer the page renders — never a shortened variant.
 */
export function faqJsonLd(locale: Locale, pageUrl: string) {
    const faq = faqContent[locale];

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: locale,
        url: pageUrl,
        name: faq.title,
        mainEntity: faq.items.map((item) => ({
            "@type": "Question",
            "@id": `${pageUrl}#${item.id}`,
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
                url: `${pageUrl}#${item.id}`,
            },
        })),
        publisher: { "@id": `${siteUrl}/#organization` },
    };
}
