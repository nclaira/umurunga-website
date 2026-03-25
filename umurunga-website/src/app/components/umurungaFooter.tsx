// Footer Component
// Dark footer with logo, contact info, quick links, and support section.

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Heart } from "lucide-react";
import { siteMedia } from "@/lib/siteMedia";

const UmurungaFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* ---- Column 1: Logo & Contact ---- */}
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
            <p className="text-gray-400 text-sm mb-4">
              Building peace and unity among youth in Rwanda.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#0DB14B]" />
                <span>+250 787 028 671</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#0DB14B]" />
                <span>+250 789 211 407</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#0DB14B]" />
                <span>umurungaf@gmail.com</span>
              </div>
            </div>
          </div>

          {/* ---- Column 2: Quick Links ---- */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">Activities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* ---- Column 3: Support ---- */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support Our Cause</h4>
            <p className="text-gray-400 text-sm mb-4">
              Your donation helps us make a difference.
            </p>
            <div className="space-y-3">
              <a
                href="#donate"
                className="block w-fit px-6 py-2 bg-[#0DB14B] text-white rounded-full text-sm font-medium hover:bg-[#0DB14B]/90 transition-colors"
              >
                Donate Now
              </a>
              <a
                href="#join"
                className="block w-fit px-6 py-2 border border-[#0064A2] text-[#0064A2] rounded-full text-sm font-medium hover:bg-[#0064A2] hover:text-white transition-colors"
              >
                Join our Family
              </a>
            </div>
          </div>

        </div>

        {/* ---- Bottom Bar ---- */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2025 Umurunga Family. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default UmurungaFooter;
