// Mission & Vision Component — homepage cards

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";

const MissionVision = () => {
  return (
    <section id="mission" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faBullseye} className="w-8 h-8" style={{ color: "#0064A2" }} />
            </div>
            <h3 className="text-xl font-bold text-[#0064A2] mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To promote sustainable peace, support youth in overcoming trauma,
              and build an inclusive society free from discrimination, founded on
              unconditional love.
            </p>
          </div>

          {/* Vision Card */}
          <div id="vision" className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} className="w-8 h-8" style={{ color: "#0064A2" }} />
            </div>
            <h3 className="text-xl font-bold text-[#0064A2] mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading organization in fostering development rooted in
              peace, unity, and prioritizing the value of a good life within the
              broader community.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
