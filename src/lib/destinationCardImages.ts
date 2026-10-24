import type { SyntheticEvent } from "react";
import type { Destination } from "../types";
import { destinationCardImageManifest } from "../data/destinationCardImages.generated";

const PRIMARY_THEME_FOLDERS: Record<string, string> = {
  nature: "nature",
  heritage: "heritage",
  wildlife: "wildlife",
  spirituality: "spiritual",
};

const SAFE_FALLBACKS: Record<string, string> = {
  nature: "/images/highlights/adventure.png",
  heritage: "/images/highlights/heritage.png",
  wildlife: "/images/highlights/tiger.png",
  spirituality: "/images/highlights/jyotirlingas.png",
};

export function getDestinationCardImage(destination: Destination): string {
  const folder = PRIMARY_THEME_FOLDERS[destination.themes[0] ?? ""];
  const entry = folder ? destinationCardImageManifest[folder]?.[destination.slug] : undefined;
  if (entry) return `${entry.path}?v=${entry.version}`;
  return destination.image || (folder ? SAFE_FALLBACKS[folder] : SAFE_FALLBACKS.heritage);
}

export function getDestinationCardFallbackImage(destination: Destination): string {
  return destination.image || SAFE_FALLBACKS[PRIMARY_THEME_FOLDERS[destination.themes[0] ?? ""] ?? "heritage"];
}

export function handleDestinationCardImageError(
  event: SyntheticEvent<HTMLImageElement>,
  destination: Destination,
) {
  const image = event.currentTarget;
  const fallback = getDestinationCardFallbackImage(destination);
  const safeFallback = SAFE_FALLBACKS[PRIMARY_THEME_FOLDERS[destination.themes[0] ?? ""] ?? "heritage"];

  if (image.dataset.destinationFallback !== "true") {
    image.dataset.destinationFallback = "true";
    image.src = fallback;
  } else if (image.dataset.destinationSafeFallback !== "true") {
    image.dataset.destinationSafeFallback = "true";
    image.src = safeFallback;
  } else {
    image.onerror = null;
  }
}
