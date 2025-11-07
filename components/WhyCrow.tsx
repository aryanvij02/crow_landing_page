"use client";

import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Underwrite 10× faster without sacrificing accuracy.",
  "Never miss an updated deal — Crow keeps watch.",
  "Stay market-aligned with real-time comps and validated assumptions.",
  "Replace repetition with insight — focus on decisions, not data entry.",
  "Trust the output — every value is sourced, verified, and auditable.",
];

export default function WhyCrow() {
  return (
    <section id="why-crow" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Investors Choose Crow
          </h2>
          <p className="text-lg text-gray-600">
            Speed, accuracy, and continuous opportunity tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-gray-800 leading-relaxed">{r}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
