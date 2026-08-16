/**
 * MCO Digital — main.js
 * Sin dependencias externas. Progressive enhancement:
 * el sitio es completamente funcional y legible sin este archivo.
 */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
   * Header: sombra al hacer scroll + menú móvil
   * --------------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------------------------------------------------------
   * Reveal on scroll (respeta prefers-reduced-motion vía CSS)
   * --------------------------------------------------------------- */
  var revealTargets = document.querySelectorAll("[data-reveal], [data-reveal-group]");
  if (revealTargets.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------------
   * Formulario de contacto
   * Nota de integración: este bloque simula el envío en el cliente.
   * Para producción, sustituir el `setTimeout` por un fetch() a un
   * endpoint (Formspree, backend propio, o CRM vía webhook).
   * --------------------------------------------------------------- */
  var form = document.querySelector("#contact-form");
  if (form) {
    var successBox = document.querySelector("#form-success");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var submitBtn = form.querySelector("button[type='submit']");
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando…";

      // Punto de integración con backend / CRM / email transaccional.
      window.setTimeout(function () {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        if (successBox) {
          successBox.classList.add("is-visible");
          successBox.setAttribute("tabindex", "-1");
          successBox.focus();
        }
      }, 600);
    });
  }
})();
