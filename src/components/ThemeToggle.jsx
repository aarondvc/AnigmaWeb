import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-transform duration-500 focus:outline-hidden hover:scale-110 px-3" 
      )}
    >
      {/* Sun (light mode) */}
      {!isDarkMode && (
        <div className="w-10 h-10 rounded-full bg-yellow-400 shadow-[0_0_30px_rgba(255,200,0,0.8)] transition-all duration-500" />
      )}

      {/* Moon (dark mode) */}
      {isDarkMode && (
        <div className="w-10 h-10 rounded-full bg-gray-300 shadow-[0_0_20px_rgba(200,200,255,0.6)] transition-all duration-500 relative overflow-hidden">
          {/* little craters */}
          <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-2 left-3 opacity-60"></div>
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full top-6 left-6 opacity-50"></div>
        </div>
      )}
    </button>
  );
};
