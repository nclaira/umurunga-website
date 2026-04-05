// Footer Component

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { siteMedia } from "@/lib/siteMedia";

const UmurungaFooter = () => {
  const socialLinks = [
    { icon: faFacebookF, href: "https://web.facebook.com/profile.php?id=61579817944187", label: "Facebook" },
    { icon: faInstagram, href: "https://www.instagram.com/umurunga_family", label: "Instagram" },
    { icon: faTwitter,   href: "https://x.com/UmurungaFamily", label: "Twitter" },
    { icon: faLinkedin,  href: "https://www.linkedin.com/in/umurunga-family-b84b06359/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Column 1: Logo & Contact */}
          <div>
            <div className="mb-4">
              <Image
                src={siteMedia.logo}
                alt="Umurunga Family"
                width={200}
                height={56}
                className="h-12 w-auto max-w-[220px] object-contain object-left"
              />
            </div>
            <p className="text-gray-400 text-md mb-4">
              Building peace and unity among youth in Rwanda.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-md text-gray-400">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="w-4 h-4" style={{ color: "#0DB14B" }} />
                <span>+250 787 028 671</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="w-4 h-4" style={{ color: "#0DB14B" }} />
                <span>+250 789 211 407</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" style={{ color: "#0DB14B" }} />
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=umurungaf@gmail.com&tf=cm"
                  className="hover:underline text-gray-400 hover:text-white transition-colors"
                >
                  umurungaf@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#0064A2] flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={icon} className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#0DB14B]">Quick Links</h4>
            <ul className="space-y-2 text-md text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/mission" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="/vision" className="hover:text-white transition-colors">Vision</a></li>
              <li><a href="/activities" className="hover:text-white transition-colors">Activities</a></li>
              <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#0DB14B]">Support Our Cause</h4>
            <p className="text-gray-400 text-md mb-4">
              Your donation helps us make a difference.
            </p>
            <div className="flex flex-col gap-3 w-fit">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#0DB14B] text-white rounded-full text-md font-medium hover:bg-[#0DB14B]/90 transition-colors"
              >
                Donate Now
                <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
              </a>
              <a
                href="/join"
                className="inline-flex items-center gap-2 px-6 py-2 border border-[#0064A2] text-[#0064A2] rounded-full text-md font-medium hover:bg-[#0064A2] hover:text-white transition-colors"
              >
                Join our Family
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-md text-gray-500">
          © 2026 Umurunga Family. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default UmurungaFooter;
