# Homepage preview and validation

Updated 2026-10-09 for the mobile reference layout. These current screenshots were rendered in an isolated local Chrome profile; the in-app browser automation runtime was unavailable.

## Current previews

| Viewport | Before (23755b2, light) | After, dark | After, light |
| --- | --- | --- | --- |
| 390 × 844 | [Mobile](before-mobile.png) | [Mobile](mobile.png) | [Mobile](mobile-light.png) |
| 1440 × 1000 | [Desktop](before-desktop.png) | [Desktop](desktop.png) | [Desktop](desktop-light.png) |

[Expanded project details](mobile-expanded.png) include the preserved research keywords, explanation and loaded paper figure; a tall viewport captures the whole card without the fixed navigation covering its text.

## Current layout

- At widths up to 767 px, the profile, public contact shortcuts and upcoming talk form one top card. The existing portrait and name are followed by compact affiliation/research lines, Save Contact and Email Me.
- The mobile talk places conference context above its title, then shows icon-labelled time and room. The 11:45 start remains explicitly estimated, with the full session window retained below it. Metadata does not exceed the title size.
- Add to Calendar and Read Paper use equal icon-and-label controls; the View Session link remains below them. These controls are also used on desktop, with the previous desktop content structure retained.
- One conference section and one keyword list are moved at the breakpoint, without duplicate IDs or copied event data. Mobile keywords appear inside the default-closed About the project disclosure; desktop keywords return to their original overview.
- On mobile, Resume and Contact hide the talk panel; About and the #focalflow link restore it. Collapsed contact details are hidden from layout and keyboard navigation.
- Save Contact downloads a vCard containing only the already-public name, email, institution and website. The existing calendar file and paper/session destinations remain unchanged.

## Current verification

- Actual isolated Chrome rendering at 320, 390, 768 and 1440 CSS pixels in both light and dark themes: no horizontal overflow; one conference section and keyword list; all three talk actions have SVG icons, visible labels and at least 44 px target height. Mobile title is 17 px and time/room 16 px; desktop title remains 20 px.
- Repeated breakpoint changes restore the conference and keywords to the correct locations. Navigation, sidebar expansion/ARIA, native project disclosure, #focalflow focus, theme persistence, and native form validity pass. No form was submitted.
- Real Tab key events reach Show contacts, Save Contact, Email Me, calendar, paper, session and project disclosure in order; collapsed contact fields are not focusable.
- Local downloads return HTTP 200: the vCard is served as text/x-vcard and the unchanged event as text/calendar. vCard CRLF line endings, bounded line lengths and public-only fields were checked. No email was sent and no contact or calendar event was imported into a personal app.
- Independent read-only review additionally covered 575, 767, 1024, 1249 and 1250 px, Enter-key activation of the disclosure, initial deep links and News placement; no findings.
- Source comparison preserves the profile's original contacts, About text, research interests, publications, Resume, Contact, News, project explanation, image and existing links. JavaScript syntax and whitespace checks pass.

These checks establish local browser rendering and interactions at simulated viewport widths. They do not establish physical-phone, Safari, screen-reader, native contact/calendar import or production-deployment behavior for this layout revision. Earlier verification records below describe their own dated changes.

For local preview, run `python3 -m http.server 4000` from the repository root. CSS and JS URLs are both versioned as `20261009-2` to avoid mixing revisions.

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
