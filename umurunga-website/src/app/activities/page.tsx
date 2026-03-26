// Activities Page
// Shows all activities in card format - same data as the homepage featured activities.

import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const activities = [
  {
    date: "24 May 2025",
    title: "Umurunga Family with Street Children at Kigali city",
    description:
      "On this day, we spent quality time with street children in Kigali city, sharing meals, listening to their stories, and giving them hope for a brighter future.",
    image: "/images/activity1_StreetChildren.jpg",
  },
  {
    date: "25 June 2025",
    title: "Umurunga Family Visited genocide Survivor from Musanze",
    description:
      "We visited a genocide survivor in Musanze, offering emotional support and sharing a moment of healing and togetherness.",
    image: "/images/activity2_genoSurvivor.jpg",
  },
  {
    date: "26 July 2025",
    title: "Umurunga Family paid Health insurance for 20 people families",
    description:
      "To promote better health and security, we proudly covered health insurance for 20 families, ensuring they have access to medical care.",
    image: "/images/activity3_insurance.png",
  },
];

const ActivitiesPage = () => {
  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Our Activities
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover the various programs and initiatives we run to support youth
            and build peaceful communities in Rwanda.
          </p>

          {/* Activities Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <p className="text-xs text-[#0064A2] font-medium mb-1">{activity.date}</p>
                  <h3 className="font-bold text-sm text-black mb-2 leading-snug">{activity.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default ActivitiesPage;
