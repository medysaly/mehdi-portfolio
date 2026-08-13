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

## Security headers

`next.config.js` sends `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy` and a `Permissions-Policy` that denies camera, microphone
and location.

There is no Content-Security-Policy. The cal.com booking embed injects a
script and an iframe from `app.cal.com`, so a policy strict enough to be worth
having has to be written against that and tested by actually opening the
booking popup. Adding one blind would break booking silently.

## Chatbot (retired)

The site had a chat widget answering questions about Mehdi. It came off for
being more complication than a portfolio needs, and its AWS side was then
deleted: the API Gateway, the Lambda, its IAM role, and the DynamoDB table
that logged conversations. Nothing of it runs or costs anything now.

The source is still here:

```
backend/chatbot/
├── lambda_function.py   # handler and system prompt
└── deploy.sh            # package, back up, upload, smoke test
```

Kept on purpose. This code once existed nowhere but inside the deployed
function, so finding out what the bot had been told meant downloading
production to read it. It is worth more in the repo than the few kilobytes it
costs.

`deploy.sh` will not run as written. It updates a function that no longer
exists, so bringing the bot back means recreating the infrastructure first: a
Lambda on Python 3.14 with `bedrock:InvokeModel` and `dynamodb:PutItem`, an
HTTP API with one `POST /chat` route, and the table. Build it with Terraform
this time. It was all click-ops, which is why retiring it was a sequence of
console-shaped commands rather than one `terraform destroy`.

Four things the old version got wrong, worth fixing before it ships again:

- **No input cap.** It accepted a 9,000 character question and paid Bedrock to
  read it.
- **No authentication**, on an endpoint that spends money per call. CORS is not
  a substitute: it stops browsers on other origins, not `curl`.
- **A non-string `question` returned a 500**, because the handler calls
  `.strip()` on whatever it is given.
- **The Lambda default 3s timeout does not fit a cold start plus a Bedrock
  call.** It ran that way in production for a month. Only the first message a
  visitor sent failed, and a retry looked fine, which is exactly why nobody
  noticed. 15s with 512MB was the fix.

## License

MIT
