import Image from "next/image";
import { personalInfo, interests } from "@/lib/data";

export default function Bio() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {personalInfo.bio}
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm currently pursuing my Bachelor's degree in Computer Application at Royal Institute Of 
          Technology and Advanced Studies, Ratlam, where I've been developing a strong foundation 
          in programming, algorithms, and data structures. My academic journey has allowed me to 
          explore various aspects of computer science, but I've found my passion in data science 
          and machine learning.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="flex items-start">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="font-medium">{interest}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
