import { GlassCard } from './GlassCard';

export function AboutMe() {
  return (
    <GlassCard>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-cyan-400">About Me</h2>
      </div>
      <p className="text-slate-400 leading-relaxed text-lg">
        I am a Full Stack Developer specialized in creating modern, 
        responsive web experiences. I focus on clean code and 
        user-centered design to deliver exceptional digital products.
      </p>
    </GlassCard>
  );
}

export function Skills() {
  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
  ];

  return (
    <GlassCard>
      <h2 className="text-2xl font-semibold text-cyan-400 mb-6">My Skills</h2>
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1 text-sm">
              <span className="text-slate-300">{skill.name}</span>
              <span className="text-cyan-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-cyan-500 h-full rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-1000" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}