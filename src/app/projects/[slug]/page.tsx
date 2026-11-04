import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stations } from "../../../content";
import { getStories, storyHref } from "../../../stories";
import { Arrow, SiteHeader } from "../../header";
import { ArrivingTrain } from "../../line";
import { MotionRoot, Reveal, ScrollProgress } from "../../motion";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getStories()).map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = (await getStories()).find((s) => s.slug === slug);
  if (!story) return {};
  return {
    title: `${story.title} · Tomás Lopes`,
    description: story.dek,
    openGraph: { title: `${story.title} · Tomás Lopes`, description: story.dek },
  };
}

const kindLabel = { work: "Work", projects: "Project", both: "Work + projects" } as const;

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const stories = await getStories();
  const index = stories.findIndex((s) => s.slug === slug);
  const story = stories[index];
  if (!story) notFound();

  const stationIndex = stations.findIndex((s) => s.id === story.stationId);
  const station = stations[stationIndex];
  const nextStory = stories[index + 1];

  return (
    <MotionRoot>
      <ScrollProgress />
      <SiteHeader />

      <main className="wrap story">
        <ArrivingTrain name={station?.name ?? story.title} kind={station?.line ?? "projects"} />

        <header className="story-head">
          <Reveal>
            <p className="story-kicker">
              <span>Station {String(stationIndex + 1).padStart(2, "0")}</span>
              {station && <span>{kindLabel[station.line]}</span>}
              <span>{story.year}</span>
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1>{story.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="story-dek">{story.dek}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="story-meta">
              <div>
                <dt>My part</dt>
                <dd>{story.role}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>{story.stack.join(" · ")}</dd>
              </div>
              <div>
                <dt>Links</dt>
                <dd className="story-meta-links">
                  {story.links.map((l) => (
                    <a key={l.href} href={l.href}>
                      {l.label} <Arrow />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </header>

        {story.stats && (
          <Reveal>
            <ul className="story-stats">
              {story.stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <article className="prose">
          {story.content}
        </article>

        <nav className="story-nav" aria-label="Story navigation">
          <a href="/#line" className="story-back">
            ← Back to the line
          </a>
          {nextStory && (
            <a href={storyHref(nextStory.slug)} className="story-next">
              Next story: {nextStory.title} →
            </a>
          )}
        </nav>
      </main>

      <footer className="story-footer">
        <div className="wrap colophon">
          <span>© {new Date().getFullYear()} Tomás Lopes</span>
          <span>Built with Next.js and Motion</span>
        </div>
      </footer>
    </MotionRoot>
  );
}
