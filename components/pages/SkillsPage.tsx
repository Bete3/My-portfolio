"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const marqueeSkills = [...skills, ...skills];

export default function SkillsPage() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-16 md:px-8">
      <ScrollReveal className="w-full max-w-6xl">
        <div className="text-center md:text-left">
          <p className="section-tag">What I Do</p>
          <h1 className="mb-2 mt-2 text-5xl font-semibold text-slate-900 md:text-7xl">My Skills</h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-600 md:text-xl">
            I build premium interfaces with high visual quality and thoughtful interactions. My workflow combines
            scalable component architecture, performance-focused frontend engineering, and product thinking to ship
            experiences that look great and feel smooth.
          </p>

          <div className="mb-8 overflow-hidden rounded-full border border-slate-200 bg-white/70 py-3 shadow-sm backdrop-blur-sm">
            <div className="pointer-events-none relative">
              <div className="absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-slate-50 to-transparent" />
              <div className="absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-slate-50 to-transparent" />
              <motion.div
                className="flex w-max items-center gap-4 px-6"
                animate={{ x: [0, -50 + "%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {marqueeSkills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                  >
                    <img src={skill.icon} alt={skill.name} className="h-6 w-6 object-contain md:h-7 md:w-7" />
                    <span className="whitespace-nowrap text-sm font-semibold text-slate-700 md:text-base">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
