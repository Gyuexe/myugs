"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import styles from "./technology-marquee.module.css";

export default function TechnologyMarquee({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const id = useId();

  useEffect(() => {
    const element = root.current;
    if (!element || !("IntersectionObserver" in window)) return;

    let inView = false;
    const syncVisibility = () => {
      element.dataset.visible = String(inView && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncVisibility();
    });
    observer.observe(element);
    element.dataset.enhanced = "true";
    document.addEventListener("visibilitychange", syncVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncVisibility);
      delete element.dataset.enhanced;
      delete element.dataset.visible;
    };
  }, []);

  return (
    <div ref={root} className={styles.marquee} data-paused={paused}>
      <div className={styles.toolbar}>
        <p>Bahasa, framework, sistem operasi & alat bantu</p>
        <button
          type="button"
          className={styles.pause}
          aria-controls={id}
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Putar animasi logo" : "Jeda animasi logo"}
        >
          {paused ? "Putar" : "Jeda"}
        </button>
      </div>
      <div className={styles.viewport} id={id}>
        <div className={styles.track}>
          <div className={styles.group}>{children}</div>
          {/* The identical second group makes the loop seamless, not a second accessible list. */}
          <div className={styles.group} aria-hidden="true" inert>{children}</div>
        </div>
      </div>
    </div>
  );
}
