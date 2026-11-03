# Destination Photos: Future Media Library Mapping

User confirmed the existing Enchanting B2B site already has **44 destination folders** with approximately **5–7 gallery photos and 11 asset photos per destination**. The exact filenames and reuse license metadata were **not available** in this build.

## Target mapping (DO NOT hardcode guessed filenames)

```
Package EXBHP01
  hero: preferred approved photo of Bhopal / Sanchi / relevant route location
  highlights: Bharat Bhavan / Bhimbetka / Bhojpur -> approved matching photos
  itinerary:
    day 1 -> Bhopal photo
    day 2 -> Bhimbetka, Bhojpur or Sanchi photo
    day 3 -> optional, no image required
```

Suggested metadata object per **approved** asset:

```
{
  "id": "sanchi-gallery-03",
  "destinationId": "sanchi",
  "src": "/destination-assets/sanchi/<actual-existing-file>.webp",
  "alt": "Verified description of the photographed place",
  "width": 1200,
  "height": 800,
  "usageApproved": true,
  "heroEligible": false,
  "credit": "Photo credit / license where needed",
  "focalX": 50,
  "focalY": 40
}
```

Never populate a package's image by a filename guess that could depict a different location. Prefer a tasteful neutral fallback over inaccurate location photography.

## Performance

- Largest Contentful Paint hero: use one well-compressed responsive WebP/AVIF image, preload if needed after merging; no automatic video background.
- Other images: `loading=lazy`, `decoding=async`, use explicit aspect ratios to minimize layout shift.
- Aim for hero 1600–2400px wide in production (responsive `srcset`), not necessarily send the full 2400px to mobile.
- Highlight images 600–900px wide; itinerary thumbnails 480–720px wide.
- One media library per destination; reuse across packages with stable asset IDs and optional package hero override.
- In the standalone preview, images are inline and small, designed for reliable offline testing only.

**Current files `assets/*-preview.webp` are illustrations from an earlier shared project kit, not verified final destination photos.** Replace and verify rights and accuracy before public deployment.
