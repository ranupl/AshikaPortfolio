import SkillCategory from "@/components/skills/skill-category";
import SkillCard from "@/components/skills/skill-card";
import { skills } from "@/lib/data";

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Skills & Expertise</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          The technical skills, tools, and technologies I've acquired through academic studies
          and hands-on project experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Programming Languages">
            {skills.languages.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillCategory>
          
          <SkillCategory title="Developer Tools">
            {skills.devTools.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillCategory>
          
          <SkillCategory title="Technologies & Frameworks">
            {skills.technologies.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillCategory>
          
          <SkillCategory title="Relevant Coursework">
            {skills.coursework.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillCategory>
        </div>
      </div>
    </div>
  );
}