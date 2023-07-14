import { ReactNode } from "react";

export const TechnologyListCard = ({
  icon,
  title,
  technologies,
}: {
  icon: ReactNode;
  title: string;
  technologies: string[];
}) => {
  return (
    <div>
      <div className="flex items-center gap-4 text-primary">
        {icon}
        <span className="text-md md:text-lg font-bold">{title}</span>
      </div>
      <div className="flex gap-4 flex-wrap mt-4">
        {technologies.map((tech, i) => (
          <p
            key={i}
            className="px-2 py-1 md:px-4 md:py-2 bg-white/5 rounded-xl font-bold"
          >
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};
