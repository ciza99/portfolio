"use client";
import { ReactNode } from "react";
import { animated, config, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

export const Reveal = ({ children }: { children: ReactNode }) => {
  const { ref, inView, entry } = useInView({ delay: 350, triggerOnce: true });

  const [style] = useSpring(
    {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 20,
      config: config.molasses,
    },
    [inView]
  );

  return (
    <animated.div ref={ref} style={style}>
      {children}
    </animated.div>
  );
};
