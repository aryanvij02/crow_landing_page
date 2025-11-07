"use client";

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <p className="text-lg text-gray-600">
            Investors spend hours copying numbers from documents, scanning
            emails for updates, and juggling spreadsheets to understand market
            shifts. Good deals go unseen because they’re buried in inboxes or
            dismissed too early. When terms change, few investors ever circle
            back — and the upside is lost.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-900">
            <p className="text-base leading-relaxed">
              You’re not missing deals because you lack judgment. You’re missing
              them because your data is fragmented.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
