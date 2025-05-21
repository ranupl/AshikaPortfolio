import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { Github, FileText, Mail, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-secondary/50 to-background py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Ashika Panchal</span>
            </h1>
            <h2 className="mt-4 text-xl sm:text-2xl font-medium text-muted-foreground">
              BCA Student • Data Science Enthusiast
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A passionate computer application student with focus on data science 
              and machine learning. I build predictive models and data visualization 
              tools that extract meaningful insights from complex datasets.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/projects">
                  <Code className="mr-2 h-4 w-4" />
                  View Projects
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`mailto:${personalInfo.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-primary shadow-xl">
              <Image 
                src="/images/profile.jpg" 
                alt="Ashika Panchal" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}