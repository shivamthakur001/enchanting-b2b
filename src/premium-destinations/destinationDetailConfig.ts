/**
 * ENCHANTING MP — DESTINATION DETAIL VISUAL CONTROL SYSTEM
 * Saari visual settings yahan se control hoti hain.
 * Sabhi CSS variables '.empd-page' scope ke andar apply hote hain.
 * B2B header/footer aur baaki website se yeh system independent hai.
 */

export interface DestinationDetailDesign {
  // ==========================================
  // 01. GLOBAL & LAYOUT TOKENS
  // ==========================================
  maxWidth: string;
  pageBackground: string;
  forest: string;
  forestDeep: string;
  cream: string;
  parchment: string;
  ink: string;
  muted: string;
  copper: string;
  sage: string;
  sectionPadding: string;
  narrowSectionPadding: string;
  mobileSectionPadding: string;
  mobileNarrowSectionPadding: string;
  tabletPadding: string;
  mobilePadding: string;
  titleSize: string;
  bodySize: string;
  mobileBodySize: string;
  bodyLineHeight: string;
  contentGap: string;
  cardRadius: string;
  cardShadow: string;
  buttonRadius: string;
  motionDuration: string;
  cardHoverScale: string;

  // ==========================================
  // 02. HERO BANNER
  // ==========================================
  heroHeight: string;
  heroMinHeight: string;
  tabletHeroHeight: string;
  mobileHeroHeight: string;
  heroBg: string;
  heroImagePosition: string;
  mobileHeroImagePosition: string;
  heroImageScale: string;
  heroImageBrightness: string;
  heroImageBlur: string;
  heroOverlayStart: string;
  heroOverlayEnd: string;
  heroTitleSize: string;
  mobileHeroTitleSize: string;
  heroSubtitleSize: string;
  heroTextAlign: string;
  factBarMinHeight: string;
  factBarBg: string;
  factPadding: string;
  factLabelSize: string;
  factValueSize: string;

  // ==========================================
  // 03. WHY DESTINATION WORKS (OVERVIEW)
  // ==========================================
  overviewBg: string;
  overviewCardMinHeight: string;
  mobileOverviewCardMinHeight: string;
  overviewCardPadding: string;
  overviewCardRadius: string;
  overviewCardBg: string;
  overviewCardBorder: string;
  overviewIconSize: string;
  overviewIconBg: string;
  overviewTitleSize: string;
  overviewDescSize: string;
  overviewColumns: string;
  mobileOverviewColumns: string;
  overviewGap: string;

  // ==========================================
  // 04. ICONIC EXPERIENCES (HIGHLIGHTS)
  // ==========================================
  highlightsBg: string;
  highlightHeight: string;
  highlightCardWidth: string;
  highlightColumns: string;
  highlightGap: string;
  highlightRadius: string;
  highlightImageScale: string;
  highlightImagePosition: string;
  highlightOverlay: string;
  highlightTitleSize: string;
  highlightDescSize: string;

  // ==========================================
  // 05. ACTIVITIES & EXPERIENCES (THEMES)
  // ==========================================
  themesBg: string;
  themeImageHeight: string;
  mobileThemeImageHeight: string;
  themeContentMinHeight: string;
  mobileThemeContentMinHeight: string;
  themeCardBg: string;
  themeCardRadius: string;
  themeCardBorder: string;
  themeIconSize: string;
  themeIconBg: string;
  themeTitleSize: string;
  themeListSize: string;
  themeColumns: string;
  tabletThemeColumns: string;
  mobileThemeColumns: string;
  themeGridGap: string;

  // ==========================================
  // 06. BEST TIME TO VISIT / GETTING THERE (SEASONS & ACCESS)
  // ==========================================
  seasonsBg: string;
  seasonCardMinHeight: string;
  mobileSeasonCardMinHeight: string;
  seasonCardPadding: string;
  seasonCardRadius: string;
  seasonGridGap: string;
  seasonBlueBg: string;
  seasonGreenBg: string;
  seasonSkyBg: string;
  seasonPeachBg: string;
  seasonTitleSize: string;
  seasonDescSize: string;
  accessTitleSize: string;
  accessDescSize: string;
  seasonsLayoutRatio: string;
  seasonsLayoutGap: string;

