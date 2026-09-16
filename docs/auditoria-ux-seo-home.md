# Auditoría UX + SEO — Home de Cynocta

**Objeto auditado:** `https://www.cynocta.com/` (auditado sobre el build local `next dev` en `http://localhost:3000`, rama `main`, commit `d9bbb0a`)
**Fecha:** 16 de agosto de 2026
**Viewports medidos:** 1440×900 (escritorio) y 390×844 (móvil)

---

## Nota sobre el método (leer primero)

**No hay capturas de pantalla.** El panel del navegador integrado no estaba compositando frames, así que la herramienta de captura falló en los dos viewports. En su lugar se midió el DOM renderizado directamente: alturas reales de sección, estilos computados, recuentos de palabras por sección, tamaños de objetivo táctil y desbordamiento horizontal. Para lo que se audita aquí —densidad tipográfica, ritmo vertical, carga por sección— esas medidas son más precisas que una captura, pero **no sustituyen una revisión visual del color y el equilibrio compositivo**; ese juicio queda pendiente.

**No hay métricas de negocio ni de rendimiento real.** No hay acceso a Search Console, Analytics ni datos de campo de CrUX. Cualquier cifra de tráfico, rebote o Core Web Vitals que aparezca en este documento está marcada como `ESTIMACIÓN` o simplemente declarada como no medible. **No se inventa ninguna.**

---

## Resumen ejecutivo

La home no está saturada de contenido: está saturada de **estructura sin jerarquía**. El `<main>` contiene **1.045 palabras** repartidas en **9.754 px de alto** (10,8 pantallas en escritorio, **16,8 en móvil**). Eso es densidad baja, no alta. La sensación de "lleno" viene de otro sitio: **nueve bandas consecutivas construidas con la misma plantilla** (eyebrow + título + intro + rejilla de tarjetas), sin ninguna variación de ritmo que diga cuál importa más.

Tres hallazgos concretos explican casi toda la carga cognitiva. Primero, **29 tamaños de fuente distintos, 7 pesos y 38 interlineados** conviviendo en la misma página: sin un sistema tipográfico, cada bloque reclama su propia lectura. Segundo, **dos CTA primarios verdes idénticos en el primer viewport** ("Agendar diagnóstico" en el header, "Agendar diagnóstico gratis" en el hero), lo que anula la jerarquía de acción. Tercero, la sección `#servicios` **anuncia "Cinco frentes" y renderiza 10 tarjetas**: el usuario cuenta el doble de lo que se le prometió.

En SEO el sitio está muy por encima de la media: canonical correcto, hreflang recíproco, sitemap con alternates, JSON-LD en casi todas las rutas. Los huecos son puntuales: la home muestra precios **sin marcado `Offer`**, el footer emite **6 `<h2>` decorativos** que diluyen la jerarquía, y hay un ancla rota (`/#proceso`).

**Ninguna recomendación de este documento borra contenido.** El plan reagrupa, colapsa y reubica.

---

## Supuestos

Ningún dato del brief original venía relleno. Estos son los supuestos asumidos; cada uno indica cómo cambiarían las conclusiones si fuera falso.

| # | Supuesto | Base | Si fuera falso |
|---|---|---|---|
| S1 | **La URL a auditar es la home de Cynocta**, `https://www.cynocta.com/`, y el repo local es su código fuente. | Es el único proyecto en el directorio de trabajo; `src/lib/site-data.ts:9` fija ese host. | Todo el documento cambia de objeto. |
| S2 | **Negocio:** agencia de automatización con IA y desarrollo web que vende a PYMES y empresas medianas de LATAM. | `docs/brief-seo-tecnico.md`, `professionalServiceJsonLd()` con `areaServed: "Latinoamérica"`, teléfono `+57` (Colombia). | Si el mercado real fuera España o EE. UU., las propuestas de `title` y las FAQ con referencia a LATAM deberían regeorreferenciarse. |
| S3 | **Conversión principal:** agendar diagnóstico gratuito, que hoy desemboca en `/contacto` y en WhatsApp (`wa.me/573052580874`). | CTA del hero → `/contacto`; el footer y el formulario abren WhatsApp. | Si la conversión real fuera el formulario y no WhatsApp, la prioridad del bloque `#contacto` sube. |
| S4 | **Keywords prioritarias deducidas del contenido actual**, no dadas: `automatización con IA`, `chatbot de WhatsApp`, `agentes de IA`, `automatizaciones con n8n`, `integración CRM`. | Frecuencias medidas en el `<main>`: `whatsapp` ×7, `automatiz*` ×10, `crm` ×3, `n8n` ×2, `chatbot` ×1. | Si el cliente prioriza `software a medida` o `dashboards`, el orden de las familias de servicios propuesto en la Fase 6 cambia. |
| S5 | **El estado local `main@d9bbb0a` es lo desplegado.** No se pudo verificar contra producción. | Árbol de git limpio. | Si producción va por detrás, algún hallazgo puede estar ya resuelto. |
| S6 | **Las cifras de resultados son reales y verificables por el cliente** (`+52 negocios automatizados`, `+34% conversiones`, `+43% más citas`). Están escritas a mano en `src/lib/content/es.ts`, sin fuente. | — | Si no son verificables, dejan de ser un problema de UX y pasan a ser un riesgo legal y de confianza. Ver Riesgo R3. |
| S7 | **El público es hispanohablante en primera instancia**; `/en` existe pero es secundario. | Solo `/en` y `/en/faq` están traducidos, frente a ~20 rutas en español. | Si el inglés fuera prioritario, faltaría paridad de rutas y eso sería el hallazgo SEO número uno. |

---

## Fase 1 — Inventario

Medido a 1440×900. "Palabras" = `innerText` de la sección. "Densidad" = palabras por cada 1.000 px de alto — la métrica que sostiene el veredicto de la Fase 2.

| # | Sección (`id`) | Propósito declarado | Palabras | Alto (px) | Densidad | Interactivos | CTA |
|---|---|---|---|---|---|---|---|
| 1 | `#inicio` (hero) | Propuesta de valor + entrada al embudo | 52 | 876 | **59** | 2 enlaces + escena Spline | ✅ 2 (primario + secundario) |
| 2 | `#servicios` | Catálogo de servicios | 219 | 1.545 | 142 | 11 enlaces, 10 tarjetas | ✅ 1 (`Ver todos los servicios`) |
| 3 | `#beneficios` | Por qué Cynocta | 129 | 769 | 168 | 1 enlace | ✅ 1 (`Cómo trabajamos`) |
| 4 | `#tecnologias` | Stack técnico | 66 | 757 | **87** | 1 enlace, 25 chips | ✅ 1 (`Ver cómo lo aplicamos`) |
| 5 | `#casos-de-uso` | Aplicación por sector | 195 | 1.094 | 178 | 1 enlace | ✅ 1 (`Ver todas las soluciones`) |
| 6 | `#fundadores` | Prueba social / equipo | 111 | **1.553** | **71** | 1 enlace | ✅ 1 (`Conoce a Cynocta`) |
| 7 | `#precios` | Planes y precios | 182 | 1.143 | 159 | 4 enlaces + 3 botones de divisa | ✅ 4 (3 tarjetas + `Ver todo lo que incluye`) |
| 8 | `#resultados` | Prueba cuantitativa | 75 | 558 | 134 | 0 (carrusel con dots) | ❌ ninguno |
| 9 | `#contacto` | Cierre | 16 | 687 | **23** | 0 | ❌ **ninguno** |
| 10 | `<footer>` | Navegación + legal | 106 | 773 | 137 | 31 enlaces | ✅ canales |
| | **Total** | | **1.151** | **9.754** | **118** | **52 enlaces / 29 destinos únicos** | **11 CTA** |

### Duplicaciones de mensaje detectadas

| Mensaje | Aparición A | Aparición B | Tipo |
|---|---|---|---|
| "No vendemos herramientas / cerramos las grietas" | `#servicios`, título: *"Cerramos las grietas por donde se te van los clientes."* | `#beneficios`, intro: *"No vendemos herramientas ni horas."* | La misma frase de `es.ts:services.title` partida en dos secciones distintas. |
| "Respondemos rápido / 24/7" | Hero, subtítulo: *"…responden 24/7…"* | `#beneficios` 01: *"Respuesta en segundos… a cualquier hora"* | Triple. |
| ídem | | `#casos-de-uso`, intro: *"llegan consultas y no se atienden a tiempo"* | |
| Destino `/nosotros` | `#beneficios` → *"Cómo trabajamos"* | `#fundadores` → *"Conoce a Cynocta"* | Dos enlaces al mismo destino, con 780 px entre ellos. |
| Destino `/servicios` | `#servicios` → *"Ver todos los servicios"* | `#tecnologias` → *"Ver cómo lo aplicamos"* | Ídem. |

### Contradicción copy ↔ DOM

`src/components/sections/services-overview.tsx:27` escribe:

> "**Cinco** frentes que se contratan por separado o se combinan."

y el `map` sobre `serviceList` inmediatamente debajo renderiza **10 tarjetas** (`#servicios a[class*=card]` = 10, medido). El texto promete cinco; el usuario cuenta diez. Esta es, sola, una de las causas directas de la sensación de saturación: la promesa de simplicidad se rompe en el mismo bloque en que se hace.

---

## Fase 2 — Diagnóstico de saturación

Escala 1–5, donde 5 = crítico.

### 2.1 Densidad tipográfica — **4/5**

Medido sobre los 265 elementos con texto visible:

| Dimensión | Valor medido | Referencia sana |
|---|---|---|
| Tamaños de fuente distintos | **29** | 6–8 |
| Pesos distintos | **7** (200, 300, 400, 500, 600, 650, 700) | 3 |
| Interlineados distintos | **38** | 3–4 |
| Familias | 3 (Inter, Space Grotesk, DM Mono) | 2–3 ✅ |
| Colores de texto | 5 | 4–5 ✅ |

Los 29 tamaños incluyen escalones sin diferencia perceptible: **9 px, 9,5 px, 10 px, 10,5 px, 11 px, 11,5 px, 12 px, 12,5 px, 13 px, 13,5 px, 14 px, 14,5 px, 15,5 px** — trece tamaños en un rango de 6,5 px. El más usado, 13,5 px (53 elementos), y el segundo, 12,5 px (28), no se distinguen a simple vista pero obligan al ojo a recalibrar en cada bloque. Eso es exactamente lo que se percibe como "ruido".

**Longitud de línea** (ideal 50–75 caracteres):

