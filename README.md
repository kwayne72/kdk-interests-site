# KDK Property Rentals Website

Clean, modern static website for **kdktx.com**.

## What’s included

- Homepage with hero section
- Available properties (Palmer, TX listing ready)
- About KDK section
- Contact form that opens the visitor’s email client pre-filled
- Fully responsive (looks good on phone, tablet, desktop)
- Fast and lightweight — no frameworks required

## How to put it live on kdktx.com (Cloudflare Pages – free)

1. Go to your Cloudflare dashboard → **Workers & Pages**
2. Click **Create application** → **Pages** → **Upload assets**
3. Drag the entire contents of this folder (`index.html`, `styles.css`, `script.js`) into the upload area
4. Deploy
5. After it’s deployed, go to **Custom domains** and add `kdktx.com` (and optionally `www.kdktx.com`)

That’s it. The site will be live with free HTTPS.

### Alternative: Connect a GitHub repo
You can also push these files to a GitHub repository and connect that repo to Cloudflare Pages for automatic deployments whenever you make changes.

## Important things to customize

### 1. Contact email
Right now the form and “email us” link use:
```
info@kdktx.com
```
Change this to your real email in:
- `index.html` (the mailto link)
- `script.js` (the mailto address inside the form handler)

### 2. Palmer property details
Update the description, features, and (most importantly) the photo in `index.html`.

Replace the Unsplash image URL with a real photo of the house once you have one.

### 3. Better form handling (recommended later)
The current form opens the visitor’s email app.  
For a more professional experience, sign up for a free Formspree account (formspree.io) and replace the form logic with their endpoint. Takes about 5 minutes.

## File structure
```
kdktx-site/
├── index.html      ← main page
├── styles.css      ← all styling
├── script.js       ← mobile menu + form
└── README.md       ← this file
```

## Need changes?
Just tell me what you want updated (more properties, different colors, real photos, different wording, etc.) and I’ll revise the files.
