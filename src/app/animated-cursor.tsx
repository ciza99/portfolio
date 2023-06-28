"use client";

import { useEffect } from "react";
import { animated, useSpring, to } from "react-spring";

const outerSize = 32;
const innerSize = 8;

export const AnimatedCursor = () => {
  const [{ x: innerX, y: innerY }, innerApi] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const [{ x: outerX, y: outerY, scale: outerScale }, outerApi] = useSpring(
    () => ({
      x: 0,
      y: 0,
      scale: 0,
    })
  );

  useEffect(() => {
    const mousemoveCallback = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      innerApi.start({ x: pageX, y: pageY });
      outerApi.start((_, controller) => ({
        x: pageX,
        y: pageY,
        delay: 50,
        scale: to([controller.springs.x, controller.springs.y], (x, y) => {
          const distance = Math.sqrt(
            Math.pow(x - pageX, 2) + Math.pow(y - pageY, 2)
          );

          return Math.min(500, distance);
        }).to([0, 500], [0.5, 3]),
      }));
    };

    window.addEventListener("mousemove", mousemoveCallback);

    return () => window.removeEventListener("mousemove", mousemoveCallback);
  }, [outerApi]);

  return (
    <div className="absolute h-full w-full overflow-hidden pointer-events-none">
      <div className="relative">
        <animated.div
          className="bg-primary/25 h-4 w-4 z-20 absolute rounded-full"
          style={{
            height: innerSize,
            width: innerSize,
            x: innerX.to((x) => x - innerSize / 2),
            y: innerY.to((y) => y - innerSize / 2),
          }}
        />
        <animated.div
          className="border-2 border-primary/50 z-20 absolute rounded-full"
          style={{
            height: outerSize,
            width: outerSize,
            x: outerX.to((x) => x - outerSize / 2),
            y: outerY.to((y) => y - outerSize / 2),
            scale: outerScale,
          }}
        />
      </div>
    </div>
  );
};
