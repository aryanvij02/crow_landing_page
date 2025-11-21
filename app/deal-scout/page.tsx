"use client";

import { useState, FormEvent } from "react";
import Header from "../../components/Header";
import NewFooter from "../../components/NewFooter";

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

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Header />
      <main className="flex-1 w-full pt-24">
        <section className="w-full py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              AI CRE Deal Scout
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Tell us what you want.
              <br />
              Our AI Research Agents search public marketplaces and private
              broker lists and send back deals that match your criteria within
              24 hours.
            </p>

            {success ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-900 text-lg font-medium">
                  We'll send you matches soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="criteria"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Describe what deals you want
                  </label>
                  <textarea
                    id="criteria"
                    value={criteria}
                    onChange={(e) => setCriteria(e.target.value)}
                    placeholder={`• budget ($2–10M)\n• markets\n• asset types\n• strategy (value-add, core-plus)\n• return targets\n• anything else you care about`}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none resize-none text-gray-900"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none text-gray-900"
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-900 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Scouting your deals…" : "Start Scouting"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <NewFooter />
    </div>
  );
}