| Elemento | Ancho | Caracteres/línea | Veredicto |
|---|---|---|---|
| Intro de sección (`.intro`, `max-width: 62ch`) | 645 px @16,5 px | ~78 | ⚠️ ligeramente largo |
| Subtítulo del hero | 565 px @18,5 px | ~61 | ✅ |
| Bio de fundador | 528 px @15,5 px | ~68 | ✅ |
| Tarjeta de servicio | 301 px @14,5 px | ~42 | ⚠️ corto |
| Tarjeta de caso de uso | 305 px @14 px | ~44 | ⚠️ corto |
| **Tarjeta de beneficio** | **222 px @14 px** | **~32** | 🔴 **muy corto** |

Las tarjetas de `#beneficios` a 32 caracteres por línea fragmentan párrafos de 20 palabras en 6–7 líneas. Un párrafo de siete líneas cortas se lee como una lista sin serlo: más saltos de línea que ideas.

### 2.2 Espacio en blanco — **2/5**

Este **no** es el problema, y conviene decirlo porque es donde suele ir el instinto.

El ritmo vertical es sistemático y está bien resuelto: `--cyn-space-block` computa **92,16 px** en escritorio y todas las bandas lo respetan vía el primitivo `Section` (`src/components/ui/section.module.css`). `#fundadores` usa `rhythm="roomy"` → 124,4 px, y `#contacto` 140/100 px. La alternancia de tono `--cyn-black` / `--cyn-surface` se cumple sin excepción en las nueve bandas.

El padding interno de tarjetas es homogéneo (24–28 px) y el CTA del hero tiene 51 px de alto con respiración suficiente.

El único exceso es `#fundadores`: **1.553 px para 111 palabras** — la banda más alta de la página con la segunda densidad más baja.

### 2.3 Jerarquía visual — **5/5** 🔴

**En el primer viewport (1440×900) hay 27 elementos visibles y 13 controles interactivos.** De ellos:

```
Header:  logo + 7 enlaces de nav + toggle ES/EN (2 botones) + CTA verde
Hero:    H1 + subtítulo + CTA verde + CTA fantasma + 3 stats
```

**Dos CTA primarios con el mismo fondo `rgb(25, 245, 156)` compiten a la vez:**

| Elemento | Texto | Alto | Fondo |
|---|---|---|---|
| Header | "Agendar diagnóstico" | 38 px | `rgb(25,245,156)` |
| Hero | "Agendar diagnóstico gratis →" | 51 px | `rgb(25,245,156)` |

Mismo color, mismo verbo, mismo destino (`/contacto`), separados por ~400 px verticales. Cuando dos elementos reclaman ser "la acción", ninguno lo es. Esta es la infracción más clara de la heurística de reconocimiento de Nielsen en toda la página.

Añadido: el acento verde `rgb(25,245,156)` colorea **75 elementos** en el `<main>`. Un acento que aparece 75 veces deja de acentuar.

### 2.4 Competencia cromática — **2/5**

Disciplinado. Un solo acento (`--cyn-accent: #19f59c`), cuatro grises, cero colores rogue. Los tokens `--cyn-*` se respetan en todo el CSS.

Lo que sí ensucia es el inventario de formas:

- **10 radios de borde distintos** en el `<main>`: `7px, 8px, 10px, 11px, 14px, 16px, 18px, 26px, 50%, 999px`.
- **33 elementos con gradiente** de fondo.
- 7 elementos con `box-shadow`.

Diez radios distintos hacen que cada tarjeta parezca de un sistema diferente. Es ruido de bajo nivel, pero se acumula.

### 2.5 Carga por sección — **3/5**

Solo dos secciones pasan de 150 palabras: `#servicios` (219) y `#casos-de-uso` (195). Y **ambas ya están subdivididas visualmente** en tarjetas.

Es decir: por el criterio de palabras, la página aprueba. La carga percibida no viene del texto, viene del **conteo de objetos**:

| Sección | Objetos que el ojo debe procesar |
|---|---|
| `#servicios` | 10 tarjetas con icono + h3 + párrafo + flecha = **40 elementos** |
| `#tecnologias` | 5 grupos × 4–5 chips = **25 chips + 5 etiquetas** |
| `#casos-de-uso` | 5 tarjetas × (sector + 2 etiquetas + 2 párrafos) = **25 elementos** |

Noventa objetos discretos en tres bandas consecutivas, todos del mismo tamaño y peso visual. Esa es la saturación.

### 2.6 Redundancia — **4/5**

Documentada en la Fase 1. Lo relevante para la puntuación: la frase que define el posicionamiento —*"No vendemos herramientas. Cerramos las grietas por donde se te van los clientes."*, que vive entera en `es.ts:services.title`— aparece **partida en dos bandas separadas por 769 px**, con la mitad en un `<h2>` de `#servicios` y la otra mitad en un `<p>` de `#beneficios`. El usuario recibe dos veces media idea en lugar de una vez la idea completa.

### 2.7 Escaneabilidad — **3/5**

| Métrica | Medida |
|---|---|
| Elementos `<p>` en `<main>` | **64** |
| Palabras dentro de listas (`<li>`) | **79 de 1.045** = **7,6 %** |
| `<strong>` / `<b>` en `<main>` | **0** |
| `<em>` en `<main>` | 3, y los tres son decorativos ("Automatiza", "clientes", "tu sistema también debe hacerlo") |

**El 92 % del contenido es párrafo corrido y no hay una sola negrita ancla en toda la página.** De las 8 `<ul>` del `<main>`, 5 son los chips de tecnologías y 3 las features de los planes; ninguna es prosa convertida en lista. Un lector que escanea no tiene dónde apoyarse: todos los párrafos tienen el mismo peso.

### 2.8 Móvil (390×844) — **4/5**

| Métrica | Medida |
|---|---|
| Alto total del documento | **14.199 px** |
| Pantallas completas | **16,8** |
| Scroll hasta `#precios` | 10.157 px = **12,0 pantallas** |
| Scroll hasta el cierre `#contacto` | 11.932 px = **14,1 pantallas** |
| `#servicios` en solitario | 3.065 px = **3,6 pantallas** |
| CTA principal del hero | 545 px → ✅ visible sin scroll |
| Desbordamiento horizontal del `<body>` | ✅ ninguno (`scrollWidth` = 390) |

**Objetivos táctiles bajo 44 px: 39 controles.** Los peores:

| Control | Tamaño |
|---|---|
| `USD` / `COP` / `EUR` (toggle de divisa) | 41×**26** px |
| Email y teléfono del footer | 326×**22** px |
| `VER TODO LO QUE INCLUYE →` | 195×**30** px |
| Toggle `ES` / `EN` | 35×**32** px |
| Botón `Abrir menú` | **42×42** px |
| 31 enlaces del footer | ~**34** px de alto |

**Apilado defectuoso:** la rejilla de `#precios` en móvil mantiene `grid-template-columns: repeat(3, minmax(0,1fr))` con `overflow-x: auto` — es decir, un carrusel horizontal (`scrollWidth` 1.052 px sobre `clientWidth` 366 px). Funciona, pero **no tiene indicador**: `#resultados` sí renderiza `ScrollDots` y `#precios` no. El usuario no tiene forma de saber que hay dos planes más a la derecha. El componente ya existe en el repo (`src/components/ui/scroll-dots.tsx`); solo no se usó aquí.

---

### Veredicto de la Fase 2

> **El problema no es exceso de contenido. Es falta de estructura.**

El argumento, en números:

1. **La densidad es baja, no alta.** 1.045 palabras en 9.754 px son 118 palabras por cada 1.000 px. Una página de servicios B2B bien construida se mueve entre 250 y 400. La home de Cynocta tiene *menos de la mitad* del texto que su altura sugiere. Quitar contenido empeoraría la relación, no la mejoraría — y destruiría el poco material indexable que hay.

2. **Lo que satura es la repetición de plantilla.** Nueve bandas seguidas con el mismo esqueleto (`SectionHeader` = eyebrow + título + intro, y debajo una rejilla). Sin variación de forma, el lector no puede usar la maquetación para decidir qué saltar; tiene que leerlo todo o abandonarlo todo. Eso es carga cognitiva pura.

3. **Y lo agrava la falta de sistema tipográfico.** 29 tamaños y 38 interlineados significan que dos textos del mismo rango semántico se ven distintos, y dos de rangos distintos se ven iguales. El ojo pierde el mapa.

4. **La prueba contrafáctica:** las dos secciones con más palabras (`#servicios`, `#casos-de-uso`) son también las que mejor densidad tienen (142 y 178). Las que peor se sienten en la lectura son `#fundadores` (71) y `#contacto` (23) — las **más vacías**. Si el problema fuera exceso de texto, la correlación iría al revés.

**Conclusión operativa:** hay que subir la densidad de contenido por píxel (comprimiendo altura, no borrando texto), imponer un sistema tipográfico, y romper la monotonía de plantilla.

---

## Fase 3 — Auditoría SEO del contenido actual

### 3.1 Estructura de encabezados

| Nivel | Cantidad | Detalle |
|---|---|---|
| `<h1>` | **1** ✅ | "Automatiza tu negocio y deja de perder clientes." |
| `<h2>` en `<main>` | 8 | Uno por banda ✅ |
| `<h2>` en `<footer>` | **6** 🔴 | `CONTACTO`, `REDES`, `EMPRESA`, `SERVICIOS`, `SOLUCIONES`, `RECURSOS` |
| `<h3>` | 29 | Sin saltos de nivel ✅ |

**Hallazgo:** el footer emite seis `<h2>` para rotular columnas de navegación. Eso son **6 de los 14 `<h2>` de la página dedicados a etiquetas de menú**, no a contenido. Diluye el mapa de encabezados que el rastreador usa para entender la página. Deben ser `<p>` o `<span>` con `aria-labelledby` sobre el `<nav>` correspondiente. (`src/components/layout/site-footer.tsx`, clase `colTitle`.)

**Intención de búsqueda en los encabezados:** los `<h2>` están escritos en voz de marca, no de búsqueda:

- *"Tecnología que se nota en la operación, no en la factura."* — cero intención de búsqueda.
- *"El stack con el que trabajamos."* — ídem.
- *"Cómo se aplica en cada sector."* — ídem.

Ninguno contiene una keyword de la lista S4. Es una oportunidad limpia: reescribirlos absorbe términos sin añadir una palabra a la página.

**Los eyebrows son `<p>`**, no encabezados — correcto, no inflan la jerarquía. ✅

### 3.2 Title y meta description

| | Actual | Longitud |
|---|---|---|
| `title` | `Cynocta \| Automatización y web inteligente para negocios` | **56** ✅ |
| `description` | `Cynocta ayuda a negocios y empresas a crecer con automatización comercial, páginas web de alto rendimiento y sistemas digitales orientados a conversión.` | **152** ✅ |

