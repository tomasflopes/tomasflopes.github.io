import type { MDXComponents } from "mdx/types";

function QuestionPipeline() {
  return (
    <figure className="story-figure">
      <svg
        viewBox="0 0 720 250"
        role="img"
        aria-label="Questions came from two sources: the old Android app, reverse engineered from serialized Java objects, and teachers' course material, collected with Python scripts. Both fed the AntiRecurso database of more than 8,000 questions."
      >
        <defs>
          <marker
            id="ar-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 z" className="fig-arrowhead" />
          </marker>
        </defs>

        <g className="fig-node">
          <rect x="10" y="30" width="190" height="64" rx="10" />
          <text x="105" y="58" textAnchor="middle" className="fig-title">
            Old Android app
          </text>
          <text x="105" y="78" textAnchor="middle" className="fig-sub">
            serialized Java objects
          </text>
        </g>
        <g className="fig-node">
          <rect x="10" y="156" width="190" height="64" rx="10" />
          <text x="105" y="184" textAnchor="middle" className="fig-title">
            Teachers&rsquo; material
          </text>
          <text x="105" y="204" textAnchor="middle" className="fig-sub">
            on the course platform
          </text>
        </g>

        <g className="fig-step">
          <rect x="262" y="30" width="180" height="64" rx="10" />
          <text x="352" y="58" textAnchor="middle" className="fig-title">
            Reverse engineering
          </text>
          <text x="352" y="78" textAnchor="middle" className="fig-sub">
            no source code
          </text>
        </g>
        <g className="fig-step">
          <rect x="262" y="156" width="180" height="64" rx="10" />
          <text x="352" y="184" textAnchor="middle" className="fig-title">
            Python scripts
          </text>
          <text x="352" y="204" textAnchor="middle" className="fig-sub">
            one per course
          </text>
        </g>

        <g className="fig-target">
          <rect x="510" y="88" width="200" height="74" rx="12" />
          <text x="610" y="118" textAnchor="middle" className="fig-title">
            AntiRecurso
          </text>
          <text x="610" y="140" textAnchor="middle" className="fig-sub">
            8,000+ questions
          </text>
        </g>

        <path
          d="M200 62 H254"
          className="fig-link"
          markerEnd="url(#ar-arrow)"
        />
        <path
          d="M200 188 H254"
          className="fig-link"
          markerEnd="url(#ar-arrow)"
        />
        <path
          d="M442 62 C476 62 476 112 502 112"
          className="fig-link"
          markerEnd="url(#ar-arrow)"
        />
        <path
          d="M442 188 C476 188 476 138 502 138"
          className="fig-link"
          markerEnd="url(#ar-arrow)"
        />
      </svg>
      <figcaption>Where the first questions came from.</figcaption>
    </figure>
  );
}

function ServicesDiagram() {
  return (
    <figure className="story-figure">
      <svg
        viewBox="0 0 720 250"
        role="img"
        aria-label="The four parts of RobDroneGo. A web app talks to a master data service built with Node.js and MongoDB, and to a tasks service built with .NET. A planner, written in Prolog and exposed as an HTTP server, is connected to both services."
      >
        <defs>
          <marker
            id="rdg-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 z" className="fig-arrowhead" />
          </marker>
        </defs>

        <g className="fig-node">
          <rect x="10" y="89" width="170" height="72" rx="10" />
          <text x="95" y="118" textAnchor="middle" className="fig-title">
            Web app
          </text>
          <text x="95" y="140" textAnchor="middle" className="fig-sub">
            React · Three.js
          </text>
        </g>
        <g className="fig-node">
          <rect x="270" y="20" width="190" height="72" rx="10" />
          <text x="365" y="49" textAnchor="middle" className="fig-title">
            Master data
          </text>
          <text x="365" y="71" textAnchor="middle" className="fig-sub">
            Node.js · MongoDB
          </text>
        </g>
        <g className="fig-node">
          <rect x="270" y="158" width="190" height="72" rx="10" />
          <text x="365" y="187" textAnchor="middle" className="fig-title">
            Tasks
          </text>
          <text x="365" y="209" textAnchor="middle" className="fig-sub">
            .NET
          </text>
        </g>
        <g className="fig-target">
          <rect x="530" y="89" width="180" height="72" rx="12" />
          <text x="620" y="118" textAnchor="middle" className="fig-title">
            Planner
          </text>
          <text x="620" y="140" textAnchor="middle" className="fig-sub">
            Prolog · HTTP server
          </text>
        </g>

        <path
          d="M180 112 C222 112 226 56 262 56"
          className="fig-link"
          markerEnd="url(#rdg-arrow)"
        />
        <path
          d="M180 138 C222 138 226 194 262 194"
          className="fig-link"
          markerEnd="url(#rdg-arrow)"
        />
        <path d="M460 56 C498 56 498 118 530 118" className="fig-link" />
        <path d="M460 194 C498 194 498 132 530 132" className="fig-link" />
      </svg>
      <figcaption>
        The four parts, simplified. Each one was its own project.
      </figcaption>
    </figure>
  );
}

