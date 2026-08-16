# MCO Digital — Sitio web

Web corporativa de **MCO Digital**, la división de digitalización empresarial de **Millan & Company (MCO)**. HTML/CSS/JS estático, sin dependencias externas ni build step: se puede abrir directamente o servir con cualquier hosting estático.

## Estructura

```
index.html            Inicio
servicios.html         Servicios (desarrollo web, automatización, IA, integraciones)
como-trabajamos.html   Proceso y diferenciación
proyectos.html         Portfolio (actualmente proyectos conceptuales)
sobre.html             Sobre MCO / Millan & Company
faq.html                Preguntas frecuentes (+ schema FAQPage)
contacto.html           Formulario de contacto / presupuesto
privacidad.html, cookies.html, aviso-legal.html   Páginas legales (placeholder, revisar con asesoría legal)
robots.txt, sitemap.xml
assets/
  css/style.css        Sistema de diseño (tokens, componentes, responsive)
  js/main.js           Menú móvil, scroll header, reveal on scroll, formulario
  img/logo.svg, favicon.svg   Logotipo provisional (mark + wordmark)
```

Cada página HTML es autocontenida (header y footer duplicados a propósito, sin build system) para mantener el sitio 100% estático y rápido.

## Pendiente antes de producción

- **Logo real**: sustituir `assets/img/logo.svg` y el `<svg class="brand-mark">` inline en cada página (header y footer) por el logotipo definitivo de MCO cuando esté disponible. El mark actual es un placeholder geométrico coherente con la paleta de marca.
- **Dominio y datos legales**: reemplazar `mcodigital.com` (canonical, OG, sitemap) y los placeholders `[Razón social] [CIF] [Domicilio]` en `aviso-legal.html` / `privacidad.html` con los datos reales, revisados por asesoría legal.
- **Email de contacto**: `hola@mcodigital.com` es un placeholder — sustituir por el email/dominio corporativo real.
- **Backend del formulario**: `contacto.html` simula el envío en el cliente (`assets/js/main.js`, función del listener de `#contact-form`). Conectar a un endpoint real (Formspree, backend propio o webhook a CRM) sustituyendo el `setTimeout` marcado con comentario `Punto de integración`.

## Preparado para crecer

La arquitectura de información y el sistema de diseño (`assets/css/style.css`, con tokens en `:root`) están pensados para añadir sin reconstruir:

- **Blog**: nueva carpeta `/blog/` reutilizando header/footer y clases `.section`, `.card`.
- **Casos de éxito reales**: sustituir progresivamente las cards de "Proyecto conceptual" en `proyectos.html` por proyectos reales con el mismo componente `.project-card`.
- **Páginas individuales de servicio**: cada servicio ya tiene su propio `id` ancla en `servicios.html` (`#desarrollo-web`, `#automatizacion`, `#inteligencia-artificial`, `#integraciones`); se pueden convertir en páginas propias (`servicios/desarrollo-web.html`, etc.) sin tocar el diseño.
- **MCO Security**: la nota discreta en el footer (`.footer-security`) está lista para enlazar a la futura web de ciberseguridad cuando exista, sin rediseñar la marca.
- **Analítica**: añadir el script de analítica (Plausible, GA4, etc.) antes de `</head>` en todas las páginas.
- **CRM**: el formulario de contacto está estructurado (nombre, empresa, email, servicio, mensaje) para mapear directamente a los campos habituales de un CRM.
- **Formularios avanzados**: la clase `.field` / `.form-grid` en el CSS soporta añadir campos adicionales (select, checkboxes, subida de archivos) manteniendo el estilo.

## Principios de diseño

- Sin frameworks ni librerías de terceros — prioriza rendimiento, mantenibilidad y control total del código.
- Tipografía de sistema (`-apple-system`, Segoe UI, Roboto…) para carga instantánea sin peticiones externas.
- Animaciones sutiles vía `IntersectionObserver` (`[data-reveal]`), respetando `prefers-reduced-motion`.
- FAQ con `<details>/<summary>` nativos: accesible y indexable sin JavaScript.
- Estructura semántica con un único `<h1>` por página y jerarquía `h2`/`h3` correcta para SEO.
