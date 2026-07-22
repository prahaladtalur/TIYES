# TIYES

The website for The International Youth Engineering Society — a static site, no framework, no build-time templating.

## Structure

```
index.html            Homepage
team.html              Founders, board, and city-team structure
handbook.html          Chapter handbook + bylaws (content still to be written)
dallas.html            \
dubai.html              |  City chapter pages
seattle.html            |
washington-dc.html     /
ahan.html              \
rajdeep.html            |  Founder profile pages
prahalad.html           |
fabian.html            /
styles.css             Shared stylesheet for every page
script.js              Shared behavior: scroll reveals, schematic strip, chapter-form links
logo.png, assets/      Images
scripts/build.mjs      Copies the static files into dist/ for deployment
hardware/              Unrelated MicroPython script for a Raspberry Pi Pico LED; not part of the site
```

Every page is a plain HTML file that links the same `styles.css` and `script.js` — there's no shared templating, so a change to the nav, footer, or `<head>` has to be repeated across all 11 pages by hand.

## Local development

No build step is required to view the site — open any `.html` file directly, or serve the directory:

```
npx serve .
```

## Linting

```
npm install
npm run lint        # runs lint:js, lint:css, and lint:html
npm run lint:js      # eslint on script.js and scripts/
npm run lint:css     # stylelint on styles.css
npm run lint:html    # htmlhint on every *.html page
```

`no-descending-specificity` is disabled in `.stylelintrc.json`: the stylesheet is organized by page section (nav, hero, chapters, team, footer, ...) rather than by selector specificity, and the flagged pairs are all unrelated sections that never target overlapping elements.

## Deployment

`scripts/build.mjs` builds `dist/client` (a copy of the static files) and a `dist/server/index.js` worker entrypoint, and `.openai/hosting.json` points at the OpenAI Sites hosting project — this is the current, active deploy path (`npm run build`).

An older `.github/workflows/jekyll-gh-pages.yml` (GitHub Pages via Jekyll) has been removed as superseded by the above — it predates the OpenAI Sites hosting setup and was never updated to match it.

## Known gaps

- `handbook.html` — every chapter-handbook and bylaws section is still a "To be written" placeholder.
- Team roles — all international board seats (`team.html`) and all five per-chapter roles (Dallas, Dubai, Seattle, Washington DC) are listed as open/unfilled.
- Founder photos — only Prahalad has a real photo (`assets/prahalad.jpg`); Ahan, Rajdeep, and Fabian still use the placeholder photo slot.
- The chapter-application form URL in `script.js` (`CHAPTER_FORM_URL`) is a placeholder — every "Apply"/"Join" button on the site points nowhere real yet.
