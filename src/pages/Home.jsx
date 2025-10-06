import { ThemeToggle } from "../components/ThemeToggle";
import { SkyBackground } from "../components/SkyBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { DesignsSection } from "../components/DesignsSection";

export const Home = () => {
  return (
    <div className="home">
      
      {/* Background Elements */}
      <SkyBackground />
    
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
         <HeroSection />
         <AboutSection />
         <SkillsSection />
         <ProjectsSection/>
         <DesignsSection />
         <ContactSection />
      </main>

    </div>
  );
}