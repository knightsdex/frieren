import {
  g as P,
  i as C,
  e as A,
  a as g,
  b as O,
  S as w,
} from "./swiper.MOSjD326.js";
import { N as S } from "./navigation.CIQZ-99j.js";
function T({ swiper: e, extendParams: o, on: a }) {
  o({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let l = !1,
    p = !1;
  e.thumbs = { swiper: null };
  function h() {
    const t = e.thumbs.swiper;
    return !t || t.destroyed
      ? !1
      : t.params.virtual && t.params.virtual.enabled;
  }
  function m() {
    const t = e.thumbs.swiper;
    if (!t || t.destroyed) return;
    const s = t.clickedIndex,
      r = t.clickedSlide;
    if (
      (r && r.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof s > "u" ||
      s === null
    )
      return;
    let i;
    t.params.loop
      ? (i = parseInt(
          t.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (i = s),
      e.params.loop ? e.slideToLoop(i) : e.slideTo(i);
  }
  function n() {
    const { thumbs: t } = e.params;
    if (l) return !1;
    l = !0;
    const s = e.constructor;
    if (t.swiper instanceof s) {
      if (t.swiper.destroyed) return (l = !1), !1;
      (e.thumbs.swiper = t.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    } else if (C(t.swiper)) {
      const r = Object.assign({}, t.swiper);
      Object.assign(r, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new s(r)),
        (p = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", m),
      h() &&
        e.thumbs.swiper.on("virtualUpdate", () => {
          d(!1, { autoScroll: !1 });
        }),
      !0
    );
  }
  function d(t, s) {
    const r = e.thumbs.swiper;
    if (!r || r.destroyed) return;
    let i = 1;
    const f = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (i = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (i = 1),
      (i = Math.floor(i)),
      r.slides.forEach((c) => c.classList.remove(f)),
      r.params.loop || h())
    )
      for (let c = 0; c < i; c += 1)
        A(r.slidesEl, `[data-swiper-slide-index="${e.realIndex + c}"]`).forEach(
          (u) => {
            u.classList.add(f);
          }
        );
    else
      for (let c = 0; c < i; c += 1)
        r.slides[e.realIndex + c] && r.slides[e.realIndex + c].classList.add(f);
    (s?.autoScroll ?? !0) && b(t ? 0 : void 0);
  }
  function b(t) {
    const s = e.thumbs.swiper;
    if (!s || s.destroyed) return;
    const r =
        s.params.slidesPerView === "auto"
          ? s.slidesPerViewDynamic()
          : s.params.slidesPerView,
      i = e.params.thumbs.autoScrollOffset,
      f = i && !s.params.loop;
    if (e.realIndex !== s.realIndex || f) {
      const c = s.activeIndex;
      let u, v;
      if (s.params.loop) {
        const y = s.slides.find(
          (I) => I.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
        );
        (u = s.slides.indexOf(y)),
          (v = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (u = e.realIndex), (v = u > e.previousIndex ? "next" : "prev");
      f && (u += v === "next" ? i : -1 * i),
        s.visibleSlidesIndexes &&
          s.visibleSlidesIndexes.indexOf(u) < 0 &&
          (s.params.centeredSlides
            ? u > c
              ? (u = u - Math.floor(r / 2) + 1)
              : (u = u + Math.floor(r / 2) - 1)
            : u > c && s.params.slidesPerGroup,
          s.slideTo(u, t));
    }
  }
  a("beforeInit", () => {
    const { thumbs: t } = e.params;
    if (!(!t || !t.swiper))
      if (typeof t.swiper == "string" || t.swiper instanceof HTMLElement) {
        const s = P(),
          r = () => {
            const f =
              typeof t.swiper == "string"
                ? s.querySelector(t.swiper)
                : t.swiper;
            if (f && f.swiper) (t.swiper = f.swiper), n(), d(!0);
            else if (f) {
              const c = `${e.params.eventsPrefix}init`,
                u = (v) => {
                  (t.swiper = v.detail[0]),
                    f.removeEventListener(c, u),
                    n(),
                    d(!0),
                    t.swiper.update(),
                    e.update();
                };
              f.addEventListener(c, u);
            }
            return f;
          },
          i = () => {
            if (e.destroyed) return;
            r() || requestAnimationFrame(i);
          };
        requestAnimationFrame(i);
      } else n(), d(!0);
  }),
    a("slideChange update resize observerUpdate", () => {
      d();
    }),
    a("setTransition", (t, s) => {
      const r = e.thumbs.swiper;
      !r || r.destroyed || r.setTransition(s);
    }),
    a("beforeDestroy", () => {
      const t = e.thumbs.swiper;
      !t || t.destroyed || (p && t.destroy());
    }),
    Object.assign(e.thumbs, { init: n, update: d });
}
function L(e) {
  const {
    effect: o,
    swiper: a,
    on: l,
    setTranslate: p,
    setTransition: h,
    overwriteParams: m,
    perspective: n,
    recreateShadows: d,
    getEffectParams: b,
  } = e;
  l("beforeInit", () => {
    if (a.params.effect !== o) return;
    a.classNames.push(`${a.params.containerModifierClass}${o}`),
      n && n() && a.classNames.push(`${a.params.containerModifierClass}3d`);
    const s = m ? m() : {};
    Object.assign(a.params, s), Object.assign(a.originalParams, s);
  }),
    l("setTranslate _virtualUpdated", () => {
      a.params.effect === o && p();
    }),
    l("setTransition", (s, r) => {
      a.params.effect === o && h(r);
    }),
    l("transitionEnd", () => {
      if (a.params.effect === o && d) {
        if (!b || !b().slideShadows) return;
        a.slides.forEach((s) => {
          s.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((r) => r.remove());
        }),
          d();
      }
    });
  let t;
  l("virtualUpdate", () => {
    a.params.effect === o &&
      (a.slides.length || (t = !0),
      requestAnimationFrame(() => {
        t && a.slides && a.slides.length && (p(), (t = !1));
      }));
  });
}
function k(e, o) {
  const a = g(o);
  return (
    a !== o &&
      ((a.style.backfaceVisibility = "hidden"),
      (a.style["-webkit-backface-visibility"] = "hidden")),
    a
  );
}
function M({ swiper: e, duration: o, transformElements: a, allSlides: l }) {
  const { activeIndex: p } = e;
  if (e.params.virtualTranslate && o !== 0) {
    let h = !1,
      m;
    (m = a),
      m.forEach((n) => {
        O(n, () => {
          if (h || !e || e.destroyed) return;
          (h = !0), (e.animating = !1);
          const d = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          e.wrapperEl.dispatchEvent(d);
        });
      });
  }
}
function E({ swiper: e, extendParams: o, on: a }) {
  o({ fadeEffect: { crossFade: !1 } }),
    L({
      effect: "fade",
      swiper: e,
      on: a,
      setTranslate: () => {
        const { slides: h } = e,
          m = e.params.fadeEffect;
        for (let n = 0; n < h.length; n += 1) {
          const d = e.slides[n];
          let t = -d.swiperSlideOffset;
          e.params.virtualTranslate || (t -= e.translate);
          let s = 0;
          e.isHorizontal() || ((s = t), (t = 0));
          const r = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(d.progress), 0)
              : 1 + Math.min(Math.max(d.progress, -1), 0),
            i = k(m, d);
          (i.style.opacity = r),
            (i.style.transform = `translate3d(${t}px, ${s}px, 0px)`);
        }
      },
      setTransition: (h) => {
        const m = e.slides.map((n) => g(n));
        m.forEach((n) => {
          n.style.transitionDuration = `${h}ms`;
        }),
          M({ swiper: e, duration: h, transformElements: m, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
const V = 768;
function x() {
  const e = document.querySelector(".character-swiper"),
    o = document.querySelector(".character-thumbs-swiper");
  if (!e || !o) return;
  const a = o.querySelectorAll(".swiper-slide");
  let l,
    p,
    h = null,
    m = 0;
  const n = [];
  function d(r) {
    a.forEach((i, f) => {
      i.classList.toggle("swiper-slide-thumb-active", f === r);
    });
  }
  function b() {
    a.forEach((r, i) => {
      n[i] && r.removeEventListener("click", n[i]);
    }),
      (n.length = 0),
      l && ((m = l.realIndex), l.destroy(!0, !0), (l = void 0)),
      p && (p.destroy(!0, !0), (p = void 0)),
      o.classList.add("swiper"),
      (h = null);
  }
  function t() {
    const r = window.innerWidth >= V,
      i = r ? "pc" : "sp";
    i !== h &&
      (b(),
      (h = i),
      r
        ? (o.classList.remove("swiper"),
          (l = new w(".character-swiper", {
            modules: [S, E],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            rewind: !0,
            initialSlide: m,
            navigation: {
              prevEl: ".character-prev",
              nextEl: ".character-next",
            },
          })),
          a.forEach((f, c) => {
            const u = () => {
              l.slideTo(c), d(c);
            };
            (n[c] = u), f.addEventListener("click", u);
          }),
          l.on("slideChange", () => {
            d(l.realIndex);
          }),
          d(m))
        : ((p = new w(".character-thumbs-swiper", {
            modules: [T],
            slidesPerView: 4,
            spaceBetween: 8,
            watchSlidesProgress: !0,
          })),
          (l = new w(".character-swiper", {
            modules: [S, E, T],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            rewind: !0,
            initialSlide: m,
            navigation: {
              prevEl: ".character-prev",
              nextEl: ".character-next",
            },
            thumbs: { swiper: p },
          }))));
  }
  t();
  let s;
  window.addEventListener("resize", () => {
    clearTimeout(s), (s = setTimeout(t, 200));
  });
}
x();
document.addEventListener("astro:after-swap", x);
