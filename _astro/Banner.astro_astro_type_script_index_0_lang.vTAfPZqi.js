import { S as d } from "./swiper.MOSjD326.js";
function r() {
  const e = document.querySelector(".banner-swiper");
  if (!e) return;
  const n = getComputedStyle(e),
    a = parseInt(n.getPropertyValue("--space-between-sp")),
    o = parseInt(n.getPropertyValue("--space-between-pc")),
    t = parseInt(e.closest(".banner")?.dataset.bannerCount ?? "0"),
    i = e.querySelectorAll(".swiper-slide"),
    s = (p) => {
      i.forEach((c, l) => {
        c.style.display = p.enabled || l < t ? "" : "none";
      });
    };
  new d(".banner-swiper", {
    slidesPerView: 1.5,
    spaceBetween: a,
    centeredSlides: !0,
    loop: t > 1,
    enabled: t > 1,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: o,
        centeredSlides: !1,
        enabled: t > 3,
      },
    },
    on: { afterInit: s, breakpoint: s },
  });
}
requestAnimationFrame(() => r());
document.addEventListener("astro:after-swap", () =>
  requestAnimationFrame(() => r())
);
