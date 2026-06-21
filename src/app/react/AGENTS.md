# react/ - React page components (CSR, via @expressjs-kusto/react)

Holds the React pages rendered by the `@expressjs-kusto/react` extension (activated in
`src/app/extensions/react.ts`). The extension's default `pagesDir` is `react/pages`, so page
components live under `react/pages/`.

## Convention

```
src/app/react/
└── pages/
    ├── Home.tsx        # default-exports a React component
    └── admin/Dashboard.tsx   # nested file -> page key "admin/Dashboard"
```

- Each `*.tsx`/`*.jsx`/`*.ts`/`*.js` file default-exports a component; the file path becomes
  the page key (`Home`, `admin/Dashboard`). `*.d.ts` / `*.test.*` / `*.spec.*` are skipped.
- Render a page from a route with `router.GET_REACT('Home', { props, title })` (see
  `src/app/routes/.../route.ts`). Props are serialized into the shell and passed to the component.
- These files are **bundled by the extension's esbuild** (client IIFE), not by the project's
  `tsc`/webpack — the project `tsconfig` `include` is `**/*.ts` only, so `.tsx` pages are outside
  server typecheck/build. `@types/react` is installed for IDE support.
- CSR only (v1): pages render in the browser; an in-page `react-router` `BrowserRouter` is provided.

Note: the framework's default Helmet CSP must allow the shell's inline bootstrap script
(`scriptSrc: 'unsafe-inline'`) — configured in `src/app/routes/middleware.ts`.
