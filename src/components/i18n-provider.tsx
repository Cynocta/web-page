"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content, Currency, currencyOptions, defaultCurrency, Locale } from "@/lib/content";

export type I18nContextValue = {
    locale: Locale;
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    copy: typeof content.es;
    currencyOptions: Currency[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

const CURRENCY_STORAGE_KEY = "cynocta_currency";

/**
 * The locale is decided by the route and passed in from the server layout, so
 * the served HTML always matches the URL. It is deliberately not state: changing
 * language is a navigation, not a toggle, otherwise there is no URL for a
 * crawler to index. Currency stays client-side — it is a display preference.
 */
export function I18nProvider({
    locale,
    children,
}: {
    locale: Locale;
    children: React.ReactNode;
}) {
    const [currency, setCurrency] = useState<Currency>(defaultCurrency);

    useEffect(() => {
        const stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency | null;
        if (stored && currencyOptions.includes(stored)) {
            setCurrency(stored);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    }, [currency]);

    const value = useMemo<I18nContextValue>(
        () => ({
            locale,
            currency,
            setCurrency,
            copy: content[locale],
            currencyOptions,
        }),
        [locale, currency]
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const context = useContext(I18nContext);

    if (!context) {
        throw new Error("useI18n must be used within I18nProvider");
    }

    return context;
}
