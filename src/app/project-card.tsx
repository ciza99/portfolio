import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

type link = {
  icon: ReactNode;
  href: string;
};

export const ProjectCard = ({
  title,
  tech,
  description,
  links,
  imageSrc,
  imagePosition = "right",
}: {
  title: string;
  description: string;
  imageSrc: string;
  tech: string;
  links: link[];
  imagePosition?: "left" | "right";
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4 border border-white/5 hover:bg-white/[0.025] transition-colors rounded-xl mt-8">
      <div className="flex grow flex-col gap-4 items-center justify-evenly max-w-2xl mx-auto">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-lg text-grey text-center">{description}</p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-center md:text-left md:text-lg font-bold text-primary">
            {tech}
          </p>
          <div className="flex gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                className="hover:text-primary hover:scale-105 transition-all"
                href={link.href}
                target="_blank"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "h-72 bg-black/50 w-full lg:w-96 flex shrink-0 items-center rounded-lg relative",
          imagePosition === "left" && "-order-1"
        )}
      >
        <Image
          src={imageSrc}
          className="h-full object-contain"
          fill={true}
          alt="project"
        />
      </div>
    </div>
  );
};
