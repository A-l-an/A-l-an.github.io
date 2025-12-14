# Repository Guidelines

## Project Structure & Module Organization
- Entry point: `index.html` at repo root; loads site shell and content blocks.
- Styling: `assets/css/style.css`; keep shared variables at the top and reuse existing utility classes.
- Scripts: `assets/js/script.js` contains UI behavior (sidebar toggle, modals, filters, nav state, form enable/disable).
- Media: `assets/images/` for avatars and icons; `website-demo-image/` for reference screenshots; `assets/paper/` for linked PDFs.
- Hosting is static; avoid adding build-only assets unless necessary.

## Build, Test, and Development Commands
- Local preview (no build step): `python3 -m http.server 4000` then open `http://localhost:4000/index.html`.
- Optional linting pass for HTML/CSS/JS: use your editor’s formatter; there is no bundled toolchain.
- Regenerate screenshots if UI changes: update `website-demo-image/desktop.png` and `.../mobile.png`.

## Coding Style & Naming Conventions
- HTML: 2-space indentation; keep semantic tags; data attributes (`data-sidebar`, `data-filter-item`) drive JS—maintain consistency.
- CSS: prefer existing custom properties; use kebab-case class names; avoid inline styles.
- JS: ES5/ES6 compatible, `'use strict'` at top; prefer `const`/`let`; keep DOM selectors aligned to existing `data-*` hooks instead of new IDs.
- Content: keep copy concise; avoid hard-coding secrets or personal info.

## Testing Guidelines
- No automated test suite; rely on manual checks.
- Verify navigation, sidebar toggle, testimonials modal, filter buttons, and form enable/disable in desktop and mobile widths.
- After content updates, confirm links to PDFs in `assets/paper/` and images resolve without 404s.
- Before sharing, run a quick Lighthouse/DevTools audit to catch regressions in performance or accessibility (focus order, contrast).

## Commit & Pull Request Guidelines
- Commit messages are short and imperative (e.g., `add comments`, `fix(RI): update info`); include a scoped prefix when touching a specific section.
- Keep commits focused; group related HTML/CSS/JS changes together.
- Pull requests should include: summary of changes, affected sections/pages, before/after screenshot for visual updates, and any manual test notes.
- Link related issues when available and call out any breaking content changes (e.g., renamed assets or moved PDFs).

## Security & Asset Hygiene
- Do not commit API keys or tokens; this repo ships purely static assets.
- Optimize new images (compressed PNG/JPEG/WebP) to keep page weight low; prefer reusing existing sizes and aspect ratios.
- If adding third-party scripts or fonts, document their purpose and integrity requirements in the PR description.
