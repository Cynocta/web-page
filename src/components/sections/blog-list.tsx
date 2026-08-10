"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./blog-list.module.css";

export type PostCard = {
    slug: string;
    href: string;
    category: string;
    categoryLabel: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    /** Machine-readable date for the `<time>` element. */
    dateIso: string;
    readingMinutes: number;
};

export type CategoryChip = { value: string; label: string };

/**
 * The article index, with a category filter.
 *
 * Every card is rendered into the HTML and hidden with a class when it doesn't
 * match — filtering here is a reading convenience, not a data-fetching step, so
 * a crawler (or a reader with JavaScript disabled) still sees every article.
 */
export default function BlogList({
    posts,
    categories,
    allLabel,
}: {
    posts: PostCard[];
    categories: CategoryChip[];
    allLabel: string;
}) {
    const [active, setActive] = useState<string | null>(null);

    const matches = (post: PostCard) => active === null || post.category === active;
    const visible = posts.filter(matches).length;

    return (
        <>
            {categories.length > 1 && (
                <div className={s.filters} role="group" aria-label="Filtrar por categoría">
                    <button
                        type="button"
                        className={`${s.chip} ${active === null ? s.chipOn : ""}`}
                        aria-pressed={active === null}
                        onClick={() => setActive(null)}
                    >
                        {allLabel}
                        <span className={s.count}>{posts.length}</span>
                    </button>

                    {categories.map((category) => {
                        const total = posts.filter((p) => p.category === category.value).length;

                        return (
                            <button
                                key={category.value}
                                type="button"
                                className={`${s.chip} ${active === category.value ? s.chipOn : ""}`}
                                aria-pressed={active === category.value}
                                onClick={() =>
                                    setActive(active === category.value ? null : category.value)
                                }
                            >
                                {category.label}
                                <span className={s.count}>{total}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Announced rather than shown: the change is obvious visually. */}
            <p className="sr-only" role="status">
                {visible} {visible === 1 ? "artículo visible" : "artículos visibles"}
            </p>

            <div className={s.grid}>
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className={`${s.card} ${matches(post) ? "" : s.hidden}`}
                        aria-hidden={matches(post) ? undefined : true}
                    >
                        <Link href={post.href} className={s.cardLink} tabIndex={matches(post) ? undefined : -1}>
                            <span className={s.category}>{post.categoryLabel}</span>
                            <h3 className={s.title}>{post.title}</h3>
                            <p className={s.excerpt}>{post.excerpt}</p>

                            <p className={s.meta}>
                                <span>{post.author}</span>
                                <span aria-hidden="true">·</span>
                                <time dateTime={post.dateIso}>{post.date}</time>
                                <span aria-hidden="true">·</span>
                                <span>{post.readingMinutes} min</span>
                            </p>

                            <span className={s.arrow} aria-hidden="true">
                                LEER ARTÍCULO →
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    );
}
