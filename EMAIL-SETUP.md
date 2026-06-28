# Email Setup for Contact Form

The contact form sends emails via [Resend](https://resend.com).

## 1. Get your Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to **API Keys** → **Create API Key**
3. Copy the key

## 2. Set Environment Variables

**Local development** — create a `.env.local` file in the project root:

```
RESEND_API_KEY=re_your_api_key_here
```

**Vercel (production)**:
1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add `RESEND_API_KEY` = your API key
3. Redeploy for changes to take effect

## 3. (Optional) Add a verified domain

By default, emails are sent from `onboarding@resend.dev`. To send from `reachpixelpetal@gmail.com` or a custom domain:

1. In Resend dashboard → **Domains** → **Add Domain**
2. Follow the DNS verification steps
3. Update the `from` field in `src/app/api/contact/route.ts`

## 4. Test It

Run `npm run dev` and submit the contact form. You should receive an email at `reachpixelpetal@gmail.com`.
