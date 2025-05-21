"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MobileNav({ routes }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-lg font-medium transition-colors hover:text-primary p-2"
              onClick={() => setOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <Link href="/resume" onClick={() => setOpen(false)} target="_blank" 
                rel="noopener noreferrer">
              Download CV
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}