"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { config } from "../app/config";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "./lib/utils";

export default function NewHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Subtle dot pattern background */}
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-20",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#1E3A8A] animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                AI Underwriting Copilot for Investors
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                {config.company.tagline}
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {config.company.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"https://calendly.com/aryanv0213/30min"}>
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold bg-[#1E3A8A] hover:bg-[#1E40AF] text-white transition-all shadow-lg hover:shadow-xl group"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="https://app.usecrow.org">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base font-semibold border-gray-300 text-gray-900 hover:bg-gray-50 transition-all"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Visual representation */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Animated flow diagram */}
              <div className="absolute inset-0 flex flex-col justify-center space-y-8">
                {/* Step 1: Your Deals */}
                <div className="flex items-center justify-start animate-fade-in">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A] flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Your Deals
                        </div>
                        <div className="text-sm text-gray-600">
                          Inbox, Manual Upload, our deal pool
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection line */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#1E3A8A] to-transparent" />
                </div>

                {/* Step 2: AI Underwriting Copilot */}
                <div className="flex items-center justify-center animate-fade-in animation-delay-200">
                  <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] border border-[#1E3A8A] rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1E3A8A] font-bold">
                        2
                      </div>
                      <div className="text-white">
                        <div className="font-semibold">
                          AI Underwriting Copilot
                        </div>
                        <div className="text-sm opacity-90">
                          Analyzes & underwrites automatically
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection line */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#1E3A8A] to-transparent" />
                </div>

                {/* Step 3: Analyzed Deals */}
                <div className="flex items-center justify-end animate-fade-in animation-delay-400">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A] flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Analyzed Deals
                        </div>
                        <div className="text-sm text-gray-600">
                          Complete models & insights
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
