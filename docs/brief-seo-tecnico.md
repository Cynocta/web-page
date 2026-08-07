# Brief de implementación — Bloque técnico SEO/GEO/AEO

> Documento autocontenido. Está escrito para pegarse en una sesión nueva de Claude Code
> que no tiene ningún contexto previo de este trabajo.

---

## Contexto del proyecto

Sitio de **Cynocta**, agencia de automatización con IA para PYMES en LATAM.
Repositorio: `Cynocta/web-page` · Rama: `main` · Despliegue: Vercel.

| | |
|---|---|
| Stack | Next.js **16.2.4** (App Router, Turbopack) · React **19.2.4** · TypeScript |
| Estilos | CSS Modules por sección + tokens globales en `src/app/globals.css` |
| Contenido | Todo el copy vive en `src/lib/content.ts`, tipado y bilingüe (`es` / `en`) |
| Datos de sitio | `src/lib/site-data.ts` (URL, contacto, redes) |
| Schema | `src/lib/structured-data.ts` + componente `src/components/structured-data.tsx` |
| Metadata | `src/lib/metadata.ts` (raíz), reexportada desde `src/app/layout.tsx` |

### ⚠️ Regla obligatoria del repositorio

`AGENTS.md` (referenciado desde `CLAUDE.md`) dice:

> **This is NOT the Next.js you know.** Esta versión tiene cambios que rompen APIs,
> convenciones y estructura de archivos respecto a lo que conoces.
> **Lee la guía relevante en `node_modules/next/dist/docs/` antes de escribir código.**

Los docs están disponibles localmente en `node_modules/next/dist/docs/01-app/`.
**No asumas APIs de memoria** — especialmente para rutas dinámicas, `generateStaticParams`,
`generateMetadata` y el objeto `alternates.languages`. Léelo primero.

---

## Estado actual

Tres commits recientes ya cerraron trabajo previo. **No lo rehagas:**

| Commit | Qué cerró |
|---|---|
| `c3d75b6` | Secciones de dolores, coste y formulario de captación; CTAs enrutados a `#formulario` |
| `56250cf` | UX: salto al cargar, densidad de secciones, rediseño de precios, ritmo de bandas, visual SVG ligero en móvil |
| `dcd8823` | Canonical, metadata de páginas legales y host del sitemap (`www`) |

### Lo que ya está correcto — no tocar

- Canonical autorreferencial en `/`, `/terminos` y `/privacidad`, todos sobre `https://www.cynocta.com`.
- `sitemap.xml` con 3 URLs y `robots.txt` apuntando al host correcto.
- JSON-LD `Organization`, `WebSite` y `ProfessionalService` con URLs `www`.
- Open Graph y Twitter Card con imagen generada 1200×630.
- El alternador ES/EN funciona y `src/lib/content.ts` tiene **paridad total** entre idiomas.

---

## Objetivo de este bloque

Cinco tareas independientes. Se pueden hacer en cualquier orden salvo donde se indique.
**Cada una es un commit propio.**

---

## Tarea 1 — Rutas `/en/` con `hreflang` · 🔴 la más grande

### Problema

El alternador de idioma cambia el texto en cliente sin cambiar la URL. El provider
(`src/components/i18n-provider.tsx:39`) sí actualiza `document.documentElement.lang`
tras hidratar, pero **el HTML servido siempre declara `lang="es"`** y no existe ninguna
URL indexable para el inglés. Todo el contenido en inglés, que está completo y bien
traducido, tiene cero valor SEO.

### Qué construir

- **Español en la raíz** (`/`, `/terminos`, `/privacidad`) — **no** migrar a `/es/`.
  Esas URLs ya están indexadas y moverlas destruye el poco histórico que existe.
- **Inglés bajo `/en/`** (`/en`, `/en/terms`, `/en/privacy`).
- El locale se resuelve **en servidor** y se pasa al `I18nProvider` como valor inicial.
  Hoy el provider arranca con `useState<Locale>("es")` y lo corrige en un `useEffect`
  leyendo `localStorage` — eso debe dejar de mandar sobre el idioma de la página.
- `<html lang>` renderizado en servidor con el locale correcto.
- `alternates.languages` en la metadata de cada página, con `hreflang` **recíproco**
  (cada versión apunta a la otra y a sí misma) más `x-default` hacia la española.
- El toggle de idioma pasa a ser un `<Link>` que navega a la URL equivalente,
  no un `setState`. Debe preservar la sección actual cuando sea posible.
- `localStorage` puede seguir usándose para recordar preferencia, pero **nunca**
  debe sobrescribir el idioma que indica la URL.

### Criterios de aceptación

```
curl -s https://<host>/        → <html lang="es">  + hreflang es, en, x-default
curl -s https://<host>/en      → <html lang="en">  + hreflang es, en, x-default
```

