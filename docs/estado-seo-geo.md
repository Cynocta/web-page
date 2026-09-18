# Estado SEO / GEO — auditoría y cierre

**Fecha:** 16 de septiembre de 2026 · **Base:** `main@d9bbb0a` + cambios sin commitear
**Método:** rastreo automático de las 31 URL del sitemap sobre el build de producción (`next start`), validación del HTML servido (no del DOM hidratado), verificación en navegador y `tsc` + `eslint` + `next build`.

## Resultado del rastreo

| Métrica | Antes | Después |
|---|---|---|
| URL del sitemap que responden 200 | 31/31 | 31/31 |
| Incidencias SEO detectadas | **35** | **0** |
| Páginas sin `og:image` | 29 | 0 |
| Páginas con `twitter:title` de la home | 29 | 0 |
| Enlaces internos o anclas rotos | 0 (+1 ancla `/#proceso`) | 0 |
| Secciones en español dentro de `/en` | 5 | 0 |
| Palabras indexables (sitemap completo) | 28.889 | 30.348 |
| Errores de `eslint src` | 4 | 0 |
| `/favicon.ico`, `/llms.txt` | 404, 404 | 200, 200 |

---

## 1. Lo que ya estaba bien (no se tocó)

- Canonical autorreferencial en todas las páginas, host `www` coherente.
- `hreflang` recíproco `es` / `en` / `x-default` en home y FAQ.
- Un solo `<h1>` por página; JSON-LD válido en todas.
- Sitemap y robots correctos; 404 reales con estado 404.
- FAQPage en FAQ, servicios, soluciones y artículos; `BlogPosting` con autor.
- Cabeceras HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.

## 2. Lo que quedó a medias y se cerró

| Pendiente | Estado anterior | Resolución |
|---|---|---|
| Quick wins del informe de UX (Q1–Q10) | Hechos, sin build final | Verificados en el rastreo |
| Agrupar servicios (M2) | Hecho solo en español | Localizado ES/EN |
| FAQ en la home (M3) | No hecho | 7 preguntas + `FAQPage`, en ES y EN |
| Casos de uso como tabla (M4) | No hecho | `<table>` real, apilada en móvil |
| Tecnologías compactas (M9) | No hecho | Filas etiqueta + chips; las 25 entidades intactas |
| Reordenar bandas (E1) | No hecho | Servicios → beneficios → resultados → casos → tecnologías → precios → fundadores → FAQ → cierre |
| Fundadores comprimidos (E2) | No hecho | Tarjetas con monograma: −790 px en móvil |
| Cierre sin acción (E3) | No hecho | Botones reales: diagnóstico, WhatsApp, correo |
| Eventos de conversión GA4 | No hecho | `generate_lead` y `cta_click` verificados en el navegador |

## 3. Fallos nuevos encontrados y corregidos en esta pasada

**SEO técnico**
- **29 de 31 páginas sin `og:image`, `og:locale` ni `og:site_name`.** Next fusiona la metadata de forma superficial: cada página declaraba su propio `openGraph` y borraba el de la raíz. Ahora todo pasa por `pageMetadata()` en `src/lib/metadata.ts`.
- **La tarjeta de Twitter/X de cada página mostraba el título y la descripción de la home.** Corregido con el mismo helper.
- **Imagen OG propia para cada servicio, solución y artículo** (18 tarjetas) en `/og/<tipo>/<slug>`, prerenderizadas en build.
- La imagen OG genérica seguía diciendo "web inteligente": actualizada.
- **`/favicon.ico` daba 404** y no existía un icono raster (iOS y Android ignoran el SVG). Añadidos `/favicon.ico` (16/32/48), `/icon` (512) y `/apple-icon` (180); el manifest ya los incluye.
- **`lastmod` del sitemap = hora del build en las 31 URL.** Ahora solo lleva fecha donde es real (artículos y blog).
- Títulos demasiado cortos: `/nosotros`, `/contacto`, `/blog`.
- `/blog` saltaba de `h1` a `h3`.
- Cabeceras: fuera `X-Powered-By`; añadida `Permissions-Policy`.

**GEO (motores de respuesta)**
- **`/llms.txt`** generado desde los mismos registros de contenido: servicios, soluciones, guías, precios y las 12 respuestas de la FAQ.
- **Los autores de los artículos apuntaban a `/nosotros#diego` y `#mateo`, pero allí las personas no tenían `@id`.** Entidades enlazadas.
- `Organization`: logo raster, país, área de servicio, `knowsAbout` (15 entidades) y fundadores.
- `ProfessionalService`: `hasOfferCatalog` con los 10 servicios.
- `/servicios`: `CollectionPage` + `ItemList`; `/contacto`: `ContactPage`.
- La FAQ de la home declara `inLanguage` correcto en `/en`.

**Funcionalidad**
- **`/en` era mayoritariamente español** pese a declararse `hreflang="en"`: 5 secciones traducidas. Los enlaces que llevan a páginas solo en español lo indican y llevan `hrefLang="es"`.
- **En `/en`, el CTA principal del hero apuntaba a una banda sin ningún botón.** Resuelto con la banda de cierre nueva.
- **`/privacidad` y `/terminos` no tenían cabecera ni pie**: páginas sin salida. Integradas con migas de pan.
- `/contacto` delgado (255 palabras): añadidos "qué pasa después" y preguntas previas, todo con afirmaciones que el sitio ya hace.
- Política de privacidad: ahora nombra GA4, sus cookies y su duración, cómo desactivarlas, que el formulario no guarda datos en servidor, y los proveedores (Meta, Google, Vercel).
- Hero móvil: la tercera métrica quedaba sola junto a una celda vacía.
- La divisa se leía de `localStorage` en un efecto, con un render extra y un fallo si el almacenamiento está bloqueado: ahora es un store externo.
- Ortografía en los términos: "médicas", "válida".

