// Mission Page — Professional Version

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye, faCheckCircle, faHandshake,
  faUsers, faSeedling, faHeart, faArrowRight, faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = { title: "Our Mission" };

const whatWeDo = [
  { icon: faHeart,       text: "Provide trauma counseling and mental health support" },
  { icon: faUsers,       text: "Facilitate intercommunity dialogue and reconciliation" },
  { icon: faCheckCircle, text: "Promote education and awareness about discrimination" },
  { icon: faBullseye,    text: "Create safe spaces for youth expression and growth" },
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

      {/* ── Hero: dark navy with left accent border feel ── */}
      <div className="bg-[#0a1628] text-white py-20">
        <div className="container mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" /> Back to Home
          </a>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#0064A2] rounded-full" />
              <span className="text-[#0064A2] font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">Our Mission</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              To promote sustainable peace, support youth in overcoming trauma, and build
              an inclusive society free from discrimination, founded on unconditional love.
            </p>
          </div>
        </div>
      </div>

      {/* ── Thin color bar separator ── */}
      <div className="h-1 bg-gradient-to-r from-[#0064A2] via-[#0DB14B] to-[#0064A2]" />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">

          {/* ── What We Do ── */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0064A2] mb-2">What We Do</h2>
              <div className="w-16 h-1 bg-[#0064A2] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDo.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" style={{ color: "#0064A2" }} />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Our Approach ── */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0064A2] mb-2">Our Approach</h2>
              <div className="w-16 h-1 bg-[#0064A2] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ourApproach.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0064A2]/10 group-hover:bg-[#0064A2] flex items-center justify-center transition-colors duration-300">
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6 group-hover:text-white transition-colors duration-300" style={{ color: "#0064A2" }} />
                  </div>
                  <p className="text-gray-700 text-sm font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="max-w-2xl mx-auto bg-[#0064A2] rounded-2xl p-10 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">See Our Work in Action</h3>
            <p className="text-white/80 mb-6 text-sm">
              Explore the real activities and programs we run across Rwanda.
            </p>
            <a
              href="/activities"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0064A2] rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              See Our Activities
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </UmurungaLayout>
  );
};

export default MissionPage;
