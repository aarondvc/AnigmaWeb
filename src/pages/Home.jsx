import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

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
      </main>

    </div>
  );
}