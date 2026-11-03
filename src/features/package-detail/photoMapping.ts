import type { PackagePhotoConfig, PublicPackage } from './types';

/**
 * Verified Real Destination Photo Mapping
 * Maps real available destination assets from public/destination-assets/ and
 * public/destination-gallery/ to the three pilot packages.
 *
 * If a real verified asset is not available, falls back to demo assets with
 * isDemo: true flag so they are clearly marked as illustrative.
 */
const VERIFIED_PHOTO_MAP: Record<string, PackagePhotoConfig> = {
  exbhp01: {
    hero: {
      src: '/destination-gallery/sanchi/Sanchi.webp',
      alt: 'Great Stupa of Sanchi, UNESCO World Heritage Buddhist monument',
      isDemo: false,
    },
    heroPosition: 'center 50%',
    highlights: [
      {
        src: '/destination-gallery/bhopal/Bhopal.webp',
        alt: 'Bhopal destination view',
        isDemo: false,
      },
      {
        src: '/destination-assets/bhimbetka/bhimbetka-rock-shelters.webp',
        alt: 'Ancient rock shelters and prehistoric paintings of Bhimbetka',
        isDemo: false,
      },
      {
        src: '/destination-assets/bhojpur/bhojpur-bhojeshwar-mahadev-temple.webp',
        alt: 'Bhojeshwar Mahadev Temple in Bhojpur',
        isDemo: false,
      },
    ],
    itinerary: [
      {
        src: '/destination-gallery/bhopal/Bhopal Tajul Masjid.webp',
        alt: 'Taj-ul-Masajid mosque in Bhopal',
        isDemo: false,
      },
      {
        src: '/destination-gallery/sanchi/Sanchi.webp',
        alt: 'Sanchi Great Stupa and Buddhist monastic complex',
        isDemo: false,
      },
      {
        src: '/destination-gallery/bhopal/Bhopal Upper lake.webp',
        alt: 'Bhopal Upper Lake and scenic lakefront',
        isDemo: false,
      },
    ],
  },
  exbhp02: {
    hero: {
      src: '/destination-assets/pachmarhi/pachmarhi-hero.webp',
      alt: 'Panoramic Satpura mountain ranges and forests of Pachmarhi',
      isDemo: false,
    },
    heroPosition: 'center 46%',
    highlights: [
      {
        src: '/destination-gallery/bhopal/Bhopal Upper lake.webp',
        alt: 'Bhopal City of Lakes tranquil water vistas',
        isDemo: false,
      },
      {
        src: '/destination-assets/bhimbetka/bhimbetka-rock-shelters.webp',
        alt: 'Bhimbetka UNESCO rock shelters and cave art',
        isDemo: false,
      },
      {
        src: '/destination-assets/bhojpur/bhojpur-monumental-shiva-lingam.webp',
        alt: 'Colossal monolithic Shiva Lingam at Bhojpur Temple',
        isDemo: false,
      },
      {
        src: '/destination-gallery/sanchi/Sanchi.webp',
        alt: 'Timeless architectural serenity of Sanchi Stupa',
        isDemo: false,
      },
      {
        src: '/destination-assets/pachmarhi/pachmarhi-dhoopgarh.webp',
        alt: 'Golden sunset over the hills from Dhoopgarh, Pachmarhi',
        isDemo: false,
      },
    ],
    itinerary: [
      {
        src: '/destination-gallery/sanchi/Sanchi.webp',
        alt: 'Sanchi Stupa and Buddhist art',
        isDemo: false,
      },
      {
        src: '/destination-assets/bhimbetka/bhimbetka-hero.webp',
        alt: 'Prehistoric rock art formations at Bhimbetka',
        isDemo: false,
      },
      {
        src: '/destination-assets/pachmarhi/pachmarhi-beefalls.webp',
        alt: 'Bee Fall cascading waterfall in Pachmarhi',
        isDemo: false,
      },
      {
        src: '/destination-gallery/bhopal/Bhopal.webp',
        alt: 'Cityscape of Bhopal',
        isDemo: false,
      },
    ],
  },
  exbhp03: {
    hero: {
      src: '/destination-gallery/satpura/Satpura National Park.webp',
      alt: 'Pristine wilderness and waterways of Satpura National Park',
      isDemo: false,
    },
    heroPosition: 'center 55%',
    highlights: [
      {
        src: '/destination-gallery/bhopal/Bhopal Upper lake.webp',
        alt: 'Bhopal tranquil lakes and cultural heritage',
        isDemo: false,
      },
      {
        src: '/destination-assets/bhimbetka/bhimbetka-rock-shelters.webp',
        alt: 'Ancient cave paintings at Bhimbetka Rock Shelters',
        isDemo: false,
      },
      {
        src: '/destination-assets/bhojpur/bhojpur-bhojeshwar-mahadev-temple.webp',
        alt: 'Unfinished medieval engineering marvel of Bhojeshwar Temple',
        isDemo: false,
      },
      {
        src: '/destination-gallery/sanchi/Sanchi.webp',
        alt: 'Great Stupa at Sanchi UNESCO heritage site',
        isDemo: false,
      },
      {
        src: '/destination-gallery/tawa/Tawa.webp',
        alt: 'Tawa Reservoir scenic waters framed by the Satpura Range',
        isDemo: false,
      },
      {
        src: '/destination-gallery/satpura/Satpura National Park (2).webp',
        alt: 'Jeep safari into Satpura Tiger Reserve wilderness',
        isDemo: false,
      },
      {
        src: '/destination-assets/pachmarhi/pachmarhi-dhoopgarh.webp',
        alt: 'Panoramic vistas and viewpoints of Pachmarhi',
        isDemo: false,
      },
    ],
    itinerary: [
      {
        src: '/destination-assets/bhimbetka/bhimbetka-hero.webp',
        alt: 'Bhimbetka rock shelter excursion',
        isDemo: false,
      },
      {
        src: '/destination-gallery/tawa/Tawa.webp',
        alt: 'Tawa Reservoir boat cruise and tranquil waters',
        isDemo: false,
      },
      {
        src: '/destination-gallery/satpura/Satpura National Park.webp',
        alt: 'Early morning safari in Satpura National Park',
        isDemo: false,
      },
      {
        src: '/destination-assets/pachmarhi/pachmarhi-beefalls.webp',
        alt: 'Pachmarhi waterfall and nature exploration',
        isDemo: false,
      },
      {
        src: '/destination-gallery/bhopal/Bhopal.webp',
        alt: 'Departure journey returning to Bhopal',
        isDemo: false,
      },
    ],
  },
};

