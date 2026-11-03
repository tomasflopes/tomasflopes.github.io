export const profile = {
  name: "Tomás Lopes",
  role: "Backend software engineer",
  location: "Espinho, Portugal",
  email: "tomas050302@gmail.com",
  github: "https://github.com/tomasflopes",
  linkedin: "https://www.linkedin.com/in/tomasflopes/",
};

export type Role = {
  title: string;
  period: string;
  points: string[];
};

export type Job = {
  company: string;
  context?: string;
  roles: Role[];
};

export const work: Job[] = [
  {
    company: "Blip",
    context: "Porto",
    roles: [
      {
        title: "Software Engineer",
        period: "May 2026 – now",
        points: [
          "Design and build backend features in Java and Scala, on Spring and Kafka, across a distributed microservice platform.",
          "Lead technical planning and coordinate delivery with other teams for features that span 7 services.",
          "Review code, own deployments, and automate operational chores with Python.",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Jun 2025 – Apr 2026",
        points: [
          "Built backend services with Java, Kafka and Cassandra, with a focus on scalability and reliable integration between services.",
        ],
      },
      {
        title: "Application Engineering Intern",
        period: "Feb 2024 – Jun 2025",
        points: [
          "Restructured an Apache Storm cluster, cutting its resource usage by 50%.",
        ],
      },
    ],
  },
  {
    company: "Critical Manufacturing",
    context: "Summer internship",
    roles: [
      {
        title: "Software Developer Intern",
        period: "Jun – Sep 2023",
        points: [
          "Built a dashboard for analysing product test suites, used by the team and by clients.",
        ],
      },
    ],
  },
];

export type Teaching = {
  title: string;
  org: string;
  period: string;
  text: string;
};

export const teaching: Teaching[] = [
  {
    title: "Guest Assistant Professor",
    org: "Departamento de Engenharia Informática, ISEP",
    period: "Sep 2026 – now",
    text: "Practical classes for Algorithms and Programming. First-year students, hands-on exercises, code feedback and assessment.",
  },
  {
    title: "Git workshops",
    org: "ISEP",
    period: "Dec 2023 – Dec 2025",
    text: "Hands-on version control sessions for first-year Computer Engineering students.",
  },
  {
    title: "President",
    org: "Núcleo de Estudantes de Informática do ISEP",
    period: "Aug 2023 – Jun 2024",
    text: "Ran the computer engineering student association: a team of 60+ people, plus talks, workshops and events with the Porto tech community.",
  },
];

export type Project = {
  name: string;
  year: string;
  text: string;
  stack: string[];
  links: { label: string; href: string }[];
  /** Shown instead of links, e.g. for private work in progress. */
  status?: string;
};

export const projects: Project[] = [
  {
    name: "AntiRecurso",
    year: "2023 – 2025",
    text: "Exam prep platform for ISEP students, built with the student association. Multiple-choice quizzes across many subjects, used by more than 1,000 students. I was its main contributor and wrote the Python crawler that collected the 8,000+ questions behind it.",
    stack: ["TypeScript", "Python", "Docker"],
    links: [
      { label: "Live", href: "https://antirecurso.nei-isep.org" },
      {
        label: "Source",
        href: "https://github.com/Nucleo-Estudantes-Informatica-ISEP/antirecurso",
      },
    ],
  },
  {
    name: "RobDroneGo",
    year: "2023",
    text: "Fleet management for robots and drones moving around a university campus, built by a team of five as the integrative project of my degree's fifth semester. Domain-driven services in Node.js and .NET, a Prolog planner that sequences tasks with a genetic algorithm, and a 3D campus view in Three.js. I was the top contributor.",
    stack: ["TypeScript", "C#", "Prolog", "MongoDB", "Three.js"],
    links: [{ label: "Source", href: "https://github.com/miseEnPlace-dev/lapr5" }],
  },
  {
    name: "Looplane",
    year: "2026",
    text: "Short programming challenges for students. Inputs are generated per student and answers are checked against reference solvers, so it only ever compares output text and never runs submitted code.",
    stack: ["Next.js", "PostgreSQL", "Docker"],
    links: [{ label: "Source", href: "https://github.com/tomasflopes/looplane" }],
  },
  {
    name: "Progno",
    year: "2026",
    text: "A personal finance tracker for transactions, categories and recurring entries. The backend follows an onion architecture, with a type-safe tRPC API validated by Zod, and sign-in through Google or GitHub.",
    stack: ["Fastify", "tRPC", "Prisma", "React"],
    links: [],
    status: "In progress",
  },
  {
    name: "Damas",
    year: "2026",
    text: "Spanish checkers in the browser, written in plain TypeScript with the game rules covered by tests.",
    stack: ["TypeScript", "Jest"],
    links: [{ label: "Source", href: "https://github.com/tomasflopes/damas" }],
  },
  {
    name: "EA FC 24 bracket",
    year: "2023",
    text: "Bracket drawer for a two-day gaming tournament held at ISEP.",
    stack: ["Next.js", "Tailwind"],
    links: [
      { label: "Live", href: "https://eafc-24-tournament-bracket.vercel.app" },
      {
        label: "Source",
        href: "https://github.com/tomasflopes/eafc-24-tournament-bracket",
      },
    ],
  },
  {
    name: "Sampi",
    year: "2020",
    text: "My final high school project: a mobile app for organising sports tournaments with friends, from sign-ups to results.",
    stack: ["React Native", "Node.js", "MongoDB"],
    links: [{ label: "Source", href: "https://github.com/tomasflopes/sampi" }],
  },
];

export const education = [
  {
    title: "MSc Software Engineering",
    org: "Instituto Superior de Engenharia do Porto",
    period: "2025 – now",
  },
  {
    title: "BSc Computer Engineering",
    org: "Instituto Superior de Engenharia do Porto",
    period: "2021 – 2024",
    note: "Final grade 17/20",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "Scala", "Python", "TypeScript", "SQL"] },
  { group: "Backend", items: ["Spring", "Kafka", "Cassandra", "Node.js", "Docker"] },
  { group: "Frontend", items: ["React", "Next.js"] },
];
