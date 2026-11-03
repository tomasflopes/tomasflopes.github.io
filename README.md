# tomasflopes.github.io

Personal site, live at [tomasflopes.github.io](https://tomasflopes.github.io).

Next.js with static export, no UI library. All the content lives in [`src/content.ts`](src/content.ts).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

Pushing to `main` builds the site and publishes `out/` to the `gh-pages` branch.
