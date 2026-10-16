import { useState } from "react";
import { premiumPackages } from "../../../data/premiumPackages";
import { EditorialSectionHeading } from "../EditorialSectionHeading";
import { PremiumTilt } from "../../ui/PremiumTilt";
import { Link } from "../../../router/Router";

export default function PremiumPackages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = premiumPackages.length;
  const active = premiumPackages[activeIndex] ?? premiumPackages[0];

  const supportingIndexes: number[] = [];
  for (let offset = 1; offset < total && supportingIndexes.length < 2; offset += 1) {
    supportingIndexes.push((activeIndex + offset) % total);
  }

  const designJourneyHref = active.journeyDesignUrl && active.journeyDesignUrl !== "#"
    ? active.journeyDesignUrl
    : `/create-query?package=${encodeURIComponent(active.title)}`;

  const proposalHref = active.proposalUrl && active.proposalUrl !== "#"
    ? active.proposalUrl
    : `/create-query?package=${encodeURIComponent(active.title)}&type=proposal`;

  return (
    <section className="lp-section" aria-label="Our Premium Packages">
      <div className="lx-container">
        {/*
          Master EditorialSectionHeading:
          "Our Premium" in Pinyon Script with animated underline
          "Packages" in Cormorant Garamond display serif
        */}
        <EditorialSectionHeading
          eyebrow="TAILORED PRIVATE ITINERARIES"
          scriptWord="Our Premium"
          title="Packages"
          intro="Private journeys shaped around exceptional stays, personal pacing and meaningful access."
        />

        {/*
          Featured Journey:
          Master PremiumTilt strength="featured" (~3.8deg, scale 1.01).
          Inner image has independent slow cinematic drift.
        */}
        <PremiumTilt strength="featured" className="lp-featured-tilt" style={{ marginTop: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
          <article
            className="lp-featured"
            aria-label={`${active.title}, featured private journey`}
            key={active.id}
          >
            <div className="lp-featured-media">
              {premiumPackages.map((pkg, index) => (
                <img
                  key={pkg.id}
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  className={`lp-img${index === activeIndex ? " is-active" : ""}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="lp-featured-scrim" />
              <div className="lp-featured-body">
                <p className="lp-category">{active.category}</p>
                <h3 className="lp-title">{active.title}</h3>
                <p className="lp-meta-row">
                  <span>{active.duration}</span>
                  <span className="lp-dot" aria-hidden="true">·</span>
                  <span>{active.route.join(" → ")}</span>
                </p>
                <p className="lp-desc">{active.shortDescription}</p>
                <div className="lp-cues" aria-label="Signature cues">
                  {active.signatureCues.map((cue) => (
                    <span className="lp-cue" key={cue}>
                      {cue}
                    </span>
                  ))}
                </div>
                <div className="lp-cta-row">
                  <Link className="lp-cta-primary" to={designJourneyHref}>
                    <span>Design My Journey</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link className="lp-cta-secondary" to={proposalHref}>
                    <span>Request a Private Proposal</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </PremiumTilt>

        {/*
          Supporting Journeys:
          Master PremiumTilt strength="normal" (~5deg, scale 1.015) for standard cards.
        */}
        <div className="lp-support-grid">
          {supportingIndexes.map((index) => {
            const pkg = premiumPackages[index];
            if (!pkg) return null;
            return (
              <PremiumTilt
                key={pkg.id}
                strength="normal"
                className="lp-support-tilt"
              >
                <button
                  type="button"
                  className="lp-support-card"
                  aria-selected={false}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Switch featured journey to ${pkg.title}`}
                >
                  <span className="lp-support-media">
                    <img src={pkg.image} alt={pkg.imageAlt} loading="lazy" />
                  </span>
                  <span className="lp-support-body">
                    <span className="lp-support-category">{pkg.category}</span>
                    <span className="lp-support-title">{pkg.title}</span>
                    <span className="lp-support-duration">{pkg.duration}</span>
                    <span className="lp-support-route">{pkg.route.join(" → ")}</span>
                  </span>
                </button>
              </PremiumTilt>
            );
          })}
        </div>

        {/* Compact journey selector - NOT inside tilt */}
        <div className="lp-selector" role="tablist" aria-label="Choose a journey">
          {premiumPackages.map((pkg, index) => (
            <button
              key={pkg.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
              className="lp-selector-item"
              onClick={() => setActiveIndex(index)}
            >
              {pkg.title}
            </button>
          ))}
        </div>

        {/* Subtle tertiary CTA */}
        <p className="lp-tertiary">
          <span>Not sure where to begin?</span>
          <Link to="/create-query">
            Speak to a Travel Designer <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
