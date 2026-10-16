import { Link } from "../router/Router";
import { LimitedOfferHero } from "../components/home/LimitedOfferHero";
import { KnowMadhyaPradeshSection } from "../components/home/KnowMadhyaPradeshSection";
import MadhyaPradeshHighlightsCarousel from "../components/home/MadhyaPradeshHighlightsCarousel";
import { MapSection } from "../components/home/MapSection";
import { WhatWeOfferSection } from "../components/home/WhatWeOfferSection";
import { TopDestinationsSection } from "../components/home/TopDestinationsSection";
import { TopActivitiesSection } from "../components/home/TopActivitiesSection";
import { TopExperiencesSection } from "../components/home/TopExperiencesSection";
import { FeaturedAccommodationsSection } from "../components/home/FeaturedAccommodationsSection";
import { TopJourneysSection } from "../components/home/TopJourneysSection";
import { UpcomingGroupsSection } from "../components/home/UpcomingGroupsSection";
import { LuxuryExperienceSection } from "../components/home/luxury/LuxuryExperienceSection";
import { UpcomingToLuxuryTransition } from "../components/home/UpcomingToLuxuryTransition";
import { FootprintsSection } from "../components/home/FootprintsSection";
import { PartnerVoicesSection } from "../components/home/PartnerVoicesSection";
import { LivingMapDrawer } from "../components/navigation/LivingMapDrawer";

export function HomePage() {
  return (
    <div className="home-page">
      <LivingMapDrawer />
      <LimitedOfferHero />

      <KnowMadhyaPradeshSection />

      {/* ── Silhouette / Highlights Carousel ────────────────────────────────── */}
      <MadhyaPradeshHighlightsCarousel />

      {/* ── Map the Heart of India ───────────────────────────────────────────── */}
      <MapSection />

      <WhatWeOfferSection />

      <TopDestinationsSection />

      <TopActivitiesSection />

      <TopExperiencesSection />

      <FeaturedAccommodationsSection />

      <TopJourneysSection />

      <UpcomingToLuxuryTransition
        upcoming={<UpcomingGroupsSection />}
        luxury={<LuxuryExperienceSection />}
      />

      <FootprintsSection />
      <PartnerVoicesSection />

      <section className="home-cta-section mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-forest-deep px-6 py-12 text-ivory sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-ivory/50 uppercase">
              For travel agents
            </p>
            <h2 className="mt-2 font-display text-4xl">Have a movement in mind?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ivory/70">
              Share dates, pax and preference. The trade desk replies with availability, lodges and
              a working itinerary — usually within one business day.
            </p>
          </div>
          <Link
            to="/create-query"
            className="mt-6 inline-flex h-12 items-center rounded-md bg-ivory px-6 text-[14px] font-semibold text-forest-deep hover:bg-white lg:mt-0"
          >
            Create Query
          </Link>
        </div>
      </section>
    </div>
  );
}
