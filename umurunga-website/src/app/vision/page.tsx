// Vision Page
// Shows the organization's vision and future goals.


import { Eye, Star, Rocket } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = {
  title: "Our Vision"
};


const VisionPage = () => {
  // Goals by year (easy to update) 
  const goals2025 = [
    "Establish community centers in 5 districts",
    "Reach 10,000 youth with our programs",
    "Train 500 youth peace ambassadors",
  ];

  const goals2030 = [
    "Expand to all provinces of Rwanda",
    "Establish a national youth trauma healing center",
    "Develop partnerships with international organizations",
  ];

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-10">
            Our Vision
          </h1>

          {/* Vision Statement */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 mb-10">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
              <Eye className="h-8 w-8 text-[#0064A2]" />
            </div>
            <p className="text-gray-600 text-center italic leading-relaxed">
              "To be a leading organization in fostering development rooted in
              peace, unity, and prioritizing the value of a good life within the
              broader community."
            </p>
          </div>

          {/* Future Goals  */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#0064A2] mb-6">Our Future Goals</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* By 2025 */}
              <div className="bg-[#0064A2]/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0064A2] mb-3">By 2025</h3>
                <ul className="space-y-2">
                  {goals2025.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Star className="h-4 w-4 text-[#0064A2] shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* By 2030 */}
              <div className="bg-[#0064A2]/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0064A2] mb-3">By 2030</h3>
                <ul className="space-y-2">
                  {goals2030.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Star className="h-4 w-4 text-[#0064A2] shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Banner  */}
          <div className="max-w-3xl mx-auto bg-[#0064A2] rounded-xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Join Us in Realizing This Vision</h3>
            <p className="text-white/80 mb-4">
              Your support can help us build a brighter future for Rwanda's youth
            </p>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#0064A2] rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Support Our Vision <Rocket className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default VisionPage;
