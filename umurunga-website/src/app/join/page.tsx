"use client";

// Join Us Page
// A simple form for people who want to join Umurunga Family.

import { useState } from "react";
import { Users } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const JoinPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
              <Users className="h-8 w-8 text-[#0064A2]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] mb-3">
              Join Umurunga Family
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Become part of our community and help us build peace, support youth,
              and create a better Rwanda.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm border p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0DB14B]/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#0DB14B]" />
                </div>
                <h2 className="text-xl font-bold text-[#0064A2] mb-2">Thank You!</h2>
                <p className="text-gray-600 text-sm">
                  We've received your request. We'll be in touch with you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0064A2]/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0788 000 000"
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0064A2]/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0064A2]/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to join?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a little about yourself..."
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0064A2]/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default JoinPage;