function CheckingDiagram() {
  return (
    <figure className="story-figure">
      <svg
        viewBox="0 0 720 260"
        role="img"
        aria-label="How Looplane checks an answer. A generator creates a unique input for each student. The student solves it with their own code on their own machine and submits only the answer as text. The checker compares that text with the answer from a reference solver, and never runs the student's code."
      >
        <defs>
          <marker
            id="lp-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 z" className="fig-arrowhead" />
          </marker>
        </defs>

        <g className="fig-node">
          <rect x="10" y="30" width="150" height="64" rx="10" />
          <text x="85" y="58" textAnchor="middle" className="fig-title">
            Generator
          </text>
          <text x="85" y="78" textAnchor="middle" className="fig-sub">
            input per student
          </text>
        </g>
        <g className="fig-node">
          <rect x="196" y="30" width="150" height="64" rx="10" />
          <text x="271" y="58" textAnchor="middle" className="fig-title">
            Student&rsquo;s input
          </text>
          <text x="271" y="78" textAnchor="middle" className="fig-sub">
            a text file
          </text>
        </g>
        <g className="fig-step">
          <rect x="382" y="30" width="150" height="64" rx="10" />
          <text x="457" y="58" textAnchor="middle" className="fig-title">
            Their own code
          </text>
          <text x="457" y="78" textAnchor="middle" className="fig-sub">
            their machine
          </text>
        </g>
        <g className="fig-node">
          <rect x="568" y="30" width="142" height="64" rx="10" />
          <text x="639" y="58" textAnchor="middle" className="fig-title">
            The answer
          </text>
          <text x="639" y="78" textAnchor="middle" className="fig-sub">
            just text
          </text>
        </g>

        <g className="fig-node">
          <rect x="382" y="166" width="150" height="64" rx="10" />
          <text x="457" y="194" textAnchor="middle" className="fig-title">
            Reference solver
          </text>
          <text x="457" y="214" textAnchor="middle" className="fig-sub">
            same input
          </text>
        </g>
        <g className="fig-target">
          <rect x="568" y="166" width="142" height="64" rx="12" />
          <text x="639" y="194" textAnchor="middle" className="fig-title">
            Checker
          </text>
          <text x="639" y="214" textAnchor="middle" className="fig-sub">
            do they match?
          </text>
        </g>

        <path
          d="M160 62 H188"
          className="fig-link"
          markerEnd="url(#lp-arrow)"
        />
        <path
          d="M346 62 H374"
          className="fig-link"
          markerEnd="url(#lp-arrow)"
        />
        <path
          d="M532 62 H560"
          className="fig-link"
          markerEnd="url(#lp-arrow)"
        />
        <path
          d="M271 94 V198 H374"
          className="fig-link"
          markerEnd="url(#lp-arrow)"
        />
        <path
          d="M532 198 H560"
          className="fig-link"
          markerEnd="url(#lp-arrow)"
        />
        <path
          d="M639 94 V158"
          className="fig-link"
          markerEnd="url(#lp-arrow)"
        />
      </svg>
      <figcaption>
        The student&rsquo;s code never reaches the server. Only its answer does.
      </figcaption>
    </figure>
  );
}

export const components: MDXComponents = {
  QuestionPipeline,
  ServicesDiagram,
  CheckingDiagram,
  a: ({ href = "", ...props }) => (
    <a className="inline" href={href} {...props} />
  ),
};
