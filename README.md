# TIYES

The website for The International Youth Engineering Society — a static site, no framework, no build-time templating.

## Structure

```
index.html            Homepage
team.html              Founders, board, and city-team structure
handbook.html          Chapter handbook + bylaws
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

## Current state

- International-board and chapter-team roles are shown as open while recruitment is underway.
- The team page includes the founders’ group photo and the Professor George Anwar mentorship photo. Individual portraits can be added when supplied.
- Chapter-interest calls to action open a pre-addressed email to `tiyesfounders@gmail.com`; the International Board application is a separate published Google Form.
