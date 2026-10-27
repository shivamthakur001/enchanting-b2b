/**
 * ============================================================
 * GALLERY MANAGER - CENTRAL CONTROL FILE
 * ============================================================
 * Yeh FILE ek jagah se poori gallery system control karti hai.
 * Routine customization ke liye SIRF YEH FILE edit karein.
 * React component, CSS ya routing files TOUCH NAHI karni.
 *
 * SECTIONS:
 *   A. GALLERY SECTION       - page mein embedded section ka look
 *   B. ENVELOPE DESIGN       - envelope ka physical appearance
 *   C. ENVELOPE ANIMATIONS   - hover/open/close timings
 *   D. FULLSCREEN GALLERY    - expanded mosaic layout
 *   E. FOCUSED IMAGE MODE    - single photo zoom
 *   F. RESPONSIVE CONTROLS   - desktop / tablet / mobile
 *   G. PHOTO METADATA        - per-photo titles, captions, order
 *   H. DESTINATION REGISTRY  - kon sa destination active hai
 * ============================================================
 */

import type { GalleryOverrides } from "./config/galleryConfig";

// ============================================================
// A. GALLERY SECTION
// ============================================================
// Yeh settings page mein embed hone wale gallery section
// ke background, size aur typography control karti hain.

export const gallerySectionSettings = {
  // SECTION BACKGROUND COLOR (closed/intro state)
  // Is value se gallery section ka main background color badlega.
  sectionBackground: "#061D17",

  // FULLSCREEN BACKGROUND COLOR
  // Jab gallery khulti hai fullscreen mein - is rang ka background dikhta hai.
  fullscreenBackground: "#03110E",

  // SECTION MINIMUM HEIGHT - DESKTOP
  // Jitna bada yeh value, section utna tall hoga page par.
  sectionMinHeight: "675px",

  // SECTION MINIMUM HEIGHT - MOBILE
  sectionMinHeightMobile: "585px",

  // TOP AND BOTTOM PADDING
  sectionPaddingY: "48px",

  // HEADING FONT FAMILY
  headingFont: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif',

  // HEADING SIZE - DESKTOP
  headingSize: "clamp(36px, 5.4vw, 68px)",

  // HEADING SIZE - MOBILE (<=420px)
  headingFontSizeMobile: "28px",

  // HEADING SIZE - SHORT SCREEN (viewport height <=740px)
  headingFontSizeShortScreen: "clamp(28px, 5vw, 48px)",

  // HEADING COLOR
  headingColor: "#F4EDE1",

  // EYEBROW TEXT COLOR
  eyebrowColor: "#C4A574",

  // EYEBROW FONT SIZE
  eyebrowFontSize: "11px",

  // SUBTITLE / DESCRIPTION SIZE - DESKTOP
  descriptionFontSize: "14.5px",

  // DESCRIPTION SIZE - MOBILE (<=420px)
  descriptionFontSizeMobile: "12.5px",

  // SECTION CONTENT MAX WIDTH
  sectionMaxContentWidth: "820px",

  // ATMOSPHERIC EFFECT OPACITY
  // 0 = flat background only, 1 = full mist/gradient effect.
  atmosphereOpacity: "1",

  // FULLSCREEN GALLERY Z-INDEX
  fullscreenZIndex: 9999,
};

// ============================================================
// B. ENVELOPE DESIGN
// ============================================================

