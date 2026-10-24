import { Link } from "../../../router/Router";
import { discoverThemes } from "../../../data/themes";

interface NatureThemeSwitcherProps {
  activeSlug?: string;
  className?: string;
}

export function NatureThemeSwitcher({ activeSlug = "nature", className }: NatureThemeSwitcherProps) {
  return (
    <nav aria-label="Editorial Theme Navigator" className={["nature-theme-nav", className].filter(Boolean).join(" ")}>
      <div className="nature-theme-nav__container">
        <span className="nature-theme-nav__label">
          Explore Madhya Pradesh Themes
        </span>

        <div className="nature-theme-nav__list">
          {discoverThemes.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <Link
                key={item.slug}
                to={`/discover/${item.slug}`}
                className={`nature-theme-nav__item ${
                  isActive ? "nature-theme-nav__item--active" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="nature-theme-nav__badge">Active Theme</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
