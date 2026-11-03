# Merge Plan — Only after design approval

**Do not paste the standalone `OPEN_PREVIEW.html` into `App.tsx`.** This is intentionally an isolated design/interaction test.

## Stage A: Reuse the current website design system

1. Review the latest existing React + TypeScript app's routes (`App.tsx`), Our Offerings cards and destination asset folder; do not guess filenames.
2. Keep the approved existing navbar, footer, 44 destination pages, themes and Our Offerings layout unchanged.
3. Port only package-page body sections from `src/app.ts` to reusable React components with the same CSS classes (e.g., `PackageHero`, `PackageHighlights`, `PackageItinerary`, `PackageEssentials`).
4. Scope styles to `.package-detail-root` (or CSS Modules) to avoid conflicts with the existing global website.
5. Use the `PublicPackage` contract documented here, not Excel parse logic inside React components.
6. Add `/packages/:slug` routing that reads published records and renders the one template, and link Our Offerings cards to these URLs by tour code.
7. Remove **preview-only header/footer**, demo image-label overlays, selector and `status=preview` fixtures before going live.

## Stage B: Hook up approved photos

Build a verified manifest from `public/destination-assets`. Assign package hero/experience/day photos by matching actual destination and subject; use meaningful alt text, responsive WebP/AVIF and lazy loading below the hero.

## Stage C: Excel importer and publish workflow — separate development phase

Implement local import staging, schema validation, private/public separation, human review, versioned update by tour code and published feed generation. A local-folder watcher can prepare **staged** imports but cannot independently update Netlify's deployed assets. Live update requires a build/deploy hook or backed dashboard API.

## Stage D: Later functionality

Agent-authenticated pricing, quote/enquiry workflows, hotel supplements and Smart Journey Finder. Keep confidential rate data server-side and never publish private workbook columns in the public bundle.

## Merge acceptance checklist

- All three sample package routes render correct code and complete text.
- Collapse/expand and back navigation work on desktop/mobile and keyboard.
- All public content is audited against original Excel; derived values are labeled.
- No confidential price/commission text or numeric matrix in shipped HTML/JS.
- No CSS global regressions on the home page, destination pages, navbar or footer.
- Cards in Our Offerings link to the correct route; unrelated showcase cards remain unchanged until actual package import.
- Approved image mapping and license/source checks are complete before launch.
- No Git push, commit or Netlify deployment without explicit user instruction.
