import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
   {
      id: 1,
      title: "Cherry On Top",
      description: "Cherry On Top was a semester-long team project focused on designing and implementing a tower defense game using Unity with C#. The game features cherries (enemy mobs) that traverse a fixed track, requiring players to strategically place and upgrade toppings (towers) to prevent the cherries from reaching the end.",
      image: "path/to/image1.jpg",
      tags: ["Unity", "C#", "Game Dev"],
      demoLink: "#",
      githubUrl: "https://github.com/OwenOneHundred/CherryOnTop",
   },
   {
      id: 2,
      title: "Android Ride-Share App",
      description: "Description for project two.",
      image: "path/to/image2.jpg",
      tags: ["Java", "Android Studio", "Mobile Dev", "Firebase"],
      demoLink: "#",
      githubUrl: "/private-repo",
   },
   {
      id: 3,
      title: "Project Three",
      description: "Description for project three.",
      image: "path/to/image3.jpg",
      tags: ["Python", "Django"],
      demoLink: "#",
      githubUrl: "#",
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