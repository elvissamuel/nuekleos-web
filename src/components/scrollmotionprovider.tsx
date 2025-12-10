"use client";

import { useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";

export default function ScrollMotionProvider() {
  const { scrollY } = useScroll();

  const smooth = useSpring(scrollY, {
    stiffness: 80,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    const unsub = smooth.on("change", (v) => {
      window.scrollTo(0, v);
    });
    return () => unsub();
  }, [smooth]);

  return null;
}
