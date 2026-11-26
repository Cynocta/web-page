# Mapa de palabras clave (noviembre de 2026)

Hecho el 25-11-2026 con:
- Search Console: consultas, posición e impresiones de los últimos 3 meses.
- Autocompletado de Google para Colombia (`gl=co`).
- Una lectura a mano de los resultados de Google Colombia para las búsquedas comerciales.

No hay volúmenes de búsqueda: Supermetrics (Keyword Planner, Semrush, Trends) no está autorizado y Google Trends no carga para visitas automatizadas. Para tener volúmenes, abrir el Planificador de palabras clave de Google Ads con la cuenta de Cynocta.

## Dónde encaja Cynocta

Lo que dicen los resultados:
- Las búsquedas genéricas («chatbot whatsapp», «crm con whatsapp», «agente de ia») las ganan plataformas SaaS con mucha autoridad: Kommo, Callbell, Respond.io, Whato. Cynocta no vende una herramienta para configurar solo, así que pelear esas búsquedas no tiene sentido.
- Las búsquedas de servicio con ciudad o país las ganan agencias pequeñas colombianas: Zero Azul (n8n Medellín), nodeforge (n8n Bogotá), LogiBrand (Cali), Tecolsoft y Meteor (chatbot WhatsApp Colombia). Son sitios del tamaño de Cynocta, así que esa pelea sí se puede ganar.
- Las búsquedas de precio («precio api whatsapp business», «n8n es gratis», «n8n costo») tienen intención de compra temprana y se ganan con páginas que dan la cifra exacta, con fecha y país.

Regla: **servicio + Colombia** en las páginas comerciales y **precio/cómo + dato verificable** en el blog.

## Mapa

| Grupo | Búsquedas objetivo | Página | Estado |
|---|---|---|---|
| Precio API WhatsApp | precio api whatsapp business · whatsapp business api precios · ¿cuánto cobra la api de whatsapp? · api whatsapp business colombia precio · costo api whatsapp | `/blog/cuanto-cuesta-la-api-de-whatsapp-business` | Reescrito con la tarifa oficial de Meta por país (oct. 2026) |
| Chatbot WhatsApp | chatbot de whatsapp con ia · chatbot whatsapp colombia · chatbot para empresas whatsapp · empresa de chatbots para whatsapp | `/servicios/chatbot-whatsapp` | Title y description con «Colombia» |
| n8n servicio | automatización con n8n colombia · n8n para empresas · agencia n8n | `/servicios/automatizaciones-n8n` | Title y description con «Colombia» |
| n8n precio | n8n es gratis · n8n costo · n8n es de pago · n8n precios colombia · n8n autoalojado | `/blog/cuanto-cuesta-n8n` | Artículo nuevo |
| Agentes IA | agente de ia para whatsapp · agentes de ia para empresas | `/servicios/agentes-ia` | Title y description con WhatsApp y Colombia |
| CRM + WhatsApp | integrar whatsapp con crm · crm con whatsapp · integrar whatsapp con hubspot / zoho · ¿qué crm se integra con whatsapp? | `/servicios/integracion-crm` + artículo pendiente | Title con los CRM; **falta artículo** |
| Software a medida | desarrollo de software a medida colombia · empresa de desarrollo de software colombia | `/servicios/software-a-medida` | Title con «Colombia» (la única consulta no de marca con clic) |
| Integración APIs | servicios de integración api · empresa integración api | `/servicios/integraciones-api` | Title según la consulta real de Search Console |
| Automatización con IA | automatización de procesos con ia · automatizar procesos con ia · automatización de procesos para pymes | `/servicios/automatizacion-de-procesos` | Title y description |

## Próximos artículos (por orden)

1. **Qué CRM se integra con WhatsApp y cómo conectarlo** (HubSpot, Zoho, Pipedrive, Salesforce, Kommo). Ya tiene impresiones en Search Console en posición 60-80 sin una página que responda. Antes de publicar hay que verificar qué integración nativa ofrece hoy cada CRM.
2. **Cómo integrar WhatsApp con Google Sheets / Google Calendar con n8n**: búsquedas de «integrar whatsapp con…» que salen en el autocompletado, con un caso práctico.
3. **Chatbot de WhatsApp: cuánto cuesta hacerlo en Colombia** (aparece en «Más preguntas» de Google): rangos de implementación de Cynocta, con permiso de Diego para publicarlos.
4. **Agente de IA en WhatsApp: qué es y qué puede hacer**, enlazado con `chatbot-vs-agente-de-ia`.

## Páginas por ciudad (decisión de Diego)

Las agencias que ganan «n8n Bogotá» o «chatbot WhatsApp Cali» tienen una página por ciudad. Solo tiene sentido si Cynocta atiende de verdad en esas ciudades y cada página dice algo distinto: casos, horarios, reuniones presenciales. Hacerlas con el texto clonado de una a otra es contenido de poco valor y Google lo ignora.

## Mantenimiento

- La tabla de precios de Meta se revisa al inicio de cada trimestre (1 ene, 1 abr, 1 jul, 1 oct). Cuando cambie una cifra, se actualiza `updatedAt`.
- Los precios de n8n se revisan cada seis meses en n8n.io/pricing.
- Medición en Search Console a las 4 y 8 semanas, filtrando las consultas «habilitado, …» (ruido del Planificador de Google Ads).
