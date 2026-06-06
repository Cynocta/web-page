"use client";

import * as React from "react";
import { useRef, type PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useMotionValue,
    useSpring,
    useInView,
    type MotionStyle,
    type Variants,
} from "framer-motion";
import LanguageToggle from "@/components/language-toggle";
import { useI18n } from "@/components/i18n-provider";
import { buildWhatsappLink, contactEmail, contactPhone, instagramUrl } from "@/lib/site-data";

const FOOTER_STYLES = `
@keyframes cyn-footer-breathe {
  0%   { transform: translate(-50%,-50%) scale(1);   opacity: .45; }
  100% { transform: translate(-50%,-50%) scale(1.18); opacity: 1;  }
}
@keyframes cyn-footer-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes cyn-footer-heartbeat {
  0%,100% { transform: scale(1);   filter: drop-shadow(0 0 4px rgba(25,245,156,.4));  }
  15%,45% { transform: scale(1.25); filter: drop-shadow(0 0 10px rgba(25,245,156,.7)); }
  30%     { transform: scale(1); }
}
.cyn-footer-aurora {
  background: radial-gradient(circle at 50% 50%,
    rgba(25,245,156,.14) 0%, rgba(121,226,255,.07) 40%, transparent 70%);
  animation: cyn-footer-breathe 8s ease-in-out infinite alternate;
}
.cyn-footer-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(25,245,156,.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(25,245,156,.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}
.cyn-footer-giant-text {
  font-size: clamp(56px,20vw,300px);
  line-height: .85;
  font-weight: 900;
  letter-spacing: -.04em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(25,245,156,.18);
  background: linear-gradient(180deg, rgba(25,245,156,.22) 0%, rgba(25,245,156,.08) 60%, transparent 90%);
  -webkit-background-clip: text;
  background-clip: text;
}
.cyn-footer-heading-glow {
  background: linear-gradient(180deg, var(--cyn-white) 0%, var(--cyn-muted) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(25,245,156,.12));
}
.cyn-footer-glass {
  background: linear-gradient(145deg, rgba(25,245,156,.12) 0%, rgba(255,255,255,.04) 100%);
  box-shadow:
    0 8px 24px -8px rgba(0,0,0,.5),
    inset 0 1px 1px rgba(255,255,255,.1),
    inset 0 -1px 2px rgba(0,0,0,.3);
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: background .4s cubic-bezier(.16,1,.3,1),
              border-color .4s cubic-bezier(.16,1,.3,1),
              box-shadow .4s cubic-bezier(.16,1,.3,1);
}
.cyn-footer-glass:hover {
  background: linear-gradient(145deg, rgba(25,245,156,.2) 0%, rgba(255,255,255,.06) 100%);
  border-color: rgba(25,245,156,.5);
  box-shadow:
    0 16px 36px -8px rgba(0,0,0,.6),
    inset 0 1px 1px rgba(25,245,156,.2);
}
.cyn-footer-channel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  color: var(--cyn-accent);
  transition: background .4s cubic-bezier(.16,1,.3,1),
              border-color .4s cubic-bezier(.16,1,.3,1),
              box-shadow .4s cubic-bezier(.16,1,.3,1),
              transform .3s cubic-bezier(.16,1,.3,1);
}
.cyn-footer-channel:hover {
  transform: translateY(-3px);
}
.cyn-footer-channel-label {
  font-family: var(--font-mono), Consolas, monospace;
  font-size: 9px;
  letter-spacing: .15em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--cyn-muted-2);
  transition: color .3s;
}
.cyn-footer-channel:hover .cyn-footer-channel-label {
  color: var(--cyn-white);
}
.cyn-footer-nav-link {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: var(--cyn-white);
  transition: background .4s cubic-bezier(.16,1,.3,1),
              border-color .4s cubic-bezier(.16,1,.3,1),
              box-shadow .4s cubic-bezier(.16,1,.3,1),
              transform .3s cubic-bezier(.16,1,.3,1);
}
.cyn-footer-nav-link:hover {
  transform: translateY(-2px);
}
.cyn-footer-legal-link {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .08em;
  text-decoration: none;
  white-space: nowrap;
  color: var(--cyn-muted-2);
  transition: background .4s cubic-bezier(.16,1,.3,1),
              border-color .4s cubic-bezier(.16,1,.3,1),
              box-shadow .4s cubic-bezier(.16,1,.3,1),
              transform .3s cubic-bezier(.16,1,.3,1);
}
.cyn-footer-legal-link:hover {
  color: var(--cyn-white);
  transform: translateY(-2px);
}
.cyn-footer-marquee-track {
  animation: cyn-footer-marquee 35s linear infinite;
}
`;

