const languages = [
  { name: "English", level: 95 },
  { name: "Amharic", level: 100 },
];

export default function LanguagesPage() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-16 md:px-8">
      <div className="w-full max-w-4xl text-center">
        <h1 className="mb-2 text-4xl font-semibold text-cyan-300 md:text-6xl">Languages</h1>
        <p className="mx-auto mb-10 max-w-3xl text-slate-300 md:text-lg">
          Fluency and communication confidence across professional collaboration, technical discussions, and
          everyday conversations.
        </p>

        <div className="space-y-6 text-left">
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
      </div>
    </section>
  );
}