export const envelopeDesignSettings = {
  // ENVELOPE WIDTH - DESKTOP (pixels)
  envelopeWidthDesktop: 608,

  // ENVELOPE HEIGHT - DESKTOP (pixels)
  envelopeHeightDesktop: 372,

  // ENVELOPE WIDTH - MOBILE (pixels)
  envelopeWidthMobile: 286,

  // ENVELOPE HEIGHT - MOBILE (pixels)
  envelopeHeightMobile: 192,

  // ENVELOPE FRONT COLOR (paper color)
  // Is value se envelope ka front color change hoga.
  envelopeFrontColor: "#15261F",

  // BACK PAPER COLOR
  backPaperColor: "#1E332A",

  // FLAP INSIDE COLOR
  flapInsideColor: "#2A4036",

  // INSIDE LINING COLOR
  insideLiningColor: "#2A4036",

  // WAX SEAL COLOR
  // Seal ka main dark color.
  waxSealColor: "#062c13",

  // WAX SEAL HIGHLIGHT
  waxSealHighlight: "#1F7A5A",

  // WAX SEAL MID
  waxSealMid: "#145C44",

  // WAX SEAL DIAMETER (CSS string)
  waxSealDiameter: "62px",

  // GOLD/COPPER BORDER COLOR
  copperColor: "#C4A574",

  // COPPER BRIGHT - hover highlight
  copperBrightColor: "#E0C49A",

  // ENVELOPE PERSPECTIVE (pixels)
  perspective: 1480,

  // CORNER RADIUS (pixels)
  borderRadius: 3,

  // HOVER SCALE (1.0 = no scale)
  hoverScale: 1.0,

  // FLAP HOVER ANGLE (degrees, negative = opens upward)
  // Hover par flap kitna khulta hai. -48 = partial open.
  flapHoverAngle: -48,

  // FLAP FULL OPEN ANGLE (degrees)
  // Click karne par flap kitna khulta hai. -162 = fully open.
  flapOpenAngle: -162,

  // HOVER RISE (pixels, negative = upward)
  hoverRise: -16,
};

// ============================================================
// C. ENVELOPE ANIMATIONS
// ============================================================
// Sab timing values milliseconds mein hain (1000 = 1 second).

export const envelopeAnimationSettings = {
  // HOVER OPENING DURATION (ms)
  hoverDurationMs: 720,

  // FLAP ANIMATION DURATION (ms)
  flapDurationMs: 860,

  // PHOTO EMERGENCE DURATION (ms)
  // Photos envelope se nikalne ki animation duration.
  photoFlyDurationMs: 1280,

  // OPENING HOLD DURATION (ms)
  openingHoldMs: 980,

  // ENVELOPE CLOSE DURATION (ms)
  closingDurationMs: 1080,

  // FOCUS TRANSITION DURATION (ms)
  focusTransitionMs: 740,

  // STAGGER DELAY BETWEEN PHOTOS (ms)
  photoStaggerMs: 72,

  // ANIMATION EASING - main
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",

  // ANIMATION EASING - flap
  easingFlap: "cubic-bezier(0.45, 0.05, 0.2, 1)",

  // ANIMATION EASING - soft
  easingSoft: "cubic-bezier(0.4, 0, 0.2, 1)",
};

// ============================================================
// D. FULLSCREEN GALLERY
// ============================================================

export const fullscreenGallerySettings = {
  gridCols: 12,
  gridRows: 12,
  mobileCols: 6,
  mobileRows: 12,

  // IMAGE GAP - HORIZONTAL (vw %)
  gridGapVw: 0.85,

  // IMAGE GAP - VERTICAL (vh %)
  gridGapVh: 1.2,

  // PADDING - desktop horizontal (vw %)
  paddingXDesktopVw: 3.1,

  // PADDING - desktop vertical (vh %)
  paddingYDesktopVh: 7.2,

  // PADDING - mobile horizontal (vw %)
  paddingXMobileVw: 3.6,

  // PADDING - mobile vertical (vh %)
  paddingYMobileVh: 9,

  // IMAGE BORDER RADIUS (px)
  imageRadius: 2,

  // PHOTO HOVER ZOOM SCALE
  // Hover par photo kitna zoom ho. 1.048 = 4.8% zoom.
  hoverZoom: 1.048,

  selectedMaxWidthVw: 76,
  selectedMaxHeightVh: 74,
  selectedMaxWidthPx: 1180,
};

// ============================================================
// E. FOCUSED IMAGE MODE
// ============================================================

