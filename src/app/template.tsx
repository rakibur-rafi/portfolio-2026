"use client";

import { MotionConfig, motion } from "framer-motion";

/**
 * App Router template: remounts on every navigation, so each page fades in.
 * `reducedMotion="user"` automatically disables transform-based animation for
 * visitors who ask their OS for less motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        data-reveal=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
