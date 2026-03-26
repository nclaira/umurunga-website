// UmurungaLayout
// Wraps all sub-pages with the Navbar and Footer.

import Navbar from "@/app/components/navbar";
import UmurungaFooter from "@/app/components/umurungaFooter";

const UmurungaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <UmurungaFooter />
    </div>
  );
};

export default UmurungaLayout;
