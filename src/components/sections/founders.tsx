import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { founders, foundersSection } from "@/lib/content/founders";
import s from "./founders.module.css";

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.4V21H3.3V8.9Zm5.6 0h3.25v1.65h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.25 4.06 5.18V21h-3.4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H8.9V8.9Z" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
);

/**
 * Founder cards.
 *
 * Photographs do not exist yet, so the avatar slot renders a monogram plate and
 * says so. Shipping an obvious placeholder beats a stock silhouette, which
 * would read as a real person who isn't.
 */
export default function FoundersSection() {
    return (
        <Section id="fundadores" tone="accent" rhythm="roomy">
            <SectionHeader
                eyebrow={foundersSection.eyebrow}
                title={foundersSection.title}
                intro={foundersSection.intro}
            />

            <div className={s.grid}>
                {founders.map((founder, i) => (
                    <Reveal key={founder.name} delay={i * 90}>
                        <article className={s.card}>
                            <div className={s.head}>
                                <div className={s.avatar}>
                                    {founder.photo ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={founder.photo}
                                            alt={founder.photoAlt ?? founder.name}
                                            className={s.photo}
                                        />
                                    ) : (
                                        <span className={s.initials} aria-hidden="true">
                                            {founder.initials}
                                        </span>
                                    )}
                                </div>
                                <div className={s.identity}>
                                    <h3 className={s.name}>{founder.name}</h3>
                                    <p className={s.role}>{founder.role}</p>
                                </div>
                            </div>

                            <p className={s.bio}>{founder.bio}</p>

                            <div className={s.foot}>
                                {!founder.photo && (
                                    <span className={s.pending}>
                                        {foundersSection.photoPendingLabel}
                                    </span>
                                )}

                                {(founder.linkedin || founder.github) && (
                                    <div className={s.socials}>
                                        {founder.linkedin && (
                                            <a
                                                href={founder.linkedin}
                                                className={s.social}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`LinkedIn de ${founder.name}`}
                                            >
                                                <LinkedInIcon />
                                            </a>
                                        )}
                                        {founder.github && (
                                            <a
                                                href={founder.github}
                                                className={s.social}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`GitHub de ${founder.name}`}
                                            >
                                                <GitHubIcon />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
