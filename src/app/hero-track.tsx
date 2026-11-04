"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Train, WHEEL_R } from "./line";

/** How far left of the platform the train waits, out of sight, before pulling in. */
const OFFSCREEN = -560;

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The hero's call to action: a train parked at a platform. Riding it sends the train off
 * and scrolls to the line below; it pulls back in once the visitor has moved on.
 */
export function HeroTrack() {
  const x = useMotionValue(OFFSCREEN);
  const wheelTurn = useTransform(x, (v) => (v / WHEEL_R) * (180 / Math.PI));
  const [running, setRunning] = useState(true);
  const busy = useRef(false);

  useEffect(() => {
    if (reducedMotion()) {
      x.set(0);
      setRunning(false);
      return;
    }
    const arrive = animate(x, 0, {
      duration: 1.9,
      delay: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => setRunning(false),
    });
    return () => arrive.stop();
  }, [x]);

  const ride = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("line");
    if (reducedMotion()) {
      target?.scrollIntoView({ behavior: "auto" });
      return;
    }
    if (busy.current) return;
    busy.current = true;
    setRunning(true);
    window.setTimeout(() => target?.scrollIntoView({ behavior: "smooth" }), 300);
    animate(x, window.innerWidth + 400, {
      duration: 1.2,
      ease: [0.55, 0, 1, 0.45],
      onComplete: () => {
        x.set(OFFSCREEN);
        window.setTimeout(() => {
          animate(x, 0, {
            duration: 1.9,
            ease: [0.22, 1, 0.36, 1],
            onComplete: () => {
              setRunning(false);
              busy.current = false;
            },
          });
        }, 1500);
      },
    });
  };

  return (
    <div className="hero-track">
      <div className="ht-ballast" />
      <div className="ht-sleepers" />
      <div className="ht-rail" />
      <div className="ht-platform" />

      <motion.div className="ht-train" style={{ x }} onClick={ride} aria-hidden="true">
        <div className="ht-train-inner">
          <svg viewBox="-100 -72 205 72" className={running ? "train is-running" : "train"}>
            <Train wheelTurn={wheelTurn} />
          </svg>
        </div>
      </motion.div>

      <motion.a
        href="#line"
        className="ht-sign"
        onClick={ride}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <span className="ht-sign-board">
          Ride the line
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="ht-post ht-post-l" />
        <span className="ht-post ht-post-r" />
      </motion.a>
    </div>
  );
}
