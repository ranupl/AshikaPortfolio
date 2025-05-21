import ResumeViewer from "@/components/resume/resume-viewer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-6">Resume</h1>
          <Button asChild>
            <Link 
              href="https://drive.google.com/file/d/1PF0huVAxSmLVgLvpZ5qdxT1-7CNVXlRg/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Open PDF in new tab
            </Link>
          </Button>
          
        </div>
        
        <ResumeViewer />
      </div>
    </div>
  );
}