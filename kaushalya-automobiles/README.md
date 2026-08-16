# Kaushalya Automobiles — Website

A complete, responsive React + Vite website for **Kaushalya Automobiles**
(कौशल्या ऑटोमोबाइल्स), an automobile spare-parts, oils and accessories
retail shop in Udgir.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for deployment:

```bash
npm run build
```

This creates a production-ready `dist/` folder you can upload to any
static host (Netlify, Vercel, Hostinger, GitHub Pages, etc.).

## Editing shop details

Everything specific to the business — phone numbers, WhatsApp number,
address, owner name, established year, hours, weekly off day, staff
count — is in **one file**:

```
src/shopData.js
```

Edit the `shop` object at the top of that file and the whole site
updates automatically (navbar, hero, footer, contact section,
WhatsApp messages, etc.).

Also in `shopData.js`:

- `productCategories` — the 9 spare-part category cards
- `vehicleBrands` — the brand chips in the "Shop by Vehicle" section
- `lubricantCategories` — the oils & fluids list
- `whyChooseUs` — the 6 "why choose us" cards
- `testimonials` — placeholder customer reviews (replace with real ones)

## Deploying

The site is a static build — `npm run build` produces a `dist/`
folder you can host anywhere.

**Netlify / Vercel (recommended, one click):**
`netlify.toml` and `vercel.json` are already included with the
right build command (`npm run build`) and output folder (`dist`)
pre-configured, plus caching headers for images and JS/CSS. Just
connect the repo/folder and deploy — no extra setup needed.

**Any other static host** (Hostinger, GitHub Pages, a VPS with
Nginx, etc.): run `npm run build` and upload the contents of
`dist/` to the host's public folder.

**Before going live**, update these placeholders:
- `index.html` — replace `https://www.kaushalyaautomobiles.in/`
  (canonical URL, Open Graph tags, structured data) with your real
  domain once you have one.
- `public/robots.txt` and `public/sitemap.xml` — same domain swap.
- `shop.mapEmbedSrc` in `src/shopData.js` — see "Map embed" below.

## Marathi / English toggle

The site is fully bilingual. Click the language button in the navbar
(desktop) or menu (mobile) — labelled **मराठी** in English mode and
**English** in Marathi mode — to switch the entire site instantly.

All translated text lives in **`src/i18n/translations.js`** as two
matching objects, `en` and `mr`. Edit a string there and it updates
wherever it's used. Add a new key the same way in both languages —
if a Marathi string is ever missing, the site quietly falls back to
English rather than breaking.

## Real shop photos

Actual photos of the shop (storefront signage, stocked shelves, the
Castrol oil rack, the parts warehouse) are used in the Hero, the new
"Inside Kaushalya Automobiles" gallery section, and the Lubricants
section. They live in `public/images/` — replace any of them with a
better/newer photo any time by keeping the same filename, or add new
ones and reference them in `src/shopData.js` (`galleryImages` array)
and the relevant component.

## Map embed

`shop.mapEmbedSrc` currently points to a generic search embed for
Udgir. For an exact pin, open Google Maps → find the shop location →
Share → Embed a map → copy the `src="..."` URL and paste it in place
of `mapEmbedSrc`.

## Project structure

```
src/
  components/       All page sections (Navbar, Hero, About, ...)
  hooks/useReveal.js  Scroll-reveal animation helper
  shopData.js        Single source of truth for business info & content
  App.jsx            Assembles all sections
  main.jsx           React entry point
  index.css           Design tokens (colors, fonts, spacing) + base styles
```

## Notes

- No dealership/authorization with any vehicle or oil brand is
  claimed anywhere on the site — only that these brands' parts/oils
  are stocked and sold.
- The "Send Enquiry" form opens WhatsApp with the entered details
  pre-filled (no backend/server is required). Connect it to an email
  service or backend later if you want form submissions stored too.
