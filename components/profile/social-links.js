import { Github, CodeSquare, Code } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-10 w-10" />,
      link: personalInfo.github,
      username: "ashikapl",
      description: "Check out my repositories and contributions."
    },
    {
      name: "GeeksForGeeks",
      icon: <CodeSquare className="h-10 w-10" />,
      link: personalInfo.gfg,
      username: "ashikapaxkkv",
      description: "See my problem-solving progress and articles."
    },
    {
      name: "LeetCode",
      icon: <Code className="h-10 w-10" />,
      link: personalInfo.leetcode,
      username: "ashikapanchal54",
      description: "View my solutions to algorithmic challenges."
    },
    {
      name: "CodeChef",
      icon: <CodeSquare className="h-10 w-10" />,
      link: personalInfo.codechef,
      username: "alert_sand_60",
      description: "Follow my competitive programming journey."
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Connect With Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((social) => (
          <Link 
            key={social.name} 
            href={social.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-6 rounded-lg border hover:border-primary hover:shadow-md transition-all"
          >
            <div className="text-primary mr-4">
              {social.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{social.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">@{social.username}</p>
              <p>{social.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}