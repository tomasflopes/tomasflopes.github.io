# tomasflopes.github.io

Personal site, live at [tomasflopes.github.io](https://tomasflopes.github.io).

```bash
npm install
npm run dev
npm run build
```

## Writing a story

Each project story is a Markdown file in `content/stories/`. The top of the file holds the details (title, stack, links, stats) and the rest is normal Markdown. A diagram is a one-line tag like `<CheckingDiagram />`, defined in `src/stories/components.tsx`.

To add one: create `content/stories/<slug>.mdx` with the same frontmatter as the others, set `story: "<slug>"` on its project in `src/content.ts`, and it gets its own page, a link on the line's board and a "Next story" link.
