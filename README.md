# KDK Interests Website

Clean, modern static website for **kdkxt.com** — built for Cloudflare Pages.

Company name: **KDK Interests** (owners: Don & partner)

## What’s included

- Homepage with hero, properties, about, and contact
- Palmer, TX manufactured home listing with real photos (status currently Unavailable)
- New colorful KDK Interests LLC logo (house-shaped KDKI mark in blue / orange / magenta)
- Full online rental application form (`application.html` + Formspree)
- Texas Residential Lease Agreement download
- Fully responsive (phone / tablet / desktop)
- No frameworks — pure HTML / CSS / JS
- Content editable without coding via `data/properties.json`

## File structure

```
kdk-interests-site/
├── index.html
├── application.html      ← online rental application form
├── styles.css
├── script.js
├── README.md
├── data/
│   └── properties.json   ← edit this to add/edit properties & availability
├── documents/
│   └── Texas_Residential_Lease_Agreement.docx
└── images/
    ├── logo.svg          ← unique logo (also for email signatures)
    ├── logo-concept1.jpg
    ├── logo-concept2.jpg
    └── palmer/
        ├── 01-exterior.jpg
        ├── 02-exterior-side.jpg
        ├── 03-side-view.jpg
        ├── 04-porch-long.jpg
        ├── 05-porch-view.jpg
        ├── 06-yard-trees.jpg
        ├── 07-interior-kitchen.jpg
        ├── 08-porch-interior.jpg
        ├── 09-under-porch.jpg
        ├── 10-porch-angle.jpg
        ├── 11-porch-chairs.jpg
        └── 12-porch-long2.jpg
```

## Deploy to Cloudflare Pages (free)

1. Go to Cloudflare dashboard → **Workers & Pages**
2. **Create application** → **Pages** → **Upload assets**
3. Drag the entire contents of this folder into the upload area
4. Deploy
5. After deploy: **Custom domains** → add `kdkxt.com` (and `www.kdkxt.com` if desired)
6. Point your domain’s nameservers to Cloudflare (or add a CNAME if already on Cloudflare)

That’s it. Free HTTPS is automatic.

### Alternative (recommended for easy updates): Connect a GitHub repo
- Create a free GitHub repository
- Upload these files
- In Cloudflare Pages, connect the GitHub repo instead of “Upload assets”
- Every time you edit a file on GitHub (or push), the site auto-updates in under a minute

---

## How to update the site WITHOUT coding

This is the intended Admin control panel. No login page is needed — just edit the data files.

**Best workflow:** Connect a GitHub repo to Cloudflare Pages. Then Don or the partner can edit files directly in the GitHub web editor (browser) and the site auto-redeploys in under a minute. No need to re-upload the whole site.

### 1. Change property availability or add/edit properties (most common)

Open `data/properties.json` (GitHub web editor or local editor then push/re-upload).

- **Toggle Available ↔ Unavailable**: change the `"status"` value between `"Available"` and `"Unavailable"`. The badge in the top-left of the photo, the card styling, and the action button all update automatically.
- **Edit description, features, title, location, etc.**: just change the text inside the JSON.
- **Add a new property**:
  1. Copy an entire existing property object `{ ... }` (including the curly braces).
  2. Paste it after a comma inside the `"properties"` array.
  3. Change the `"id"`, `"title"`, `"location"`, `"description"`, `"features"`, `"images"` array, and set `"status"`.
  4. Upload the new photos into an `images/` subfolder (e.g. `images/new-home/`) and list the paths in the `"images"` array.
- The contact form dropdown also updates automatically from this file.

Example status change:
```json
"status": "Unavailable"
```

The site reads this file on every visit. No coding required — just edit the words and images.

### 2. Contact form

The contact form on the homepage uses a simple mailto approach (or can be pointed to Formspree). Application form already uses Formspree and emails to the owners.

### 3. Application form & Lease

- `application.html` — full fillable residential rental application with dynamic lessors/occupants, signature pads, and Formspree submission.
- `documents/Texas_Residential_Lease_Agreement.docx` — the lease template.

---

## Notes

- Domain for this package: **kdkxt.com**
- Older/previous site still exists at kdktx.com
- Contest section was removed; `contest.json` is no longer used.
- Photos last refreshed and optimized: August 19, 2026 (real yard, porch, exterior, and kitchen images).
- Logo is the original interlocking dual-K SVG representing the two partners.

Need changes? Just tell me what you want updated (more properties, different colors, real photos, different wording, etc.) and the package will be revised.
