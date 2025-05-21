// app/page.js - Home Page
import Hero from "@/components/home/hero";
import FeaturedProjects from "@/components/home/featured-projects";

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}