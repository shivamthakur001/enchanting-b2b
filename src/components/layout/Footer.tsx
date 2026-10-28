import { useEffect, useRef, useState } from "react";
import { Link } from "../../router/Router";
import { discoverThemes } from "../../data/themes";
import { Logo } from "../logo/Logo";
import { useFooterTheme } from "../../hooks/useFooterTheme";
import { sharedFooterTypography, sharedFooterSpacing } from "../../config/footerThemeConfig";
import "./footer.css";

/* ─── SVG icon helpers ─────────────────────────────────────────── */
function IconChevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3-1 4C10 22 2 14 3 4Z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V1h-3c-4 0-6 2-6 6v2H6v4h3v8Z" fill="currentColor" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
      <path d="m10 9 5 3-5 3Z" fill="var(--mp-bg)" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
      <path d="M4 9v11M4 4v.5M10 20V9m0 5c0-7 9-7 9 0v6" />
    </svg>
  );
}

/* ─── Lotus SVG (inline, used multiple places) ──────────────────── */
function LotusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 48 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
    >
      <path d="M24 3c-7 8-7 16 0 24 7-8 7-16 0-24Z" />
      <path d="M19 22C12 20 10 14 12 7c7 3 11 8 12 20M29 22c7-2 9-8 7-15-7 3-11 8-12 20" />
      <path d="M24 27C12 29 5 24 3 17c9-1 16 2 21 10Zm0 0c12 2 19-3 21-10-9-1-16 2-21 10ZM10 30h28" />
    </svg>
  );
}