Longitudes correctas. Los problemas son de contenido:

- El `title` **abre con la marca**, que nadie busca todavía. Los primeros 30 caracteres son los que más pesan y se gastan en "Cynocta |".
- **"web inteligente" no es un término de búsqueda.** Nadie escribe eso.
- El `title` no contiene `chatbot`, `WhatsApp`, `IA` ni `n8n` — los términos que el propio contenido usa 7, 7, 2 y 2 veces respectivamente.
- La `description` describe categorías genéricas ("sistemas digitales orientados a conversión") sin un solo diferenciador, sin geografía y **sin llamada a la acción**.

### 3.3 Densidad y ubicación de keywords

Frecuencias medidas en el `<main>` (1.045 palabras):

| Término | Ocurrencias | Densidad | ¿En `<h1>`? | ¿En `<title>`? |
|---|---|---|---|---|
| `automatiz*` (todas las formas) | 10 | 0,96 % | ✅ ("Automatiza") | ✅ |
| `whatsapp` | 7 | 0,67 % | ❌ | ❌ |
| `crm` | 3 | 0,29 % | ❌ | ❌ |
| `inteligencia artificial` / `IA` | 4 | 0,38 % | ❌ | ❌ |
| `n8n` | 2 | 0,19 % | ❌ | ❌ |
| `chatbot` | 1 | 0,10 % | ❌ | ❌ |
| `agente` (de IA) | 1 | 0,10 % | ❌ | ❌ |
| `pyme` | **0** | — | ❌ | ❌ |
| `Colombia` / `Latinoamérica` | **0** | — | ❌ | ❌ |

Las densidades son sanas (nada de keyword stuffing). El problema es de **ubicación**: `whatsapp` es el segundo término más frecuente del contenido y no aparece ni en el `<h1>`, ni en el `<title>`, ni en ningún `<h2>`. Está solo en el cuerpo de las tarjetas.

**Ortografía:** revisada. Las tres apariciones de `automatizacion*` sin tilde son todas `automatizaciones` (plural, sin tilde correcta). **No hay faltas de acentuación en el HTML servido.** ✅

**Long-tail no cubierto en la home** (sí cubierto en `/preguntas-frecuentes` y `/blog`, pero no aquí, que es la página con más autoridad):

- `cuánto cuesta un chatbot de WhatsApp`
- `automatizar atención al cliente WhatsApp`
- `agencia de automatización con IA Colombia`
- `n8n vs Make vs Zapier` *(ya existe como artículo — no está enlazado desde la home)*
- `qué se puede automatizar en una PYME`

### 3.4 Imágenes, enlazado interno y anchors

**Imágenes: solo 2 en toda la página**, ambas `/logo.svg`. Una con `alt="Logo de Cynocta"` ✅, la otra con `alt=""` (decorativa, correcto). El hero es una escena Spline WebGL en escritorio y un SVG inline en móvil — **cero imágenes indexables**. No es un error de accesibilidad, pero sí una superficie de búsqueda por imágenes desaprovechada al 100 %.

**Enlazado interno:** 52 enlaces hacia 29 destinos únicos. Estructura muy buena: los 10 servicios, las 5 soluciones, portafolio, blog, FAQ y precios están todos enlazados desde la home. ✅

**Anchors genéricos** — 5 de los enlaces internos:

| Anchor | Destino | Problema |
|---|---|---|
| `VER TODOS LOS SERVICIOS →` | `/servicios` | Sin keyword |
| `VER CÓMO LO APLICAMOS →` | `/servicios` | Sin keyword **y duplica destino** |
| `VER TODAS LAS SOLUCIONES →` | `/soluciones` | Sin keyword |
| `VER TODO LO QUE INCLUYE →` | `/precios` | Sin keyword |
| `Ver casos reales` | `/servicios` | **Engañoso**: dice "casos" y lleva a servicios, no a `/portafolio` |

Ese último es el peor: es el CTA secundario del hero, promete casos y entrega catálogo.

**Ancla rota:** el footer enlaza `/#proceso` (`src/lib/content/es.ts`, `footer.links`), pero **la home no tiene ningún `id="proceso"`**. Los ids reales son: `inicio, servicios, beneficios, tecnologias, casos-de-uso, fundadores, precios, resultados, contacto`. El enlace lleva al top de la home sin saltar a nada.

### 3.5 Datos estructurados

Estado actual en `/`:

| Tipo | ¿Presente? | Nota |
|---|---|---|
| `Organization` | ✅ | Con `contactPoint` y `sameAs` |
| `WebSite` | ✅ | |
| `ProfessionalService` | ✅ | Con `areaServed` y `serviceType` |
| `BreadcrumbList` | N/A | Correcto: la home es la raíz |
| **`Service` + `Offer`** | 🔴 **NO** | Los tres planes con precio se muestran en `#precios` de la home **sin marcado** |
| **`FAQPage`** | 🔴 **NO** | La home no responde ni una pregunta |
| `LocalBusiness` | ❌ | Ver nota |

**Hallazgo principal:** `plansJsonLd()` ya existe en `src/lib/schema/plans.ts` y se emite en `/precios` (`src/app/(es)/precios/page.tsx:61`), pero **no en `/`**, que muestra exactamente los mismos precios. La home es la URL de más autoridad del sitio y es la que se queda sin el marcado de oferta.

**Sobre `LocalBusiness`:** solo aplica si Cynocta tiene una dirección física verificable y quiere aparecer en resultados locales. `site-data.ts` no tiene dirección. **No lo añadas con datos inventados** — `ProfessionalService` sin `address` es la elección correcta hasta que haya una dirección real.

**Sobre `FAQPage` y los rich results:** desde agosto de 2023 Google restringió los resultados enriquecidos de FAQ a sitios gubernamentales y de salud reconocidos. **Marcar FAQ en la home no va a producir el acordeón en la SERP.** Sigue mereciendo la pena por otra razón: es la unidad que los motores de respuesta (ChatGPT, Perplexity, AI Overviews) consumen literalmente. El repo ya lo entiende así — el comentario en `src/lib/schema/faq.ts` lo dice explícitamente. No se debe vender esta recomendación como "vas a salir con FAQ en Google".

### 3.6 Riesgos de indexación al simplificar

Esta es la sección que gobierna toda la Fase 4.

**Contenido que NO puede moverse a carga diferida por JS:**

| Contenido | Por qué |
|---|---|
| Los 10 `cardSummary` de servicios | Es el 21 % del texto del `<main>` |
| Los 5 pares problema/solución de `#casos-de-uso` | 195 palabras, el bloque con mejor densidad semántica por sector |
| Las 25 menciones de herramientas en `#tecnologias` | Entidades nombradas (`OpenAI`, `n8n`, `Make`, `WhatsApp Business Platform`, `HubSpot`…). Es lo que asocia la marca con la categoría en un modelo de lenguaje. **Máxima prioridad de conservación.** |
| Precios y features de los 3 planes | Cifras citables con atribución |

**Contenido que SÍ puede colapsarse manteniéndose en el HTML inicial:**

Cualquiera de los anteriores, siempre que se implemente con **`<details>`/`<summary>` nativo o CSS (`max-height` + `overflow`)**, nunca con render condicional.

```jsx
// ✅ El texto viaja en el HTML servido. Colapsable y rastreable.
<details className={s.more}>
  <summary>Ver los 6 servicios restantes</summary>
  <ul>{rest.map(...)}</ul>
</details>

// 🔴 El texto NO existe hasta que el usuario hace clic. Invisible al rastreador.
{open && <ul>{rest.map(...)}</ul>}
```

**Riesgo ya presente en el código:** `ContactCtaSection` (`src/components/sections/contact-cta.tsx`) usa `framer-motion` con `useInView` y renderiza en el HTML servido:

```html
<h2 class="contact-cta-module__1CnakW__heading"
    style="opacity:0;filter:blur(6px);transform:translateY(32px)">
```

El texto **sí está en el DOM** (Google lo lee), pero es invisible hasta que el observador dispara. No hay guarda de `prefers-reduced-motion` ni temporizador de seguridad. Compárese con `src/components/ui/reveal.tsx`, que hace exactamente lo contrario y lo documenta: *"Fails open, deliberately"* — con tres guardas (elemento ya visible, timeout de 1.200 ms, reduced-motion). **`ContactCtaSection` es la excepción no protegida del sistema.** Si el JS falla, el cierre de la página desaparece visualmente.

---

## Fase 4 — Estrategia de reducción percibida

**Regla dura aplicada: cero palabras eliminadas por estética.** Cada movimiento indica dónde queda el texto.

### 4.1 `#servicios` — Chunking + divulgación progresiva

**Problema:** 10 tarjetas idénticas, 1.545 px en escritorio y **3.065 px (3,6 pantallas) en móvil**, precedidas de un texto que promete cinco.

**Técnica: chunking en 4 familias + divulgación progresiva.** No se borra ninguna tarjeta ni ningún `cardSummary`; se agrupan.

| Familia (nueva `<h3>`) | Servicios que absorbe | Slugs |
|---|---|---|
| Conversación y captación | 2 | `chatbot-whatsapp`, `agentes-ia` |
| Automatización de procesos | 3 | `automatizacion-de-procesos`, `automatizaciones-n8n`, `integraciones-api` |
| Web y software | 2 | `paginas-web-que-convierten`, `software-a-medida` |
| Datos y decisión | 3 | `dashboards`, `integracion-crm`, `consultoria-tecnologica` |

Cada tarjeta de familia muestra su título, un resumen de una línea y los 2–3 servicios como enlaces con su `cardSummary` dentro de un `<details>` abierto por defecto en escritorio. **Los 10 enlaces, los 10 títulos y los 10 resúmenes siguen en el HTML servido.**

**Por qué esta técnica y no otra:** reubicar a páginas hijas no sirve — ya existen (`/servicios/[slug]`) y la home debe seguir enlazándolas para repartir autoridad. Convertir a tabla rompe los iconos y el escaneo por categoría. El chunking reduce el conteo de objetos de 40 a 4 en el primer barrido, que es lo que está saturando.

**Ganancia estimada** (`ESTIMACIÓN`, sobre las alturas medidas): 1.545 → ~750 px en escritorio; 3.065 → ~1.400 px en móvil.

### 4.2 `#casos-de-uso` — Conversión de formato (párrafo → tabla)

**Problema:** 5 tarjetas × 2 párrafos con etiquetas repetidas ("El problema" / "Lo que implementamos" ×5 = 10 etiquetas redundantes), 1.094 px, líneas de 44 caracteres.

