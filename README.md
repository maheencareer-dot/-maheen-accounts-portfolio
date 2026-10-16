# Maheen S | Accounts Portfolio

Suggested repository name: `maheen-accounts-portfolio`

## Overview
A single-page portfolio for an Accounts Assistant. The design follows the field: a ledger-style hero, and a "Selected work" section laid out like a ledger with a figures column. There are no software projects in the source documents, so the work section highlights training achievements instead. It uses system fonts, supports light and dark mode automatically, and respects reduced-motion settings.

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. For a production check: `npm run build && npm start`.

## Customize
All text lives in `data/content.js`: profile, tagline, work highlights, experience, skills, education, certifications and awards. Colors are CSS variables at the top of `app/globals.css`.

## Structure
```
app/         layout.js, page.js, globals.css
components/  Hero, Section, Work, Experience, Skills, Credentials, Contact
data/        content.js
```

## Notes
- Resume says a 2-month training; LinkedIn lists November 2024 to January 2025. The site shows the dates only. Adjust in `data/content.js` if needed.
- Resume lists 3 rotation departments, LinkedIn lists 4 (including Food Production). The site uses LinkedIn's list.
