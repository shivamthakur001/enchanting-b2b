import mpMap from "../../assets/mp-map.png";
import { useReveal } from "../../hooks/useReveal";

export function KnowMadhyaPradeshSection() {
  const { ref, visible } = useReveal<HTMLElement>(0.2);

  return (
    <section
      ref={ref}
      id="know"
      className={`know-mp${visible ? " is-visible" : ""}`}
      aria-labelledby="know-mp-title"
    >
      <div className="know-mp-inner">
        <div className="know-heading-wrap">
          <img src={mpMap} alt="" aria-hidden="true" className="know-map" />
          <h2 id="know-mp-title" className="know-heading">
            <span className="know-script">
              <span className="know-script-text">Know</span>
              <svg className="know-underline" viewBox="0 0 180 16" aria-hidden="true" focusable="false">
                <path
                  pathLength={1}
                  d="M3 11 C 22 5.5, 44 13.5, 68 9.2 C 92 4.8, 114 13, 138 8.4 C 152 5.8, 166 10.2, 177 7.6"
                />
              </svg>
            </span>
            <span className="know-title">Madhya Pradesh</span>
          </h2>
          <p className="know-subtitle">From the Wild to the Divine — Explore the Heartland of India</p>
          <span className="know-rule" aria-hidden="true" />
        </div>

        <div className="know-body">
          <p className="know-lead">
            Welcome to Madhya Pradesh, where every journey writes a chapter of India&apos;s living history and untamed beauty. With <strong>12 National Parks, 24 Wildlife Sanctuaries, 9 Tiger Reserves, and India&apos;s only Cheetah Reserve</strong>, this is truly the <strong>Tiger, Leopard, Gharial, Wild Dog, Vulture &amp; Cheetah State</strong> — a dream canvas for wildlife lovers. It’s also a cultural powerhouse with <strong>3 UNESCO World Heritage Sites — Khajuraho, Sanchi, and Bhimbetka</strong>, and many more awaiting global recognition, like Mandu, Orchha, Gwalior Fort, and Chanderi. <strong>Gwalior has been declared the UNESCO City of Music</strong>, while <strong>Orchha stands unique where Lord Rama is revered as a King with a daily Gun Salute</strong>.
          </p>
          <div className="know-columns">
            <p>
              In the world of textiles, MP shines with the exquisite <strong>Maheshwari Sarees</strong> and the globally celebrated <strong>Chanderi Weaves</strong> — the latter being recognised as a part of <strong>UNESCO’s Intangible Cultural Heritage of India</strong>. These fabrics are not just textiles; they are legacies woven with elegance and tradition.
            </p>
            <p>
              Whether it’s the divine aura of <strong>Mahakaleshwar &amp; Omkareshwar Jyotirlingas</strong>, the forested serenity of <strong>Pachmarhi Biosphere</strong>, or award-winning tribal artistry like <strong>Bagh prints and Gond art</strong>, Madhya Pradesh offers an unmatched fusion of <strong>spirituality, heritage, wilderness, and living traditions</strong>.
            </p>
          </div>
        </div>

        <p className="know-final">This is not just the heart of India — it’s the soul of authentic travel experiences.</p>
        <div className="know-close">
          <span className="know-close-rule" aria-hidden="true" />
          <p>Sell MP with pride. The destination sells itself.</p>
        </div>
      </div>
    </section>
  );
}
