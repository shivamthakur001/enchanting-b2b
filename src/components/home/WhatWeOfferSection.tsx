import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  clientNeeds,
  getOfferingsForNeed,
  offerings,
  offeringsById,
  type ClientNeedId,
  type Offering,
  type OfferingId,
} from "../../data/whatWeOffer";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { PremiumTilt } from "../ui/PremiumTilt";
import "./WhatWeOfferSection.css";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useIsCompact() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return compact;
}

function moveIndex(event: KeyboardEvent<HTMLButtonElement>, index: number, length: number) {
  const last = length - 1;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    return index === last ? 0 : index + 1;
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    return index === 0 ? last : index - 1;
  }
  if (event.key === "Home") {
    event.preventDefault();
    return 0;
  }
  if (event.key === "End") {
    event.preventDefault();
    return last;
  }
  return null;
}

export function WhatWeOfferSection() {
  const baseId = useId();
  const reducedMotion = usePrefersReducedMotion();
  const compact = useIsCompact();

  const [needId, setNeedId] = useState<ClientNeedId>(clientNeeds[0].id);
  const [offeringId, setOfferingId] = useState<OfferingId>(clientNeeds[0].offeringIds[0]);
  const [notesOpen, setNotesOpen] = useState(false);
  const [queryNote, setQueryNote] = useState(false);

  const related = useMemo(() => getOfferingsForNeed(needId), [needId]);
  const offering = offeringsById[offeringId];

  const [displayed, setDisplayed] = useState<Offering>(offering);
  const [outgoing, setOutgoing] = useState<Offering | null>(null);
  const displayedRef = useRef(displayed);
  const fadeTimer = useRef<number | null>(null);

  const needTabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const relatedTabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  displayedRef.current = displayed;

  useEffect(() => {
    offerings.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  useEffect(() => {
    const current = displayedRef.current;
    if (current.id === offering.id) return;

    if (reducedMotion) {
      setDisplayed(offering);
      setOutgoing(null);
      return;
    }

    setOutgoing(current);
    setDisplayed(offering);

    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    fadeTimer.current = window.setTimeout(() => setOutgoing(null), 560);

    return () => {
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, [offering, reducedMotion]);

  const selectNeed = (nextNeedId: ClientNeedId, focusIndex?: number) => {
    const nextNeed = clientNeeds.find((item) => item.id === nextNeedId);
    if (!nextNeed) return;
    setNeedId(nextNeedId);
    setOfferingId(nextNeed.offeringIds[0]);
    setNotesOpen(false);
    setQueryNote(false);
    if (typeof focusIndex === "number") {
      requestAnimationFrame(() => needTabRefs.current[focusIndex]?.focus());
    }
  };

  const selectOffering = (nextId: OfferingId, focusIndex?: number) => {
    setOfferingId(nextId);
    setNotesOpen(false);
    setQueryNote(false);
    if (typeof focusIndex === "number") {
      requestAnimationFrame(() => relatedTabRefs.current[focusIndex]?.focus());
    }
  };

  const onNeedKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = moveIndex(event, index, clientNeeds.length);
    if (next === null) return;
    selectNeed(clientNeeds[next].id, next);
  };

  const onRelatedKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = moveIndex(event, index, related.length);
    if (next === null) return;
    selectOffering(related[next].id, next);
  };

  const panelId = `${baseId}-panel`;
  const queryId = `${baseId}-query`;
  const notesId = `${baseId}-notes`;

  return (
    <section id="what-we-offer" className="wo-section" aria-labelledby={`${baseId}-heading`}>
      <div className="wo-shell">
        <EditorialSectionHeading
          eyebrow="B2B TRAVEL SOLUTIONS"
          scriptWord="Know"
          title="What We Offer in Madhya Pradesh"
          intro="Tailor-Made Travel Solutions for Every Client Type"
        />

        <div className="wo-content">
          <p className="wo-prompt" id={`${baseId}-prompt`}>
            What does your client need?
          </p>

          <div
            className="wo-needs"
            role="tablist"
            aria-labelledby={`${baseId}-prompt`}
            aria-orientation="horizontal"
          >
            {clientNeeds.map((need, index) => {
              const selected = need.id === needId;
              return (
                <button
                  key={need.id}
                  type="button"
                  className={`wo-need${selected ? " is-active" : ""}`}
                  role="tab"
                  id={`${baseId}-tab-${need.id}`}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  ref={(node) => {
                    needTabRefs.current[index] = node;
                  }}
                  onClick={() => selectNeed(need.id)}
                  onKeyDown={(event) => onNeedKeyDown(event, index)}
                >
                  <span className="wo-need-label-full">{need.label}</span>
                  <span className="wo-need-label-short">{need.shortLabel}</span>
                </button>
              );
            })}
          </div>

          <PremiumTilt strength="featured" className="w-full">
            <div
              className="wo-panel"
              role="tabpanel"
              id={panelId}
              aria-labelledby={`${baseId}-tab-${needId}`}
            >
            <div className="wo-image-stage">
              {outgoing ? (
                <img
                  className="wo-img is-visible"
                  src={outgoing.image}
                  alt=""
                  aria-hidden="true"
                  width={1600}
                  height={900}
                />
              ) : null}
              <img
                key={displayed.id}
                className={`wo-img is-visible wo-img-front${reducedMotion ? "" : " wo-img-enter"}`}
                src={displayed.image}
                alt={displayed.imageAlt}
                width={1600}
                height={900}
              />
              <div className="wo-image-veil" aria-hidden="true" />
            </div>

            <div className="wo-body">
              <div className="wo-copy">
                <div key={offering.id} className={reducedMotion ? undefined : "wo-fade"}>
                  <p className="wo-cat">{offering.category}</p>
                  <h3 className="wo-title">{offering.title}</h3>
                  <p className="wo-desc">{offering.description}</p>
                </div>

                {related.length > 1 ? (
                  <div className="wo-related">
                    <span className="wo-related-label" id={`${baseId}-related`}>
                      Related solutions
                    </span>
                    <div
                      className="wo-related-list"
                      role="tablist"
                      aria-labelledby={`${baseId}-related`}
                      aria-orientation={compact ? "horizontal" : undefined}
                    >
                      {related.map((item, index) => {
                        const selected = item.id === offering.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            className={`wo-related-btn${selected ? " is-active" : ""}`}
                            role="tab"
                            aria-selected={selected}
                            tabIndex={selected ? 0 : -1}
                            ref={(node) => {
                              relatedTabRefs.current[index] = node;
                            }}
                            onClick={() => selectOffering(item.id)}
                            onKeyDown={(event) => onRelatedKeyDown(event, index)}
                          >
                            {item.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {notesOpen ? (
                  <div className="wo-notes" id={notesId}>
                    <p className="wo-suitable">{offering.suitableFor}</p>
                    <ul className="wo-notes-list">
                      {offering.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="wo-actions">
                  <button
                    type="button"
                    className={`wo-cta${notesOpen ? " is-on" : ""}`}
                    aria-expanded={notesOpen}
                    aria-controls={notesOpen ? notesId : undefined}
                    onClick={() => {
                      setNotesOpen((open) => !open);
                      setQueryNote(false);
                    }}
                  >
                    Explore Offering →
                  </button>
                  <button
                    type="button"
                    className={`wo-cta wo-cta-secondary${queryNote ? " is-on" : ""}`}
                    aria-expanded={queryNote}
                    aria-controls={queryNote ? queryId : undefined}
                    onClick={() => {
                      setQueryNote((open) => !open);
                      setNotesOpen(false);
                    }}
                  >
                    Create Query →
                  </button>
                </div>

                {queryNote ? (
                  <div className="wo-query" id={queryId} role="status">
                    <p>
                      Query prepared for <strong>{offering.title}</strong>. The trade desk can
                      package this fit in a follow-up enquiry.
                    </p>
                    <button
                      type="button"
                      className="wo-query-dismiss"
                      onClick={() => setQueryNote(false)}
                      aria-label="Dismiss query preview"
                    >
                      ×
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </PremiumTilt>

          <p className="wo-sr-only" aria-live="polite">
            {offering.category}: {offering.title}
          </p>
        </div>
      </div>
    </section>
  );
}
