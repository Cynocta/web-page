"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import SectionLink from "@/components/ui/section-link";
import type { Locale } from "@/lib/content";
import { homeContent } from "@/lib/content/home";
import { useMediaQuery } from "@/lib/use-media-query";
import s from "./live-demo.module.css";

/** How long each step stays on screen while the demo plays itself on phones. */
const STEP_MS = 2800;
/** The finished state holds longer before the loop starts over. */
const FINAL_MS = 5200;
/** After a tap, autoplay waits this long so the reader can read the step. */
const MANUAL_HOLD_MS = 9000;

/**
 * "Así funciona" — one enquiry followed through the system.
 *
 * The four benefit cards that stood here made claims; this shows them happen.
 * A message arrives after hours, gets a reply in seconds, is qualified, booked
 * and recorded, and the team starts the next day with a summary.
 *
 * How it advances depends on the device, never on the markup:
 * - Desktop: the stage sticks while the steps scroll past; the step crossing
 *   the middle of the screen is the active one.
 * - Phones and tablets: a sticky scroll would cost several screens, so the
 *   stage plays itself while it is in view and pauses when it leaves. Tapping a
 *   step jumps to it and holds.
 * - Reduced motion: nothing moves on its own; the finished state is shown and
 *   the steps can still be selected.
 *
 * The step titles and texts are real headings and paragraphs in the served
 * HTML. The chat and the system log are an illustration of them, hidden from
 * assistive technology so the content isn't read twice.
 */
