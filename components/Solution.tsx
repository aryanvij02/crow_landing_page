"use client";

import { Check } from "lucide-react";

const capabilities = [
  "Automated Underwriting: Converts unstructured data into full financial models with NOI, IRR, DSCR, LTC, and DCF outputs.",
  "Investor Intelligence: Learns your past deals, preferences, and return targets to build a digital clone of how you underwrite.",
  "Continuous Deal Tracking: Monitors every opportunity you’ve ever reviewed and resurfaces when terms or data change.",
  "Market Context: Real-time rent comps, cap-rate trends, and sales benchmarks.",
  "AI Copilot: Collaborate with an analyst that validates against hard data.",
  "Zero-Knowledge Processing: Secure, ephemeral runs with full audit trails and no persistent storage.",
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Solution
          </h2>
          <p className="text-lg text-gray-600">
            Crow unifies every input that shapes an investment decision. It
            pulls data from your inbox, documents, and the web, then underwrites
            the deal automatically — faster and more accurately than manual
            processes. It understands your investment logic and refines it over
            time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-blue-200 bg-blue-50 p-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-white text-blue-600 p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-blue-900 leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
