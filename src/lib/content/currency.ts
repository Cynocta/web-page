import type { Currency } from "./types";

/** USD leads: prices are quoted in dollars and converted from there. */
export const currencyOptions: Currency[] = ["USD", "COP", "EUR"];

export const defaultCurrency: Currency = "USD";

/** Multipliers applied to a USD base amount. */
export const currencyRates: Record<Currency, number> = {
    USD: 1,
    COP: 4000,
    EUR: 0.92,
};

/** Rounds converted amounts to a clean figure so COP doesn't render as $3.000.000,00. */
const roundForCurrency = (value: number, currency: Currency) => {
    if (currency === "COP") {
        return Math.round(value / 10000) * 10000;
    }
    return Math.round(value / 10) * 10;
};

export const formatCurrency = (amountUSD: number, currency: Currency) => {
    const value = roundForCurrency(amountUSD * currencyRates[currency], currency);
    const locale = currency === "COP" ? "es-CO" : currency === "USD" ? "en-US" : "es-ES";

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(value);
};
