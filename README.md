# M&Co — Sitio web — creamos páginas web

## Estructura del proyecto

```
mcodev/
├── index.html              ← Página principal (landing page completa)
├── css/
│   ├── tokens.css          ← Variables de diseño (colores, tipografía, espaciado)
│   ├── base.css            ← Reset y estilos globales
│   ├── typography.css      ← Escala tipográfica completa
│   ├── layout.css          ← Grid, contenedores, utilidades de espaciado
│   ├── components.css      ← Componentes reutilizables (nav, botones, cards, acordeón...)
│   ├── animations.css      ← Sistema de animaciones y efectos visuales
│   └── page-index.css      ← Estilos específicos de la landing
└── js/
    └── main.js             ← Lógica: navegación, acordeones, scroll reveal, cursor...
```

## Tecnología

- HTML5 semántico
- CSS puro con variables nativas (sin frameworks)
- JavaScript vanilla (sin dependencias)
- Tipografías: Fraunces (display) + DM Sans (body) via Google Fonts

## Cómo usar

Simplemente abre `index.html` en cualquier navegador moderno. No requiere servidor ni build.

Para producción, sube la carpeta tal cual a cualquier hosting estático:
- Netlify (arrastra la carpeta)
- Vercel
- GitHub Pages
- Cualquier servidor con soporte de archivos estáticos

## Personalización rápida

### Cambiar colores principales
Edita `css/tokens.css`:
- `--coral` → color de acento (botones, badges, subrayados)
- `--ink` → color principal del texto
- `--paper` → fondo principal

### Cambiar tipografías
En `css/tokens.css` cambia las URLs de Google Fonts y las variables:
- `--font-display` → tipografía de títulos
- `--font-body` → tipografía de cuerpo

### Cambiar textos
Todos los textos están directamente en `index.html`. Busca el texto que quieras cambiar y edítalo.

### Cambiar email de contacto
Busca `hola@mcodev.site` en `index.html` y reemplázalo por tu dirección real.

### Cambiar nombre
Busca `mcodev` en `index.html` y reemplázalo por tu nombre o marca.

## Secciones incluidas

1. **Hero** — Titular, subtítulo, CTAs, métricas flotantes, ticker animado
2. **Servicios** — Página web, con CTA a contacto
3. **Proceso** — 6 pilares del método de trabajo
4. **Demo** — 4 tarjetas tipo mockup (estado, checklist, entregables, cronograma)
5. **El problema** — 6 problemas que resuelve el servicio
6. **Para quién** — 4 perfiles de cliente ideal
7. **Sobre mí** — Bio con chips de especialización
8. **FAQ** — 8 preguntas frecuentes en grid 2 columnas
9. **CTA final** — Sección de conversión oscura con call-to-action
10. **Footer** — Links organizados + copyright

## Funcionalidades JavaScript

- Navegación con estado `scrolled` (borde al hacer scroll)
- Resaltado del enlace activo según la sección visible
- Menú móvil con hamburguesa animada
- Acordeones y scroll reveal
- FAQ accordion
- Scroll reveal con stagger delays
- Cursor personalizado con efecto ring (solo desktop)
- Ticker animado con clonado automático para loop infinito
- Smooth scroll en todos los enlaces ancla

## Notas de diseño

- Paleta: crema/papel, tinta oscura, coral/naranja como acento, azul wash para info
- Tipografía: Fraunces (serif óptico variable) para display, DM Sans para cuerpo
- Orbs de gradiente animados en hero y sección CTA
- Noise overlay sutil para textura premium
- Todo responsive: breakpoints en 1024px y 768px
