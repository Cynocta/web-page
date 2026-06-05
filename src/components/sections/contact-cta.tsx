"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useI18n } from "@/components/i18n-provider";
import s from "./contact-cta.module.css";

const containerV: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemV: Variants = {
    hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function ContactCtaSection() {
    const { copy, locale } = useI18n();
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className={s.section} id="contacto">
            <div className={s.aurora} />

            <motion.div
                className={s.inner}
                variants={containerV}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.p variants={itemV} className={s.tag}>
                    {copy.contact.tag}
                </motion.p>

                <motion.h2 variants={itemV} className={s.heading}>
                    {copy.contact.title}
                    <br />
                    <em>{copy.contact.titleEmphasis}</em>
                </motion.h2>

                <motion.p variants={itemV} className={s.sub}>
                    {locale === "es"
                        ? "Descubre como contactarnos abajo."
                        : "Find out how to reach us below."}
                </motion.p>

                <motion.div variants={itemV} className={s.scrollHint}>
                    <div className={s.scrollLine} />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--cyn-accent)", opacity: 0.5 }}>
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
