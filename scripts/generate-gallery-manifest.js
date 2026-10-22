#!/usr/bin/env node
/**
 * generate-gallery-manifest.js
 * ============================
 * Build-time script: scans public/destination-gallery/* folders and writes
 * a manifest.json into each subfolder so the browser can discover images.
 *
 * Usage: node scripts/generate-gallery-manifest.js
 * Or via: npm run generate-gallery-manifest
 *
 * Auto-runs before `npm run dev` and `npm run build` via package.json scripts.
 *
 * SUPPORTED FORMATS: .jpg .jpeg .png .webp .avif
 * OUTPUT: public/destination-gallery/<slug>/manifest.json
 *
 * PRODUCTION NOTE:
 * Adding a new photo to a deployed site requires a new BUILD + DEPLOYMENT.
 * Copying a file to /public on a local dev machine only works after restarting
 * the dev server (which re-runs this script).
 */

import { readdirSync, writeFileSync, existsSync, statSync } from "fs";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const galleryRoot = join(__dirname, "..", "public", "destination-gallery");

if (!existsSync(galleryRoot)) {
  console.log("[gallery-manifest] No destination-gallery folder found. Skipping.");
  process.exit(0);
}

const destinations = readdirSync(galleryRoot).filter((name) => {
  const fullPath = join(galleryRoot, name);
  return statSync(fullPath).isDirectory();
});

if (destinations.length === 0) {
  console.log("[gallery-manifest] No destination subfolders found.");
  process.exit(0);
}

let totalImages = 0;

for (const slug of destinations) {
  const folderPath = join(galleryRoot, slug);
  const files = readdirSync(folderPath)
    .filter((f) => {
      const ext = extname(f).toLowerCase();
      return SUPPORTED.has(ext) && !f.startsWith(".");
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

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

  totalImages += files.length;
  console.log(
    `[gallery-manifest] ${slug}: ${files.length} image(s) -> manifest.json`
  );
}

console.log(
  `[gallery-manifest] Done. ${destinations.length} destination(s), ${totalImages} total image(s).`
);
