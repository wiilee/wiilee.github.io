export const Footer = () => {
  return (
    <section className="px-6 pb-10 max-w-5xl mx-auto ">
      <div className="pt-10  border-border-main/50 border-t flex flex-col items-start sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-text-h">
            Lust auf ein Projekt?
          </h2>
          <p className="text-sm text-text-main">
            Lass uns gemeinsam etwas aufbauen.
          </p>
        </div>
        <a
          href="mailto:willy.cai@icloud.de"
          className="text-sm font-medium text-text-h hover:text-accent-main transition-colors underline underline-offset-4"
        >
          Kontakt aufnehmen →
        </a>
      </div>
    </section>
  );
};
