import { CopyEmail, LocalTime, ThemeToggle } from "./client";
import { education, profile, projects, skills, teaching, work } from "../content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#teaching", label: "Teaching" },
  { href: "#contact", label: "Contact" },
];

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
      <path d="M3 9 9 3M4.5 3H9v4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-label">
        {label}
      </h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="mark">
            Tomás Lopes
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
        <section className="hero">
          <div className="hero-text">
            <p className="meta">
              <span>{profile.role}</span>
              <span>{profile.location}</span>
              <LocalTime />
            </p>
            <h1>
              Tomás <em>Lopes</em>
            </h1>
            <p className="lede">
              I write backend software at{" "}
              <a href="https://www.blip.pt" className="inline">
                Blip
              </a>{" "}
              in Porto, mostly Java and Scala services that talk to each other over Kafka. I also
              teach first-year programming at ISEP, the school where I did my degree and where
              I&rsquo;m now doing a master&rsquo;s.
            </p>
            <ul className="hero-links">
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
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
          </div>
          <figure className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tomas.jpg" alt="Tomás Lopes" width={460} height={460} />
          </figure>
        </section>

        <Section id="work" label="Work">
          {work.map((job) => (
            <article key={job.company} className="job">
              <header className="job-head">
                <h3>{job.company}</h3>
                {job.context && <span className="muted">{job.context}</span>}
              </header>
              <ol className={job.roles.length > 1 ? "roles roles-track" : "roles"}>
                {job.roles.map((role) => (
                  <li key={role.title} className="role">
                    <div className="role-head">
                      <h4>{role.title}</h4>
                      <span className="period">{role.period}</span>
                    </div>
                    <ul className="points">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </Section>

        <Section id="projects" label="Projects">
          <ul className="rows">
            {projects.map((project) => (
              <li key={project.name} className="row">
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
              </li>
            ))}
          </ul>
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
        </Section>

        <Section id="teaching" label="Teaching & community">
          <ul className="rows">
            {teaching.map((item) => (
              <li key={item.title} className="row">
                <span className="period">{item.period}</span>
                <div className="row-main">
                  <h3>{item.title}</h3>
                  <p className="muted org">{item.org}</p>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="background" label="Background">
          <div className="split">
            <div>
              <h3 className="sub">Education</h3>
              <ul className="plain">
                {education.map((item) => (
                  <li key={item.title}>
                    <div className="role-head">
                      <h4>{item.title}</h4>
                      <span className="period">{item.period}</span>
                    </div>
                    <p className="muted">
                      {item.org}
                      {item.note && <>. {item.note}</>}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="sub">Tools I use most</h3>
              <dl className="skills">
                {skills.map((group) => (
                  <div key={group.group}>
                    <dt>{group.group}</dt>
                    <dd>{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>
      </main>

      <footer id="contact" className="contact">
        <div className="wrap">
          <p className="contact-kicker">Get in touch</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-row">
            <CopyEmail email={profile.email} />
            <a href={profile.github}>
              GitHub <Arrow />
            </a>
            <a href={profile.linkedin}>
              LinkedIn <Arrow />
            </a>
          </div>
          <p className="colophon">
            <span>© {new Date().getFullYear()} Tomás Lopes</span>
            <span>Set in Newsreader and IBM Plex</span>
          </p>
        </div>
      </footer>
    </>
  );
}
