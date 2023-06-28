"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { animated, useSprings } from "react-spring";
import { FaNodeJs } from "react-icons/fa";
import { SiPrisma, SiTailwindcss, SiTrpc } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTypescript,
} from "react-icons/tb";

type Item = {
  icon: ReactNode;
  label: string;
};

const technologies: Item[] = [
  {
    icon: <TbBrandReact size={30} color="#61DBFB" className="text-primary" />,
    label: "React",
  },
  {
    icon: <TbBrandNextjs size={30} color="white" className="text-primary" />,
    label: "Next.js",
  },
  {
    icon: (
      <TbBrandJavascript size={30} color="#F7DF1E" className="text-primary" />
    ),
    label: "JavaScript",
  },
  {
    icon: (
      <TbBrandTypescript size={30} color="#007ACC" className="text-primary" />
    ),
    label: "TypeScript",
  },
  {
    icon: (
      <TbBrandReactNative size={30} color="#61DBFB" className="text-primary" />
    ),
    label: "React Native",
  },
  {
    icon: <SiTailwindcss size={30} color="#07B6D5" className="text-primary" />,
    label: "Tailwindcss",
  },
  {
    icon: <TbBrandHtml5 size={30} color="#f06529" className="text-primary" />,
    label: "HTML",
  },
  {
    icon: <TbBrandCss3 size={30} color="#2965f1" className="text-primary" />,
    label: "CSS",
  },
  {
    icon: <SiTrpc size={30} color="#398CCB" className="text-primary" />,
    label: "tRPC",
  },
  {
    icon: <FaNodeJs size={30} color="#83CD29" className="text-primary" />,
    label: "Node.js",
  },
  {
    icon: <SiPrisma size={30} color="white" className="text-primary" />,
    label: "Prisma",
  },
];

export const TechStack = () => {
  const [index, setIndex] = useState(technologies.length);

  const [springs, api] = useSprings(
    technologies.length * 3,
    (i) => {
      const offset = Math.min(
        Math.abs(i - index),
        Math.abs((i % technologies.length) - (index % technologies.length))
      );

      return {
        to: {
          x: (i - index) * 225 - 100,
          backgroundColor: `rgba(255, 255, 255, ${1 / (offset + 1) / 20})`,
        },
      };
    },
    [index, technologies.length]
  );

  const updateIndex = useCallback(
    (value: number) => {
      if (value < technologies.length) {
        api.set((i) => ({ x: (i - index - technologies.length) * 225 - 100 }));
      }
      if (value >= technologies.length * 2) {
        api.set((i) => ({ x: (i - index + technologies.length) * 225 - 100 }));
      }
      setIndex((value % technologies.length) + technologies.length);
    },
    [index, api]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(index + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [index, api, updateIndex]);

  return (
    <ul className="flex relative h-16 overflow-clip">
      <div className="pointer-events-none z-10 absolute w-12 top-0 left-0 h-full bg-gradient-to-r from-base/100 " />
      <div className="pointer-events-none z-10 absolute w-12 top-0 right-0 h-full bg-gradient-to-l from-base/100 " />
      {springs.map((style, i) => {
        const technology = technologies[i % technologies.length];

        return (
          <animated.li
            key={i}
            className="cursor-pointer absolute top-0 left-1/2 -translate-x-1/2 h-full w-[200px] flex gap-4 items-center justify-center bg-white/5 p-4 rounded-xl font-bold"
            style={style}
            onClick={() => {
              updateIndex(i);
            }}
          >
            {technology.icon}
            {technology.label}
          </animated.li>
        );
      })}
    </ul>
  );
};
