// Activities Page — Professional Version

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendarAlt, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

export const metadata = {
  title: "Activities"
};


const activities = [
  {
    date: "24 May 2025",
    category: "Community Outreach",
    title: "Umurunga Family with Street Children at Kigali City",
    description:
      "On this day, we spent quality time with street children in Kigali city, sharing meals, listening to their stories, and giving them hope for a brighter future. This initiative reflects our commitment to reaching the most vulnerable youth in our communities.",
    image: "/images/activity1_StreetChildren.jpg",
    impact: "children reached",
  },
  {
    date: "25 June 2025",
    category: "Trauma Support",
    title: "Umurunga Family Visited Genocide Survivor from Musanze",
    description:
      "We visited a genocide survivor in Musanze, offering emotional support and sharing a moment of healing and togetherness. Our team provided counseling resources and a listening ear to help in the journey of recovery and resilience.",
    image: "/images/activity2_genoSurvivor.jpg",
    impact: "Healing & reconciliation",
  },
  {
    date: "26 July 2025",
    category: "Health & Welfare",
    title: "Umurunga Family Paid Health Insurance for 20 Families",
    description:
      "To promote better health and security, we proudly covered health insurance for 20 families, ensuring they have access to medical care. This program directly supports our pillar of sustainable development and community welfare.",
    image: "/images/activity3_insurance.png",
    impact: "families covered",
  },
];

const categoryColors: Record<string, string> = {
  "Community Outreach": "bg-blue-100 text-blue-700",
  "Trauma Support":     "bg-purple-100 text-purple-700",
  "Health & Welfare":   "bg-green-100 text-green-700",
};

const ActivitiesPage = () => {
  return (
    <UmurungaLayout>

      {/* ── Hero Banner ── */}
      <div className="bg-[#0064A2] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Back to Home */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-md mb-8 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
            Back to Home
          </a>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Activities</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Discover the programs and initiatives we run to support youth and
            build peaceful communities across Rwanda.
          </p>
        </div>
      </div>

      {/* ── Activities Section ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0064A2] mb-2">
              Recent Activities
            </h2>
            <p className="text-gray-500 text-md">
              Every action we take is a step toward a more peaceful Rwanda.
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge */}
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[activity.category]}`}>
                    {activity.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-[#0DB14B] text-xs mb-3">
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-3 h-3" />
                    <span>{activity.date}</span>
                  </div>

                  <h3 className="font-bold text-base text-gray-900 mb-3 leading-snug">
                    {activity.title}
                  </h3>

                  <p className="text-gray-500 text-md leading-relaxed mb-4">
                    {activity.description}
                  </p>

                  {/* Impact badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-[#0064A2] bg-[#0064A2]/8 px-3 py-1 rounded-full">
                      {activity.impact}
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-[#0064A2]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0064A2] mb-3">
            Want to Be Part of Our Next Activity?
          </h2>
          <p className="text-gray-500 text-md mb-6">
            Join Umurunga Family and help us make a real difference in the lives
            of youth across Rwanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
            >
              Join Us <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#0064A2] text-[#0064A2] rounded-full font-medium hover:bg-[#0064A2] hover:text-white transition-colors"
            >
              Donate <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </UmurungaLayout>
  );
};

export default ActivitiesPage;
