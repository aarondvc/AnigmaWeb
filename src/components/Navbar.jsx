import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
   { name: "Home", href: "#hero" },
   { name: "About", href: "#about" },
   { name: "Contact", href: "#contact" },
   { name: "Projects", href: "#projects" },
   { name: "Skills", href: "#skills" }
]

export const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
    <nav 
    className={cn("fixed w-full z-40 transition-all duration-300", 
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}
    >
      <div className="container flex justify-between items-center">
         <a className="text-xl font-bold flex items-center text-primary"
            href="#hero"
         >
            <span className="relative z-10">
               <span className="text-2xl font-bold text-glow text-foreground"> AnigmaGames
               </span> 
               Portfolio
            </span>
         </a>

         <div className = "hidden md:flex space-x-8">
         {/* Navigation Items */}
            {navItems.map((item, key) => (
            <a key={key} href={item.href}>
               {item.name}
            </a>
            ))}
         </div>

      </div>
      
    </nav>
  );
};