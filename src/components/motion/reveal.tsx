"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Distance in pixels the content travels upward. */
  y?: number;
  /**
   * "view" animates the first time the content scrolls into view.
   * "mount" animates immediately on page load — used above the fold.
   */
  mode?: "view" | "mount";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  mode = "view",
}: RevealProps) {
  const transition = { duration: 0.6, delay, ease: EASE };

  if (mode === "mount") {
    return (
      <motion.div
        data-reveal=""
        className={className}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
