"use client";

import {
  FileCheck,
  Users,
  Calendar,
  TrendingUp,
  Database,
  MessageSquare,
} from "lucide-react";

const outcomes = [
  {
    icon: Users,
    title: "Verified Decision-Makers",
    description:
      "Names, titles, emails, and phone numbers of real estate and facilities leads at target companies.",
  },
  {
    icon: Calendar,
    title: "Lease Expiration Dates",
    description:
      "Precise timing for when tenants need to make renewal or relocation decisions.",
  },
  {
    icon: TrendingUp,
    title: "Interest Scoring",
    description:
      "Hot, Warm, or Cold classification based on verified outreach and intent signals.",
  },
  {
    icon: MessageSquare,
    title: "Communication History",
    description:
      "Full record of outreach attempts, responses, and follow-up sequences.",
  },
  {
    icon: Database,
    title: "Property Match Analysis",
    description:
      "Detailed breakdown of why each tenant is a fit for your specific listing.",
  },
  {
    icon: FileCheck,
    title: "CRM Integration",
    description:
      "Clean CSV export or direct integration with HubSpot, Salesforce, and major CRMs.",
  },
];

export default function NewWhatYouGet() {
  return (
    <section id="what-you-get" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You Get
          </h2>
          <p className="text-lg text-gray-600">
            Every lead comes with complete intelligence and verification — not
            just contact info.
          </p>
        </div>

        {/* Outcomes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#1E3A8A] transition-all duration-300 group"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DBEAFE] to-[#1E3A8A] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sample output preview */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] px-8 py-6">
              <h3 className="text-xl font-semibold text-white">
                Sample Lead Output
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                Validated prospect ready for outreach
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Contact
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-gray-900">
                        Sarah Chen
                      </div>
                      <div className="text-sm text-gray-600">
                        VP Real Estate & Facilities
                      </div>
                      <div className="text-sm text-gray-600">
                        TechCorp Industries
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Current Location
                    </div>
                    <div className="text-sm text-gray-900">
                      45,000 SF Industrial
                      <br />
                      3200 Commerce Dr, Dallas, TX
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Lease Status
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-gray-900">
                          Expires: March 2026
                        </div>
                        <div className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                          5 months
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Interest Level
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Hot - Actively exploring options
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Last Contact
                    </div>
                    <div className="text-sm text-gray-600">
                      Email opened 2x, responded to inquiry
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

