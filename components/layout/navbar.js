"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/profile", label: "Profile" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Ashika Panchal
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {route.label}
              </Link>
            ))}
            <Button asChild>
              <Link 
                href="https://drive.google.com/file/d/1PF0huVAxSmLVgLvpZ5qdxT1-7CNVXlRg/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </Button>
          </nav>
          
          {/* Mobile navigation */}
          <div className="md:hidden">
            <MobileNav routes={routes} />
          </div>
        </div>
      </div>
    </header>
  );
}