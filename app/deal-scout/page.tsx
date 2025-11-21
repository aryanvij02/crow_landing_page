"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Sparkles, FileText, Shield, Clock } from "lucide-react";
import Header from "../../components/Header";
import NewFooter from "../../components/NewFooter";
import { ShimmerButton } from "../../components/magicui/shimmer-button";
import { DotPattern } from "../../components/magicui/dot-pattern";
import { cn } from "../../components/lib/utils";

export default function DealScout() {
  const [criteria, setCriteria] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!criteria.trim()) {
      setError("Please describe what deals you want");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/scout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          criteria: criteria.trim(),
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setCriteria("");
      setEmail("");
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: Shield,
      text: "No NDAs or CAs to sign—we handle that for you",
    },
    {
      icon: Clock,
      text: "Save hours of filtering through broker emails",
    },
    {
      icon: FileText,
      text: "All necessary documents delivered in one package",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Header />
      <main className="flex-1 w-full pt-24">
        <section className="relative w-full py-20 px-4 overflow-hidden">
          {/* Background Pattern */}
          <DotPattern
            className={cn(
              "absolute inset-0 opacity-30",
              "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
            )}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6">
                <Sparkles className="h-4 w-4 text-[#1E3A8A]" />
                <span className="text-sm font-medium text-[#1E3A8A]">
                  AI-Powered Deal Discovery
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Deal Scout
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We've already gone through all the deals. Just tell us your
                criteria, and we'll send you only the matches—fully vetted,
                documents ready.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#1E3A8A] transition-all hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#1E3A8A]" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mt-1">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Form or Success State */}
            {success ? (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Scout Request Submitted!
                </h3>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <p className="text-gray-700 leading-relaxed">
                    ✓ We've received your criteria and are now searching
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    ✓ Our AI agents are reviewing public marketplaces and
                    private broker lists
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    ✓ You'll receive matching deals with all documents within 24
                    hours
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-green-200">
                  <p className="text-sm text-gray-600">
                    Check your email for updates
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="criteria"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      What deals are you looking for?
                    </label>
                    <textarea
                      id="criteria"
                      value={criteria}
                      onChange={(e) => setCriteria(e.target.value)}
                      placeholder={`Tell us your investment criteria:\n\n• Budget (e.g., $2M–10M)\n• Markets/locations you're targeting\n• Asset types (multifamily, retail, office, etc.)\n• Strategy (value-add, core-plus, opportunistic)\n• Return targets (IRR, equity multiple)\n• Any other requirements`}
                      rows={10}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400 leading-relaxed"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                      disabled={loading}
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                        <span className="text-red-600 text-sm font-bold">
                          !
                        </span>
                      </div>
                      <p className="text-red-900 text-sm">{error}</p>
                    </div>
                  )}

                  <ShimmerButton
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    shimmerColor="#60A5FA"
                    background="linear-gradient(to right, #1E3A8A, #1E40AF)"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Searching deals...
                      </span>
                    ) : (
                      "Start Scouting"
                    )}
                  </ShimmerButton>

                  <p className="text-xs text-center text-gray-500">
                    We'll analyze your criteria and send matching deals within
                    24 hours
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <NewFooter />
    </div>
  );
}
