type ProjectCardProps = {
  path: string;
  title: string;
  desc?: string;
  techStack?: string[];
  link?: string;
};

export const ProjectCard = ({
  path,
  title,
  desc,
  techStack,
}: ProjectCardProps) => {
  return (
    <div className="group bg-card rounded-xl relative overflow-hidden flex flex-col justify-between h-full transition-colors hover:border-card-border/80">
      <div>
        {/* img in card */}
        <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
          <img
            src={path}
            alt={`${title} preview`}
            className="w-full h-full object-cover brightness-[0.30] transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* title in card */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none p-4 text-center">
            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>

        {/* description under img */}
        {desc && desc.trim() !== "" && (
          <div className="p-4 pb-2">
            <p className="leading-relaxed text-text-main text-sm">{desc}</p>
          </div>
        )}
      </div>

      {/* tech stack badges */}
      {techStack && techStack.length > 0 && (
        <div className="p-4 pt-2 flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 bg-card-border/70 border border-card-border rounded-md text-xs text-text-h font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
