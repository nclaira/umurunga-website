// Pillars Component
// Uses Font Awesome icons: dove, handshake, heart

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faHandshake, faHeart } from "@fortawesome/free-solid-svg-icons";

const pillars = [
  {
    icon: faDove,
    title: "Sustainable Peace",
    description:
      "We work to build peace in communities across Rwanda through dialogue and understanding.",
  },
  {
    icon: faHandshake,
    title: "Youth Trauma Support",
    description:
      "Helping youth overcome trauma and find resilience through counseling and community support.",
  },
  {
    icon: faHeart,
    title: "Fighting Discrimination",
    description:
      "Promoting equality and love without bias or prejudice through education and advocacy.",
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="py-16">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0064A2]">
            Our Pillars
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-t-4 border-[#0064A2] shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#0064A2]/15">
                <FontAwesomeIcon
                  icon={pillar.icon}
                  className="w-7 h-7"
                  style={{ color: "#0064A2" }}
                />
              </div>
              <h3 className="font-bold text-black text-xl mb-2">{pillar.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pillars;
