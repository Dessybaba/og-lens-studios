# SETUP.md — Complete Beginner's Guide

This guide assumes you have never built or run a website with code before.
Follow it top to bottom, in order. Every command is explained — you don't
need to understand *why* it works yet, just what it does.

---

## 1. Install Node.js

Node.js is the program that lets your computer run JavaScript outside a
browser — it's what runs your Next.js project.

1. Go to https://nodejs.org
2. Download the **LTS** version (LTS = "Long Term Support" = the stable one).
3. Run the installer and click through with the default options.
4. Confirm it worked: open your terminal (Mac: **Terminal** app; Windows:
   **PowerShell**) and run:
   ```bash
   node -v
   npm -v
   ```
   You should see version numbers (e.g. `v20.11.0` and `10.2.4`). If you see
   "command not found", restart your computer and try again.

## 2. Install VS Code

VS Code is a free code editor.

1. Go to https://code.visualstudio.com
2. Download and install it for your operating system.
3. Open it once after installing to confirm it launches.

## 3. Open the project

1. Unzip `OG-Lens-Studios.zip` somewhere easy to find, like your Desktop.
2. Open VS Code.
3. Go to **File → Open Folder** and select the unzipped `og-lens-studios`
   folder.
4. Open VS Code's built-in terminal: **Terminal → New Terminal**. This gives
   you a terminal already pointed at your project folder — you'll use this
   for every command below.

## 4–5. Install dependencies (`npm install`)

In the VS Code terminal, run:

```bash
npm install
```

**What this does:** your project depends on other pieces of code (Next.js,
React, Tailwind, etc.) listed in `package.json`. This command downloads all
of them into a folder called `node_modules`. It only takes a minute, and
you only need to run it again if you add a new package later.

## 6–7. Run the project (`npm run dev`)

```bash
npm run dev
```

**What this does:** starts a local development server on your computer —
basically a mini version of the internet that only you can see. Leave this
terminal running.

Now open your browser and go to:

```
http://localhost:3000
```

You should see the OG Lens Studios homepage. Any time you save a code
change, the browser updates automatically.

To stop the server, click into the terminal and press `Ctrl + C`.

---

## What you're looking at

The site currently uses **placeholder images** — labeled black-and-gold
graphics standing in for real photographs, so the site works immediately
without you needing photos first. Everything else (layout, navigation, the
portfolio filter, the fullscreen photo viewer, the contact form) is fully
functional. Steps 11–13 below cover swapping in your real content.

---

## 8. Push to GitHub

GitHub stores your code online and is how Vercel (step 9) will deploy it.

1. Create a free account at https://github.com if you don't have one.
2. Click the **+** icon (top right) → **New repository**.
3. Name it `og-lens-studios`, leave it **Public** or **Private** (your
   choice), and click **Create repository**. Don't add a README — you
   already have one.
4. Back in your VS Code terminal, run these one at a time:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — OG Lens Studios"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/og-lens-studios.git
   git push -u origin main
   ```
   Replace `YOUR-USERNAME` with your actual GitHub username (copy the exact
   URL GitHub shows you after creating the repository — it's on the page
   right after you click "Create repository").

   *If `git` isn't recognized:* install it from https://git-scm.com, restart
   your terminal, and try again.

## 9. Deploy to Vercel for free

Vercel is made by the creators of Next.js and hosts Next.js sites for free.

1. Go to https://vercel.com and sign up using your GitHub account.
2. Click **Add New → Project**.
3. Select your `og-lens-studios` repository and click **Import**.
4. Leave all settings as default (Vercel auto-detects Next.js) and click
   **Deploy**.
5. Wait about a minute — you'll get a live URL like
   `og-lens-studios.vercel.app`. That's your website, live on the internet.

Every time you `git push` new changes to GitHub from now on, Vercel
automatically redeploys the site.

## 10. Connect a custom domain

1. Buy a domain (e.g. from Namecheap, GoDaddy, or Google Domains) — for
   example `oglensstudios.com`.
2. In your Vercel project, go to **Settings → Domains** and enter your
   domain.
3. Vercel will show you DNS records (usually an `A` record and a `CNAME`
   record) to add at your domain registrar.
4. Go to your domain registrar's DNS settings and add exactly what Vercel
   showed you.
5. Wait for DNS to propagate (a few minutes to a few hours). Vercel's
   dashboard will show a green checkmark once it's connected, and your site
   will automatically get free HTTPS.

---

## 11. Update images later

All images live in `public/images/`:

```
public/images/hero/           — homepage background image
public/images/about/           — about page images
public/images/portfolio/        — all portfolio photos, organized by category
public/images/og-image.svg       — the image shown when your site is shared on social media
```

To swap an image, just replace the file — **keep the exact same filename**
(e.g. replace `wedding-01.svg` with your own `wedding-01.jpg`, or update the
matching entry in `lib/portfolio-data.ts` if you rename it — see step 13).

## 12. Update text later

Text lives in the page files and in `lib/`:

- **Site name, tagline, contact info:** `lib/constants.ts`
- **Services list and descriptions:** `lib/services-data.ts`
- **Homepage copy:** `app/page.tsx`
- **About page copy:** `app/about/page.tsx`

Open any of these in VS Code, edit the text between quotes, save, and your
running `npm run dev` browser tab updates instantly.

## 13. Replace placeholder portfolio images with real photos

1. Export your real photos as `.jpg` or `.webp` (recommended for photos —
   smaller file size than PNG, and Next.js optimizes them automatically).
2. Name them to match the pattern already used, e.g.
   `public/images/portfolio/wedding-01.jpg`.
3. Open `lib/portfolio-data.ts` and update the `src` path for each entry to
   match — for example change `wedding-01.svg` to `wedding-01.jpg`.
4. To add more photos than the 4-per-category starting point, add new
   objects to the `PORTFOLIO_IMAGES` array following the same shape (`id`,
   `category`, `src`, `alt`, `width`, `height`). Use the real pixel
   dimensions of your exported photo for `width`/`height` — this prevents
   the page from jumping while images load.
5. Do the same for `public/images/hero/hero-01.svg` and the two files in
   `public/images/about/`, updating the `src` reference in
   `components/Hero.tsx` and `app/about/page.tsx` respectively.

## 14. Build for production (test before deploying)

Before deploying, it's good practice to check the site builds without
errors:

```bash
npm run build
```

**What this does:** compiles and optimizes your entire site for production,
catching any errors before real visitors would see them. If it finishes
with no red error text, you're good.

To preview that production build locally:

```bash
npm run start
```

Then visit http://localhost:3000 again.

## 15. Deploy updates

Once you're happy with your changes:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Vercel automatically detects the push and redeploys your live site within a
minute or two — no extra steps needed.

---

## Quick command reference

| Command | What it does |
|---|---|
| `npm install` | Downloads the project's dependencies |
| `npm run dev` | Starts the local dev server at localhost:3000 |
| `npm run build` | Builds an optimized production version |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Checks your code for common mistakes |
| `npm run format` | Auto-formats your code with Prettier |
| `git add . && git commit -m "..." && git push` | Saves and uploads your changes |

## If something goes wrong

- **`npm install` fails:** delete the `node_modules` folder and the
  `package-lock.json` file, then run `npm install` again.
- **Port 3000 already in use:** run `npm run dev -- -p 3001` to use a
  different port, or close whatever else is running on port 3000.
- **Images not showing:** double-check the filename in `public/images/`
  matches exactly (including capitalization) what's referenced in the code.
