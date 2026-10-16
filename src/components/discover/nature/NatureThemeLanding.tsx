import type { Destination, TravelPackage, DiscoverTheme } from "../../../types";
import { NatureHero } from "./NatureHero";
import { NatureThemeSwitcher } from "./NatureThemeSwitcher";
import { NatureIntro } from "./NatureIntro";
import { NatureLandscapes } from "./NatureLandscapes";
import { NatureDestinations } from "./NatureDestinations";
import { NatureProgrammes } from "./NatureProgrammes";
import { NatureClosingCTA } from "./NatureClosingCTA";
import { NatureLeafBackground } from "./NatureLeafBackground";
import { naturePageConfig } from "../../../config/naturePageConfig";
import "../../../styles/nature-theme.css";

interface NatureThemeLandingProps {
  theme: DiscoverTheme;
  destinations: Destination[];
  packages: TravelPackage[];
}

export function NatureThemeLanding({
  theme,
  destinations,
  packages,
}: NatureThemeLandingProps) {
  return (
    <div className="nature-page-wrapper" data-theme="nature">
      <NatureLeafBackground />

      {/* 1 & 2. Cinematic Hero & Motion */}
      <NatureHero />

      {/* 3. Refined Editorial Theme Switcher (anchored below hero) */}
      {naturePageConfig.themeSwitcher.enabled && <NatureThemeSwitcher activeSlug={theme.slug} />}

      {/* 4. Intro — The Landscape Story */}
      <NatureIntro />

      {/* 5. Nature Landscape Chapters */}
      {naturePageConfig.expressions.enabled && <NatureLandscapes />}

      {/* 6 & 7. Nature Destinations (Asymmetric Editorial Showcase & Seamless Transitions) */}
      {naturePageConfig.destinations.enabled && <NatureDestinations destinations={destinations} />}

      {/* 8. Nature Programmes for the Trade */}
      {naturePageConfig.programmes.enabled && <NatureProgrammes packages={packages} />}

      {/* 9. Final Cinematic Nature CTA */}
      {naturePageConfig.closingCTA.enabled && <NatureClosingCTA />}
    </div>
  );
}
