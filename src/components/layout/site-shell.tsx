import { bodyFont, brandFont, headingFont, monoFont } from "@/lib/fonts";
import { JsonLd } from "@/components/structured-data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { I18nProvider } from "@/components/i18n-provider";
import type { Locale } from "@/lib/content";

/**
 * The document shell, shared by both locale root layouts.
 *
 * Each locale needs its own `<html lang>`, and only a root layout can render
 * `<html>` — hence one root layout per route group, both delegating here so the
 * shell itself exists once.
 */
export default function SiteShell({
    locale,
    children,
}: {
    locale: Locale;
    children: React.ReactNode;
}) {
    return (
        <html
            lang={locale}
            className={`${bodyFont.variable} ${headingFont.variable} ${brandFont.variable} ${monoFont.variable} h-full antialiased`}
        >
            <body className="min-h-full bg-background text-foreground">
                <I18nProvider locale={locale}>
                    <JsonLd data={organizationJsonLd()} />
                    <JsonLd data={websiteJsonLd(locale)} />
                    <div className="relative z-10">{children}</div>
                </I18nProvider>
            </body>
        </html>
    );
}
