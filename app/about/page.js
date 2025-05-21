import Bio from "@/components/about/bio";
import Education from "@/components/about/education";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
          <div>
            <Education />
          </div>
        <div className="grid grid-cols-1 gap-12 mt-8">

          <div className="lg:col-span-2">
            <Bio />
          </div>
        </div>
      </div>
    </div>
  );
}