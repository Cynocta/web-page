import Link from "next/link";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { faqContent, type Locale } from "@/lib/content";
import { homeContent } from "@/lib/content/home";
import s from "./home-faq.module.css";

/**
 * Homepage FAQ.
 *
 * The home answered no question at all, and it is the URL with the most
 * authority on the site — the one an answer engine is most likely to quote.
 *
 * Native `<details>` so the band stays short on a phone, and so every answer is
 * in the served HTML whether a reader expands it or not: collapsing with
 * conditional rendering would hide exactly the text this block exists to
 * publish. Each question is a real <h3> with a stable id, which the FAQPage
 * schema points at.
 */
export default function HomeFaqSection({ locale = "es" }: { locale?: Locale }) {
    const copy = homeContent[locale].faq;
    const total = faqContent[locale].items.length;

    return (
        <Section id="preguntas" tone="black">
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />

            <div className={s.list}>
                {copy.items.map((item) => (
                    <details key={item.id} id={item.id} className={s.item}>
                        <summary className={s.summary}>
                            <h3 className={s.question}>{item.question}</h3>
                            <span className={s.icon} aria-hidden="true" />
                        </summary>
                        <p className={s.answer}>{item.answer}</p>
                    </details>
                ))}
            </div>

            <Link href={copy.moreHref} className={s.more}>
                {copy.moreLabel.replace("{n}", String(total))}
                <span aria-hidden="true">→</span>
            </Link>
        </Section>
    );
}
