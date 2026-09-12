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
        if (preference.matches) continue;

        const element = entry.target as HTMLElement;
        // Animate only at entry; content stays visible if JS fails or is disabled.
        const animation = element.animate(
          [{ opacity: 0, translate: "0 24px" }, { opacity: 1, translate: "0 0" }],
          {
            duration: 650,
            delay: Number(element.dataset.reveal || 0),
            easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
            fill: "backwards",
          },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { rootMargin: "0px 0px -24px 0px", threshold: 0 });

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    const cancelAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    // Never leave a focused control fading in, or keep motion after a preference change.
    document.addEventListener("focusin", cancelAnimations);
    preference.addEventListener("change", cancelAnimations);

    return () => {
      observer.disconnect();
      cancelAnimations();
      document.removeEventListener("focusin", cancelAnimations);
      preference.removeEventListener("change", cancelAnimations);
    };
  }, []);

  return null;
}
