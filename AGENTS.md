# AGENTS.md

Personal site/blog of Tilen Faganel. Gatsby 5 + React 18, styled-components, deployed to Netlify (`gatsby-plugin-netlify`). Package manager is npm (package-lock.json). README.md is stale starter boilerplate — ignore it.

## Commands

- Node version is pinned to 24.19.0 via `.mise.toml` / `.nvmrc` (mise-managed).
- `npm run develop` — dev server
- `npm run build` — production build (also the only real verification step; there are no tests, lint, or typecheck)
- `npm run clean` — clears `.cache` and `public`; use if the build behaves stale
- `npm run format` — Prettier on `src/**/*.js` only

Prettier config: no semicolons, single quotes, trailing commas everywhere (`.prettierrc`). Match this style in all edits.

## Architecture notes

- Styling uses **styled-system v5 props** on primitive components in `src/components/Primitives/` (`Box`, `Flex`, `Heading`, `Image`, links, etc.). Use these instead of raw HTML elements/styled-components where possible. Theme values come from `src/utils/theme.js`.
- Typography is handled globally by `gatsby-plugin-typography` (config in `src/utils/typography.js`) — don't add per-component global font styles unless intentional.
- Site metadata (title, siteUrl) lives in `gatsby-config.js` and is consumed by `src/components/Seo`.
- **Dark mode is CSS-variable driven and automatic** (follows `prefers-color-scheme`, no JS/toggle). All `theme.js` colors are `var(--*)` references; the actual light/dark values are defined in `overrideThemeStyles` in `src/utils/typography.js`. To change a palette color, edit the variable definitions there, not `theme.js`.

## Gotchas

- `gatsby-node.js` deletes `punycode` webpack externals during `build-html` to silence Node deprecation warnings — do not remove it.
- **Blog posts are currently not rendered as pages**: there is no `createPages` in `gatsby-node.js`, the `pageQuery` in `src/templates/blog-post.js` is commented out, and the homepage doesn't list posts. `src/templates/blog-post.js` is dead code as-is; publishing a post requires wiring up `createPages`.
- Post content convention: one folder per post at `src/pages/posts/YYYY-MM-DD-slug/` containing `index.md` (frontmatter: title, date, author id, image, timeToRead) plus its cover image. Authors live in `src/pages/posts/authors.yaml`, joined to posts via the `mapping` in `gatsby-config.js` (`frontmatter.author` → `AuthorsYaml`).
