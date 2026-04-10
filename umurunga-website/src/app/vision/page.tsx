// Vision Page — Professional Version

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheckCircle, faHandshake, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = { title: "Our Vision" };

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

const VisionPage = () => {
  return (
    <UmurungaLayout>

      {/* ── Hero: blue → teal gradient, centered with large eye icon ── */}
      <div className="relative bg-gradient-to-br from-[#0064A2] via-[#0080c8] to-[#00a896] text-white py-24 overflow-hidden">
        {/* decorative circles */}
        <div className="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 rounded-full bg-white/5" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <a href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" /> Back to Home
          </a>
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <FontAwesomeIcon icon={faEye} className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vision</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Where we are headed and what we are building together.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">

          {/* ── Vision Statement ── */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0064A2] to-[#00a896] rounded-t-2xl" />
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
                <FontAwesomeIcon icon={faEye} className="w-8 h-8" style={{ color: "#0064A2" }} />
              </div>
              <p className="text-gray-700 text-xl md:text-2xl italic font-light leading-relaxed">
                "To be a leading organization in fostering development rooted in
                peace, unity, and prioritizing the value of a good life within the
                broader community."
              </p>
            </div>
          </div>

          {/* ── Future Goals ── */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0064A2] mb-2"> Our Future Goals</h2>
              <div className="w-16 h-1 bg-[#0064A2] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-[#0064A2] px-6 py-4">
                  <h3 className="text-xl font-bold text-white">By 2025</h3>
                </div>
                <ul className="p-6 space-y-4">
                  {goals2025.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-md">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#0064A2" }} />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-[#0DB14B] px-6 py-4">
                  <h3 className="text-xl font-bold text-white"> By 2030</h3>
                </div>
                <ul className="p-6 space-y-4">
                  {goals2030.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-md">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#0DB14B" }} />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── CTA Banner ── */}
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#0064A2] to-[#00a896] rounded-2xl p-10 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Join Us in Realizing This Vision</h3>
            <p className="text-white/80 mb-6 text-md">
              Your support can help us build a brighter future for Rwanda's youth.
            </p>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0064A2] rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Support Our Vision
              <FontAwesomeIcon icon={faHandshake} className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </UmurungaLayout>
  );
};

export default VisionPage;
