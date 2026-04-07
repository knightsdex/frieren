import { S as m } from "./swiper.MOSjD326.js";
import { N as u } from "./navigation.CIQZ-99j.js";
function r() {
  const t = document.querySelector(".movie-swiper");
  if (t) {
    const e = getComputedStyle(t),
      o = parseInt(e.getPropertyValue("--space-between-sp")),
      l = parseInt(e.getPropertyValue("--space-between-pc")),
      n = parseInt(t.closest(".movie")?.dataset.movieCount ?? "0"),
      c = t.querySelectorAll(".swiper-slide"),
      s = document.querySelector(".movie-nav"),
      a = (i) => {
        s && (s.style.display = i.enabled ? "flex" : "none"),
          c.forEach((p, d) => {
            p.style.display = i.enabled || d < n ? "" : "none";
          });
      };
    new m(".movie-swiper", {
      modules: [u],
      slidesPerView: "auto",
      spaceBetween: o,
      centeredSlides: !0,
      loop: n > 1,
      enabled: n > 1,
      navigation: { prevEl: ".movie-prev", nextEl: ".movie-next" },
      breakpoints: { 768: { spaceBetween: l } },
      on: { afterInit: a, breakpoint: a },
    });
  }
  document.querySelectorAll(".movie-thumb").forEach((e) => {
    e.addEventListener("click", () => {
      const o = e.dataset.youtubeId;
      o &&
        document.dispatchEvent(
          new CustomEvent("video-modal:open", { detail: { youtubeId: o } })
        );
    });
  });
}
requestAnimationFrame(() => r());
document.addEventListener("astro:after-swap", () =>
  requestAnimationFrame(() => r())
);
