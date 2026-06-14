import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  /** Title lines; the last line is highlighted in orange. */
  title: string[];
  className?: string;
  /** Render the highlighted word on the last line. Defaults to true. */
  highlightLast?: boolean;
};

/** Shared eyebrow + multi-line condensed title used across sections. */
export function SectionHeading({
  eyebrow,
  title,
  className = "",
  highlightLast = true,
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="title">
        {title.map((line, i) => {
          const isLast = i === title.length - 1;
          return (
            <span key={line} className="block">
              <span className={highlightLast && isLast ? "text-orange" : undefined}>
                {line}
              </span>
            </span>
          );
        })}
      </h2>
    </Reveal>
  );
}
