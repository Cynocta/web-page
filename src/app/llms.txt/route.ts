import { content, faqContent } from "@/lib/content";
import { postList, postPath } from "@/lib/content/blog";
import { serviceList, servicePath } from "@/lib/content/services";
import { solutionList, solutionPath } from "@/lib/content/solutions";
import { contactEmail, contactPhone, siteUrl } from "@/lib/site-data";

/**
 * /llms.txt — the site as a language model should read it.
 *
 * Answer engines (ChatGPT search, Perplexity, Claude, Google's AI features)
 * increasingly fetch this file to understand a site without parsing its markup.
 * It is generated from the same registries that render the pages, so a new
 * service, article or FAQ answer shows up here by existing, and a price can't
 * say one thing here and another on /precios.
 *
 * Format follows the llmstxt.org proposal: an H1, a blockquote summary, then
 * H2 sections of annotated links, with "Optional" for what can be skipped.
 */
export const dynamic = "force-static";

const url = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;
const usd = (value: number) => `${value.toLocaleString("es-CO")} USD`;

function buildLlmsTxt() {
    const { plans } = content.es;
    const faq = faqContent.es;

    const planLines = plans.items.map((plan) => {
        const price =
            plan.uniquePaymentUSD !== null
                ? `desde ${usd(plan.uniquePaymentUSD)} (pago único)` +
                  (plan.monthlySubscriptionUSD !== null
                      ? ` + ${usd(plan.monthlySubscriptionUSD)}/mes`
                      : "")
                : (plan.customPrice ?? "cotización a medida");
        return `- ${plan.title}: ${price}. ${plan.description}.`;
    });

    return [
        "# Cynocta",
        "",
        "> Agencia de automatización con IA para negocios de Latinoamérica. Implementa chatbots de WhatsApp, agentes de IA, automatizaciones con n8n, integraciones con CRM y APIs, dashboards y sitios web orientados a conversión. Opera desde Colombia, en remoto para toda LATAM, en español e inglés.",
        "",
        `- Sitio: ${siteUrl}`,
        `- Contacto: WhatsApp ${contactPhone} · ${contactEmail} · ${url("/contacto")}`,
        "- Stack habitual: OpenAI, Claude, n8n, Make, Zapier, WhatsApp Business Platform, Twilio, HubSpot, Pipedrive, Next.js, Supabase.",
        "",
        "Precios de referencia (el valor final depende del alcance):",
        ...planLines,
        "",
        "## Servicios",
        "",
        ...serviceList.map(
            (service) => `- [${service.cardTitle}](${url(servicePath(service.slug))}): ${service.cardSummary}`,
        ),
        "",
        "## Soluciones por tipo de negocio",
        "",
        ...solutionList.map(
            (solution) =>
                `- [${solution.cardTitle}](${url(solutionPath(solution.slug))}): ${solution.cardSummary}`,
        ),
        "",
        "## Guías",
        "",
        ...postList.map((post) => `- [${post.title}](${url(postPath(post.slug))}): ${post.excerpt}`),
        "",
        "## Preguntas frecuentes",
        "",
        ...faq.items.flatMap((item) => [
            `### ${item.question}`,
            "",
            item.answer,
            "",
            `Fuente: ${url("/preguntas-frecuentes")}#${item.id}`,
            "",
        ]),
        "## Empresa",
        "",
        `- [Precios y planes](${url("/precios")}): qué incluye cada plan, comparativa y condiciones.`,
        `- [Nosotros](${url("/nosotros")}): equipo, valores y forma de trabajar.`,
        `- [Contacto](${url("/contacto")}): WhatsApp, correo y formulario de diagnóstico gratuito.`,
        "",
        "## Optional",
        "",
        `- [English version](${url("/en")}): home and FAQ in English.`,
        `- [Términos y condiciones](${url("/terminos")})`,
        `- [Política de privacidad](${url("/privacidad")})`,
        "",
    ].join("\n");
}

export function GET() {
    return new Response(buildLlmsTxt(), {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