const DEMO_FALLBACK: PackagePhotoConfig = {
  hero: {
    src: '/package-assets/demo/sanchi-preview.webp',
    alt: 'Sample illustrative journey hero',
    isDemo: true,
  },
  heroPosition: 'center 50%',
  highlights: [
    { src: '/package-assets/demo/lake-preview.webp', alt: 'Sample highlight image 1', isDemo: true },
    { src: '/package-assets/demo/heritage-preview.webp', alt: 'Sample highlight image 2', isDemo: true },
    { src: '/package-assets/demo/sanchi-preview.webp', alt: 'Sample highlight image 3', isDemo: true },
    { src: '/package-assets/demo/temple-preview.webp', alt: 'Sample highlight image 4', isDemo: true },
  ],
  itinerary: [
    { src: '/package-assets/demo/lake-preview.webp', alt: 'Sample itinerary image 1', isDemo: true },
    { src: '/package-assets/demo/sanchi-preview.webp', alt: 'Sample itinerary image 2', isDemo: true },
    { src: '/package-assets/demo/heritage-preview.webp', alt: 'Sample itinerary image 3', isDemo: true },
  ],
};

export function getPackagePhotos(pkg: PublicPackage): PackagePhotoConfig {
  const custom = VERIFIED_PHOTO_MAP[pkg.slug.toLowerCase()];
  if (custom) return custom;

  // If future imported package specifies media, resolve that
  if (pkg.media?.hero) {
    return {
      hero: { src: pkg.media.hero, alt: pkg.title, isDemo: false },
      heroPosition: 'center 50%',
      highlights: (pkg.media.highlights.length ? pkg.media.highlights : [pkg.media.hero]).map((src, i) => ({
        src,
        alt: `${pkg.title} highlight ${i + 1}`,
        isDemo: false,
      })),
      itinerary: (pkg.media.itinerary.length ? pkg.media.itinerary : [pkg.media.hero]).map((src, i) => ({
        src,
        alt: `${pkg.title} day ${i + 1}`,
        isDemo: false,
      })),
    };
  }

  return DEMO_FALLBACK;
}
