import { ThemeToggle } from "./client";

const nav = [
  { href: "/#line", label: "The line" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a href="/" className="mark">
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
  );
}

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
      <path d="M3 9 9 3M4.5 3H9v4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
