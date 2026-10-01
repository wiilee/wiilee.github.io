import memoji from "../assets/memoji-me.jpg";
import cv from "../assets/cv/cv-willy-cai.pdf";
import projectPortfolio from "../assets/projectportfolio/project1.pdf";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export const AvatarHeader = () => {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <section className="w-full pt-12 sm:pt-0">
      {/* Card: img with description */}
      <div className="bg-card border border-card-border p-8 sm:p-10 rounded-2xl flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img
            src={memoji}
            alt="Willy Avatar"
            className="shrink-0 h-28 w-28 sm:h-16 sm:w-16 object-cover rounded-full border border-card-border -mt-20 sm:mt-0"
          />
          <div>
            <h1 className="text-text-h text-2xl sm:text-3xl font-bold tracking-tight">
              Hallo, ich bin Willy!
            </h1>
            <p className="text-xs text-text-main font-medium mt-0.5  sm:block">
              Fullstack Developer
            </p>
          </div>
        </div>

        {/* Beschreibung */}
        <p className="text-text-main leading-relaxed text-sm sm:text-base text-center sm:text-left">
          <TypeAnimation
            sequence={[
              // 1. Erster Teil
              "Informatikstudent & Fullstack-Entwickler mit Unternehmer-Mindset. ",
              600, // Pause 1 Sekunde

              // 2. Erster + Zweiter Teil (wird nahtlos angehängt)
              "Informatikstudent & Fullstack-Entwickler mit Unternehmer-Mindset. Durch Erfahrung als Kleinunternehmer und Werkstudent arbeite ich eigenverantwortlich, zuverlässig und lösungsorientiert. ",
              600, // Pause 1 Sekunde

              // 3. Gesamter Text
              "Informatikstudent & Fullstack-Entwickler mit Unternehmer-Mindset. Durch Erfahrung als Kleinunternehmer und Werkstudent arbeite ich eigenverantwortlich, zuverlässig und lösungsorientiert. Leidenschaft für Software, Disziplin aus dem Sport.",

              // Callback am Ende
              () => setIsFinished(true),
            ]}
            wrapper="span"
            repeat={0}
            speed={80}
            omitDeletionAnimation={true}
          />
        </p>

        {/* Links */}
        <div
          className={`flex gap-5 pt-1 justify-center sm:justify-end text-xs sm:text-sm font-medium transition-all duration-800 ease-out ${
            isFinished
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <a
            href="https://github.com/wiilee"
            target="_blank"
            rel="noreferrer"
            className="text-text-main hover:text-text-h transition-colors underline underline-offset-4 decoration-border-main"
          >
            GitHub
          </a>
          <a
            href="mailto:willy.cai@icloud.de"
            target="_blank"
            rel="noreferrer"
            className="text-text-main hover:text-text-h transition-colors underline underline-offset-4 decoration-border-main"
          >
            Email
          </a>
          <a
            href={cv}
            download="cv-willy-cai.pdf"
            className="text-text-main hover:text-text-h transition-colors underline underline-offset-4 decoration-border-main"
          >
            Mein CV
          </a>
          <a
            href={projectPortfolio}
            download="project-portfolio-willy-cai.pdf"
            className="text-text-main hover:text-text-h transition-colors underline underline-offset-4 decoration-border-main"
          >
            Projektportfolio
          </a>
        </div>
      </div>
    </section>
  );
};
