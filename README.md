# KDK Interests Website

Clean, modern static website for **kdkxt.com** — built for Cloudflare Pages.

Company name: **KDK Interests LLC** (owners: Don & partner)

## What’s included

- Homepage with hero, properties, about, and contact
- Palmer, TX manufactured home listing with real photos (status currently Unavailable)
- New colorful KDK Interests LLC logo (house-shaped KDKI mark in blue / orange / magenta)
- Full online rental application form (`application.html` + Formspree)
- Texas Residential Lease Agreement download
- Fully responsive (phone / tablet / desktop)
- No frameworks — pure HTML / CSS / JS
- Content editable without coding via `data/properties.json`

## Latest update (2026-08-20)

- Replaced logo with the new colorful version
- Buttons and accents updated to match logo colors (cyan / orange / magenta gradients)
- Header height increased to accommodate the fuller logo

**Important for GitHub/Cloudflare:** The full package (including `images/logo.png` and `images/favicon.png`) is in the project zip. Upload the complete `images/` folder if deploying from this repo so the new logo appears.

## Deploy to Cloudflare Pages (free)

1. Go to Cloudflare dashboard → **Workers & Pages**
2. **Create application** → **Pages** → **Upload assets** (or connect this repo)
3. Drag the entire contents of the site folder
4. Deploy
5. Add custom domain `kdkxt.com`

That’s it.

## How to update without coding

Edit `data/properties.json` to change status, description, or add properties. The contact form dropdown updates automatically.
