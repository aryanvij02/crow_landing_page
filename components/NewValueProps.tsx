"use client";

import { Target, Zap, Shield } from "lucide-react";

const valueProps = [
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Stop wasting time on cold lists. Our AI finds tenants who are actually moving — by identifying comparable properties with expiring leases in your target market.",
    features: [
      "Same asset class matching",
      "Geographic proximity analysis",
      "Use-type and zoning alignment",
      "Custom timing windows (6-12+ months)",
    ],
    alignment: "left" as const,
  },
  {
    icon: Zap,
    title: "Automated Verification",
    description:
      "Go beyond static data. Our outbound agents automatically confirm tenant relocation intent, interest level, and decision timelines through personalized outreach campaigns.",
    features: [
      "Multi-channel outreach (email + phone)",
      "Personalized messaging",
      "Intent verification & qualification",
      "Automated follow-up sequences",
    ],
    alignment: "right" as const,
  },
  {
    icon: Shield,
    title: "CRM-Ready Delivery",
    description:
      "Get clean, validated lead sheets with verified contact information, communication history, and interest scoring. Import directly into your existing workflow.",
    features: [
      "Decision-maker contact details",
      "Lease expiration dates",
      "Interest levels (Hot/Warm/Cold)",
      "HubSpot & Salesforce integration",
    ],
    alignment: "left" as const,
  },
];

export default function NewValueProps() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why CrowAI Works
          </h2>
          <p className="text-lg text-gray-600">
            We combine property intelligence, tenant discovery, and verification
            into one automated workflow.
          </p>
        </div>

        {/* Value props */}
        <div className="space-y-24">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            const isLeft = prop.alignment === "left";

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Content side */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {prop.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {prop.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-shadow">
                    {/* Mockup visualization */}
                    <div className="space-y-4">
                      {/* Header bar */}
                      <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>

                      {/* Content rows */}
                      <div className="space-y-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A]" />
                              <div className="flex-1 space-y-2">
                                <div className="h-3 bg-gray-200 rounded-full w-3/4" />
                                <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Accent decoration */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] rounded-full opacity-10 blur-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

