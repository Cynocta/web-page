import { faqContent, type Locale } from "@/lib/content";
import { siteUrl } from "@/lib/site-data";

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
