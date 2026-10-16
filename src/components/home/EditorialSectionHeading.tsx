import { useId } from "react";
import { useReveal } from "../../hooks/useReveal";
import "./EditorialSectionHeading.css";

type EditorialSectionHeadingProps = {
  eyebrow: string;
  scriptWord: string;
  title: string;
  intro: string;
};

export function EditorialSectionHeading({ eyebrow, scriptWord, title, intro }: EditorialSectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLElement>(0.2);
  const headingId = `${useId().replace(/:/g, "")}-heading`;

  return (
    <header ref={ref} className={`editorial-heading${visible ? " editorial-heading--visible" : ""}`}>
      <div>
        <p className="editorial-heading__eyebrow">{eyebrow}</p>
        <h2 className="editorial-heading__title" id={headingId}>
          <span className="editorial-heading__script">
            <span className="editorial-heading__script-text">{scriptWord}</span>
            <svg className="editorial-heading__underline" viewBox="0 0 180 16" aria-hidden="true" focusable="false">
              <path
                pathLength={1}
                d="M3 11 C 22 5.5, 44 13.5, 68 9.2 C 92 4.8, 114 13, 138 8.4 C 152 5.8, 166 10.2, 177 7.6"
              />
            </svg>
          </span>
          <span className="editorial-heading__main">{title}</span>
        </h2>
      </div>
      <p className="editorial-heading__intro">{intro}</p>
    </header>
  );
}
