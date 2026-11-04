import { compileMDX } from "next-mdx-remote/rsc";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { stations } from "../content";
import { components } from "./components";
import type { Story, StoryMeta } from "./types";

const dir = path.join(process.cwd(), "content", "stories");

let cache: Promise<Story[]> | undefined;

export function getStories(): Promise<Story[]> {
  cache ??= load();
  return cache;
}

async function load(): Promise<Story[]> {
  const files = readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const stories = await Promise.all(
    files.map(async (file) => {
      const source = readFileSync(path.join(dir, file), "utf8");
      const { content, frontmatter } = await compileMDX<StoryMeta>({
        source,
        components,
        options: { parseFrontmatter: true },
      });
      return {
        ...frontmatter,
        slug: file.replace(/\.mdx$/, ""),
        content,
      } satisfies Story;
    }),
  );
  const position = (s: Story) =>
    stations.findIndex((st) => st.id === s.stationId);
  return stories.sort((a, b) => position(a) - position(b));
}

export const storyHref = (slug: string) => `/projects/${slug}/`;
