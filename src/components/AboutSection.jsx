import { Code } from "lucide-react";

export const AboutSection = () => {
 return (
   <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            About <span className="text-primary">Me</span>
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h3 className="text-2xl font-semibold text-foreground/90">
                  Passionate Software Developer & Content Creator
               </h3>
               <p className="text-muted-foreground">
                      My journey in software development began with a fascination for technology and a desire to build solutions that make a difference. Over the years, I have honed my skills in various programming languages and frameworks, allowing me to bring innovative ideas to life.
                  </p>
                  <p className="text-muted-foreground">
                      Beyond coding, I am also a content creator, sharing my knowledge and experiences through blogs and tutorials. I believe in the power of community and continuous learning, and I strive to contribute positively to the tech world.
                  </p>
                  <p className="text-muted-foreground">
                      When I'm not coding or creating content, you can find me exploring new technologies, collaborating with fellow developers, or indulging in my hobbies like gaming and music.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                     <a href="#contact" className="cosmic-button">
                        Get In Touch
                     </a>
                     <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        View My Resume
                     </a>
                  </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
               <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Code className="w-6 h-6 text-primary" />
                     </div>
                  </div>
               </div>
               <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Code className="w-6 h-6 text-primary" />
                     </div>
                  </div>
               </div>
               <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Code className="w-6 h-6 text-primary" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
 );
}; 