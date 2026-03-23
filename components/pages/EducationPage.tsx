import { GlassCard } from "@/components/GlassCard";

const education = [
  {
    title: "Bachelor of Computer Science",
    year: "2022-2026",
    school: "Adama Science and Technology University Ethiopia",
    courses: [
      "Python",
      "C++",
      "Java",
      "Database Management Systems",
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
    ],
  },
  { title: "Data Structures & Algorithms, Software Development", year: "2025", school: "African to Silicon Valley (A2SV)", courses: ["Data Structures", "Algorithms", "Software Engineering"] },
];

export default function EducationPage() {
  return (
    <GlassCard>
      <h1 className="mb-8 text-3xl font-semibold text-cyan-300 md:text-4xl">Education</h1>

      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={item.title}
            className="card-cyan-glow rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">{item.title}</h2>
                <p className="text-sm text-slate-400">{item.school}</p>
              </div>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                {item.year}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-semibold text-slate-200">Relevant Courses:</h3>
              <ul className="mt-2 space-y-1">
                {item.courses.map((course) => (
                  <li key={course} className="text-sm text-slate-400">
                    • {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
