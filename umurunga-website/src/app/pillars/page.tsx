// Pillars Page — Professional Version

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faHandshake, faHeart, faBan, faCheck, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = { title: "Our Pillars" };

const pillars = [
  {
    icon: faDove,
    title: "Sustainable Peace",
    description: "We work to build lasting peace in communities across Rwanda through dialogue, understanding, and conflict resolution.",
    programs: [
      "Community dialogue sessions",
      "Peace education programs",
      "Intercommunity collaboration projects",
    ],
  },
  {
    icon: faHandshake,
    title: "Youth Trauma Support",
    description: "Helping youth overcome trauma and find resilience through counseling, peer support, and community care.",
    programs: [
      "Trauma counseling services",
      "Mental health workshops",
      "Peer support networks",
    ],
  },
  {
    icon: faHeart,
    title: "Unconditional Love",
    description: "Promoting acceptance, compassion, and love without bias or prejudice through education and community building.",
    programs: [
      "Inclusion workshops",
      "Community service projects",
      "Cultural exchange programs",
    ],
  },
  {
    icon: faBan,
    title: "Fighting Discrimination",
    description: "Actively working to eliminate all forms of discrimination through education, advocacy, and policy influence.",
    programs: [
      "Anti-discrimination campaigns",
      "Educational programs in schools",
      "Advocacy and awareness events",
    ],
  },
];

const PillarsPage = () => {
  return (
    <UmurungaLayout>

      {/* ── Hero: dark slate with green accent line ── */}
      <div className="relative bg-[#1a2332] text-white py-20 overflow-hidden">
        {/* decorative green glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0DB14B]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#0064A2]/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10">
          <a href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" /> Back to Home
          </a>
          <div className="text-center">
            {/* 4 small icon dots representing the 4 pillars */}
            <div className="flex justify-center gap-3 mb-6">
              {[faDove, faHandshake, faHeart, faBan].map((icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-[#0DB14B]/20 border border-[#0DB14B]/30 flex items-center justify-center">
                  <FontAwesomeIcon icon={icon} className="w-4 h-4 text-[#0DB14B]" />
                </div>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pillars</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              These four pillars form the foundation of all our work at Umurunga
              Family, guiding our programs and initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* ── Green separator ── */}
      <div className="h-1 bg-gradient-to-r from-[#0DB14B] via-[#0064A2] to-[#0DB14B]" />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">

          {/* ── Pillars Grid ── */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="h-1.5 bg-[#0064A2]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-14 h-14 mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={pillar.icon} className="w-6 h-6" style={{ color: "#0064A2" }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0064A2] mb-3">{pillar.title}</h3>
                  <p className="text-gray-500 text-md leading-relaxed mb-5">{pillar.description}</p>
                  <div className="border-t border-gray-100 mb-4" />
                  <ul className="space-y-2 mt-auto">
                    {pillar.programs.map((program, j) => (
                      <li key={j} className="flex items-start gap-2 text-md text-gray-700">
                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#0DB14B" }} />
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="max-w-2xl mx-auto bg-[#1a2332] rounded-2xl p-10 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">See These Pillars in Action</h3>
            <p className="text-white/60 mb-6 text-md">
              Discover how we bring each pillar to life through our real programs and activities.
            </p>
            <a
              href="/activities"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0DB14B] text-white rounded-full font-bold hover:bg-[#0DB14B]/90 transition-colors"
            >
              See How We Implement These Pillars
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </UmurungaLayout>
  );
};

export default PillarsPage;
