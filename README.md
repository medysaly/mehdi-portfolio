# mehdi-portfolio

Personal portfolio site for Mehdi Salhi. AI/ML Engineer, Cloud Architect, and founder of [Unkommon.ai](https://unkommon.ai).

**Live:** [mehdisalhi.com](https://mehdisalhi.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Fonts:** Space Grotesk, IBM Plex Sans, JetBrains Mono (via `next/font`)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── fonts.ts          # Font configuration (next/font)
│   ├── globals.css       # Global styles, scrollbar, accessibility
│   ├── layout.tsx        # Root layout, metadata, SEO
│   └── page.tsx          # Home page
├── components/
│   ├── Hero.tsx           # Hero with silk background animation
│   ├── About.tsx          # Bio + stats cards
│   ├── CurrentlyBuilding.tsx  # Unkommon.ai spotlight
│   ├── Skills.tsx         # Skills bento grid
│   ├── Projects.tsx       # Featured projects + coursework
│   ├── Contact.tsx        # Social links grid
│   ├── Navbar.tsx         # Sticky nav with active section tracking
│   ├── SectionHeading.tsx # Reusable section header
│   └── Footer.tsx
└── lib/
    └── utils.ts           # cn() utility
```

## License

MIT
