import { Link } from "../../../router/Router";
import { media } from "../../../data/media";
import { ArrowRightIcon } from "../../icons/Icons";

export function NatureClosingCTA() {
  const scrollToDestinations = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("nature-destinations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="nature-closing-cta" aria-label="Build a Nature Journey CTA">
      {/* Background imagery with deep forest gradient */}
      <img
        src={media.cascade}
        alt="Highland forest waterfall and emerald pool in Madhya Pradesh"
        className="nature-closing-cta__bg"
        loading="lazy"
      />
      <div className="nature-closing-cta__overlay" />

      <div className="nature-closing-cta__content">
        <p className="nature-closing-cta__eyebrow">
          Tailored Trade Itineraries
        </p>

        <h2 className="nature-closing-cta__title">
          Build a Nature Journey
          <span className="nature-closing-cta__title-script">
            into the Heart of India
          </span>
        </h2>

        <p className="nature-closing-cta__copy">
          From mist-covered highlands to marble gorges, shape an authentic Madhya Pradesh itinerary around ancient hills, waterfalls, and undisturbed wilderness.
        </p>

        <div className="nature-closing-cta__actions">
          <a
            href="#nature-destinations"
            onClick={scrollToDestinations}
            className="nature-btn nature-btn--secondary"
          >
            Explore All Nature Destinations
          </a>

          <Link to="/create-query?theme=nature" className="nature-btn nature-btn--primary">
            <span>Create Query</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
