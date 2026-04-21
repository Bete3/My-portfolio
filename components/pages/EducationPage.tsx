import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-16 md:px-8">
      <ScrollReveal className="w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <div className="text-center">
        <p className="section-tag">My Formal Education</p>
        <h1 className="mb-3 mt-2 text-5xl font-semibold text-slate-900 md:text-7xl">My Resume</h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-600 md:text-2xl">
          My learning path combines formal computer science education with intensive practical training in
          algorithms, software engineering, and real-world product development.
        </p>

        <div className="space-y-8 text-left">
        {education.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
                <p className="text-base text-slate-500">{item.school}</p>
              </div>
              <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                {item.year}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-slate-700">Relevant Courses:</h3>
              <ul className="mt-2 space-y-1">
                {item.courses.map((course) => (
                  <li key={course} className="text-base text-slate-600">
                    • {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
