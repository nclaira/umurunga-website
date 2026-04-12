// Donate Page
// Shows donation methods: MTN, Airtel, and Equity Bank.

import { Heart } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const DonatePage = () => {
  // Donation methods (easy to add more) 
  const donationMethods = [
    { provider: "MTN", code: "*182*8*1*1655631#", color: "#FFCC00", textColor: "#000" },
    { provider: "Airtel", code: "0722 727 522", color: "#ED1C24", textColor: "#fff" },
    { provider: "EQUITY", code: "4005100987307", color: "#A6093D", textColor: "#fff" },
  ];

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            <Heart className="inline h-8 w-8 text-[#0DB14B] mr-2" fill="currentColor" />
            You can now donate Umurunga Family activities
          </h1>

          {/* Note */}
          <div className="max-w-xl mx-auto text-center mb-10">
            <p className="font-bold text-black mb-1">Please note!</p>
            <p className="text-gray-600 text-sm">
              Donation will be received by Our accountant. We are working hard to
              register our Organisation in different agencies.
            </p>
          </div>

          {/* Donation Methods  */}
          <div className="max-w-md mx-auto space-y-4 mb-10">
            {donationMethods.map((method, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white border rounded-xl p-4"
              >
                {/* Provider name */}
                <span
                  className="font-bold text-lg px-3 py-1 rounded"
                  style={{ backgroundColor: method.color, color: method.textColor }}
                >
                  {method.provider}
                </span>

                {/* Code/Number */}
                <span className="font-bold text-lg text-[#0DB14B] bg-[#0DB14B]/10 px-4 py-2 rounded-lg">
                  {method.code}
                </span>
              </div>
            ))}
          </div>

          {/* Accountant Name */}
          <p className="text-center font-bold text-black">
            Names: <span className="text-[#0064A2]">Liliane Umutesiwase</span>{" "}
            <span className="text-gray-500 font-normal">(Accountant)</span>
          </p>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default DonatePage;
