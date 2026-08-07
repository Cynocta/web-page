export type Locale = "es" | "en";
export type Currency = "COP" | "USD" | "EUR";

export type NavItem = { label: string; href: string };

export type Service = {
    title: string;
    description: string;
    tags: string[];
    kind: "web" | "chat" | "ops" | "kpi";
};

export type ProcessStep = {
    num: string;
    title: string;
    description: string;
};

export type Plan = {
    plan: string;
    title: string;
    description: string;
    /** Reference floor price, in USD. `null` when the plan is quoted case by case. */
    uniquePaymentUSD: number | null;
    delivery: string | null;
    /** Reference monthly subscription, in USD. Kept visually separate from the setup fee. */
    monthlySubscriptionUSD: number | null;
    /** Replaces the number when the plan has no public price (plan 3). */
    customPrice: string | null;
    customPriceNote: string | null;
    /** Italic line under the price block that frames it as orientative. */
    priceNote: string;
    disclaimer?: string | null;
    badge: string | null;
    featured: boolean;
    features: Array<{ label: string; active: boolean }>;
    guaranteeTitle: string;
    guaranteeText: string;
};

export type Pain = {
    /** Short label shown on the carousel card, e.g. "01". */
    num: string;
    title: string;
    description: string;
};

export type FormOption = { value: string; label: string };

export type FormQuestion = {
    id: "business" | "pain" | "volume" | "age";
    label: string;
    hint?: string;
    kind: "text" | "choice";
    placeholder?: string;
    options?: FormOption[];
};

export type Result = {
    context: string;
    metric: string;
    metricLabel: string;
    summary: string;
};

export type HeroStat = {
    prefix: string;
    value: string;
    label: string;
};

export type Content = {
    logoAlt: string;
    navItems: NavItem[];
    navCta: string;
    navMenuLabel: string;
    navCloseLabel: string;
    navMenuAriaLabel: string;
    hero: {
        eyebrow: string;
        title: {
            line1Em: string;
            line1Text: string;
            line2Text: string;
            line2Em: string;
        };
        subtitle: string;
        primaryCta: string;
        secondaryCta: string;
        stats: HeroStat[];
        visual: {
            kicker: string;
            title: string;
            pill: string;
            liveFunnel: string;
            updated: string;
            inquiries: string;
            replies: string;
            appointments: string;
            chatTitle: string;
            chatUser: string;
            chatBot: string;
            responseLabel: string;
            flow: string[];
        };
        aria: {
            stats: string;
            visual: string;
            flow: string;
        };
    };
    pains: {
        tag: string;
        title: string;
        intro: string;
        items: Pain[];
        closing: string;
        aria: {
            carousel: string;
            prev: string;
            next: string;
            goTo: string;
        };
    };
    cost: {
        tag: string;
        title: string;
        body: string;
    };
    services: {
        tag: string;
        title: string;
        items: Service[];
    };
    process: {
        tag: string;
        title: string;
        steps: ProcessStep[];
    };
    plans: {
        tag: string;
        title: string;
        subtitle: string;
        note: string;
        cta: string;
        labels: {
            /** "Desde" / "From" — every number is framed as a floor, never a closed quote. */
            from: string;
            oneTimeProject: string;
            perMonth: string;
            subscription: string;
        };
        currencyLabel: string;
        previewLabel: string;
        detailsShow: string;
        detailsHide: string;
        items: Plan[];
    };
    form: {
        tag: string;
        title: string;
        subtitle: string;
        questions: FormQuestion[];
        submit: string;
        submitHint: string;
        requiredHint: string;
        next: string;
        back: string;
        /** Step counter template; `{current}` and `{total}` are substituted. */
        stepOf: string;
        /** Prefix of the WhatsApp message built from the answers. */
        messageIntro: string;
    };
    results: {
        tag: string;
        title: string;
        items: Result[];
    };
    contact: {
        tag: string;
        title: string;
        titleEmphasis: string;
        whatsappText: string;
        iconsLabel: string;
        labels: {
            whatsapp: string;
            instagram: string;
            email: string;
            whatsappTitle: string;
            instagramTitle: string;
            emailTitle: string;
        };
    };
    footer: {
        copy: string;
        backToTopLabel: string;
        whatsappText: string;
        /** Scrolling strip above the footer. */
        marquee: string[];
        /** Labels for the contact channel row; the hrefs come from site-data. */
        channelLabels: {
            whatsapp: string;
            instagram: string;
            email: string;
            phone: string;
        };
        links: Array<{ label: string; href: string; type?: "link" | "legal" | "whatsapp" | "external" | "mailto" | "tel" }>;
    };
    languageToggleLabel: string;
};
