# Homepage preview and validation

Updated 2026-10-04 for the FocalFlow publication and conference highlight.

## Previews

| Viewport | Before | After, dark | After, light |
| --- | --- | --- | --- |
| 390 × 844 | [Mobile](before-mobile.png) | [Mobile](mobile.png) | [Mobile](mobile-light.png) |
| 1440 × 1000 | [Desktop](before-desktop.png) | [Desktop](desktop.png) | [Desktop](desktop-light.png) |

[Expanded project explanation and paper figure](mobile-expanded.png) is a capture of the complete open disclosure at mobile width. Current screenshots come from the Codex in-app browser.

## Current content

- The upper card is restored exactly to revision 601204f: full title, conference label, research keyword pills, spacing and order. Only the lower mobile schedule and action links receive a small refinement; desktop styling is unchanged.
- The native About the project disclosure starts closed. It explains the decision-making problem and the system's approach, then shows an excerpt from the paper's highlighted interface illustration.
- The talk block labels 11:45 once as the estimated start, with date and room separately associated. The full session window remains secondary.
- Publication metadata, the original publication figure, and Research Interests remain unchanged.

## Verification

- Latest in-app browser checks at 320, 390, 768 and 1440 CSS pixels: no horizontal overflow. Mobile title is restored to 16 px, time and room are 14 px in the normal text color, labels/session are 13 px, keyword pills remain 14 px and card padding is restored to 16 px. Desktop title remains 20 px. The previous expanded-content image is restored from the identical baseline component.
- Mobile paper/session actions remain compact 13 px underlined links with 32 px target height and 16 px separation. The disclosure is restored to its original 44 px height; desktop action targets remain 44 px. Disclosure content and the 1600 × 956 illustration are unchanged.
- Dark and light phone/desktop views checked. The strong time/room accent colors are removed; the values use the same normal text color as the surrounding content. Exactly one estimated-start label remains visible.
- Independent scope review passed: after normalizing the CSS cache version, the entire HTML equals revision 601204f. The CSS differs from that revision only by 35 lines targeting lower mobile schedule labels/values and action links. No upper-card or desktop rules were changed.
- Earlier Chrome checks covered navigation, sidebar, form validity without submission, direct-link focus and theme persistence at 320–1440 px. This refinement does not change their JavaScript. `git diff --check` passes.

Checks cover local browser rendering and simulated viewport sizes, not physical phones, screen-reader use, live GitHub Pages deployment or form delivery. Nine pre-existing missing images in hidden Portfolio content remain outside this change. The earlier design detector ran in degraded regex mode, so its output is not a computed-contrast certification.

For a fresh local preview, run `python3 -m http.server 4000` from the repository root and visit `http://localhost:4000/`. The stylesheet URL includes a revision query because the in-app browser retained an older stylesheet through ordinary reloads.

## Sources and estimate

- [Crossref publication metadata](https://api.crossref.org/works/10.1145/3831982): official title, six authors, IMWUT 10(3), September 2026.
- [Official Session F3 program](https://ubicomp.org/ubicomp-iswc-2026/accepted-papers/#session-F3): Thursday, 15 October 2026, 11:00–12:30, Pearl Hall (7F); FocalFlow is listed fourth of six papers. Checked 2026-10-04.
- Estimated talk start: 11:00 + (4 − 1) × (90 minutes / 6 papers) = 11:45. This assumes the published order and equal 15-minute slots. An individual start time has not been announced, and actual order/durations can vary. The UI labels this as an estimate rather than an official time.
- Project explanation: the owner's FocalFlow manuscript Introduction (pp. 2–3) and system section. The manuscript describes server-side LLM agents with an Android client, so the keywords do not claim fully on-device inference.
- Highlighted figure: Figure 4 from the owner's manuscript, page 12. The original embedded RGB image is 3030 × 3712; the excerpt crops 3030 × 1810 at (0, 1902) and scales to 1600 × 956. Source colors, labels and the complete legend are preserved; the caption identifies the colors as a paper illustration. The original overview figure supplied for Publications remains intact.

## News and publication update

The FocalFlow acceptance News retains its original 2026/07 message, with the owner-requested removal of “more details coming soon!”. A new 2026/10 entry announces the Shanghai visit to present the IMWUT paper, with a plane emoji and a friendly meeting greeting. Stand Up, Head Up, Stretch Up remains immediately after FocalFlow with the existing title/author/venue style and Junan Xie in bold; it now includes the owner-supplied illustration. The conference panel, publication metadata and JavaScript remain unchanged.

- [Desktop News and publication preview](publication-news-desktop.png)
- [New publication on mobile](publication-stretching-mobile.png)
- Browser checks at 320, 390 and 1440 CSS pixels confirm the October/July News order and wording, complete image loading at 1540 × 542, `object-fit: contain`, and no horizontal overflow. Mobile stacks the full image above the text; desktop retains the existing side-by-side template. Independent scope/content review and `git diff --check` pass.
- Metadata verified against [Crossref](https://api.crossref.org/works/10.1145/3810207) and the [HKUST research portal](https://researchportal.hkust.edu.hk/en/publications/stand-up-head-up-stretch-up-exploring-opportunities-for-context-a/): five authors, IMWUT 10(2), Article 67, June 2026.
- The owner supplied the original 1540 × 542 PNG. The repository asset matches it byte-for-byte; the figure is not cropped, redrawn or relabelled.
