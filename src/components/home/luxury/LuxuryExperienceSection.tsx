import "./LuxuryExperienceSection.css";
import ExperientialStays from "./ExperientialStays";
import PremiumPackages from "./PremiumPackages";

export function LuxuryExperienceSection() {
  return (
    <section id="luxury" className="lx-root" aria-label="Curated luxury experiences">
      <div className="lx-texture" aria-hidden="true" />
      <div className="lx-vignette" aria-hidden="true" />

      <div className="lx-content">
        <div className="lx-container">
          <div className="lx-intro">
            <span className="lx-eyebrow">Curated Luxury</span>
            <p className="lx-intro-statement">
              Exceptional stays and private journeys through Madhya Pradesh,
              shaped around heritage, wilderness, sacred landscapes and slow
              travel.
            </p>
          </div>
        </div>

        <ExperientialStays />

        <div className="lx-bridge">
          <span className="lx-bridge-line" aria-hidden="true" />
          <span className="lx-bridge-text">From Exceptional Stays to Private Journeys</span>
          <p className="lx-bridge-sub">The journey continues, beyond where you stay.</p>
        </div>

        <PremiumPackages />
      </div>
    </section>
  );
}

export default LuxuryExperienceSection;
