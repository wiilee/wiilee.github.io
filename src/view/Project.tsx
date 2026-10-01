import { Navigate, useParams } from "react-router-dom";
import rawProjectData from "../data/projectData.json";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export interface TechStack {
  frontend: string[];
  backend: string[];
  desktopFramework: string[];
  tools: string[];
}

export interface Feature {
  heading: string;
  text: string;
}

export interface ProjectImage {
  path: string;
  text: string;
}

export interface ProjectData {
  title: string;
  desc: string;
  context: string;
  goal: string;
  techStack: TechStack;
  features: Feature[];
  images: ProjectImage[];
  link: string;
}

export type ProjectsMap = Record<string, ProjectData>;

const projectData = rawProjectData as ProjectsMap;
const projectImages = import.meta.glob<string>(
  "../assets/**/*.{png,jpg,jpeg,webp,gif,svg}",
  { eager: true, query: "?url", import: "default" },
);

export const Project = () => {
  const [isFinished, setIsFinished] = useState(false);
  const { id } = useParams<{ id: string }>();
  const data = id ? projectData[id] : null;
  const scrollRef = useRef<HTMLDivElement>(null);

  // redirect if project do not exist
  if (!data) {
    return <Navigate to="/projects" replace />;
  }

  // scroll for images
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <article className="w-full max-w-4xl mx-auto px-6 pt-16 pb-20">
      <div className="flex flex-col gap-12">
        {/* Herocard */}
        <header>
          <div className="relative inline-block  rounded-xl overflow-hidden group p-6 md:p-8 w-full">
            {/* image background */}
            {data.images?.[0] && (
              <img
                src={projectImages[data.images[0].path]}
                alt={data.images[0].text}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.30] scale-110"
              />
            )}

            {/* Text in front of image */}
            <div className="relative z-10 w-full">
              <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mb-2">
                <TypeAnimation
                  sequence={[
                    "Loading .",
                    300,
                    "Loading ..",
                    300,
                    "Loading ...",
                    300,
                    "Projekt:",
                    800,
                    "Projekt: " + data.title,
                    () => setIsFinished(true),
                  ]}
                  wrapper="span"
                  speed={30}
                  omitDeletionAnimation={true}
                />
              </h1>
              {data.desc && (
                <p
                  className={`text-white/90 text-xs md:text-sm font-normal leading-relaxed transition-all duration-800 ease-out ${
                    isFinished
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  {data.desc}
                </p>
              )}
              <div
                className={`flex justify-end mt-4 transition-all duration-800 ease-out ${
                  isFinished
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <a
                  href={data.link}
                  className="px-4 py-2 text-xs md:text-sm font-medium text-white/90 border border-white/30 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-200"
                >
                  Ansehen
                </a>
              </div>
            </div>
          </div>
        </header>
        <hr className="border-border-main/40" />

        {/* Context */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold uppercase tracking-widest text-text-h mb-3">
            Projektkontext
          </h2>
          <p className="text-sm md:text-base text-text-main leading-relaxed">
            {data.context}
          </p>
        </section>

        <hr className="border-border-main/40" />

        {/* Goal */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold uppercase tracking-widest text-text-h mb-3">
            Ziel
          </h2>
          <p className="text-sm md:text-base text-text-main leading-relaxed">
            {data.goal}
          </p>
        </section>

        <hr className="border-border-main/40" />

        {/* Tech Stack */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold uppercase tracking-widest text-text-h mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-col gap-4">
            {/* Frontend */}
            {data.techStack.frontend.length > 0 && (
              <div className="flex  items-center gap-2 text-sm">
                <span className="font-semibold text-text-h w-28">
                  Frontend:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {data.techStack.frontend.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded border-card-border bg-card border text-xs text-text-h"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Backend */}
            {data.techStack.backend.length > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-text-h w-28">
                  Backend und Datenbank:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {data.techStack.backend.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded border-card-border bg-card border text-xs text-text-h"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Desktop Framework */}
            {data.techStack.desktopFramework.length > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-text-h w-28">
                  Desktop Frameworks:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {data.techStack.desktopFramework.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded border-card-border bg-card border text-xs text-text-h"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Tools */}
            {data.techStack.tools.length > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-text-h w-28">Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {data.techStack.tools.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded border-card-border bg-card border  text-xs text-text-h"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <hr className="border-border-main/40" />

        {/* Features */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold uppercase tracking-widest text-text-h mb-6">
            Kern-Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 p-4 border-card-border bg-card border rounded-xl"
              >
                <h3 className="text-base md:text-lg font-semibold text-text-h">
                  {feature.heading}
                </h3>
                <p className="text-sm md:text-base text-text-main leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border-main/40" />

        {/* Images */}
        <section>
          {/* Header with control buttons */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold uppercase tracking-widest text-text-h">
              Vorschau & Benutzeroberfläche
            </h2>

            {/* show buttons if more than 1 img */}
            {data.images.length > 1 && (
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="p-1.5 rounded-md border border-card-border bg-card text-text-main hover:text-text-h hover:border-text-h/30 transition-colors"
                  aria-label="Vorheriges Bild"
                >
                  ←
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-1.5 rounded-md border border-card-border bg-card text-text-main hover:text-text-h hover:border-text-h/30 transition-colors"
                  aria-label="Nächstes Bild"
                >
                  →
                </button>
              </div>
            )}
          </div>

          {/* img carussel  */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none rounded-xl"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {data.images.map((image, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-full md:w-[85%] flex flex-col gap-2"
              >
                <div className=" w-full h-full overflow-hidden rounded-xl border border-card-border bg-card">
                  <img
                    src={projectImages[image.path]}
                    alt={image.text || `Vorschau ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {image.text && (
                  <p className="text-xs text-text-main leading-relaxed px-1 text-center">
                    {image.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
