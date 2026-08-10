import Link from "next/link";
import {
    getPost,
    postPath,
    tableOfContents,
    type ArticleBlock,
    type BlogPost,
} from "@/lib/content/blog";
import { getService, servicePath } from "@/lib/content/services";
import s from "./article.module.css";

/** One renderer per block shape. The union in the content types makes this exhaustive. */
function Block({ block }: { block: ArticleBlock }) {
    switch (block.kind) {
        case "p":
            return <p className={s.p}>{block.text}</p>;

        case "h2":
            return (
                <h2 id={block.id} className={s.h2}>
                    {block.text}
                </h2>
            );

        case "h3":
            return <h3 className={s.h3}>{block.text}</h3>;

        case "list":
            return block.ordered ? (
                <ol className={s.ol}>
                    {block.items.map((item) => (
                        <li key={item} className={s.li}>
                            {item}
                        </li>
                    ))}
                </ol>
            ) : (
                <ul className={s.ul}>
                    {block.items.map((item) => (
                        <li key={item} className={s.li}>
                            {item}
                        </li>
                    ))}
                </ul>
            );

        case "quote":
            return (
                <figure className={s.quoteWrap}>
                    <blockquote className={s.quote}>{block.text}</blockquote>
                    {block.source && <figcaption className={s.quoteSource}>{block.source}</figcaption>}
                </figure>
            );

        case "callout":
            return (
                <aside className={s.callout}>
                    <p className={s.calloutTitle}>{block.title}</p>
                    <p className={s.calloutText}>{block.text}</p>
                </aside>
            );

        case "table":
            return (
                <div className={s.tableWrap}>
                    <table className={s.table}>
                        {block.caption && <caption className={s.tableCaption}>{block.caption}</caption>}
                        <thead>
                            <tr>
                                {block.head.map((cell, i) => (
                                    <th key={cell || `col-${i}`} scope="col">
                                        {cell}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {block.rows.map((row) => (
                                <tr key={row[0]}>
                                    {row.map((cell, i) =>
                                        i === 0 ? (
                                            <th key={cell} scope="row">
                                                {cell}
                                            </th>
                                        ) : (
                                            <td key={`${row[0]}-${i}`}>{cell}</td>
                                        ),
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
    }
}

/** The whole body of an article, below the hero. */
export default function ArticleBody({ post }: { post: BlogPost }) {
    const toc = tableOfContents(post);

    const related = post.related
        .map((slug) => getPost(slug))
        .filter((p): p is BlogPost => Boolean(p));

    const services = post.relatedServices
        .map((slug) => getService(slug))
        .filter((service): service is NonNullable<ReturnType<typeof getService>> =>
            Boolean(service),
        );

    return (
        <>
            <div className={s.body}>
                <div className={s.bodyInner}>
                    {/* The direct answer, before the article argues for it. */}
                    <div className={s.takeaway}>
                        <p className={s.takeawayLabel}>En corto</p>
                        <p className={s.takeawayText}>{post.keyTakeaway}</p>
                    </div>

                    {toc.length > 2 && (
                        <nav className={s.toc} aria-label="Contenido del artículo">
                            <p className={s.tocTitle}>En este artículo</p>
                            <ol className={s.tocList}>
                                {toc.map((heading) => (
                                    <li key={heading.id}>
                                        <a href={`#${heading.id}`} className={s.tocLink}>
                                            {heading.text}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}

                    <div className={s.prose}>
                        {post.blocks.map((block, i) => (
                            <Block key={block.kind === "h2" ? block.id : `${block.kind}-${i}`} block={block} />
                        ))}
                    </div>
                </div>
            </div>

            {post.faq.length > 0 && (
                <section id="preguntas" className={s.faqSection}>
                    <div className={`cyn-section ${s.narrow}`}>
                        <p className="cyn-section-tag">Preguntas frecuentes</p>
                        <h2 className="cyn-section-title">Sobre este tema</h2>
                        <div className={s.faqList}>
                            {post.faq.map((item) => (
                                <article key={item.id} id={item.id} className={s.faqItem}>
                                    <h3 className={s.faqQuestion}>{item.question}</h3>
                                    <p className={s.faqAnswer}>{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className={s.closing}>
                <div className={`cyn-section ${s.inner}`}>
                    {related.length > 0 && (
                        <>
                            <p className="cyn-section-tag">Seguir leyendo</p>
                            <h2 className="cyn-section-title">Artículos relacionados</h2>
                            <div className={s.related}>
                                {related.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={postPath(item.slug)}
                                        className={s.relatedCard}
                                    >
                                        <h3 className={s.relatedTitle}>{item.title}</h3>
                                        <p className={s.relatedText}>{item.excerpt}</p>
                                        <span className={s.relatedArrow} aria-hidden="true">
                                            LEER ARTÍCULO →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                    {services.length > 0 && (
                        <div className={s.servicesBlock}>
                            <p className={s.servicesLabel}>Lo que hacemos sobre esto</p>
                            <ul className={s.servicesList}>
                                {services.map((service) => (
                                    <li key={service.slug}>
                                        <Link href={servicePath(service.slug)} className={s.serviceLink}>
                                            {service.cardTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={s.cta}>
                        <div className={s.ctaCopy}>
                            <p className={s.ctaTitle}>¿Tienes este problema ahora mismo?</p>
                            <p className={s.ctaText}>
                                Cuéntanos tu caso en cuatro preguntas. Te decimos con honestidad si
                                esto lo resuelve, qué costaría y si conviene esperar.
                            </p>
                        </div>
                        <Link href="/contacto" className={s.ctaButton}>
                            Hablemos de tu caso
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
