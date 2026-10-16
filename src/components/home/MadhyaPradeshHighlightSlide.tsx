import type { MadhyaPradeshHighlight } from "../../data/highlights";
import { cn } from "../../utils/cn";

/**
 * Organic aura shapes - one per slide, cycling via index.
 * Each string is a CSS border-radius shorthand for the glow blob.
 */
const AURA_SHAPES = [
  "62% 38% 48% 52% / 44% 56% 42% 58%",
  "40% 60% 55% 45% / 58% 38% 62% 42%",
  "52% 48% 38% 62% / 46% 54% 50% 50%",
  "46% 54% 60% 40% / 52% 42% 58% 48%",
  "58% 42% 44% 56% / 40% 60% 46% 54%",
  "42% 58% 52% 48% / 56% 44% 48% 52%",
  "50% 50% 42% 58% / 48% 52% 40% 60%",
];

interface MadhyaPradeshHighlightSlideProps {
  item: MadhyaPradeshHighlight;
  index: number;
}

export default function MadhyaPradeshHighlightSlide({
  item,
  index,
}: MadhyaPradeshHighlightSlideProps) {
  return (
    <article
      data-slide
      className={cn(
        "group flex w-[86%] shrink-0 snap-start flex-col items-center px-2 text-center sm:w-[72%] sm:px-3",
        "md:w-[calc((100%-2rem)/2)] md:px-4",
        "lg:w-[calc((100%-5rem)/3)]",
        "xl:w-[calc((100%-7.5rem)/4)] xl:px-5",
      )}
      aria-label={`${item.sequence}. ${item.title}`}
    >
      <span className="mb-4 font-sans text-[10px] font-medium tracking-[0.32em] text-ink-soft md:mb-5 md:text-[11px]">
        {item.sequence}
      </span>

      <div className="relative isolate mb-6 flex h-[220px] w-full max-w-[300px] items-center justify-center overflow-visible sm:h-[240px] md:mb-7 md:h-[260px] lg:h-[280px] xl:h-[300px]">
        {/* Organic aura / background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-[48%] h-[70%] w-[78%] -translate-x-1/2 -translate-y-1/2 opacity-[0.42] blur-3xl transition-opacity duration-500 ease-out group-hover:opacity-[0.62] motion-reduce:transition-none"
          style={{
            background: `radial-gradient(ellipse at 50% 48%, ${item.accentColor} 0%, transparent 70%)`,
            borderRadius: AURA_SHAPES[index % AURA_SHAPES.length],
          }}
          aria-hidden="true"
        />
        {/* Illustration */}
        <img
          src={item.image}
          alt={item.alt}
          className="relative z-[1] h-full w-full object-contain object-center transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-[5px] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
          draggable={false}
        />
      </div>

      {/* Title */}
      <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-saffron md:text-[24px] lg:text-[26px] motion-reduce:transition-none">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-[18.5rem] font-sans text-[14.5px] font-normal leading-[1.7] text-ink-muted md:mt-3.5 md:max-w-[19.5rem] md:text-[15px] md:leading-[1.72] lg:text-[15.5px] lg:leading-[1.75]">
        {item.description}
      </p>
    </article>
  );
}
