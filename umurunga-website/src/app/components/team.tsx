// Team Component

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteMedia } from "@/lib/siteMedia";

const teamMembers = [
  { name: "NIYIBIZI Irene",    role: "Executive Director",                          image: siteMedia.teamPhotos[0] },
  { name: "CYIZA S Guillaume", role: "Deputy Executive Director",                   image: siteMedia.teamPhotos[1] },
  { name: "MUGISHA Godfrey",   role: "Head of social welfare & Development",        image: siteMedia.teamPhotos[2] },
  { name: "Amani Esther",      role: "Deputy Head of social welfare & Development", image: siteMedia.teamPhotos[3] },
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0064A2] mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl text-xl mx-auto">
            Dedicated individuals working tirelessly to make Umurunga Family&apos;s
            mission a reality.
          </p>
        </div>

        {/* Cards grid — centered, proper gap, shadow wraps the whole card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-4 text-center w-full"
            >
              <div className="relative w-50 h-50 mx-auto mb-4 rounded-3xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 160px"
                  className="object-cover"
                />
              </div>
              <h4 className="font-bold text-black text-md">{member.name}</h4>
              <p className="text-[#0064A2] text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
          >
            Meet Full Team <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Team;
