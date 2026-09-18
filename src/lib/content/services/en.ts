import type { ServiceDetail, ServicesHub } from "./types";

/**
 * English service copy, first batch. Written for the English page rather than
 * translated line by line; the structure, prices and commitments match the
 * Spanish pages exactly, because they describe the same service.
 */
export const servicesHubEn: ServicesHub = {
    metaTitle: "AI automation services for growing businesses",
    metaDescription:
        "Web development and custom software, process automation, AI agents, WhatsApp chatbots, integrations and technology consulting for businesses in Latin America.",
    eyebrow: "Services",
    heading: "Ten ways to stop losing customers.",
    intro:
        "Each service closes one specific gap where sales slip away or hours disappear. They can be hired on their own or combined: most projects start with one and grow from there.",
    listTitle: "What we build",
    ctaTitle: "Not sure where to start?",
    ctaBody:
        "Tell us what is slipping through and we will tell you honestly which service solves the most for the least, or whether your case isn't a fit for us.",
    ctaLabel: "Book a diagnosis",
};

export const servicesEn: Record<string, ServiceDetail> = {
    "chatbot-whatsapp": {
        slug: "chatbot-whatsapp",
        navLabel: "WhatsApp chatbot",
        cardTitle: "AI chatbot for WhatsApp",
        cardSummary:
            "Answers, qualifies and books 24/7 on the channel your customers already use to reach you.",
        icon: "chat",
        metaTitle: "AI WhatsApp chatbot for businesses",
        metaDescription:
            "We build WhatsApp bots that reply in seconds, qualify leads and book appointments. On Meta's official API or your own number, connected to your CRM.",
        eyebrow: "Service",
        heading: "A WhatsApp bot that answers like your best salesperson.",
        intro:
            "Across Latin America, a large share of sales happens on WhatsApp, and very few businesses reply on time. We build an AI assistant that answers in seconds, understands the question, qualifies the lead and books the appointment, without sounding like a robot or a numbered menu.",
        facts: [
            { value: "2–4 weeks", label: "Implementation" },
            { value: "From USD 1,500", label: "Project" },
            { value: "24/7", label: "Coverage" },
        ],
        problem: {
            title: "Why it matters",
            body: "A customer who writes at nine at night and gets a reply the next morning has already bought somewhere else. It isn't a matter of effort: nobody can be available all the time. The bot covers exactly the hours in which you lose sales today.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "A conversation flow designed for your business",
                    description:
                        "Not a generic template: we start from your real conversations to define what customers ask and what they need to know before buying.",
                },
                {
                    title: "Answers powered by a language model",
                    description:
                        "The bot reasons over your catalogue, prices and policies instead of following a decision tree. It handles questions you didn't anticipate.",
                },
                {
                    title: "Automatic lead qualification",
                    description:
                        "It tells apart who is ready to buy from who is just asking, and only passes you the ones worth your time.",
                },
                {
                    title: "Booking connected to your calendar",
                    description:
                        "It offers real time slots, confirms the appointment and sends reminders. No more back and forth to find a time.",
                },
                {
                    title: "Handoff to a person",
                    description:
                        "When it can't resolve something, it hands the conversation to your team with the context already collected.",
                },
                {
                    title: "Dedicated server and monitoring",
                    description:
                        "Its own VPS, so the bot doesn't depend on a shared service, with alerts if anything goes down.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Conversation review",
                    description:
                        "We go through your real chats to see what gets asked, where sales drop and what can be automated without losing the personal touch.",
                },
                {
                    num: "02",
                    title: "Flow design",
                    description:
                        "We define the tone, the conversation paths and the exact point where the bot hands over to a person.",
                },
                {
                    num: "03",
                    title: "Build and integration",
                    description:
                        "We build the bot, connect it to your calendar and CRM, and train it on your real information.",
                },
                {
                    num: "04",
                    title: "Testing and tuning",
                    description:
                        "We test it on real conversations before opening it up, and keep tuning it during the first weeks based on what happens.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "Industry-standard tools, not proprietary software that locks you in. If you want to take it elsewhere tomorrow, it's yours.",
            tools: ["WhatsApp Business Platform (Meta)", "n8n", "OpenAI", "Claude", "Twilio", "Google Calendar", "Supabase"],
        },
        faq: [
            {
                id: "api-oficial",
                question: "Do I need the official WhatsApp API?",
                answer:
                    "Only if you'll send bulk messages, use approved templates, serve customers from several agents or want a verified account. If you only reply to conversations the customer starts, from a single number, it can be built without the official API and without that extra monthly cost.",
            },
            {
                id: "se-nota-robot",
                question: "Will people notice it's a bot?",
                answer:
                    "It replies in natural language and in your tone, not with numbered menus. Even so, we recommend saying it's an assistant: it builds more trust than pretending, and customers accept it well when the answer is useful and immediate.",
            },
            {
                id: "que-pasa-si-falla",
                question: "What happens if the bot doesn't understand something?",
                answer:
                    "It hands over to a person with the conversation history already collected, instead of insisting or giving a wrong answer. That threshold is calibrated: it would rather pass to a human than risk a wrong answer about prices or availability.",
            },
        ],
        related: ["agentes-ia", "integracion-crm", "automatizaciones-n8n"],
    },

    "automatizacion-de-procesos": {
        slug: "automatizacion-de-procesos",
        navLabel: "Process automation",
        cardTitle: "Process automation",
        cardSummary:
            "We connect your tools so repetitive work stops going through a person.",
        icon: "ops",
        metaTitle: "Business process automation for SMBs",
        metaDescription:
            "We connect your tools with n8n and Make to remove repetitive manual work: lead follow-up, invoicing and moving data between systems.",
        eyebrow: "Service",
        heading: "Repetitive work doesn't need a person.",
        intro:
            "Copying data from one system to another, sending the same follow-up email, building the monthly report by hand. Those are hours spent on tasks an automation does without mistakes and without breaks.",
        facts: [
            { value: "1–3 weeks", label: "Per workflow" },
            { value: "From USD 750", label: "Project" },
            { value: "No proprietary code", label: "Portability" },
        ],
        problem: {
            title: "Why it matters",
            body: "The cost of a manual task isn't just the time: it depends on someone remembering. The follow-up that never happened, the data copied wrong, the report that arrived late. An automated workflow runs the same on Monday as on Friday at seven in the evening.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "Process map",
                    description:
                        "We identify which tasks repeat, how much time they take and which are worth automating first for their return.",
                },
                {
                    title: "Workflows built and documented",
                    description:
                        "Every automation is documented: what triggers it, what it does and what happens if it fails. Not a black box only we understand.",
                },
                {
                    title: "Your tools connected",
                    description:
                        "CRM, spreadsheets, invoicing, email, WhatsApp and calendar working as a single system.",
                },
                {
                    title: "Error handling",
                    description:
                        "Retries, alerts and a failure log. An automation that fails silently is worse than none at all.",
                },
                {
                    title: "Your own server",
                    description:
                        "Workflows run on your infrastructure, with no execution limits and no per-volume costs that grow on their own.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Task audit",
                    description:
                        "One session to list what's done by hand, how often and what it costs in real hours.",
                },
                {
                    num: "02",
                    title: "Prioritise by return",
                    description:
                        "We don't automate everything: we start with what frees the most time for the least complexity.",
                },
                {
                    num: "03",
                    title: "Build in stages",
                    description:
                        "One workflow at a time, live and working before moving on to the next.",
                },
                {
                    num: "04",
                    title: "Handover and monitoring",
                    description:
                        "We show you how to read and adjust what we built, and leave alerts in place so you know if something stops running.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "n8n as the main engine for a concrete reason: it's open source and self-hosted, so you don't pay per execution or get tied to a vendor.",
            tools: ["n8n", "Make", "Zapier", "Google Workspace", "Airtable", "Supabase", "Docker"],
        },
        faq: [
            {
                id: "n8n-vs-make",
                question: "Why n8n and not Make or Zapier?",
                answer:
                    "n8n is self-hosted: you pay for the server, not for each execution, which changes the maths a lot as volume grows. Make and Zapier are quicker to set up, and we use them when the case is simple or the client already works with them.",
            },
            {
                id: "que-se-puede-automatizar",
                question: "Which processes are worth automating?",
                answer:
                    "The ones that are repetitive, follow clear rules and happen often: lead follow-up, moving data between systems, reminders, report generation and recurring invoicing. Anything that needs judgement or negotiation stays with a person.",
            },
        ],
        related: ["automatizaciones-n8n", "integraciones-api", "consultoria-tecnologica"],
    },

    "agentes-ia": {
        slug: "agentes-ia",
        navLabel: "AI agents",
        cardTitle: "AI agents",
        cardSummary:
            "They don't follow a script: they reason about the goal and take actions in your systems.",
        icon: "kpi",
        metaTitle: "AI agent development for businesses",
        metaDescription:
            "Agents that look up your data, decide which tool to use and take real actions in your CRM, calendar or inventory. Beyond the scripted chatbot.",
        eyebrow: "Service",
        heading: "An agent decides; a chatbot only answers.",
        intro:
            "A chatbot follows the branches someone programmed. An AI agent reasons about the goal, looks up the information it needs, chooses which tool to use and carries out the action. It's the difference between answering a question and resolving the matter.",
        facts: [
            { value: "3–6 weeks", label: "Implementation" },
            { value: "Custom project", label: "Scope" },
            { value: "Your own data", label: "Knowledge" },
        ],
        problem: {
            title: "Why it matters",
            body: "Most enquiries don't fit a decision tree. \"Do you have something similar but cheaper and available this week?\" means checking catalogue, stock and calendar at once. Programming every combination is impossible; reasoning over them isn't.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "A knowledge base built on your data",
                    description:
                        "The agent looks up your catalogue, prices, policies and documentation instead of improvising. Retrieval over real sources, not the model's memory.",
                },
                {
                    title: "Connected tools",
                    description:
                        "It can check availability, create records, book or escalate, depending on what the conversation needs.",
                },
                {
                    title: "Limits and safeguards",
                    description:
                        "We define what it can do on its own and what needs human confirmation. An agent without limits is a risk, not an advantage.",
                },
                {
                    title: "Traceability",
                    description:
                        "Every decision and action is logged, so you can review what the agent did and why.",
                },
                {
                    title: "Ongoing evaluation",
                    description:
                        "We measure hits and misses on real cases, and adjust instructions and sources with that data.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Define the scope",
                    description:
                        "What the agent must be able to resolve, with what information, and how far it can act without supervision.",
                },
                {
                    num: "02",
                    title: "Prepare the sources",
                    description:
                        "We structure your information so the agent can look it up reliably, not approximately.",
                },
                {
                    num: "03",
                    title: "Build and connect",
                    description:
                        "We build the agent, give it its tools and put the safeguards in place.",
                },
                {
                    num: "04",
                    title: "Evaluate before launch",
                    description:
                        "We test it against real cases and measure its accuracy before putting it in front of customers.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "Models chosen per case: not every problem needs the most expensive model, and some don't need a model at all.",
            tools: ["OpenAI", "Claude (Anthropic)", "n8n", "Supabase", "PostgreSQL", "Vectorize", "LangGraph"],
        },
        faq: [
            {
                id: "diferencia-chatbot",
                question: "How is it different from a chatbot?",
                answer:
                    "A chatbot follows a script: if the user says A, it answers B. An agent reasons about the goal, decides which tool to use and takes actions (checking the calendar, writing to the CRM, confirming an appointment) without every branch being programmed in advance.",
            },
            {
                id: "inventa-cosas",
                question: "What if the agent makes things up?",
                answer:
                    "That's why it answers from your sources and not from the model's memory. When it can't find the information, it says so and hands over instead of filling the gap. Sensitive actions require human confirmation, and everything is logged for review.",
            },
            {
                id: "cuando-conviene",
                question: "When do I need an agent, and when is a bot enough?",
                answer:
                    "If your enquiries repeat and fit a handful of paths, a well-built bot is cheaper and more predictable. An agent is worth it when questions span several sources or require choosing between options that can't be listed in advance.",
            },
        ],
        related: ["chatbot-whatsapp", "automatizacion-de-procesos", "software-a-medida"],
    },

    "integracion-crm": {
        slug: "integracion-crm",
        navLabel: "CRM integration",
        cardTitle: "CRM integration",
        cardSummary:
            "Every conversation ends up recorded where your team can see it and follow up.",
        icon: "ops",
        metaTitle: "Connect WhatsApp and your website to your CRM",
        metaDescription:
            "We connect WhatsApp, forms and campaigns to HubSpot, Pipedrive, Zoho or Salesforce. Every lead arrives with its context and nothing gets lost between tools.",
        eyebrow: "Service",
        heading: "A lead that isn't recorded is a lead lost.",
        intro:
            "A prospect writes on WhatsApp, someone replies from their phone, and that conversation doesn't exist for the rest of the team. We connect your channels to your CRM so every contact arrives with its history and its next step.",
        facts: [
            { value: "1–2 weeks", label: "Implementation" },
            { value: "From USD 750", label: "Project" },
            { value: "Keep your CRM", label: "Compatibility" },
        ],
        problem: {
            title: "Why it matters",
            body: "When information lives on each person's phone, follow-up depends on memory. Context gets lost when a customer passes from one person to another, and there's no way to know how many opportunities went unanswered.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "Channels connected",
                    description:
                        "WhatsApp, website forms, campaigns and email arriving in the same place, each with its source identified.",
                },
                {
                    title: "Conversations logged automatically",
                    description:
                        "Whatever the bot or the team discusses is attached to the contact, without anyone copying it by hand.",
                },
                {
                    title: "Qualification and stages",
                    description:
                        "Prospects arrive classified and move through stages based on what happens, not on who remembers to move them.",
                },
                {
                    title: "Automated follow-up",
                    description:
                        "Reminders and sequences so nobody goes cold waiting for a second reply.",
                },
                {
                    title: "Conversion reports",
                    description:
                        "Where customers come from, at which stage they drop and how long it takes to close. Numbers, not impressions.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Review your operation",
                    description:
                        "Which CRM you use (or whether it's worth starting with one), how leads come in today and where the trail goes cold.",
                },
                {
                    num: "02",
                    title: "Pipeline design",
                    description:
                        "We define stages, fields and assignment rules that reflect how you actually sell.",
                },
                {
                    num: "03",
                    title: "Connection and import",
                    description:
                        "We integrate the channels and migrate what you already have, without losing history.",
                },
                {
                    num: "04",
                    title: "Team training",
                    description:
                        "An automation the team doesn't understand is abandoned within a month. We leave your people knowing how to use it.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "We work on the CRM you already have. If you don't have one, we recommend based on team size and budget, not on commission.",
            tools: ["HubSpot", "Pipedrive", "Zoho CRM", "Salesforce", "n8n", "Make", "Google Sheets"],
        },
        faq: [
            {
                id: "ya-tengo-crm",
                question: "Do I have to switch CRMs?",
                answer:
                    "No. We work with HubSpot, Pipedrive, Zoho and Salesforce through their APIs. Switching CRM is a project in itself and is rarely what's needed: almost always the problem is that the one you have isn't connected to your channels.",
            },
            {
                id: "sin-crm",
                question: "What if I don't use a CRM yet?",
                answer:
                    "You can start with something simple and organised before paying for a licence. What matters is that leads are recorded with their source and status; the tool can be migrated later without losing history.",
            },
        ],
        related: ["integraciones-api", "dashboards", "automatizacion-de-procesos"],
    },

    "paginas-web-que-convierten": {
        slug: "paginas-web-que-convierten",
        navLabel: "Websites that convert",
        cardTitle: "Websites that convert",
        cardSummary:
            "A commercial structure and real speed, not a pretty business card.",
        icon: "web",
        metaTitle: "Website design that converts, for businesses",
        metaDescription:
            "Websites and landing pages with a commercial structure, fast and measurable. Qualification form, WhatsApp integration and analytics from day one.",
        eyebrow: "Service",
        heading: "A website that doesn't bring in customers is an expense.",
        intro:
            "Most business websites are built to look good, not to sell. We build sites with a commercial structure: what the visitor sees first, which objection gets answered before it comes up, and how a visit turns into a conversation.",
        facts: [
            { value: "2 weeks", label: "Delivery" },
            { value: "From USD 750", label: "Project" },
            { value: "Measurable", label: "Analytics included" },
        ],
        problem: {
            title: "Why it matters",
            body: "Visitors decide within seconds whether to keep reading. If the site doesn't say what you do, for whom and what happens when they write to you, they leave. And if it's slow on a phone, they leave before reading anything.",
        },
        includes: {
            title: "What's included",
            items: [
                {
                    title: "A structure built to convert",
                    description:
                        "Problem, solution, proof, price and next step, in the order the visitor needs them.",
                },
                {
                    title: "Sales copy",
                    description:
                        "We write the text. We don't hand over a template for you to fill in, which is where most website projects die.",
                },
                {
                    title: "Qualification form",
                    description:
                        "Instead of a button straight to WhatsApp, a few questions that filter and reach you with context.",
                },
                {
                    title: "Real mobile performance",
                    description:
                        "Optimised to load fast on a phone over mobile data, which is how most people will see it.",
                },
                {
                    title: "Technical SEO from the start",
                    description:
                        "Correct metadata, structured data, sitemap and canonicals. Doing it right is much cheaper than fixing it later.",
                },
                {
                    title: "Analytics set up",
                    description:
                        "You know how many people arrive, from where and at what point they leave. Without that, any improvement is opinion.",
                },
            ],
        },
        process: {
            title: "How we do it",
            steps: [
                {
                    num: "01",
                    title: "Positioning session",
                    description:
                        "What you sell, to whom, and why they would choose you. That's where the message comes from, not from a template catalogue.",
                },
                {
                    num: "02",
                    title: "Structure and copy",
                    description:
                        "We define the sections and write the text before designing. Design serves the message, not the other way round.",
                },
                {
                    num: "03",
                    title: "Design and build",
                    description:
                        "A custom interface, no generic templates, built to load fast and work on any screen.",
                },
                {
                    num: "04",
                    title: "Launch and measurement",
                    description:
                        "It goes live with analytics and Search Console configured, ready to measure from the first visitor.",
                },
            ],
        },
        stack: {
            title: "What we build it with",
            intro:
                "Static sites and server rendering: they load fast because there's nothing to wait for, and they're cheap to maintain.",
            tools: ["Next.js", "React", "TypeScript", "Vercel", "Google Analytics", "Search Console", "Microsoft Clarity"],
        },
        faq: [
            {
                id: "wordpress",
                question: "Why not WordPress?",
                answer:
                    "Because maintenance and speed end up costing more than it saves. We build with Next.js on static hosting: it loads in under a second, there are no plugins to update and no attack surface to watch.",
            },
            {
                id: "puedo-editar",
                question: "Will I be able to edit the content myself?",
                answer:
                    "Yes. A content management system can be connected for the text and sections you'll change often. We decide that at the start: making everything editable costs more and is almost never used.",
            },
        ],
        related: ["software-a-medida", "chatbot-whatsapp", "integracion-crm"],
    },
};
