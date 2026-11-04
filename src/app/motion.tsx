"use client";

import {
  MotionConfig,
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "p";
}) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Component>
  );
}

const word: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1, ease, delay: 0.1 + i * 0.09 } }),
};

export function Hero({
  meta,
  lede,
  links,
}: {
  meta: string[];
  lede: React.ReactNode;
  links: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero-text" style={{ y: textY, opacity: fade }}>
        <motion.p
          className="meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </motion.p>
        <h1 aria-label="Tomás Lopes">
          {["Tomás", "Lopes"].map((w, i) => (
            <span key={w} aria-hidden="true">
              {i > 0 && " "}
              <span className="mask">
                <motion.span custom={i} variants={word} initial="hidden" animate="show">
                  {w}
                </motion.span>
              </span>
            </span>
          ))}
          <motion.span
            className="dot"
            aria-hidden="true"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 14, delay: 0.75 }}
          >
            .
          </motion.span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
        >
          {lede}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
        >
          {links}
        </motion.div>
      </motion.div>

      <motion.figure
        className="portrait"
        style={{ y: photoY }}
        initial={{ clipPath: "inset(100% 0% 0% 0% round 14px)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 14px)" }}
        transition={{ duration: 1.2, ease, delay: 0.3 }}
      >
        <motion.img
          src="/tomas.jpg"
          alt="Tomás Lopes"
          width={460}
          height={460}
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.3 }}
        />
      </motion.figure>

      <motion.a
        href="#line"
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="scroll-cue-line" aria-hidden="true" />
        Ride the line
      </motion.a>
    </section>
  );
}
