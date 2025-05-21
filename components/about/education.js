import { education } from "@/lib/data";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="rounded-lg border p-6">
            <h3 className="font-bold text-lg">{item.institution}</h3>
            <div className="flex items-center text-muted-foreground mt-2">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span>{item.degree}</span>
              {item.gpa && <span className="ml-2">• GPA: {item.gpa}</span>}
              {item.status && <span className="ml-2 text-primary">• {item.status}</span>}
            </div>
            <div className="flex items-center text-muted-foreground mt-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{item.duration}</span>
            </div>
            <div className="text-muted-foreground mt-2">
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}