---

## 4. Lo que falta y no depende del código

Ordenado por impacto. Cada punto requiere una decisión o un dato del cliente.

1. ~~**Cifras sin respaldo.**~~ **Resuelto (17-09-2026).** El hero muestra compromisos del servicio en lugar de `+52 negocios` y `+34 %`; «Resultados reales» pasó a «Qué medimos desde el primer día»; «Más solicitado» pasó a «Recomendado». **Pendiente:** publicar en `/portafolio` el caso real de software a medida cuando el cliente dé los datos y su permiso.
2. **Fotos y perfiles de los fundadores.** Los `Person` no tienen `sameAs`. Un LinkedIn por fundador es la señal de autoría más barata que queda. Basta con rellenar `linkedin` y `photo` en `src/lib/content/founders.ts`.
3. **Variable `NEXT_PUBLIC_SITE_URL` en Vercel.** Debe ser `https://www.cynocta.com`. El ejemplo anterior no llevaba `www` y habría apuntado todos los canonical a una redirección. Comprobar en Search Console → Inspección de URL → "Canónica seleccionada por Google".
4. **GA4:** marcar `generate_lead` como *evento clave* en Administrar → Eventos, o no contará como conversión.
5. **Consentimiento de cookies.** GA4 instala cookies sin banner. Es aceptable bajo la normativa colombiana si la política lo informa (ya lo hace); si se captan visitantes de la UE, hace falta un banner con Consent Mode.
6. **Revisión legal** de la política de privacidad actualizada. Además, los términos siguen fechados en "Mayo 2025".
7. **Correo de marca.** `cynoctaadmin@gmail.com` resta credibilidad en schema, `llms.txt` y pie. Cambiarlo es una línea en `src/lib/site-data.ts` cuando exista `hola@cynocta.com`.
8. ~~**Cobertura en inglés.**~~ **Resuelto en parte (18-09-2026).** Ya existen en inglés `/en/services`, las 10 páginas de servicio (`/en/services/<slug-en>`), `/en/pricing` y `/en/contact`, con hreflang recíproco, OG propia, schema en `en`, sitemap (44 URL) y `llms.txt`. **Pendiente:** soluciones, blog, portafolio y nosotros siguen solo en español.
9. **CSP en modo report-only.** Pasarla a obligatoria tras verificar en un deploy de preview que no hay violaciones (ya incluye los dominios de GA4).
10. **Tipografía de las imágenes OG.** Satori usa su fuente por defecto: sin negrita y con espacios dobles ocasionales. Se arregla incluyendo Space Grotesk (licencia OFL) en el repo.

## 5. Verificación tras desplegar

- [ ] Search Console → Sitemaps → reenviar `sitemap.xml`.
- [ ] Inspección de URL + solicitar indexación de `/`, `/en`, `/servicios` y `/contacto`.
- [ ] Rich Results Test sobre `/` (FAQPage, Service/Offer) y un artículo (BlogPosting, FAQPage).
- [ ] Opengraph.xyz o el depurador de LinkedIn sobre un servicio: debe mostrar su tarjeta propia.
- [ ] `https://www.cynocta.com/llms.txt` y `/favicon.ico` responden 200.
- [ ] GA4 → Tiempo real: pulsar WhatsApp en la home y ver `generate_lead`.
- [ ] PageSpeed Insights móvil y escritorio. LCP y FCP no pudieron medirse aquí (panel en segundo plano); sí se midió CLS 0 y 19 peticiones / ~291 KB en móvil, sin descargar Spline.
- [ ] A los 28 días: CTR y consultas nuevas de `/` en Search Console, frente a la línea base.

## 6. Rendimiento (Lighthouse, 18-09-2026)

Medido en local con Lighthouse 12 contra producción (`main@d3c09c2`), porque la API pública de PageSpeed agotó su cuota diaria. Móvil = throttling simulado de Lighthouse; son valores de laboratorio y varían entre ejecuciones (una misma página dio entre 71 y 95).

| Página | Móvil | Escritorio | Notas |
|---|---|---|---|
| `/` | 70–73 | 70 | Móvil: FCP ~3,1 s, LCP ~5 s. Escritorio: TBT 860 ms |
| `/servicios/chatbot-whatsapp` | 71–98 | 100 | |
| `/precios` | 71 | 100 | |
| `/blog` | 73–78 | 100 | |

SEO 100, buenas prácticas 100 y accesibilidad 96–100 en todas. CLS 0 en todas.

**Causas encontradas y cambios:**
- **gtag.js (170 KB) se precargaba con prioridad alta** junto al CSS y las fuentes. Pasa a `lazyOnload`: se carga tras el evento `load`. Coste: se pierde la visita de quien se va en el primer segundo o dos; los `generate_lead` no cambian.
- **Se precargaban 5 fuentes**, tres de ellas de DM Mono, que solo se usa en etiquetas pequeñas. DM Mono deja de precargarse.
- **Escritorio: el runtime de Spline (577 KB) ocupaba el hilo principal ~2,1 s** nada más hidratar. El robot se monta ahora al primer movimiento del puntero o cuando el navegador queda libre tras la carga.

**Pendiente:** volver a medir en producción tras el deploy y en PageSpeed Insights cuando haya cuota. Los datos de campo (CrUX) aparecerán en Search Console → Métricas web principales cuando haya tráfico suficiente.
