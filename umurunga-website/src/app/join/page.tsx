"use client";

// Join Us Page
// Step 1: User reads about Umurunga Family
// Step 2: Checks the "I've completed reading" checkbox
// Step 3: Clicks "Fill out form" to go to /join/apply

import { useState } from "react";
import { useRouter } from "next/navigation";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const JoinPage = () => {
  const router = useRouter();
  const [showInfo, setShowInfo] = useState(false);
  const [hasRead, setHasRead] = useState(false);

  return (
    <UmurungaLayout>
      <section className="py-16 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-3xl">

          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Join Us
          </h1>

          <p className="text-gray-600 text-center mb-8">
            Please before you start, you have to read more about us. This will help you in your application.
            Remember, you will need to accept your reading completion.
          </p>

          {/* Read More Button */}
          {!showInfo && (
            <div className="text-center">
              <button
                onClick={() => setShowInfo(true)}
                className="px-8 py-3 bg-[#0064A2] text-white rounded-lg font-medium hover:bg-[#0064A2]/90 transition-colors"
              >
                Read More
              </button>
            </div>
          )}

          {/* Full Info Section */}
          {showInfo && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">

              <p className="text-gray-700 mb-4">
                <strong>Umurunga Family</strong> is an inclusive and expansive organization based in Rwanda, dedicated to fostering
                sustainable peace, combating trauma among youth, promoting unconditional love, and fighting all
                forms of discrimination through nationwide collaborations and initiatives aimed at engaging young
                people in building a resilient and harmonious society.
              </p>
              <p className="text-gray-700 mb-4">
                Umurunga Family was founded on May 24, 2024, by a group of young people from different parts of
                the country who came together with a shared purpose.
              </p>

              <h3 className="font-bold text-black mt-6 mb-2">The Umurunga Family is built on the following pillars:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Building sustainable peace</li>
                <li>Combating youth trauma</li>
                <li>Fighting discrimination in society</li>
                <li>Bringing together youth to support them in all activities that promote their development</li>
                <li>Building a society founded on unconditional love</li>
              </ul>

              <h3 className="font-bold text-black mt-6 mb-2">Criteria for admitting a new member:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Must be Rwandan</li>
                <li>Must no longer be in Advanced Level of secondary school (A Level)</li>
                <li>Must fall within the youth age category</li>
                <li>Must have a national ID card</li>
                <li>Must be committed to supporting the organization's core pillars</li>
                <li>Must have no history of involvement in any form of discrimination or crimes related to genocide ideology</li>
                <li>A letter addressed to the Umurunga Family leader requesting membership</li>
              </ul>

              <h3 className="font-bold text-black mt-6 mb-1">Mission:</h3>
              <p className="text-gray-700 mb-4">
                To promote sustainable peace, support youth in overcoming trauma, and build a discrimination-free
                society based on unconditional love.
              </p>

              <h3 className="font-bold text-black mt-4 mb-1">Vision:</h3>
              <p className="text-gray-700 mb-4">
                To be a leading organization in building development based on peace, unity, and prioritizing the value
                of a good quality of life in the wider community.
              </p>

              <h3 className="font-bold text-black mt-6 mb-2">Values:</h3>
              <ul className="list-disc list-inside text-[#0064A2] space-y-1 mb-6">
                <li>Unconditional love</li>
                <li>Unity and mutual respect</li>
                <li>Peace-based development</li>
                <li>Patience and resilience</li>
              </ul>

              {/* Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer mb-6">
                <input
                  type="checkbox"
                  checked={hasRead}
                  onChange={(e) => setHasRead(e.target.checked)}
                  className="w-4 h-4 accent-[#0064A2]"
                />
                <span className="text-gray-700 text-sm">I agree I've completed to read all.</span>
              </label>

              {/* Fill Out Form Button */}
              <button
                disabled={!hasRead}
                onClick={() => router.push("/join/apply")}
                className={`px-8 py-3 rounded-lg font-medium text-white transition-colors ${
                  hasRead
                    ? "bg-[#0064A2] hover:bg-[#0064A2]/90 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Fill out form
              </button>
            </div>
          )}

        </div>
      </section>
    </UmurungaLayout>
  );
};

export default JoinPage;
