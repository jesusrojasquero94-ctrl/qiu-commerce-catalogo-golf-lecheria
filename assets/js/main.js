/**
 * Qiu Commerce x Qiu Agency - Landing page de la propuesta comercial
 * Escuela de Golf en Lecheria.
 *
 * Anima con un fade-in las tarjetas y secciones marcadas con la clase
 * ".fade-up" a medida que entran en el viewport, usando IntersectionObserver
 * para no penalizar el rendimiento con listeners de scroll.
 */
(function () {
  "use strict";

  const targets = document.querySelectorAll(".fade-up");

  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
})();
