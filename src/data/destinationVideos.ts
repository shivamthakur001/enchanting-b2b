/**
 * Destination Video Asset Registry for Enchanting Madhya Pradesh.
 *
 * Map destination slugs to actual video assets.
 * Video files can be placed in `public/videos/destinations/[slug].mp4`
 * or configured to custom hosted URLs.
 */
export const destinationVideos: Record<string, string> = {
  orchha: "/videos/destinations/orchha.mp4",
  kanha: "/videos/destinations/kanha.mp4",
  ujjain: "/videos/destinations/ujjain.mp4",
  bhedaghat: "/videos/destinations/bhedaghat.mp4",
  khajuraho: "/videos/destinations/khajuraho.mp4",
  pachmarhi: "/videos/destinations/pachmarhi.mp4",
  amarkantak: "/videos/destinations/amarkantak.mp4",
  tamia: "/videos/destinations/tamia.mp4",
  "raneh-falls": "/videos/destinations/raneh-falls.mp4",
  patalkot: "/videos/destinations/patalkot.mp4",
  gwalior: "/videos/destinations/gwalior.mp4",
  mandu: "/videos/destinations/mandu.mp4",
  bhimbetka: "/videos/destinations/bhimbetka.mp4",
  maheshwar: "/videos/destinations/maheshwar.mp4",
  pench: "/videos/destinations/pench.mp4",
  bandhavgarh: "/videos/destinations/bandhavgarh.mp4",
  satpura: "/videos/destinations/satpura.mp4",
  panna: "/videos/destinations/panna.mp4",
  kuno: "/videos/destinations/kuno.mp4",
  omkareshwar: "/videos/destinations/omkareshwar.mp4",
  sanchi: "/videos/destinations/sanchi.mp4",
  chitrakoot: "/videos/destinations/chitrakoot.mp4",
};

/**
 * Returns the mapped video asset URL for a given destination slug.
 */
export function getDestinationVideo(slug: string): string | undefined {
  return destinationVideos[slug];
}
