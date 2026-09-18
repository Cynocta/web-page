import type { HomeContent } from "./home-types";

/**
 * English copy for the homepage's own sections.
 *
 * Service, solution and pricing pages exist only in Spanish, so every link that
 * leaves the English home for one of them says so in its label — a reader who
 * chose English should not land on Spanish without warning.
 */
export const homeEn: HomeContent = {
    services: {
        eyebrow: "Services",
        title: "WhatsApp chatbots, AI agents and custom automation",
        intro: "Four areas you can hire separately or combine. Most projects start with one and grow from there.",
        toggleLabel: "See {n} services",
        allLabel: "See all {n} services (in Spanish)",
        families: [
            {
                title: "Conversations and lead capture",
                summary:
                    "Answer, qualify and book 24/7 on the channel your customers already use to reach you.",
                icon: "chat",
                slugs: ["chatbot-whatsapp", "agentes-ia"],
            },
            {
                title: "Process automation",
                summary: "Repetitive work that no longer depends on someone remembering to do it.",
                icon: "flow",
                slugs: ["automatizacion-de-procesos", "automatizaciones-n8n", "integraciones-api"],
            },
            {
                title: "Web and software",
                summary:
                    "Real commercial structure and speed, and custom software when nothing on the market fits.",
                icon: "web",
                slugs: ["paginas-web-que-convierten", "software-a-medida"],
            },
            {
                title: "Data and decisions",
                summary: "The numbers you decide with, in one place and updated on their own.",
                icon: "kpi",
                slugs: ["dashboards", "integracion-crm", "consultoria-tecnologica"],
            },
        ],
        cards: {
            "chatbot-whatsapp": {
                title: "AI WhatsApp chatbot",
                summary:
                    "Answers, qualifies and books 24/7 on the channel your customers already use to reach you.",
            },
            "agentes-ia": {
                title: "AI agents",
                summary:
                    "They don't follow a script: they reason about the goal and take actions in your systems.",
            },
            "automatizacion-de-procesos": {
                title: "Process automation",
                summary: "We connect your tools so repetitive work stops going through a person.",
            },
            "automatizaciones-n8n": {
                title: "n8n automations",
                summary: "Self-hosted workflows: you pay for the server, not for every execution.",
            },
            "integraciones-api": {
                title: "API integrations",
                summary: "Your tools talking to each other, with real error handling.",
            },
            "paginas-web-que-convierten": {
                title: "Websites that convert",
                summary: "Real commercial structure and speed, not a pretty business card.",
            },
            "software-a-medida": {
                title: "Custom software",
                summary: "For when no tool on the market fits the way your business works.",
            },
            dashboards: {
                title: "Dashboards and reporting",
                summary: "The numbers you decide with, in one place and updated on their own.",
            },
            "integracion-crm": {
                title: "CRM integration",
                summary: "Every conversation logged where your team can see it and follow up.",
            },
            "consultoria-tecnologica": {
                title: "Technology consulting",
                summary: "Deciding what to build, what to buy and what not to do yet.",
            },
        },
    },
    demo: {
        eyebrow: "How it works",
        title: "A message at 9:47 pm. Watch what happens without anyone on the team touching it.",
        intro: "An example flow for a dental clinic. The same system adapts to a real estate agency, an online store or a school: the questions change, the logic doesn't.",
        scenario: "Example · Dental clinic",
        progressLabel: "Step {n} of {total}",
        chatTitle: "Clinic · WhatsApp",
        chatStatus: "online",
        systemTitle: "Your system",
        steps: [
            {
                time: "9:47 pm",
                title: "The enquiry arrives",
                body: "A patient messages on WhatsApp after hours. Without automation, that enquiry waits until tomorrow, and by then they have often picked someone else.",
            },
            {
                time: "9:47 pm",
                title: "A reply in seconds",
                body: "The assistant answers in 4 seconds with your business's information, in your tone. The first to reply wins the sale, including when your team is away.",
            },
            {
                time: "9:48 pm",
                title: "It qualifies the enquiry",
                body: "It asks what your front desk would ask — first visit, urgency, preferred time — and classifies the patient by real intent before anyone spends time on them.",
            },
            {
                time: "9:49 pm",
                title: "It books and records on its own",
                body: "It offers real slots from the calendar, confirms the appointment and creates the record in your CRM. Copying data or sending reminders no longer depends on someone remembering.",
            },
            {
                time: "8:00 am",
                title: "Your team starts the day ready",
                body: "A daily summary, an automatic reminder to the patient and every step measured: where they came from, how fast the reply was and whether it became an appointment. Without data, any improvement is an opinion.",
            },
        ],
        messages: [
            { id: "m1", from: "client", text: "Hi, do you have an appointment this week for a cleaning?", time: "9:47 pm", step: 0 },
            { id: "m2", from: "bot", text: "Hi! Yes, we have availability. Is this your first visit with us?", time: "9:47 pm", step: 1 },
            { id: "m3", from: "client", text: "Yes, first time. And one of my teeth hurts a bit.", time: "9:48 pm", step: 2 },
            { id: "m4", from: "bot", text: "Got it, I'll flag it as a priority. Does tomorrow at 4 pm or Thursday at 10 am work?", time: "9:48 pm", step: 2 },
            { id: "m5", from: "client", text: "Thursday at 10.", time: "9:49 pm", step: 3 },
            { id: "m6", from: "bot", text: "Done: Thursday 10 am. I'll send you a reminder on Wednesday. ✓", time: "9:49 pm", step: 3 },
        ],
        events: [
            { id: "e1", label: "Enquiry received", detail: "WhatsApp · after hours", step: 0 },
            { id: "e2", label: "Reply sent", detail: "4 seconds", step: 1 },
            { id: "e3", label: "Patient qualified", detail: "First visit · high priority", step: 2 },
            { id: "e4", label: "Appointment booked", detail: "Thursday 10 am · calendar", step: 3 },
            { id: "e5", label: "CRM record created", detail: "Details and full conversation", step: 3 },
            { id: "e6", label: "Team notified", detail: "Daily summary at 8 am", step: 4 },
        ],
        metrics: [
            { label: "First reply", value: "4 s" },
            { label: "Data copied by hand", value: "0" },
            { label: "Steps measured", value: "6/6" },
        ],
        footnote: "Built on standard tools such as n8n, the official WhatsApp API and the CRM you already use. If you want to take it with you or change providers tomorrow, you can.",
        linkLabel: "How we work (in Spanish)",
        prevLabel: "Previous step",
        nextLabel: "Next step",
        goToLabel: "Go to step {n}: {title}",
    },
    technologies: {
        eyebrow: "Technology",
        title: "The stack we work with.",
        intro: "Mature, well-documented tools, chosen for what they solve rather than for hype. Everything we build belongs to you.",
        groups: [
            { label: "Artificial intelligence", tools: ["OpenAI", "Claude", "LangGraph", "Vectorize"] },
            { label: "Automation", tools: ["n8n", "Make", "Zapier", "Activepieces"] },
            { label: "Web development", tools: ["Next.js", "React", "TypeScript", "Tailwind"] },
            { label: "Data and infrastructure", tools: ["Supabase", "PostgreSQL", "Docker", "Vercel"] },
            {
                label: "Channels and CRM",
                tools: ["WhatsApp Business Platform", "Twilio", "HubSpot", "Pipedrive"],
            },
        ],
        linkLabel: "See how we apply it (in Spanish)",
    },
    useCases: {
        eyebrow: "Use cases",
        title: "How it applies in each industry.",
        intro: "The underlying problem repeats itself — enquiries come in and aren't answered in time — but what needs automating changes from one business to the next.",
        sectorLabel: "Industry",
        problemLabel: "The problem",
        solutionLabel: "What we implement",
        items: [
            {
                sector: "Clinics and medical practices",
                challenge: "Schedules filled by phone, and gaps nobody fills.",
                solution:
                    "WhatsApp booking with automatic confirmation and reminders, plus rescheduling without phone calls.",
            },
            {
                sector: "Real estate agencies",
                challenge: "Plenty of interest, few qualified leads, and viewings that fall through.",
                solution:
                    "Prospect pre-qualification by budget and area before an agent spends time on them, with automatic follow-up.",
            },
            {
                sector: "E-commerce",
                challenge: "Abandoned carts and after-sales enquiries that swamp the team.",
                solution:
                    "Automatic cart recovery, order tracking and after-sales replies connected to inventory.",
            },
            {
                sector: "Education",
                challenge: "Campaigns that bring in leads who go cold before enrolling.",
                solution:
                    "Instant replies with program and pricing details, handing off to an advisor only when there is real intent.",
            },
            {
                sector: "Professional services",
                challenge: "Enquiries that require judgment, and time lost filtering them.",
                solution:
                    "Structured first-pass qualification, and booking the first meeting only with prospects who fit.",
            },
        ],
        linkLabel: "See all solutions (in Spanish)",
    },
    founders: {
        eyebrow: "Team",
        title: "Meet our founders",
        intro: "Behind Cynocta are people who care about building technology that has a real impact on businesses.",
        profilesPendingLabel: "Profiles coming soon",
        linkLabel: "Meet Cynocta (in Spanish)",
        linkedinLabel: "{name} on LinkedIn",
        githubLabel: "{name} on GitHub",
        people: [
            {
                role: "Co-founder & Software Engineer",
                bio: "Specialist in software development, process automation, artificial intelligence and solution architecture. Focused on building scalable products that help businesses grow through technology.",
            },
            {
                role: "Co-founder & Software Engineer",
                bio: "Specialist in software development and in building technology solutions focused on performance, quality and scalability. Works on modern digital products with a strong emphasis on user experience.",
            },
        ],
    },
    faq: {
        eyebrow: "FAQ",
        title: "Questions before automating",
        intro: "Straight answers to what people ask most while they are still deciding whether to automate.",
        items: [
            {
                id: "where-to-start",
                question: "Where do I start if I've never automated anything in my business?",
                answer:
                    "Wherever you are losing sales today, which is almost always the first reply. The usual first project is a single workflow: answering instantly on WhatsApp and qualifying the prospect. Once that works and there is real data, booking, follow-up and reporting are added.",
            },
            {
                id: "what-can-be-automated",
                question: "What can a small business automate?",
                answer:
                    "Anything repetitive that follows a clear rule: answering frequent questions, qualifying prospects, booking and confirming appointments, recovering abandoned carts, moving form data into a CRM, sending reminders and producing reports. Work that needs judgment or negotiation isn't automated; the manual work around it is.",
            },
            {
                id: "team-time",
                question: "How much of my team's time does an automation project take?",
                answer:
                    "Little, and mostly at the start. It takes a diagnosis session, the real questions your customers ask, and access to the tools you already use. Building, testing and connecting the systems is done by the implementation team, without tying up yours.",
            },
            {
                id: "not-selling-online",
                question: "Is automation worth it if my business doesn't sell online?",
                answer:
                    "Yes, because what gets automated is the conversation, not the sale. A clinic, a workshop or a real estate agency closes over WhatsApp or the phone, and that is where appointments are lost. The system answers, filters and books; closing stays in person.",
            },
            {
                id: "agency-or-freelancer",
                question: "What's the difference between hiring an agency and an n8n freelancer?",
                answer:
                    "A freelancer usually delivers the workflow; an agency stays accountable for the system afterwards. The practical difference shows over time: server monitoring, changes to the WhatsApp or OpenAI APIs, and someone available when something breaks. Without maintenance, an automation degrades within months.",
            },
            {
                id: "change-my-website",
                question: "Do I need to change my website to automate customer service?",
                answer:
                    "No. A WhatsApp chatbot or an AI agent works with the website you already have, or with no website at all. Rebuilding it only makes sense when the site itself is the leak: if it gets visits but no enquiries, automating the reply fixes nothing.",
            },
            {
                id: "how-to-measure",
                question: "How do I know whether an automation is working?",
                answer:
                    "Through four figures the system records itself: how many enquiries come in, how many get a reply within five minutes, how many end up booked and how many close. Ideally you write those figures down before implementing, so you compare against a real baseline rather than an impression.",
            },
        ],
        moreLabel: "See all {n} frequently asked questions",
        moreHref: "/en/faq",
    },
};
