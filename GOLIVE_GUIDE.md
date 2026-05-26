# Flip Edge Realty — Testing & Go-Live Guide

Your complete site is built: 16 pages, town SEO pages, sitemap, and forms.
This guide takes you from "files on my computer" to "live on flipedgerealty.com"
SAFELY — without breaking your current site during the switch.

---

## THE GOLDEN RULE
Do NOT cancel WordPress or point your domain until the new site is fully
tested and you've confirmed it works. The order below protects you from
downtime. Cancelling WordPress is the VERY LAST step.

---

## STEP 1 — Put all files in your FER-Website folder
Make sure your folder contains ALL of these (download everything):

Pages (16): index, about, how-it-works, faq, contact, privacy-policy,
and 10 sell-house-fast-[town] pages.
Images: logo-transparent.png, logo-white-transparent.png (these two are used
by every page — they MUST be in the folder).
SEO files: sitemap.xml, robots.txt

Tip: keep the older logo files too (harmless). The two that matter are the
transparent ones.

---

## STEP 2 — Test locally first
Open index.html in your browser. Then click through EVERYTHING:
- [ ] Header logo shows (no box), footer logo shows
- [ ] Every nav link works (How It Works, About, FAQ, Contact)
- [ ] Scroll to "Areas We Serve" — click 2-3 town links, confirm they load
- [ ] On a town page, click "other nearby towns" links — confirm they work
- [ ] FAQ page — click questions, confirm they expand
- [ ] Open on your PHONE too (text yourself the files, or just check after deploy)
Fix anything odd before deploying.

---

## STEP 3 — Deploy to Netlify (updates your existing site)
1. Log into Netlify, open your project (glittery-dieffenbachia-fff1f0)
2. Go to "Deploys"
3. Drag your WHOLE FER-Website folder onto the drag-and-drop zone
4. Wait for "Published" (green)
5. Click "Open production deploy" — your full site is live at the Netlify URL

---

## STEP 4 — Test the LIVE Netlify site thoroughly
On the .netlify.app URL, repeat the click-through from Step 2, PLUS:
- [ ] Submit the cash-offer form with TEST info (use your own phone, put TEST
      in the address). Then check Netlify → Forms → confirm it appeared.
- [ ] Submit the contact form too — confirm it appears under Forms.
- [ ] Test on your phone — every page, the menu button, the forms.

---

## STEP 5 — Turn on form notifications
Netlify → your project → Forms → Settings/Notifications → add email
notification → your email. Now every lead emails you instantly.
(Do this BEFORE go-live so you never miss a real lead.)

---

## STEP 6 — Rename the site (optional but nice)
Netlify → Project configuration → change site name from
"glittery-dieffenbachia" to something like "flip-edge-realty".
Your URL becomes flip-edge-realty.netlify.app (cleaner while testing).

---

## STEP 7 — Point your domain (the big switch)
Only after Steps 1-6 are confirmed good.
1. Netlify → Domain management → Add a domain → flipedgerealty.com
2. Netlify shows you DNS records (an A record / nameservers)
3. Log into wherever your domain is registered (GoDaddy, Namecheap, etc. —
   this may be separate from your WordPress host)
4. Update the DNS records as Netlify instructs
5. Wait for propagation (minutes to a few hours)
6. Netlify auto-issues free HTTPS (the padlock)

NOTE: Your domain registrar and your WordPress HOST may be two different
companies. You change DNS at the REGISTRAR. You can do this while WordPress
is still running — the domain just starts pointing at Netlify instead.

---

## STEP 8 — Confirm, then retire WordPress
1. Visit https://www.flipedgerealty.com — confirm you see the NEW site
2. Check the padlock (HTTPS) is there
3. Click through pages + submit a test form on the real domain
4. Give it a day to be safe
5. THEN cancel your WordPress hosting subscription

---

## STEP 9 — Tell Google about the new site (post-launch SEO)
1. Set up Google Search Console (free) for flipedgerealty.com
2. Submit your sitemap: flipedgerealty.com/sitemap.xml
3. Set up / claim your Google Business Profile (huge for local SEO)
This is what kicks off ranking. The town pages + GBP are your local SEO engine.

---

## What's still optional / later
- More town pages (Hudson, Passaic, Essex markets) — add as you expand
- Schema markup (LocalBusiness) — a technical SEO nicety
- Blog/content (foreclosure, probate articles from your SEO plan)
- Wiring form leads directly into your distress-intel dashboard

You do NOT need these to go live. They're growth, not blockers.
