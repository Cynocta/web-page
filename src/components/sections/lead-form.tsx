"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { buildWhatsappLink } from "@/lib/site-data";
import s from "./lead-form.module.css";

type Answers = Record<string, string>;

export default function LeadFormSection() {
    const { copy } = useI18n();
    const [answers, setAnswers] = useState<Answers>({});
    const [step, setStep] = useState(0);
    const [attempted, setAttempted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    /** Guards the first render: focusing on mount would scroll the page here on load. */
    const navigated = useRef(false);

    const questions = copy.form.questions;
    const total = questions.length;
    const question = questions[step];
    const isLast = step === total - 1;
    const value = answers[question.id] ?? "";
    const answered = value.trim().length > 0;

    // Focus the text input only once the user is actually stepping through the
    // form; `preventScroll` keeps the browser from jumping the page to it.
    useEffect(() => {
        if (!navigated.current) return;
        inputRef.current?.focus({ preventScroll: true });
    }, [step]);

    const setAnswer = (id: string, answer: string) => {
        setAnswers((prev) => ({ ...prev, [id]: answer }));
        setAttempted(false);
    };

    /** Renders the answers as a readable WhatsApp message instead of raw values. */
    const buildMessage = () => {
        const lines = questions.map((q) => {
            const raw = answers[q.id] ?? "";
            const label =
                q.kind === "choice"
                    ? q.options?.find((o) => o.value === raw)?.label ?? raw
                    : raw;
            return `• ${q.label} ${label}`;
        });
        return [copy.form.messageIntro, "", ...lines].join("\n");
    };

    const goNext = () => {
        if (!answered) {
            setAttempted(true);
            return;
        }
        setAttempted(false);
        if (isLast) {
            window.open(buildWhatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
            return;
        }
        navigated.current = true;
        setStep((prev) => prev + 1);
    };

    const goBack = () => {
        setAttempted(false);
        navigated.current = true;
        setStep((prev) => Math.max(0, prev - 1));
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        goNext();
    };

    const stepLabel = copy.form.stepOf
        .replace("{current}", String(step + 1))
        .replace("{total}", String(total));

    return (
        <section id="formulario" className={s.section}>
            <div className={`cyn-section ${s.inner}`}>
                <p className="cyn-section-tag">{copy.form.tag}</p>
                <h2 className="cyn-section-title">{copy.form.title}</h2>
                <p className={s.subtitle}>{copy.form.subtitle}</p>

                <form className={s.form} onSubmit={onSubmit} noValidate>
                    {/* ── Progress ── */}
                    <div className={s.progress}>
                        <div className={s.progressBar}>
                            <span
                                className={s.progressFill}
                                style={{ width: `${((step + 1) / total) * 100}%` }}
                            />
                        </div>
                        <p className={s.progressLabel}>{stepLabel}</p>
                    </div>

                    {/* ── Current question only ── */}
                    <fieldset
                        key={question.id}
                        className={s.field}
                        data-missing={attempted && !answered}
                    >
                        <legend className={s.legend}>
                            <span className={s.legendNum}>{String(step + 1).padStart(2, "0")}</span>
                            {question.label}
                        </legend>
                        {question.hint && <p className={s.hint}>{question.hint}</p>}

                        {question.kind === "text" ? (
                            <input
                                ref={inputRef}
                                type="text"
                                className={s.input}
                                value={value}
                                placeholder={question.placeholder}
                                onChange={(e) => setAnswer(question.id, e.target.value)}
                                aria-label={question.label}
                            />
                        ) : (
                            <div className={s.options}>
                                {question.options?.map((option) => (
                                    <label
                                        key={option.value}
                                        className={`${s.option} ${value === option.value ? s.optionActive : ""}`}
                                    >
                                        <input
                                            type="radio"
                                            name={question.id}
                                            value={option.value}
                                            checked={value === option.value}
                                            onChange={() => setAnswer(question.id, option.value)}
                                            className={s.radio}
                                        />
                                        <span className={s.optionMark} aria-hidden="true" />
                                        <span>{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </fieldset>

                    {/* ── Actions ── */}
                    <div className={s.actions}>
                        <div className={s.actionRow}>
                            {step > 0 && (
                                <button type="button" className={s.back} onClick={goBack}>
                                    <span aria-hidden="true">←</span>
                                    {copy.form.back}
                                </button>
                            )}
                            <button type="submit" className={s.submit}>
                                {isLast ? copy.form.submit : copy.form.next}
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                        <p className={s.submitHint} role={attempted && !answered ? "alert" : undefined}>
                            {attempted && !answered
                                ? copy.form.requiredHint
                                : isLast
                                    ? copy.form.submitHint
                                    : ""}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
