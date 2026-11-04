import type { ComponentType } from "react";

export type Story = {
  slug: string;
  /** The station on the line this story belongs to. */
  stationId: string;
  title: string;
  dek: string;
  year: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  stats?: { value: string; label: string }[];
  Body: ComponentType;
};
