import { useCallback, useState, type KeyboardEvent } from "react";
import { experientialStays } from "../../../data/experientialStays";
import { EditorialSectionHeading } from "../EditorialSectionHeading";
import { PremiumTilt } from "../../ui/PremiumTilt";
import { Link } from "../../../router/Router";

export default function ExperientialStays() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = experientialStays.length;
  const active = experientialStays[activeIndex] ?? experientialStays[0];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const handleSelectorKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1);
    }
  };

  const queryHref = active.detailUrl && active.detailUrl !== "#"
    ? active.detailUrl
    : `/create-query?notes=${encodeURIComponent(`Inquiry regarding ${active.name}, ${active.location}`)}`;

  return (
    <section className="es-section" aria-label="Experiential Stays">
      <div className="lx-container">
        {/*
          Master EditorialSectionHeading:
          "Experiential" in Pinyon Script with underline animation
          "Stays" in Cormorant Garamond display serif
        */}
        <EditorialSectionHeading
          eyebrow="CURATED PRIVATE RETREATS"
          scriptWord="Experiential"
          title="Stays"
          intro="Five private retreats, each chosen for character rather than category — a fort, a palace, two lodges and a camp, shown one story at a time."
        />

        <div className="es-stage">
          {/*
            Shared MASTER tilt applied to the cinematic visual only.
            strength="featured" matches large showcase cards (~3.8deg, scale 1.01).
            Inner image handles slow cinematic drift independently.
          */}
          <PremiumTilt strength="featured" className="es-tilt-wrap">
            <div
              className="es-frame"
              role="group"
              aria-label={`${active.name}, ${active.location}`}
            >
              <div className="es-frame-media">
                {experientialStays.map((stay, index) => (
                  <img
                    key={stay.id}
                    src={stay.image}
                    alt={stay.imageAlt}
                    className={`es-img${index === activeIndex ? " is-active" : ""}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>
              <div className="es-frame-scrim" />
              <div className="es-frame-meta">
                <span className="es-frame-index">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <span className="es-frame-location">{active.location}</span>
              </div>
            </div>
          </PremiumTilt>

          <div className="es-info" key={active.id}>
            <div className="es-info-fade">
              <h3 className="es-name">{active.name}</h3>
              <p className="es-type">{active.stayType}</p>
              <p className="es-desc">{active.shortDescription}</p>
              <Link className="es-cta" to={queryHref}>
                <span>Discover the Stay</span>
                <span className="es-cta-arrow" aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="es-cues es-info-fade" aria-label="Signature notes">
              <p className="es-cues-label">Signature notes</p>
              {active.experienceCues.map((cue, index) => (
                <p className="es-cue-row" key={cue}>
                  <span className="es-cue-num">{String(index + 1).padStart(2, "0")}</span>
                  <span>{cue}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Compact stay selector - NOT inside tilt */}
        <div
          className="es-selector"
          role="tablist"
          aria-label="Choose an experiential stay"
        >
          {experientialStays.map((stay, index) => (
            <button
              key={stay.id}
              type="button"
              role="tab"
              id={`es-tab-${stay.id}`}
              aria-selected={index === activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
              className="es-selector-item"
              onClick={() => goTo(index)}
              onKeyDown={(event) => handleSelectorKeyDown(event, index)}
            >
              <span className="es-selector-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="es-selector-name">{stay.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
