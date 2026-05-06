"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { buildWhatsappLink } from "@/lib/site-data";

export default function HeroSection() {
    const { copy } = useI18n();

    return (
        <section className="cyn-hero" id="inicio">
            <div className="cyn-hero-grid" />
            <div className="cyn-hero-glow" />

            <div className="cyn-hero-content">
                <div className="cyn-hero-layout">
                    <div className="cyn-hero-copy">
                        <p className="cyn-eyebrow">{copy.hero.eyebrow}</p>
                        <h1>
                            <em>{copy.hero.title.line1Em}</em>
                            {copy.hero.title.line1Text}
                            <br />
                            {copy.hero.title.line2Text}
                            <em>{copy.hero.title.line2Em}</em>.
                        </h1>
                        <p className="cyn-hero-sub">
                            {copy.hero.subtitle}
                        </p>

                        <div className="cyn-hero-actions">
                            <a
                                href={buildWhatsappLink(copy.hero.primaryCtaWhatsappText)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyn-btn-primary"
                            >
                                {copy.hero.primaryCta}
                            </a>
                            <Link href="#resultados" className="cyn-btn-ghost">
                                {copy.hero.secondaryCta}
                            </Link>
                        </div>

                        <div className="cyn-hero-stats" aria-label={copy.hero.aria.stats}>
                            {copy.hero.stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="cyn-stat-val">
                                        <span>{stat.prefix}</span>
                                        {stat.value}
                                    </p>
                                    <p className="cyn-stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="cyn-hero-visual" aria-label={copy.hero.aria.visual}>
                        <div className="cyn-hero-visual-orbit" aria-hidden="true" />
                        <div className="cyn-hero-visual-shell">
                            <div className="cyn-hero-visual-header">
                                <div>
                                    <p className="cyn-hero-visual-kicker">{copy.hero.visual.kicker}</p>
                                    <h2>{copy.hero.visual.title}</h2>
                                </div>
                                <span className="cyn-hero-visual-pill">{copy.hero.visual.pill}</span>
                            </div>

                            <div className="cyn-hero-visual-grid">
                                <article className="cyn-hero-visual-panel cyn-hero-visual-panel-main">
                                    <div className="cyn-hero-visual-panel-top">
                                        <span>{copy.hero.visual.liveFunnel}</span>
                                        <span>{copy.hero.visual.updated}</span>
                                    </div>

                                    <div className="cyn-hero-visual-metrics">
                                        <div>
                                            <span>{copy.hero.visual.inquiries}</span>
                                            <strong>128</strong>
                                        </div>
                                        <div>
                                            <span>{copy.hero.visual.replies}</span>
                                            <strong>94%</strong>
                                        </div>
                                        <div>
                                            <span>{copy.hero.visual.appointments}</span>
                                            <strong>36</strong>
                                        </div>
                                    </div>

                                    <div className="cyn-hero-visual-bars" aria-hidden="true">
                                        <span style={{ height: "36%" }} />
                                        <span style={{ height: "52%" }} />
                                        <span style={{ height: "68%" }} />
                                        <span style={{ height: "58%" }} />
                                        <span style={{ height: "80%" }} />
                                        <span style={{ height: "91%" }} />
                                    </div>
                                </article>

                                <article className="cyn-hero-visual-panel cyn-hero-visual-panel-chat">
                                    <p className="cyn-hero-visual-panel-title">{copy.hero.visual.chatTitle}</p>
                                    <div className="cyn-hero-chat-stack">
                                        <div className="cyn-hero-chat-message is-user">
                                            {copy.hero.visual.chatUser}
                                        </div>
                                        <div className="cyn-hero-chat-message is-bot">
                                            {copy.hero.visual.chatBot}
                                        </div>
                                    </div>
                                    <div className="cyn-hero-response">
                                        <span>{copy.hero.visual.responseLabel}</span>
                                        <strong>&lt;5s</strong>
                                    </div>
                                </article>
                            </div>

                            <div className="cyn-hero-visual-flow" aria-label={copy.hero.aria.flow}>
                                {copy.hero.visual.flow.map((label) => (
                                    <span key={label}>{label}</span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
