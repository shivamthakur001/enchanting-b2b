export function NatureIntro() {
  return (
    <section className="nature-intro-section" aria-label="Landscapes of the Heartland Introduction">
      {/* Subtle topographic contour pattern texture */}
      <svg
        className="nature-topography-bg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="contour-pattern"
            width="280"
            height="280"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 70 Q70 10 140 70 T280 70 M0 140 Q70 80 140 140 T280 140 M0 210 Q70 150 140 210 T280 210 M30 0 Q100 60 170 0 T310 0 M-30 280 Q40 220 110 280 T250 280"
              fill="none"
              stroke="#dce1d8"
              strokeWidth="0.8"
              strokeDasharray="4 4"
            />
            <circle cx="140" cy="140" r="45" fill="none" stroke="#dce1d8" strokeWidth="0.6" />
            <circle cx="140" cy="140" r="75" fill="none" stroke="#dce1d8" strokeWidth="0.6" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contour-pattern)" />
      </svg>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <p className="nature-hero__eyebrow mb-6">
          Landscapes of the Heartland
        </p>

        <div className="nature-intro-grid">
          <div className="nature-intro__left">
            <h2 className="nature-intro__statement">
              Where rivers carve marble, <br />
              forests climb ancient hills, <br />
              and waterfalls disappear into mist.
            </h2>
          </div>

          <div className="nature-intro__narrative">
            <p>
              Long before monuments, court towns, and dynasties, Madhya Pradesh was sculpted by the primal geology of the Satpura and Vindhya ranges. These ancient hills hold deep sandstone chasms, perennial springs, and some of the subcontinent’s most enduring wilderness tracts.
            </p>
            <p>
              Here, life moves to the cadence of the seasons: summer heat unveiling rocky defiles, torrential monsoons transforming silent gorges into thunderous cascades, and winter mists settling quietly over sal and teak valleys. For travel professionals crafting immersive journeys, this heartland offers a rare, undisturbed sanctuary of walking trails, river explorations, and tranquil highland retreats.
            </p>

            <div className="nature-intro__pill-row">
              <span className="nature-intro__pill">Satpura & Vindhya Ranges</span>
              <span className="nature-intro__pill">Narmada & Ken River Basins</span>
              <span className="nature-intro__pill">Monsoon Waterfalls</span>
              <span className="nature-intro__pill">Pristine Sal Canopies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
