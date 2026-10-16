export type HeroOffer = {
  id: string;
  poster: string;
  alt: string;
  deskLabel: string;
  exploreUrl: string;
  queryUrl: string;
  objectPosition?: string;
};

const posterModules = import.meta.glob<string>(
  "../assets/hero-offers/offer-*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

function extractOfferNumber(path: string): number {
  const match = path.match(/offer-(\d+)/i);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

const sortedPaths = Object.keys(posterModules).sort((pathA, pathB) => {
  const numA = extractOfferNumber(pathA);
  const numB = extractOfferNumber(pathB);
  if (numA !== numB) {
    return numA - numB;
  }
  return pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: "base" });
});

export const heroOffers: HeroOffer[] = sortedPaths.map((path, index) => {
  const offerNumber = index + 1;
  const posterUrl = posterModules[path];
  const fileNum = extractOfferNumber(path);
  const id =
    Number.isFinite(fileNum) && fileNum < Number.MAX_SAFE_INTEGER
      ? `offer-${String(fileNum).padStart(2, "0")}`
      : `offer-${String(offerNumber).padStart(2, "0")}`;

  return {
    id,
    poster: posterUrl,
    alt: `Offer ${offerNumber}`,
    deskLabel: `Offer ${offerNumber}`,
    exploreUrl: "/offers",
    queryUrl: `/create-query?offer=${id}`,
    objectPosition: "center",
  };
});
