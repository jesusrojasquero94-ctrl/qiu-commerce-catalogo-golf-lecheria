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



/* ---------- Galeria de fotos por producto ---------- */
(function () {
    "use strict";

   function buildGalleries() {
         document.querySelectorAll(".p-visual").forEach(function (visual) {
                 if (visual.dataset.built) return;
                 visual.dataset.built = "1";

                                                              var badge = visual.querySelector(".p-badge");
                 var icon = visual.querySelector("svg");
                 visual.classList.add("p-gallery");

                                                              var slidesWrap = document.createElement("div");
                 slidesWrap.className = "p-slides";

                                                              var slide0 = document.createElement("div");
                 slide0.className = "p-slide";
                 if (icon) slide0.appendChild(icon);
                 slidesWrap.appendChild(slide0);

                                                              for (var i = 1; i <= 4; i++) {
                                                                        var s = document.createElement("div");
                                                                        s.className = "p-slide";
                                                                        s.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke="#9FB4C4" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.6"/><path d="M3 16l5-4 4 3 4-5 5 6"/></svg><span class="ph-tag">Foto pendiente ' + (i + 1) + '/5</span>';
                                                                        slidesWrap.appendChild(s);
                                                              }

                                                              visual.innerHTML = "";
                 visual.appendChild(slidesWrap);
                 if (badge) visual.appendChild(badge);

                                                              var prev = document.createElement("button");
                 prev.className = "p-nav prev";
                 prev.type = "button";
                 prev.setAttribute("aria-label", "Foto anterior");
                 prev.innerHTML = "&#8249;";
                 var next = document.createElement("button");
                 next.className = "p-nav next";
                 next.type = "button";
                 next.setAttribute("aria-label", "Foto siguiente");
                 next.innerHTML = "&#8250;";
                 visual.appendChild(prev);
                 visual.appendChild(next);

                                                              var dots = document.createElement("div");
                 dots.className = "p-dots";
                 for (var d0 = 0; d0 < 5; d0++) {
                           var d = document.createElement("span");
                           d.className = "dot" + (d0 === 0 ? " active" : "");
                           d.dataset.i = String(d0);
                           dots.appendChild(d);
                 }
                 visual.appendChild(dots);

                                                              var current = 0;
                 var total = 5;
                 function goTo(i) {
                           current = ((i % total) + total) % total;
                           slidesWrap.style.transform = "translateX(-" + (current * 100) + "%)";
                           dots.querySelectorAll(".dot").forEach(function (dot, di) {
                                       dot.classList.toggle("active", di === current);
                           });
                 }
                 prev.addEventListener("click", function () { goTo(current - 1); });
                 next.addEventListener("click", function () { goTo(current + 1); });
                 dots.querySelectorAll(".dot").forEach(function (dot) {
                           dot.addEventListener("click", function () { goTo(parseInt(dot.dataset.i, 10)); });
                 });
         });
   }
    buildGalleries();

   var modal = document.getElementById("productModal");
    if (modal) {
          var modalTitle = modal.querySelector(".modal-title");
          var modalDesc = modal.querySelector(".modal-desc-wrap");
          var modalVideoWrap = modal.querySelector(".modal-video");
          var closeBtn = modal.querySelector(".modal-close");

      function openModal(btn) {
              modalTitle.textContent = btn.dataset.title || "";
              modalDesc.innerHTML = '<p class="modal-desc">' + (btn.dataset.desc || "") + "</p>";
              var videoId = btn.dataset.video;
              if (videoId) {
                        modalVideoWrap.style.display = "block";
                        modalVideoWrap.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '" title="Video del producto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
              } else {
                        modalVideoWrap.style.display = "none";
                        modalVideoWrap.innerHTML = "";
              }
              modal.classList.add("open");
              document.body.style.overflow = "hidden";
      }

      function closeModal() {
              modal.classList.remove("open");
              modalVideoWrap.innerHTML = "";
              document.body.style.overflow = "";
      }

      document.querySelectorAll(".btn-ver-mas").forEach(function (btn) {
              btn.addEventListener("click", function () { openModal(btn); });
      });
          closeBtn.addEventListener("click", closeModal);
          modal.addEventListener("click", function (e) {
                  if (e.target === modal) closeModal();
          });
          document.addEventListener("keydown", function (e) {
                  if (e.key === "Escape") closeModal();
          });
    }
})();
