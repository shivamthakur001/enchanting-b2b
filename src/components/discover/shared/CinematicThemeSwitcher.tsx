import { type CSSProperties } from "react";
import { Link } from "../../../router/Router";
import { discoverThemes } from "../../../data/themes";
import {
  getThemeSwitcherIllustrations,
  getThemeSwitcherPageStyle,
  type SwitcherTheme,
  type SwitcherIllustration,
} from "./cinematicThemeSwitcherConfig";
import "./cinematicThemeSwitcher.css";

interface CinematicThemeSwitcherProps {
  activeSlug: string;
  className?: string;
}

function normalizeSlug(slug: string): SwitcherTheme | undefined {
  if (slug === "spirituality") return "spiritual";
  if (slug === "nature" || slug === "heritage" || slug === "wildlife" || slug === "spiritual") return slug;
  return undefined;
}

function ThemeIcon({ name }: { name: SwitcherTheme }) {
  if (name === "nature") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M39 6C22 8 9 16 9 30c0 8 5 11 11 11 15 0 22-19 19-35Z"/><path d="M12 38C20 27 27 21 36 16" fill="none" stroke="currentColor" strokeWidth="3"/></svg>;
  }
  if (name === "heritage") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M4 42h40v-4H4zM9 38V21h30v17M13 21v-7h22v7M17 14 24 5l7 9M20 38V28h8v10"/><path d="M7 25h34M6 32h8m20 0h8M22 16h4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>;
  }
  if (name === "wildlife") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="31" rx="11" ry="9"/><ellipse cx="8.5" cy="19" rx="4" ry="6"/><ellipse cx="19" cy="12" rx="4" ry="6"/><ellipse cx="31" cy="12" rx="4" ry="6"/><ellipse cx="41" cy="19" rx="4" ry="6"/></svg>;
  }
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M26 5c-13 0-21 12-18 23 3 12 23 12 24-1 0-9-12-11-14-1M27 7c10 5 15 13 12 22M13 39h25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/><path d="M21 23c-5 0-7 5-4 8 4 3 8-1 7-5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>;
}

function artworkStyle(art: SwitcherIllustration): CSSProperties {
  return {
    "--cts-x": `${art.x}%`, "--cts-y": `${art.y}%`,
    "--cts-width": `${art.width}px`,
    "--cts-opacity": String(Math.min(1, Math.max(0, art.opacity))),
    "--cts-rotation": `${art.rotation ?? 0}deg`,
    "--cts-mobile-x": `${art.mobile?.x ?? art.x}%`,
    "--cts-mobile-y": `${art.mobile?.y ?? art.y}%`,
    "--cts-mobile-width": `${art.mobile?.width ?? art.width}px`,
    "--cts-mobile-opacity": String(Math.min(1, Math.max(0, art.mobile?.opacity ?? art.opacity))),
    "--cts-mobile-rotation": `${art.mobile?.rotation ?? art.rotation ?? 0}deg`,
    "--cts-mobile-display": art.mobile?.visible === false ? "none" : "block",
  } as CSSProperties;
}

/** Single illustrated switcher for all Discover themes. Everything visual comes from config. */
export function CinematicThemeSwitcher({ activeSlug, className = "" }: CinematicThemeSwitcherProps) {
  const scene = getThemeSwitcherPageStyle(activeSlug);
  const art = getThemeSwitcherIllustrations(activeSlug);
  const active = normalizeSlug(activeSlug);
  const variables = {
    "--cts-text-color": scene.textColor,
    "--cts-accent": scene.accentColor,
    "--cts-accent-text": scene.accentTextColor,
    "--cts-icon-color": scene.iconColor,
    "--cts-outline": scene.outlineColor,
    "--cts-divider": scene.dividerColor,
    "--cts-hover": scene.hoverColor,
  } as CSSProperties;

  return (
    <nav className={`cinematic-theme-switcher ${className}`} aria-label="Discover travel themes" style={variables}>
      {/* Background opacity ONLY: foreground labels, illustrations and buttons are separate layers. */}
      <div className="cts-surface" style={{ backgroundColor: scene.backgroundColor, opacity: scene.backgroundOpacity }} aria-hidden="true" />
      <div className="cts-paper-grain" aria-hidden="true" />
      <div className="cts-grid">
        {discoverThemes.map((theme) => {
          const themeKey = normalizeSlug(theme.slug);
          const isActive = themeKey !== undefined && themeKey === active;
          const label = themeKey === "spiritual" ? "Spirituality" : theme.name;
          const images = themeKey ? art.filter((image) => image.panel === themeKey) : [];
          return (
            <div className={`cts-tile${isActive ? " cts-tile--active" : ""}`} key={theme.slug}>
              <div className="cts-tile__illustrations" aria-hidden="true">
                {images.map((image) => (
                  <img
                    key={image.id}
                    className="cts-illustration"
                    src={image.src}
                    alt=""
                    style={artworkStyle(image)}
                    loading="lazy"
                    onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
                  />
                ))}
              </div>
              <Link
                to={`/discover/${theme.slug}`}
                className="cts-tile__link"
                aria-current={isActive ? "page" : undefined}
                aria-label={`Explore ${label}${isActive ? ", current theme" : ""}`}
              >
                {isActive && <span className="cts-active-indicator">ACTIVE</span>}
                <span className="cts-tile__icon">{themeKey && <ThemeIcon name={themeKey} />}</span>
                <span className="cts-tile__name">{label}</span>
                <span className="cts-tile__button">Explore {label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
