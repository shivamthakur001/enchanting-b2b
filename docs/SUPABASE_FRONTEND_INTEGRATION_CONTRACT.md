# Supabase frontend integration contract

This document defines the public frontend shape. It is not a request to create
tables with these names. The backend may use any internal schema and should map
approved published rows into these contracts.

## Public packages

The package repository exposes only records whose publication state is
`published` (the local adapter also permits the existing `preview` pilot
records). A package has:

- stable `code`, `slug`, title, duration, route, highlights, itinerary,
  inclusions, exclusions, facts, notes, and public-safe status;
- a stable package ID for related-package queries;
- optional `media.banner` metadata: `url` or `bucket` + `path`, `alt`,
  `focalPosition`, and a cache-busting `version`;
- no rates, hotel supplements, commissions, private notes, or pricing inputs.

Slugs are lowercase and URL-safe. Codes and IDs remain stable after publication.
The frontend uses `listPublishedPackages(query)`,
`getPublishedPackageBySlug(slug)`, and
`getRelatedPublishedPackages(packageId)`.

## Package media

Published package banners are backend-managed and must not be inferred from a
destination gallery. Local demo mode uses the existing pilot imagery. A
published package without a banner renders the branded placeholder at
`/package-assets/package-banner-placeholder.svg`.

Highlights and itinerary photos may use verified local destination assets until
approved backend media is available. An unverified landmark must use a neutral
fallback rather than a misleading photograph.

## Destination galleries

The gallery repository returns:

```ts
{
  destinationId, destinationSlug, galleryId, revision,
  publicationState: "unconfigured" | "published" | "empty" | "error",
  items: [{ id, image, alt, caption, focal, aspect, title, category }]
}
```

Items are already ordered by the dashboard-defined order. `empty` is an
intentional published deletion and must not restore local images. `unconfigured`
may temporarily use the local manifest adapter. `error` is surfaced as a
retryable unavailable state and is never treated as an empty published gallery.
Use versioned or unique storage paths when replacing images.

## Supabase boundary and RLS

The browser boundary reads only `VITE_SUPABASE_URL` and
`VITE_SUPABASE_PUBLISHABLE_KEY`. A service-role key must never be shipped to
Vite. The future adapter must be supplied with an approved client, schema
mapper, and public read policy. RLS should allow anonymous reads only for
published, public-safe package and gallery records; dashboard writes require
authenticated staff policies.

## Caching and performance

Use the gallery revision or banner version in cache keys. Gallery images should
be preoptimized at upload time; do not require Supabase image transformations.
Visible package heroes load eagerly with dimensions/aspect-ratio reserved;
below-fold media is lazy. Package listings support offset/limit pagination.

## Future pricing boundary

Pricing remains an authenticated server-side concern. The future contract is
`getAvailableQuoteOptions(packageId)` and
`calculateQuote(packageId, selectedOptions)`. It must return authorized,
short-lived quote data and keep rates and commission data out of public
package payloads.

## Remaining backend dependencies

1. Approve the package and gallery public DTOs and publication semantics.
2. Provide the Supabase client configuration through deployment secrets.
3. Confirm public RLS policies and authenticated dashboard roles.
4. Provide the adapter's schema mapper and signed/private-media policy, if any.
5. Provide the authenticated pricing endpoint contract.