  // ==========================================
  // 07. RECOMMENDED PACKAGES
  // ==========================================
  packagesBg: string;
  packageCardBg: string;
  packageCardBorder: string;
  packageCardRadius: string;
  packageCardPadding: string;
  packageImageHeight: string;
  mobilePackageImageHeight: string;
  packageColumns: string;
  tabletPackageColumns: string;
  mobilePackageColumns: string;
  packageGridGap: string;
  packageTitleSize: string;
  packageBtnViewBg: string;
  packageBtnQueryBg: string;
  packageBtnTextColor: string;
  packageBtnRadius: string;
  packageBtnPadding: string;
  packageBtnFontSize: string;

  // ==========================================
  // 08. FINAL CTA
  // ==========================================
  ctaBg: string;
  ctaPaddingBlock: string;
  ctaImagePosition: string;
  ctaImageSize: string;
  ctaOverlayGradient: string;
  ctaOverlayOpacity: string;
  ctaTitleSize: string;
  ctaDescSize: string;
  ctaBtnMinHeight: string;
  ctaBtnPadding: string;
  ctaBtnFontSize: string;
  ctaGoldBtnBg: string;
  ctaOutlineBtnBorder: string;

  // Backwards compatibility for archived story section
  storyImageHeight: string;
}

export const destinationDetailConfig: DestinationDetailDesign = {
  // =========================================================================
  // 01. GLOBAL & LAYOUT TOKENS
  // =========================================================================

  // Controls: Page ke center content container ki maximum width.
  // Value badhane se content horizontal failta hai, kam karne se narrow hota hai.
  // Unit: px. Range: 1100px - 1440px.
  maxWidth: '1260px',

  // Controls: Poore page ka default background tint.
  // Hex color code for base warm tone.
  pageBackground: '#f7f5ed',

  // Controls: Brand ka primary dark green forest tone.
  // Text headings aur primary buttons ke liye use hota hai.
  forest: '#093626',

  // Controls: Brand ka deep contrast green tone (highlights/footer-cta base).
  forestDeep: '#05281d',

  // Controls: Light cream card background tone.
  cream: '#fcfaf5',

  // Controls: Soft parchment card background tone.
  parchment: '#f0f1e7',

  // Controls: High-contrast primary reading text color.
  ink: '#172b22',

  // Controls: Secondary subtle/helper text color.
  muted: '#68766a',

  // Controls: Premium warm copper/gold accent color.
  copper: '#c18d4a',

  // Controls: Natural sage border and badge tint.
  sage: '#a5b99d',

  // Controls: Standard desktop sections ki top aur bottom vertical padding.
  // Value badhane se sections ke beech vertical space badhti hai, kam karne se compact hota hai.
  // Unit: px. Range: 50px - 100px.
  sectionPadding: '76px',

  // Controls: Compact sections (overview, themes, seasons) ki top/bottom padding.
  // Value badhane se padding badhti hai.
  // Unit: px. Range: 40px - 70px.
  narrowSectionPadding: '54px',

  // Controls: Mobile screens par standard sections ki top aur bottom padding.
  // Value badhane se vertical spacing badhti hai.
  // Unit: px. Range: 36px - 60px.
  mobileSectionPadding: '48px',

  // Controls: Mobile screens par narrow sections ki top aur bottom padding.
  // Unit: px. Range: 32px - 50px.
  mobileNarrowSectionPadding: '42px',

  // Controls: Tablet screens par page ka horizontal side margin/padding.
  // Value badhane se side se content andar dabta hai.
  // Unit: px. Range: 20px - 40px.
  tabletPadding: '26px',

  // Controls: Mobile screens par page ka horizontal side margin/padding.
  // Unit: px. Range: 14px - 24px.
  mobilePadding: '18px',

  // Controls: Page ke main section headings (h2) ka font size.
  // CSS clamp value (min, preferred, max).
  titleSize: 'clamp(2.25rem, 3.4vw, 3.45rem)',

  // Controls: Standard body text ka font size desktop par.
  // Value badhane se reading font bada hota hai.
  // Unit: rem. Range: 0.9rem - 1.1rem.
  bodySize: '0.98rem',

  // Controls: Mobile screens par general body text ka font size.
  // Unit: rem. Range: 0.85rem - 0.98rem.
  mobileBodySize: '0.91rem',

  // Controls: Paragraphs aur reading text ki line height (vertical spacing between lines).
  // Value badhane se lines ke beech gap badhta hai.
  // Unit: unitless ratio. Range: 1.4 - 1.9.
  bodyLineHeight: '1.7',

  // Controls: Standard grid elements aur cards ke beech default gap.
  // Value badhane se cards door hote hain, kam karne se paas.
  // Unit: px. Range: 12px - 28px.
  contentGap: '18px',

  // Controls: Cards ke corners ka roundness (border-radius).
  // Value badhane se corners zyada curved/round hote hain, 0px par sharp rectangle.
  // Unit: px. Range: 0px - 24px.
  cardRadius: '12px',

  // Controls: Cards ke peeche ka drop shadow.
  // Elevation depth aur softness ko control karta hai.
  cardShadow: '0 12px 28px rgba(7, 34, 23, .09)',

  // Controls: Buttons ke corners ki roundness.
  // Value badhane se buttons rounded/pill-like hote hain.
  // Unit: px. Range: 2px - 10px.
  buttonRadius: '6px',

  // Controls: Card hover transitions aur micro-animations ki duration.
  // Value badhane se animation slow aur soft hoti hai, kam karne se snappy.
  // Unit: ms. Range: 150ms - 400ms.
  motionDuration: '280ms',

  // Controls: Card par mouse hover karne par image ka zoom factor.
  // 1 = no zoom, 1.05 = 5% gentle zoom, 1.15 = dramatic zoom.
  // Unit: scale factor. Range: 1.0 - 1.1.
  cardHoverScale: '1.045',

  // =========================================================================
  // 02. HERO BANNER
  // =========================================================================

  // Controls: Desktop par hero section ki exact height.
  // Value badhane se hero banner vertical lamba hota hai, kam karne se compact.
  // Unit: px ya vh. Range: 500px - 720px.
  heroHeight: '575px',

  // Controls: Desktop screens ke liye minimum safe hero height.
  // Unit: px. Range: 450px - 600px.
  heroMinHeight: '510px',

  // Controls: Tablet screens (621px - 900px) par hero ki height.
  // Unit: px. Range: 520px - 650px.
  tabletHeroHeight: '600px',

  // Controls: Mobile screens (<620px) par hero banner ki vertical height.
  // Unit: px. Range: 520px - 680px.
  mobileHeroHeight: '610px',

  // Controls: Hero banner ka background fallback color (image load hone se pehle).
  heroBg: '#123c2d',

  // Controls: Hero background photo ka desktop alignment / focal point.
  // 'center center', 'center 45%' etc. Value change karke mountain/subject align karein.
  heroImagePosition: 'center 45%',

  // Controls: Mobile devices par hero photo ka focal crop alignment.
  // '56% center' se mobile me main subject perfectly visible rehta hai.
  mobileHeroImagePosition: '56% center',

  // Controls: Hero photo ka initial base scale/zoom.
  // 1.0 = normal, 1.022 = subtle cinematic crop edge prevention.
  heroImageScale: '1.022',

  // Controls: Hero photo ki visual brightness level.
  // 1 = normal brightness, 0.85 = darker image (text visibility badhane ke liye).
  // Range: 0.7 - 1.0.
  heroImageBrightness: '0.92',

  // Controls: Hero photo ka blur softness.
  // 0px = sharp and crisp, 2px = soft focus.
  // Unit: px. Range: 0px - 5px.
  heroImageBlur: '0px',

  // Controls: Hero dark overlay gradient ka starting dark shade (left / bottom).
  heroOverlayStart: 'rgba(2, 32, 22, .92)',

  // Controls: Hero overlay gradient ka right side ending transparency.
  heroOverlayEnd: 'rgba(2, 32, 22, .12)',

  // Controls: Hero main destination name ("Pachmarhi") ka desktop font size.
  // Value badhane se heading text bada hota hai.
  heroTitleSize: 'clamp(4.7rem, 7.5vw, 7.3rem)',

  // Controls: Mobile screens par hero title ka font size.
  mobileHeroTitleSize: 'clamp(3.7rem, 15vw, 5.6rem)',

  // Controls: Hero subtitle text ("Queen of Satpura...") ka font size.
  // Value badhane se subtitle bada hota hai.
  // Unit: rem. Range: 1.0rem - 1.3rem.
  heroSubtitleSize: '1.12rem',

  // Controls: Hero text copy ki alignment (left, center, right).
  heroTextAlign: 'left',

  // Controls: Hero ke bottom facts bar ki minimum height.
  // Value badhane se facts bar vertical mota/taller hota hai.
  // Unit: px. Range: 60px - 90px.
  factBarMinHeight: '76px',

  // Controls: Facts bar ka translucent dark background color.
  factBarBg: 'rgba(3, 28, 20, .82)',

  // Controls: Individual fact cell ke andar ki padding.
  // Value badhane se fact cells ke andar spacing badhti hai.
  // Format: 'vertical horizontal'.
  factPadding: '14px 17px',

  // Controls: Fact label (Altitude, Best season etc.) ka font size.
  // Unit: rem. Range: 0.6rem - 0.75rem.
  factLabelSize: '0.69rem',

  // Controls: Fact value ("1,067 m", "Oct - Jun") ka font size.
  // Unit: rem. Range: 0.75rem - 0.95rem.
  factValueSize: '0.83rem',

  // =========================================================================
  // 03. WHY DESTINATION WORKS (OVERVIEW)
  // =========================================================================

  // Controls: Overview section ka full background color.
  overviewBg: '#fcfaf5',

  // Controls: Overview ke 4 feature cards ki desktop par minimum height.
  // Value badhane se cards vertical lambe hote hain.
  // Unit: px. Range: 160px - 220px.
  overviewCardMinHeight: '187px',

  // Controls: Mobile screens par overview cards ki minimum height.
  // Unit: px. Range: 140px - 180px.
  mobileOverviewCardMinHeight: '158px',

  // Controls: Overview card ke content ke chaaron taraf padding.
  overviewCardPadding: '18px 11px 15px',

  // Controls: Overview cards ke corners ki roundness.
  // Unit: px. Range: 6px - 16px.
  overviewCardRadius: '10px',

  // Controls: Overview cards ka background solid color.
  overviewCardBg: '#fffdfa',

  // Controls: Overview cards ka subtle border color.
  overviewCardBorder: '#e4e6dc',

  // Controls: Overview card ke circular green icon ka width & height.
  // Value badhane se circular icon bada hota hai.
  // Unit: px. Range: 40px - 60px.
  overviewIconSize: '48px',

  // Controls: Circular icon container ka background color.
  overviewIconBg: '#427650',

  // Controls: Overview card ke main feature label ka font size.
  // Unit: rem. Range: 0.75rem - 0.95rem.
  overviewTitleSize: '0.84rem',

  // Controls: Overview card ke descriptive text ka font size.
  // Unit: rem. Range: 0.7rem - 0.85rem.
  overviewDescSize: '0.74rem',

  // Controls: Overview section me cards ke desktop column count.
  // Range: 2 - 4.
  overviewColumns: '4',

  // Controls: Mobile screens par overview cards ke columns.
  // Range: 1 - 2.
  mobileOverviewColumns: '2',

  // Controls: Overview cards ke aapas ka gap.
  // Unit: px. Range: 8px - 20px.
  overviewGap: '13px',

  // =========================================================================
  // 04. ICONIC EXPERIENCES (HIGHLIGHTS)
  // =========================================================================

  // Controls: Signature highlights gallery section ka dark background color.
  highlightsBg: '#05281d',

  // Controls: Desktop par signature highlight cards ki height.
  // Value badhane se photo cards vertical lambe hote hain.
  // Unit: px. Range: 280px - 380px.
  highlightHeight: '315px',

  // Controls: Tablet slider par highlight card ki base width.
  // Unit: px. Range: 200px - 260px.
  highlightCardWidth: '230px',

  // Controls: Desktop par highlight cards ke columns (6 cards row).
  // Value badhane se columns badhte hain, cards narrow hote hain.
  highlightColumns: '6',

  // Controls: Highlight cards ke beech ka horizontal gap.
  // Unit: px. Range: 8px - 16px.
  highlightGap: '10px',

  // Controls: Highlight card ke rounded corners.
  // Unit: px. Range: 6px - 16px.
  highlightRadius: '10px',

  // Controls: Highlight card hover par photo ka scale zoom.
  highlightImageScale: '1.045',

  // Controls: Highlight photos ka focal point alignment.
  highlightImagePosition: 'center',

  // Controls: Highlight card ke bottom text ke peeche ka dark gradient fade.
  highlightOverlay: 'linear-gradient(to bottom, rgba(0,0,0,0) 15%, rgba(3,25,17,.14) 38%, rgba(0,23,15,.95) 100%)',

  // Controls: Highlight card ke heading (e.g. "Dhoopgarh") ka font size.
  // Unit: rem. Range: 1.1rem - 1.45rem.
  highlightTitleSize: '1.25rem',

  // Controls: Highlight card ke description copy ka font size.
  // Unit: rem. Range: 0.65rem - 0.78rem.
  highlightDescSize: '0.7rem',

  // =========================================================================
  // 05. ACTIVITIES & EXPERIENCES (THEMES)
  // =========================================================================

  // Controls: Activities & Themes section ka background tone.
  themesBg: '#f0f1e7',

  // Controls: Theme cards ke top photo banner ki desktop height.
  // Value badhane se card ki image badi hoti hai.
  // Unit: px. Range: 130px - 200px.
  themeImageHeight: '160px',

  // Controls: Mobile screens par theme photo ki height.
  // Unit: px. Range: 140px - 210px.
  mobileThemeImageHeight: '175px',

  // Controls: Theme card ke lower content area (title + bullet sights) ki minimum height.
  // Value badhane se content box lamba hota hai, ensuring uniform card alignment.
  // Unit: px. Range: 170px - 230px.
  themeContentMinHeight: '196px',

  // Controls: Mobile screens par theme card content box ki minimum height.
  // Unit: px. Range: 140px - 190px.
  mobileThemeContentMinHeight: '165px',

  // Controls: Theme card ka solid background color.
  themeCardBg: '#fefdfa',

  // Controls: Theme card corners ka border-radius.
  // Unit: px. Range: 8px - 18px.
  themeCardRadius: '12px',

  // Controls: Theme card ki border outline color.
  themeCardBorder: '#e0e4d7',

  // Controls: Theme card ke icon circle ka size (width and height).
  // Unit: px. Range: 30px - 45px.
  themeIconSize: '37px',

  // Controls: Theme card icon circle ka background color.
  themeIconBg: '#578363',

  // Controls: Theme card title (e.g. "Waterfalls & Valleys") ka font size.
  // Unit: rem. Range: 1.2rem - 1.6rem.
  themeTitleSize: '1.4rem',

  // Controls: Theme card sights list items (e.g. Bee Falls) ka font size.
  // Unit: rem. Range: 0.75rem - 0.9rem.
  themeListSize: '0.82rem',

  // Controls: Desktop screens par theme cards ke grid columns.
  // Range: 2 - 4.
  themeColumns: '4',

  // Controls: Tablet screens par theme cards ke columns.
  tabletThemeColumns: '2',

  // Controls: Mobile screens par theme cards ke columns.
  mobileThemeColumns: '1',

  // Controls: Theme cards ke beech ka grid gap.
  // Unit: px. Range: 12px - 24px.
  themeGridGap: '18px',

  // =========================================================================
  // 06. BEST TIME TO VISIT / GETTING THERE (SEASONS & ACCESS)
  // =========================================================================

  // Controls: Seasons aur Access dono sections ka common background color.
  seasonsBg: '#fcfaf5',

  // Controls: Desktop par har ek season card (Winter, Monsoon etc.) ki minimum height.
  // Value badhane se season card vertical lamba hota hai.
  // Unit: px. Range: 190px - 250px.
  seasonCardMinHeight: '222px',

  // Controls: Mobile screens par season card ki minimum height.
  // Unit: px. Range: 170px - 220px.
  mobileSeasonCardMinHeight: '200px',

  // Controls: Season card ke internal content ki padding.
  seasonCardPadding: '20px 14px 17px',

  // Controls: Season cards ke corners ka radius.
  // Unit: px. Range: 6px - 14px.
  seasonCardRadius: '10px',

  // Controls: Season cards ke beech ka spacing/gap.
  // Unit: px. Range: 8px - 16px.
  seasonGridGap: '12px',

  // Controls: Winter season card ka soft blue background tint.
  seasonBlueBg: '#e1edf7',

  // Controls: Monsoon season card ka fresh green background tint.
  seasonGreenBg: '#ddedd8',

  // Controls: Spring season card ka soft sky background tint.
  seasonSkyBg: '#e1eef7',

  // Controls: Summer season card ka warm peach background tint.
  seasonPeachBg: '#f9e6d3',

  // Controls: Season card heading ("Winter", "Monsoon") ka font size.
  // Unit: rem. Range: 0.8rem - 1.05rem.
  seasonTitleSize: '0.89rem',

  // Controls: Season description paragraph text ka font size.
  // Unit: rem. Range: 0.7rem - 0.84rem.
  seasonDescSize: '0.76rem',

  // Controls: Getting There access item label (Nearest Airport etc.) ka font size.
  // Unit: rem. Range: 0.78rem - 0.95rem.
  accessTitleSize: '0.84rem',

  // Controls: Getting There details text ka font size.
  // Unit: rem. Range: 0.7rem - 0.85rem.
  accessDescSize: '0.76rem',

  // Controls: Seasons column vs Getting There column ka desktop grid ratio.
  // Value: CSS grid-template-columns ratio. Default: '1.6fr .9fr'.
  seasonsLayoutRatio: '1.6fr .9fr',

  // Controls: Seasons grid aur Getting There list ke beech ka divider gap.
  // Unit: px. Range: 30px - 60px.
  seasonsLayoutGap: '50px',

  // =========================================================================
  // 07. RECOMMENDED PACKAGES
  // =========================================================================

  // Controls: Packages section ka base background color.
  packagesBg: '#eff2e7',

  // Controls: Package card ka solid background white/cream.
  packageCardBg: '#ffffff',

  // Controls: Package card ka subtle border color.
  packageCardBorder: '#dfe5d9',

  // Controls: Package card ke corners ka border radius.
  // Unit: px. Range: 8px - 18px.
  packageCardRadius: '12px',

  // Controls: Package card content area (title, duration, buttons) ki internal padding.
  packageCardPadding: '14px 14px 13px',

  // Controls: Desktop screens par package photo banner ki height.
  // Value badhane se photo vertical badi hoti hai.
  // Unit: px. Range: 140px - 200px.
  packageImageHeight: '160px',

  // Controls: Mobile screens par package photo ki height.
  // Unit: px. Range: 160px - 220px.
  mobilePackageImageHeight: '185px',

  // Controls: Desktop par packages grid ke columns count.
  packageColumns: '4',

  // Controls: Tablet screens par packages grid ke columns.
  tabletPackageColumns: '2',

  // Controls: Mobile screens par packages grid ke columns.
  mobilePackageColumns: '1',

  // Controls: Package cards ke aapas ka gap.
  // Unit: px. Range: 12px - 24px.
  packageGridGap: '18px',

  // Controls: Package card title (e.g. "Satpura Wilderness & Heights") ka font size.
  // Unit: rem. Range: 1.3rem - 1.7rem.
  packageTitleSize: '1.53rem',

  // Controls: Package card ke "View Package" button ka background color.
  packageBtnViewBg: '#c5693c',

  // Controls: Package card ke "Create Query" button ka background green color.
  packageBtnQueryBg: '#17643c',

  // Controls: Package action buttons ka text color.
  packageBtnTextColor: '#ffffff',

  // Controls: Package card buttons ke corners ka radius.
  // Unit: px. Range: 3px - 8px.
  packageBtnRadius: '4px',

  // Controls: Package buttons ki internal padding.
  packageBtnPadding: '10px 5px',

  // Controls: Package buttons ka font size.
  // Unit: rem. Range: 0.68rem - 0.82rem.
  packageBtnFontSize: '0.73rem',

  // =========================================================================
  // 08. FINAL CTA
  // =========================================================================

  // Controls: Bottom scenic CTA banner ka deep dark background color.
  ctaBg: '#05281d',

  // Controls: CTA section ki top aur bottom vertical padding.
  // Value badhane se CTA section vertical failta hai, kam karne se slim.
  // Unit: px. Range: 36px - 70px.
  ctaPaddingBlock: '48px',

  // Controls: CTA background scenic photo ka focal position.
  ctaImagePosition: 'center 54%',

  // Controls: CTA background photo ka sizing rule (cover, contain).
  ctaImageSize: 'cover',

  // Controls: CTA photo ke upar dark readable gradient overlay.
  ctaOverlayGradient: 'linear-gradient(90deg, rgba(1, 29, 18, 0.96), rgba(1, 30, 20, 0.77))',

  // Controls: CTA photo aur gradient ki overall opacity layer.
  // Range: 0.8 - 1.0.
  ctaOverlayOpacity: '0.95',

  // Controls: CTA main heading ("Ready to Craft Your Client's Journey...") ka font size.
  ctaTitleSize: 'clamp(2.1rem, 3vw, 3.2rem)',

  // Controls: CTA description paragraph ka font size.
  // Unit: rem. Range: 0.75rem - 0.92rem.
  ctaDescSize: '0.82rem',

  // Controls: CTA action buttons ("Create Query", "Talk to Our Team") ki minimum height.
  // Unit: px. Range: 38px - 52px.
  ctaBtnMinHeight: '43px',

  // Controls: CTA action buttons ki internal padding.
  ctaBtnPadding: '11px 16px',

  // Controls: CTA action buttons ka font size.
  // Unit: rem. Range: 0.72rem - 0.88rem.
  ctaBtnFontSize: '0.78rem',

  // Controls: Primary "Create Query" gold CTA button ka background color.
  ctaGoldBtnBg: '#eaa124',

  // Controls: Secondary outline buttons ka border gold accent color.
  ctaOutlineBtnBorder: '#cea362',

  // =========================================================================
  // ARCHIVED COMPATIBILITY
  // =========================================================================
  // Story photo height compatibility
  storyImageHeight: '280px',
};

