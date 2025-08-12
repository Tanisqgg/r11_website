# RedElevenLabs — Landing Page

A minimal, production-ready Next.js + Tailwind landing page you can deploy to **Vercel (free)**.

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/import, pick the repo, and click Deploy.
3. Framework: **Next.js**. Build command: `next build`. Output: `.next` (default).

### (Optional) Contact form email via Resend
- Add env vars in your Vercel Project → Settings → Environment Variables:
  - `RESEND_API_KEY` = your key
  - `RESEND_TO_EMAIL` = where to receive leads (e.g., you@company.com)
  - `RESEND_FROM_EMAIL` = verified sender (e.g., noreply@your-domain.com)
- Form still works without keys (returns success), but no email is sent.

> **Security tip**: Do not expose API keys in client code. Secrets live only in server routes and environment variables.

## Customize copy
Edit the text in `components` and the sections in `app/page.tsx` to match your positioning.

---

© 2025 RedElevenLabs.
