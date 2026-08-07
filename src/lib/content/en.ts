import type { Content } from "./types";

export const en: Content = {
    logoAlt: "Cynocta logo",
    navItems: [
        { label: "The problem", href: "/en#problema" },
        { label: "Services", href: "/en#servicios" },
        { label: "Results", href: "/en#resultados" },
        { label: "Plans", href: "/en#planes" },
        { label: "FAQ", href: "/en/faq" },
    ],
    navCta: "Schedule a call",
    navCtaHref: "/en#formulario",
    navMenuLabel: "Menu",
    navCloseLabel: "Close",
    navMenuAriaLabel: "Open menu",
    hero: {
        eyebrow: "AI automation for growing businesses",
        title: {
            line1Em: "Automate",
            line1Text: " your business and",
            line2Text: "stop losing ",
            line2Em: "customers",
        },
        subtitle:
            "We implement automation, AI, and web systems that capture clients, respond 24/7, and scale your operation effortlessly.",
        primaryCta: "Schedule a free diagnosis",
        secondaryCta: "See real cases",
        stats: [
            { prefix: "+", value: "52", label: "Businesses automated" },
            { prefix: "<", value: "5s", label: "First response" },
            { prefix: "+", value: "34%", label: "Conversion lift" },
        ],
        visual: {
            kicker: "System online",
            title: "AI sales dashboard",
            pill: "+32% this month",
            liveFunnel: "Live funnel",
            updated: "Updated 12 min ago",
            inquiries: "Inquiries",
            replies: "Replies",
            appointments: "Appointments",
            chatTitle: "Chatbot 24/7",
            chatUser: "I need to reply to inquiries faster.",
            chatBot: "Done. I'll show you the flow and schedule a call.",
            responseLabel: "Avg response",
            flow: ["Ads", "AI", "Schedule", "Sale"],
        },
        aria: {
            stats: "Key benefits",
            visual: "Automation demo",
            flow: "Automation flow",
        },
    },
    pains: {
        tag: "The problem",
        title: "If your business is growing but sales keep slipping away... it's not your imagination.",
        intro:
            "Most businesses that come to us don't have a product problem. They have a system problem: they sell well, but they lose customers through the cracks nobody is watching. Do any of these sound familiar?",
        items: [
            {
                num: "01",
                title: "You reply late and the customer already bought from someone else.",
                description:
                    "They message at 9pm, you answer the next day, and by then they're gone with whoever replied first.",
            },
            {
                num: "02",
                title: "Messages pile up and you answer when you can.",
                description:
                    "Between running the business and replying to chats, someone is always waiting and some never come back.",
            },
            {
                num: "03",
                title: "Everything runs through you.",
                description:
                    "If you're not there, nobody replies, nothing gets booked, nothing gets sold. The business depends on you being constantly present.",
            },
            {
                num: "04",
                title: "You spend on ads but the leads go cold.",
                description:
                    "Interested people come in, but nobody qualifies or follows up on them, and the ad budget dissolves.",
            },
            {
                num: "05",
                title: "Your website looks good but generates nothing.",
                description:
                    "It's a pretty business card, not a tool that brings in customers.",
            },
        ],
        closing:
            "None of these problems get fixed by working more hours. They get fixed with a system that works when you can't.",
        aria: {
            carousel: "Carousel of common problems",
            prev: "Previous problem",
            next: "Next problem",
            goTo: "Go to problem",
        },
    },
    cost: {
        tag: "The cost",
        title: "Every unanswered message is a sale someone else closed.",
        body:
            "It's not just a lost chat. It's the customer who was going to buy, the one who was going to book, the one who was going to refer you. A business that replies in under 5 minutes multiplies its close rate against one that replies in hours. The difference isn't charging more or advertising more: it's not dropping the person who already came looking for you.",
    },
    services: {
        tag: "Solutions",
        title: "We don't sell tools.\nWe close the cracks your customers slip through.",
        items: [
            {
                title: "Websites that convert",
                description:
                    "Landing pages and sites with real commercial structure, designed to generate leads and close.",
                tags: ["Design", "Copy", "Conversion"],
                kind: "web",
            },
            {
                title: "Conversation automation",
                description:
                    "Flows for WhatsApp and other channels that qualify leads, respond fast, and route automatically.",
                tags: ["WhatsApp", "Qualification", "Follow-up"],
                kind: "chat",
            },
            {
                title: "Centralized operations",
                description:
                    "We connect tools and processes so everything works in a coherent, actionable system.",
                tags: ["CRM", "Integration", "Flows"],
                kind: "ops",
            },
            {
                title: "Actionable reporting",
                description:
                    "Conversion panels, stage funnels, and metrics to optimize where it matters most.",
                tags: ["Dashboard", "Funnel", "KPIs"],
                kind: "kpi",
            },
        ],
        moreLink: null,
    },
    process: {
        tag: "Methodology",
        title: "Four steps.\nResults from the first week.",
        steps: [
            {
                num: "01",
                title: "Diagnosis",
                description:
                    "We identify bottlenecks in capture, response, and follow-up in an express session.",
            },
            {
                num: "02",
                title: "Phased proposal",
                description:
                    "A realistic plan with quick deliverables so you see results from day one.",
            },
            {
                num: "03",
                title: "Guided implementation",
                description:
                    "We build web, automations, and integrations focused on operational simplicity.",
            },
            {
                num: "04",
                title: "Continuous optimization",
                description:
                    "We measure conversion and tune messages, flows, and offers to scale results.",
            },
        ],
    },
    plans: {
        tag: "Plans",
        title: "Reference prices,\ntailored proposals.",
        subtitle:
            "These figures show you the starting point of each level. The exact number depends on your business and how far you want to take the system, which is why we'd rather listen before quoting.",
        note: "No long contracts. Implementation in days, not months.",
        cta: "I want to fix this",
        labels: {
            from: "From",
            oneTimeProject: "One-time project",
            perMonth: "/mo",
            subscription: "subscription",
        },
        currencyLabel: "Currency",
        previewLabel: "Plan summary",
        detailsShow: "View details",
        detailsHide: "Hide details",
        items: [
            {
                plan: "PLAN 1",
                title: "Professional presence",
                description: "For businesses that still lack a digital presence",
                uniquePaymentUSD: 750,
                delivery: "Delivery in 2 weeks",
                monthlySubscriptionUSD: null,
                customPrice: null,
                customPriceNote: null,
                priceNote: "Reference price. The final figure depends on the scope of your site.",
                disclaimer: null,
                badge: null,
                featured: false,
                features: [
                    { label: "Sales-ready professional website", active: true },
                    { label: "Form + WhatsApp CTA", active: true },
                    { label: "Optimized commercial copy", active: true },
                    { label: "Responsive and fast", active: true },
                    { label: "Automations", active: false },
                    { label: "CRM and reports", active: false },
                ],
                guaranteeTitle: "Our commitment",
                guaranteeText:
                    "Your website live and running in 2 weeks. If you need tweaks, we fix them quickly.",
            },
            {
                plan: "PLAN 2",
                title: "Automatic sales",
                description: "For businesses losing sales by not replying in time",
                uniquePaymentUSD: 1500,
                delivery: null,
                monthlySubscriptionUSD: 150,
                customPrice: null,
                customPriceNote: null,
                priceNote: "Reference price based on the level of automation you need.",
                disclaimer:
                    "If your business needs bulk messaging or a verified WhatsApp number, the official API cost (~$50–$75 USD/mo) applies. If you only need to reply to chats, it doesn't.",
                badge: "MOST REQUESTED",
                featured: true,
                features: [
                    { label: "Everything in plan 1", active: true },
                    { label: "WhatsApp bot responding 24/7", active: true },
                    { label: "Personalized auto replies", active: true },
                    { label: "Dedicated VPS - guaranteed stability", active: true },
                    { label: "Direct WhatsApp support", active: true },
                    { label: "1 monthly bot adjustment included", active: true },
                ],
                guaranteeTitle: "Our commitment",
                guaranteeText:
                    "Your bot replies to customers in under 3 minutes, every day. If you need anything, we reply within 3 hours on WhatsApp.",
            },
            {
                plan: "PLAN 3",
                title: "Smart scale",
                description: "To scale sales with processes, data, and follow-up",
                uniquePaymentUSD: null,
                delivery: null,
                monthlySubscriptionUSD: null,
                customPrice: "Custom project",
                customPriceNote: "Personalized quote based on your operation",
                priceNote: "Every business at this level is different. We define it with you.",
                disclaimer:
                    "If your business needs bulk messaging or a verified WhatsApp number, the official API cost (~$50–$75 USD/mo) applies. If you only need to reply to chats, it doesn't.",
                badge: null,
                featured: false,
                features: [
                    { label: "Everything in plan 2", active: true },
                    { label: "CRM for client follow-up", active: true },
                    { label: "Monthly conversion report", active: true },
                    { label: "Advanced automations", active: true },
                    { label: "Monthly 1:1 strategy call", active: true },
                    { label: "Premium VPS + automatic backups", active: true },
                ],
                guaranteeTitle: "Our commitment",
                guaranteeText:
                    "Each month we show in numbers how your system is bringing more clients. We do not just deliver tech, we track your results.",
            },
        ],
    },
    form: {
        tag: "Let's talk",
        title: "Tell us what's slipping away.",
        subtitle:
            "This isn't a generic quote. We want to understand your case so we can tell you honestly whether we can help, and how.",
        questions: [
            {
                id: "business",
                label: "What kind of business do you run?",
                hint: "E.g. dental clinic, real estate, online store, school...",
                kind: "text",
                placeholder: "Type your business type",
            },
            {
                id: "pain",
                label: "What's costing you the most right now?",
                kind: "choice",
                options: [
                    { value: "respuesta", label: "I lose customers because I don't reply in time" },
                    { value: "volumen", label: "I get too many messages and can't keep up" },
                    { value: "dependencia", label: "The whole business depends on me" },
                    { value: "leads", label: "I spend on ads but the leads go cold" },
                    { value: "web", label: "My website doesn't bring me customers" },
                ],
            },
            {
                id: "volume",
                label: "Roughly how many messages or inquiries do you get per month?",
                kind: "choice",
                options: [
                    { value: "<50", label: "Fewer than 50" },
                    { value: "50-200", label: "Between 50 and 200" },
                    { value: "200-500", label: "Between 200 and 500" },
                    { value: ">500", label: "More than 500" },
                ],
            },
            {
                id: "age",
                label: "How long have you been dealing with this?",
                kind: "choice",
                options: [
                    { value: "reciente", label: "Just getting started" },
                    { value: "meses", label: "A few months" },
                    { value: "anio", label: "More than a year" },
                ],
            },
        ],
        submit: "I want to fix this",
        submitHint: "We'll open WhatsApp with your answers ready to send.",
        requiredHint: "Answer this question to continue.",
        next: "Next",
        back: "Back",
        stepOf: "Question {current} of {total}",
        messageIntro: "Hi, I want to fix what's slipping away.",
    },
    results: {
        tag: "Real results",
        title: "What the numbers say.",
        items: [
            {
                context: "Local dental clinic",
                metric: "+43%",
                metricLabel: "more appointments closed in 30 days",
                summary:
                    "They moved from manual scheduling to an automated WhatsApp flow with confirmations and reminders.",
            },
            {
                context: "Real estate agency",
                metric: "2x",
                metricLabel: "more visits scheduled in 21 days",
                summary:
                    "They automated first contact and prospect pre-qualification to schedule visits without friction.",
            },
            {
                context: "Online language school",
                metric: "<2min",
                metricLabel: "time to first response",
                summary:
                    "Their inquiry-to-enrollment conversion rose after automating the first response.",
            },
        ],
    },
    contact: {
        tag: "Next step",
        title: "If your business has grown,",
        titleEmphasis: "your system must grow too.",
        whatsappText: "Hi, I want my free diagnosis",
        iconsLabel: "Contact channels",
        labels: {
            whatsapp: "Open Cynocta WhatsApp",
            instagram: "Open Cynocta Instagram",
            email: "Send email to Cynocta",
            whatsappTitle: "WhatsApp",
            instagramTitle: "Instagram",
            emailTitle: "Email",
        },
    },
    footer: {
        copy: "(c) 2026 Cynocta - Precision automation",
        backToTopLabel: "Back to top",
        whatsappText: "Hi, I'd like to contact Cynocta",
        marquee: [
            "AI Automation",
            "Real Results",
            "Guaranteed Conversion",
            "24/7 Support",
            "No Long Contracts",
        ],
        channelLabels: {
            whatsapp: "WhatsApp",
            instagram: "Instagram",
            email: "Email",
            phone: "Call",
        },
        links: [
            { label: "Services", href: "/en#servicios", type: "link" },
            { label: "Process", href: "/en#proceso", type: "link" },
            { label: "Plans", href: "/en#planes", type: "link" },
            { label: "FAQ", href: "/en/faq", type: "link" },
            { label: "Terms and conditions", href: "/terminos", type: "legal" },
            { label: "Privacy policy", href: "/privacidad", type: "legal" },
            { label: "WhatsApp", href: "whatsapp", type: "whatsapp" },
            { label: "Instagram", href: "instagram", type: "external" },
            { label: "Email", href: "email", type: "mailto" },
            { label: "Call", href: "phone", type: "tel" },
        ],
    },
    languageToggleLabel: "Language",
};
