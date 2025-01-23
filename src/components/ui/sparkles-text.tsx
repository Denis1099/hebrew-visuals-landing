"use client";

import { CSSProperties, ReactElement } from "react";
import { cn } from "@/lib/utils";
import { Sparkle } from "./sparkles/sparkle";
import { useSparkles } from "./sparkles/use-sparkles";

interface SparklesTextProps {
  as?: ReactElement;
  className?: string;
  text: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

export const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = { first: "#c0017e", second: "#5797ef" },
  className,
  sparklesCount = 15,
  ...props
}) => {
  const sparkles = useSparkles({ colors, sparklesCount });

  return (
    <div
      className={cn("text-6xl font-bold", className)}
      {...props}
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong className="relative z-30">{text}</strong>
      </span>
    </div>
  );
};