- `sitemap.xml` incluye las URLs de ambos idiomas.
- La moneda (`Currency`) sigue siendo estado de cliente y **no** se acopla al locale.
- Ninguna URL española existente cambia ni devuelve 404.

---

## Tarea 2 — Página FAQ con `FAQPage` · 🔴 máximo impacto AEO

### Problema

El sitio no responde ni una sola pregunta de forma directa. Sin esto no hay
Answer Engine Optimization posible: es la unidad de contenido que ChatGPT,
Perplexity y los fragmentos destacados de Google consumen literalmente.

### Qué construir

Ruta `/preguntas-frecuentes` (y `/en/faq`), con el contenido en `src/lib/content.ts`
siguiendo el patrón bilingüe existente (añade el tipo a `Content`, no lo hardcodees).

**Reglas de redacción — son el punto de la tarea:**

- Cada respuesta **empieza** por la respuesta directa en **40–60 palabras**. El contexto
  y los matices van después. Los motores extraen el primer párrafo.
- Sin lenguaje de venta en la respuesta directa. Concreta y verificable.
- Nombra entidades reales cuando aplique: **n8n, Make, Zapier, OpenAI, WhatsApp Business API,
  HubSpot, Twilio**. La densidad de entidades es lo que asocia la marca con la categoría
  en la representación interna de un modelo.

**Las 12 preguntas:**

1. ¿Cuánto cuesta automatizar la atención de mi negocio?
2. ¿Cuánto tarda la implementación de un chatbot de WhatsApp?
3. ¿Necesito la API oficial de WhatsApp o me sirve WhatsApp Business?
4. ¿Qué pasa si mi negocio ya usa un CRM?
5. ¿El bot puede sonar natural o se nota que es un robot?
6. ¿Qué mantenimiento requiere una automatización?
7. ¿Puedo empezar con algo pequeño y escalar después?
8. ¿Qué diferencia hay entre un chatbot y un agente de IA?
9. ¿Funciona para negocios con pocos mensajes al mes?
10. ¿Qué pasa con mis datos y los de mis clientes?
11. ¿Trabajan con negocios fuera de Colombia?
12. ¿Qué pasa si no funciona? ¿Hay garantía?

### Criterios de aceptación

- JSON-LD `FAQPage` válido en el Rich Results Test de Google.
- Las preguntas son `<h2>`/`<h3>` reales en el DOM, no acordeones que oculten el texto
  al rastreador. Si se colapsan visualmente, el contenido debe estar en el HTML servido.
- Enlazada desde el footer y desde la navegación.
- Metadata propia con canonical autorreferencial.

---

## Tarea 3 — Schema `Service` + `Offer` en los planes

### Problema

Los tres planes tienen precios públicos y ningún marcado. Se pierden los
resultados enriquecidos de precio y la posibilidad de que un modelo cite
las cifras con atribución.

### Qué construir

En `src/lib/structured-data.ts`, junto a las funciones existentes, añadir un generador
que emita un `Service` por plan con su `Offer` anidada. Los datos salen de
`content.plans.items` — **no dupliques precios**, léelos de la fuente única.

Ten en cuenta la forma real del tipo `Plan`:

- `uniquePaymentUSD` y `monthlySubscriptionUSD` pueden ser `null`.
- El plan 3 no tiene precio: usa `customPrice` (`"Proyecto a medida"`). Para ese caso
  emite el `Service` **sin** `Offer`, o con `PriceSpecification` sin valor. No inventes cifra.
- Los precios están en USD; hay conversión a COP/EUR en cliente. El schema debe
  declarar **USD**, que es la moneda de referencia real.
- `priceValidUntil` y `areaServed: "Latinoamérica"` son coherentes con
  `professionalServiceJsonLd()`, que ya existe.

### Criterios de aceptación

- Validación limpia en el Rich Results Test.
- Sin precios hardcodeados: todo derivado de `content.ts`.
- El plan sin precio público no emite una `Offer` con valor falso.

---

## Tarea 4 — Cabeceras de seguridad

### Problema

Medido en producción: faltan `Content-Security-Policy`, `X-Content-Type-Options`,
`Referrer-Policy` y `X-Frame-Options`. `Strict-Transport-Security` existe
(`max-age=63072000`) pero sin `includeSubDomains` ni `preload`.

### Qué construir

Cabeceras en la configuración de Next (consulta los docs locales para la forma correcta
en la 16.x — no asumas la API de versiones anteriores).

```
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: SAMEORIGIN
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: (ver aviso)
```

### ⚠️ Aviso sobre la CSP

El sitio carga **Spline** desde `prod.spline.design` (escena 3D del hero, solo en
escritorio) y usa fuentes de `next/font`. Una CSP mal calibrada **rompe el hero en
producción sin error visible en local**.

