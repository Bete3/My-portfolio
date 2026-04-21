import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-16 md:px-8">
      <ScrollReveal className="mx-auto max-w-4xl text-center">
        <p className="section-tag">About Me</p>
        <h1 className="mt-2 text-5xl font-semibold text-slate-900 md:text-7xl">Designing clean, useful web experiences</h1>

        <p className="mx-auto mb-10 mt-6 max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
          I am a frontend developer and multidisciplinary creator focused on building modern,
          user-centered digital experiences. I combine clean code architecture, strong design systems,
          and an understanding of user psychology to deliver interfaces that are both elegant and reliable.
          I enjoy transforming complex ideas into visual products that feel clear, intuitive, and delightful
          across mobile and desktop environments.
        </p>
      </ScrollReveal>
    </section>
  );
}
