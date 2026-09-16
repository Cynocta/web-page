import type { Metadata } from "next";
import PageShell from "@/components/layout/page-shell";
import PageHero from "@/components/sections/page-hero";
import BlogList, { type CategoryChip, type PostCard } from "@/components/sections/blog-list";
import Section from "@/components/ui/section";
import EmptyState from "@/components/ui/empty-state";
import { JsonLd } from "@/components/structured-data";
import {
    BLOG_BASE_PATH,
    activeCategories,
    blogIndex,
    categoriesEsNav,
    formatPostDate,
    getAuthor,
    postList,
    postPath,
} from "@/lib/content/blog";
import { blogJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
    path: BLOG_BASE_PATH,
    title: blogIndex.metaTitle,
    description: blogIndex.metaDescription,
});

/** Flattened for the client component: it filters, it doesn't need the article bodies. */
const cards: PostCard[] = postList.map((post) => ({
    slug: post.slug,
    href: postPath(post.slug),
    category: post.category,
    categoryLabel: categoriesEsNav[post.category],
    title: post.title,
    excerpt: post.excerpt,
    author: getAuthor(post.author).name,
    date: formatPostDate(post.publishedAt),
    dateIso: post.publishedAt,
    readingMinutes: post.readingMinutes,
}));

const chips: CategoryChip[] = activeCategories.map((category) => ({
    value: category,
    label: categoriesEsNav[category],
}));

export default function BlogPage() {
    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Blog", href: BLOG_BASE_PATH },
            ]}
        >
            {postList.length > 0 && (
                <JsonLd data={blogJsonLd(postList, blogIndex.metaTitle, blogIndex.metaDescription)} />
            )}

            <PageHero
                eyebrow={blogIndex.eyebrow}
                title={blogIndex.heading}
                intro={blogIndex.intro}
                secondary={{ label: "Ver servicios", href: "/servicios" }}
            />

            <Section tone="surface">
                {postList.length > 0 ? (
                    <>
                        {/* An <h2>, not a <p>: the article cards are <h3>, and without a level in
                            between the page jumped straight from its <h1> to them. The
                            section-tag class sets its own font, so it looks the same. */}
                        <h2 className="cyn-section-tag">{blogIndex.listTitle}</h2>
                        <BlogList posts={cards} categories={chips} allLabel={blogIndex.allLabel} />
                    </>
                ) : (
                    /* Kept deliberately: the section stays honest if every article is ever pulled. */
                    <EmptyState
                        badge="Próximamente"
                        title="Todavía no hay artículos publicados."
                        body="Estamos escribiendo los primeros. Mientras tanto, las preguntas frecuentes cubren lo que más nos consultan antes de contratar."
                        primary={{ label: "Ver preguntas frecuentes", href: "/preguntas-frecuentes" }}
                        secondary={{ label: "Escríbenos", href: "/contacto" }}
                    />
                )}
            </Section>
        </PageShell>
    );
}
