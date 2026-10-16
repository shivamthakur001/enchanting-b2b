import { Link } from "../../../router/Router";
import { media } from "../../../data/media";
import { ArrowRightIcon } from "../../icons/Icons";
import { naturePageConfig } from "../../../config/naturePageConfig";

export function NatureHero() {
  const scrollToDestinations = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("nature-destinations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="nature-hero" aria-label="Nature in Madhya Pradesh Hero">
      {/* Cinematic scaled background image */}
      <img
        src={media.pachmarhi}
        alt="Forested valleys, mist and ancient sandstone hills of Pachmarhi in the Satpura range"
        className="nature-hero__image-layer"
        loading="eager"
      />

      {/* Atmospheric dark forest and mist gradients */}
      <div className="nature-hero__overlay" aria-hidden="true" />
      <div className="nature-hero__mist-drift" aria-hidden="true" />

      {/* Hero content */}
      <div className="nature-hero__content">
        {naturePageConfig.hero.showEyebrow && (
          <p className="nature-hero__eyebrow">The Wild Heart of Madhya Pradesh</p>
        )}

        <h1 className="nature-hero__title">
          Nature <br />
          <span className="nature-hero__title-accent">in Madhya Pradesh</span>
        </h1>

        <p className="nature-hero__subtitle">
          A landscape shaped by forests, rivers, ancient hills and quiet wilderness.
        </p>

        {(naturePageConfig.hero.showPrimaryCTA || naturePageConfig.hero.showSecondaryCTA) && (
          <div className="nature-hero__actions">
            {naturePageConfig.hero.showPrimaryCTA && (
              <a href="#nature-destinations" onClick={scrollToDestinations} className="nature-btn nature-btn--primary">
                Explore Destinations
                <ArrowRightIcon size={14} />
              </a>
            )}
            {naturePageConfig.hero.showSecondaryCTA && (
              <Link to="/create-query?theme=nature" className="nature-btn nature-btn--secondary">
                Create Query
              </Link>
            )}
          </div>
        )}

        <div className="nature-hero__scroll" aria-hidden="true">
          <span className="nature-hero__scroll-line" />
          <span>Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
}