**Técnica: conversión a tabla comparativa** de tres columnas — Sector · El problema · Lo que implementamos. Las etiquetas pasan de repetirse 10 veces a ser 2 encabezados de columna (`<th>`). Los 5 sectores y los 10 textos completos permanecen íntegros.

**Por qué:** el contenido ya es tabular (el mismo par de campos para cinco filas) pero está maquetado como cinco tarjetas independientes. Una tabla es la forma nativa de ese dato, elimina 8 etiquetas redundantes sin borrar información y permite comparación transversal, que es exactamente lo que el visitante quiere hacer ("¿cuál de estos es mi caso?").

En móvil la tabla se apila como lista de definición (`<dl>`) por sector — mismo HTML, `display` distinto.

**Ganancia estimada** (`ESTIMACIÓN`): 1.094 → ~620 px escritorio; 1.928 → ~1.100 px móvil.

### 4.3 `#tecnologias` — Compresión de forma, cero cambio de contenido

**Problema:** 66 palabras en 757 px (densidad 87, la tercera peor). Cinco grupos apilados en rejilla `auto-fit minmax(260px)`.

**Técnica: sistematización visual.** Las 25 herramientas pasan a una única tira de chips con las 5 etiquetas de grupo como separadores inline, no como bloques de rejilla.

**Las 25 menciones de entidad (`OpenAI`, `Claude`, `LangGraph`, `n8n`, `Make`, `Zapier`, `WhatsApp Business Platform`, `HubSpot`, `Twilio`…) se conservan íntegras** — son el activo GEO más valioso de la página y no se toca ni una.

**Ganancia estimada** (`ESTIMACIÓN`): 757 → ~340 px.

### 4.4 `#fundadores` — Compresión (la banda con peor relación de la página)

**Problema:** **1.553 px para 111 palabras** (densidad 71). Usa `rhythm="roomy"` (124 px de padding) y un layout de dos filas alternadas con placas de retrato vacías —las fotos no existen y se renderiza un monograma con la etiqueta "foto pendiente".

**Técnica: chunking + ritmo.** Pasar de dos filas alternadas a una rejilla de dos columnas, y `rhythm="roomy"` → `"normal"`. Las 111 palabras (nombres, roles, bios) se mantienen enteras.

**Ganancia estimada** (`ESTIMACIÓN`): 1.553 → ~620 px escritorio.

> **Nota honesta:** esta sección se ve vacía porque le falta el contenido que la justificaría (las fotos). Comprimirla es un parche correcto; la solución real es publicar los retratos. El código ya lo tiene previsto (`founder.photo`).

### 4.5 `#contacto` — Reubicación de función, no de texto

**Problema:** 687 px, **16 palabras, cero enlaces, cero CTA**. Es la banda de cierre de la página y no permite cerrar nada: dice *"Descubre cómo contactarnos abajo"* y delega en el footer.

**Técnica: reubicación.** Los canales de contacto que hoy solo viven en el footer (WhatsApp, correo, teléfono, Instagram) suben a esta banda como botones reales. El footer los conserva —no se elimina nada, se duplica hacia arriba, que es el sentido correcto para un CTA de cierre.

### 4.6 Sistematización tipográfica global

Aplica a toda la página. **29 tamaños → 8 tokens. 7 pesos → 3. 38 interlineados → 3.** Especificación completa en la Fase 6.6.

### 4.7 Bloque nuevo: FAQ en la home

**Técnica: adición de contenido indexable** (la única adición neta de este plan). 7 preguntas con intención de búsqueda **distintas de las 12 de `/preguntas-frecuentes`** para no crear entidades `FAQPage` duplicadas entre dos URLs.

Renderizado con `<details>` nativo: preguntas como `<h3>` reales, respuestas en el HTML servido. Redactado en la Fase 6.3.

---

### Recuento de palabras: antes y después

| | Antes (medido) | Después (proyectado) |
|---|---|---|
| Palabras en `<main>` | 1.045 | **~1.420** (+375 del bloque FAQ) |
| Palabras eliminadas | — | **0** |
| Alto en escritorio | 9.754 px | ~6.900 px (`ESTIMACIÓN`) |
| Alto en móvil | 14.199 px | ~9.400 px (`ESTIMACIÓN`) |
| Densidad (palabras/1.000 px) | 118 | **~206** |

**El contenido sube un 36 % y la altura baja un 30 %.** Eso es reducción percibida sin pérdida de superficie indexable.

---

## Fase 5 — Plan de acción priorizado

Ordenado por relación impacto/esfuerzo dentro de cada bloque.

### Quick wins (≤ 1 día)

| # | Hallazgo | Cambio propuesto | UX | SEO | Esf. | Prio |
|---|---|---|---|---|---|---|
| Q1 | Dos CTA primarios verdes idénticos en el primer viewport (§2.3) | CTA del header → variante fantasma (borde + texto). El hero conserva el único primario. `src/components/layout/header.module.css` | **Alto** | Neutro | **S** | **1** |
| Q2 | *"Cinco frentes"* con 10 tarjetas renderizadas (§1) | Corregir el `intro` a "Diez servicios agrupados en cuatro frentes" (o a "Cinco" si se aplaza el chunking). `services-overview.tsx:27` | **Alto** | Neutro | **S** | **2** |
| Q3 | Anchor `Ver casos reales` → `/servicios` (§3.4) | Redirigir a `/portafolio` y renombrar a `Ver casos de automatización`. `es.ts:hero.secondaryCta` | Medio | **Positivo** | **S** | **3** |
| Q4 | 6 `<h2>` decorativos en el footer (§3.1) | `colTitle` → `<p>` + `aria-labelledby` en cada `<nav>`. `site-footer.tsx` | Neutro | **Positivo** | **S** | **4** |
| Q5 | Ancla rota `/#proceso` (§3.4) | Repuntar a `/nosotros#proceso` o crear la sección. `es.ts:footer.links` | Medio | **Positivo** | **S** | **5** |
| Q6 | Carrusel de `#precios` sin indicador en móvil (§2.8) | Montar `<ScrollDots>` — el componente ya existe. `pricing.tsx` | **Alto** | Neutro | **S** | **6** |
| Q7 | `title` y `description` sin keywords de búsqueda (§3.2) | Reescritura de la Fase 6.5. `src/lib/metadata.ts:8` | Neutro | **Positivo** | **S** | **7** |
| Q8 | `plansJsonLd` ausente en `/` (§3.5) | Emitirlo en `landing.tsx` — la función ya existe | Neutro | **Positivo** | **S** | **8** |
| Q9 | `ContactCtaSection` sin guardas de animación (§3.6) | Añadir `prefers-reduced-motion` + fallback visible, como `Reveal` | Medio | Neutro | **S** | **9** |
| Q10 | 39 objetivos táctiles < 44 px (§2.8) | `min-height: 44px` en toggles, enlaces de footer y `SectionLink` | **Alto** | Neutro | **S/M** | **10** |

### Medio plazo (1–2 semanas)

| # | Hallazgo | Cambio propuesto | UX | SEO | Esf. | Prio |
|---|---|---|---|---|---|---|
| M1 | 29 tamaños / 7 pesos / 38 interlineados (§2.1) | Sistema tipográfico de la Fase 6.6 en `globals.css` + barrido de módulos CSS | **Alto** | Neutro | **M** | **1** |
| M2 | `#servicios`: 10 tarjetas, 3,6 pantallas en móvil (§4.1) | Chunking en 4 familias + `<details>`. Los 10 enlaces siguen en el DOM | **Alto** | **Positivo** (anchors con keyword) | **M** | **2** |
| M3 | La home no responde ninguna pregunta (§3.5) | Bloque FAQ de la Fase 6.3 + `faqItemsJsonLd` | **Alto** | **Positivo** | **M** | **3** |
| M4 | `#casos-de-uso`: 10 etiquetas redundantes (§4.2) | Conversión a tabla / `<dl>` en móvil | Medio | Neutro | **M** | **4** |
| M5 | 0 negritas ancla, 92 % párrafo corrido (§2.7) | Negritas ancla en beneficios y casos; los intros de sección a lista de 3 ítems donde proceda | **Alto** | **Positivo** | **M** | **5** |
| M6 | `<h2>` sin intención de búsqueda (§3.1) | Reescritura de los 8 `<h2>` absorbiendo `whatsapp`, `IA`, `n8n`, `CRM` | Neutro | **Positivo** | **S/M** | **6** |
| M7 | Acento verde en 75 elementos (§2.3) | Restringir `--cyn-accent` a CTA, métricas y estado activo. Eyebrows → `--cyn-muted-2` | **Alto** | Neutro | **M** | **7** |
| M8 | 10 radios de borde distintos (§2.4) | Reducir a 3 tokens: `8px` / `14px` / `999px` | Medio | Neutro | **S** | **8** |
| M9 | `#tecnologias` densidad 87 (§4.3) | Compresión a tira de chips. Las 25 entidades intactas | Medio | Neutro | **M** | **9** |

### Rediseño estructural (3–6 semanas)

| # | Hallazgo | Cambio propuesto | UX | SEO | Esf. | Prio |
|---|---|---|---|---|---|---|
| E1 | Nueve bandas con plantilla idéntica (§2, veredicto) | Reordenación + tres formas de banda distintas (rejilla / tabla / lista). Wireframe en la Fase 6.1 | **Alto** | **Riesgo bajo** (ids deben preservarse) | **L** | **1** |
| E2 | `#fundadores`: 1.553 px para 111 palabras (§4.4) | Rejilla de 2 columnas + `rhythm="normal"`. **Además: publicar las fotos reales** | **Alto** | Neutro | **M/L** | **2** |
| E3 | `#contacto`: 687 px, 16 palabras, 0 CTA (§4.5) | Canales de contacto reales en la banda de cierre | **Alto** | Neutro | **M** | **3** |
| E4 | Móvil: 16,8 pantallas, cierre a 14,1 (§2.8) | Consecuencia agregada de M2+M4+M9+E2. Objetivo: ≤ 11 pantallas | **Alto** | Neutro | **L** | **4** |
| E5 | Stats del hero sin fuente ni contexto (§S6) | Añadir contexto verificable a `+52` / `+34%`, o retirarlas. **Ver Riesgo R3** | Medio | **Positivo** (E-E-A-T) | **M** | **5** |
| E6 | Cero imágenes indexables (§3.4) | Capturas reales de dashboards/flujos con `alt` descriptivo en `#casos-de-uso` | Medio | **Positivo** | **L** | **6** |

---

## Fase 6 — Entregables