/* ─── Main component ─────────────────────────────────────────────── */
export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [formStatus, setFormStatus] = useState("");
  const [email, setEmail] = useState("");
  const theme = useFooterTheme();

  /* Pause/resume the SVG river animation when tab is hidden */
  useEffect(() => {
    const landscape = footerRef.current?.querySelector<SVGSVGElement>(".mp-landscape");
    if (!landscape) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateMotion() {
      if (!landscape) return;
      if (reducedMotion.matches || document.hidden) {
        landscape.pauseAnimations?.();
      } else {
        landscape.unpauseAnimations?.();
      }
    }

    updateMotion();
    reducedMotion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateMotion);

    return () => {
      reducedMotion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateMotion);
    };
  }, []);

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("Demo only — newsletter signup is not connected yet. Your email has not been sent or saved.");
  }

  const year = new Date().getFullYear();
  const typo = { ...sharedFooterTypography, ...theme.typography };
  const space = { ...sharedFooterSpacing, ...theme.spacing };

  return (
    <footer
      className="mp-footer"
      ref={footerRef}
      aria-label="Enchanting Madhya Pradesh"
      style={{
        ...(theme.vars as unknown as React.CSSProperties),
        "--mp-river-opacity": String(theme.riverOpacity),
        "--mp-river-duration": theme.riverAnimationDuration,
        ...(theme.riverStrokeWidth ? { "--mp-river-stroke-width": `${theme.riverStrokeWidth}px` } : {}),
        ...(theme.riverPeakOpacity !== undefined ? { "--mp-river-peak-opacity": String(theme.riverPeakOpacity) } : {}),
        ...(theme.riverBodyOpacity !== undefined ? { "--mp-river-body-opacity": String(theme.riverBodyOpacity) } : {}),
        "--mp-font-heading-main": typo.headingMainSize,
        "--mp-font-heading-sub": typo.headingSecondarySize,
        "--mp-font-nav": typo.navLinkSize,
        "--mp-font-body": typo.bodySize,
        "--mp-font-contact": typo.contactSize,
        "--mp-font-contact-sub": typo.contactSubSize,
        "--mp-font-input-btn": typo.inputButtonSize,
        "--mp-font-legal": typo.legalSize,
        "--mp-font-tagline": typo.brandTaglineSize,
        "--mp-line-height-heading": typo.headingLineHeight,
        "--mp-line-height-body": typo.bodyLineHeight,
        "--mp-pad-x": space.paddingHorizontal,
        "--mp-pad-y": space.paddingVertical,
        "--mp-col-gap": space.columnGap,
        "--mp-nav-gap": space.navLinkGap,
        "--mp-heading-space": space.headingSpacing,
        "--mp-contact-gap": space.contactRowGap,
        "--mp-input-height": space.inputHeight,
        "--mp-social-gap": space.socialGap,
        "--mp-social-size": space.socialSize,
      } as React.CSSProperties}
      data-footer-theme={theme.id}
      data-is-light={theme.isLight ? "true" : "false"}
      data-river-disabled={!theme.riverAnimationEnabled}
    >

      {/* ── Illustrated landscape panorama ── */}
      <div className="mp-scenery" aria-hidden="true">
        <svg
          className="mp-landscape"
          viewBox="16 52 992 190"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="mp-river-clip">
              <path d="M385 207c43-6 79-5 117-5l58 3 70-3 62 4 87-8 94 1 53-5 23 7 58 7v10l-70-3-57 6-76-2-66 8-79-1-40 5-88-4-41-9-50 1-31-7Z" />
            </clipPath>
            <filter id="mp-water-displacement" x="-3%" y="-30%" width="106%" height="160%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.17" numOctaves={1} seed={8} result="waterNoise">
                <animate attributeName="baseFrequency" values="0.012 0.17;0.019 0.23;0.012 0.17" dur="9s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="waterNoise" scale={3.5} xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <linearGradient id="mp-scene-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={theme.vars["--mp-scene-fade"]} stopOpacity="0" />
              <stop offset="1" stopColor={theme.vars["--mp-scene-fade"]} />
            </linearGradient>
          </defs>
          <image
            href={theme.panoramaImage}
            x={theme.panoramaPosition?.x ?? 0}
            y={theme.panoramaPosition?.y ?? 0}
            width="1024"
            height="576"
            opacity={theme.panoramaOpacity}
            style={{
              mixBlendMode: (theme.panoramaBlendMode as any) || undefined,
              filter: theme.panoramaFilter || undefined,
            }}
          />
          <g clipPath="url(#mp-river-clip)">
            <image
              href={theme.panoramaImage}
              x={theme.panoramaPosition?.x ?? 0}
              y={theme.panoramaPosition?.y ?? 0}
              width="1024"
              height="576"
              opacity={theme.panoramaOpacity}
              filter="url(#mp-water-displacement)"
              style={{
                mixBlendMode: (theme.panoramaBlendMode as any) || undefined,
              }}
            />
            <g
              className="mp-water-current"
              fill="none"
              stroke={theme.riverColor}
              strokeLinecap="round"
              strokeWidth={theme.riverStrokeWidth ? `${theme.riverStrokeWidth}px` : undefined}
              style={{
                opacity: theme.riverOpacity,
                animationDuration: theme.riverAnimationDuration,
                animationPlayState: theme.riverAnimationEnabled ? undefined : "paused",
              }}
            >
              <path d="M388 208h26m18 0h41m46 5h66m20 0h17m28-6h45m40 8h62m33-10h55m-172 19h41m-226-7h32m355-5h49" />
              <path d="M456 206h22m37 15h48m87-10h42m21 8h30m64-14h28m20 9h54" />
            </g>
            <g
              className="mp-water-current mp-water-current--second"
              fill="none"
              stroke={theme.riverColorSecond}
              strokeLinecap="round"
              strokeWidth={theme.riverStrokeWidth ? `${theme.riverStrokeWidth * 0.75}px` : undefined}
              style={{
                opacity: theme.riverOpacity * 0.8,
                animationPlayState: theme.riverAnimationEnabled ? undefined : "paused",
              }}
            >
              <path d="M408 211h37m49-5h54m20 17h44m62-6h64m53-9h28m18 8h45m37-8h41" />
            </g>
          </g>
          {theme.panoramaOverlay && theme.panoramaOverlay !== "transparent" && (
            <rect
              x="0"
              y="0"
              width="1024"
              height="576"
              fill={theme.panoramaOverlay}
              style={{
                pointerEvents: "none",
                mixBlendMode: (theme.panoramaOverlayBlendMode as any) || undefined,
              }}
            />
          )}
          <rect x="16" y="160" width="992" height="82" fill="url(#mp-scene-fade)" />
        </svg>
      </div>

      {/* ── Main 3-column content ── */}
      <div className="mp-footer-main">

        {/* Column 1: Brand + Explore nav + Socials */}
        <section className="mp-brand-column" aria-label="Explore Madhya Pradesh">
          <div className="mp-brand-logo-area">
            <Logo
              inverted={!theme.isLight}
              className="mp-footer-logo"
            />
            <p className="mp-brand-tagline">Timeless journeys &nbsp;•&nbsp; Endless discoveries</p>
          </div>

          <nav className="mp-explore" aria-label="Explore">
            {discoverThemes.map((t) => (
              <Link key={t.slug} to={`/discover/${t.slug}`}>
                {t.name}
                <IconChevron />
              </Link>
            ))}
            <Link to="/packages">
              Our Offerings
              <IconChevron />
            </Link>
            <Link to="/marketing-support">
              Marketing Support
              <IconChevron />
            </Link>
            <Link to="/create-query">
              Create Query
              <IconChevron />
            </Link>
          </nav>

          <nav className="mp-socials" aria-label="Social media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <IconYouTube />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
          </nav>
        </section>

        {/* Divider 1 */}
        <div className="mp-column-divider" aria-hidden="true">
          <LotusIcon />
        </div>

        {/* Column 2: Newsletter */}
        <section className="mp-newsletter" aria-labelledby="mp-newsletter-title">
          <h2 id="mp-newsletter-title">
            Get Updates &amp;<br />Trade Enquiries
          </h2>
          <div className="mp-ornament" aria-hidden="true">
            <LotusIcon />
          </div>
          <p className="mp-newsletter-description">
            Subscribe to our newsletter for the latest updates,
            <br className="mp-desktop-break" /> new experiences and special trade opportunities,
            <br className="mp-desktop-break" /> or get in touch to discuss travel partnerships.
          </p>
          <form className="mp-signup" onSubmit={handleSignup}>
            <label className="mp-email-field">
              <IconMail />
              <span className="mp-sr-only">Your email address</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                required
                maxLength={254}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formStatus) setFormStatus("");
                }}
              />
            </label>
            <button type="submit">
              Sign Up
              <IconArrow />
            </button>
          </form>
          <p className="mp-privacy-note">We respect your privacy. No spam, ever.</p>
          {formStatus && (
            <p className="mp-form-status" role="status" aria-live="polite">
              {formStatus}
            </p>
          )}
        </section>

        {/* Divider 2 */}
        <div className="mp-column-divider" aria-hidden="true">
          <LotusIcon />
        </div>

        {/* Column 3: Contact */}
        <section className="mp-contact" aria-labelledby="mp-contact-title">
          <h2 id="mp-contact-title">Send Us a Message</h2>
          <div className="mp-ornament" aria-hidden="true">
            <LotusIcon />
          </div>
          <address className="mp-contact-list">
            <div className="mp-contact-item">
              <span className="mp-contact-icon">
                <IconPhone />
              </span>
              <div>
                <a href="tel:+917552708400">+91 755 270 8400</a>
                <span>Mon – Fri, 9:00 AM – 6:00 PM (IST)</span>
              </div>
            </div>
            <div className="mp-contact-item">
              <span className="mp-contact-icon">
                <IconMail />
              </span>
              <div>
                <a href="mailto:trade@enchantingmadhyapradesh.com">trade@enchantingmadhyapradesh.com</a>
                <span>For trade enquiries &amp; partnerships</span>
              </div>
            </div>
            <div className="mp-contact-item">
              <span className="mp-contact-icon">
                <IconPin />
              </span>
              <div>
                <p>Tourism Trade Cell, Madhya Pradesh</p>
                <span>
                  6th Floor, Satpura Bhavan,<br />
                  Bhopal, Madhya Pradesh 462004, India
                </span>
              </div>
            </div>
          </address>
        </section>
      </div>

      {/* ── Bottom bar ── */}
      <div className="mp-footer-bottom">
        <p>© {year} Enchanting Madhya Pradesh. All Rights Reserved.</p>
        <span className="mp-heart">The Heart of Incredible India</span>
        <nav aria-label="Legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/trade-portal">Trade Portal</Link>
        </nav>
      </div>
    </footer>
  );
}
