import shiftMate1 from "../assets/shiftMate/shiftMate1.png";
import tournament from "../assets/tournament/tournament3.png";
import html2pdf from "../assets/html2pdf/html2pdf1.png";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { AvatarHeader } from "../components/AvatarHeader";

export const Home = () => {
  const techStack = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "React",
    "Vue.js",
    "PostgreSQL",
    "Python",
    "Git",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-16 pb-20">
      {/* Section: Avatar profil */}
      <section className="flex flex-col sm:flex-row items-center justify-around gap-10 md:gap-12">
        <AvatarHeader />
      </section>
      <hr className="my-14 border-border-main/50" />
      {/* Section: Technology */}
      <section>
        <h2 className="text-lg font-semibold uppercase tracking-wider text-text-h mb-4">
          Technologien
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-main">
          {techStack.map((tech, index) => (
            <span key={tech} className="flex items-center gap-4">
              <span className="hover:text-text-h transition-colors cursor-default">
                {tech}
              </span>
              {index < techStack.length - 1 && (
                <span className="text-border-main">•</span>
              )}
            </span>
          ))}
        </div>
      </section>
      <hr className="my-14 border-border-main/50" />
      {/* Section: Selected project */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-text-h">
            Ausgewählte Projekte
          </h2>
          <Link
            to="/projects"
            className="text-sm font-medium text-text-main hover:text-text-h transition-colors"
          >
            Alle ansehen →
          </Link>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <Link to="/projects/shiftmate" className="group block">
            <ProjectCard path={shiftMate1} title="ShiftMate" />
          </Link>
          <Link to="/projects/turnierplaner" className="group block">
            <ProjectCard path={tournament} title="Turnierplaner" />
          </Link>
          <Link to="/projects/html2pdf" className="group block">
            <ProjectCard path={html2pdf} title="HTML2PDF" />
          </Link>
        </div>
      </section>
    </div>
  );
};
