// Pillars Page — uses exact Font Awesome icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faHandshake, faHeart, faBan, faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = { title: "Pillars" };

const pillars = [
  {
    icon: faDove,
    title: "Sustainable Peace",
    description:
      "We work to build lasting peace in communities across Rwanda through dialogue, understanding, and conflict resolution.",
    programs: [
      "Community dialogue sessions",
      "Peace education programs",
      "Intercommunity collaboration projects",
    ],
  },
  {
    icon: faHandshake,
    title: "Youth Trauma Support",
    description:
      "Helping youth overcome trauma and find resilience through counseling, peer support, and community care.",
    programs: [
      "Trauma counseling services",
      "Mental health workshops",
      "Peer support networks",
    ],
  },
  {
    icon: faHeart,
    title: "Unconditional Love",
    description:
      "Promoting acceptance, compassion, and love without bias or prejudice through education and community building.",
    programs: [
      "Inclusion workshops",
      "Community service projects",
      "Cultural exchange programs",
    ],
  },
  {
    icon: faBan,
    title: "Fighting Discrimination",
    description:
      "Actively working to eliminate all forms of discrimination through education, advocacy, and policy influence.",
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Our Pillars
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            These four pillars form the foundation of all our work at Umurunga
            Family, guiding our programs and initiatives.
          </p>

          {/* Pillars Grid */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border-t-4 border-[#0064A2] shadow-md p-6"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#0064A2]/15 flex items-center justify-center">
                    <FontAwesomeIcon icon={pillar.icon} className="w-7 h-7" style={{ color: "#0064A2" }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0064A2]">{pillar.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-md mb-4">{pillar.description}</p>

                {/* Programs list */}
                <ul className="space-y-1">
                  {pillar.programs.map((program, j) => (
                    <li key={j} className="flex items-center gap-2 text-md text-gray-700">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4" style={{ color: "#0DB14B" }} />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="/activities"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
            >
              See How We Implement These Pillars
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default PillarsPage;
