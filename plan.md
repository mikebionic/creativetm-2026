# Plan: Portfolio Gallery + Batyr Update

## Task 1: Process & Copy Portfolio Images

### Vasiliy (4 photos — Jam Creative Agency work):
Source files → `images/portfolio/vasiliy/`
- photo_1 → team on location (mountains)
- photo_2 → TBD
- photo_3 → TBD
- photo_6 → JAM Creative logo

Create two sizes per image:
- **Thumbnail**: 400x400 center-crop, quality 80 (for grid)
- **Full**: max 1200px longest side, quality 85 (for lightbox)

### Katalina (9 photos — Kate Made merch & illustrations):
Source files → `images/portfolio/katalina/`
- IMG_2105.JPG → Merch booth at EXPO-2025
- IMG_2106, IMG_2109, IMG_3047, IMG_2969, IMG_9001, IMG_8996, IMG_8989 → Various products/illustrations
- **IMG_2975.HEIC** → Convert HEIC→JPG first, then process

Same two sizes as above.

Naming: `1-thumb.jpg` / `1-full.jpg`, `2-thumb.jpg` / `2-full.jpg`, etc.

## Task 2: Add Portfolio Data to `js/app.js`

Add `portfolio` array to Vasiliy and Katalina team objects:
```js
portfolio: [
  "images/portfolio/vasiliy/1",
  "images/portfolio/vasiliy/2",
  // ...
]
```
(Store base path without extension/suffix — JS will append `-thumb.jpg` / `-full.jpg`)

## Task 3: Instagram-Style Gallery in Modal (`js/app.js`)

Modify `openModal()` to render a gallery section after projects:
```html
<h3>Portfolio</h3>
<div class="portfolio-grid">
  <img class="portfolio-thumb" src="...-thumb.jpg" onclick="openLightbox(...)">
</div>
```
- 3-column grid of square thumbnails
- Click any thumbnail → opens lightbox with full image

## Task 4: Lightbox Component

Add to `index.html` (after modal):
```html
<div class="lightbox" id="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close">&times;</button>
  <button class="lightbox-prev" onclick="...">&#8249;</button>
  <button class="lightbox-next" onclick="...">&#8250;</button>
  <img id="lightbox-img" src="">
</div>
```

Add to `js/app.js`:
- `openLightbox(images, index)` — shows full image, stores array for navigation
- `closeLightbox()` — hides lightbox
- `prevLightbox()` / `nextLightbox()` — navigate with arrows
- Keyboard: Escape closes, Left/Right arrows navigate

## Task 5: CSS for Gallery & Lightbox (`css/style.css`)

```css
/* Portfolio Grid — Instagram style */
.portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; }
.portfolio-thumb { width: 100%; aspect-ratio: 1; object-fit: cover; cursor: pointer; border-radius: 4px; transition: opacity .2s; }
.portfolio-thumb:hover { opacity: .8; }

/* Lightbox — fullscreen overlay */
.lightbox { position: fixed; inset: 0; z-index: 300; background: rgba(0,0,0,.92); display: none; align-items: center; justify-content: center; }
.lightbox.open { display: flex; }
.lightbox-close { position: absolute; top: 16px; right: 20px; ... }
.lightbox-prev, .lightbox-next { position: absolute; top: 50%; ... }
#lightbox-img { max-width: 90vw; max-height: 90vh; object-fit: contain; border-radius: 8px; }
```

## Task 6: Update Batyr Rejepov (`js/app.js`)

- **Bio**: Translated from Russian — AI project lead, digital marketer, runs @imdatbot robotics center, "Clever Marketing" AI consulting company
- **Instagram**: @b.rejepov_ai
- **Skills**: Update to reflect AI, digital marketing, chatbots, gamification
- **Projects**: Add "Türkmen Topragynyň Ruhy - 2026" calendar with Google Drive link
- **Org**: Update to "Clever Marketing / Imdatbot"

## Files Modified
1. `images/portfolio/vasiliy/` — 4 photos × 2 sizes = 8 files (new dir)
2. `images/portfolio/katalina/` — 9 photos × 2 sizes = 18 files (new dir)
3. `js/app.js` — portfolio arrays, gallery rendering, lightbox logic, Batyr data
4. `css/style.css` — portfolio grid + lightbox styles
5. `index.html` — lightbox HTML element
