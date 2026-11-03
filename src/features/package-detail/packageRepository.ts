import type { PublicPackage } from './types';
import rawPackages from './data/public-packages.json';

export interface PackageQuery {
  search?: string;
  offset?: number;
  limit?: number;
}

export interface PackageRepository {
  listPublishedPackages(query?: PackageQuery): Promise<PublicPackage[]>;
  getPublishedPackageBySlug(slug: string): Promise<PublicPackage | undefined>;
  getRelatedPublishedPackages(packageId: string): Promise<PublicPackage[]>;
}

const localPackages = (rawPackages as PublicPackage[]).filter(
  (pkg) => pkg.status === 'preview' || pkg.status === 'published'
);

function matchesQuery(pkg: PublicPackage, query: PackageQuery): boolean {
  const search = query.search?.trim().toLowerCase();
  return !search || [pkg.title, pkg.code, pkg.slug, pkg.routeRaw].some((value) =>
    value.toLowerCase().includes(search)
  );
}

export class LocalMockPackageRepository implements PackageRepository {
  async listPublishedPackages(query: PackageQuery = {}): Promise<PublicPackage[]> {
    const offset = Math.max(0, query.offset ?? 0);
    const limit = query.limit === undefined ? localPackages.length : Math.max(0, query.limit);
    return localPackages.filter((pkg) => matchesQuery(pkg, query)).slice(offset, offset + limit);
  }

  async getPublishedPackageBySlug(slug: string): Promise<PublicPackage | undefined> {
    const normalized = slug.trim().toLowerCase();
    return localPackages.find((pkg) => pkg.slug.toLowerCase() === normalized);
  }

  async getRelatedPublishedPackages(packageId: string): Promise<PublicPackage[]> {
    const normalized = packageId.trim().toLowerCase();
    return localPackages.filter(
      (pkg) => pkg.slug.toLowerCase() !== normalized && pkg.code.toLowerCase() !== normalized
    );
  }
}

/**
 * Future boundary for the approved Supabase frontend contract.
 * The implementation must be supplied with an approved client and schema mapper;
 * no table names or database columns are assumed here.
 */
export interface SupabasePackageRepository extends PackageRepository {}

export const localMockPackageRepository = new LocalMockPackageRepository();
