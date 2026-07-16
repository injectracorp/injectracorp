import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  direction?: "col" | "row";
  as?: "section" | "div";
};

/**
 * Wrapper recorrente identificado em quase todas as seções do Figma (HOME):
 * container com padding 40px/20px e um miolo centralizado com max-width 1400px.
 */
export default function Section({
  children,
  className = "",
  innerClassName = "",
  direction = "col",
  as: Tag = "section",
}: SectionProps) {
  const directionClass = direction === "row" ? "flex-row flex-wrap" : "flex-col";

  return (
    <Tag className={`flex w-full flex-col items-center px-5 py-10 box-border ${className}`}>
      <div className={`flex w-full max-w-[1400px] items-center ${directionClass} ${innerClassName}`}>
        {children}
      </div>
    </Tag>
  );
}
