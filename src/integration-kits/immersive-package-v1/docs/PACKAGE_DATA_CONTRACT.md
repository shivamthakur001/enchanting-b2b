# Public Package Data Contract v1 (Draft)

This contract connects the future Excel importer, the React Package Detail Page and the later Smart Journey Finder. It is **not** a live backend/API contract yet.

## Public fields

| Field | Type | Source / semantics |
| --- | --- | --- |
| `schemaVersion` | `1` | Version this public representation |
| `code` | string | `Main Info.code`, unique, stable package identity |
| `slug` | string | lowercase code for URL; preserve legacy redirects if changed |
| `title` | string | `Main Info.title` |
| `durationDays` | integer | `Main Info.max_days` |
| `durationNights` | integer? | Derived days - 1 **for this preview**; flagged as `nightsDerived`, confirm from hotel nights before production |
| `routeRaw` | string | Raw display route. Each city is NOT automatically an overnight stop |
| `highlights` | string[] | `Highlights.highlight` in source order |
| `itineraries` | `{dayLabel,title,body}[]` | `Itineraries` (complete body text, source order) |
| `inclusions` | string[] | `Included.item` |
| `exclusions` | string[] | `Excluded.item` |
| `facts` | `{title,description}[]` | `Facts` |
| `publicNotes` | string[] | Human-reviewed **public-safe subset** of `Please Note` |
| `media` | object | Future `hero`, `highlights`, `itinerary` destination asset IDs/paths; currently empty in source records |
| `status` | enum/string | `preview` for 3 sample snapshots; future `draft/review/published/archived` |
| `source` | object | Source filename and revision trace only; never private cells |
| `reviewFlags` | string[] | Quality warnings. Never use to expose commercial source values. |

## Separation of sensitive information

**Must never appear in public JSON, static HTML, JavaScript source, source maps, or unauthenticated API responses:**
- `Main Info.amount` or confidential trade net rates
- entire `Pricing` worksheet and its occupancy / seasonal grids
- `Hotel Supplements` monetary amounts
- commissions (including `Please Note` entries about commissions)
- private commercial rules (discounts/markups/contract terms)

Later, use an **authorized backend** for private data. CSS hiding or "only show for logged-in user" in the browser is **not security**.

## Importer behavior (NEXT phase, not built)

1. Read `.xlsx` files, inspect the 9 recognized worksheets and optional variations.
2. Normalize into separate **public content** and **private commercial data** entities.
3. Validate unique `code`, duration, day counts, source sheet presence, itinerary fields, format differences and privacy classification.
4. Offer **review / correct / publish**, never silently auto-publish a new sheet just because it was pasted into a folder.
5. For existing `code`: stage a diff, preserve previous published revision, approve replacement; support rollback.
6. Generate a static public package feed or publish via authenticated backend. Public routes link by `code`/`slug`.
7. Map destination IDs and actual visit types via review. Do not equate an en-route stop with an overnight visit.
8. Preserve original raw text, flag inconsistencies; do not invent available departures, budgets or prices.

## Sample audit

| Package | Days | Highlights | Day records | Inclusion items | Exclusion items | Trip facts |
|---|---:|---:|---:|---:|---:|---:|
| EXBHP01 | 3 | 3 | 3 | 5 | 1 | 5 |
| EXBHP02 | 4 | 5 | 4 | 6 | 1 | 5 |
| EXBHP03 | 5 | 7 | 5 | 8 | 1 | 5 |

**Source limitation:** There is no independent "Overview" worksheet in the samples. Hero/overview introduction is derived only from `title`, `routeRaw` and duration and is not presented as original Excel prose.
