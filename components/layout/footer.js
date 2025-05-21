import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Ashika Panchal</h3>
            <p className="max-w-xs text-muted-foreground">
              Computer Application student specializing in Data Science and Machine Learning
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="/resume" className="hover:text-primary transition-colors">Resume</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              {personalInfo.email}<br />
              {personalInfo.phone}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ashika Panchal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}