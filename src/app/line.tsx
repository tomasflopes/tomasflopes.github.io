"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type AnimationPlaybackControls,
  type MotionValue,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { stations } from "../content";

// Side-view railway, in SVG units drawn at 1:1. The map is a long panorama
// that pans to follow the train.
const STEP = 175;
const PAD_X = 170;
const W = PAD_X * 2 + STEP * (stations.length - 1);
const H = 270;
/** The scene starts below this line; nothing is drawn above the signs. */
const VIEW_Y = 74;
const RAIL_Y = 196;
const PLATFORM_W = 132;
const WHEEL_R = 6;

const xAt = (v: number) => PAD_X + v * STEP;

const years = stations
  .map((s, i) => ({ year: s.year, x: xAt(i) }))
  .filter((y, i, all) => i === 0 || all[i - 1].year !== y.year);

const signWidth = (name: string) => Math.max(84, Math.round(name.length * 8.6 + 30));

/** Gentle hills behind the line, generated once so they are the same on every render. */
const hills = (() => {
  let d = `M0 ${RAIL_Y - 30}`;
  const heights = [44, 72, 38, 86, 54, 30, 78, 48, 92, 40, 66, 52, 84, 36, 70, 46];
  const span = W / heights.length;
  heights.forEach((h, i) => {
    const x = (i + 1) * span;
    d += ` Q${x - span / 2} ${RAIL_Y - 30 - h} ${x} ${RAIL_Y - 30}`;
  });
  return `${d} V${RAIL_Y} H0 Z`;
})();

