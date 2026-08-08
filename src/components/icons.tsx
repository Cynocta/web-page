type ServiceKind = "web" | "chat" | "ops" | "kpi" | "code" | "api" | "flow" | "advisory";

export function ServiceIcon({ kind }: { kind: ServiceKind }) {
    if (kind === "code") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="8 6 3 12 8 18" />
                <polyline points="16 6 21 12 16 18" />
                <line x1="13.5" y1="4" x2="10.5" y2="20" />
            </svg>
        );
    }

    if (kind === "api") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2.5" y="8.5" width="7" height="7" rx="1.5" />
                <rect x="14.5" y="8.5" width="7" height="7" rx="1.5" />
                <path d="M9.5 12h5" />
                <path d="M12 12v-5" />
                <circle cx="12" cy="5.5" r="1.5" />
            </svg>
        );
    }

    if (kind === "flow") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="5" cy="6" r="2.5" />
                <circle cx="19" cy="12" r="2.5" />
                <circle cx="5" cy="18" r="2.5" />
                <path d="M7.5 6h4.5a2 2 0 0 1 2 2v2" />
                <path d="M7.5 18h4.5a2 2 0 0 0 2-2v-2" />
            </svg>
        );
    }

    if (kind === "advisory") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v2" />
                <path d="M9 20h6" />
                <path d="M10 17h4v-1.5a4.5 4.5 0 1 0-4 0Z" />
            </svg>
        );
    }

    if (kind === "web") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="14" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        );
    }

    if (kind === "chat") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        );
    }

    if (kind === "ops") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 0-14.14 0M21 12a9 9 0 0 1-9 9M3 12a9 9 0 0 1 9-9" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    );
}

export function WhatsAppIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.55"
                d="M12 4.25c-4.28 0-7.75 3.15-7.75 7.05 0 1.4.46 2.71 1.25 3.82L5 20l4.14-.94c.88.3 1.85.46 2.86.46 4.28 0 7.75-3.15 7.75-7.05s-3.47-7.05-7.75-7.05Z"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.55"
                d="M9.3 8.45c.34-.34.9-.34 1.24 0l.9.9c.24.24.29.61.11.92l-.34.58c-.12.21-.1.47.05.66.45.57.95 1.07 1.52 1.52.19.15.45.17.66.05l.58-.34c.31-.18.68-.13.92.11l.9.9c.34.34.34.9 0 1.24l-.42.42c-.34.34-.84.47-1.32.35-1.2-.3-2.42-1.04-3.53-2.15s-1.85-2.33-2.15-3.53c-.12-.48.01-.98.35-1.32l.42-.42Z"
            />
        </svg>
    );
}

export function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="4.25" />
            <circle cx="17.35" cy="6.65" r="1.05" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
            <path d="M4.5 7.25 12 12.75l7.5-5.5" />
            <path d="M4.5 17.25 9.85 13.3" />
            <path d="M19.5 17.25 14.15 13.3" />
        </svg>
    );
}
