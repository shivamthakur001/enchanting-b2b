import { useEffect, useMemo, useState } from "react";
import type { GalleryContent } from "../data/galleryContent";
import type { DestinationGalleryRegistration } from "../galleryManager";
import {
  createGalleryRepository,
  LocalManifestGalleryRepository,
  type GalleryRepository,
} from "../../../features/destination-gallery/galleryRepository";

/**
 * useGalleryContent
 * Automatically fetches manifest.json, watches Vite HMR events for zero-command photo discovery,
 * and handles dynamic image counts.
 */
export function useGalleryContent(
  registration: DestinationGalleryRegistration | undefined,
  backendRepository?: GalleryRepository
): GalleryContentState {
  const [content, setContent] = useState<GalleryContent | null>(null);
  const [version, setVersion] = useState<number>(0);
  const [status, setStatus] = useState<GalleryLoadStatus>("loading");

  const manifestPath = registration?.manifestPath ?? null;
  const slug = registration?.slug ?? null;
  const repository = useMemo(
    () => registration
      ? createGalleryRepository(
          new LocalManifestGalleryRepository("/destination-gallery", registration.photoMetadata),
          backendRepository
        )
      : null,
    [backendRepository, registration]
  );

  // 1. Listen for Vite HMR custom events emitted by viteGalleryPlugin
  useEffect(() => {
    if (!import.meta.hot || !slug) return;

    const handleHmrUpdate = (data: { slug?: string; count?: number; timestamp?: number }) => {
      if (!data?.slug || data.slug.toLowerCase() === slug.toLowerCase()) {
        setVersion((v) => v + 1);
      }
    };

    import.meta.hot.on("gallery:manifest-updated", handleHmrUpdate);
    return () => {
      import.meta.hot?.off("gallery:manifest-updated", handleHmrUpdate);
    };
  }, [slug]);

  // 2. Window focus check — re-verifies manifest when user switches back from file explorer
  useEffect(() => {
    if (!manifestPath) return;

    const handleFocus = () => {
      setVersion((v) => v + 1);
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [manifestPath]);

  // 3. Manifest fetch with cache-busting
  useEffect(() => {
    if (!manifestPath) return;

    let cancelled = false;
    setStatus("loading");

    void repository
      ?.getGalleryByDestinationSlug(slug ?? "")
      .then((data) => {
        if (!cancelled) {
          if (data.publicationState === "error") {
            setContent(null);
            setStatus("error");
            return;
          }
          const photos = data.items.length
            ? data.items
            : [];
          setContent({
            id: data.destinationSlug,
            eyebrow: registration?.eyebrow ?? `${data.destinationSlug.toUpperCase()} COLLECTION`,
            heading: registration?.heading ?? `Discover ${data.destinationSlug.charAt(0).toUpperCase() + data.destinationSlug.slice(1)}.`,
            tagline: registration?.tagline ?? "Unfold the Extraordinary.",
            description: registration?.description ?? `${photos.length} extraordinary frames. One unforgettable journey.`,
            collectionName: `${data.destinationSlug} photographic collection`,
            envelopeMonogram: registration?.monogram ?? data.destinationSlug.charAt(0).toUpperCase(),
            photos,
          });
          setStatus(data.publicationState);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.warn("[useGalleryContent] Failed to fetch manifest:", err);
          setContent(null);
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [manifestPath, repository, slug, version]);

  return {
    content,
    status: registration ? status : "unconfigured",
    retry: () => setVersion((current) => current + 1),
  };
}

export type GalleryLoadStatus = "loading" | "published" | "empty" | "unconfigured" | "error";

export interface GalleryContentState {
  content: GalleryContent | null;
  status: GalleryLoadStatus;
  retry: () => void;
}
