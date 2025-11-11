"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { config } from "../app/config";

export default function NewCTA() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] px-8 py-20 md:px-16 md:py-24 shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your AI Underwriting Copilot
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Stop chasing scattered information and start underwriting with
              complete context. Crow brings every deal, document, and update
              into one intelligent system — so you never miss another
              opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"https://calendly.com/aryanv0213/30min"}>
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold bg-white text-[#1E3A8A] hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl group"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="https://app.usecrow.org">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base font-semibold border-2 border-white hover:bg-white hover:text-[#1E3A8A] transition-all"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="mt-10 flex items-center justify-center gap-2 text-blue-100">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">
                Auditable output • Secure & ephemeral processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
