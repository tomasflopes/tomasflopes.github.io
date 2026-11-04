import type { ReactElement } from "react";

export type StoryMeta = {
  stationId: string;
  title: string;
  dek: string;
  year: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  stats?: { value: string; label: string }[];
};

export type Story = StoryMeta & {
  slug: string;
  content: ReactElement;
};
