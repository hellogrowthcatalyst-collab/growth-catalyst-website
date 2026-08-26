# Growth Catalyst

Your Dedicated Partner in Business Transformation.

## Tech Stack

- **Frontend:** React 19 + Vite
- **Routing:** React Router (HashRouter)
- **Deployment:** Vercel (SPA + Serverless Functions)

## Local Development

```bash
npm install
npm run dev
```

## Deploying to Vercel

### 1. Connect Repository

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **"Add New Project"** → Import your GitHub repository.
3. Vercel auto-detects Vite — leave the default build settings (`npm run build`, output `dist`).
4. Click **Deploy**.

### 2. Set Environment Variables

After deploying, configure the Gmail credentials in the Vercel dashboard:

1. Go to your project → **Settings** → **Environment Variables**.
2. Add the following variables:

| Variable             | Value                              |
| -------------------- | ---------------------------------- |
| `GMAIL_USER`         | Your Gmail address (e.g. `hello@gmail.com`) |
| `GMAIL_APP_PASSWORD` | Your Gmail App Password            |

> **⚠️ Never commit real credentials to the repository.** Use the Vercel dashboard only.

### 3. Generate a Gmail App Password

Gmail App Passwords are required because regular passwords don't work with SMTP when 2FA is enabled.

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
2. Sign in and select **"Mail"** as the app.
3. Click **Generate** — copy the 16-character password.
4. Paste it as `GMAIL_APP_PASSWORD` in Vercel.

### 4. Redeploy

After adding environment variables, trigger a redeployment from the Vercel dashboard (Deployments → ⋯ → Redeploy) so the serverless function picks up the new env vars.

## Contact Form

The contact form at `/contact` sends real emails via a Vercel Serverless Function (`/api/contact`). It includes:

- **Server-side validation** — non-empty fields, valid email format
- **Honeypot spam protection** — hidden field that bots auto-fill
- **Timestamp-based rate limiting** — rejects submissions faster than 2 seconds after page load
- **Loading state** — spinner + disabled button while sending
- **Error handling** — preserves form data on failure, clears on success

## Environment Variables Reference

See [`.env.example`](.env.example) for the full list of required variables.

| Variable             | Description                           |
| -------------------- | ------------------------------------- |
| `GMAIL_USER`         | Gmail address to send emails from     |
| `GMAIL_APP_PASSWORD` | Gmail App Password (not regular pass) |
