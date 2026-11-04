export const profile = {
  name: "Tomás Lopes",
  role: "Software Engineer · Porto",
  email: "tomaslopes.dev@gmail.com",
  github: "https://github.com/tomasflopes",
  linkedin: "https://www.linkedin.com/in/tomasflopes/",
};

export type Station = {
  id: string;
  name: string;
  year: string;
  line: "work" | "projects" | "both";
  title: string;
  org?: string;
  text?: string;
  points?: string[];
  links?: { label: string; href: string }[];
  current?: boolean;
};

export const stations: Station[] = [
  {
    id: "high-school",
    name: "Colégio de Gaia",
    year: "2017",
    line: "both",
    title: "IT and Multimedia Technologies",
    org: "Colégio de Gaia · Double-certification course",
    text: "High school focused in IT, from 2017 to 2020. Where both lines start.",
  },
  {
    id: "sampi",
    name: "Sampi",
    year: "2020",
    line: "projects",
    title: "Sampi",
    org: "High school final project",
    text: "A mobile app for my friends' Sunday football league: groups, matches and stats. My first fullstack project.",
    links: [{ label: "Source", href: "https://github.com/tomasflopes/sampi" }],
  },
  {
    id: "bsc",
    name: "ISEP",
    year: "2021",
    line: "both",
    title: "BSc Computer Engineering",
    org: "Instituto Superior de Engenharia do Porto",
    text: "Finished in 2024 with a final grade of 17/20.",
  },
  {
    id: "critical",
    name: "Critical",
    year: "2023",
    line: "work",
    title: "Software Developer Intern",
    org: "Critical Manufacturing",
    text: "Built a dashboard for analyzing product test suites, used by the team and by clients.",
  },
  {
    id: "antirecurso",
    name: "AntiRecurso",
    year: "2023",
    line: "projects",
    title: "AntiRecurso",
    org: "NEI-ISEP, the student association I presided over in 2023/24",
    text: "An exam prep platform that grew to more than 1,000 students, plus a Python crawler that collected its 8,000+ questions.",
    links: [
      { label: "Live", href: "https://antirecurso.nei-isep.org" },
      {
        label: "Source",
        href: "https://github.com/Nucleo-Estudantes-Informatica-ISEP/antirecurso",
      },
    ],
  },
  {
    id: "robdronego",
    name: "RobDroneGo",
    year: "2023",
    line: "projects",
    title: "RobDroneGo",
    org: "Degree project (LAPR-5), team of five",
    text: "Fleet management for campus robots and drones: services in Node.js and .NET, a Prolog task planner and a 3D campus view.",
    links: [
      { label: "Source", href: "https://github.com/miseEnPlace-dev/lapr5" },
    ],
  },
  {
    id: "blip-intern",
    name: "Blip",
    year: "2024",
    line: "work",
    title: "Application Engineering Intern",
    org: "Blip",
    text: "Restructured an Apache Storm cluster, cutting its resource usage by 50%.",
  },
  {
    id: "enei",
    name: "ENEI",
    year: "2024",
    line: "projects",
    title: "Head Coordinator, ENEI'25",
    org: "Encontro Nacional de Estudantes de Informática",
    text: "Led the organization of the national meeting of computer science students, run by NEI-ISEP, NIAEFEUP and NCGM. Four days at FEUP and ISEP in April 2025, with 500+ participants, 21 talks, 33 workshops, competitions and a job fair.",
    links: [{ label: "Website", href: "https://www.eneiconf.pt" }],
  },
  {
    id: "blip-associate",
    name: "Associate",
    year: "2025",
    line: "work",
    title: "Associate Software Engineer",
    org: "Blip",
    text: "Backend services with Java, Kafka and Cassandra.",
  },
  {
    id: "msc",
    name: "MSc",
    year: "2025",
    line: "both",
    title: "MSc Software Engineering",
    org: "Instituto Superior de Engenharia do Porto",
    text: "Back at ISEP for a master's, alongside work.",
  },
  {
    id: "looplane",
    name: "Looplane",
    year: "2026",
    line: "projects",
    title: "Looplane",
    org: "Side project",
    text: "Programming challenges for students, with per-student inputs and answers checked against reference solvers.",
    links: [
      { label: "Source", href: "https://github.com/tomasflopes/looplane" },
    ],
  },
  {
    id: "progno",
    name: "Progno",
    year: "2026",
    line: "projects",
    title: "Progno",
    org: "Side project, in progress",
    text: "A personal finance tracker with a typed tRPC API and a layered backend.",
  },
  {
    id: "blip-engineer",
    name: "Engineer",
    year: "2026",
    line: "work",
    title: "Software Engineer",
    org: "Blip",
    points: [
      "Backend features in Java and Scala, on Spring and Kafka.",
      "Technical planning for features that span 7 microservices.",
      "Code reviews, deployments and Python automation.",
    ],
    current: true,
  },
  {
    id: "teaching",
    name: "Teaching",
    year: "2026",
    line: "both",
    title: "Guest Assistant Professor",
    org: "Departamento de Engenharia Informática, ISEP",
    text: "Practical classes of Algorithms and Programming for first-year students.",
    current: true,
  },
];

export type Project = {
  name: string;
  year: string;
  text: string;
  stack: string[];
  links: { label: string; href: string }[];
  status?: string;
  story?: string;
};

export const projects: Project[] = [
  {
    name: "AntiRecurso",
    year: "2023 - 2025",
    text: "Exam prep platform for ISEP students. Multiple-choice quizzes across many subjects, used by more than 1,000 students. I also wrote the Python crawler that collected the 8,000+ questions behind it.",
    stack: ["TypeScript", "Python", "Docker"],
    story: "antirecurso",
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
    text: "Fleet management for robots and drones moving around a university campus, built by a team of five as the integrative project of my degree's fifth semester. Domain-driven services in Node.js and .NET, a Prolog planner that sequences tasks with a genetic algorithm, and a 3D campus view in Three.js.",
    stack: ["TypeScript", "C#", "Prolog", "MongoDB", "Three.js"],
    story: "robdronego",
    links: [
      { label: "Source", href: "https://github.com/miseEnPlace-dev/lapr5" },
    ],
  },
  {
    name: "Looplane",
    year: "2026",
    text: "Short programming challenges for students. Inputs are generated per student and answers are checked against reference solvers, so it only ever compares output text and never runs submitted code.",
    stack: ["Next.js", "PostgreSQL", "Docker"],
    story: "looplane",
    links: [
      { label: "Source", href: "https://github.com/tomasflopes/looplane" },
    ],
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
    name: "Sampi",
    year: "2020",
    text: "My final high school project: a mobile app for my friends' Sunday football league, to keep every match and stat.",
    stack: ["React Native", "Node.js", "MongoDB"],
    story: "sampi",
    links: [{ label: "Source", href: "https://github.com/tomasflopes/sampi" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Java", "Scala", "TypeScript", "Python", "SQL"],
  },
  { group: "Backend", items: ["Spring", "Kafka", "Node.js", "Fastify"] },
  { group: "Data", items: ["Cassandra", "PostgreSQL", "MongoDB"] },
  { group: "Frontend", items: ["React", "Next.js"] },
  { group: "Tooling", items: ["Docker", "GitHub Actions"] },
];
