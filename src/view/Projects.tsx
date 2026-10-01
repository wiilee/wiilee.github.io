import shiftMate1 from "../assets/shiftMate/shiftMate2.png";
import tournament from "../assets/tournament/tournament3.png";
import html2pdf from "../assets/html2pdf/html2pdf2.png";
import kitu from "../assets/kitu/KITU1.png";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-16 pb-20">
      <section>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg  font-semibold uppercase tracking-wider text-text-h mb-4">
            Meine Projekte
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-9">
            <Link to="/projects/shiftmate">
              <ProjectCard
                path={shiftMate1}
                title="ShiftMate"
                techStack={["Vue.js", "Express.js", "PostgreSQL", "Node.js"]}
                desc="Schichtplaner-App zur einfachen Erfassung von Arbeitszeiten und Schichten, inklusive automatischer Schätzung des voraussichtlichen Netto-Verdienstes."
              />
            </Link>
            <Link to="/projects/turnierplaner">
              <ProjectCard
                path={tournament}
                title="Turnierplaner"
                techStack={["React", "Electron.js", "Node.js"]}
                desc="Desktop-App zum einfachen Erfassen von Teilnehmern und zur automatisierten Durchführung von Qualifikationen sowie 8- und 16-Spieler-Turnieren."
              />
            </Link>
            <Link to="/projects/html2pdf">
              <ProjectCard
                path={html2pdf}
                title="HTML2PDF"
                techStack={["Vue.js", "HTML/CSS"]}
                desc="Ein Tool zur flexiblen Gestaltung von A4-Dokumenten mit HTML, CSS und JavaScript. Es wandelt deine Code-Layouts direkt in sauber formatierte PDFs um."
              />
            </Link>
            <Link to="/projects/kitu">
              <ProjectCard
                path={kitu}
                title="KI Projekt der TUB"
                techStack={["React", "Node.js", "Python", "C"]}
                desc="Ein an der TU Berlin entwickeltes KI-Projekt zur Automatisierung von Zugentscheidungen im Spiel Racing Kings – inklusive eigener Webanwendung zur Echtzeit-Darstellung von Spielfeld und Spielverlauf."
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
