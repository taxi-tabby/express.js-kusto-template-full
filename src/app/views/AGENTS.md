# views/ - Server templates + React pages (CSR)

This folder holds two kinds of view files:

1. **EJS server-side templates** (`.ejs`) — legacy, rendered via `res.render('name', data)`.
2. **React pages** (`.tsx`/`.jsx`) for the `@expressjs-kusto/react` extension, plus its
   Tailwind entry `app.css`. This is the extension's default `pagesDir` **and** `cssEntry`
   (`views` / `views/app.css`), so React pages and their styles live here by convention.

## React pages (CSR, @expressjs-kusto/react)

- Each `*.tsx` default-exports a component; the file name is the page key
  (`Home.tsx` → `Home`, used by `router.GET_REACT('Home')`). Nested dirs → dotted keys.
  Samples: `Home.tsx` (landing) and `Demo.tsx` — the latter demonstrates client-side
  react-router navigation, served at `/demo` and `/demo/:view` (the `[view]` route keeps
  sub-path refreshes safe). Pages may use react-router (`NavLink`/`Routes`/`useLocation`)
  since the extension mounts every page inside a `BrowserRouter`.
- `app.css` is the Tailwind v4 input (`@import "tailwindcss";` + `@theme`). The extension
  compiles it with `@tailwindcss/postcss` (scanning `views/**` for class names) and serves
  the result at `/__kusto_react/client.css`, linked into every shell — **no build script**.
- `.tsx` pages are bundled by the extension's **esbuild**, not the project `tsc`/webpack
  (project `tsconfig` `include` is `**/*.ts` only). `@types/react` is installed for IDE.
- Web fonts / Font Awesome used by pages are injected via the extension `head` option in
  `src/app/extensions/react.ts`; the Helmet CSP in `src/app/routes/middleware.ts` must allow
  the shell's inline bootstrap script and those CDN hosts.

## EJS templates

The framework still supports EJS (`Core` sets the `ejs` view engine with `views/` as the
templates dir), so `.ejs` files can be added here and rendered with `res.render`:

```typescript
res.render('name', { FRAMEWORK_URL: '...', NODE_ENV: process.env.NODE_ENV });
```
- Variables: `<%= variableName %>`, conditionals: `<% if (...) { %>`.
- The old `index.ejs` landing page was removed; the live landing page is now `Home.tsx` (CSR).
