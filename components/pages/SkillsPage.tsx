import { GlassCard } from "@/components/GlassCard";

const skills = [
  { name: "Python", level: 95 },
  { name: "React / Next.js", level: 92 },
    { name: "TypeScript", level: 87 },
    { name: "Tailwind CSS", level: 90 },  
                      

];

export default function SkillsPage() {
  return (
    <GlassCard>
      <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
        <div className="mx-auto w-full max-w-[220px]">
          
            <img
              src="/images/image.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-semibold text-cyan-300 md:text-4xl">My Skills</h1>
          <p className="mb-8 max-w-2xl text-slate-400">
            I build premium interfaces with high visual quality and thoughtful
            interactions.
          </p>

          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="font-semibold text-cyan-300">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500 shadow-[0_0_14px_rgba(6,182,212,0.55)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
