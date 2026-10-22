import type { Plugin, ViteDevServer } from "vite";
import { readdirSync, writeFileSync, existsSync, statSync } from "fs";
import { join, extname } from "path";

const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/** Natural string sort: e.g. pachmari (2) comes before pachmari (10) */
export function naturalSortCompare(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

export function generateManifestForSlug(slug: string, galleryRoot: string): number {
  const folderPath = join(galleryRoot, slug);
  if (!existsSync(folderPath) || !statSync(folderPath).isDirectory()) return 0;

  const files = readdirSync(folderPath)
    .filter((f) => {
      const ext = extname(f).toLowerCase();
      return SUPPORTED_EXTS.has(ext) && !f.startsWith(".");
    })
    .sort(naturalSortCompare);

  const manifest = {
    slug,
    generatedAt: new Date().toISOString(),
    images: files.map((filename) => ({
      filename,
      path: `/destination-gallery/${slug}/${filename}`,
    })),
  };

  const manifestPath = join(folderPath, "manifest.json");
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  return files.length;
}

export function generateAllGalleryManifests(galleryRoot: string): void {
  if (!existsSync(galleryRoot)) return;
  const destinations = readdirSync(galleryRoot).filter((name) => {
    return statSync(join(galleryRoot, name)).isDirectory();
  });
  for (const slug of destinations) {
    generateManifestForSlug(slug, galleryRoot);
  }
}

/**
 * galleryWatcherPlugin
 * Vite plugin for zero-command automatic gallery photo discovery.
 * - Watches public/destination-gallery/<slug>/* for additions, deletions, renames, replacements
 * - Regenerates destination manifest.json automatically
 * - Notifies Vite dev server via custom HMR event: `gallery:manifest-updated`
 * - Also guarantees fresh manifests on `vite build` via `buildStart`
 */
export function galleryWatcherPlugin(): Plugin {
  let galleryRoot = "";

  return {
    name: "vite-plugin-gallery-watcher",

    configResolved(config) {
      galleryRoot = join(config.root, "public", "destination-gallery");
    },

    buildStart() {
      // Auto-generate manifests for build / dev startup
      if (galleryRoot && existsSync(galleryRoot)) {
        generateAllGalleryManifests(galleryRoot);
      }
    },

    configureServer(server: ViteDevServer) {
      if (!galleryRoot || !existsSync(galleryRoot)) return;

      // Ensure manifests are up to date on server start
      generateAllGalleryManifests(galleryRoot);

      // Watch destination gallery directory
      server.watcher.add(galleryRoot);

      // Watch destination assets directory (Hero, Highlights, Themes, Packages)
      const assetsRoot = join(galleryRoot, "..", "destination-assets");
      if (existsSync(assetsRoot)) {
        server.watcher.add(assetsRoot);
      }

      // Safe cache-control: ensure destination assets are always revalidated on refresh during dev
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/destination-assets/")) {
          res.setHeader("Cache-Control", "no-cache, must-revalidate");
        }
        next();
      });

      let debounceTimer: ReturnType<typeof setTimeout> | null = null;
      const pendingSlugs = new Set<string>();

      const handleFileChange = (filePath: string) => {
        const normalized = filePath.replace(/\\/g, "/");

        // Auto-refresh when any destination-asset is replaced, added or deleted
        if (normalized.includes("/destination-assets/")) {
          const ext = extname(filePath).toLowerCase();
          if (SUPPORTED_EXTS.has(ext)) {
            console.log(`[destination-assets] Asset updated: ${filePath}`);
            server.ws.send({ type: "full-reload" });
          }
          return;
        }

        const match = normalized.match(/\/destination-gallery\/([^/]+)\/(.+)$/);
        if (!match) return;

        const [, slug, filename] = match;
        // Ignore manifest.json itself to prevent feedback loops
        if (filename.toLowerCase() === "manifest.json") return;

        const ext = extname(filename).toLowerCase();
        if (!SUPPORTED_EXTS.has(ext)) return;

        pendingSlugs.add(slug);

        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          for (const s of pendingSlugs) {
            const count = generateManifestForSlug(s, galleryRoot);
            console.log(`[gallery-watcher] Auto-detected changes in "${s}". Manifest updated with ${count} image(s).`);

            // Broadcast HMR custom event to browser
            server.ws.send({
              type: "custom",
              event: "gallery:manifest-updated",
              data: {
                slug: s,
                count,
                timestamp: Date.now(),
              },
            });
          }
          pendingSlugs.clear();
        }, 120);
      };

      server.watcher.on("add", handleFileChange);
      server.watcher.on("unlink", handleFileChange);
      server.watcher.on("change", handleFileChange);
    },
  };
}
