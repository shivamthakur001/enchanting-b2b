import type { PublicPackage } from './types';
import rawPackages from './data/public-packages.json';
import {
  localMockPackageRepository,
  type PackageQuery,
} from './packageRepository';

const publicPackages: PublicPackage[] = (rawPackages as PublicPackage[]).filter(
  (pkg) => pkg.status === 'preview' || pkg.status === 'published'
);

const packageBySlug = new Map<string, PublicPackage>();
const packageByCode = new Map<string, PublicPackage>();

for (const pkg of publicPackages) {
  packageBySlug.set(pkg.slug.toLowerCase(), pkg);
  packageByCode.set(pkg.code.toLowerCase(), pkg);
}

export function getAllPublicPackages(): PublicPackage[] {
  return publicPackages;
}

export function getPublicPackageBySlug(slug: string | undefined): PublicPackage | undefined {
  if (!slug) return undefined;
  return packageBySlug.get(slug.toLowerCase().trim());
}

export function getPublicPackageByCode(code: string | undefined): PublicPackage | undefined {
  if (!code) return undefined;
  return packageByCode.get(code.toLowerCase().trim());
}

export function getRelatedPackages(currentSlug: string): PublicPackage[] {
  const norm = currentSlug.toLowerCase().trim();
  return publicPackages.filter((p) => p.slug.toLowerCase() !== norm);
}

export async function listPublishedPackages(query?: PackageQuery): Promise<PublicPackage[]> {
  return localMockPackageRepository.listPublishedPackages(query);
}

export async function getPublishedPackageBySlug(slug: string): Promise<PublicPackage | undefined> {
  return localMockPackageRepository.getPublishedPackageBySlug(slug);
}

export async function getRelatedPublishedPackages(packageId: string): Promise<PublicPackage[]> {
  return localMockPackageRepository.getRelatedPublishedPackages(packageId);
}