### 6.1 Wireframe textual del nuevo orden

```
┌─ HEADER (sticky, 78px) ────────────────────────────────────────────┐
│  Logo · Nav(7) · ES/EN · [Agendar diagnóstico]  ← FANTASMA (Q1)    │
└────────────────────────────────────────────────────────────────────┘

┌─ 1. #inicio — HERO ────────────────────────── forma: split ────────┐
│  eyebrow: Automatización con IA para empresas en crecimiento       │
│  H1:      Automatiza tu negocio con IA y deja de perder clientes.  │
│  sub:     [versión corta, 2 líneas]                                │
│           <details> versión extendida — en el DOM </details>       │
│  CTA:     [Agendar diagnóstico gratis →]  ← ÚNICO primario         │
│           [Ver casos de automatización]   → /portafolio  (Q3)      │
│  stats:   +52 · <5s · +34%   (con contexto — E5)                   │
│  visual:  Spline (≥1000px) / SVG lite (móvil)                      │
└────────────────────────────────────────────────────────────────────┘

┌─ 2. #servicios — 4 FAMILIAS ───────────────── forma: rejilla 2×2 ──┐
│  H2: Chatbots de WhatsApp, agentes de IA y automatización a medida │
│  intro: Diez servicios agrupados en cuatro frentes. (Q2)           │
│  ┌────────────────────┐  ┌────────────────────┐                    │
│  │ Conversación y     │  │ Automatización de  │                    │
│  │ captación          │  │ procesos           │                    │
│  │ <details open>     │  │ <details open>     │                    │
│  │  · Chatbot WhatsApp│  │  · Automatización  │                    │
│  │  · Agentes de IA   │  │  · n8n · APIs      │                    │
│  └────────────────────┘  └────────────────────┘                    │
│  ┌─ Web y software ───┐  ┌─ Datos y decisión ─┐                    │
│  │ · Webs · Software  │  │ · Dashboards · CRM │                    │
│  │                    │  │ · Consultoría      │                    │
│  └────────────────────┘  └────────────────────┘                    │
│  → Ver los 10 servicios en detalle                                 │
│  ▸ los 10 <a>, títulos y cardSummary siguen en el HTML servido     │
└────────────────────────────────────────────────────────────────────┘

┌─ 3. #beneficios — 4 razones ───────────────── forma: rejilla 1×4 ──┐
│  H2: Por qué la automatización se nota en la operación             │
│  4 tarjetas · líneas ≥50 car. (hoy 32) · negritas ancla (M5)       │
└────────────────────────────────────────────────────────────────────┘

┌─ 4. #casos-de-uso — TABLA ─────────────────── forma: TABLA ────────┐
│  H2: Cómo se automatiza cada sector                                │
│  ┌──────────────┬────────────────────┬────────────────────────┐    │
│  │ Sector       │ El problema        │ Lo que implementamos   │    │
│  ├──────────────┼────────────────────┼────────────────────────┤    │
│  │ Clínicas     │ …                  │ …                      │    │
│  │ Inmobiliarias│ …                  │ …                      │    │
│  │ E-commerce   │ …                  │ …                      │    │
│  │ Educación    │ …                  │ …                      │    │
│  │ Servicios    │ …                  │ …                      │    │
│  └──────────────┴────────────────────┴────────────────────────┘    │
│  móvil: mismo HTML, <dl> apilado por sector                        │
└────────────────────────────────────────────────────────────────────┘

┌─ 5. #resultados ── SUBE (era la 8ª) ───────── forma: carrusel ─────┐
│  La prueba va inmediatamente después de la afirmación por sector.  │
│  H2: Resultados medidos en negocios reales                         │
│  3 tarjetas + ScrollDots (ya existe)                               │
└────────────────────────────────────────────────────────────────────┘

┌─ 6. #tecnologias ── COMPRIMIDA ───────────── forma: tira ──────────┐
│  H2: El stack: OpenAI, n8n, Make, WhatsApp Business Platform       │
│  IA ▸ OpenAI · Claude · LangGraph · Vectorize                      │
│  Automatización ▸ n8n · Make · Zapier · Activepieces               │
│  Web ▸ Next.js · React · TypeScript · Tailwind                     │
│  Datos ▸ Supabase · PostgreSQL · Docker · Vercel                   │
│  Canales ▸ WhatsApp Business Platform · Twilio · HubSpot · Pipedrive│
│  ▸ las 25 entidades intactas. ~340px (era 757px)                   │
└────────────────────────────────────────────────────────────────────┘

┌─ 7. #precios ──────────────────────────────── forma: rejilla 1×3 ──┐
│  H2 · toggle divisa (44px) · 3 planes · ScrollDots móvil (Q6)      │
│  + plansJsonLd emitido aquí (Q8)                                   │
└────────────────────────────────────────────────────────────────────┘

┌─ 8. #preguntas ── NUEVA ───────────────────── forma: acordeón ─────┐
│  H2: Preguntas antes de automatizar                                │
│  7 × <details> con <h3> real y respuesta en el HTML servido        │
│  → Ver las 12 preguntas frecuentes  → /preguntas-frecuentes        │
│  + faqItemsJsonLd (FAQPage)                                        │
└────────────────────────────────────────────────────────────────────┘

┌─ 9. #fundadores ── BAJA (era la 6ª) ───────── forma: 2 columnas ───┐
│  rhythm normal (era roomy) · ~620px (era 1.553px)                  │
└────────────────────────────────────────────────────────────────────┘

┌─ 10. #contacto — CIERRE CON ACCIÓN ─────────── forma: centrada ────┐
│  H2: Si tu negocio ya creció, tu sistema también debe hacerlo.     │
│  [Agendar diagnóstico gratis]  [WhatsApp]  [Correo]  [Llamar]      │
│  ▸ canales subidos desde el footer (E3)                            │
└────────────────────────────────────────────────────────────────────┘

┌─ FOOTER ── colTitle: <h2> → <p> (Q4) · enlaces 44px (Q10) ─────────┘
```

**Cambios de orden y por qué:**

| Movimiento | Razón |
|---|---|
| `#resultados` 8ª → 5ª | La prueba debe seguir a la afirmación. Hoy está detrás de precios, donde el escéptico ya se fue. |
| `#fundadores` 6ª → 9ª | Es la banda menos densa (71). En medio de la página rompe el hilo comercial; antes del cierre funciona como confianza previa a la acción. |
| `#preguntas` nueva, 8ª | Entre precio y cierre: es donde nace la objeción. |
| `#tecnologias` 4ª → 6ª | Es respaldo, no argumento de venta. |

⚠️ **Los nueve `id` existentes deben preservarse literalmente.** El header, el footer y el menú los usan como anclas. Reordenar bandas es seguro; renombrar ids rompe navegación y cualquier enlace externo. Ver Riesgo R1.

---

### 6.2 Copy reescrito

Formato en los tres casos: **versión corta visible + versión extendida colapsada, siempre en el DOM.**

#### A. Hero

**H1 — corto (visible):**
> Automatiza tu negocio con IA y deja de perder clientes.

*Cambio: `+ con IA`. Absorbe el término de categoría en el único `<h1>` de la página sin tocar la promesa.*

**Subtítulo corto (visible, 2 líneas, ~28 palabras):**
> Chatbots de WhatsApp, agentes de IA y automatizaciones con n8n. Tu negocio responde en segundos a cualquier hora, y tu equipo solo atiende a quien va en serio.

**Extendido (`<details>`, en el DOM — absorbe el subtítulo actual íntegro):**
> Implementamos automatizaciones, IA y sistemas web que capturan clientes, responden 24/7 y escalan tu operación sin esfuerzo. Trabajamos sobre herramientas estándar —n8n, Make, la API oficial de WhatsApp Business, tu CRM— y todo lo que construimos queda a tu nombre: si mañana quieres llevártelo, puedes.

*Keywords absorbidas en el hero: `chatbot`, `WhatsApp`, `agentes de IA`, `n8n`, `CRM`. Ninguna estaba antes en el primer viewport.*

#### B. `#servicios` — la sección más saturada (219 palabras / 40 objetos)

**H2 (era: "Cerramos las grietas por donde se te van los clientes."):**
> Chatbots de WhatsApp, agentes de IA y automatización a medida

**Intro corta (visible) — corrige la contradicción Q2:**
> Diez servicios agrupados en cuatro frentes. Se contratan por separado o se combinan; la mayoría de los proyectos empieza por uno y crece desde ahí.

**Extendido (`<details>` — reabsorbe la frase partida de §2.6, hoy huérfana entre dos secciones):**
> No vendemos herramientas ni horas: cerramos las grietas por donde se te van los clientes. Cada frente resuelve una parte distinta del mismo problema —que una consulta entre, se responda a tiempo, quede registrada y se pueda medir— y cada uno se puede contratar solo.

**Las 4 tarjetas de familia (texto nuevo, ~15 palabras cada una):**

| Familia | Resumen visible | Contiene (con su `cardSummary` original íntegro) |
|---|---|---|
| **Conversación y captación** | Atender, calificar y agendar 24/7 en WhatsApp, sin que nadie esté al otro lado. | Chatbot de WhatsApp · Agentes de IA |
| **Automatización de procesos** | Que el trabajo repetitivo deje de depender de que alguien se acuerde de hacerlo. | Automatización de procesos · Automatizaciones con n8n · Integraciones con APIs |
| **Web y software** | Estructura comercial y velocidad real, y software propio cuando nada del mercado encaja. | Páginas web que convierten · Software a medida |
| **Datos y decisión** | Los números que usas para decidir, en un sitio y actualizados solos. | Dashboards · Integración con CRM · Consultoría tecnológica |

*Nota: las 4 frases resumen están construidas con vocabulario tomado de los `cardSummary` que agrupan, para no introducir promesas nuevas.*

#### C. `#casos-de-uso` — segunda más saturada (195 palabras / 25 objetos)

**H2 (era: "Cómo se aplica en cada sector."):**
> Cómo se automatiza la atención en cada sector

**Intro corta (visible):**
> El problema de fondo se repite: llegan consultas y no se atienden a tiempo. Lo que hay que automatizar cambia según el negocio.

**Extendido (`<details>`):**
> Un consultorio pierde la cita; una inmobiliaria pierde la visita; un e-commerce pierde el carrito. El síntoma es el mismo —una conversación que no se atendió— pero el flujo que lo resuelve es distinto en cada caso, y por eso ninguno de estos cinco se implementa igual.

**Estructura (tabla; los 10 textos originales pasan a celdas sin modificar):**

