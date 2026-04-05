// Team Page
// Shows all 14 team members in a grid.

import { ArrowRight } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = {
  title: "Our Team"
};


const TeamPage = () => {
  const teamMembers = [
    { name: "Niyibizi Irene", role: "Executive Director", image: "/images/team1_Irene.jpg" },
    { name: "Cyiza S Guillaine", role: "Deputy Executive Director", image: "/images/team2_guillaine.png" },
    { name: "Mugisha Godfrey", role: "Head of Social Welfare & Development", image: "/images/team3_Godfrey.png" },
    { name: "Amani Esther", role: "Deputy Head of Social Welfare & Development", image: "/images/team4_Amani.png" },
    { name: "Uwineza Brigitte", role: "Secretary", image: "/images/team5_Brigitte.png" },
    { name: "Niyozo Annie", role: "Assistant Secretary", image: "/images/team6_Arnie.png" },
    { name: "Umutesiwase Liliane", role: "Accountant", image: "/images/team7_Liliane.png" },
    { name: "Dushime Alfiane", role: "Assistant Accountant", image: "/images/team8_Alliane.png" },
    { name: "Hirwa Djasil", role: "Permanent Advisor in Family Development", image: "/images/team9_Hirwa.png" },
    { name: "Byiringiro Mike", role: "Family Disciplinary", image: "/images/team10_Mike.jpg" },
    { name: "Imena G Carmella", role: "Assistant Disciplinary", image: "/images/team11_Gabriella.jpg" },
    { name: "Ishinwe Yves", role: "Family Activities Supervisor", image: "/images/team12_Yves.png" },
   
  ];

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Meet Our Leadership Team
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            These are the dedicated leaders working together to achieve Umurunga
            Family's mission.
          </p>

          {/* Team Grid - 14 members */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center  transition-transform duration-300 hover:-translate-y-2 shadow-xl hover:shadow-md rounded-xl pb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-58 h-58 mx-auto mx-auto rounded-3xl object-cover border-[#0064A2]/20 mb-3"
                />
                <h3 className="font-bold text-md text-black">{member.name}</h3>
                <p className="text-sm text-[#0064A2]">{member.role}</p> 
              </div>
            ))}
          </div>

          {/* Join CTA Banner */}
          <div className="max-w-5xl mx-auto bg-[#0064A2] rounded-xl p-12 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
            <p className="text-white/80 mb-4 text-md">
              We're always looking for passionate individuals to help us make a difference.
            </p>
            <a
              href="/join"
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#0064A2] rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Join Us <ArrowRight className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default TeamPage;
