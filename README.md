# Fulstech Website

Corporate website for Fulstech, built as a static Astro site and deployed with
GitHub Pages.

## Local development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run check
npm run build
npm run audit:build
```

The production build targets `https://www.fulstech.com/` with a root base path.
GitHub Pages custom-domain registration and the reviewed DNS cutover are handled
separately from the application build.
