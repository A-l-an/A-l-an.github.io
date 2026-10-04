# Homepage preview and validation

Updated 2026-10-04 for the FocalFlow publication and UbiComp/ISWC conference highlight.

## Previews

| Viewport | Before | After, dark | After, light |
| --- | --- | --- | --- |
| 390 × 844 | [Mobile](before-mobile.png) | [Mobile](mobile.png) | [Mobile](mobile-light.png) |
| 1440 × 1000 | [Desktop](before-desktop.png) | [Desktop](desktop.png) | [Desktop](desktop-light.png) |

The after screenshots show settled page states in the Codex in-app browser after the compact-card refinement.

## Local checks

Preview from the repository root with `python3 -m http.server 4000`, then visit `http://localhost:4000/` or `http://localhost:4000/#focalflow`.

- Chrome checks at 320, 390, 768, 844, 1024, 1249, 1250 and 1440 CSS pixels: no horizontal page overflow or JavaScript page errors; About, Resume and Contact navigation works.
- Sidebar expansion and collapse, light/dark switching and reload persistence checked. Resizing across the desktop breakpoint preserves exactly one News section in the appropriate reading order.
- Keyboard operation of the native details disclosure, conference anchor focus, and new controls' minimum 44 px height checked. The mobile conference content also remains visible with JavaScript disabled.
- FocalFlow's complete 1564 × 592 image loads without cropping. Mobile publication cards stack the image above the text.
- Contact form validity checked without submitting. JavaScript syntax and `git diff --check` pass.

These checks use local Chrome with simulated viewport sizes. They do not establish physical iPhone/Android behavior, live GitHub Pages deployment, or contact-form delivery. Nine pre-existing missing images in the hidden Portfolio page remain outside this change. The design detector ran in degraded regex mode because its optional HTML parser dependencies were unavailable; it does not verify computed contrast.

## Compact-card refinement

- In-app browser checks at 320, 390, 768 and 1440 CSS pixels: full title present, three decision-making bullets and the brief introduction visible, no horizontal overflow. Computed title size is 16 px on phones and 20 px at larger widths; body text is 14 px. Both action links and the diagram disclosure retain 44 px targets.
- Dark and light phone/desktop views checked. Publication and research-interest content remains identical to the previous version. An independent source review found no actionable issues.
- `Approx. 11:45` is an estimate, not an announced talk time. The official list places FocalFlow fourth among six papers in a 90-minute session. Assuming equal 15-minute slots gives 11:00 + 3 × 15 minutes = 11:45. The page states the assumption and that timing may shift.
- The CSS URL includes a version query because the in-app browser retained the previous stylesheet even after a normal reload. The new computed sizes were verified after the version change.

## Content sources

- [Crossref publication metadata](https://api.crossref.org/works/10.1145/3831982): official title, six authors, IMWUT 10(3), September 2026.
- [Official Session F3 program](https://ubicomp.org/ubicomp-iswc-2026/accepted-papers/#session-F3): Thursday, 15 October 2026, 11:00–12:30, Pearl Hall (7F). This is the session window; the exact FocalFlow presentation start time is not published. Schedule checked 2026-10-04.
- The paper illustration was supplied by the site owner and is retained intact.
