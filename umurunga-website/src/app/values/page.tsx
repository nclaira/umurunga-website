sett// Values Page
// Shows the 4 core values of Umurunga Family.

import { Heart, Users, Handshake, Shield } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = {
  title: "Our Values"
};


const ValuesPage = () => {
  //  Values data (easy to add/edit values here) 
  const values = [
    {
      icon: Heart,
      title: "Unconditional Love",
      description:
        "We approach every individual and situation with empathy, care, and an unwavering commitment to love without conditions.",
    },
    {
      icon: Users,
      title: "Unity and Respect",
      description:
        "We foster togetherness and mutual respect, valuing each person's contribution and embracing diversity in all forms.",
    },
    {
      icon: Handshake,
      title: "Peace-driven Development",
      description:
        "We prioritize development initiatives that are rooted in peace, ensuring sustainable growth for individuals and communities.",
    },
    {
      icon: Shield,
      title: "Resilience and Faith",
      description:
        "We encourage resilience in the face of challenges and maintain faith in our mission and in the potential of our youth.",
    },
  ];

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/*  Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Our Values
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            These core values guide everything we do at Umurunga Family, from our
            internal operations to our community programs.
          </p>

          {/* Values Grid  */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {values.map((value, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0064A2]/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-[#0064A2]" />
                </div>
                <h3 className="font-bold text-[#0064A2] mb-2 text-sm">{value.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/*  Living Our Values Banner */}
          <div className="max-w-3xl mx-auto bg-[#0064A2]/5 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#0064A2] mb-3">Living Our Values</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              These values aren't just words on a page—they guide our daily work,
              decisions, and interactions with the communities we serve. Every member
              of Umurunga Family is committed to embodying these principles in all
              that we do.
            </p>
            <a
              href="/team"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
            >
              Meet Our Team →
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default ValuesPage;
