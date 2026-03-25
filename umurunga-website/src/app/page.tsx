// Umurunga Family - Homepage
// This page brings going to bring all sections together in order.
// Each section is a separate component for easy editing.

import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import MissionVision from "@/app/components/missionVision";
import FeaturedActivities from "@/app/components/featuredActivities";
import Team from "@/app/components/team";
import Pillars from "@/app/components/pillars";
import DonationCTA from "@/app/components/donationCTA";
import UmurungaFooter from "@/app/components/umurungaFooter";

const UmurungaHome = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section - Full screen slider */}
      <Hero />

      {/* Mission & Vision Cards */}
      <MissionVision />

      {/* Featured Activities - Uses map() for easy updates */}
      <FeaturedActivities />

      {/* Meet Our Team */}
      <Team />

      {/* Our Pillars */}
      <Pillars />

      {/* Donation Call-to-Action Banner */}
      <DonationCTA />

      {/* Footer */}
      <UmurungaFooter />
    </div>
  );
};

export default UmurungaHome;