# mehdi-portfolio

Personal portfolio for Mehdi Salhi. Cloud and DevOps on AWS, plus the AI that runs on top of it.

**Live:** [mehdisalhi.com](https://mehdisalhi.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Type:** Geist and Geist Mono, one family throughout, loaded through `next/font`
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

```
NEXT_PUBLIC_CHATBOT_API_URL=https://<api-id>.execute-api.us-east-1.amazonaws.com/chat
```

Goes in `.env.local`. Without it the chat widget renders but every message
returns its error fallback.

The API's CORS allows `mehdisalhi.com` only, so the chat cannot answer from
localhost. That is expected: the widget, its animation, and its composer all
work locally, but real replies need the deployed origin.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build, runs `check:dashes` first |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run check:dashes` | Fail on any em dash in copy or comments |

## House style

No em dashes, anywhere: copy, comments, commit messages. `check:dashes` runs
on `prebuild` over `src/`, `scripts/`, `backend/` and the root config files, so
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
│   ├── ChatWidget.tsx     # Floating dock that expands upward in place
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

## Chatbot

The widget posts to `chatbot-handler`, a Python Lambda behind API Gateway in
`us-east-1` that calls Claude through Bedrock and logs each exchange to
DynamoDB. Its source, including the system prompt that holds everything the
bot knows, lives here:

```
backend/chatbot/
├── lambda_function.py   # handler and system prompt
└── deploy.sh            # package, back up, upload, smoke test
```

Editing the bot's personality or its facts means editing that file and
running:

```bash
./backend/chatbot/deploy.sh
```

The script backs up the deployed code before replacing it, and pins the
timeout at 15s with 512MB. Do not let those drift back down: the Lambda
default of 3s does not fit a cold start plus a Bedrock call, which fails only
the first message a visitor sends and looks fine on a retry.

## License

MIT