| Sector | El problema | Lo que implementamos |
|---|---|---|
| Clínicas y consultorios | Agendas que se llenan por teléfono y huecos que nadie rellena. | Agendamiento por WhatsApp con confirmación y recordatorio automático, más reprogramación sin llamadas. |
| Inmobiliarias | Muchos interesados, pocos calificados, y visitas que se caen. | Prefiltrado de prospectos por presupuesto y zona antes de que un asesor invierta tiempo, con seguimiento automático. |
| E-commerce | Carritos abandonados y consultas de postventa que saturan al equipo. | Recuperación automática de carrito, seguimiento de pedidos y respuestas de postventa conectadas al inventario. |
| Educación | Campañas que traen interesados que se enfrían antes de matricularse. | Respuesta inmediata con información de programas y precios, y derivación al asesor solo cuando hay intención real. |
| Servicios profesionales | Consultas que exigen criterio y tiempo que se va en filtrar. | Calificación inicial estructurada y agendamiento de la primera reunión únicamente con quien encaja. |

**Palabras eliminadas en toda la Fase 6.2: 0.** Lo único que desaparece son 8 de las 10 etiquetas repetidas "El problema"/"Lo que implementamos", que pasan a ser dos `<th>`.

---

### 6.3 Bloque FAQ nuevo para la home (7 preguntas)

Las 7 son **distintas de las 12 de `/preguntas-frecuentes`** (fase de orientación, no de contratación), para no duplicar entidades `FAQPage` entre dos URLs del mismo sitio. Cada respuesta abre con la respuesta directa en 40–60 palabras, sin lenguaje de venta, con entidades nombradas.

**H2:** Preguntas antes de automatizar

---

**1. ¿Por dónde empiezo si nunca he automatizado nada en mi negocio?**

Por el punto donde se pierde dinero hoy, que casi siempre es la primera respuesta. El primer proyecto habitual es un solo flujo: contestar al instante en WhatsApp y calificar al prospecto. Una vez ese flujo funciona y hay datos reales, se añaden agendamiento, seguimiento y reportes.

**2. ¿Qué se puede automatizar realmente en una PYME?**

Todo lo que sea repetitivo y tenga una regla clara: responder consultas frecuentes, calificar prospectos, agendar y confirmar citas, recuperar carritos abandonados, pasar datos de un formulario al CRM, enviar recordatorios y generar reportes. Lo que exige criterio, negociación o trato humano no se automatiza: se le quita el ruido alrededor.

**3. ¿Cuánto tiempo de mi equipo consume el proyecto?**

Entre dos y cuatro horas en total, repartidas en tres o cuatro sesiones cortas. Necesitamos una sesión de diagnóstico, tus respuestas frecuentes reales y los accesos a las herramientas que ya usas. La construcción, las pruebas y la conexión de sistemas las hacemos nosotros sin ocupar a tu equipo.

**4. ¿Automatizar sirve si mi negocio no vende por internet?**

Sirve, porque lo que se automatiza es la conversación, no la venta. Una clínica, un taller o una inmobiliaria cierran por WhatsApp y por teléfono, y ahí es donde se pierden las citas. El sistema atiende, filtra y agenda; el cierre sigue siendo presencial.

**5. ¿Qué diferencia hay entre contratar una agencia y a un freelance de n8n?**

Un freelance construye el flujo; una agencia responde por el sistema. La diferencia práctica está en lo que pasa después: monitoreo del servidor, actualizaciones cuando cambian las APIs de WhatsApp u OpenAI, y alguien que responde cuando algo se cae. Un flujo sin mantenimiento se degrada en meses.

**6. ¿Necesito cambiar mi página web para automatizar la atención?**

No. Un chatbot de WhatsApp o un agente de IA funcionan sobre la web que ya tienes, e incluso sin web. Conviene cambiarla cuando la propia página es la fuga: si recibe visitas y no genera consultas, automatizar la respuesta no arregla nada, porque no hay nada que responder.

**7. ¿Cómo sé si la automatización está funcionando?**

Por cuatro números que el sistema registra solo: cuántas consultas entran, cuántas se responden en menos de cinco minutos, cuántas llegan a agendarse y cuántas cierran. Antes de implementar dejamos la medición base por escrito, para poder comparar contra algo real y no contra una impresión.

**Cierre del bloque:**
> ¿Tu duda no está aquí? Tenemos 12 más en **[Preguntas frecuentes](/preguntas-frecuentes)** — precios, plazos, garantía y qué pasa con tus datos.

**Reglas de implementación:**
- Preguntas como `<h3>` reales dentro de `<summary>`, nunca `<div role="button">`.
- Respuestas en `<details>` nativo. **Nunca `{open && <p>}`** — ver §3.6.
- El contenido va en `src/lib/content/home.ts`, no hardcodeado en el componente (convención del repo).

---

### 6.4 Datos estructurados JSON-LD

**Contexto:** `/` ya emite `Organization`, `WebSite` y `ProfessionalService`. Faltan dos cosas, y **el repo ya tiene las funciones para ambas**.

#### a) Lo que hay que llamar (3 líneas en `src/components/pages/landing.tsx`)

```tsx
import { professionalServiceJsonLd, plansJsonLd, faqItemsJsonLd } from "@/lib/schema";
import { homeFaq } from "@/lib/content/home";
import { siteUrl } from "@/lib/site-data";

<JsonLd data={professionalServiceJsonLd()} />
{plansJsonLd("es").map((plan) => <JsonLd key={plan["@id"]} data={plan} />)}
<JsonLd data={faqItemsJsonLd(homeFaq, siteUrl, "Preguntas antes de automatizar")} />
```

`plansJsonLd` ya trata correctamente el Plan 3 sin precio (emite `Service` sin `Offer`); no hay que tocarla.

#### b) FAQPage de la home — snippet listo para pegar

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.cynocta.com/#faq",
  "inLanguage": "es",
  "name": "Preguntas antes de automatizar",
  "publisher": { "@id": "https://www.cynocta.com/#organization" },
  "mainEntity": [
    {
      "@type": "Question",
      "@id": "https://www.cynocta.com/#por-donde-empiezo",
      "name": "¿Por dónde empiezo si nunca he automatizado nada en mi negocio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "url": "https://www.cynocta.com/#por-donde-empiezo",
        "text": "Por el punto donde se pierde dinero hoy, que casi siempre es la primera respuesta. El primer proyecto habitual es un solo flujo: contestar al instante en WhatsApp y calificar al prospecto. Una vez ese flujo funciona y hay datos reales, se añaden agendamiento, seguimiento y reportes."
      }
    },
    {
      "@type": "Question",
      "@id": "https://www.cynocta.com/#que-se-puede-automatizar",
      "name": "¿Qué se puede automatizar realmente en una PYME?",
      "acceptedAnswer": {
        "@type": "Answer",
        "url": "https://www.cynocta.com/#que-se-puede-automatizar",
        "text": "Todo lo que sea repetitivo y tenga una regla clara: responder consultas frecuentes, calificar prospectos, agendar y confirmar citas, recuperar carritos abandonados, pasar datos de un formulario al CRM, enviar recordatorios y generar reportes. Lo que exige criterio, negociación o trato humano no se automatiza: se le quita el ruido alrededor."
      }
    },
    {
      "@type": "Question",
      "@id": "https://www.cynocta.com/#tiempo-de-mi-equipo",
      "name": "¿Cuánto tiempo de mi equipo consume el proyecto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "url": "https://www.cynocta.com/#tiempo-de-mi-equipo",
        "text": "Entre dos y cuatro horas en total, repartidas en tres o cuatro sesiones cortas. Necesitamos una sesión de diagnóstico, tus respuestas frecuentes reales y los accesos a las herramientas que ya usas. La construcción, las pruebas y la conexión de sistemas las hacemos nosotros sin ocupar a tu equipo."
      }
    },
    {
      "@type": "Question",
      "@id": "https://www.cynocta.com/#sin-vender-por-internet",
      "name": "¿Automatizar sirve si mi negocio no vende por internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "url": "https://www.cynocta.com/#sin-vender-por-internet",
        "text": "Sirve, porque lo que se automatiza es la conversación, no la venta. Una clínica, un taller o una inmobiliaria cierran por WhatsApp y por teléfono, y ahí es donde se pierden las citas. El sistema atiende, filtra y agenda; el cierre sigue siendo presencial."
      }
    },
    {
      "@type": "Question",
      "@id": "https://www.cynocta.com/#agencia-vs-freelance",
      "name": "¿Qué diferencia hay entre contratar una agencia y a un freelance de n8n?",
      "acceptedAnswer": {
        "@type": "Answer",
        "url": "https://www.cynocta.com/#agencia-vs-freelance",
        "text": "Un freelance construye el flujo; una agencia responde por el sistema. La diferencia práctica está en lo que pasa después: monitoreo del servidor, actualizaciones cuando cambian las APIs de WhatsApp u OpenAI, y alguien que responde cuando algo se cae. Un flujo sin mantenimiento se degrada en meses."
      }
    },
    {
      "@type": "Question",
      "@id": "https://www.cynocta.com/#cambiar-mi-web",
      "name": "¿Necesito cambiar mi página web para automatizar la atención?",
      "acceptedAnswer": {
        "@type": "Answer",
        "url": "https://www.cynocta.com/#cambiar-mi-web",
        "text": "No. Un chatbot de WhatsApp o un agente de IA funcionan sobre la web que ya tienes, e incluso sin web. Conviene cambiarla cuando la propia página es la fuga: si recibe visitas y no genera consultas, automatizar la respuesta no arregla nada, porque no hay nada que responder."
      }
    },
    {
      "@type": "Question",
      "@id": "https://www.cynocta.com/#como-se-mide",
      "name": "¿Cómo sé si la automatización está funcionando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "url": "https://www.cynocta.com/#como-se-mide",
        "text": "Por cuatro números que el sistema registra solo: cuántas consultas entran, cuántas se responden en menos de cinco minutos, cuántas llegan a agendarse y cuántas cierran. Antes de implementar dejamos la medición base por escrito, para poder comparar contra algo real y no contra una impresión."
      }
    }
  ]
}
```

#### c) Ampliación de `ProfessionalService` con catálogo de servicios

Los 10 servicios se enlazan desde la home pero no se declaran como oferta. Añadir a `professionalServiceJsonLd()` en `src/lib/schema/professional-service.ts`, **derivando de `serviceList`, sin duplicar nombres a mano**:

```ts
hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de automatización e IA",
    itemListElement: serviceList.map((service) => ({
        "@type": "Offer",
        itemOffered: {
            "@type": "Service",
            name: service.cardTitle,
            description: service.cardSummary,
            url: `${siteUrl}${servicePath(service.slug)}`,
        },
    })),
},
```

⚠️ **Expectativa realista:** ni `FAQPage` ni `OfferCatalog` van a producir resultados enriquecidos para este sitio (§3.5). Su valor está en la extracción por motores de respuesta y en la desambiguación de entidades. **No prometer acordeones en la SERP.**

---

### 6.5 Title y meta description reescritos

| | Propuesta | Long. |
|---|---|---|
| **`title` (ES)** | `Automatización con IA y chatbots de WhatsApp \| Cynocta` | **54** |
| **`description` (ES)** | `Chatbots de WhatsApp, agentes de IA y automatizaciones con n8n para negocios en LATAM. Diagnóstico gratuito y primera entrega en 2 semanas.` | **139** |

**Qué cambia y por qué:**

- Los primeros 30 caracteres pasan de `Cynocta | Automatización y w` a `Automatización con IA y chatb`. La marca va al final, donde no cuesta relevancia.
- Entra `chatbots de WhatsApp`, el segundo término más frecuente del contenido, que hoy no aparece en ningún elemento de metadatos.
- Sale `web inteligente`, que no es un término de búsqueda.
- La descripción gana geografía (`LATAM`, coherente con `areaServed`), entidades (`n8n`, `WhatsApp`, `IA`) y una llamada a la acción con plazo verificable ("2 semanas", que ya se afirma en `faq.ts:cuanto-tarda`).

**Variante para foco Colombia** (usar si S2 se estrecha a mercado colombiano):
`Automatización con IA para negocios en Colombia | Cynocta` — 56 caracteres.

**Versión EN** (`metadata.ts` mantiene paridad):
- `title`: `AI automation and WhatsApp chatbots for business | Cynocta` — 57
- `description`: `WhatsApp chatbots, AI agents and n8n automations for growing businesses in LATAM. Free diagnosis and first delivery in 2 weeks.` — 125

**Implementación:** `src/lib/metadata.ts:8-17` (`TITLES` y `DESCRIPTIONS`). ⚠️ `siteDescription` de `site-data.ts` también alimenta el JSON-LD de `Organization`; decidir si se cambia allí también o solo en metadata.

---

### 6.6 Sistema visual mínimo

#### Escala tipográfica: 29 tamaños → 8 tokens

```css
:root {
    /* Cuerpo — 2 tamaños. Hoy hay 13 entre 9px y 15,5px. */
    --t-body:      16px;    /* párrafos, intros de sección */
    --t-body-sm:   14px;    /* texto de tarjeta, notas, pies */

    /* Encabezados — 3 tamaños. */
    --t-h3:        19px;
    --t-h2:        clamp(1.85rem, 3.4vw, 2.9rem);
    --t-h1:        clamp(2.6rem, 5.2vw, 4.4rem);

    /* Utilidad — 3 tamaños, roles cerrados. */
    --t-eyebrow:   11px;    /* mono, mayúsculas, tracking 0.22em */
    --t-label:     12px;    /* etiquetas de tabla, chips, divisa */
    --t-metric:    clamp(2.4rem, 4vw, 3.4rem);  /* +43%, 2x, <2min */
}
```

**Pesos: 7 → 3.**

| Token | Valor | Uso |
|---|---|---|
| `--w-light` | 300 | h1, h2 |
| `--w-normal` | 400 | todo el cuerpo |
| `--w-medium` | 500 | h3, etiquetas, CTA |

Se eliminan **200, 600, 650 y 700**. El 650 (un solo elemento en toda la página) es el síntoma más claro de que no hay sistema.

**Interlineado: 38 valores → 3.**

| Token | Valor | Uso |
|---|---|---|
| `--lh-tight` | 1.15 | h1, h2, métricas |
| `--lh-snug` | 1.4 | h3, etiquetas, CTA |
| `--lh-relaxed` | 1.7 | todo el cuerpo |

**Longitud de línea:** `min-width: 30ch` en el texto de tarjeta para que `#beneficios` no baje de 50 caracteres (hoy 32); `max-width` de los intros de `62ch` → `58ch` (hoy 78 caracteres reales).

