import type { Story } from "./types";

function QuestionPipeline() {
  return (
    <figure className="story-figure">
      <svg
        viewBox="0 0 720 250"
        role="img"
        aria-label="Questions came from two sources: the old Android app, reverse engineered from serialized Java objects, and teachers' course material, collected with Python scripts. Both fed the AntiRecurso database of more than 8,000 questions."
      >
        <defs>
          <marker id="ar-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" className="fig-arrowhead" />
          </marker>
        </defs>

        <g className="fig-node">
          <rect x="10" y="30" width="190" height="64" rx="10" />
          <text x="105" y="58" textAnchor="middle" className="fig-title">Old Android app</text>
          <text x="105" y="78" textAnchor="middle" className="fig-sub">serialized Java objects</text>
        </g>
        <g className="fig-node">
          <rect x="10" y="156" width="190" height="64" rx="10" />
          <text x="105" y="184" textAnchor="middle" className="fig-title">Teachers&rsquo; material</text>
          <text x="105" y="204" textAnchor="middle" className="fig-sub">on the course platform</text>
        </g>

        <g className="fig-step">
          <rect x="262" y="30" width="180" height="64" rx="10" />
          <text x="352" y="58" textAnchor="middle" className="fig-title">Reverse engineering</text>
          <text x="352" y="78" textAnchor="middle" className="fig-sub">no source code</text>
        </g>
        <g className="fig-step">
          <rect x="262" y="156" width="180" height="64" rx="10" />
          <text x="352" y="184" textAnchor="middle" className="fig-title">Python scripts</text>
          <text x="352" y="204" textAnchor="middle" className="fig-sub">one per course</text>
        </g>

        <g className="fig-target">
          <rect x="510" y="88" width="200" height="74" rx="12" />
          <text x="610" y="118" textAnchor="middle" className="fig-title">AntiRecurso</text>
          <text x="610" y="140" textAnchor="middle" className="fig-sub">8,000+ questions</text>
        </g>

        <path d="M200 62 H254" className="fig-link" markerEnd="url(#ar-arrow)" />
        <path d="M200 188 H254" className="fig-link" markerEnd="url(#ar-arrow)" />
        <path d="M442 62 C476 62 476 112 502 112" className="fig-link" markerEnd="url(#ar-arrow)" />
        <path d="M442 188 C476 188 476 138 502 138" className="fig-link" markerEnd="url(#ar-arrow)" />
      </svg>
      <figcaption>Where the first questions came from.</figcaption>
    </figure>
  );
}

export const antirecurso: Story = {
  slug: "antirecurso",
  stationId: "antirecurso",
  title: "AntiRecurso",
  dek: "An exam prep platform for ISEP students that started as a way to study for one networking exam.",
  year: "2023 – 2025",
  role: "Frontend rewrite, most of the features after the MVP, and the question crawler",
  stack: ["React", "Next.js", "PHP", "TypeScript", "Python"],
  links: [
    { label: "Live", href: "https://antirecurso.nei-isep.org" },
    { label: "Source", href: "https://github.com/Nucleo-Estudantes-Informatica-ISEP/antirecurso" },
  ],
  stats: [
    { value: "2 weeks", label: "from idea to the first version" },
    { value: "1,000+", label: "exams solved on the day of the first exam" },
    { value: "8,000+", label: "questions collected by the crawler" },
  ],
  Body: () => (
    <>
      <section>
        <h2>The app everyone used and nobody could update</h2>
        <p>
          There was already an AntiRecurso before ours: an Android app made by a former ISEP
          student (shout out, it got a lot of people through exams). It was also showing its age.
          It only ran on Android, it worked offline so the questions never changed, and plenty of
          them were out of date.
        </p>
        <p>
          At NEI, the computer engineering student association, we decided to rebuild it as a web
          app. The honest reason: we had a Computer Networks exam in the second semester of our
          second year and wanted something better to study with. We shipped the first version in
          two weeks.
        </p>
        <p>
          That version only had one course. On the day of the exam, students solved more than
          1,000 practice exams on it. It was the first time I saw something I built used by that
          many people at once.
        </p>
        <p>
          After that, every exam season went the same way: instead of studying, we worked on the
          platform. It was a great excuse. The exams turned out fine, and so did the platform.
        </p>
      </section>

      <section>
        <h2>Getting the questions in</h2>
        <p>
          A quiz platform without questions is useless, so the first real problem was seeding it.
        </p>
        <p>
          The old app stored its questions as serialized Java objects. Without the original source
          code, which I didn&rsquo;t have, those bytes don&rsquo;t mean much. I reverse engineered
          the app until I could read them and pull out the questions and answers.
        </p>
        <p>
          For everything else I wrote a lot of Python scripts that collected questions and answers
          from each teacher&rsquo;s own material on the course platform. At first that felt a bit
          shady, so we asked for permission, and everyone was fine with it.
        </p>
        <QuestionPipeline />
      </section>

      <section>
        <h2>Rebuilding it while people used it</h2>
        <p>
          The first version was PHP from top to bottom. I rewrote the whole frontend in React and
          built almost every feature that came after the MVP, on both the frontend and the
          backend. The changelog has the full list; these are the ones students leaned on most:
        </p>
        <ul>
          <li>A realistic exam mode, graded the way the real exam is.</li>
          <li>Practice modes with only new questions, or only the ones you got wrong.</li>
          <li>Statistics per course, a leaderboard, and a calculator for the grade you still need.</li>
          <li>Dark mode, avatars, password recovery, and a page for shared course summaries.</li>
        </ul>
      </section>

      <section>
        <h2>What I&rsquo;d do differently</h2>
        <p>
          The hardest part wasn&rsquo;t traffic, it was bad data. A lot of questions, mostly the
          ones from the old app, had the wrong answer marked as correct. They needed moderation,
          but we kept shipping features for students and pushed the back office to the last
          semester. Until then, I fixed answers by editing the database by hand. Terrible idea.
        </p>
        <p>
          I&rsquo;d also pick a different language for the backend. A rewrite in TypeScript
          started in the platform&rsquo;s second semester live, and it never got finished.
        </p>
      </section>

      <section>
        <h2>Where it is now</h2>
        <p>
          I no longer work on it day to day. These days I help with the occasional code review and
          talk architecture with the newer members of NEI, who keep it running.
        </p>
      </section>
    </>
  ),
};
