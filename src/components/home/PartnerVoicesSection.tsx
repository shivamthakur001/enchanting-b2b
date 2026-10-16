import { useMemo, useState } from "react";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { partnerVoices, type PartnerVoice } from "../../data/partnerVoices";
import { usePremiumTilt } from "../../hooks/usePremiumTilt";
import "./PartnerVoicesSection.css";

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m14 6-6 6 6 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m10 6 6 6-6 6" />
    </svg>
  );
}

function PartnerMark({ partner }: { partner: PartnerVoice }) {
  if (partner.logo) {
    return (
      <div className="pv-brand__logo-wrap">
        <img
          className="pv-brand__logo"
          src={partner.logo}
          alt={partner.logoAlt || partner.partnerName}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="pv-brand__wordmark" aria-label={partner.partnerName}>
      {partner.partnerName}
    </div>
  );
}

export function PartnerVoicesSection() {
  const [activeId, setActiveId] = useState(partnerVoices[0]?.id ?? "");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Soft shared tilt applied strictly to the testimonial card panel (max ~2 deg)
  const tilt = usePremiumTilt<HTMLDivElement>({
    strength: "subtle",
    maxRotate: 2,
    scale: 1.003,
  });

  const activeIndex = Math.max(
    partnerVoices.findIndex((partner) => partner.id === activeId),
    0,
  );

  const activePartner = useMemo(
    () => partnerVoices[activeIndex] ?? partnerVoices[0],
    [activeIndex],
  );

  if (!activePartner) return null;

  const changePartner = (index: number) => {
    const length = partnerVoices.length;
    if (!length) return;
    const wrapped = (index + length) % length;
    setActiveId(partnerVoices[wrapped].id);
    setExpandedId(null);
  };

  const isExpanded = expandedId === activePartner.id;

  const handleSelectorKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const key = event.key;

    if (key === "ArrowRight" || key === "ArrowDown") {
      event.preventDefault();
      changePartner(activeIndex + 1);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      event.preventDefault();
      changePartner(activeIndex - 1);
    }

    if (key === "Home") {
      event.preventDefault();
      changePartner(0);
    }

    if (key === "End") {
      event.preventDefault();
      changePartner(partnerVoices.length - 1);
    }
  };

  return (
    <section id="partner-voices" className="pv-section" aria-labelledby="partner-voices-title">
      <div className="pv-shell">
        <EditorialSectionHeading
          eyebrow="B2B TRUST"
          scriptWord="Our"
          title="Trusted Partner Voices"
          intro="Real experiences from real partners — hear why travel professionals across the country choose to work with us."
        />

        <div
          ref={tilt.ref}
          className="pv-stage"
          aria-live="polite"
          onPointerEnter={tilt.onPointerEnter}
          onPointerMove={tilt.onPointerMove}
          onPointerLeave={tilt.onPointerLeave}
          onBlur={tilt.onBlur}
        >
          <div className="pv-brand">
            <div className="pv-brand__inner">
              <p className="pv-brand__eyebrow">Selected Partner</p>
              <PartnerMark partner={activePartner} />
              <p className="pv-brand__name">{activePartner.partnerName}</p>
              {activePartner.partnerMeta ? (
                <p className="pv-brand__meta">{activePartner.partnerMeta}</p>
              ) : null}
            </div>

            <div className="pv-brand__counter">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="pv-brand__counter-line" aria-hidden="true" />
              <span>{String(partnerVoices.length).padStart(2, "0")}</span>
            </div>
          </div>

          <article
            className="pv-quote"
            key={activePartner.id}
            id={`partner-panel-${activePartner.id}`}
            role="region"
            aria-label={`Testimonial from ${activePartner.partnerName}`}
          >
            <span className="pv-quote__mark" aria-hidden="true">“</span>
            <p className="pv-quote__copy">{activePartner.highlightQuote}</p>

            {(activePartner.personName ||
              activePartner.designation ||
              activePartner.partnerName) && (
              <div className="pv-identity">
                {activePartner.personName ? (
                  <strong>{activePartner.personName}</strong>
                ) : null}
                <span>
                  {[activePartner.designation, activePartner.partnerName]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </div>
            )}

            {activePartner.fullTestimonial ? (
              <>
                <button
                  type="button"
                  className="pv-readmore"
                  aria-expanded={isExpanded}
                  aria-controls={`fullnote-${activePartner.id}`}
                  onClick={() =>
                    setExpandedId(isExpanded ? null : activePartner.id)
                  }
                >
                  <span>{isExpanded ? "Close Full Note" : "Read Full Note"}</span>
                  <span className="pv-readmore__symbol" aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`fullnote-${activePartner.id}`}
                  className={`pv-fullnote${isExpanded ? " pv-fullnote--open" : ""}`}
                >
                  <div className="pv-fullnote__inner">
                    <p>{activePartner.fullTestimonial}</p>
                  </div>
                </div>
              </>
            ) : null}
          </article>

          <div className="pv-stage__nav" aria-label="Partner testimonial navigation">
            <button
              type="button"
              className="pv-arrow"
              aria-label="Previous partner testimonial"
              onClick={() => changePartner(activeIndex - 1)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="pv-arrow"
              aria-label="Next partner testimonial"
              onClick={() => changePartner(activeIndex + 1)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          className="pv-selector"
          role="tablist"
          aria-label="Choose a partner testimonial"
          onKeyDown={handleSelectorKeyDown}
        >
          {partnerVoices.map((partner, index) => {
            const selected = partner.id === activePartner.id;

            return (
              <button
                key={partner.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`partner-panel-${partner.id}`}
                id={`tab-${partner.id}`}
                tabIndex={selected ? 0 : -1}
                className={`pv-selector__item${
                  selected ? " pv-selector__item--active" : ""
                }`}
                onClick={() => {
                  setActiveId(partner.id);
                  setExpandedId(null);
                }}
              >
                <span className="pv-selector__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pv-selector__name">{partner.partnerName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PartnerVoicesSection;
