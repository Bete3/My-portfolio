import { GlassCard } from "@/components/GlassCard";

export default function AboutPage() {
  return (
    <GlassCard>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-cyan-300 md:text-4xl">About Me</h1>
        
      </div>

      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
        I am a frontend developer and multidisciplinary creator focused on building modern, 
        user-centered digital experiences. I combine clean code architecture, strong design systems, 
        and an understanding of user psychology to deliver interfaces that are both elegant and reliable.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card-cyan-glow rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Years Experience</p>
          <p className="text-cyan-glow mt-1 text-3xl font-bold text-cyan-300">2</p>
        </div>
        <div className="card-cyan-glow rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Projects Delivered</p>
          <p className="text-cyan-glow mt-1 text-3xl font-bold text-cyan-300">4</p>
        </div>
        
      </div>
    </GlassCard>
  );
}
