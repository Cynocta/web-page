"use client";

import { useI18n } from "@/components/i18n-provider";

export default function CurrencyToggle({ className }: { className?: string }) {
    const { currency, setCurrency, currencyOptions, copy } = useI18n();

    return (
        <div className={`cyn-toggle ${className ?? ""}`.trim()} aria-label={copy.plans.currencyLabel}>
            {currencyOptions.map((option) => (
                <button
                    key={option}
                    type="button"
                    className={`cyn-toggle-btn ${currency === option ? "is-active" : ""}`}
                    onClick={() => setCurrency(option)}
                    aria-pressed={currency === option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
