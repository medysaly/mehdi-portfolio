# mehdi-portfolio

Personal portfolio for Mehdi Salhi. Cloud and AI engineering on AWS, from infrastructure to the systems that run on it.

**Live:** [mehdisalhi.com](https://mehdisalhi.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Type:** Geist and Geist Mono, loaded from the `geist` package
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are needed. The site is fully static.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build, runs `check:dashes` first |
| `npm run start` | Serve production build |
| `npm run lint` | Opens Next.js's ESLint setup prompt; ESLint is not configured yet |
| `npm run check:dashes` | Fail on any em dash in copy or comments |

## House style

No em dashes, anywhere: copy, comments, commit messages. `check:dashes` runs
on `prebuild` over `src/`, `scripts/` and the root config files, so
one pasted in fails the build. Use a comma, a colon, or parentheses.

## Project Structure

```
src/
├── app/
│   ├── fonts.ts           # Geist Sans and Geist Mono
│   ├── globals.css        # Global styles, focus rings, scrollbar
│   ├── layout.tsx         # Root layout, metadata, cal.com embed
│   └── page.tsx           # Section order and the closing wash
├── components/
│   ├── Hero.tsx           # Centred hero over the Marine Horizon wash
│   ├── About.tsx          # Portrait, bio, and the tech grid
│   ├── Projects.tsx       # Pinned carousel: vertical scroll drives it sideways
│   ├── Experience.tsx     # Expandable role rows
│   ├── Certifications.tsx # Degree and certs, real badge art
│   ├── Coursework.tsx     # Filterable coursework grid
│   ├── Contact.tsx        # Email, booking, socials
│   ├── Navbar.tsx         # Sticky nav with scroll-spy
│   ├── SocialRail.tsx     # Fixed capsule of social links
│   ├── MarineWash.tsx     # Shared gradient wash, hero and footer
│   ├── cta.tsx            # Resume and booking buttons, solid or glass
│   ├── icons.tsx          # Icons plus email, resume and cal.com constants
│   └── ui/                # Third-party components, kept close to source
└── lib/utils.ts           # cn()
```

`Navbar`'s scroll-spy walks its `nav` array top down and takes the last
section past the detection line, so that array has to stay in the page's
order. Reordering sections without reordering it breaks the highlight
silently.

## Security headers

`next.config.js` sends `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy` and a `Permissions-Policy` that denies camera, microphone
and location.

There is no Content-Security-Policy. The cal.com booking embed injects a
script and an iframe from `app.cal.com`, so a policy strict enough to be worth
having has to be written against that and tested by actually opening the
booking popup. Adding one blind would break booking silently.

## License

MIT
