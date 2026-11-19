import { bodyFont, brandFont, headingFont, monoFont } from "@/lib/fonts";
import Analytics from "@/components/analytics";
import { JsonLd } from "@/components/structured-data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { I18nProvider } from "@/components/i18n-provider";
import type { Locale } from "@/lib/content";
import { themeBootScript } from "@/components/theme-toggle";

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
            /* The server renders the default; the boot script below rewrites it
               before paint for anyone who stored dark. That difference is the
               whole point of the script, so React is told to expect it rather
               than reporting it as a mismatch. */
            data-theme="light"
            suppressHydrationWarning
            className={`${bodyFont.variable} ${headingFont.variable} ${brandFont.variable} ${monoFont.variable} h-full antialiased`}
        >
            <head>
                {/* Sets the theme on <html> before the first paint. Anything
                    later than this is a visible flash of the wrong ground. */}
                <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
            </head>
            <body className="min-h-full bg-background text-foreground">
                <I18nProvider locale={locale}>
                    <JsonLd data={organizationJsonLd()} />
                    <JsonLd data={websiteJsonLd(locale)} />
                    <div className="relative z-10">{children}</div>
                </I18nProvider>
                <Analytics />
            </body>
        </html>
    );
}
