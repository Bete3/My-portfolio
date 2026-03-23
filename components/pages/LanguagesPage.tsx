import { GlassCard } from "@/components/GlassCard";

const languages = [
  { name: "English", level: 95 },
  { name: "Amharic", level: 100 },
];

export default function LanguagesPage() {
  return (
    <GlassCard>
      <h1 className="mb-2 text-3xl font-semibold text-cyan-300 md:text-4xl">Languages</h1>
      <p className="mb-8 text-slate-400">Fluency and communication level by language.</p>

      <div className="space-y-6">
        {languages.map((language) => (
          <div key={language.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-200">{language.name}</span>
              <span className="text-cyan-300">{language.level}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-300 to-cyan-500 shadow-[0_0_14px_rgba(56,189,248,0.45)]"
                style={{ width: `${language.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
