import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="home">
      {/* ThemeToggle */}
      <ThemeToggle />

      {/* Background Elements */}
      <StarBackground />

      {/* Navigation Bar */}
      <Navbar />

    </div>
  );
}