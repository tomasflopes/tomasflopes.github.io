import { CopyEmail, ThemeToggle } from "./client";
import { TheLine } from "./line";
import { Hero, MotionRoot, Reveal, ScrollProgress } from "./motion";
import { profile, projects, skills } from "../content";

const nav = [
  { href: "#line", label: "The line" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
      <path d="M3 9 9 3M4.5 3H9v4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Home() {
  return (
    <MotionRoot>
      <ScrollProgress />
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="mark">
            Tomás Lopes<span className="mark-dot">.</span>
          </a>
          <nav aria-label="Sections">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top" className="wrap">
        <Hero
          meta={[profile.role]}
          lede={
            <p className="lede">
              At{" "}
              <a href="https://www.blip.pt" className="inline">
                Blip
              </a>{" "}
              I&rsquo;m a backend engineer, building Java and Scala services that talk over Kafka.
              On my own projects I go <span className="hl">fullstack</span>, from the database to
              the UI, because I care more about solving the problem than about the stack. I also
              teach first-year programming at ISEP.
            </p>
          }
          links={
            <ul className="hero-links">
              <li>
                <a href={`mailto:${profile.email}`}>Email me</a>
              </li>
              <li>
                <a href={profile.github}>
                  GitHub <Arrow />
                </a>
              </li>
              <li>
                <a href={profile.linkedin}>
                  LinkedIn <Arrow />
                </a>
              </li>
            </ul>
          }
        />

        <section id="line" className="line-section" aria-labelledby="line-title">
          <header className="line-head">
            <Reveal>
              <p className="section-label">The line</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="line-title" className="statement">
                Backend is my day job. Fullstack is how I build{" "}
                <span className="hl">everything else</span>.
              </h2>
            </Reveal>
          </header>
          <Reveal delay={0.12}>
            <TheLine />
          </Reveal>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <Reveal className="section-side">
            <h2 id="projects-title" className="section-label">
              Projects
            </h2>
          </Reveal>
          <div className="section-body">
            <ul className="rows">
              {projects.map((project, i) => (
                <Reveal as="li" key={project.name} className="row" delay={Math.min(i, 3) * 0.05}>
                  <span className="period">{project.year}</span>
                  <div className="row-main">
                    <h3>{project.name}</h3>
                    <p>{project.text}</p>
                    <p className="stack">{project.stack.join(" · ")}</p>
                  </div>
                  <div className="row-links">
                    {project.status && <span className="status">{project.status}</span>}
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <p className="aside">
                Every December I do{" "}
                <a className="inline" href="https://github.com/tomasflopes/aoc-2025">
                  Advent of Code
                </a>{" "}
                in Python, and lately{" "}
                <a className="inline" href="https://github.com/tomasflopes/everybody-codes">
                  Everybody Codes
                </a>{" "}
                too.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="tools" className="section" aria-labelledby="tools-title">
          <Reveal className="section-side">
            <h2 id="tools-title" className="section-label">
              Tools I use most
            </h2>
          </Reveal>
          <Reveal className="section-body">
            <dl className="skills">
              {skills.map((group) => (
                <div key={group.group}>
                  <dt>{group.group}</dt>
                  <dd>{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="wrap">
          <Reveal>
            <p className="section-label">Next chapter</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="contact-lead">Have something in mind? Say hello.</p>
          </Reveal>
          <Reveal delay={0.16}>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="contact-row">
              <CopyEmail email={profile.email} />
              <a href={profile.github}>
                GitHub <Arrow />
              </a>
              <a href={profile.linkedin}>
                LinkedIn <Arrow />
              </a>
            </div>
          </Reveal>
          <p className="colophon">
            <span>© {new Date().getFullYear()} Tomás Lopes</span>
            <span>Built with Next.js and Motion</span>
          </p>
        </div>
      </footer>
    </MotionRoot>
  );
}
