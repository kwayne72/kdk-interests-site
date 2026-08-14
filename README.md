# KDK Interests Website

Clean, modern static website for **kdkxt.com** — built for Cloudflare Pages.

Company name: **KDK Interests**

## What’s included

- Homepage with hero, properties, about, contest, and contact
- Palmer, TX manufactured home listing with real photos
- Unique original logo (modern + playful dual-partner design for Don & partner)
- Online rental application form (application.html + Formspree) + Lease download (Google Drive)
- Online rental application form
- Fully responsive
- No frameworks — pure HTML / CSS / JS
- Content editable without coding (see below)

## File structure

```
kdk-interests-site/
├── index.html
├── application.html      ← online rental application form
├── styles.css
├── script.js
├── README.md
├── data/
│   ├── properties.json   ← edit this to add/edit properties & availability
│   └── contest.json      ← edit this to change contest name, rules, YouTube, etc.
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
        └── 08-porch-interior.jpg
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

## How to update the site WITHOUT coding (Admin / Behind-the-scenes)

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

### 2. Change contest name, rules, or YouTube link

Open `data/contest.json (no longer used – contest section removed)`.

- `"name"`: the title shown on the site
- `"active"`: set to `false` to hide the entry form
- `"rules"`: edit the numbered list (use `\n` for new lines)
- `"youtubeUrl"`: paste your real YouTube channel or video link
- `"formEndpoint"`: your Formspree form URL (see below)
- `"intro"` and `"successMessage"`: change the wording anytime

### 3. Lease PDF & Online Application

**Online Application (primary)**  
A full interactive residential rental application is available at `application.html`.  
It is based on the previous KDKTX Word form, cleaned for the web, mobile-friendly, and branded to the site.

- Supports 1 or 2 primary lessors (co-applicants), up to 3 additional adult occupants, residential history, references, emergency contacts, pets (max 2), vehicles, and authorization.
- Practical additions: how heard about the property, preferred contact method, prior eviction / bankruptcy questions, free-text notes.
- Electronic signature via typed name + required authorization checkbox.
- Privacy notice and Fair Housing / equal opportunity statement included.
- Submissions use Formspree (same free service as the contest form).

**To activate real submissions:**
1. Go to [formspree.io](https://formspree.io) and create a new form (free tier is fine).
2. Copy the form endpoint (looks like `https://formspree.io/f/xyzabc`).
3. Open `application.html`, find the `<form ... action="https://formspree.io/f/xwvgdylj"` and replace `xwvgdylj` with your real ID.
4. In the Formspree dashboard, set the notification email to **Don@kdktx.com** so every application is delivered there. The email contains all form fields in a readable format (you can print/save it as PDF).
4. (Optional) Set a `_next` redirect or handle success in the page JS (already has a friendly success state for the demo placeholder).

Property cards and navigation already point to this page with an “Apply Online” button.

**Lease PDF (Google Drive)**  
1. Upload your Lease.pdf to Google Drive.  
2. Right-click → **Share** → **Anyone with the link** → Viewer.  
3. Paste the share link into `data/properties.json` under `"leaseUrl"`.  
4. Optional force-download: `https://drive.google.com/uc?export=download&id=FILE_ID`.

You can still host a blank printable Application PDF on Drive as a backup if desired.

### 4. Contact email & Formspree (for contest entries)

**Contact form** currently opens the visitor’s email app to `info@kdkxt.com`.  
Change that address in `script.js` (search for `info@kdkxt.com`) and in the HTML mailto link.

**Contest email capture (recommended):**
1. Go to [formspree.io](https://formspree.io) → free account
2. Create a new form → copy the endpoint (looks like `https://formspree.io/f/xyzabc`)
3. Paste it into `data/contest.json (no longer used – contest section removed)` under `"formEndpoint"`
4. Also update the `action=` on the contest form in `index.html` if desired

Free tier = 50 submissions per month (plenty for a learning contest).

### 5. Add new photos for a property

- Optimize the photo (keep under ~1 MB)
- Upload it into the `images/` folder (or a subfolder)
- Add the path to the `"images"` array in `properties.json`

---

## Unique Logo

The logo is an original modern geometric monogram:

- Two interlocking “K”s representing the two sides / partners (Don & partner)
- Central abstract “D” shaped as a modern doorway / home
- Teal accent dots for the playful dual-partner energy
- Navy + teal color palette matching the site

Files:
- `images/logo.svg` — use this everywhere on the website (header, footer, favicon)
- For email signatures / social: open the SVG in a browser, screenshot, or convert free at svgtopng.com → save as PNG

No existing logo matches this design.

---

## First Contest (learning phase)

The contest section is intentionally simple so you can learn:

1. Set your real YouTube URL in `contest.json`
2. Set your Formspree endpoint
3. Edit the rules text anytime
4. Set `"active": false` when the drawing ends
5. Later you can expand to multiple contests or more complex entry systems

---

## Google Sheet alternative (optional advanced)

If you prefer a pure spreadsheet instead of editing JSON:

1. Create a Google Sheet with the columns listed in the comments of the original team notes
2. Publish the sheet as CSV
3. We can swap the fetch in `script.js` to read the CSV instead of the JSON

Ask if you want this switched later — the JSON method is already zero-code via the GitHub web editor.

---

## Need changes?

Just tell us what you want updated (more properties, different colors, real photos, different wording, extra pages, etc.) and we will revise the files.

---

**Domain note:** You stated the domain is `kdkxt.com`. The previous static package was for `kdktx.com` (which currently shows the old “KDK Property Rentals” site). Once this new site is live on `kdkxt.com` you can optionally redirect the old domain or park it.
