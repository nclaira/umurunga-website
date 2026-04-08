// Values Page — Professional Version

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUsers, faDove, faShieldAlt, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = { title: "Our Values" };

const values = [
  {
    icon: faHeart,
    title: "Unconditional Love",
    description: "We approach every individual and situation with empathy, care, and an unwavering commitment to love without conditions.",
    accent: "#0064A2",
    bg: "bg-blue-50",
  },
  {
    icon: faUsers,
    title: "Unity and Respect",
    description: "We foster togetherness and mutual respect, valuing each person's contribution and embracing diversity in all forms.",
    accent: "#0DB14B",
    bg: "bg-green-50",
  },
  {
    icon: faDove,
    title: "Peace-driven Development",
    description: "We prioritize development initiatives that are rooted in peace, ensuring sustainable growth for individuals and communities.",
    accent: "#0064A2",
    bg: "bg-blue-50",
  },
  {
    icon: faShieldAlt,
    title: "Resilience and Faith",
    description: "We encourage resilience in the face of challenges and maintain faith in our mission and in the potential of our youth.",
    accent: "#0DB14B",
    bg: "bg-green-50",
  },
];

const ValuesPage = () => {
  return (
    <UmurungaLayout>

      {/* ── Hero: green → blue gradient, left-aligned with quote mark ── */}
      <div className="relative bg-gradient-to-r from-[#0DB14B] to-[#0064A2] text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 text-[200px] font-serif leading-none text-white/5 select-none pr-8">❝</div>

        <div className="container mx-auto px-4 relative z-10">
          <a href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" /> Back to Home
          </a>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              What We Stand For
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Our Values</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              These core values guide everything we do at Umurunga Family, from our
              internal operations to our community programs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">

          {/* ── Values Grid ── */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, i) => (
              <div
                key={i}
                className={`${value.bg} rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
              >
                <div
                  className="w-16 h-16 mb-5 rounded-full flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: `${value.accent}20` }}
                >
                  <FontAwesomeIcon icon={value.icon} className="w-7 h-7" style={{ color: value.accent }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: value.accent }}>
                  {value.title}
                </h3>
                <div className="w-8 h-0.5 rounded-full mb-4" style={{ backgroundColor: value.accent }} />
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* ── Living Our Values callout ── */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#0DB14B] to-[#0064A2]" />
              <div className="p-8 md:p-10 text-center">
                <h3 className="text-2xl font-bold text-[#0064A2] mb-4">Living Our Values</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
                  These values aren't just words on a page—they guide our daily work,
                  decisions, and interactions with the communities we serve. Every member
                  of Umurunga Family is committed to embodying these principles in all
                  that we do.
                </p>
                <a
                  href="/team"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#0064A2] text-white rounded-full font-bold hover:bg-[#0064A2]/90 transition-colors"
                >
                  Meet Our Team
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </UmurungaLayout>
  );
};

export default ValuesPage;
