"use client";

import { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";

/** Edge of the tile from which it grows when revealed */
export type TileOrigin = "left" | "right" | "top" | "bottom" | "center";

// clip-path keeps the rounded corners intact while the tile grows (a scale would distort them)
const HIDDEN_CLIP: Record<TileOrigin, string> = {
  left: "inset(15% 100% 15% 0% round 24px)",
  right: "inset(15% 0% 15% 100% round 24px)",
  top: "inset(0% 15% 100% 15% round 24px)",
  bottom: "inset(100% 15% 0% 15% round 24px)",
  center: "inset(50% 50% 50% 50% round 24px)",
};
const SHOWN_CLIP = "inset(0% 0% 0% 0% round 24px)";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

type TileProps = {
  /** Tile shape is visible */
  revealed: boolean;
  /** Tile content is visible (should only be true once revealed) */
  contentVisible: boolean;
  origin: TileOrigin;
  /** Stagger delay in seconds, applied to both the reveal and the content fade */
  delay?: number;
  /** Size and colors of the tile */
  className?: string;
  /** Layout of the tile content */
  innerClassName?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export default function Tile({
  revealed,
  contentVisible,
  origin,
  delay = 0,
  className = "",
  innerClassName = "",
  style,
  children,
}: TileProps) {
  return (
    <motion.div
      initial={false}
      animate={{ clipPath: revealed ? SHOWN_CLIP : HIDDEN_CLIP[origin] }}
      transition={revealed
        ? { duration: 0.6, delay, ease: EASE_OUT }
        : { duration: 0.35, ease: "easeIn" }}
      style={style}
      className={`rounded-3xl overflow-hidden transition-colors duration-500 ${className}`}
    >
      <motion.div
        initial={false}
        animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={contentVisible
          ? { duration: 0.4, delay, ease: EASE_OUT }
          : { duration: 0.15 }}
        className={`h-full w-full ${innerClassName}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
