import { useMemo, useState } from "react";
import "./TopExperiencesSection.css";
import { topExperiences, topExperiencesCopy } from "../../data/topExperiences";
import { Link } from "../../router/Router";
import { ArrowRightIcon } from "../icons/Icons";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { EditorialVideoCard, type EditorialVideoCardData } from "./EditorialVideoCard";

const PER_PAGE = 5;

export function TopExperiencesSection() {
  const [page, setPage] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const items = useMemo<EditorialVideoCardData[]>(
    () =>
      topExperiences.map((experience) => ({
        id: experience.destinationSlug,
        title: experience.title,
        category: experience.category,
        location: experience.destination,
        poster: experience.image.src,
        posterAlt: experience.image.alt,
        route: `/destinations/${experience.destinationSlug}`,
        ctaLabel: "Explore experience",
      })),
    [],
  );
  const pageCount = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const currentPage = Math.min(page, pageCount - 1);
  const start = currentPage * PER_PAGE;
  const visible = items.slice(start, start + PER_PAGE);
  const canNext = currentPage < pageCount - 1;

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    setHoveredId(null);
  };

  return (
    <section className="tx-section" id="top-experiences" aria-label="Top Experiences">
      <div className="tx-shell">
        <EditorialSectionHeading {...topExperiencesCopy} />
        <div className="editorial-video-toolbar">
          <span>Curated experiences <strong>{items.length}</strong></span>
          <span>{start + 1}–{start + visible.length} / {items.length}</span>
        </div>
        <div className="editorial-video-viewport">
          <div className="editorial-video-rail">
            {visible.map((item, index) => (
              <EditorialVideoCard
                key={item.id}
                item={item}
                position={start + index + 1}
                isHovered={hoveredId === item.id}
                isDimmed={hoveredId !== null && hoveredId !== item.id}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
        <div className="editorial-video-bottom">
          <span>Moments shaped by place.</span>
          <nav aria-label="Experience pages">
            <button type="button" aria-label="Previous experiences" disabled={currentPage === 0} onClick={() => changePage(currentPage - 1)}>
              <ArrowRightIcon size={18} />
            </button>
            <span>{start + 1}–{start + visible.length} / {items.length}</span>
            <button type="button" aria-label="Next experiences" disabled={!canNext} onClick={() => changePage(currentPage + 1)}>
              <ArrowRightIcon size={18} />
            </button>
          </nav>
          <Link to="/discover">Explore experiences ↗</Link>
        </div>
      </div>
    </section>
  );
}
