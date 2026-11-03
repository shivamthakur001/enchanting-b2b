import type { PackagePhotoConfig, PublicPackage, ResolvedPhoto } from './types';
import { getPackagePhotos } from './photoMapping';

export interface PackageBanner {
  url?: string;
  bucket?: string;
  path?: string;
  alt?: string;
  focalPosition?: string;
  version?: string;
}

export const PACKAGE_BANNER_PLACEHOLDER = '/package-assets/package-banner-placeholder.svg';

export function resolvePackageBanner(pkg: PublicPackage, production = false): ResolvedPhoto {
  const banner = pkg.media.banner;
  if (banner?.url || (banner?.bucket && banner?.path)) {
    return {
      src: banner.url ?? `/${banner.bucket}/${banner.path}`,
      alt: banner.alt || `${pkg.title} package banner`,
      isDemo: false,
      source: 'backend',
      focalPosition: banner.focalPosition,
      version: banner.version,
    };
  }

  if (!production) {
    return { ...getPackagePhotos(pkg).hero, source: 'local-demo' };
  }

  return {
    src: PACKAGE_BANNER_PLACEHOLDER,
    alt: `${pkg.title} package banner is not available`,
    isDemo: false,
    source: 'placeholder',
  };
}

export function resolvePackageMedia(pkg: PublicPackage, production = false): PackagePhotoConfig {
  const photos = getPackagePhotos(pkg);
  return { ...photos, hero: resolvePackageBanner(pkg, production) };
}
