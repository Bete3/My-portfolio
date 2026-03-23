import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

export default function HeroPage() {
  return (
    <GlassCard className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="relative mx-auto mb-8 h-36 w-36 rounded-full border-4 border-cyan-400/35 p-1">
          <div className="h-full w-full overflow-hidden rounded-full bg-slate-800 ring-4 ring-cyan-300/20">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -inset-5 -z-10 rounded-full bg-cyan-400/15 blur-2xl" />
        </div>

        <h1 className="mb-3 text-5xl font-bold tracking-tight text-white md:text-6xl">
          Hi, I&apos;m <span className="text-cyan-400">Betelhem</span>
        </h1>
        <p className="mb-8 text-xl font-light text-slate-300 md:text-2xl">
          I&apos;m a Frontend Developer
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
         I build responsive and user-friendly web interfaces using modern technologies, focusing on clean design and smooth user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/portfolio"
            className="btn-cyan-glow inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-400/60 px-8 py-3 font-semibold transition  "
          >
            View My Work <ExternalLink size={18} />
          </Link>
          <a
            href="https://drive.google.com/file/d/18lZOMa2B3Ei2Ew00jTsmr85pkWbgWCkI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan-glow inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-white/5 px-8 py-3 font-semibold transition hover:bg-white/10"
          >
            Download CV <Download size={18} />
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
