"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { config } from "../app/config";
import { useState } from "react";

const navigation = [
  { name: "How It Works", href: "#how-it-works" },
];

const solutions = [
  { name: "Deal Scout", href: "/deal-scout" },
];

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 flex justify-center px-4 py-4">
      <header className="rounded-full px-6 py-2 bg-white/90 backdrop-blur-lg border border-gray-200 shadow-sm max-w-5xl mx-auto">
        <div className="flex h-12 items-center justify-between gap-4 md:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src="/cxicon.png"
                alt="CrowAI Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-bold text-lg text-gray-900">Crow</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2">
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 rounded-lg bg-white shadow-lg border border-gray-200 py-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3">
              <Link href={"https://calendly.com/aryanv0213/30min"}>
                <Button className="rounded-full px-6 py-2 text-sm font-medium bg-[#1E3A8A] hover:bg-[#1E40AF] text-white transition-colors">
                  Book a Demo
                </Button>
              </Link>
              <Link href="https://app.usecrow.org">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 text-sm font-medium border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden h-8 w-8 text-gray-900 hover:bg-gray-100"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200">
                <nav className="flex flex-col gap-4 pt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-600">Solutions</span>
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="text-sm font-medium text-gray-500 hover:text-gray-900 pl-4"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <Link href={"https://calendly.com/aryanv0213/30min"}>
                      <Button className="w-full rounded-full px-6 py-2 text-sm font-medium bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
                        Book a Demo
                      </Button>
                    </Link>
                    <Link href="https://app.usecrow.org">
                      <Button
                        variant="outline"
                        className="w-full rounded-full px-6 py-2 text-sm font-medium border-gray-300 text-gray-900 hover:bg-gray-50"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