export const focusedImageSettings = {
  // BACKGROUND BLUR INTENSITY (px)
  // Selected photo ke alawa sab photos kitni blur hongi.
  // 0 = no blur, 18 = strongly blurred (default).
  backgroundBlurPx: 18,

  // BACKGROUND DARKNESS (0 to 1)
  // Background photos kitni dark hongi. 0.58 = 58% dim.
  backgroundDarkness: 0.58,

  // BACKGROUND DESATURATION
  backgroundDesaturation: 0.42,

  // PRINT BORDER THICKNESS (px)
  printBorderPx: 3,

  // FOCUSED PHOTO MAX VIEWPORT WIDTH (%) — Desktop par focused photo ki maximum width (% of screen)
  maxWidthVw: 76,

  // FOCUSED PHOTO MAX VIEWPORT HEIGHT (%) — Desktop par focused photo ki maximum height (% of screen)
  maxHeightVh: 74,

  // FOCUSED PHOTO MAX ABSOLUTE WIDTH (px) — Badi screens par maximum width cap
  maxWidthPx: 1180,

  // FOCUSED PHOTO MOBILE MAX WIDTH (%) — Mobile screens par photo ki maximum width (% of screen)
  mobileMaxWidthVw: 86,

  // FOCUSED PHOTO MOBILE MAX HEIGHT (%) — Mobile screens par photo ki maximum height (% of screen)
  mobileMaxHeightVh: 70,
};

// ============================================================
// F. RESPONSIVE CONTROLS
// ============================================================

export const responsiveBreakpoints = {
  mobileMaxWidth: 768,
  smallMobileMaxWidth: 420,
  shortScreenMaxHeight: 740,
};

// ============================================================
// G. PHOTO METADATA & ZERO-COMMAND PHOTO MANAGEMENT
// ============================================================
// ZERO-COMMAND PHOTO MANAGEMENT:
//   - Photo add karna: Simply copy/paste image into `public/destination-gallery/<slug>/`
//   - Photo hatana: Simply delete file from `public/destination-gallery/<slug>/`
//   - Replace karna: Simply overwrite or replace image in the folder.
//   Vite automatically detects changes, regenerates the manifest, and updates the browser instantly!
//   No manual manifest command or React code edit required.

export const photoMetadataSettings = {
  // SHOW PHOTO TITLES
  // false = hides individual photo names / titles across the entire gallery UI
  showPhotoTitles: false,

  // SHOW PHOTO CAPTIONS
  // false = hides captions / descriptions in the gallery and focus mode
  showPhotoCaptions: false,

  // SHOW PHOTO CATEGORIES
  // false = hides category badges
  showPhotoCategories: false,
};

export const showPhotoTitles = photoMetadataSettings.showPhotoTitles;
export const showPhotoCaptions = photoMetadataSettings.showPhotoCaptions;
export const showPhotoCategories = photoMetadataSettings.showPhotoCategories;

export interface PhotoMetadataEntry {
  filename: string;
  title?: string;
  category?: string;
  caption?: string;
  alt?: string;
  focal?: string;
  aspect?: "portrait" | "landscape" | "wide" | "square";
  displayOrder?: number;
  hidden?: boolean;
}

