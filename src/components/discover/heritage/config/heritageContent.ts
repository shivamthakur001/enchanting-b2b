/**
 * heritageContent.ts — Backward-compatibility re-export
 *
 * Ye file ab sirf heritageLandingConfig.ts se data re-export karti hai.
 * Direct editing ke liye: src/components/discover/heritage/config/heritageLandingConfig.ts
 */

import { heritageLandingConfig } from "./heritageLandingConfig";

export const heritagePageContent = {
  hero: {
    eyebrow: heritageLandingConfig.hero.eyebrow,
    title: heritageLandingConfig.hero.title,
    subtitle: heritageLandingConfig.hero.subtitle,
    description: heritageLandingConfig.hero.description,
  },
  intro: {
    eyebrow: heritageLandingConfig.introduction.eyebrow,
    title: heritageLandingConfig.introduction.title,
    description: heritageLandingConfig.introduction.description,
    tags: heritageLandingConfig.introduction.tags,
  },
  expressions: {
    eyebrow: heritageLandingConfig.expressions.eyebrow,
    title: heritageLandingConfig.expressions.title,
    description: heritageLandingConfig.expressions.description,
  },
  destinations: {
    eyebrow: heritageLandingConfig.destinations.eyebrow,
    title: heritageLandingConfig.destinations.title,
    description: heritageLandingConfig.destinations.description,
  },
  programmes: {
    eyebrow: heritageLandingConfig.programmes.eyebrow,
    title: heritageLandingConfig.programmes.title,
    description: heritageLandingConfig.programmes.description,
  },
  cta: {
    eyebrow: heritageLandingConfig.closingCTA.eyebrow,
    title: `${heritageLandingConfig.closingCTA.heading} ${heritageLandingConfig.closingCTA.headingItalic}`,
    description: heritageLandingConfig.closingCTA.description,
  },
} as const;

export const heritageExpressions = heritageLandingConfig.expressions.chapters.map((chapter) => ({
  id: chapter.id,
  number: chapter.number,
  title: chapter.title,
  blurb: chapter.blurb,
  description: chapter.description,
  highlights: chapter.keyDestination,
  image: chapter.image,
  imageAlt: chapter.imageAlt,
}));
