const skills = [
   //Frontend
   {name: 'HTML', level: 95, category: 'frontend'},
   {name: 'CSS', level: 90, category: 'frontend'},
   {name: 'JavaScript', level: 85, category: 'frontend'},
   {name: 'React', level: 80, category: 'frontend'},
   {name: 'Tailwind CSS', level: 75, category: 'frontend'},

   //Backend
   {name: 'Node.js', level: 85, category: 'backend'},

   //Tools
   {name: 'Git', level: 90, category: 'tools'},
   {name: 'Docker', level: 70, category: 'tools'},
   {name: 'VS Code', level: 60, category: 'tools'},
   {name: 'IntelliJ', level: 60, category: 'tools'},

   //Languages
   {name: 'JavaScript', level: 90, category: 'languages'},
   {name: 'Python', level: 80, category: 'languages'},
   {name: 'Java', level: 70, category: 'languages'},
   {name: 'C#', level: 60, category: 'languages'},
   
   //Design
   {name: 'Canva', level: 80, category: 'design'}, 
   {name: 'Figma', level: 70, category: 'design'},
]



export const SkillsSection = () => {
   return (
     <section id='skills' className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            My <span className="text-primary">Skills</span>
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, key) => (
               <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                  <div className="text-left">
                     <h3 className="font-semibold text-lg"> {skill.name}</h3>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden mt-2">
                     <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out"
                        style={{ width: `${skill.level}%` }}/>
                  </div>
                  <div className="text-sm text-muted-foreground">
                     <span>{skill.level}%</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
     </section>
   );

};         