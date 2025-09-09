const projects = [
   {
      id: 1,
      title: "Project One",
      description: "Description for project one.",
      image: "path/to/image1.jpg",
      tags: ["React", "JavaScript"],
      demoLink: "#",
      githubUrl: "#",
   },
   {
      id: 2,
      title: "Project Two",
      description: "Description for project two.",
      image: "path/to/image2.jpg",
      tags: ["Node.js", "Express"],
      demoLink: "#",
      githubUrl: "#",
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
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"> 
                              {tag} 
                            </span>
                           ))};
                        </div>
                     </div>
                  </div>
               ))};
            </div>
         </div>

      </section>
   );
};