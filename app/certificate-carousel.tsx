"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import styles from "./certificate-carousel.module.css";

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(motionQuery).matches;
}

export default function CertificateCarousel({
  children,
  labels,
}: {
  children: ReactNode[];
  labels: string[];
}) {
  // The server snapshot keeps every certificate accessible until hydration.
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getReducedMotion, () => null);
  const enhanced = reducedMotion !== null;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const swipe = useRef<{ id: number; x: number; y: number } | null>(null);
  const ignoreClick = useRef(false);
  const id = useId();
  const count = children.length;
  const active = count ? index % count : 0;
  const playing = enhanced && !reducedMotion && !paused && count > 1;

  useEffect(() => {
    if (enhanced) viewport.current?.scrollTo({ left: 0, behavior: "instant" });
  }, [enhanced]);

  useEffect(() => {
    const element = viewport.current;
    if (!element || !playing || hovered) return;

    let inView = false;
    let timer: ReturnType<typeof setInterval> | undefined;

    function syncTimer() {
      clearInterval(timer);
      if (!inView || document.visibilityState !== "visible") return;

      timer = setInterval(() => {
        // Recheck at the tick so a preference/tab change cannot race the cleanup.
        if (document.visibilityState === "visible" && !getReducedMotion()) {
          setIndex((current) => (current + 1) % count);
        }
      }, 2000);
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncTimer();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", syncTimer);

    return () => {
      clearInterval(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncTimer);
    };
  }, [count, hovered, playing]);

  function navigate(next: number) {
    if (!count) return;
    setPaused(true);
    // Do not leave focus inside a slide that is about to become inert.
    if (viewport.current?.contains(document.activeElement)) {
      viewport.current.focus({ preventScroll: true });
    }
    setIndex((next + count) % count);
  }

  if (!count) return null;

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Sertifikat"
      aria-roledescription={enhanced ? "karusel" : undefined}
      data-enhanced={enhanced}
      data-reduced-motion={reducedMotion}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        // Pointer focus must not turn a click on Pause into a click on Play.
        if (event.target.matches(":focus-visible")) setPaused(true);
      }}
    >
      {count > 1 && (
        <div className={styles.controls} aria-hidden={!enhanced} inert={!enhanced}>
          <button
            type="button"
            className={`${styles.button} ${styles.playback}`}
            aria-controls={`${id}-slides`}
            aria-disabled={reducedMotion === true}
            aria-label={
              reducedMotion
                ? "Putar otomatis tidak tersedia karena preferensi kurangi gerakan"
                : playing
                  ? "Jeda pergantian otomatis"
                  : "Mulai pergantian otomatis"
            }
            onClick={() => {
              if (!getReducedMotion()) setPaused((current) => !current);
            }}
          >
            {playing ? "Jeda" : "Putar"}
          </button>

          <div className={styles.navigation}>
            <button
              type="button"
              className={styles.button}
              aria-label="Sertifikat sebelumnya"
              aria-controls={`${id}-slides`}
              onClick={() => navigate(active - 1)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>

            <div className={styles.dots} role="group" aria-label="Pilih sertifikat">
              {children.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  type="button"
                  className={`${styles.button} ${styles.dot}`}
                  aria-label={`Tampilkan sertifikat ${slideIndex + 1}: ${labels[slideIndex] ?? `Sertifikat ${slideIndex + 1}`}`}
                  aria-current={active === slideIndex ? "true" : undefined}
                  aria-controls={`${id}-slide-${slideIndex}`}
                  onClick={() => navigate(slideIndex)}
                >
                  {slideIndex + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              className={styles.button}
              aria-label="Sertifikat berikutnya"
              aria-controls={`${id}-slides`}
              onClick={() => navigate(active + 1)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div
        ref={viewport}
        id={`${id}-slides`}
        className={styles.viewport}
        tabIndex={0}
        role="group"
        aria-label="Daftar sertifikat, geser ke samping atau gunakan tombol panah"
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          const next = {
            ArrowLeft: active - 1,
            ArrowRight: active + 1,
            Home: 0,
            End: count - 1,
          }[event.key];
          if (next !== undefined) {
            event.preventDefault();
            navigate(next);
          }
        }}
        onPointerDown={(event) => {
          ignoreClick.current = false;
          if (!event.isPrimary || event.pointerType === "mouse") return;
          setPaused(true);
          swipe.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
        }}
        onPointerUp={(event) => {
          const start = swipe.current;
          swipe.current = null;
          if (!start || start.id !== event.pointerId) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            ignoreClick.current = true;
            navigate(active + (dx < 0 ? 1 : -1));
          }
        }}
        onPointerCancel={() => {
          swipe.current = null;
        }}
        onClickCapture={(event) => {
          if (ignoreClick.current) {
            event.preventDefault();
            event.stopPropagation();
            ignoreClick.current = false;
          }
        }}
      >
        <div
          className={styles.track}
          style={enhanced ? { transform: `translateX(-${active * 100}%)` } : undefined}
        >
          {children.map((child, slideIndex) => (
            <div
              key={slideIndex}
              id={`${id}-slide-${slideIndex}`}
              className={styles.slide}
              role="group"
              aria-roledescription={enhanced ? "slide" : undefined}
              aria-label={`${slideIndex + 1} dari ${count}: ${labels[slideIndex] ?? `Sertifikat ${slideIndex + 1}`}`}
              aria-hidden={enhanced && active !== slideIndex ? true : undefined}
              inert={enhanced && active !== slideIndex}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <p className={styles.status} aria-live={playing && !hovered ? "off" : "polite"} aria-atomic="true">
        {enhanced ? `Sertifikat ${active + 1} dari ${count}: ${labels[active] ?? ""}` : ""}
      </p>
    </div>
  );
}