#### Escala de espaciado (base 8)

```css
:root {
    --s-1:  4px;   /* separación intra-componente */
    --s-2:  8px;   /* gap de chips */
    --s-3: 16px;   /* padding de chip, gap de rejilla estrecha */
    --s-4: 24px;   /* padding de tarjeta */
    --s-5: 40px;   /* separación título ↔ contenido */
    --s-6: 64px;   /* separación intra-banda */
    --s-7: 96px;   /* separación entre bandas — ≈ el --cyn-space-block actual */
}
```

`--cyn-space-block` (92,16 px medido) ya está prácticamente en `--s-7`; **el ritmo vertical no se toca**, solo se nombra. Lo que sí se corrige es `#fundadores`: `roomy` (124,4 px) → `--s-7`.

**Radios: 10 valores → 3.**

| Token | Valor | Uso |
|---|---|---|
| `--r-sm` | 8px | chips, campos, botones pequeños |
| `--r-md` | 14px | tarjetas, paneles |
| `--r-full` | 999px | píldoras, toggles, avatares |

#### Paleta reducida

Los tokens de color actuales ya son correctos. Lo que se sistematiza es **el uso**:

| Color | Uso permitido | Uso actual |
|---|---|---|
| `--cyn-accent` `#19f59c` | **Solo**: CTA primario, valor de métrica, estado activo, viñeta de check | **75 elementos** en el `<main>` |
| `--cyn-white` `#f8f8f8` | Encabezados y texto primario | ✅ |
| `--cyn-muted` `#a4a7ae` | Cuerpo | ✅ |
| `--cyn-muted-2` `#666a72` | Eyebrows, metadatos, legal | Infrautilizado |
| `--cyn-cyan` / `--cyn-mint` | **Solo el logo** | ✅ |

**Regla operativa:** los eyebrows de sección pasan de `--cyn-accent` a `--cyn-muted-2`. Solo eso baja el conteo de acento de 75 a ~55, y libera el verde para que signifique "esto es accionable". **Objetivo: ≤ 25 elementos con acento.**

**Gradientes:** de 33 elementos a ≤ 8. Se conservan en hero, banda `accent` de fundadores y tarjeta de plan destacada; se retiran de las tarjetas de caso de uso, donde el gradiente `rgba(25,245,156,0.035)` es imperceptible y solo añade coste de pintado.

**Objetivo táctil:** `min-height: 44px` como regla global para `a`, `button` e `input` bajo `@media (pointer: coarse)`.

---

### 6.7 Checklist de verificación post-implementación

#### Antes de desplegar

```bash
npx tsc --noEmit -p tsconfig.json
```

```bash
npm run build
```

**Verificación crítica — que no se haya perdido contenido indexable.** Capturar la línea base ANTES de tocar nada:

```bash
curl -s https://www.cynocta.com/ | sed 's/<[^>]*>/ /g' | tr -s ' \n' ' ' | wc -w
```

Y repetir tras el despliegue. **El recuento debe subir (~1.045 → ~1.420 palabras). Si baja, hay contenido perdido: revertir antes de investigar.**

Comprobar además que cada texto colapsado está en el HTML **servido**, no solo en el DOM hidratado:

```bash
curl -s https://www.cynocta.com/ | grep -c "Prefiltrado de prospectos"
```

Debe devolver `1`. Repetir con una frase de cada bloque colapsado (los 10 `cardSummary`, las 7 respuestas de FAQ, las 25 herramientas).

**Validación de schema:** pegar la URL en el Rich Results Test y en el Schema Markup Validator. Verificar que aparecen `Organization`, `WebSite`, `ProfessionalService`, **3 × `Service`** (el Plan 3 sin `Offer`) y **`FAQPage` con 7 `Question`**.

#### En Search Console — qué mirar y cuándo

| Cuándo | Qué revisar | Señal de alarma |
|---|---|---|
| **48 h** | Inspección de URL en `/` → "Ver página rastreada" | Falta cualquier texto colapsado en el HTML renderizado |
| **48 h** | Mejoras → Datos estructurados | Errores nuevos en `Service` o `FAQPage` |
| **7 días** | Páginas → Indexación | `/` sale de "Indexada" |
| **14 días** | Rendimiento → filtrar por página `/` → **Impresiones** | Caída > 15 % frente a los 14 días previos |
| **28 días** | Rendimiento → `/` → **CTR y posición media** | El cambio de `title` debe subir CTR. Si baja > 10 %, revertir |
| **28 días** | Rendimiento → Consultas | Deben aparecer consultas nuevas con `chatbot`, `WhatsApp`, `n8n` |
| **90 días** | Rendimiento → comparar 90 días antes/después | Evaluación real. Antes de 90 días no hay conclusión de posicionamiento |

#### Lo que NO se puede verificar desde aquí

**Core Web Vitals reales.** No hay acceso a datos de campo de CrUX. Lo que sí es medible tras desplegar:

- PageSpeed Insights sobre `https://www.cynocta.com/` — datos de laboratorio inmediatos; los de campo tardan 28 días en acumularse.
- **Hipótesis a comprobar, no dato:** la escena Spline del hero carga un runtime WebGL de ~6,6 MB en escritorio (documentado en `home-hero.tsx:14`). Es la primera sospechosa de un LCP alto en escritorio. Ya está bien mitigada en móvil (gating por `min-width: 1000px`). Medir antes de tocarla.

**Tráfico de búsqueda: sí hay instrumentación.** La propiedad de Search Console está dada de alta (confirmado por el cliente; el código lo soporta vía `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` en `src/lib/metadata.ts:5`). Eso cubre la mitad SEO de la evaluación —impresiones, CTR, posición media y consultas— y hace que la tabla de arriba sea ejecutable tal cual.

**Rebote, scroll y conversión: no hay instrumentación.** Grep sobre `src/` y `next.config.ts`: **cero referencias a `gtag`, `googletagmanager`, GA4, Plausible o Clarity**, y los dos `layout.tsx` no inyectan ningún `<script>`. Search Console no mide esto: no sabe qué pasa una vez el usuario llega. Concretamente, **no se podrá demostrar si el rediseño mejoró la conversión**, porque no hay forma de contar cuántos visitantes pulsan "Agendar diagnóstico gratis" ni cuántos abren `wa.me/573052580874`.

Si solo se hace una cosa antes de implementar, que sea esta: instalar GA4 o Plausible con **un evento sobre el CTA del hero y otro sobre los enlaces de WhatsApp**. Sin esos dos eventos, la parte UX de esta auditoría queda sin veredicto.

#### Línea base a exportar HOY, antes de tocar código

