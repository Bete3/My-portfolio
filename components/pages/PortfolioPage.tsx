import { GlassCard } from "@/components/GlassCard";

const projects = [
  {
    title: "African to Silicon Valley Application Platform",
    subtitle: "Role-based admissions platform",
    highlights: [
      "Developed a mobile-first responsive frontend using React.js, Next.js, and Tailwind CSS, replacing the manual G7 cohort application process.",
      
    ],
  },
  {
    title: "RemedyMate",
    subtitle: "AI health assistant for safer self-care",
    highlights: [
      "Designed and launched RemedyMate, an intelligent health assistant that suggests personalized natural and OTC care for common symptoms.",
    ],
  },
  {
    title: "Book Management Platform",
    subtitle: "Catalog and lending operations",
    highlights: [
      "Built core flows for organizing, tracking, and managing book records in a clean and responsive interface.",
     
    ],
  },
  {
    title: "Yesua Platform",
    subtitle: "Empowering girls in handmade craft",
    highlights: [
      "Created a platform concept to empower girls producing handmade crafts and showcase their products digitally.",
      
    ],
  },
];

export default function PortfolioPage() {
  return (
    <GlassCard>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-cyan-300 md:text-4xl">My Portfolio</h1>
          <p className="mt-2 text-slate-400">A collection of recent visual and web projects.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="card-cyan-glow rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-cyan-400/45 hover:bg-slate-900"
          >
            <div className="mb-3 h-24 rounded-xl bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.5),transparent_50%),linear-gradient(135deg,#0f172a,#111827)]" />
            <p className="text-cyan-glow text-xs uppercase tracking-[0.17em] text-cyan-300/90">Project {index + 1}</p>
            <h2 className="mt-1 text-lg font-semibold text-slate-100">{project.title}</h2>
            <p className="mt-2 text-sm font-medium text-cyan-200/90">{project.subtitle}</p>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-slate-400">
                  • {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </GlassCard>
  );
}
