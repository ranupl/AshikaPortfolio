import SocialLinks from "@/components/profile/social-links";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-6">
            <Image 
              src="/images/profile.jpg" 
              alt="Ashika Panchal" 
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">BCA Student • Data Science Enthusiast</p>
          <p className="text-lg max-w-2xl mb-8">
            {personalInfo.bio}
          </p>
          
          <Button asChild>
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
        
        <SocialLinks />
      </div>
    </div>
  );
}