import clsx from "clsx";
import "./globals.css";
import { Poppins } from "next/font/google";
import { SectionLink } from "./section-link";
import { AnimatedCursor } from "./animated-cursor";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "ciza99.dev",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth flex flex-col grow">
      <body
        className={clsx(
          inter.className,
          "relative flow-hidden flex flex-col grow bg-base"
        )}
      >
        <AnimatedCursor />
        <div className="min-h-screen flex flex-col grow">
          <header className="fixed top-0 left-0 w-full z-20 backdrop-blur bg-base/10 px-8 py-4 flex items-center justify-between">
            <p className="text-primary font-bold">ciza99.dev</p>
            <nav className="hidden md:block">
              <ul className="flex  flex-row gap-4">
                <li>
                  <SectionLink id="about">About</SectionLink>
                </li>
                <li>
                  <SectionLink id="technology">Technology</SectionLink>
                </li>
                <li>
                  <SectionLink id="projects">Projects</SectionLink>
                </li>
                <li>
                  <SectionLink id="contact">Contact</SectionLink>
                </li>
              </ul>
            </nav>
          </header>
          {children}
          <div className="w-full mt-auto h-48 bg-gradient-to-t from-black/50 to-black/0" />
        </div>
      </body>
    </html>
  );
}
