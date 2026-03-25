// Pillars Component
// Shows the 3 main pillars of the organization.

import { Bird, HandHeart, Heart } from "lucide-react";

// Organization pillars - each has an icon, title, and description
const pillars = [
  {
    icon: Bird,
    title: "Sustainable Peace",
    description:
      "We work to build peace in communities across Rwanda through dialogue and understanding.",
    color: "#0064A2", // blue
  },
  {
    icon: HandHeart,
    title: "Youth Trauma Support",
    description:
      "Helping youth overcome trauma and find resilience through counseling and community support.",
    color: "#0DB14B", // green
  },
  {
    icon: Heart,
    title: "Fighting Discrimination",
    description:
      "Promoting equality and love without bias or prejudice through education and advocacy.",
    color: "#0064A2", // blue
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="py-16">
      <div className="container mx-auto px-4">

        {/* ---- Section Header ---- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0064A2]">
            Our Pillars
          </h2>
        </div>

        {/* ---- Pillars Grid ---- */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-t-4 border-[#0064A2] shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              {/* Pillar Icon */}
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <pillar.icon className="h-7 w-7" style={{ color: pillar.color }} />
              </div>

              {/* Pillar Title & Description */}
              <h3 className="font-bold text-black text-lg mb-2">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pillars;
