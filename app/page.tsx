import AppShell from "@/components/AppShell";
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
import EducationPage from "@/components/pages/EducationPage";
import HeroPage from "@/components/pages/HeroPage";
import PortfolioPage from "@/components/pages/PortfolioPage";
import SkillsPage from "@/components/pages/SkillsPage";

export default function Home() {
  return (
    <AppShell>
      <div className="flex flex-col gap-0">
        <div id="hero" className="scroll-mt-28">
          <HeroPage />
        </div>
        <div id="about" className="scroll-mt-28">
          <AboutPage />
        </div>
        <div id="skills" className="scroll-mt-28">
          <SkillsPage />
        </div>
        <div id="portfolio" className="scroll-mt-28">
          <PortfolioPage />
        </div>
        <div id="education" className="scroll-mt-28">
          <EducationPage />
        </div>
        <div id="contact" className="scroll-mt-28">
          <ContactPage />
        </div>
      </div>
    </AppShell>
  );
}