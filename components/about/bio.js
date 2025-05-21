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
          I am currently pursuing my Bachelors degree in Computer Application at Royal Institute Of 
          Technology and Advanced Studies, Ratlam, where I have been developing a strong foundation 
          in programming, algorithms, and data structures. My academic journey has allowed me to 
          explore various aspects of computer science, but I have found my passion in data science 
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
