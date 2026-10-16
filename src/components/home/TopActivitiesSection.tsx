import { useMemo, useState } from "react";
import "./TopActivitiesSection.css";
import { topActivities } from "../../data/topActivities";
import { Link } from "../../router/Router";
import { ArrowRightIcon } from "../icons/Icons";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { EditorialVideoCard, type EditorialVideoCardData } from "./EditorialVideoCard";

const PER_PAGE = 5;

export function TopActivitiesSection() {
  const [page, setPage] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const items = useMemo<EditorialVideoCardData[]>(
    () =>
      topActivities.map((activity) => ({
        id: activity.destinationSlug,
        title: activity.title,
        category: activity.category,
        location: activity.location,
        poster: activity.image,
        posterAlt: activity.imageAlt,
        route: `/destinations/${activity.destinationSlug}`,
        ctaLabel: "Explore activity",
      })),
    [],
  );
  const pageCount = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const currentPage = Math.min(page, pageCount - 1);
  const start = currentPage * PER_PAGE;
  const visible = items.slice(start, start + PER_PAGE);

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    setHoveredId(null);
  };

  return (
    <section className="ta-section" id="top-activities" aria-label="Top Activities">
      <div className="ta-shell">
        <EditorialSectionHeading
          eyebrow="THE MADHYA PRADESH EDIT"
          scriptWord="Top"
          title="Activities"
          intro="Curated field notes from across the state — immersive experiences chosen for the discerning traveller."
        />
        <div className="editorial-video-toolbar">
          <span>Curated activities <strong>{items.length}</strong></span>
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
          <span>Days worth taking slowly.</span>
          <nav aria-label="Activity pages">
            <button type="button" aria-label="Previous activities" disabled={currentPage === 0} onClick={() => changePage(currentPage - 1)}>
              <ArrowRightIcon size={18} />
            </button>
            <span>{start + 1}–{start + visible.length} / {items.length}</span>
            <button type="button" aria-label="Next activities" disabled={currentPage === pageCount - 1} onClick={() => changePage(currentPage + 1)}>
              <ArrowRightIcon size={18} />
            </button>
          </nav>
          <Link to="/discover">Explore activities ↗</Link>
        </div>
      </div>
    </section>
  );
}
