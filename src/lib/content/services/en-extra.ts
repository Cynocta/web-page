import type { ServiceDetail } from "./types";

/** English service copy, second batch. Merged with `en.ts` in the registry. */
export const servicesEnExtra: Record<string, ServiceDetail> = {
    "software-a-medida": {
        slug: "software-a-medida",
        navLabel: "Custom software",
        cardTitle: "Custom software",
        cardSummary:
            "When no tool on the market fits the way your business works.",
        icon: "code",
        metaTitle: "Custom software development for businesses",
        metaDescription:
            "Internal apps, customer portals and operations tools built around your real process, not around a generic product's.",
        eyebrow: "Service",
        heading: "Software that adapts to your process, not the other way round.",
        intro:
            "There comes a point where the shared spreadsheet stops coping and no SaaS fits without forcing you to change how you work. That's when building makes sense: a tool that does exactly what you do, without the ninety features you'd never use.",
        facts: [
            { value: "4–10 weeks", label: "First version" },
            { value: "Custom project", label: "Scope" },
            { value: "Your code", label: "Ownership" },
        ],
        problem: {
            title: "Why it matters",
            body: "Bending the business to fit generic software has a cost that never shows up on the invoice: processes twisted to fit the product, data in three places and people acting as the bridge between tools. Building custom is only justified when that cost is already higher than the development.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "Discovery before writing code",
                    description:
                        "We map the real process, not the documented one. They almost always differ, and that's where the value is.",
                },
                {
                    title: "A first version with the smallest useful scope",
                    description:
                        "The least product that already works for you in production. It grows with real use, not assumptions.",
                },
                {
                    title: "An interface built for daily users",
                    description:
                        "If your team will have it open eight hours a day, speed and shortcuts matter more than looks.",
                },
                {
                    title: "Authentication and access control",
                    description:
                        "Who sees what and who can change what, defined from the start and not patched later.",
                },
                {
                    title: "Code, repository and deployment in your name",
                    description:
                        "Everything stays on your infrastructure. You can change providers without renegotiating anything.",
                },
                {
                    title: "Technical documentation",
                    description:
                        "Architecture, decisions and how to run it, so another team can pick it up.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Discovery",
                    description:
                        "Sessions with the people who do the work today. We come out with the process mapped and the minimum scope agreed.",
                },
                {
                    num: "02",
                    title: "Clickable prototype",
                    description:
                        "You see and use the interface before the logic exists. Fixing things here costs hours, not weeks.",
                },
                {
                    num: "03",
                    title: "Build module by module",
                    description:
                        "Each module goes live and gets used before the next one starts.",
                },
                {
                    num: "04",
                    title: "Handover",
                    description:
                        "Access, documentation and team training, with agreed support while things settle.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "Technologies with large communities and open documentation, so finding another developer never becomes your problem.",
            tools: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Docker", "Vercel"],
        },
        faq: [
            {
                id: "cuando-a-medida",
                question: "When is custom worth it, and when is a SaaS better?",
                answer:
                    "If a product covers 80% of what you need, buy it: it's cheaper and already proven. Custom is justified when your process is your competitive advantage, when no product fits without bending it, or when per-user licences already cost more than building.",
            },
            {
                id: "quien-lo-mantiene",
                question: "Who maintains it afterwards?",
                answer:
                    "You can, we can under a support agreement, or another team can. That's why the code, repository and documentation are in your name from day one and we use standard technologies: we don't want you depending on us for lack of alternatives.",
            },
            {
                id: "cuanto-tarda",
                question: "How long does a first version take?",
                answer:
                    "Between four and ten weeks depending on scope. We work in modules, so you start using the first part before the project ends. A longer timeline usually means the initial scope is too ambitious.",
            },
        ],
        related: ["automatizacion-de-procesos", "integraciones-api", "dashboards"],
    },

    "integraciones-api": {
        slug: "integraciones-api",
        navLabel: "API integrations",
        cardTitle: "API integrations",
        cardSummary:
            "Your tools talking to each other, with real error handling.",
        icon: "api",
        metaTitle: "System and API integration for businesses",
        metaDescription:
            "We connect your tools through their APIs with retries, alerts and traceability. No fragile scripts that fail silently.",
        eyebrow: "Service",
        heading: "Two systems that don't talk cost you a person.",
        intro:
            "When information has to move from one tool to another and there's no bridge, someone becomes the bridge. That person copies, pastes and occasionally gets it wrong. We build the bridge so nobody has to.",
        facts: [
            { value: "1–3 weeks", label: "Per integration" },
            { value: "From USD 750", label: "Project" },
            { value: "With retries", label: "Fault tolerance" },
        ],
        problem: {
            title: "Why it matters",
            body: "Fragile integrations are worse than none: they inspire confidence until the day they fail without warning and you find the mismatch a week later. The difference between a script and a serious integration is what happens when something goes wrong.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "Data mapping between systems",
                    description:
                        "Which field here matches which one there, what gets transformed and what to do with what doesn't fit.",
                },
                {
                    title: "Explicit error handling",
                    description:
                        "Retries with backoff, a queue for failed items and an alert when something needs human attention.",
                },
                {
                    title: "Idempotency",
                    description:
                        "Retrying never duplicates records. It sounds obvious, and it's where most home-made integrations fail.",
                },
                {
                    title: "A log of every run",
                    description:
                        "What came in, what went out and when. Without it, debugging a data mismatch is guesswork.",
                },
                {
                    title: "Credential management",
                    description:
                        "Tokens and secrets kept out of the code, rotatable without redeploying.",
                },
                {
                    title: "Documented contract",
                    description:
                        "What triggers the integration, how often it runs and what limits the API on the other side has.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "API review",
                    description:
                        "What each system allows, what rate limits it has and whether there are webhooks or it has to be polled.",
                },
                {
                    num: "02",
                    title: "Data flow design",
                    description:
                        "Direction, frequency, which side wins in a conflict and what counts as a recoverable error.",
                },
                {
                    num: "03",
                    title: "Build and test",
                    description:
                        "Tested against real data in a separate environment before touching production.",
                },
                {
                    num: "04",
                    title: "Monitoring",
                    description:
                        "Alerts if it stops running or the error rate climbs. An integration without monitoring is a time bomb.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "n8n when the flow benefits from being visible and editable; our own code when the logic doesn't fit in a node.",
            tools: ["n8n", "Node.js", "TypeScript", "REST", "GraphQL", "Webhooks", "PostgreSQL", "Docker"],
        },
        faq: [
            {
                id: "sistema-sin-api",
                question: "What if my system has no API?",
                answer:
                    "We look at it case by case. Sometimes there's a scheduled export, an accessible database or an undocumented integration module. When there's no reasonable route, we say so: automating against an interface that wasn't designed for it breaks with every update.",
            },
            {
                id: "limites-api",
                question: "What about API rate limits?",
                answer:
                    "They're designed for from the start. We batch requests, space out runs and use webhooks instead of polling in a loop when the system allows it. If your volume exceeds the provider's plan, we catch it before building.",
            },
        ],
        related: ["automatizaciones-n8n", "integracion-crm", "software-a-medida"],
    },

    "automatizaciones-n8n": {
        slug: "automatizaciones-n8n",
        navLabel: "n8n automation",
        cardTitle: "n8n automation",
        cardSummary:
            "Self-hosted workflows: you pay for the server, not for each run.",
        icon: "flow",
        metaTitle: "n8n implementation and consulting",
        metaDescription:
            "Self-hosted n8n setup, workflow design, custom nodes and migration from Zapier or Make. No per-execution costs.",
        eyebrow: "Service",
        heading: "n8n done right: no execution limits.",
        intro:
            "n8n is the engine behind most of our automations, and it's open source. That changes the economics: you pay for a server, not for every time a workflow runs. At volume, the difference against Zapier or Make stops being marginal.",
        facts: [
            { value: "1–2 weeks", label: "Setup" },
            { value: "From USD 6/month", label: "Server cost" },
            { value: "Unlimited", label: "Executions" },
        ],
        problem: {
            title: "Why it matters",
            body: "Per-execution platforms are comfortable until they work. When the automation succeeds and volume grows, the bill grows with it, right when it's giving you the most value. Self-hosting flips that curve: the cost flattens out.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "Installation on your server",
                    description:
                        "n8n with Docker, HTTPS, backups and controlled updates. On your infrastructure or on one we manage.",
                },
                {
                    title: "Workflow design",
                    description:
                        "Built to be readable: another developer should understand what each one does without asking us.",
                },
                {
                    title: "Custom nodes when needed",
                    description:
                        "If your system has no node, we write one. It's JavaScript, not proprietary magic.",
                },
                {
                    title: "Migration from Zapier or Make",
                    description:
                        "We rebuild what you already have and run both in parallel to verify before switching the old one off.",
                },
                {
                    title: "Separate environments",
                    description:
                        "Testing and production kept apart, so nobody debugs in the workflow your customers depend on.",
                },
                {
                    title: "Training for your team",
                    description:
                        "So they can adjust the simple things without calling us. The complex ones stay with us if you prefer.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Sizing",
                    description:
                        "How many executions a month, what peaks and which integrations. That's what sizes the server, not a standard plan.",
                },
                {
                    num: "02",
                    title: "Installation and security",
                    description:
                        "Deployment with HTTPS, access control, backups and monitoring before moving a single workflow.",
                },
                {
                    num: "03",
                    title: "Build or migration",
                    description:
                        "Workflow by workflow, checking results against the previous system when migrating.",
                },
                {
                    num: "04",
                    title: "Documented handover",
                    description:
                        "Each workflow with its description, its trigger and what to do if it fails.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "n8n as the engine, with the minimum around it to keep it stable and observable.",
            tools: ["n8n", "Docker", "PostgreSQL", "Traefik", "DigitalOcean", "Hetzner", "Node.js"],
        },
        faq: [
            {
                id: "n8n-vs-zapier",
                question: "When does n8n beat Zapier or Make?",
                answer:
                    "When volume grows or the logic gets complicated. With a few hundred runs a month and simple workflows, Zapier or Make are quicker to set up and need no server. From a few thousand, or if you need logic that doesn't fit a standard node, n8n comes out ahead.",
            },
            {
                id: "quien-mantiene-servidor",
                question: "Who maintains the server?",
                answer:
                    "Whichever you prefer. It can be in your name and managed by you, or included in a subscription plan where we handle monitoring, backups and updates. Either way, the instance and the workflows are yours.",
            },
            {
                id: "nube-de-n8n",
                question: "What about n8n Cloud?",
                answer:
                    "It's a valid option if you'd rather not run a server. It costs more per execution than self-hosting but removes the maintenance. We recommend it when volume is low and nobody on the team is technical.",
            },
        ],
        related: ["automatizacion-de-procesos", "integraciones-api", "agentes-ia"],
    },

    dashboards: {
        slug: "dashboards",
        navLabel: "Dashboards",
        cardTitle: "Dashboards and reports",
        cardSummary:
            "The numbers you decide with, in one place and updating on their own.",
        icon: "kpi",
        metaTitle: "Custom conversion dashboards and reports",
        metaDescription:
            "Dashboards on your real data: pipeline by stage, customer source and response times. Updated automatically, with no report built by hand.",
        eyebrow: "Service",
        heading: "Decide with data, not impressions.",
        intro:
            "Almost every business has the data. What it doesn't have is a place to look at it together. We build the dashboard that answers the three or four questions that actually drive your decisions, and leave it updating itself.",
        facts: [
            { value: "1–3 weeks", label: "Implementation" },
            { value: "From USD 750", label: "Project" },
            { value: "Automatic", label: "Updates" },
        ],
        problem: {
            title: "Why it matters",
            body: "A report someone builds by hand every month arrives late, costs hours and nobody fully trusts it. And a dashboard with forty metrics isn't better: it's as useless as none, because it doesn't say what to look at first.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "Defining the metrics that matter",
                    description:
                        "We start from the decisions you want to make. The metrics come from there, not the other way round.",
                },
                {
                    title: "Connected to your real sources",
                    description:
                        "CRM, WhatsApp, website, advertising and invoicing, unified with a single definition for each figure.",
                },
                {
                    title: "Pipeline by stage",
                    description:
                        "How many come in, where they drop and how long it takes to close. It's the view that changes the most decisions.",
                },
                {
                    title: "Customer source",
                    description:
                        "Which channel brings people who buy, not just people who arrive. Without it, optimising ads is throwing darts.",
                },
                {
                    title: "Automatic updates",
                    description:
                        "No exporting or pasting. The dashboard reflects what happened up to a few minutes ago.",
                },
                {
                    title: "Scheduled delivery",
                    description:
                        "The summary reaches your email or WhatsApp as often as you decide.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Questions session",
                    description:
                        "Which decisions you make every week and what you're missing to make them better.",
                },
                {
                    num: "02",
                    title: "Data audit",
                    description:
                        "What exists, where it lives and how reliable it is. Sometimes the first job is fixing how it's captured.",
                },
                {
                    num: "03",
                    title: "Dashboard build",
                    description:
                        "Starting with the main view. Secondary views are added once the first one is in use.",
                },
                {
                    num: "04",
                    title: "One-month review",
                    description:
                        "We adjust based on what you actually look at. Whatever nobody opens in a month is removed.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "Depending on where your data lives and who will read it. You don't always need a BI tool.",
            tools: ["Metabase", "Looker Studio", "PostgreSQL", "Supabase", "n8n", "Google Sheets", "Next.js"],
        },
        faq: [
            {
                id: "que-metricas",
                question: "Which metrics should I track?",
                answer:
                    "It depends on what you decide. For almost everyone: how many enquiries come in, how many are answered on time, how many convert and where they came from. Four well-defined numbers change more decisions than a dashboard with forty.",
            },
            {
                id: "datos-desordenados",
                question: "What if my data is messy?",
                answer:
                    "That's normal, and the audit catches it. Sometimes the first job isn't the dashboard but fixing how information is captured. We tell you before charging for a dashboard that would show unreliable data.",
            },
        ],
        related: ["integracion-crm", "integraciones-api", "consultoria-tecnologica"],
    },

    "consultoria-tecnologica": {
        slug: "consultoria-tecnologica",
        navLabel: "Technology consulting",
        cardTitle: "Technology consulting",
        cardSummary:
            "Deciding what to build, what to buy and what not to do yet.",
        icon: "advisory",
        metaTitle: "Technology consulting for businesses",
        metaDescription:
            "An independent review of your operation and your stack: what to automate first, what to buy, what to build and in what order to invest.",
        eyebrow: "Service",
        heading: "Sometimes the best recommendation is to build nothing.",
        intro:
            "Before investing in development, it's worth knowing whether you need it. We review your operation, your tools and your numbers, and come out with a prioritised plan: what to solve first, what to buy off the shelf, what to build and what to leave as it is.",
        facts: [
            { value: "1–2 weeks", label: "Diagnosis" },
            { value: "Written deliverable", label: "Outcome" },
            { value: "No obligation", label: "To hire us" },
        ],
        problem: {
            title: "Why it matters",
            body: "The expensive mistake is rarely picking the wrong tool: it's automating a process that needed redesigning, or building something that already existed for 20 dollars a month. An honest diagnosis costs a fraction of that, and sometimes concludes that you don't need us.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "A map of today's operation",
                    description:
                        "How a customer comes in, where they go and where things get stuck. With real times, not estimates.",
                },
                {
                    title: "Tool inventory",
                    description:
                        "What you pay for, what you actually use and what overlaps. Something that can be cancelled almost always turns up.",
                },
                {
                    title: "Prioritised by return",
                    description:
                        "What to solve first by hours freed or revenue recovered, weighed against implementation effort.",
                },
                {
                    title: "Build-or-buy recommendation",
                    description:
                        "With specific names and price ranges, including products we don't sell or implement.",
                },
                {
                    title: "A phased plan",
                    description:
                        "What to do this quarter, what next quarter, and which signals tell you it's time for the next step.",
                },
                {
                    title: "A written deliverable",
                    description:
                        "Everything in writing, and yours. You can carry it out with us, with your team or with another provider.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Sessions with the team",
                    description:
                        "We talk to the people who do the work, not just the ones who manage it. That's where the real bottlenecks show up.",
                },
                {
                    num: "02",
                    title: "Data and tools review",
                    description:
                        "Volumes, response times, conversion rates and what the company is paying for today.",
                },
                {
                    num: "03",
                    title: "Analysis and prioritisation",
                    description:
                        "We rank opportunities by return on effort, with the assumptions stated.",
                },
                {
                    num: "04",
                    title: "Delivery and walkthrough",
                    description:
                        "The document plus a session to discuss it. Your team's objections usually improve the plan.",
                },
            ],
        },
        stack: {
            title: "How we work",
            intro:
                "The deliverable is a document and a plan, not a demo. These are the areas we review.",
            tools: [
                "Process mapping",
                "Funnel analysis",
                "Stack audit",
                "Return estimate",
                "Data architecture",
                "Phased plan",
            ],
        },
        faq: [
            {
                id: "y-si-no-hace-falta",
                question: "What if you conclude I don't need anything?",
                answer:
                    "We tell you, and the diagnosis ends there. Sometimes the problem is the price or the offer, not the technology. Charging to implement something that wasn't going to move the needle is the quickest way to lose a referral.",
            },
            {
                id: "recomiendan-competencia",
                question: "Do you recommend tools you don't implement?",
                answer:
                    "Yes, and often. If a 30-dollar-a-month product solves 90% of your case, that's the recommendation. Our margin shouldn't decide your architecture.",
            },
            {
                id: "descuento",
                question: "Is the fee credited if I hire you afterwards?",
                answer:
                    "If you decide to implement with us within the following three months, the cost of the diagnosis is deducted from the project. The idea is that consulting shouldn't be a barrier to getting started.",
            },
        ],
        related: ["automatizacion-de-procesos", "dashboards", "software-a-medida"],
    },
};
