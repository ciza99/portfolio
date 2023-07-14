import { TechStack } from "./techstack";
import {
  FaDesktop,
  FaExternalLinkAlt,
  FaGithub,
  FaLocationArrow,
  FaMailBulk,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { Reveal } from "./reveal";
import { Section } from "./section";
import dynamic from "next/dynamic";
import { ProjectCard } from "./project-card";
import { TechnologyListCard } from "./technology-list-card";

const ParticleGrid = dynamic(() => import("./particle-grid"), { ssr: false });

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
              {"Hi, I'm Michael"}
            </h1>
            <h2 className="text-xl md:text-3xl font-extrabold mt-4">
              {"I'm a "}
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
            focused individual. However I do enjoy coding on the backend as
            well.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-xl text-grey mt-4">
            React and Next.js are technologies that I am the most familiar with.
            I am constantly trying to learn and expand my skill set. I keep up
            with the web developement world, therefore I am capable of choosing
            the right tool for the job.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-xl text-grey mt-4">
            I have worked for a local company as a frontend React developer in
            the past. Currently, I’m looking for new job opportunities that
            would allow me to grow.
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
        </Reveal>
        <Reveal>
          <ProjectCard
            title="Overload"
            description="A mobile application for tracking fitness progress that I am working on right now. Users can create a training template to follow and the app keeps history of completed trainings and shows usefull statistics."
            imageSrc="/overload.png"
            tech="Expo | React Native | tRPC | Node.js"
            links={[
              {
                icon: <FaGithub size={24} />,
                href: "https://github.com/ciza99/overload",
              },
            ]}
          />
        </Reveal>
        <Reveal>
          <ProjectCard
            imagePosition="left"
            title="WASM ludo"
            description="A school group project which I worked on intensively since I enjoy Rust. The project is a real-time multiplayer ludo game written in completely in Rust (client and server) and compiled to WebAssembly, which utilizes WebSockets. The frontend is written in a Rust framework Yew and the backend uses Actix. The project is deployed on AWS EC2 instance."
            imageSrc="/wasm-ludo.png"
            tech="Rust | Yew | Actix | WebAssembly | WebSockets | AWS"
            links={[
              {
                icon: <FaGithub size={24} />,
                href: "https://github.com/ciza99/wasm-ludo",
              },
            ]}
          />
        </Reveal>
        <Reveal>
          <ProjectCard
            title="Portfolio page"
            description="My own portfolio that you are currently looking at. I played with some animations and the new Next.js app directory with client and server components. It was fun to work on the 3D animation in the header that was created using react-three-fiber in combination with react-spring. The website is deployed on Vercel."
            imageSrc="/portfolio.png"
            tech="Next.js | Tailwindcss | react-three-fiber | react-spring | Vercel"
            links={[
              {
                icon: <FaGithub size={24} />,
                href: "https://github.com/ciza99/portfolio",
              },
              {
                icon: <FaExternalLinkAlt size={24} />,
                href: "https://portfolio-ciza99.vercel.app/",
              },
            ]}
          />
        </Reveal>
        <Reveal>
          <ProjectCard
            imagePosition="left"
            title="Dotfiles"
            description="My own configuration files for neovim, tmux, zsh and other tools. I like having a personalized setup that I can use on any machine and that makes me faster and more productive. The neovim configuration was written in Lua."
            imageSrc="/dotfiles.png"
            tech="Lua | Bash | Neovim"
            links={[
              {
                icon: <FaGithub size={24} />,
                href: "https://github.com/ciza99/.dotfiles",
              },
            ]}
          />
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
                  className="hover:underline font-bold text-primary"
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
                <p className="font-bold text-primary">Czech Republic, Prague</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
