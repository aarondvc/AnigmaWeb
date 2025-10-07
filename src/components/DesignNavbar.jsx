import { cn } from "@/lib/utils";
import { ThemeToggle } from "../components/ThemeToggle";

export const DesignNavbar = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-6 py-4",
        "flex items-center justify-between",
        "transition-all duration-300"
      )}
    >
      {/* Logo */}
      <a
        href="/#hero"
        className="flex items-center text-xl font-bold text-primary space-x-1"
      >
        <span className="text-foreground relative z-10">
          AnigmaDev
        </span>
        <span className="opacity-80">Portfolio</span>
      </a>

      {/* Theme Toggle */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </nav>
  );
};
