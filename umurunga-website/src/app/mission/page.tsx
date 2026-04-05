// Mission Page

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCheckCircle, faHandshake, faUsers, faSeedling, faHeart } from "@fortawesome/free-solid-svg-icons";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = { title: "Our Mission" };

const whatWeDo = [
  "Provide trauma counseling and mental health support",
  "Facilitate intercommunity dialogue and reconciliation",
  "Promote education and awareness about discrimination",
  "Create safe spaces for youth expression and growth",
];

const ourApproach = [
  { icon: faHandshake, text: "Community-led initiatives" },
  { icon: faUsers,     text: "Peer-to-peer support networks" },
  { icon: faSeedling,  text: "Sustainable, long-term programs" },
  { icon: faHeart,     text: "Trauma-informed care practices" },
];

const MissionPage = () => {
  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-10">
            Our Mission
          </h1>

          {/* Mission Statement Card */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 mb-10">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faBullseye} className="w-8 h-8" style={{ color: "#0064A2" }} />
            </div>
            <p className="text-gray-600 text-center leading-relaxed text-xl">
              To promote sustainable peace, support youth in overcoming trauma,
              and build an inclusive society free from discrimination, founded on
              unconditional love.
            </p>
          </div>

          {/* Two columns */}
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {/* What We Do */}
            <div className="bg-[#0064A2]/5 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#0064A2] mb-4">What We Do</h3>
              <ul className="space-y-3">
                {whatWeDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-md text-gray-700">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#0064A2" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="bg-[#0064A2]/5 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#0064A2] mb-4">Our Approach</h3>
              <ul className="space-y-3">
                {ourApproach.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-md text-gray-700">
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#0064A2" }} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/activities"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
            >
              See Our Activities
              <FontAwesomeIcon icon={faHandshake} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default MissionPage;
