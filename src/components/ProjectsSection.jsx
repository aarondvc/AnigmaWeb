import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
   {
      id: 1,
      title: "Cherry On Top",
      description: "Cherry On Top was a semester-long team project focused on designing and implementing a tower defense game using Unity with C#. The game features cherries (enemy mobs) that traverse a fixed track, requiring players to strategically place and upgrade toppings (towers) to prevent the cherries from reaching the end. Within a 12+ person team, I was a Topping Developer, responsible for adding a targeting system to the towers for enemy tracking and detection, as well as implementing a buff system to enhance tower attributes and add a strategic layer to gameplay. I also contributed to the design and balancing of various toppings, ensuring each had unique abilities and upgrade paths to provide diverse tactical options for players.",
      image: "/projects/CherryOnTopHomePic.png",
      tags: ["Unity", "C#", "Game Dev"],
      demoLink: "#",
      githubUrl: "https://github.com/OwenOneHundred/CherryOnTop",
   },
   {
      id: 2,
      title: "Android Ride-Share App",
      description: "Ride-Share is an Android application enabling users to post and request rides, featuring a point-based reward system and a dual confirmation mechanism for ride verification. Collaborated in a three-person development team, managing data persistence through SQLite and implementing core user stories including trip validation, profile creation, and transaction tracking. Optimized ride listings to display only active trips, improving UI clarity and reducing on-screen clutter by 33%, while ensuring secure and reliable backend communication between passengers and drivers.",
      image: "/projects/RideShareHomePic.png",
      tags: ["Java", "Android Studio", "Firebase", "Mobile Dev"],
      demoLink: "#",
      githubUrl: "/private-repo",
   },
   {
      id: 3,
      title: "Portfolio Website",
      description: "AnigmaDev is a responsive portfolio website to showcase personal projects, technical skills, and professional experience. Built using ReactJS with Tailwind CSS for modular design and Framer Motion for interactive animations. Implemented a dark/light mode toggle, dynamic navigation bar, and smooth page transitions for an intuitive user experience. Deployed on Vercel with optimized loading performance and accessibility standards, the site serves as a central hub for my work, integrating GitHub repositories, project demos, and a downloadable resume.",
      image: "/projects/AnigmaWebHomePic.png",
      tags: ["ReactJS", "TailwindCSS", "Web Dev"],
      demoLink: "#",
      githubUrl: "https://github.com/aarondvc/AnigmaWeb",
   },
];

export const ProjectsSection = () => {
   return(
      <section id="projects" className="py-24 px-4 relative">
         <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Featured <span className="text-primary">
                  Projects
               </span>
            </h2>

            <p className = "text-center text-muted-foreground max-w-2xl mx-auto mb-12">
               Here are some of my recent works. Click on the project titles to view more details.
               Each project includes a brief description, technologies used, and links to live demos or GitHub repositories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, key) => (
                  <div 
                     key={key} 
                     className= "group bg-card rounded-lg overflow-hidden shadow-xs card-gover"
                  >
                     <div className="h-48 overflow-hidden">
                        <img 
                           src={project.image} 
                           alt= {project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                     </div>
                     <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                           {project.tags.map((tag) => (
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary bg-primary/20 text-secondary-foreground"> 
                           {tag} 
                            </span>
                           ))}
                        </div>
                     
                     <h3 className="text-xl font-semibold mb-1">
                        {project.title}
                     </h3>
                     <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                     </p>
                     <div className="flex justify-between items-center">
                         <div className="flex space-x-3">
                           <a href={project.demoLink} 
                              className="text-foregrpund/80 hover:text-primary transition-colors duration-300" target="_blank" >
                              <ExternalLink size={20}/>
                           </a>
                           <a href={project.githubUrl} 
                              className="text-foregrpund/80 hover:text-primary transition-colors duration-300" target="_blank" >
                              <Github size={20}/>
                           </a>
                         </div>
                     </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="text-center mt-12">
               <a className="cosmic-button w-fit mx-auto flex items-center gap-2" 
               target="_blank"
               href="https://github.com/aarondvc"
               >
                  View All Projects on Github <ArrowRight className="inline-block ml-2" size={16}/>
               </a>
            </div>
         </div>

      </section>
   );
};