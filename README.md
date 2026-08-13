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

No environment variables are needed. The site is fully static.

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

## Chatbot (not on the site)

The site had a chat widget answering questions about Mehdi. It was taken off
for being more complication than a portfolio needs. Its backend still exists:

```
backend/chatbot/
├── lambda_function.py   # handler and system prompt
└── deploy.sh            # package, back up, upload, smoke test
```

`chatbot-handler` is a Python Lambda behind API Gateway in `us-east-1` that
calls Claude through Bedrock and logs each exchange to DynamoDB. The source is
kept here deliberately: it once existed nowhere but inside the deployed
function, and finding out what the bot was told took downloading the running
code.

**The endpoint is still live and open to the internet.** Removing the widget
removed the only thing that used it, not the thing itself. It takes
unauthenticated POSTs, caps neither input length nor total spend, and its CORS
rule stops browsers on other origins but not `curl`. Until the API is deleted
or throttled to zero, anyone who knows the URL can spend Bedrock credit on
this account.

If it comes back, three things to fix first: cap the question length in the
handler, reject a non-string `question` (it currently 500s), and drop the
stage throttle well below 2 requests per second. Also keep the timeout at 15s
with 512MB, since the Lambda default of 3s does not fit a cold start plus a
Bedrock call, which fails only a visitor's first message and looks fine on a
retry.

## License

MIT