Empieza con `Content-Security-Policy-Report-Only`, verifica en un despliegue de preview
que no hay violaciones en consola, y solo entonces conviértela en obligatoria.
Si no puedes verificarlo, **entrega la CSP en modo report-only y dilo explícitamente**.

---

## Tarea 5 — Pasada de tildes

### Problema

Todo el copy está sin acentuar: «Automatizacion», «Metodologia», «operacion»,
«Terminos», «gestion». El impacto en ranking es bajo —Google normaliza tildes—
pero degrada la percepción de calidad y, sobre todo, degrada GEO: cuando un modelo
cita la página, reproduce texto con faltas y eso daña la marca dentro de la respuesta.

### Qué construir

Corregir la ortografía española en:

- `src/lib/content.ts` — bloque `es` completo (el bloque `en` no lleva tildes, obviamente)
- `src/app/terminos/page.tsx` y `src/app/privacidad/page.tsx` — cuerpo de los documentos
- `src/lib/site-data.ts` — `siteDescription`
- `src/lib/metadata.ts` — título por defecto y `keywords`
- `src/app/opengraph-image.tsx` y `src/app/twitter-image.tsx` — textos `alt`

**Ojo:** los commits `dcd8823` ya introdujeron metadata **con** tildes en las páginas
legales («Términos y condiciones», «Política de privacidad»). El sitio está ahora en
estado mixto; esta tarea lo unifica.

### Criterios de aceptación

- Ninguna palabra española mal acentuada en el HTML servido.
- Las claves de objeto y los `value` de formulario **no cambian** — solo los textos
  visibles. Cambiar un `value` rompe la lógica del formulario de captación.
- La paridad ES/EN de `content.ts` se mantiene: `npx tsc --noEmit` debe pasar.

---

## Protocolo de verificación — obligatorio

El proyecto tiene un servidor de previsualización configurado en `.claude/launch.json`
(`next-dev` en :3000, `next-prod` en :3001).

Para **cada** tarea, antes de dar por cerrado:

```bash
npx tsc --noEmit -p tsconfig.json
```

```bash
npm run build
```

Y después, verificación en navegador o con peticiones reales:

- **Tarea 1:** comprobar `lang` y `hreflang` en el HTML **servido** (no en el DOM hidratado).
  Usa `curl` o `Invoke-WebRequest` sobre el build de producción, no el inspector.
- **Tarea 2:** extraer el JSON-LD del HTML y validarlo.
- **Tarea 3:** ídem, y comprobar los tres planes incluido el que no tiene precio.
- **Tarea 4:** inspeccionar cabeceras de respuesta y la consola del navegador.
- **Tarea 5:** buscar en el HTML servido patrones sin acentuar.

**No declares una tarea terminada sin la verificación correspondiente.**
Si algo falla, dilo con la salida real; no lo describas como resuelto.

---

## Convenciones a respetar

- **Tokens de diseño:** usa las variables `--cyn-*` de `globals.css`. No introduzcas
  colores nuevos a mano.
- **Ritmo de bandas:** las secciones alternan fondo `--cyn-surface` / `--cyn-black`.
  Cualquier sección nueva debe continuar esa alternancia.
- **Espaciado:** `--cyn-section-space` ya considera altura de viewport. No lo sustituyas
  por valores fijos.
- **Copy:** todo el texto visible va en `content.ts`, en ambos idiomas. Nada hardcodeado
  en componentes.
- **Objetivo táctil:** mínimo 44 px de alto en controles interactivos.
- **Movimiento:** respeta `prefers-reduced-motion`, también en scroll programático.
- **Commits:** uno por tarea, mensaje explicando el porqué y no solo el qué.
  Terminar con `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

---

## Fuera de alcance

No hagas nada de esto sin pedirlo antes:

- Crear `/servicios/`, `/casos/`, `/blog/`, `/precios/` o `/nosotros/` — es el siguiente bloque.
- Escribir artículos de blog.
- Instalar analítica (GA4, Clarity) — requiere cuentas del cliente.
- Tocar precios, planes o afirmaciones de resultados.
- Sustituir el email de contacto: `hola@cynocta.com` aún no existe.
  El cambio de `cynoctaadmin@gmail.com` es una acción del cliente, no del código.

---

## Orden recomendado

1. **Tarea 5** (tildes) — mecánica, sin riesgo, deja el contenido limpio para lo demás.
2. **Tarea 2** (FAQ) — mayor impacto AEO, independiente del resto.
3. **Tarea 3** (schema de planes) — pequeña y contenida.
4. **Tarea 4** (cabeceras) — cuidado con la CSP y Spline.
5. **Tarea 1** (rutas `/en/`) — la más invasiva; hazla al final, cuando el contenido
   ya esté estable, para no rehacer traducciones.
