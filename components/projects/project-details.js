import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function ProjectDetails({ project }) {
  return (
    <section id={project.id} className="py-16 border-t first:border-t-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-muted-foreground mb-4">{project.date}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-lg mb-6">{project.description}</p>
          
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-3 mb-8">
            {project.details.map((detail, index) => (
              <li key={index} className="flex">
                <span className="text-primary mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          
          <Button asChild>
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}