// Team Page
// Shows all team members in a grid.
// Add new members to the "teamMembers" array below.

import { ArrowRight } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const TeamPage = () => {
  // Team members data 
  // To add a new member, just add an object with name, role, and image
  const teamMembers = [
    { name: "Niyibizi Irene", role: "Executive Director", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop" },
    { name: "Cyiza S Guillaine", role: "Deputy Executive Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "Mugisha Godfrey", role: "Head of Social Welfare & Development", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Amani Esther", role: "Deputy Head of Social Welfare & Development", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
    { name: "Uwineza Brigitte", role: "Secretary", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop" },
    { name: "Niyozo Annie", role: "Assistant Secretary", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" },
    { name: "Umutesiwase Liliane", role: "Accountant", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop" },
    { name: "Dushime Alfiane", role: "Assistant Accountant", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
    { name: "Hirwa Djasil", role: "Permanent Advisor in Family Development", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
    { name: "Byiringiro Mike", role: "Family Disciplinary", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
    { name: "Imena G Carmella", role: "Assistant Disciplinary", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop" },
    { name: "Ishinwe Yves", role: "Family Activities Supervisor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" },
  ];

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/*  Page Title  */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Meet Our Leadership Team
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            These are the dedicated leaders working together to achieve Umurunga
            Family's mission.
          </p>

          {/*  Team Grid*/}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center">
                {/* Member photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#0064A2]/20 mb-3"
                />
                <h3 className="font-bold text-sm text-black">{member.name}</h3>
                <p className="text-xs text-[#0064A2]">{member.role}</p>
              </div>
            ))}
          </div>

          {/*  Join CTA Banner  */}
          <div className="max-w-3xl mx-auto bg-[#0064A2] rounded-xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
            <p className="text-white/80 mb-4 text-sm">
              We're always looking for passionate individuals to help us make a difference.
            </p>
            <a
              href="#join"
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#0064A2] rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Join Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default TeamPage;