export const pachmarhiPhotoMetadata: PhotoMetadataEntry[] = [
  {
    filename: "dhoopgarh.webp",
    title: "Dhoopgarh Sunset",
    category: "Summit",
    caption: "The highest peak in the Satpura range, where the sun dissolves into a sea of forested ridges.",
    alt: "Golden hour light catching the highest peak of the Satpura range at Dhoopgarh",
    focal: "center 42%",
    aspect: "landscape",
    displayOrder: 1,
  },
  {
    filename: "bee-falls.webp",
    title: "Bee Falls",
    category: "Waterfall",
    caption: "A silver column of monsoon water cutting through basalt, moss and wild bamboo.",
    alt: "A tall waterfall plunging through dense monsoon forest at Bee Falls, Pachmarhi",
    focal: "center center",
    aspect: "portrait",
    displayOrder: 2,
  },
  {
    filename: "duchess-falls.webp",
    title: "Duchess Falls",
    category: "Waterfall",
    caption: "A secluded cascade hidden in the deep woods, heard long before it is seen.",
    alt: "A secluded cascade tumbling over dark rock in the forests of Pachmarhi",
    focal: "center 28%",
    aspect: "portrait",
    displayOrder: 3,
  },
  {
    filename: "handi-khoh.webp",
    title: "Handi Khoh",
    category: "Gorge",
    caption: "A vast horseshoe ravine, its cliffs falling into a hush of evergreen.",
    alt: "Dramatic forested cliffs dropping into the Handi Khoh ravine",
    focal: "center 40%",
    aspect: "landscape",
    displayOrder: 4,
  },
  {
    filename: "jata-shankar.webp",
    title: "Jata Shankar",
    category: "Sacred Cave",
    caption: "A limestone sanctuary where legend says Lord Shiva's matted hair became stone.",
    alt: "Limestone cave interior of Jata Shankar with sculptural rock formations",
    focal: "center 48%",
    aspect: "landscape",
    displayOrder: 5,
  },
  {
    filename: "pandav-caves.webp",
    title: "Pandav Caves",
    category: "Heritage",
    caption: "Rock-hewn chambers said to have sheltered the Pandavas in exile.",
    alt: "Ancient rock-cut cave chambers carved into a hillside in Pachmarhi",
    focal: "center 55%",
    aspect: "landscape",
    displayOrder: 6,
  },
  {
    filename: "priyadarshini.webp",
    title: "Priyadarshini Point",
    category: "Viewpoint",
    caption: "A balcony over the valley, where morning mist pools like still water.",
    alt: "Mist pooling in a forested valley as seen from Priyadarshini Point",
    focal: "center 46%",
    aspect: "landscape",
    displayOrder: 7,
  },
  {
    filename: "forest-trails.webp",
    title: "Forest Trails",
    category: "Wilderness",
    caption: "Teak and sal close overhead; the path is a ribbon of filtered gold.",
    alt: "A sunlit path winding through dense Satpura forest",
    focal: "center center",
    aspect: "portrait",
    displayOrder: 8,
  },
  {
    filename: "satpura-panorama.webp",
    title: "Satpura Mountain Panorama",
    category: "Landscape",
    caption: "Layer upon layer of the ancient range, fading from forest green to distant blue.",
    alt: "Layered mountain ridges of the Satpura range fading into blue mist",
    focal: "center 40%",
    aspect: "wide",
    displayOrder: 9,
  },
];

// ============================================================
// H. DESTINATION REGISTRY
// ============================================================
// Nayi destination enable karne ke liye:
//   1. Photos paste karo: public/destination-gallery/<slug>/
//   2. npm run generate-gallery-manifest
//   3. Neeche slug add karo with active: true.

export interface DestinationGalleryRegistration {
  slug: string;
  active: boolean;
  manifestPath: string;
  heading?: string;
  tagline?: string;
  description?: string;
  eyebrow?: string;
  monogram?: string;
  photoMetadata?: PhotoMetadataEntry[];
  styleOverrides?: GalleryOverrides;
}

