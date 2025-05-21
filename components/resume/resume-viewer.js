// components/resume/resume-viewer.jsx
"use client";

import { useState } from "react";
import { personalInfo, education, projects, skills } from "@/lib/data";

export default function ResumeViewer() {
  const [activeTab, setActiveTab] = useState('education');
  
  return (
    <div className="bg-card rounded-lg border shadow-sm p-6 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">{personalInfo.name}</h2>
        <p className="text-muted-foreground mt-2">BCA Student • Data Science Enthusiast</p>
        
        <div className="flex flex-wrap items-center mt-4">
          <div className="mr-6 mb-2">
            <span className="text-muted-foreground">Email:</span>
            <a href={`mailto:${personalInfo.email}`} className="ml-2 hover:text-primary">
              {personalInfo.email}
            </a>
          </div>
          <div className="mr-6 mb-2">
            <span className="text-muted-foreground">Phone:</span>
            <span className="ml-2">{personalInfo.phone}</span>
          </div>
          <div className="mb-2">
            <span className="text-muted-foreground">Location:</span>
            <span className="ml-2">{personalInfo.location}</span>
          </div>
        </div>
      </div>
      
      <div className="border-b mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('education')}
            className={`py-2 px-4 border-b-2 ${
              activeTab === 'education'
                ? 'border-primary text-primary font-medium'
                : 'border-transparent hover:text-primary'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`py-2 px-4 border-b-2 ${
              activeTab === 'experience'
                ? 'border-primary text-primary font-medium'
                : 'border-transparent hover:text-primary'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-2 px-4 border-b-2 ${
              activeTab === 'skills'
                ? 'border-primary text-primary font-medium'
                : 'border-transparent hover:text-primary'
            }`}
          >
            Skills
          </button>
        </div>
      </div>
      
      <div>
        {activeTab === 'education' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            {education.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{item.institution}</h4>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </div>
                <p className="mt-1">
                  {item.degree}
                  {item.status && <span className="text-primary"> • {item.status}</span>}
                  {item.gpa && <span> • GPA: {item.gpa}</span>}
                </p>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className="text-sm mt-1">
                      <span className="text-muted-foreground">Technologies:</span>{' '}
                      {project.technologies.join(', ')}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.date}</p>
                </div>
                <p className="mt-2">{project.description}</p>
                <ul className="mt-2 space-y-1">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Developer Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.devTools.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {skills.coursework.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}