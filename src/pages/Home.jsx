import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
  return (
    <div className="home">
      {/* ThemeToggle */}
      <ThemeToggle />

      {/* Background Elements */}
      <StarBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
         <HeroSection />
         <AboutSection />
         <SkillsSection />
         <ProjectsSection/>
         <ContentSection />
      </main>

    </div>
  );
}