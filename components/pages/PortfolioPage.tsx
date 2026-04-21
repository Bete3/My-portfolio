import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-16 md:px-8">
      <ScrollReveal className="w-full max-w-5xl text-center">
        <p className="section-tag">Visit My Portfolio And Keep Your Feedback</p>
        <h1 className="text-5xl font-semibold text-slate-900 md:text-7xl">My Portfolio</h1>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600 md:text-2xl">
          A curated collection of product interfaces and web applications built with a strong focus on usability,
          visual identity, and maintainable frontend architecture.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:text-left">
        {projects.map((project, index) => (
          <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="project-thumb h-44 rounded-xl" />
            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.17em] text-pink-500">Project {index + 1}</p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-900">{project.title}</h2>
              <p className="mt-1 text-base font-medium text-indigo-500">{project.subtitle}</p>
              <ul className="space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="text-base leading-relaxed text-slate-600">
                  • {item}
                </li>
              ))}
            </ul>
            </div>
          </article>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
}
