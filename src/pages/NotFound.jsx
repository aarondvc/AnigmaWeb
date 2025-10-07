import { SkyBackground } from "../components/SkyBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative">
      <SkyBackground />
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <h1 className="text-4xl font-bold mb-4">🚫 404 Not Found</h1>
      <p className="text-muted-foreground mb-6">
        Sorry, this page is not available.
      </p>
      <a href="/#hero" className="cosmic-button">
        Home
      </a>
    </section>
  );
};