/**
 * Our Offerings Premium Hybrid — independent visual controls.
 * Does NOT define packages, query/filter semantics, or real contact information.
 * Future advanced filters can mount within the discovery area without changing cards.
 */
export const offeringsVisualConfig = {
  palette: {
    page: '#FBF8F2',
    surface: '#FFFCF7',
    parchment: '#F3E7D3',
    ink: '#223A2F',
    inkMuted: '#6F7167',
    forest: '#173D31',
    forestHover: '#265B46',
    antiqueGold: '#B9884B',
    border: '#E3D8C8',
    accentTerracotta: '#AA683C',
    shadow: 'rgba(64, 44, 25, 0.10)',
  },
  hero: {
    height: 'clamp(330px, 31vw, 460px)',
    image: '/offerings-assets/hero-panorama.jpg',
    // Replace image with a high-res custom hero later if desired.
    imagePosition: 'center center',
    tintOpacity: 0.1,
  },
  layout: {
    maxWidth: '1220px',
    sectionGap: '28px',
    cardImageHeight: 'clamp(175px, 15.2vw, 225px)',
    cardRadius: '14px',
    cardsGap: '18px',
    primaryCollectionCount: 12,
  },
  features: {
    showOptionalCollectionHeading: true,
    showCustomJourneyBand: true,
    showMoreJourneysCollection: true,
  },
} as const;
