"use client";

import { useEffect } from "react";

export default function EntranceMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches || document.hidden) continue;

        const element = entry.target as HTMLElement;
        // Animate only at entry; content stays visible if JS fails or is disabled.
        const animation = element.animate(
          [{ opacity: 0, translate: "0 14px" }, { opacity: 1, translate: "0 0" }],
          {
            duration: 760,
            delay: Math.min(Number(element.dataset.reveal || 0), 120),
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "backwards",
          },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { rootMargin: "0px 0px 40px 0px", threshold: 0 });

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      // Hero animates from first paint in CSS; don't hide already-visible content on hydration.
      if (element.closest("#intro")) return;
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) return;
      observer.observe(element);
    });

    const cancelAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    // Never leave a focused control fading in, or keep motion after a preference change.
    document.addEventListener("focusin", cancelAnimations);
    document.addEventListener("visibilitychange", cancelAnimations);
    preference.addEventListener("change", cancelAnimations);

    return () => {
      observer.disconnect();
      cancelAnimations();
      document.removeEventListener("focusin", cancelAnimations);
      document.removeEventListener("visibilitychange", cancelAnimations);
      preference.removeEventListener("change", cancelAnimations);
    };
  }, []);

  return null;
}
