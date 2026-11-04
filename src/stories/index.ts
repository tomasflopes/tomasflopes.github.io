import { antirecurso } from "./antirecurso";
import type { Story } from "./types";

/** In the order they appear on the line. Add a story here to give it a page. */
export const stories: Story[] = [antirecurso];

export const storyFor = (stationId: string) => stories.find((s) => s.stationId === stationId);

export const storyHref = (slug: string) => `/projects/${slug}/`;
