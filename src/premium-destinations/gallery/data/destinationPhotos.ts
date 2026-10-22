import type { DestinationPhoto } from "../types/gallery";

/**
 * PACHMARHI GALLERY PHOTOS — IS FILE KO EDIT KARNA HAI.
 * 1. Image copy: public/destination-gallery/pachmarhi/filename.webp
 * 2. Phir neeche `image` ka path update karein.
 * 3. title/category/caption/alt/focal apni photo ke hisaab se change karein.
 * 4. New photo add/remove possible; 9-photo curated layout, other counts automatic grid.
 * IMPORTANT: supplied files are preview/demo assets. Replace with verified HD destination photos.
 */
export const destinationPhotos: DestinationPhoto[] = [
  {
    id: "dhoopgarh-sunset",
    title: "Dhoopgarh Sunset",
    category: "Summit",
    image: "/destination-gallery/pachmarhi/dhoopgarh.webp",
    alt: "Golden hour light catching the highest peak of the Satpura range at Dhoopgarh",
    caption:
      "The highest peak in the Satpura range, where the sun dissolves into a sea of forested ridges.",
    focal: "center 42%",
    aspect: "landscape",
  },
  {
    id: "bee-falls",
    title: "Bee Falls",
    category: "Waterfall",
    image: "/destination-gallery/pachmarhi/bee-falls.webp",
    alt: "A tall waterfall plunging through dense monsoon forest at Bee Falls, Pachmarhi",
    caption:
      "A silver column of monsoon water cutting through basalt, moss and wild bamboo.",
    focal: "center center",
    aspect: "portrait",
  },
  {
    id: "duchess-falls",
    title: "Duchess Falls",
    category: "Waterfall",
    image: "/destination-gallery/pachmarhi/duchess-falls.webp",
    alt: "A secluded cascade tumbling over dark rock in the forests of Pachmarhi",
    caption:
      "A secluded cascade hidden in the deep woods, heard long before it is seen.",
    focal: "center 28%",
    aspect: "portrait",
  },
  {
    id: "handi-khoh",
    title: "Handi Khoh",
    category: "Gorge",
    image: "/destination-gallery/pachmarhi/handi-khoh.webp",
    alt: "Dramatic forested cliffs dropping into the Handi Khoh ravine",
    caption:
      "A vast horseshoe ravine, its cliffs falling into a hush of evergreen.",
    focal: "center 40%",
    aspect: "landscape",
  },
  {
    id: "jata-shankar",
    title: "Jata Shankar",
    category: "Sacred Cave",
    image: "/destination-gallery/pachmarhi/jata-shankar.webp",
    alt: "Limestone cave interior of Jata Shankar with sculptural rock formations",
    caption:
      "A limestone sanctuary where legend says Lord Shiva’s matted hair became stone.",
    focal: "center 48%",
    aspect: "landscape",
  },
  {
    id: "pandav-caves",
    title: "Pandav Caves",
    category: "Heritage",
    image: "/destination-gallery/pachmarhi/pandav-caves.webp",
    alt: "Ancient rock-cut cave chambers carved into a hillside in Pachmarhi",
    caption:
      "Rock-hewn chambers said to have sheltered the Pandavas in exile.",
    focal: "center 55%",
    aspect: "landscape",
  },
  {
    id: "priyadarshini-point",
    title: "Priyadarshini Point",
    category: "Viewpoint",
    image: "/destination-gallery/pachmarhi/priyadarshini.webp",
    alt: "Mist pooling in a forested valley as seen from Priyadarshini Point",
    caption:
      "A balcony over the valley, where morning mist pools like still water.",
    focal: "center 46%",
    aspect: "landscape",
  },
  {
    id: "forest-trails",
    title: "Forest Trails",
    category: "Wilderness",
    image: "/destination-gallery/pachmarhi/forest-trails.webp",
    alt: "A sunlit path winding through dense Satpura forest",
    caption:
      "Teak and sal close overhead; the path is a ribbon of filtered gold.",
    focal: "center center",
    aspect: "portrait",
  },
  {
    id: "satpura-panorama",
    title: "Satpura Mountain Panorama",
    category: "Landscape",
    image: "/destination-gallery/pachmarhi/satpura-panorama.webp",
    alt: "Layered mountain ridges of the Satpura range fading into blue mist",
    caption:
      "Layer upon layer of the ancient range, fading from forest green to distant blue.",
    focal: "center 40%",
    aspect: "wide",
  },
];
