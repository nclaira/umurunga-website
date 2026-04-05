// Donation Call-to-Action Component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const DonationCTA = () => {
  return (
    <section className="py-16 bg-[#0064A2]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Make a Difference Today
        </h2>
        <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg">
          Your donation helps us continue our vital work with youth in Rwanda.
          Every contribution makes an impact.
        </p>
        <a
          href="/donate"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0064A2] rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Donate Now
          <FontAwesomeIcon icon={faHeart} className="w-5 h-5" style={{ color: "#0064A2" }} />
        </a>
      </div>
    </section>
  );
};

export default DonationCTA;
