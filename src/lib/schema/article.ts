import { BLOG_BASE_PATH, getAuthor, postPath, type BlogPost } from "@/lib/content/blog";
import { siteUrl } from "@/lib/site-data";
import { faqItemsJsonLd } from "./faq";
import { ORGANIZATION_ID } from "./organization";

const abs = (path: string) => `${siteUrl}${path}`;

/**
 * A stable @id per author, so every article by the same person resolves to one
 * entity instead of creating a new Person on each page. The founders have no
 * public profile URLs yet; `sameAs` is added the day those fields are filled in.
 */
function authorEntity(post: BlogPost) {
    const author = getAuthor(post.author);

    return {
        "@type": "Person",
        "@id": `${siteUrl}/nosotros#${post.author}`,
        name: author.name,
        jobTitle: author.role,
        worksFor: { "@id": ORGANIZATION_ID },
        url: abs("/nosotros"),
    };
}

/**
 * BlogPosting for an individual article.
 *
 * `dateModified` falls back to the publication date rather than to today: a
 * page that reports itself as modified on every build is a signal engines learn
 * to discount.
 */
export function blogPostingJsonLd(post: BlogPost, pageUrl: string) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.metaDescription,
        abstract: post.keyTakeaway,
        url: pageUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        inLanguage: "es",
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        wordCount: countWords(post),
        timeRequired: `PT${post.readingMinutes}M`,
        author: authorEntity(post),
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": `${abs(BLOG_BASE_PATH)}#blog` },
    };
}

/** The article's own questions, same contract as the service pages. */
export function articleFaqJsonLd(post: BlogPost, pageUrl: string) {
    return faqItemsJsonLd(post.faq, pageUrl);
}

/** The blog itself, declared once on the index and pointed at by every article. */
export function blogJsonLd(posts: BlogPost[], name: string, description: string) {
    const blogUrl = abs(BLOG_BASE_PATH);

    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${blogUrl}#blog`,
        url: blogUrl,
        name,
        description,
        inLanguage: "es",
        publisher: { "@id": ORGANIZATION_ID },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            "@id": `${abs(postPath(post.slug))}#article`,
            headline: post.title,
            url: abs(postPath(post.slug)),
            datePublished: post.publishedAt,
            author: authorEntity(post),
        })),
    };
}

/** Approximate, from the rendered prose — enough for `wordCount` to be honest. */
function countWords(post: BlogPost) {
    const text = post.blocks
        .map((block) => {
            switch (block.kind) {
                case "p":
                case "h2":
                case "h3":
                    return block.text;
                case "list":
                    return block.items.join(" ");
                case "quote":
                    return block.text;
                case "callout":
                    return `${block.title} ${block.text}`;
                case "table":
                    return [block.caption ?? "", ...block.head, ...block.rows.flat()].join(" ");
            }
        })
        .join(" ");

    return text.split(/\s+/).filter(Boolean).length;
}
