import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/page-shell";
import ArticleHero from "@/components/sections/article-hero";
import ArticleBody from "@/components/sections/article-body";
import { JsonLd } from "@/components/structured-data";
import { BLOG_BASE_PATH, POST_SLUGS, getPost, postPath } from "@/lib/content/blog";
import { articleFaqJsonLd, blogPostingJsonLd } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";

/** One template, every article — same contract as the service pages. */
export function generateStaticParams() {
    return POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) return {};

    const path = postPath(post.slug);

    return {
        title: post.metaTitle,
        description: post.metaDescription,
        alternates: { canonical: path },
        openGraph: {
            title: `${post.metaTitle} | Cynocta`,
            description: post.metaDescription,
            url: path,
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt ?? post.publishedAt,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) notFound();

    const pageUrl = `${siteUrl}${postPath(post.slug)}`;

    return (
        <PageShell
            crumbs={[
                { label: "Inicio", href: "/" },
                { label: "Blog", href: BLOG_BASE_PATH },
                { label: post.navLabel, href: postPath(post.slug) },
            ]}
        >
            <JsonLd data={blogPostingJsonLd(post, pageUrl)} />
            {post.faq.length > 0 && <JsonLd data={articleFaqJsonLd(post, pageUrl)} />}

            <article>
                <ArticleHero post={post} />
                <ArticleBody post={post} />
            </article>
        </PageShell>
    );
}
