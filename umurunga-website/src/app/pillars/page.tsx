// Pillars Page
// Shows the 4 pillars of Umurunga Family with descriptions and programs.

import { HandHeart, Brain, Heart, Ban, Check, ArrowRight } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = {
  title: "Pillars"
};


const PillarsPage = () => {
  // Pillars data (easy to add/edit pillars here) 
  const pillars = [
    {
      icon: HandHeart,
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
      icon: Brain,
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
      icon: Heart,
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
      icon: Ban,
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

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/*  Page Title  */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Our Pillars
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            These four pillars form the foundation of all our work at Umurunga
            Family, guiding our programs and initiatives.
          </p>

          {/*  Pillars Grid  */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border-t-4 border-[#0064A2] shadow-sm p-6"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
                    <pillar.icon className="h-5 w-5 text-[#0064A2]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0064A2]">{pillar.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{pillar.description}</p>

                {/* Programs list */}
                <ul className="space-y-1">
                  {pillar.programs.map((program, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#0DB14B]" />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/*  CTA Button  */}
          <div className="text-center">
            <a
              href="/activities"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
            >
              See How We Implement These Pillars <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default PillarsPage;
