import { Variants } from "framer-motion";
import React from "react";

export default function useHomeVariants() {
  const imageVariants: Variants = {
    offscreen: {
      x: 900,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const titleVariants: Variants = {
    offscreen: {
      x: -900,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  const aboutUsVariants: Variants = {
    offscreen: {
      y: 60,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const aboutUsHeaderVariants: Variants = {
    offscreen: {
      y: 70,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };
  return {
    imageVariants,
    titleVariants,
    aboutUsVariants,
    aboutUsHeaderVariants,
  };
}
