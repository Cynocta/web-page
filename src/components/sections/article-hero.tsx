import { formatPostDate, getAuthor, type BlogPost } from "@/lib/content/blog";
import { categoriesEsNav } from "@/lib/content/blog/nav";
import s from "./article.module.css";

/**
 * The head of an article: what it is, who wrote it and when.
 *
 * Authorship and date sit in the markup rather than only in the JSON-LD,
 * because they are the two things a reader uses to decide whether a technical
 * article is worth their time.
 */
export default function ArticleHero({ post }: { post: BlogPost }) {
    const author = getAuthor(post.author);

    return (
        <header className={s.hero}>
            <div className={s.heroInner}>
                <span className={s.category}>{categoriesEsNav[post.category]}</span>

                <h1 className={s.title}>{post.title}</h1>
                <p className={s.excerpt}>{post.excerpt}</p>

                <div className={s.byline}>
                    <span className={s.avatar} aria-hidden="true">
                        {author.initials}
                    </span>
                    <div className={s.bylineText}>
                        <p className={s.bylineName}>{author.name}</p>
                        <p className={s.bylineMeta}>
                            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                            <span aria-hidden="true"> · </span>
                            <span>{post.readingMinutes} min de lectura</span>
                            {post.updatedAt && (
                                <>
                                    <span aria-hidden="true"> · </span>
                                    <span>Actualizado el {formatPostDate(post.updatedAt)}</span>
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
