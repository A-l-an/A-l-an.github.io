# Homepage preview and validation

Updated 2026-10-04 for the FocalFlow publication and conference highlight.

## Previews

| Viewport | Before | After, dark | After, light |
| --- | --- | --- | --- |
| 390 × 844 | [Mobile](before-mobile.png) | [Mobile](mobile.png) | [Mobile](mobile-light.png) |
| 1440 × 1000 | [Desktop](before-desktop.png) | [Desktop](desktop.png) | [Desktop](desktop-light.png) |

[Expanded project explanation and paper figure](mobile-expanded.png) is a capture of the complete open disclosure at mobile width. Current screenshots come from the Codex in-app browser.

## Current content

- On phones, the complete paper title is quieter, followed by emphasized talk time and room. Research directions appear as a compact secondary line: Mobile GUI Agents, Decision-Making, Non-visual Interaction and Adaptive Interfaces. Desktop typography and button appearance are retained.
- The native About the project disclosure starts closed. It explains the decision-making problem and the system's approach, then shows an excerpt from the paper's highlighted interface illustration.
- The talk block labels 11:45 once as the estimated start, with date and room separately associated. The full session window remains secondary.
- Publication metadata, the original publication figure, and Research Interests remain unchanged.

## Verification

- Latest in-app browser checks at 320, 390, 767, 768 and 1440 CSS pixels: no horizontal overflow; full title retained. Mobile title 14 px, emphasized time 18 px and room 16 px; secondary metadata/keywords 12 px. The desktop title remains 20 px. Earlier expanded-state checks also passed.
- Native disclosure opened and closed by Enter. At the owner's request, mobile paper/session actions are 13 px underlined text links with 32 px target height and 16 px separation; the disclosure is 36 px high. Desktop action targets remain 44 px. The 1600 × 956 illustration still loads and fits the disclosure without clipping.
- Dark and light phone/desktop views checked. Emphasized time/room text contrast is 8.13:1 in dark mode and 5.52:1 in light mode, calculated from browser-reported foreground/background colors. Exactly one estimated-start label remains visible; secondary session data is retained.
- Independent source/content/image review passed. The current change leaves all content after the conference panel, JavaScript and the original publication image unchanged.
- Earlier Chrome checks covered navigation, sidebar, form validity without submission, direct-link focus and theme persistence at 320–1440 px. This refinement does not change their JavaScript. `git diff --check` passes.

Checks cover local browser rendering and simulated viewport sizes, not physical phones, screen-reader use, live GitHub Pages deployment or form delivery. Nine pre-existing missing images in hidden Portfolio content remain outside this change. The earlier design detector ran in degraded regex mode, so its output is not a computed-contrast certification.

For a fresh local preview, run `python3 -m http.server 4000` from the repository root and visit `http://localhost:4000/`. The stylesheet URL includes a revision query because the in-app browser retained an older stylesheet through ordinary reloads.

## Sources and estimate

- [Crossref publication metadata](https://api.crossref.org/works/10.1145/3831982): official title, six authors, IMWUT 10(3), September 2026.
- [Official Session F3 program](https://ubicomp.org/ubicomp-iswc-2026/accepted-papers/#session-F3): Thursday, 15 October 2026, 11:00–12:30, Pearl Hall (7F); FocalFlow is listed fourth of six papers. Checked 2026-10-04.
- Estimated talk start: 11:00 + (4 − 1) × (90 minutes / 6 papers) = 11:45. This assumes the published order and equal 15-minute slots. An individual start time has not been announced, and actual order/durations can vary. The UI labels this as an estimate rather than an official time.
- Project explanation: the owner's FocalFlow manuscript Introduction (pp. 2–3) and system section. The manuscript describes server-side LLM agents with an Android client, so the keywords do not claim fully on-device inference.
- Highlighted figure: Figure 4 from the owner's manuscript, page 12. The original embedded RGB image is 3030 × 3712; the excerpt crops 3030 × 1810 at (0, 1902) and scales to 1600 × 956. Source colors, labels and the complete legend are preserved; the caption identifies the colors as a paper illustration. The original overview figure supplied for Publications remains intact.