Search Console solo conserva 16 meses y la comparación a 90 días de la tabla anterior necesita el "antes" congelado:

1. **Rendimiento → Resultados de búsqueda** → filtrar Página = `https://www.cynocta.com/` → rango **últimos 90 días** → exportar las pestañas **Consultas** y **Fechas** a CSV. Guardar como `docs/baseline-gsc-home-2026-08-16.csv`.
2. Anotar los cuatro totales de esa vista: clics, impresiones, CTR y posición media.
3. **Inspección de URL** sobre `/` → guardar el HTML renderizado actual (es la referencia contra la que se comprobará que no se perdió texto).
4. Ejecutar el `curl | wc -w` de más arriba contra **producción** y anotar el número. Es el umbral que no puede bajar.

⚠️ **Comprobar de paso una cosa en Search Console:** `.env.example` propone `NEXT_PUBLIC_SITE_URL=https://cynocta.com` **sin `www`**, mientras que `site-data.ts:9` documenta que ese host redirige a `www` y por eso usa `https://www.cynocta.com` como fallback. Si la variable está puesta en Vercel con el valor del ejemplo, **todos los canonical del sitio apuntan a una redirección**. Se detecta en Páginas → "URL alternativa con etiqueta canónica adecuada" o en Inspección de URL → "Canónica seleccionada por Google". Si aparece, es una corrección de un carácter y de máxima prioridad. No se pudo verificar desde aquí porque requiere acceso a las variables de entorno de producción.

#### Verificación de UX (medible sin herramientas externas)

| Métrica | Antes (medido) | Objetivo |
|---|---|---|
| Alto del documento, escritorio | 9.754 px | ≤ 7.000 px |
| Alto del documento, móvil | 14.199 px | ≤ 9.500 px |
| Pantallas hasta `#contacto`, móvil | 14,1 | ≤ 9 |
| Tamaños de fuente distintos | 29 | ≤ 10 |
| Pesos distintos | 7 | 3 |
| Interlineados distintos | 38 | ≤ 5 |
| Elementos con acento en `<main>` | 75 | ≤ 25 |
| CTA primarios en el primer viewport | 2 | **1** |
| Objetivos táctiles < 44 px | 39 | **0** |
| Radios de borde distintos | 10 | 3 |
| Palabras en `<main>` | 1.045 | **≥ 1.045** (nunca menos) |
| Densidad (palabras/1.000 px) | 118 | ≥ 200 |

---

## Fase 7 — Verificación

### 7.1 ¿Alguna recomendación elimina contenido indexable sin reubicarlo?

**No.** Auditoría de cada movimiento:

| Movimiento | Contenido afectado | Dónde queda |
|---|---|---|
| `#servicios` → 4 familias | 10 títulos + 10 resúmenes + 10 enlaces | Íntegros, dentro de `<details>` en el HTML servido |
| `#casos-de-uso` → tabla | 5 sectores + 10 textos | Íntegros, en celdas `<td>` |
| 8 etiquetas repetidas ("El problema"/"Lo que implementamos") | Duplicación literal ×5 | 2 `<th>`. **Única supresión del plan, por redundancia semántica real; el término se conserva en el encabezado de columna.** |
| `#tecnologias` comprimida | 25 nombres de herramienta | Íntegros como `<li>` |
| `#fundadores` comprimida | 111 palabras | Íntegras |
| `#contacto` gana canales | — | Adición; el footer conserva los suyos |
| Frase partida de `services.title` | *"No vendemos herramientas… cerramos las grietas…"* | **Reabsorbida completa** en el `<details>` de `#servicios` (§6.2 B) |
| Reordenación de bandas | Todo | Solo cambia el orden; ningún `id` se renombra |
| Cambio de `title`/`description` | 56 + 152 caracteres de metadatos | Sustituidos, no eliminados; las keywords perdidas (`web inteligente`) no eran términos de búsqueda |

**Balance neto: +375 palabras (bloque FAQ), −8 etiquetas repetidas, 0 párrafos eliminados.**

### 7.2 ¿Cada hallazgo cita un elemento real del sitio?

Sí. Todos los hallazgos proceden de medición sobre el DOM renderizado en `localhost:3000` (build de `main@d9bbb0a`) o de lectura directa del código. Trazabilidad:

| Hallazgo | Origen |
|---|---|
| 29 tamaños / 7 pesos / 38 interlineados | `getComputedStyle` sobre 265 elementos con texto visible |
| Alturas y palabras por sección | `getBoundingClientRect()` + `innerText` a 1440×900 y 390×844 |
| Dos CTA verdes en el primer viewport | Filtrado de `a, button` con `backgroundColor === rgb(25,245,156)` sobre el viewport inicial |
| "Cinco frentes" vs 10 tarjetas | `services-overview.tsx:27` + `document.querySelectorAll('#servicios a[class*=card]').length === 10` |
| 6 `<h2>` en el footer | `document.querySelectorAll('footer h2')` → `["CONTACTO","REDES","EMPRESA","SERVICIOS","SOLUCIONES","RECURSOS"]` |
| Ancla `/#proceso` rota | `es.ts:footer.links` vs los 9 `id=` del HTML servido |
| 39 objetivos táctiles < 44 px | Medición de `a, button, input` a 390×844 |
| Carrusel de precios sin dots | `#precios [class*=grid]` con `overflowX:auto`, `scrollWidth` 1052 / `clientWidth` 366, sin `ScrollDots` |
| `opacity:0` servido en `#contacto` | `grep` sobre `curl` del HTML de la home |
| `plansJsonLd` ausente en `/` | `grep` de `JsonLd` en todas las rutas |
| Densidades de keyword | Conteo por regex sobre el `innerText` del `<main>` |
| 0 `<strong>`, 7,6 % en listas | `querySelectorAll` sobre el `<main>` |

**Nada extrapolado de patrones genéricos.**

### 7.3 Supuestos y cómo cambiarían las conclusiones

Ver la tabla de la sección **Supuestos**. Los tres que más pesan:

1. **S1 (la URL auditada).** Si el objetivo real fuera otro sitio, este documento no aplica. Es el supuesto de mayor consecuencia y el más fácil de confirmar.
2. **S4 (keywords deducidas).** Toda la Fase 6 (title, `<h2>`, FAQ, familias de servicios) está construida sobre las cinco keywords deducidas de las frecuencias del contenido. **Si el cliente tiene un listado real de Search Console o de investigación de palabras clave, hay que rehacer 6.2, 6.3 y 6.5 antes de implementar** — la estructura de la Fase 4 aguanta, la redacción no.
3. **S6 (las cifras son reales).** Si `+52 negocios automatizados`, `+34% conversiones` o `+43% más citas` no son verificables, el problema deja de ser de UX. Ver R3.

### 7.4 Las 3 recomendaciones de mayor riesgo

#### R1 — Reordenación de bandas (E1)

**Riesgo:** el header, el footer y el menú móvil navegan por ancla a los nueve `id` de la home. Reordenar el JSX es trivial; **renombrar un `id` rompe navegación interna y cualquier enlace externo que apunte a esas anclas**. Riesgo secundario: la alternancia de tono `black`/`surface` se rompe al reordenar, y dos bandas contiguas del mismo tono se leen como un solo bloque gigante — exactamente el problema que este plan intenta resolver.

**Mitigación:** cambiar solo el orden de los componentes en `landing.tsx`, jamás la prop `id`. Recalcular la prop `tone` de las nueve bandas en el mismo commit.

**Reversión:** `git revert` del commit de reordenación. Es un cambio de un solo archivo y no toca contenido. **Coste de reversión: minutos.**

#### R2 — Colapsar servicios y FAQ en acordeones (M2, M3)

**Riesgo:** es el punto donde este plan puede destruir SEO. Si el acordeón se implementa con render condicional (`{open && <div>}`), los 10 resúmenes de servicio y las 7 respuestas de FAQ **desaparecen del HTML servido** — se pierde alrededor del 40 % del texto indexable de la página sin que nada falle visiblemente en local.

**Mitigación:** `<details>`/`<summary>` nativo, o CSS `max-height` + `overflow: hidden`. Prohibido el render condicional. La verificación de la Fase 6.7 (`curl | grep` de una frase de cada bloque) es obligatoria **antes** de dar por cerrada la tarea, no después.

**Reversión:** `git revert`. Y si llegó a producción sin detectarse, tras revertir hay que solicitar reindexación de `/` en Search Console. **Coste de reversión: horas, más el tiempo de reindexación.**

#### R3 — Las cifras sin fuente del hero y de `#resultados` (E5)

**Riesgo — es el más serio del documento, y no es de UX.** La home afirma `+52 negocios automatizados`, `+34% aumento en conversiones`, `+43% más citas cerradas en 30 días`, `2x más visitas agendadas en 21 días`. Están escritas a mano en `src/lib/content/es.ts`, sin fuente, sin fecha y sin caso enlazado — **y `CASE_SLUGS` está vacío, es decir, `/portafolio` no tiene ni un solo caso publicado que las respalde.**

Tres consecuencias: (a) es publicidad con datos no verificables, con la exposición regulatoria que eso implica; (b) Google evalúa E-E-A-T y las afirmaciones sin respaldo restan; (c) el CTA secundario del hero dice "Ver casos reales" y lleva a `/servicios`, no a casos.

**No es un problema que un rediseño resuelva.** Es una decisión del cliente.

**Mitigación:** confirmar con el cliente si las cifras son auditables. Si lo son, publicar el caso en `/portafolio`, fechar la métrica y enlazarla desde la cifra. Si no lo son, sustituirlas por afirmaciones cualitativas verificables.

**Reversión:** editar `es.ts` y desplegar. **Coste: minutos.** Pero el riesgo de *no* actuar no se revierte igual de barato.

---

### Nota final sobre el estado del sitio

Conviene decirlo porque no se deduce del volumen de hallazgos: **la base técnica de este sitio está por encima de lo habitual en su categoría.** Canonical autorreferencial correcto, `hreflang` recíproco con `x-default`, sitemap con alternates y prioridades razonadas, JSON-LD en prácticamente todas las rutas, CSP en modo report-only con las excepciones documentadas, y un componente `Reveal` que falla abierto a propósito y explica por qué en un comentario.

Casi todo lo que este documento pide ya existe en el repositorio: `ScrollDots`, `faqItemsJsonLd`, `plansJsonLd`, el primitivo `Section` con tonos y ritmo, los tokens `--cyn-*`. **El trabajo es de sistematización y conexión, no de reconstrucción.** Esa es la razón por la que el bloque de quick wins es tan largo y tan barato: hay diez mejoras reales que caben en un día.
