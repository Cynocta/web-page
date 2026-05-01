import "./globals.css";
import { bodyFont, brandFont, headingFont, monoFont } from "@/lib/fonts";
import { JsonLd } from "@/components/structured-data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} ${brandFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