const propertyMap: Record<keyof DestinationDetailDesign, string> = {
  // Global & Tokens
  maxWidth: '--empd-max-width',
  pageBackground: '--empd-page-bg',
  forest: '--empd-forest',
  forestDeep: '--empd-forest-deep',
  cream: '--empd-cream',
  parchment: '--empd-parchment',
  ink: '--empd-ink',
  muted: '--empd-muted',
  copper: '--empd-copper',
  sage: '--empd-sage',
  sectionPadding: '--empd-section-padding',
  narrowSectionPadding: '--empd-narrow-padding',
  mobileSectionPadding: '--empd-mobile-section-padding',
  mobileNarrowSectionPadding: '--empd-mobile-narrow-padding',
  tabletPadding: '--empd-tablet-padding',
  mobilePadding: '--empd-mobile-padding',
  titleSize: '--empd-heading-size',
  bodySize: '--empd-body-size',
  mobileBodySize: '--empd-mobile-body-size',
  bodyLineHeight: '--empd-body-line-height',
  contentGap: '--empd-gap',
  cardRadius: '--empd-radius',
  cardShadow: '--empd-shadow',
  buttonRadius: '--empd-btn-radius',
  motionDuration: '--empd-motion',
  cardHoverScale: '--empd-hover-scale',

  // Hero
  heroHeight: '--empd-hero-height',
  heroMinHeight: '--empd-hero-min-height',
  tabletHeroHeight: '--empd-tablet-hero-height',
  mobileHeroHeight: '--empd-mobile-hero-height',
  heroBg: '--empd-hero-bg',
  heroImagePosition: '--empd-hero-pos',
  mobileHeroImagePosition: '--empd-mobile-hero-pos',
  heroImageScale: '--empd-hero-image-scale',
  heroImageBrightness: '--empd-hero-brightness',
  heroImageBlur: '--empd-hero-blur',
  heroOverlayStart: '--empd-overlay-start',
  heroOverlayEnd: '--empd-overlay-end',
  heroTitleSize: '--empd-hero-title-size',
  mobileHeroTitleSize: '--empd-mobile-hero-title-size',
  heroSubtitleSize: '--empd-hero-subtitle-size',
  heroTextAlign: '--empd-hero-text-align',
  factBarMinHeight: '--empd-fact-bar-min-height',
  factBarBg: '--empd-fact-bar-bg',
  factPadding: '--empd-fact-padding',
  factLabelSize: '--empd-fact-label-size',
  factValueSize: '--empd-fact-value-size',

  // Overview
  overviewBg: '--empd-overview-bg',
  overviewCardMinHeight: '--empd-overview-card-min-height',
  mobileOverviewCardMinHeight: '--empd-mobile-overview-card-min-height',
  overviewCardPadding: '--empd-overview-card-padding',
  overviewCardRadius: '--empd-overview-card-radius',
  overviewCardBg: '--empd-overview-card-bg',
  overviewCardBorder: '--empd-overview-card-border',
  overviewIconSize: '--empd-overview-icon-size',
  overviewIconBg: '--empd-overview-icon-bg',
  overviewTitleSize: '--empd-overview-title-size',
  overviewDescSize: '--empd-overview-desc-size',
  overviewColumns: '--empd-overview-cols',
  mobileOverviewColumns: '--empd-mobile-overview-cols',
  overviewGap: '--empd-overview-gap',

  // Highlights
  highlightsBg: '--empd-highlights-bg',
  highlightHeight: '--empd-highlight-height',
  highlightCardWidth: '--empd-highlight-card-width',
  highlightColumns: '--empd-highlight-cols',
  highlightGap: '--empd-highlight-gap',
  highlightRadius: '--empd-highlight-radius',
  highlightImageScale: '--empd-highlight-image-scale',
  highlightImagePosition: '--empd-highlight-image-pos',
  highlightOverlay: '--empd-highlight-overlay',
  highlightTitleSize: '--empd-highlight-title-size',
  highlightDescSize: '--empd-highlight-desc-size',

  // Themes
  themesBg: '--empd-themes-bg',
  themeImageHeight: '--empd-theme-image-height',
  mobileThemeImageHeight: '--empd-mobile-theme-image-height',
  themeContentMinHeight: '--empd-theme-content-min-height',
  mobileThemeContentMinHeight: '--empd-mobile-theme-content-min-height',
  themeCardBg: '--empd-theme-card-bg',
  themeCardRadius: '--empd-theme-card-radius',
  themeCardBorder: '--empd-theme-card-border',
  themeIconSize: '--empd-theme-icon-size',
  themeIconBg: '--empd-theme-icon-bg',
  themeTitleSize: '--empd-theme-title-size',
  themeListSize: '--empd-theme-list-size',
  themeColumns: '--empd-theme-cols',
  tabletThemeColumns: '--empd-tablet-theme-cols',
  mobileThemeColumns: '--empd-mobile-theme-cols',
  themeGridGap: '--empd-theme-gap',

  // Seasons & Access
  seasonsBg: '--empd-seasons-bg',
  seasonCardMinHeight: '--empd-season-card-min-height',
  mobileSeasonCardMinHeight: '--empd-mobile-season-card-min-height',
  seasonCardPadding: '--empd-season-card-padding',
  seasonCardRadius: '--empd-season-card-radius',
  seasonGridGap: '--empd-season-grid-gap',
  seasonBlueBg: '--empd-season-blue-bg',
  seasonGreenBg: '--empd-season-green-bg',
  seasonSkyBg: '--empd-season-sky-bg',
  seasonPeachBg: '--empd-season-peach-bg',
  seasonTitleSize: '--empd-season-title-size',
  seasonDescSize: '--empd-season-desc-size',
  accessTitleSize: '--empd-access-title-size',
  accessDescSize: '--empd-access-desc-size',
  seasonsLayoutRatio: '--empd-seasons-layout-ratio',
  seasonsLayoutGap: '--empd-seasons-layout-gap',

  // Packages
  packagesBg: '--empd-packages-bg',
  packageCardBg: '--empd-package-card-bg',
  packageCardBorder: '--empd-package-card-border',
  packageCardRadius: '--empd-package-card-radius',
  packageCardPadding: '--empd-package-card-padding',
  packageImageHeight: '--empd-package-image-height',
  mobilePackageImageHeight: '--empd-mobile-package-image-height',
  packageColumns: '--empd-package-cols',
  tabletPackageColumns: '--empd-tablet-package-cols',
  mobilePackageColumns: '--empd-mobile-package-cols',
  packageGridGap: '--empd-package-gap',
  packageTitleSize: '--empd-package-title-size',
  packageBtnViewBg: '--empd-package-btn-view-bg',
  packageBtnQueryBg: '--empd-package-btn-query-bg',
  packageBtnTextColor: '--empd-package-btn-text-color',
  packageBtnRadius: '--empd-package-btn-radius',
  packageBtnPadding: '--empd-package-btn-padding',
  packageBtnFontSize: '--empd-package-btn-font-size',

  // CTA
  ctaBg: '--empd-cta-bg',
  ctaPaddingBlock: '--empd-cta-padding-block',
  ctaImagePosition: '--empd-cta-image-pos',
  ctaImageSize: '--empd-cta-image-size',
  ctaOverlayGradient: '--empd-cta-overlay-gradient',
  ctaOverlayOpacity: '--empd-cta-overlay-opacity',
  ctaTitleSize: '--empd-cta-title-size',
  ctaDescSize: '--empd-cta-desc-size',
  ctaBtnMinHeight: '--empd-cta-btn-min-height',
  ctaBtnPadding: '--empd-cta-btn-padding',
  ctaBtnFontSize: '--empd-cta-btn-font-size',
  ctaGoldBtnBg: '--empd-cta-gold-btn-bg',
  ctaOutlineBtnBorder: '--empd-cta-outline-btn-border',

  // Archived
  storyImageHeight: '--empd-story-image-height',
};

/**
 * React accepts this as inline style after a safe CSSProperties assertion.
 * Merges default visual settings with optional destination-specific overrides.
 */
export function destinationDesignVars(
  config?: Partial<DestinationDetailDesign>,
): Record<string, string> {
  const merged: DestinationDetailDesign = { ...destinationDetailConfig, ...config };
  return Object.fromEntries(
    (Object.keys(propertyMap) as Array<keyof DestinationDetailDesign>).map((key) => [
      propertyMap[key],
      merged[key] ?? destinationDetailConfig[key],
    ]),
  );
}
