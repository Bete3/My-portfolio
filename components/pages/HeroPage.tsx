import Link from "next/link";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

export default function HeroPage() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-10 md:px-8 md:py-16">
      <ScrollReveal className="w-full max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="section-tag mb-3">Building For The Web</p>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
              Hi, I&apos;m <span className="text-pink-600">Betelhem</span>
            </h1>
            <p className="mt-3 text-2xl font-semibold text-slate-700 md:text-4xl">A Professional Frontend Developer</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              I craft modern, responsive, and user-centered web interfaces with strong visual hierarchy,
              smooth interactions, and scalable frontend architecture. I focus on delivering polished
              digital products that are intuitive, fast, and production-ready.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-pink-600 px-6 text-white hover:bg-pink-500">
                <Link href="/#portfolio">
                  View My Work <ExternalLink size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-slate-300 bg-white px-6 text-slate-700 hover:bg-slate-50">
                <a
                  href="https://drive.google.com/file/d/18lZOMa2B3Ei2Ew00jTsmr85pkWbgWCkI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV <Download size={16} />
                </a>
              </Button>
            </div>

            <Link
              href="/#about"
              aria-label="Next section"
              className="mt-9 inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-2 text-slate-500 transition hover:text-pink-600"
            >
              <ChevronDown size={18} className="animate-bounce" />
            </Link>
          </div>

          <div className="relative mx-auto h-72 w-full max-w-[320px] rounded-2xl border border-slate-200 bg-slate-100 p-3 shadow-sm">
            <div className="h-full w-full overflow-hidden rounded-xl bg-slate-200">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
            <span className="absolute -right-2 top-4 rounded-full bg-pink-500 px-2 py-1 text-xs font-medium text-white">
              Available
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
