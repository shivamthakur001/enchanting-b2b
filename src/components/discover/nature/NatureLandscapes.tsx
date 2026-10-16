import { useEffect, useState } from "react";
import { media } from "../../../data/media";
import { naturePageConfig } from "../../../config/naturePageConfig";

interface LandscapeChapter {
  id: string;
  num: string;
  title: string;
  tag: string;
  blurb: string;
  description: string;
  image: string;
  imageAlt: string;
  keyLocations: string;
  definingFeature: string;
}

const chapters: LandscapeChapter[] = [
  {
    id: "hills",
    num: "01",
    title: "Hills & Highlands",
    tag: "Highland Terrains",
    blurb: "Mist-covered Satpura plateaus, colonial forest tracks and sunrise ridges.",
    description:
      "The weathered highlands of the Satpura and Maikal ranges rise steeply above central India. Ancient sandstone bluffs, ravines, and peaceful hill stations offer tranquil walking trails, panoramic valley viewpoints, and secluded forest bungalows.",
    image: media.pachmarhi,
    imageAlt: "Verdant misty valleys and sandstone highlands of Pachmarhi in the Satpura range",
    keyLocations: "Pachmarhi · Tamia · Maikal Hills",
    definingFeature: "1,067m elevation · Deep ravines & quiet trail network",
  },
  {
    id: "rivers",
    num: "02",
    title: "Rivers & Gorges",
    tag: "Riverine Geology",
    blurb: "Towering marble gorges, boat crossings and wild canyon corridors.",
    description:
      "Sacred perennial lifelines carve through dramatic geology across the heartland. At Bhedaghat, the Narmada shears through iridescent white marble formations best experienced on evening wooden boat journeys, while the wild Ken River threads through volcanic canyons.",
    image: media.bhedaghat,
    imageAlt: "High marble rock canyon rising from the emerald Narmada river at Bhedaghat",
    keyLocations: "Bhedaghat · Ken River Gorge · Narmada Basin",
    definingFeature: "100 ft crystalline marble cliffs · Quiet river boating",
  },
  {
    id: "forests",
    num: "03",
    title: "Forests & Valleys",
    tag: "Ancient Wilderness",
    blurb: "Hidden amphitheatre valleys, sal canopies and ancestral botanical sanctuaries.",
    description:
      "Vast expanses of sal, teak, and bamboo shelter hidden geological wonders like Patalkot, a 1,200-foot-deep amphitheatre basin steeped in botanical heritage and untouched tribal biodiversity, untouched by the rush of modern transit.",
    image: media.jabalpurLake,
    imageAlt: "Quiet waters and dense sal and teak canopy in a hidden river valley",
    keyLocations: "Patalkot Valley · Satpura Buffer · Sal Woodlands",
    definingFeature: "1,200 ft gorge drop · Endemic medicinal flora",
  },
  {
    id: "waterfalls",
    num: "04",
    title: "Waterfalls & Monsoon",
    tag: "Monsoon Cascades",
    blurb: "Volcanic canyons, plunging mountain torrents and mist-soaked trails.",
    description:
      "When the southwest monsoon breaks, Madhya Pradesh's streams transform into thunderous spectacles. From Raneh Falls slicing through pink and green granite to Bee Falls spilling through dense ferns, the monsoon reveals the heartland's raw power.",
    image: media.waterfall,
    imageAlt: "Dramatic waterfall cascading through volcanic rock canyon during monsoon season",
    keyLocations: "Raneh Falls · Bee Falls · Dhuandhar · Kapil Dhara",
    definingFeature: "Multi-colored canyon granite · Roaring monsoon discharge",
  },
];

export function NatureLandscapes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChapter = chapters[activeIndex];

  useEffect(() => {
    if (!naturePageConfig.expressions.autoRotate) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % chapters.length);
    }, naturePageConfig.expressions.autoRotateMs);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="nature-landscapes-section" aria-label="Nature Landscape Chapters">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div>
          <p className="nature-hero__eyebrow">
            Chapters of the Heartland
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--nature-ivory)]">
            Four Natural Expressions
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--nature-stone-light)] font-light text-[0.95rem] leading-relaxed">
            From the high mist of the Satpura ridges to the roar of volcanic river gorges, explore the distinct geographic zones that define Madhya Pradesh’s wilderness identity.
          </p>
        </div>

        <div className="nature-landscapes-layout">
          {/* Active Large Cinematic Showcase Panel */}
          <div className="nature-showcase-panel">
            <img
              key={activeChapter.id}
              src={activeChapter.image}
              alt={activeChapter.imageAlt}
              className="nature-showcase-panel__image"
            />
            <div className="nature-showcase-panel__overlay" />

            <div className="nature-showcase-panel__content">
              <span className="nature-showcase-panel__tag">
                {activeChapter.num} — {activeChapter.tag}
              </span>

              <h3 className="nature-showcase-panel__title">
                {activeChapter.title}
              </h3>

              <p className="nature-showcase-panel__desc">
                {activeChapter.description}
              </p>

              <div className="nature-showcase-panel__meta-row">
                <div className="nature-meta-item">
                  <span className="nature-meta-label">Key Destinations</span>
                  <span className="nature-meta-val">{activeChapter.keyLocations}</span>
                </div>
                <div className="nature-meta-item">
                  <span className="nature-meta-label">Landscape Characteristic</span>
                  <span className="nature-meta-val">{activeChapter.definingFeature}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chapter Selectors */}
          <div className="nature-chapter-nav" role="tablist" aria-label="Select Landscape Chapter">
            {chapters.map((chapter, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={chapter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`nature-chapter-btn ${
                    isActive ? "nature-chapter-btn--active" : ""
                  }`}
                >
                  <div className="nature-chapter-header">
                    <span className="nature-chapter-num">
                      Chapter {chapter.num}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[var(--nature-sage)]">
                      {chapter.tag}
                    </span>
                  </div>

                  <h4 className="nature-chapter-name">
                    {chapter.title}
                  </h4>

                  <p className="nature-chapter-blurb">
                    {chapter.blurb}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
