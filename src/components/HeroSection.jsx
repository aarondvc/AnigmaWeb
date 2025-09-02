export const HeroSection = () => {
   return <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
         <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground/90 tracking-tight">
               <span className="opacity-0 animate-fade-in-delay-2"> Welcome all, this is my portfolio website</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
               I am XYZ. I am a software developer from the University of Georgia with a passion for creating immersive and engaging experiences. Explore my projects, skills, and journey in the world of software development.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
               <a href="#projects" className="cosmic-button ">
                  View My Projects
               </a>
            </div>
         </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
         <span className="text-sm text-foreground/70 mb-2">Scroll Down</span>
      </div>
   </section>

}