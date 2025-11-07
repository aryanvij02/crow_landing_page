"use client";

import {
  Link as LinkIcon,
  Upload,
  Brain,
  ClipboardCheck,
  RefreshCw,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: LinkIcon,
    title: "Connect Your World",
    description:
      "Link email, cloud drives, and deal folders. Crow identifies active and historical deal files automatically.",
  },
  {
    icon: Upload,
    title: "Ingest or Upload",
    description:
      "Drop in an OM, rent roll, financials — or let Crow pull them from your inbox.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Crow parses every figure, validates assumptions, and builds a complete DCF and sensitivity model.",
  },
  {
    icon: ClipboardCheck,
    title: "Copilot Review",
    description:
      "Adjust assumptions with Crow, run alternate cases, and finalize underwriting in minutes.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Monitoring",
    description:
      "Crow tracks every opportunity and flags when terms or comps shift to make it attractive again.",
  },
  {
    icon: Download,
    title: "Deliverables",
    description:
      "Download a clean underwriting model and summary report — ready to present.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            From inbox to investment model in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A] text-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
