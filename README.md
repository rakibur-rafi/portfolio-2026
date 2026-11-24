# Portfolio — Mohammad Rakibur Rahaman

Personal developer portfolio for **Mohammad Rakibur Rahaman**, frontend developer (React / Next.js / TypeScript).

Built with Next.js (App Router, React Compiler), Tailwind CSS v4 and shadcn/ui (base-vega style). White editorial design with black pill buttons and red micro-accents.

## Getting started

```bash
npm install
npm run dev    # develop
npm run build  # production build
npm start      # serve production build
```

## Editing content — all copy lives in `src/data/`

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, role, hero headline, hero photo, contact details, resume path, about copy, facts strip |
| `src/data/skills.ts` | Skill groups and tags |
| `src/data/education.ts` | Degree, institution, study period (placeholders until set) |
| `src/data/projects.ts` | All project data — cards **and** detail pages, single source |
| `src/data/navigation.ts` | Nav links |

Values wrapped in `[BRACKETS]` or `null` are clearly-marked placeholders and become real content automatically once filled in.

## Placeholders to fill in

1. **Email** — `profile.contact.email` (contact section + hero mail icon switch to real `mailto:` links).
2. **Resume** — drop the PDF into `public/resume/` (see the README there) and set `profile.resume`. Until then the Download Resume button routes to Contact instead of a dead file.
3. **Photo** — drop the photo into `public/images/` and set `profile.photo`.
4. **Project live/repository links** — `links.live` / `links.github` per project; they currently fall back to the GitHub profile with a visible note.
5. **Location** — `profile.rail.right`.

## Routes

- `/` — hero, about + facts, skills, education, projects, contact
- `/projects/ardent-clothing`, `/projects/fitlog`, `/projects/bazardor`, `/projects/bd-chronicles` — prerendered case-study pages
- Custom 404
