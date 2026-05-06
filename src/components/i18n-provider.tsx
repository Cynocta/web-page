"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content, Currency, currencyOptions, Locale } from "@/lib/content";

export type I18nContextValue = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    copy: typeof content.es;
    currencyOptions: Currency[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

const LOCALE_STORAGE_KEY = "cynocta_locale";
const CURRENCY_STORAGE_KEY = "cynocta_currency";

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>("es");
    const [currency, setCurrency] = useState<Currency>("COP");

    useEffect(() => {
        const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
        const storedCurrency = window.localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency | null;

        if (storedLocale === "es" || storedLocale === "en") {
            setLocale(storedLocale);
        }

        if (storedCurrency && currencyOptions.includes(storedCurrency)) {
            setCurrency(storedCurrency);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
        document.documentElement.lang = locale;
    }, [locale]);

    useEffect(() => {
        window.localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    }, [currency]);

    const value = useMemo<I18nContextValue>(
        () => ({
            locale,
            setLocale,
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
