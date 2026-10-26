import { Link, useParams } from "../router/Router";
import { getTheme, discoverThemes } from "../data/themes";
import { getDestinationsByTheme } from "../data/destinations";
import { getPackagesByTheme } from "../data/packages";
import { ThemeDestinationGrid } from "../components/destinations/DestinationCard";
import { ThemePackageSection } from "../components/packages/PackageCard";
import { NatureThemeLanding } from "../components/discover/nature/NatureThemeLanding";
import { HeritageLandingPage } from "../components/discover/heritage/HeritageLandingPage";
import { WildlifeLandingPage } from "../components/discover/wildlife/WildlifeLandingPage";
import { CinematicThemeSwitcher } from "../components/discover/shared/CinematicThemeSwitcher";
import { cn } from "../utils/cn";

export function DiscoverThemePage() {
  const { slug } = useParams<{ slug: string }>();
  const theme = getTheme(slug);

  if (!theme) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Theme not found</h1>
        <p className="mt-3 text-ink-muted">That discover theme is not in the current collection.</p>
        <Link to="/" className="mt-6 inline-block text-forest">
          Return home
        </Link>
      </div>
    );
  }

  const destinations = getDestinationsByTheme(theme.slug);
  const relatedPackages = getPackagesByTheme(theme.slug);

  if (theme.slug === "nature") {
    return (
      <NatureThemeLanding
        theme={theme}
        destinations={destinations}
        packages={relatedPackages}
      />
    );
  }

  if (theme.slug === "heritage") {
    return <HeritageLandingPage destinations={destinations} packages={relatedPackages} />;
  }

  if (theme.slug === "wildlife") {
    return (
      <WildlifeLandingPage
        theme={theme}
        destinations={destinations}
        packages={relatedPackages}
      />
    );
  }

  return (
    <div style={{ background: theme.visual.background }}>
      <section className="relative min-h-[52vh] overflow-hidden">
        <img src={theme.heroImage} alt={theme.heroImageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className={cn("absolute inset-0 bg-gradient-to-t", theme.visual.overlay)} />
        <div className="relative mx-auto flex min-h-[52vh] max-w-[1440px] flex-col justify-end px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-ivory/70 uppercase">
            Discover · {theme.visual.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-5xl text-ivory sm:text-6xl lg:text-7xl">{theme.name}</h1>
          <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-ivory/85">{theme.shortDescription}</p>
        </div>
      </section>

      <CinematicThemeSwitcher activeSlug={theme.slug} />

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <nav aria-label="Other themes" className="mb-10 flex flex-wrap gap-2">
          {discoverThemes.map((item) => (
            <Link
              key={item.slug}
              to={`/discover/${item.slug}`}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                item.slug === theme.slug
                  ? "bg-ink text-ivory"
                  : "bg-paper text-ink-muted ring-1 ring-line hover:text-ink",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">Destinations</p>
          <h2 className="mt-1 font-display text-4xl text-ink">{theme.name} across Madhya Pradesh</h2>
        </div>
        <ThemeDestinationGrid destinations={destinations} />
        <ThemePackageSection title={`${theme.name} programmes`} packages={relatedPackages} />
      </div>
    </div>
  );
}

export function DiscoverIndexPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">Discover</p>
      <h1 className="mt-2 font-display text-5xl text-ink">Four ways into Madhya Pradesh</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {discoverThemes.map((theme) => (
          <Link key={theme.slug} to={`/discover/${theme.slug}`} className="group relative min-h-[280px] overflow-hidden rounded-2xl">
            <img src={theme.previewImage} alt={theme.previewImageAlt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-ink/10" />
            <div className="absolute bottom-0 p-6">
              <h2 className="font-display text-4xl text-ivory">{theme.name}</h2>
              <p className="mt-1 text-[14px] text-ivory/80">{theme.microcopy}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
