import { ThemeToggle } from "../components/ThemeToggle";
import { SkyBackground } from "../components/SkyBackground";

export const GitHubPrivate = () => {
   return(
      <section className="h-screen flex flex-col items-center justify-center text-center">
         <SkyBackground />
         <div className="absolute top-6 right-6">
                 <ThemeToggle />
         </div>
         <h1 className="text-4xl font-bold mb-4">🚫 Private Repository</h1>
         <p className="text-muted-foreground mb-6">
            Sorry, this project is currently private.  
            Please contact me directly if you'd like to learn more.
         </p>
         <a
            href="mailto:aarondverde@gmail.com"
            className="cosmic-button"
         >
         Get In Touch
         </a>
      </section>
   );
}
