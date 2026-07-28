# TIYES project context

Last updated: 2026-07-27

## What TIYES is

TIYES is the **International Youth Engineering Society**, a student-led global engineering community. Its stated work includes student research, technical competitions, education, chapter-led events, and collaboration across cities and countries.

The organisation was founded by five BEYA alumni:

1. Ahan — Cofounder, co-chair; Dallas, Texas, USA
2. Prahalad — Cofounder, chief of strategy; Seattle, Washington, USA
3. Fabian — Cofounder, chief of research and development; Washington DC, USA
4. Aarushi Agrawal — Cofounder, chief operating officer; Fremont, California, USA
5. Rajdeep — Cofounder, co-chair; Dubai, UAE

The founding-team photo identifies the people from left to right as: Ahan, Prahalad, Fabian, Aarushi, and Rajdeep.

TIYES is mentored by **Professor George Anwar**. Do not describe TIYES as “supported by UC Berkeley” unless that wording is explicitly approved later.

## Key links

- Hosted site: https://tiyes.dtalur.chatgpt.site
- GitHub repository: https://github.com/prahaladtalur/TIYES
- International Board application page: https://tiyes.dtalur.chatgpt.site/board-application
- Google Form editor: https://docs.google.com/forms/d/1-gGXfDXO66oNksC5HI1bA4Rd1PThmAfGvwSpahE_iDc/edit
- Google Form responder link: https://docs.google.com/forms/d/1-gGXfDXO66oNksC5HI1bA4Rd1PThmAfGvwSpahE_iDc/viewform

The public contact email to use in outreach is **tiyesfounders@gmail.com**.

## Website structure

The site is plain static HTML, CSS, and JavaScript. It is not a framework application.

- `index.html` — homepage, city chapters, founders’ letter, team summary
- `team.html` — founding-team photo, founder cards, Professor Anwar mentorship section, international-board roles, and city-team structure
- `board-application.html` — embeds the published Google Form
- `ahan.html`, `rajdeep.html`, `prahalad.html`, `fabian.html`, `aarushi.html` — founder profiles
- `dallas.html`, `dubai.html`, `seattle.html`, `washington-dc.html` — chapter pages
- `handbook.html` — chapter handbook and bylaws
- `styles.css` — shared styling
- `script.js` — scroll/reveal behavior and chapter-application link handling
- `assets/` — founding-team image, Professor Anwar mentorship image, and portrait assets
- `scripts/build.mjs` — produces the deployable `dist/` output

The Washington DC chapter replaced the earlier Vienna chapter. Use `washington-dc.html` and the wording “Washington DC” consistently.

## International Board application form

The Google Form is published and embedded in `board-application.html`. It currently includes:

- Full name
- First-choice role
- Second-choice role
- Why the applicant is a fit for their first-choice role
- Leadership experience and measurable impact
- A proposed initiative for the applicant’s first 90 days on the International Board
- “How many tennis balls could you fit in your bedroom?” as a short free-response question

Available role choices are:

- President of the International Board
- Director of International Tech
- Director of International Research
- Director of International Competitions
- Director of International Development
- Director of International Education
- Director of International Events
- Director of International Communications

Changes to form questions are made in Google Forms; changes to the embedding page are made in the repository.

## Hosting and deployment

The live site is deployed through OpenAI Sites. The current project stores its hosting metadata in `.openai/hosting.json`.

Standard workflow:

1. Make site changes.
2. Run `npm run build`.
3. Commit and push the changes to GitHub’s `main` branch.
4. Push the same source state to the Sites source repository.
5. Package `dist/`, save a Sites version, and publish it.

Do not commit `dist/`; it is generated output.

## Current content notes and follow-ups

- The Professor Anwar mentorship photo remains in `team.html`; the UC Berkeley support claim was intentionally removed.
- Chapter-interest calls to action open a pre-addressed email to `tiyesfounders@gmail.com`. The International Board form is separate and active.
- The handbook/bylaws page contains the current operating guidance and governance copy.
- International-board and chapter-team roles are currently presented as open.
- Verify individual founder profile details and photos before expanding their profile pages.
- When changing shared navigation, footer, or metadata, update every static HTML page as appropriate.

## Outreach context: GLOBE

Sara Valentine at GLOBE already knows TIYES. A suitable ask is for GLOBE’s support as TIYES grows, especially through mentorship, strategic guidance, visibility, and introductions to engineers, universities, organisations, and potential supporters.

Suggested framing: TIYES was founded by five BEYA alumni and is building a student-led global engineering community through research, competitions, education, local chapters, and international leadership opportunities.

Use `tiyesfounders@gmail.com` as the reply contact.