/* ------------------------------------------------------------------ */
/*  Channel icons                                                      */
/* ------------------------------------------------------------------ */
const channelIcons: Record<string, React.ReactNode> = {
    whatsapp: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.014a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893a11.79 11.79 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.04 24c6.583 0 11.94-5.335 11.943-11.893a11.821 11.821 0 0 0-3.462-8.658z" />
        </svg>
    ),
    instagram: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
    ),
    email: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    ),
    phone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
};

/* ------------------------------------------------------------------ */
/*  Magnetic pill                                                     */
/* ------------------------------------------------------------------ */
type MagPillProps = PropsWithChildren<{
    as?: "a" | "button" | typeof Link;
    className?: string;
    style?: MotionStyle;
    href?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
    "aria-label"?: string;
}>;

function MagPill({ as, children, className, style, ...rest }: MagPillProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 250, damping: 18 });
    const sy = useSpring(y, { stiffness: 250, damping: 18 });
    const ref = useRef<HTMLElement>(null);

    const handleMouse = (e: React.MouseEvent) => {
        if (typeof window !== "undefined" && !window.matchMedia("(pointer:fine)").matches) return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
    };
    const handleLeave = () => { x.set(0); y.set(0); };

    const Component = as === Link ? motion.create(Link) : as === "button" ? motion.button : motion.a;

    return (
        <Component
            ref={ref as any}
            className={className}
            style={{ x: sx, y: sy, ...style } as any}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...(rest as any)}
        >
            {children}
        </Component>
    );
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                           */
/* ------------------------------------------------------------------ */
function MarqueeContent({ items }: { items: string[] }) {
    return (
        <div className="flex items-center space-x-10 px-5 shrink-0">
            {items.map((text, i) => (
                <React.Fragment key={i}>
                    <span className="whitespace-nowrap">{text}</span>
                    <span style={{ color: "var(--cyn-accent)", opacity: 0.5 }}>&#x2726;</span>
                </React.Fragment>
            ))}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Stagger variants                                                  */
/* ------------------------------------------------------------------ */
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

/* ------------------------------------------------------------------ */
/*  Footer heading                                                    */
/* ------------------------------------------------------------------ */
const footerHeading: Record<string, string> = {
    es: "Empecemos a\nconstruir.",
    en: "Let's start\nbuilding.",
};

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */
export default function Footer() {
    const { copy, locale } = useI18n();
    const wrapperRef = useRef<HTMLDivElement>(null);

    const primaryLinks = copy.footer.links.filter((l) => l.type === "link");
    const legalLinks = copy.footer.links.filter((l) => l.type === "legal");

    const marqueeItems = locale === "es"
        ? ["Automatizacion con IA", "Resultados reales", "Conversion garantizada", "Soporte 24/7", "Sin contratos largos"]
        : ["AI Automation", "Real Results", "Guaranteed Conversion", "24/7 Support", "No Long Contracts"];

    const isInView = useInView(wrapperRef, { once: true, amount: 0.3 });

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const channelLinks = [
        { key: "whatsapp", label: "WhatsApp", href: buildWhatsappLink(copy.footer.whatsappText), external: true },
        { key: "instagram", label: "Instagram", href: instagramUrl, external: true },
        { key: "email", label: locale === "es" ? "Correo" : "Email", href: `mailto:${contactEmail}`, external: false },
        { key: "phone", label: locale === "es" ? "Llamar" : "Call", href: `tel:${contactPhone.replace(/\s+/g, "")}`, external: false },
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: FOOTER_STYLES }} />

            <div
                ref={wrapperRef}
                className="relative w-full h-[75svh] md:h-screen"
                style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)", background: "var(--cyn-black)" }}
            >
                <footer
                    className="fixed bottom-0 left-0 w-full overflow-hidden text-[var(--cyn-white)] h-[75svh] md:h-screen"
                    style={{ background: "var(--cyn-black)" }}
                >
                    {/* Ambient layers */}
                    <div className="cyn-footer-aurora absolute left-1/2 top-1/2 h-[55vh] w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[80px] pointer-events-none z-0" />
                    <div className="cyn-footer-grid absolute inset-0 z-0 pointer-events-none" />

                    {/* Giant parallax watermark — centered */}
                    <motion.div
                        className="cyn-footer-giant-text absolute inset-x-0 bottom-0 text-center z-0 pointer-events-none select-none"
                        initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
                        animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    >
                        CYNOCTA
                    </motion.div>

                    {/* Vertical stack */}
                    <div className="relative z-10 flex flex-col h-full">

                        {/* Marquee */}
                        <div
                            className="w-full overflow-hidden py-2.5 md:py-3 shrink-0"
                            style={{
                                borderBottom: "1px solid rgba(25,245,156,.08)",
                                background: "rgba(7,8,9,.6)",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <div
                                className="flex w-max cyn-footer-marquee-track text-[10px] md:text-xs font-bold tracking-[.25em] uppercase"
                                style={{ color: "var(--cyn-muted-2)" }}
                            >
                                <MarqueeContent items={marqueeItems} />
                                <MarqueeContent items={marqueeItems} />
                            </div>
                        </div>

                        {/* Center content */}
                        <motion.div
                            className="flex-1 flex flex-col items-center justify-center px-5 md:px-8 py-6 md:py-10 w-full max-w-5xl self-center gap-4 md:gap-6"
                            variants={containerVariants}
                            animate={isInView ? "visible" : "hidden"}
                            initial="hidden"
                        >
                            {/* Logo */}
                            <motion.div variants={itemVariants}>
                                <MagPill
                                    as={Link}
                                    href="#inicio"
                                    className="cyn-logo inline-flex"
                                    aria-label={copy.footer.backToTopLabel}
                                >
                                    <Image
                                        src="/logo.svg"
                                        alt={copy.logoAlt}
                                        className="cyn-logo-mark"
                                        width={1254}
                                        height={1254}
                                    />
                                    <span className="cyn-logo-text">C Y N O C T A</span>
                                </MagPill>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                variants={itemVariants}
                                className="text-[clamp(2rem,7vw,4.5rem)] font-black cyn-footer-heading-glow tracking-tighter text-center whitespace-pre-line leading-[1.05]"
                                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                            >
                                {footerHeading[locale] ?? footerHeading.es}
                            </motion.h2>

                            {/* Nav links */}
                            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2.5 md:gap-3">
                                {primaryLinks.map((link) => (
                                    <MagPill
                                        key={link.label}
                                        as={Link}
                                        href={link.href}
                                        className="cyn-footer-glass cyn-footer-nav-link"
                                    >
                                        {link.label}
                                    </MagPill>
                                ))}
                            </motion.div>

                            {/* Channel icon buttons */}
                            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
                                {channelLinks.map((ch) => (
                                    <MagPill
                                        key={ch.key}
                                        as="a"
                                        href={ch.href}
                                        {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        className="cyn-footer-glass cyn-footer-channel"
                                        aria-label={ch.label}
                                    >
                                        {channelIcons[ch.key]}
                                        <span className="cyn-footer-channel-label">{ch.label}</span>
                                    </MagPill>
                                ))}
                            </motion.div>

                            {/* Legal + toggle */}
                            <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-2">
                                {legalLinks.map((link) => (
                                    <MagPill
                                        key={link.label}
                                        as={Link}
                                        href={link.href}
                                        className="cyn-footer-glass cyn-footer-legal-link"
                                    >
                                        {link.label}
                                    </MagPill>
                                ))}
                                <div className="cyn-footer-glass rounded-full flex items-center">
                                    <LanguageToggle className="cyn-toggle--compact" />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Bottom bar */}
                        <div
                            className="w-full shrink-0 px-5 md:px-10 pb-4 md:pb-6 pt-2 flex items-center gap-3"
                            style={{ borderTop: "1px solid rgba(255,255,255,.04)" }}
                        >
                            <p
                                className="text-[9px] md:text-[11px] font-semibold tracking-widest uppercase flex-1 min-w-0"
                                style={{ color: "var(--cyn-muted-2)", fontFamily: "var(--font-mono), Consolas, monospace" }}
                            >
                                {copy.footer.copy}
                            </p>

                            <div className="hidden md:flex cyn-footer-glass px-4 py-2 rounded-full items-center gap-1.5 cursor-default shrink-0">
                                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--cyn-muted-2)" }}>
                                    Crafted with
                                </span>
                                <span
                                    className="text-sm leading-none"
                                    style={{ animation: "cyn-footer-heartbeat 2s cubic-bezier(.25,1,.5,1) infinite", color: "var(--cyn-accent)" }}
                                >
                                    &#x2764;
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--cyn-muted-2)" }}>
                                    by
                                </span>
                                <span
                                    className="font-black text-xs tracking-normal ml-0.5"
                                    style={{
                                        background: "linear-gradient(90deg, var(--cyn-cyan), var(--cyn-mint), var(--cyn-accent))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Cynocta
                                </span>
                            </div>

                            <MagPill
                                as="button"
                                onClick={scrollToTop}
                                className="w-9 h-9 md:w-10 md:h-10 rounded-full cyn-footer-glass flex items-center justify-center group shrink-0"
                                style={{ color: "var(--cyn-muted)" } as MotionStyle}
                            >
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </MagPill>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
