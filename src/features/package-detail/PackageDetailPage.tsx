import { useEffect, useState, useMemo } from 'react';
import { useParams } from '../../router/Router';
import {
  getPublicPackageBySlug,
  getPublishedPackageBySlug,
} from './packageService';
import { resolvePackageBanner } from './mediaResolver';
import type { PublicPackage } from './types';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { CompactPackageDetailView } from './compact/CompactPackageDetailView';
import type { CompactMediaOverrides } from './compact/compactPackageAdapter';
import type { PricingOptions } from './compact/LuxuryTradeDeskPricing';
import './PackageDetailPage.css';

const pricingPreviewOptions: PricingOptions = {
  transport: [
    { id: 'preview-private-vehicle', label: 'UI preview · Private vehicle' },
    { id: 'preview-coach', label: 'UI preview · Coach' },
  ],
  hotelCategories: [
    { id: 'preview-boutique', label: 'UI preview · Boutique stay' },
    { id: 'preview-luxury', label: 'UI preview · Luxury stay' },
  ],
  addons: [
    { id: 'preview-guide', label: 'UI preview · Local guide' },
    { id: 'preview-experience', label: 'UI preview · Signature experience' },
  ],
  mealSupplements: [
    { id: 'preview-breakfast', label: 'UI preview · Breakfast supplement' },
    { id: 'preview-dinner', label: 'UI preview · Dinner supplement' },
  ],
  conditions: ['UI preview only — no backend rates or availability are loaded.'],
};

export function PackageDetailPage({ slugOverride }: { slugOverride?: string }) {
  const params = useParams<{ slug?: string }>();
  const slug = (slugOverride ?? params.slug)?.toLowerCase();
  const pricingPreview = true;
  const [pkg, setPackage] = useState<PublicPackage | undefined>(() => getPublicPackageBySlug(slug));
  const [isLoading, setIsLoading] = useState(Boolean(slug));
  const [loadError, setLoadError] = useState<string | null>(null);
  const [request, setRequest] = useState(0);

  useEffect(() => {
    let active = true;
    if (!slug) {
      setPackage(undefined);
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    setPackage(undefined);
    setLoadError(null);
    setIsLoading(true);
    void getPublishedPackageBySlug(slug)
      .then((nextPackage) => {
        if (active) setPackage(nextPackage);
      })
      .catch((error) => {
        if (active) {
          console.error('[PackageDetailPage] Failed to load package', error);
          setPackage(undefined);
          setLoadError('This journey could not be loaded. Please try again.');
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [request, slug]);

  useEffect(() => {
    if (pkg && pkg.slug.toLowerCase() === slug) {
      document.title = `${pkg.title} (${pkg.code}) | Enchanting Madhya Pradesh`;
    }
  }, [pkg, slug]);

  const currentPackage = pkg?.slug.toLowerCase() === slug;

  const media = useMemo<CompactMediaOverrides>(() => {
    if (!pkg) return {};
    const bannerResolved = resolvePackageBanner(pkg, import.meta.env.PROD);
    return {
      banner: {
        src: bannerResolved.src,
        alt: bannerResolved.alt,
      },
    };
  }, [pkg]);

  const isDemoBanner = useMemo(() => {
    if (!pkg) return false;
    const bannerResolved = resolvePackageBanner(pkg, import.meta.env.PROD);
    return bannerResolved.source === 'local-demo';
  }, [pkg]);

  if (isLoading && (!pkg || !currentPackage)) {
    return <main aria-busy="true" className="package-detail-root">Loading journey...</main>;
  }

  if (loadError) {
    return (
      <main className="package-detail-root" role="alert">
        <p>{loadError}</p>
        <button type="button" onClick={() => setRequest((value) => value + 1)}>Retry</button>
      </main>
    );
  }

  if (!pkg || !currentPackage) {
    return <NotFoundPage />;
  }

  return (
    <CompactPackageDetailView
      packageData={pkg}
      media={media}
      isDemoBanner={isDemoBanner}
      agentAuthorized={pricingPreview}
      previewMode={pricingPreview}
      pricingOptions={pricingPreview ? pricingPreviewOptions : undefined}
    />
  );
}

export default PackageDetailPage;
