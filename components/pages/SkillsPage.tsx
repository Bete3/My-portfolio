import ScrollReveal from "@/components/ScrollReveal";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

export default function SkillsPage() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-16 md:px-8">
      <ScrollReveal className="w-full max-w-5xl">
        <div className="text-center md:text-left">
          <p className="section-tag">What I Do</p>
          <h1 className="mb-2 mt-2 text-5xl font-semibold text-slate-900 md:text-7xl">My Skills</h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-600 md:text-xl">
            I build premium interfaces with high visual quality and thoughtful interactions. My workflow combines
            scalable component architecture, performance-focused frontend engineering, and product thinking to ship
            experiences that look great and feel smooth.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.name}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50">
                  <img src={skill.icon} alt={skill.name} className="h-9 w-9 object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800">{skill.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