export default function LiveDemoSection({ locale = "es" }: { locale?: Locale }) {
    const copy = homeContent[locale].demo;
    const total = copy.steps.length;
    const last = total - 1;

    const isDesktop = useMediaQuery("(min-width: 1000px)");
    const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

    const [active, setActive] = useState(0);
    const [picked, setPicked] = useState<number | null>(null);
    const [inView, setInView] = useState(false);
    /** A tap pauses autoplay for one long beat; `taps` restarts that pause. */
    const [holding, setHolding] = useState(false);
    const [taps, setTaps] = useState(0);

    const rootRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

    const current = reducedMotion ? (picked ?? last) : active;

    // Desktop: the step in the middle band of the viewport drives the stage.
    useEffect(() => {
        if (!isDesktop || reducedMotion) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActive(Number((entry.target as HTMLElement).dataset.index));
                    }
                }
            },
            { rootMargin: "-45% 0px -45% 0px" },
        );

        stepRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [isDesktop, reducedMotion]);

    // Phones: only play while the section is on screen.
    useEffect(() => {
        if (isDesktop || reducedMotion) return;
        const el = rootRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
            threshold: 0.35,
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, [isDesktop, reducedMotion]);

    // Phones: advance one step at a time, loop after holding the final state.
    // After a tap the next tick only releases the pause, so the chosen step
    // stays up long enough to read before autoplay carries on from it.
    useEffect(() => {
        if (isDesktop || reducedMotion || !inView) return;

        const delay = holding ? MANUAL_HOLD_MS : active === last ? FINAL_MS : STEP_MS;

        const timer = window.setTimeout(() => {
            if (holding) {
                setHolding(false);
                return;
            }
            setActive((step) => (step >= last ? 0 : step + 1));
        }, delay);
        return () => window.clearTimeout(timer);
    }, [active, inView, holding, taps, isDesktop, reducedMotion, last]);

    const select = (index: number) => {
        if (reducedMotion) {
            setPicked(index);
            return;
        }
        if (isDesktop) {
            stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }
        setActive(index);
        setHolding(true);
        setTaps((count) => count + 1);
    };

    const messages = copy.messages.filter((message) => message.step <= current);
    const doneEvents = copy.events.filter((event) => event.step <= current);
    // On phones the log collapses to its most recent entry.
    const latestEventId = doneEvents.at(-1)?.id;
    const progress = `${((current + 1) / total) * 100}%`;
    // Phones: the active segment fills over exactly the time the step is on
    // screen, so the stepper doubles as a countdown to the next step.
    const playing = !isDesktop && !reducedMotion && inView && !holding;
    const stepDuration = active === last ? FINAL_MS : STEP_MS;

    return (
        <Section id="como-funciona" tone="black">
            <div ref={rootRef}>
                <SectionHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />

                <div className={s.layout}>
                    <ol className={s.steps}>
                        {copy.steps.map((step, index) => (
                            <li
                                key={step.title}
                                ref={(el) => {
                                    stepRefs.current[index] = el;
                                }}
                                data-index={index}
                                className={`${s.step} ${index === current ? s.active : ""} ${
                                    index < current ? s.past : ""
                                }`}
                            >
                                <h3 className={s.stepHeading}>
                                    <button
                                        type="button"
                                        className={s.stepButton}
                                        onClick={() => select(index)}
                                        aria-current={index === current ? "step" : undefined}
                                    >
                                        <span className={s.stepIndex}>{String(index + 1).padStart(2, "0")}</span>
                                        <span className={s.stepTitle}>{step.title}</span>
                                        <span className={s.stepTime}>{step.time}</span>
                                    </button>
                                </h3>
                                <p className={s.stepBody}>{step.body}</p>
                            </li>
                        ))}
                    </ol>

                    <div className={s.stageColumn}>
                        <div className={s.stage} aria-hidden="true">
                            <div className={s.stageTop}>
                                <span className={s.scenario}>
                                    <span className={s.liveDot} />
                                    {copy.scenario}
                                </span>
                                <span className={s.progressLabel}>
                                    {copy.progressLabel
                                        .replace("{n}", String(current + 1))
                                        .replace("{total}", String(total))}
                                </span>
                            </div>
                            <div className={s.progressTrack}>
                                <div className={s.progressBar} style={{ width: progress }} />
                            </div>

                            <div className={s.panels}>
                                <div className={s.chat}>
                                    <div className={s.chatHeader}>
                                        <span className={s.chatAvatar}>C</span>
                                        <span className={s.chatName}>
                                            {copy.chatTitle}
                                            <span className={s.chatStatus}>{copy.chatStatus}</span>
                                        </span>
                                    </div>
                                    <div className={s.messages}>
                                        {messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`${s.message} ${
                                                    message.from === "bot" ? s.fromBot : s.fromClient
                                                }`}
                                            >
                                                <span>{message.text}</span>
                                                <span className={s.messageTime}>{message.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={s.system}>
                                    <p className={s.systemTitle}>
                                        {copy.systemTitle}
                                        <span className={s.systemCount}>
                                            {doneEvents.length}/{copy.events.length}
                                        </span>
                                    </p>
                                    <ul className={s.events}>
                                        {copy.events.map((event) => (
                                            <li
                                                key={event.id}
                                                className={`${s.event} ${event.step <= current ? s.eventOn : ""} ${
                                                    event.id === latestEventId ? s.eventLatest : ""
                                                }`}
                                            >
                                                <span className={s.eventDot} />
                                                <span className={s.eventText}>
                                                    <span className={s.eventLabel}>{event.label}</span>
                                                    <span className={s.eventDetail}>{event.detail}</span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <dl className={`${s.metrics} ${current === last ? s.metricsOn : ""}`}>
                                        {copy.metrics.map((metric) => (
                                            <div key={metric.label} className={s.metric}>
                                                <dt>{metric.label}</dt>
                                                <dd>{metric.value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>

                        {/* Phones: a stories-style stepper — arrows plus one segment
                            per step, each tappable, the active one filling while the
                            step is shown. Numbered pills alone didn't read as
                            controls, and sat far below the stage. */}
                        <div className={s.mobileNav}>
                            <button
                                type="button"
                                className={s.navArrow}
                                onClick={() => select((current + total - 1) % total)}
                                aria-label={copy.prevLabel}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                            <div className={s.segments}>
                                {copy.steps.map((step, index) => (
                                    <button
                                        key={step.title}
                                        type="button"
                                        className={`${s.segment} ${index < current ? s.segmentDone : ""} ${
                                            index === current ? s.segmentActive : ""
                                        } ${index === current && playing ? s.segmentPlaying : ""}`}
                                        onClick={() => select(index)}
                                        aria-label={copy.goToLabel
                                            .replace("{n}", String(index + 1))
                                            .replace("{title}", step.title)}
                                        aria-current={index === current ? "step" : undefined}
                                    >
                                        <span className={s.segmentTrack}>
                                            <span
                                                // Remounts to restart the fill for each step
                                                // and each time the section comes back into view.
                                                key={`${current}-${taps}-${inView}`}
                                                className={s.segmentFill}
                                                style={
                                                    index === current && playing
                                                        ? { animationDuration: `${stepDuration}ms` }
                                                        : undefined
                                                }
                                            />
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <button
                                type="button"
                                className={s.navArrow}
                                onClick={() => select((current + 1) % total)}
                                aria-label={copy.nextLabel}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>

                        {/* Phones: the active step's title and text, in a box of fixed
                            height so autoplay never moves what sits below. On phones
                            this is the readable copy of the step (the list is hidden);
                            on desktop it is not rendered and the list is. */}
                        <p key={current} className={s.caption}>
                            <span className={s.captionTitle}>{copy.steps[current].title}</span>
                            {copy.steps[current].body}
                        </p>
                    </div>
                </div>

                <p className={s.footnote}>{copy.footnote}</p>
                <SectionLink
                    href="/nosotros"
                    label={copy.linkLabel}
                    hrefLang={locale === "es" ? undefined : "es"}
                />
            </div>
        </Section>
    );
}
