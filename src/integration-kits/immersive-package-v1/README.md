# Enchanting B2B — Immersive Story Journey | Standalone v1

**Stage:** Working standalone package-detail page preview, **NOT** integrated with your Enchanting B2B website.

## Fastest way to open

1. Extract `Enchanting_B2B_Immersive_Package_v1.zip` to a separate folder.
2. Double-click **`OPEN_PREVIEW.html`**. It contains the styles, JavaScript, 3 sample package records and demo photography inline; no installation or network is necessary.
3. Use the **Preview Package** selector (top right) for EXBHP01, EXBHP02 or EXBHP03.
4. Expand itinerary days with the disclosure buttons, or use **Expand all days** and **Collapse all**. The Print button prints public itinerary details.

### Standalone URLs

- `OPEN_PREVIEW.html?package=exbhp01`
- `OPEN_PREVIEW.html?package=exbhp02`
- `OPEN_PREVIEW.html?package=exbhp03`

When merged into the React site, these should become `/packages/exbhp01`, etc. Routing is **not** integrated today.

## What's actually implemented

- Immersive Story Journey-inspired design: dark photographic hero, pale editorial overview, visual highlights, dark expandable itinerary, included/excluded, trip facts, safe notes, future trade-rates placeholder, related package navigation and a simple **preview-only** header/footer.
- One shared data-driven renderer for three **real** package workbook content snapshots.
- Complete day-by-day body text, highlights, inclusions and exclusions preserved from the sample workbooks.
- Responsive layouts and browser-native `<details>` accordions.
- Demo images bundled for reliable offline viewing (see image caveat below).
- Public/private separation at extraction: **NO Main Info amount, pricing matrices, hotel supplement rate values, commission or private pricing notes** are included in `public-packages.json` or `OPEN_PREVIEW.html`.
- Stable `code`, `slug`, `schemaVersion`, `status`, `media` and `source` fields for the later importer/dashboard.

### Not implemented on purpose

- No Excel folder watcher/importer, dashboard, draft-review-publish process, database, automatic live Netlify updates, production React route integration, Smart Journey Finder, calculator, quote requests, auth, private pricing, booking, real enquiries, or image rights validation.
- Image folder integration is not done yet because your existing local React `public/destination-assets/` folder wasn't available here.
- Header/footer in the preview **do not replace** your existing approved website header/footer.

## Visual/photo warning

Current photos are **temporary visual references taken from an earlier Enchanting B2B prototype kit in the shared project**. They are NOT approved as final package/destination matches; even the images labelled as illustrative must be reviewed for location accuracy and reuse rights. Do not publish these illustrative pictures as real package photos.

After we inspect the actual filenames in your existing `public/destination-assets/` directory, we will add a media manifest to select real approved photos per destination and package. Photos can be shared across packages and will support per-package overrides.

## Run data/build checks (optional)

Requires Node.js and TypeScript compiler (`tsc`) installed. No npm packages are required for the browser preview.

```powershell
npm run check
npm run build
```

`npm run build` compiles the framework-neutral TypeScript renderer and rebuilds `OPEN_PREVIEW.html`. To re-extract the **sample** Excel data from the workbooks, the one-off `scripts/extract_sample_public.py` can be run in an environment with `artifact_tool` and the source files available. **This script is not the automated bulk importer.**

## Structure

```text
OPEN_PREVIEW.html              # easy offline preview
src/app.ts                    # typed, data-driven page rendering
src/style.css                 # page styling
src/index.template.html       # stable HTML template
data/public-packages.json      # 3 PUBLIC-SAFE sample normalized packages
assets/*.webp                 # temporary small demo images
scripts/build-preview.mjs     # creates fully standalone HTML
scripts/validate-public-data.mjs
scripts/extract_sample_public.py # one-off sample snapshot, not auto-importer
docs/PACKAGE_DATA_CONTRACT.md
docs/PHOTO_MAPPING_AND_PERFORMANCE.md
docs/REACT_MERGE_PLAN.md
DESKTOP_PREVIEW.png / MOBILE_PREVIEW.png
```

## Approval & next milestones

1. Review page design and content of all three packages. Submit any desired design changes.
2. After you approve, adapt the same template to your **existing React + TypeScript** project without touching your approved global design.
3. Only then build the separate **Excel import, validation, review and publish** pipeline. Uploading local `.xlsx` to a folder does **not** update the deployed Netlify site by itself; that requires build/deployment or a backend API.

No changes, Git commits, pushes or deployment have been made to your actual website.
