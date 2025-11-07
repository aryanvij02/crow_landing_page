"use client";

import { Building2, Search, CheckCircle2, Download } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Building2,
    title: "Upload Your Listing",
    description:
      "Describe your available property or upload listing details - asset type, size, location, and availability timeline.",
  },
  {
    number: "2",
    icon: Search,
    title: "AI Finds Similar Properties",
    description:
      "Our system identifies comparable properties in the same asset class and submarket with upcoming lease expirations.",
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Verify Tenant Intent",
    description:
      "AI agents automatically reach out to tenants, confirm their relocation plans, and assess interest levels.",
  },
  {
    number: "4",
    icon: Download,
    title: "Get Validated Leads",
    description:
      "Receive a clean lead sheet with verified contacts, lease dates, and interest levels ready for your CRM.",
  },
];

export default function NewHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            From listing to verified leads in four automated steps. No manual
            research, no cold calling lists.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#1E3A8A] transition-all duration-300 h-full flex flex-col">
                  {/* Number badge */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <Icon className="w-8 h-8 text-[#1E3A8A]" />
                  </div>

                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Average process time: 24-48 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

