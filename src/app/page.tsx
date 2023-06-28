import Image from "next/image";
import { TechStack } from "./techstack";
import {
  FaDesktop,
  FaGithub,
  FaLink,
  FaLocationArrow,
  FaMailBulk,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { ReactNode } from "react";
import { ParticleGrid } from "./particle-grid";

const TechnologyListCard = ({
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

export default function Home() {
  return (
    <main className="flex flex-col gap-96 container mx-auto px-4 pb-32 pt-64">
      <div className="absolute -z-10 h-48 w-48 top-14 left-1/2 lg:h-[600px] lg:w-[600px] lg:top-16 lg:left-2/3 -translate-x-1/2 ">
        <ParticleGrid />
      </div>
      <Reveal>
        <div className="flex gap-24 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Hi, I'm Michael
            </h1>
            <h2 className="text-xl md:text-3xl font-extrabold mt-4">
              I'm a{" "}
              <span className="text-primary">fullstack web developer</span>
            </h2>
            <p className="text-xl max-w-3xl text-grey mt-8 font-medium whitespace-break-spaces">
              Besides functionality, the{" "}
              <span className="text-primary font-bold">look and feel</span> of
              the website is of high priority for me. I keep up with the{" "}
              <span className="text-primary font-bold">
                latest tools and technologies
              </span>{" "}
              to create highly maintainable and robust web applications.
            </p>
          </div>
        </div>
      </Reveal>
      <Section id="about">
        <Reveal>
          <h1 className="text-2xl md:text-3xl font-bold mb-8">About me</h1>
        </Reveal>
        <Reveal>
          <p className="text-xl text-grey mt-4">
            I’m a software engineer from Czech Republic. I studied computer
            science at Masaryk University in Brno, which is where my passion for
            coding originated. Frontend is my specialty, since I’m a visually
            focused individual. However I do enjoy developing on the backend
            side as well.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-xl text-grey mt-4">
            React and Next.js are my go to technologies. I follow the space to
            make sure I’m up to date with the rapidly changing space of web
            development. Whether I need to add functionality, connect the app to
            an API or add animations, I know what technology to reach for.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-xl text-grey mt-4">
            I have worked for a local company as a solo frontend React developer
            in the past. Currently, I’m trying to transition into freelancing.
          </p>
        </Reveal>
      </Section>
      <Section id="technology">
        <Reveal>
          <h1 className="text-2xl md:text-3xl font-bold mb-8">
            The technology I use
          </h1>
          <TechStack />
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 mt-8">
            <TechnologyListCard
              icon={<FaDesktop size={24} />}
              title="Frontend"
              technologies={[
                "React",
                "Next.js",
                "React Native",
                "Tailwindcss",
                "Zustand",
                "HTML",
                "CSS",
                "React-spring",
              ]}
            />
            <div className="self-stretch md:w-0.5 h-0.5 md:h-auto bg-white/5 rounded-full" />
            <TechnologyListCard
              icon={<FaServer size={24} />}
              title="Backend"
              technologies={[
                "Node.js",
                "tRPC",
                "Next.js",
                "Prisma",
                "Express.js",
                "PostgreSQL",
                "Rest API",
              ]}
            />
            <div className="self-stretch md:w-0.5 h-0.5 md:h-auto bg-white/5 rounded-full" />
            <TechnologyListCard
              icon={<FaTools size={24} />}
              title="Other tools"
              technologies={[
                "Nvim",
                "Tmux",
                "Figma",
                "Ubuntu",
                "WSL",
                "Github",
                "Github copilot",
                "Vercel",
              ]}
            />
          </div>
        </Reveal>
      </Section>
      <Section id="projects">
        <Reveal>
          <h1 className="text-2xl md:text-3xl font-bold">Featured projects</h1>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4 bg-white/5 rounded-xl mt-8">
            <div className="flex grow flex-col gap-4 items-center justify-evenly max-w-2xl mx-auto">
              <h2 className="text-xl font-bold">Overload</h2>
              <p className="text-lg text-grey text-center">
                A mobile application for tracking fitness progress that I am
                working on right now. Users can create a training template to
                follow and the app keeps history of completed trainings and
                shows usefull statistics.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-center md:text-left md:text-lg font-bold text-primary">
                  Expo | React Native | tRPC | Node.js
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/ciza99/overload" target="_blank">
                    <FaGithub size={24} />
                  </a>
                  <FaLink size={24} />
                </div>
              </div>
            </div>
            <div className="h-72 bg-black/50 w-full lg:w-96 flex shrink-0 items-center rounded-lg relative">
              <Image
                src="/overload.png"
                className="h-full object-contain"
                fill={true}
                alt="project website"
              />
            </div>
          </div>
        </Reveal>
      </Section>
      <Section id="contact">
        <Reveal>
          <h1 className="text-2xl md:text-3xl font-bold">Contact</h1>
          <p className="text-md md:text-lg font-bold text-grey">
            If you are interested in working with me, don’t hesitate to contact
            me via email.
          </p>
          <div className="flex flex-col md:flex-row gap-8 mt-8 md:items-center">
            <div className="flex gap-4 items-center">
              <div className="bg-white/5 rounded-full p-4">
                <FaMailBulk size={24} />
              </div>
              <div>
                <p className="text-lg font-bold">Email</p>
                <a
                  className="font-bold text-primary"
                  href="mailto:cizekmichal99@gmail.com"
                >
                  cizekmichal99@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white/5 rounded-full p-4">
                <FaLocationArrow size={24} />
              </div>
              <div>
                <p className="text-lg font-bold">Location</p>
                <p className="font-bold text-primary">Czech Republic, Brno</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