export const destinationGalleryRegistry: DestinationGalleryRegistration[] = [
  {
    slug: "pachmarhi",
    active: true,
    manifestPath: "/destination-gallery/pachmarhi/manifest.json",
    eyebrow: "THE SATPURA COLLECTION",
    heading: "Discover Pachmarhi, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "An extraordinary photographic collection. One unforgettable journey.",
    monogram: "P",
    photoMetadata: pachmarhiPhotoMetadata,
  },
  {
    slug: "kanha",
    active: true,
    manifestPath: "/destination-gallery/kanha/manifest.json",
    eyebrow: "THE KANHA WILDERNESS COLLECTION",
    heading: "Discover Kanha, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Sal forest corridors, barasingha meadows, predator territory and the golden light of the central Indian wilderness — an extraordinary photographic collection.",
    monogram: "K",
  },
  {
    slug: "pench",
    active: true,
    manifestPath: "/destination-gallery/pench/manifest.json",
    eyebrow: "THE PENCH WILDERNESS COLLECTION",
    heading: "Discover Pench, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Kipling's legendary teak forests, meandering riverbanks, vibrant birdlife and elusive leopard trails — an extraordinary photographic collection.",
    monogram: "P",
  },
  {
    slug: "khajuraho",
    active: true,
    manifestPath: "/destination-gallery/khajuraho/manifest.json",
    eyebrow: "THE CHANDELA HERITAGE COLLECTION",
    heading: "Discover Khajuraho, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Centuries of carved sandstone, sacred symmetry and timeless craftsmanship — an extraordinary photographic collection.",
    monogram: "K",
  },
  {
    slug: "indore",
    active: true,
    manifestPath: "/destination-gallery/indore/manifest.json",
    eyebrow: "THE ROYAL MALWA COLLECTION",
    heading: "Discover Indore, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Palaces, royal memories, architectural treasures and the unmistakable rhythm of Indore—a photographic journey through the heart of Malwa.",
    monogram: "I",
  },
  {
    slug: "sanchi",
    active: true,
    manifestPath: "/destination-gallery/sanchi/manifest.json",
    eyebrow: "THE BUDDHIST HERITAGE COLLECTION",
    heading: "Discover Sanchi, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Centuries of sacred stone, sculpted gateways and monastic stillness — an extraordinary photographic collection.",
    monogram: "S",
  },
  {
    slug: "chanderi",
    active: true,
    manifestPath: "/destination-gallery/chanderi/manifest.json",
    eyebrow: "THE WEAVERS & FORTS COLLECTION",
    heading: "Discover Chanderi, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Hilltop citadels, monumental gateways, and centuries of exquisite handloom weaving — an extraordinary photographic collection.",
    monogram: "C",
  },
  {
    slug: "bhimbetka",
    active: true,
    manifestPath: "/destination-gallery/bhimbetka/manifest.json",
    eyebrow: "THE PREHISTORIC ART COLLECTION",
    heading: "Discover Bhimbetka, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Thirty millennia of human imagination, rock art and Vindhyan silence — an extraordinary photographic collection.",
    monogram: "B",
  },
  {
    slug: "orchha",
    active: true,
    manifestPath: "/destination-gallery/orchha/manifest.json",
    eyebrow: "THE BUNDELA ROYAL COLLECTION",
    heading: "Discover Orchha, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Palaces on the island, temple spires, riverside cenotaphs and the timeless flow of the Betwa — an extraordinary photographic collection.",
    monogram: "O",
  },
  {
    slug: "gwalior",
    active: true,
    manifestPath: "/destination-gallery/gwalior/manifest.json",
    eyebrow: "THE ROYAL CITADEL COLLECTION",
    heading: "Discover Gwalior, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Formidable hilltop ramparts, turquoise palace tilework, Scindia treasures and the timeless echoes of Tansen — an extraordinary photographic collection.",
    monogram: "G",
  },
  {
    slug: "mandu",
    active: true,
    manifestPath: "/destination-gallery/mandu/manifest.json",
    eyebrow: "THE CITY OF JOY COLLECTION",
    heading: "Discover Mandu, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Floating ship palaces, soaring Afghan arches, mist-laden plateau ravines and immortal royal romance — an extraordinary photographic collection.",
    monogram: "M",
  },
  {
    slug: "bhopal",
    active: true,
    manifestPath: "/destination-gallery/bhopal/manifest.json",
    eyebrow: "THE BEGUMS & LAKES COLLECTION",
    heading: "Discover Bhopal, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Rose-stone minarets, royal lakeside palaces, vibrant tribal arts and peaceful lake sunsets — an extraordinary photographic collection.",
    monogram: "B",
  },
  {
    slug: "burhanpur",
    active: true,
    manifestPath: "/destination-gallery/burhanpur/manifest.json",
    eyebrow: "THE TAPTI MUGHAL COLLECTION",
    heading: "Discover Burhanpur, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Riverside royal hamams, formidable Satpura bastions, medieval water labyrinths and the sacred banks of the Tapti — an extraordinary photographic collection.",
    monogram: "B",
  },
  {
    slug: "shivpuri",
    active: true,
    manifestPath: "/destination-gallery/shivpuri/manifest.json",
    eyebrow: "THE SCINDIA ROYAL RETREAT COLLECTION",
    heading: "Discover Shivpuri, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Marble Scindia chhatris, English stone castles, ancient monastic temples and the tranquil waters of Sakhya Sagar — an extraordinary photographic collection.",
    monogram: "S",
  },
  {
    slug: "morena",
    active: true,
    manifestPath: "/destination-gallery/morena/manifest.json",
    eyebrow: "THE ANCIENT CHAMBAL TEMPLES COLLECTION",
    heading: "Discover Morena, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Reassembled forest shrines, circular hypaethral colonnades, towering dry-stone spires and ancient Chambal valley ruins — an extraordinary photographic collection.",
    monogram: "M",
  },
  // { slug: "ujjain", active: false, manifestPath: "/destination-gallery/ujjain/manifest.json", heading: "Ujjain - Where Time Stands Still.", monogram: "U" },
  {
    slug: "bhedaghat",
    active: true,
    manifestPath: "/destination-gallery/bhedaghat/manifest.json",
    eyebrow: "THE NARMADA COLLECTION",
    heading: "Discover Bhedaghat, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Marble cliffs, moonlit waters and the roar of Dhuandhar — a photographic journey through the Narmada gorge.",
    monogram: "B",
  },
  {
    slug: "tawa",
    active: true,
    manifestPath: "/destination-gallery/tawa/manifest.json",
    eyebrow: "THE TAWA COLLECTION",
    heading: "Discover Tawa, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "T",
  },
  {
    slug: "tamia",
    active: true,
    manifestPath: "/destination-gallery/tamia/manifest.json",
    eyebrow: "THE SATPURA HIGHLANDS COLLECTION",
    heading: "Discover Tamia, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "T",
  },
  {
    slug: "sailani-island",
    active: true,
    manifestPath: "/destination-gallery/sailani-island/manifest.json",
    eyebrow: "THE NARMADA ISLAND COLLECTION",
    heading: "Discover Sailani Island, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "S",
  },
  {
    slug: "hanuwantiya",
    active: true,
    manifestPath: "/destination-gallery/hanuwantiya/manifest.json",
    eyebrow: "THE INDIRA SAGAR COLLECTION",
    heading: "Discover Hanuwantiya, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "H",
  },
  {
    slug: "rewa",
    active: true,
    manifestPath: "/destination-gallery/rewa/manifest.json",
    eyebrow: "THE REWA COLLECTION",
    heading: "Discover Rewa, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "R",
  },
  {
    slug: "patalkot",
    active: true,
    manifestPath: "/destination-gallery/patalkot/manifest.json",
    eyebrow: "THE PATALKOT COLLECTION",
    heading: "Discover Patalkot, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "P",
  },
  {
    slug: "raneh-falls",
    active: true,
    manifestPath: "/destination-gallery/raneh-falls/manifest.json",
    eyebrow: "THE KEN RIVER COLLECTION",
    heading: "Discover Raneh Falls, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "R",
  },
  {
    slug: "alirajpur",
    active: true,
    manifestPath: "/destination-gallery/alirajpur/manifest.json",
    eyebrow: "THE WESTERN HIGHLANDS COLLECTION",
    heading: "Discover Alirajpur, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "A",
  },
  {
    slug: "gulawat",
    active: true,
    manifestPath: "/destination-gallery/gulawat/manifest.json",
    eyebrow: "THE LOTUS VALLEY COLLECTION",
    heading: "Discover Gulawat, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "G",
  },
  {
    slug: "janapav",
    active: true,
    manifestPath: "/destination-gallery/janapav/manifest.json",
    eyebrow: "THE SACRED HIGHLANDS COLLECTION",
    heading: "Discover Janapav, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    monogram: "J",
  },
  {
    slug: "bandhavgarh",
    active: true,
    manifestPath: "/destination-gallery/bandhavgarh/manifest.json",
    eyebrow: "THE BANDHAVGARH WILDERNESS COLLECTION",
    heading: "Discover Bandhavgarh, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Ancient hill fort ramparts, dramatic sal ridges, bamboo valleys and legendary predator landscapes — an extraordinary photographic collection.",
    monogram: "B",
  },
  {
    slug: "satpura",
    active: true,
    manifestPath: "/destination-gallery/satpura/manifest.json",
    eyebrow: "THE SATPURA WILDERNESS COLLECTION",
    heading: "Discover Satpura, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Rugged sandstone gorges, tranquil backwaters, walking safari corridors and unhurried natural wilderness — an extraordinary photographic collection.",
    monogram: "S",
  },
  {
    slug: "panna",
    active: true,
    manifestPath: "/destination-gallery/panna/manifest.json",
    eyebrow: "THE KEN RIVER & TIGER COLLECTION",
    heading: "Discover Panna, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Pristine Ken river gorges, soaring vulture cliffs, teak woodlands and the historic resurgence of the Royal Bengal tiger — an extraordinary photographic collection.",
    monogram: "P",
  },
  {
    slug: "kuno",
    active: true,
    manifestPath: "/destination-gallery/kuno/manifest.json",
    eyebrow: "THE CHEETAH SAVANNAH COLLECTION",
    heading: "Discover Kuno, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Golden grassland savannahs, Kardhai forest hills, the winding Kuno River and the pioneering dawn of Project Cheetah — an extraordinary photographic collection.",
    monogram: "K",
  },
  {
    slug: "sanjay-dubri",
    active: true,
    manifestPath: "/destination-gallery/sanjay-dubri/manifest.json",
    eyebrow: "THE UNTAMED SAL WILDERNESS COLLECTION",
    heading: "Discover Sanjay-Dubri, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Ancient sal canopies, tranquil river gorges, primal forest solitude and the historic cradle of the white tiger — an extraordinary photographic collection.",
    monogram: "S",
  },
  {
    slug: "national-chambal-sanctuary",
    active: true,
    manifestPath: "/destination-gallery/national-chambal-sanctuary/manifest.json",
    eyebrow: "THE CHAMBAL RIVER COLLECTION",
    heading: "Discover National Chambal Sanctuary, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Pristine ravine badlands, crystal river currents, basking gharials, and surfacing river dolphins — an extraordinary photographic collection.",
    monogram: "C",
  },
  {
    slug: "madhav-national-park",
    active: true,
    manifestPath: "/destination-gallery/madhav-national-park/manifest.json",
    eyebrow: "THE SCINDIA WILDERNESS COLLECTION",
    heading: "Discover Madhav National Park, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Sakhya Sagar lake horizons, George Castle crest views, Kardhai woodlands, and the historic resurgence of the Royal Bengal tiger — an extraordinary photographic collection.",
    monogram: "M",
  },
  {
    slug: "nauradehi",
    active: true,
    manifestPath: "/destination-gallery/nauradehi/manifest.json",
    eyebrow: "THE VEERANGANA DURGAVATI COLLECTION",
    heading: "Discover Nauradehi, One Memory at a Time.",
    tagline: "Unfold the Extraordinary.",
    description: "Vast golden grasslands, Indian wolf habitats, ancient teak plateaus, and serene forest wetlands — an extraordinary photographic collection.",
    monogram: "N",
  },
  // { slug: "omkareshwar", active: false, manifestPath: "/destination-gallery/omkareshwar/manifest.json", heading: "Omkareshwar - Island of Devotion.", monogram: "O" },
];

