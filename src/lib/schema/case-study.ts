import {
    PORTFOLIO_BASE_PATH,
    caseAttribution,
    casePath,
    type CaseStudy,
} from "@/lib/content/portfolio";
import { siteUrl } from "@/lib/site-data";
import { ORGANIZATION_ID } from "./organization";

const abs = (path: string) => `${siteUrl}${path}`;

/**
 * A case study as CreativeWork.
 *
 * Deliberately not `Review` or `AggregateRating`: those describe what a
 * customer said about us, and marking our own write-up as one is the kind of
 * thing that earns a manual action. This describes the work, and the client is
 * named as `about` only when they agreed to be named.
 */
export function caseStudyJsonLd(study: CaseStudy, pageUrl: string) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${pageUrl}#case`,
        name: study.cardTitle,
        headline: study.cardTitle,
        description: study.metaDescription,
        url: pageUrl,
        inLanguage: "es",
        dateCreated: study.completedAt,
        creator: { "@id": ORGANIZATION_ID },
        provider: { "@id": ORGANIZATION_ID },
        keywords: study.stack.join(", "),
        isPartOf: { "@id": `${abs(PORTFOLIO_BASE_PATH)}#portfolio` },
        ...(study.named && study.client
            ? { about: { "@type": "Organization", name: study.client } }
            : {}),
    };
}

/**
 * The portfolio index as an ItemList.
 * Emitted only when there is something to list — an empty ItemList is noise.
 */
export function portfolioJsonLd(studies: CaseStudy[], name: string, description: string) {
    const hubUrl = abs(PORTFOLIO_BASE_PATH);

    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${hubUrl}#portfolio`,
        url: hubUrl,
        name,
        description,
        inLanguage: "es",
        publisher: { "@id": ORGANIZATION_ID },
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: studies.length,
            itemListElement: studies.map((study, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: abs(casePath(study.slug)),
                name: `${study.cardTitle} — ${caseAttribution(study)}`,
            })),
        },
    };
}
