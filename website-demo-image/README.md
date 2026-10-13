# Homepage preview and validation

Updated 2026-10-13 after the owner clarified that the original UI and positions should remain; only wording should change. Layout is restored to d53c5c8.

## Current previews

| Viewport | Before correction (532cb46, light) | Current, dark | Current, light |
| --- | --- | --- | --- |
| 390 × 844 | [Mobile](before-mobile.png) | [Mobile](mobile.png) | [Mobile](mobile-light.png) |
| 1440 × 1000 | [Desktop](before-desktop.png) | [Desktop](desktop.png) | [Desktop](desktop-light.png) |

[Expanded paper explanation](mobile-expanded.png) uses a tall viewport to capture the complete original card. Earlier Research/project-page screenshot files are historical and do not represent the current UI.

## Current scope

- Original About / Resume / Contact navigation, original desktop conference layout and original mobile conference placement are restored. The added Research/project views and large research-theme heading are removed.
- New identity wording and the owner's exact three About paragraphs stay in their original components. The original Research Interests component uses three new labels and a small exploratory-method line.
- Upcoming talk · UbiComp/ISWC 2026, the estimated 15 October 11:45 time, Pearl Hall (7F), full session, calendar, PDF and View Session use the original positions and styling.
- The paper subtitle, description and connection sentence are inside the original default-closed native disclosure, alongside the existing public explanation and illustration. The new plain-language caption is retained.
- JavaScript is byte-identical to d53c5c8. CSS differs from that layout only by identity text wrapping constraints and a 44 px minimum theme target. PDF, calendar, contact, portrait, Publications, Resume, Contact and News remain unchanged.

## Current verification

- Source audit checks the original page/component order, original ID set, exact supplied wording, unchanged schedule/SVG/actions/links, retained sections/assets and the minimal CSS/JS difference.
- Real isolated Chrome checks at 320, 390, 768 and 1440 CSS pixels in light/dark themes: no horizontal overflow, meeting date and room within the mobile first viewport, paper prose not drawn until native expansion, and restored navigation/sidebar/theme/#focalflow behavior.
- Native details visibility is checked with checkVisibility and rendered screenshots; getClientRects alone can report geometry for closed details and is not evidence that its contents are drawn.
- Independent read-only review passed10 width/theme scenarios, including320×568 and390×844 first-screen essentials, native mouse/Enter expansion and hidden-link keyboard behavior; no findings.
- These are local Chrome viewport checks, not physical-phone or production-rendering acceptance. CSS and JS URLs are versioned together as 20261013-2.

The earlier mainland-phone blank-loading diagnosis remains unresolved: one desktop GitHub root request timed out after12 s, while the measured Google font stylesheet requests succeeded. This wording/layout correction makes no claim to fix network loading.

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

## Keyword border visibility

The four conference keyword tags now use `--light-gray-70` for their 1 px borders instead of the low-contrast surface-border token. Dark and light browser checks confirm the borders are visible while 14 px text and 4 px × 8 px padding remain unchanged. The independent source review confirmed only the border-color variable and stylesheet cache version changed in product code.

- [Dark border detail](keyword-borders-dark.png)
- [Light border detail](keyword-borders-light.png)

## Add to Calendar (2026-10-09)

The schedule now includes a compact Add to Calendar link with an inline calendar icon and the existing orange accent. It downloads a single-event [iCalendar file](../assets/calendar/focalflow-2026.ics), which Apple Calendar can import after user confirmation. There is no calendar subscription, sign-in, invitation, automatic save, new script or website dependency.

Prefilled values:

- Title: FocalFlow talk (estimated time).
- Shanghai local time: 15 October 2026, 11:45–12:00. UTC is used in the file so calendar clients can display the correct local time.
- Location: Pearl Hall (7F), Shanghai International Convention Center, Shanghai, China.
- Notes: full paper title, presenter, estimated-slot explanation, official full-session time and programme link; the event URL points to the paper DOI.
- Status: tentative. The 15-minute duration follows the same equal-slot estimate used on the page; an exact individual presentation time is not published. Official programme rechecked on 2026-10-09.

Validation: independent Python icalendar parsing, UTC-to-Shanghai conversion, field values, CRLF line endings, 75-octet folding and text escaping passed. The local HTTP endpoint returned 200 and text/calendar with byte-identical content. The file contains no alarm, recurrence, organizer or attendee. Directory-scoped Git attributes preserve the required CRLF bytes. Independent code review passed after aligning the accessible name with the visible Add to Calendar label.

The browser automation runtime failed to start under the current environment configuration. Visual inspection of this addition and native Apple Calendar import were not completed, and no personal calendar event was saved. Existing screenshots predate this button and are not evidence of its rendered layout.

Format references: [Apple Calendar import instructions](https://support.apple.com/guide/calendar/import-or-export-calendars-icl1023/mac) and [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545.html).

## Template content cleanup (2026-10-09)

Removed the template testimonial markup and modal, sample project page, commented sample blog, their unused navigation entries, and a commented stock birthday. The unused public `index.txt` template transcript is deleted. Template-only modal and category-filter JavaScript is removed; the script URL is versioned so new HTML does not run cached code that expects deleted nodes. Shared publication CSS and genuine content remain unchanged.

Temporary JSDOM regression checks confirm that the old script fails against the cleaned document, while the new script initializes successfully and preserves About/Resume/Contact navigation, sidebar ARIA, theme persistence, responsive News placement, form validity (without submitting), and the FocalFlow anchor. Real profile, research interests, publications, resume, contact, News and conference content were compared against the previous revision. `node --check` and `git diff --check` pass. These are DOM-level tests: the browser automation runtime still fails to start, so no new visual-browser or device acceptance is claimed.

## Direct paper PDFs (2026-10-12)

The owner supplied the two published PDFs. The homepage now serves them directly under descriptive filenames: [FocalFlow](../assets/paper/26IMWUT-FocalFlow.pdf) and [Stand Up, Head Up, Stretch Up](../assets/paper/26IMWUT-StandUp-HeadUp-StretchUp.pdf). The mobile/desktop Read Paper control and both publication cards open these files. The calendar's paper reference and event URL also point to the hosted FocalFlow PDF.

Both supplied files were checked against their first-page title and DOI, rendered for inspection, and copied byte-for-byte (36 and 30 pages respectively). Local HTTP checks returned application/pdf and identical bytes for both files. The calendar's unfolded fields are unchanged except the two paper URLs; CRLF and 75-octet folding pass. No layout changes were made, so the existing layout screenshots still apply.

Isolated Chrome click checks passed for the 390 px Read Paper control and both publication cards at 1440 px: each loaded a same-site PDF response (HTTP 200, application/pdf) and displayed the native PDF viewer, with no ACM navigation. These checks verify local Chrome behavior at simulated widths; they do not claim physical-phone or Safari acceptance.
