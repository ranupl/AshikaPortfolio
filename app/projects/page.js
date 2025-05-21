import ProjectCard from "@/components/projects/project-card";
import ProjectDetails from "@/components/projects/project-details";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          A collection of data science and machine learning projects I have built to solve real-world problems
          and demonstrate my technical skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {projects.map((project) => (
          <ProjectDetails key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}