const ease = [0.65, 0, 0.35, 1] as const;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function TheLine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const entered = useRef(false);

  const progress = useMotionValue(-1.6);
  const trainX = useTransform(progress, xAt);
  // Wheels roll by the distance travelled; hills drift slower for depth.
  const wheelTurn = useTransform(trainX, (x) => (x / WHEEL_R) * (180 / Math.PI));
  const hillsX = useTransform(trainX, (x) => x * 0.25);
  const travelled = useTransform(progress, (v) => Math.max(0, Math.min(1, xAt(v) / W)));

  const [at, setAt] = useState(0);
  const [target, setTarget] = useState(0);
  const [passed, setPassed] = useState(-1);
  const [dir, setDir] = useState(1);
  const [running, setRunning] = useState(false);
  const [listView, setListView] = useState(false);
  const moving = at !== target;

  const follow = useCallback((v: number) => {
    const el = scrollerRef.current;
    const svg = svgRef.current;
    if (!el || !svg) return;
    const box = svg.getBoundingClientRect();
    const scroller = el.getBoundingClientRect();
    const left = box.left - scroller.left + el.scrollLeft;
    el.scrollLeft = left + xAt(v) * (box.width / W) - el.clientWidth / 2;
  }, []);

  useMotionValueEvent(progress, "change", (v) => {
    setPassed(Math.floor(v + 0.02));
    follow(v);
  });

  useEffect(() => {
    follow(progress.get());
    const onResize = () => follow(progress.get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [follow, progress, listView]);

  const go = useCallback(
    (to: number) => {
      const next = Math.max(0, Math.min(stations.length - 1, to));
      const from = progress.get();
      if (next === from) return;
      controls.current?.stop();
      setDir(next >= from ? 1 : -1);
      setTarget(next);
      setRunning(true);
      controls.current = animate(progress, next, {
        duration: prefersReducedMotion() ? 0 : Math.min(1 + Math.abs(next - from) * 0.35, 3.2),
        ease,
        onComplete: () => {
          setAt(next);
          setRunning(false);
        },
      });
    },
    [progress],
  );

  // The train pulls into the first station the first time the map is seen.
  useEffect(() => {
    if (inView && !entered.current) {
      entered.current = true;
      setRunning(true);
      controls.current = animate(progress, 0, {
        duration: prefersReducedMotion() ? 0 : 1.8,
        ease: [0.22, 1, 0.36, 1],
        onComplete: () => setRunning(false),
      });
    }
  }, [inView, progress]);

  useEffect(() => {
    if (!inView || listView) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(target + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(target - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, listView, go, target]);

  // The board flips to the destination as soon as the train departs.
  const shown = stations[target];
  const next = stations[target + 1];

  return (
    <div ref={sectionRef} className="line">
      <div className="line-toolbar">
        <ul className="legend" aria-label="Map legend">
          <li>
            <span className="swatch swatch-work" /> Work stop <span className="muted">backend</span>
          </li>
          <li>
            <span className="swatch swatch-proj" /> Project stop{" "}
            <span className="muted">fullstack</span>
          </li>
          <li>
            <span className="swatch swatch-both" /> Both
          </li>
        </ul>
        <button type="button" className="text-button" onClick={() => setListView((v) => !v)}>
          {listView ? "Back to the line" : "Show as a list"}
        </button>
      </div>

      {listView ? (
        <ol className="line-list">
          {stations.map((s) => (
            <li key={s.id} className={`line-list-item line-${s.line}`}>
              <span className="period">{s.year}</span>
              <div>
                <h3>{s.title}</h3>
                {s.org && <p className="muted">{s.org}</p>}
                {s.text && <p>{s.text}</p>}
                {s.points && (
                  <ul className="board-points">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <>
          <div ref={scrollerRef} className="map-scroller">
            <svg
              ref={svgRef}
              className="map"
              viewBox={`0 ${VIEW_Y} ${W} ${H - VIEW_Y}`}
              style={{ aspectRatio: `${W} / ${H - VIEW_Y}` }}
              role="group"
              aria-label="A railway line through my career and projects. Use the stations or the arrow keys to travel."
            >
              <motion.path className="hills" d={hills} style={{ x: hillsX }} />

              {/* Ballast, sleepers and rail, seen from the side */}
              <path
                className="ballast"
                d={`M0 ${RAIL_Y + 11} H${W} V${RAIL_Y + 26} H0 Z`}
              />
              <rect
                className="sleepers"
                x={0}
                y={RAIL_Y + 5}
                width={W}
                height={7}
                fill="url(#sleeper-pattern)"
              />
              <defs>
                <pattern
                  id="sleeper-pattern"
                  width={26}
                  height={7}
                  patternUnits="userSpaceOnUse"
                >
                  <rect className="sleeper" x={4} y={0} width={18} height={7} rx={1} />
                </pattern>
              </defs>
              <rect className="rail" x={0} y={RAIL_Y} width={W} height={5} />
              <motion.rect
                className="rail-travelled"
                x={0}
                y={RAIL_Y}
                width={W}
                height={2}
                style={{ scaleX: travelled, transformBox: "fill-box", originX: 0 }}
              />

              {/* Buffer stops at both ends */}
              {[22, W - 22].map((bx) => (
                <g key={bx} className="buffer">
                  <rect x={bx - 9} y={RAIL_Y - 26} width={18} height={26} rx={2} />
                  <rect className="buffer-stripe" x={bx - 9} y={RAIL_Y - 20} width={18} height={4} />
                  <rect className="buffer-stripe" x={bx - 9} y={RAIL_Y - 11} width={18} height={4} />
                </g>
              ))}

              {years.map((yr) => (
                <g key={yr.year} className="map-year">
                  <rect x={yr.x - 1} y={RAIL_Y + 32} width={2} height={8} />
                  <text x={yr.x} y={RAIL_Y + 58} textAnchor="middle">
                    {yr.year}
                  </text>
                </g>
              ))}

              {stations.map((s, i) => {
                const x = xAt(i);
                const sw = signWidth(s.name);
                return (
                  <g
                    key={s.id}
                    className={[
                      "stop",
                      `stop-${s.line}`,
                      i <= passed && "is-reached",
                      i === at && !moving && "is-here",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    role="button"
                    tabIndex={0}
                    aria-label={`${s.year}, ${s.title}`}
                    aria-current={i === at ? "location" : undefined}
                    onClick={() => go(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        go(i);
                      }
                    }}
                  >
                    <rect className="hit" x={x - STEP / 2} y={60} width={STEP} height={RAIL_Y - 50} />
                    <rect
                      className="platform"
                      x={x - PLATFORM_W / 2}
                      y={RAIL_Y - 24}
                      width={PLATFORM_W}
                      height={24}
                    />
                    <rect
                      className="platform-edge"
                      x={x - PLATFORM_W / 2}
                      y={RAIL_Y - 24}
                      width={PLATFORM_W}
                      height={4}
                    />
                    <line className="sign-post" x1={x - 26} x2={x - 26} y1={116} y2={RAIL_Y - 24} />
                    <line className="sign-post" x1={x + 26} x2={x + 26} y1={116} y2={RAIL_Y - 24} />
                    <g className="sign">
                      <rect x={x - sw / 2} y={88} width={sw} height={30} rx={5} />
                      <text x={x} y={108} textAnchor="middle">
                        {s.name}
                      </text>
                    </g>
                  </g>
                );
              })}

              <motion.g style={{ x: trainX }} aria-hidden="true" className="train-pos">
                <g transform={`translate(0 ${RAIL_Y})`}>
                  <g className={running ? "train is-running" : "train"}>
                    <g transform={`scale(${dir} 1)`}>
                      <Train wheelTurn={wheelTurn} />
                    </g>
                  </g>
                </g>
              </motion.g>
            </svg>
          </div>

          <div className="board" aria-live="polite">
            <div className="board-top">
              <span>
                {moving ? "Arriving" : "Now at"} · {String(target + 1).padStart(2, "0")}/
                {String(stations.length).padStart(2, "0")}
              </span>
              <span className={`board-line board-line-${shown.line}`}>
                {shown.line === "work" ? "Work" : shown.line === "projects" ? "Project" : "Work + projects"}
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={shown.id}
                className="board-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <p className="board-year">{shown.year}</p>
                <h3 className="board-title">
                  <Flap text={shown.title} />
                </h3>
                {shown.org && <p className="board-org">{shown.org}</p>}
                {shown.text && <p className="board-text">{shown.text}</p>}
                {shown.points && (
                  <ul className="board-points">
                    {shown.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
                {shown.links && (
                  <p className="board-links">
                    {shown.links.map((l) => (
                      <a key={l.href} href={l.href}>
                        {l.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="board-controls">
              <button
                type="button"
                className="board-btn"
                onClick={() => go(target - 1)}
                disabled={target === 0}
                aria-label="Previous station"
              >
                ←
              </button>
              {next ? (
                <button type="button" className="board-btn board-btn-go" onClick={() => go(target + 1)}>
                  Next stop: {next.name} →
                </button>
              ) : (
                <a className="board-btn board-btn-go" href="#contact">
                  End of the line, for now. Say hello →
                </a>
              )}
              <span className="board-hint">or use ← → keys</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** Side view of a two-car electric train, facing right, wheels resting on y = 0. */
function Train({ wheelTurn }: { wheelTurn: MotionValue<number> }) {
  const wheels = [-84, -68, -30, -14, 14, 30, 66, 82];
  return (
    <g className="train-shape">
      {/* pantograph */}
      <path className="pantograph" d="M30 -50 L42 -64 L54 -50 M34 -64 H50" />
      {/* carriage */}
      <rect className="train-body" x={-98} y={-50} width={92} height={40} rx={9} />
      {[-88, -72, -56, -40, -24].map((wx) => (
        <rect key={wx} className="train-window" x={wx} y={-42} width={11} height={12} rx={2.5} />
      ))}
      <rect className="train-skirt" x={-98} y={-17} width={92} height={7} />
      {/* coupler */}
      <rect className="train-coupler" x={-7} y={-20} width={8} height={4} rx={1} />
      {/* locomotive */}
      <path className="train-body" d="M0 -50 H66 C84 -50 96 -36 99 -18 V-10 H0 Z" />
      <rect className="train-window" x={8} y={-42} width={11} height={12} rx={2.5} />
      <rect className="train-door" x={26} y={-44} width={12} height={27} rx={2} />
      <rect className="train-window" x={44} y={-42} width={11} height={12} rx={2.5} />
      <path className="train-windscreen" d="M62 -42 H70 C80 -42 88 -36 92 -27 H62 Z" />
      <rect className="train-skirt" x={0} y={-17} width={99} height={7} />
      <circle className="train-light" cx={96} cy={-13.5} r={2.2} />
      {/* bogies and wheels */}
      {[-76, -22, 22, 74].map((bx) => (
        <rect key={bx} className="train-bogie" x={bx - 14} y={-11} width={28} height={4} rx={2} />
      ))}
      {wheels.map((cx) => (
        <motion.g key={cx} style={{ x: cx, y: -WHEEL_R, rotate: wheelTurn }}>
          <circle className="train-wheel" r={WHEEL_R} />
          <line className="train-spoke" x1={-WHEEL_R + 1.5} x2={WHEEL_R - 1.5} y1={0} y2={0} />
        </motion.g>
      ))}
    </g>
  );
}

/** Departure-board style title: each letter flips into place. */
function Flap({ text }: { text: string }) {
  return (
    <span className="flap" aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden="true"
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: i * 0.018, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}
