"use client";

import {
  FileText,
  Table,
  ShieldCheck,
  LineChart,
  Repeat,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Omni-Ingestion",
    description: "PDFs, Excel, emails, screenshots, and data-room exports.",
  },
  {
    icon: Table,
    title: "Template Recognition",
    description:
      "Learns your underwriting spreadsheets and applies their logic automatically.",
  },
  {
    icon: ShieldCheck,
    title: "AI-Verified Financials",
    description:
      "Cross-checks internal ratios and dependencies for consistency.",
  },
  {
    icon: LineChart,
    title: "Live Market Data",
    description:
      "Rent comps, expense ratios, and cap-rate updates by submarket.",
  },
  {
    icon: Repeat,
    title: "Deal Resurfacing Engine",
    description:
      "Detects when previously unviable deals become viable based on new inputs or strategy shifts.",
  },
  {
    icon: Brain,
    title: "Zero-Knowledge Processing",
    description:
      "Secure, ephemeral processing — no persistent storage or external access.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Features
          </h2>
          <p className="text-lg text-gray-600">
            Built for rigorous, auditable underwriting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A] text-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