export function getGalleryRegistration(slug: string): DestinationGalleryRegistration | undefined {
  return destinationGalleryRegistry.find(
    (entry) => entry.slug.toLowerCase() === slug.toLowerCase() && entry.active
  );
}

export function buildGalleryOverridesFromManager(): GalleryOverrides {
  return {
    visibility: {
      showPhotoTitles: photoMetadataSettings.showPhotoTitles,
      showPhotoCaptions: photoMetadataSettings.showPhotoCaptions,
      showPhotoCategories: photoMetadataSettings.showPhotoCategories,
    },
    section: {
      minHeight: gallerySectionSettings.sectionMinHeight,
      mobileMinHeight: gallerySectionSettings.sectionMinHeightMobile,
      paddingY: gallerySectionSettings.sectionPaddingY,
      headingSize: gallerySectionSettings.headingSize,
      mobileHeadingSize: gallerySectionSettings.headingFontSizeMobile,
      shortScreenHeadingSize: gallerySectionSettings.headingFontSizeShortScreen,
      mobileDescriptionSize: gallerySectionSettings.descriptionFontSizeMobile,
      eyebrowSize: gallerySectionSettings.eyebrowFontSize,
      descriptionSize: gallerySectionSettings.descriptionFontSize,
      zIndex: gallerySectionSettings.fullscreenZIndex,
      atmosphereOpacity: gallerySectionSettings.atmosphereOpacity,
    },
    colors: {
      forest: gallerySectionSettings.sectionBackground,
      forestDeep: gallerySectionSettings.fullscreenBackground,
      copper: envelopeDesignSettings.copperColor,
      copperBright: envelopeDesignSettings.copperBrightColor,
      wax: envelopeDesignSettings.waxSealColor,
      waxMid: envelopeDesignSettings.waxSealMid,
      waxHighlight: envelopeDesignSettings.waxSealHighlight,
      paper: envelopeDesignSettings.envelopeFrontColor,
      paperLight: envelopeDesignSettings.backPaperColor,
      lining: envelopeDesignSettings.insideLiningColor,
    },
    envelope: {
      width: envelopeDesignSettings.envelopeWidthDesktop,
      height: envelopeDesignSettings.envelopeHeightDesktop,
      widthMobile: envelopeDesignSettings.envelopeWidthMobile,
      heightMobile: envelopeDesignSettings.envelopeHeightMobile,
      perspective: envelopeDesignSettings.perspective,
      flapHover: envelopeDesignSettings.flapHoverAngle,
      flapOpen: envelopeDesignSettings.flapOpenAngle,
      riseHover: envelopeDesignSettings.hoverRise,
      borderRadius: envelopeDesignSettings.borderRadius,
    },
    timing: {
      hoverMs: envelopeAnimationSettings.hoverDurationMs,
      flapMs: envelopeAnimationSettings.flapDurationMs,
      photoStaggerMs: envelopeAnimationSettings.photoStaggerMs,
      photoFlyMs: envelopeAnimationSettings.photoFlyDurationMs,
      openingHoldMs: envelopeAnimationSettings.openingHoldMs,
      focusMs: envelopeAnimationSettings.focusTransitionMs,
      closingMs: envelopeAnimationSettings.closingDurationMs,
      easing: envelopeAnimationSettings.easing,
      easingFlap: envelopeAnimationSettings.easingFlap,
      easingSoft: envelopeAnimationSettings.easingSoft,
    },
    gallery: {
      blurPx: focusedImageSettings.backgroundBlurPx,
      overlayDarkness: focusedImageSettings.backgroundDarkness,
      selectedMaxWidthVw: focusedImageSettings.maxWidthVw,
      selectedMaxHeightVh: focusedImageSettings.maxHeightVh,
      selectedMaxWidthPx: focusedImageSettings.maxWidthPx,
      mobileSelectedMaxWidthVw: focusedImageSettings.mobileMaxWidthVw,
      mobileSelectedMaxHeightVh: focusedImageSettings.mobileMaxHeightVh,
      gridCols: fullscreenGallerySettings.gridCols,
      gridRows: fullscreenGallerySettings.gridRows,
      mobileCols: fullscreenGallerySettings.mobileCols,
      mobileRows: fullscreenGallerySettings.mobileRows,
      gridGapVw: fullscreenGallerySettings.gridGapVw,
      gridGapVh: fullscreenGallerySettings.gridGapVh,
      padXVw: fullscreenGallerySettings.paddingXDesktopVw,
      padYVh: fullscreenGallerySettings.paddingYDesktopVh,
      mobilePadXVw: fullscreenGallerySettings.paddingXMobileVw,
      mobilePadYVh: fullscreenGallerySettings.paddingYMobileVh,
      imageRadius: fullscreenGallerySettings.imageRadius,
      hoverZoom: fullscreenGallerySettings.hoverZoom,
      printBorder: focusedImageSettings.printBorderPx,
    },
  };
}
