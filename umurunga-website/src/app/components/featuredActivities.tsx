// Featured Activities Component
// Displays activity cards in a grid layout.
// 
// HOW TO ADD A NEW ACTIVITY:
// Just add a new object to the "activities" array below!
// Each activity needs: title, image, description

import { ArrowRight } from "lucide-react";

// ACTIVITIES DATA - Add new activities here!
const activities = [
  {
    title: "24 May 2025: Umurunga Family with Street Children at Kigali city.",
    image: "/images/activity1_StreetChildren.jpg",
    description:
      "On this day, we spent quality time with street children in Kigali city, sharing meals, listening to their stories, and giving them hope for a brighter future.",
  },
  {
    title: "25 June 2025: Umurunga Family Visited genocide Survivor from Musanze",
    image: "/images/activity2_genoSurvivor.jpg",
    description:
      "We visited a genocide survivor in Musanze, offering emotional support and sharing a moment of healing and togetherness.",
  },
  {
    title: "26 July 2025: Umurunga Family paid Health insurance for 20 people families",
    image: "/images/activity3_insurance.png",
    description:
      "To promote better health and security, we proudly covered health insurance for 20 families, ensuring they have access to medical care.",
  },
    // TO ADD MORE ACTIVITIES: Copy the object below,
  // paste it here, and fill in your details:
  //
  // {
  //   title: "Your activity title here",
  //   image: "https://your-image-url.jpg",
  //   description: "Describe what happened at this activity.",
  // },
  ];

const FeaturedActivities = () => {
  return (
    <section id="activities" className="py-16">
      <div className="container mx-auto px-4">

        {/* ---- Section Header ---- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0064A2] mb-3">
            Featured Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our impactful programs and initiatives that are making a
            difference in communities across Rwanda.
          </p>
        </div>

        {/* ---- Activity Cards Grid ---- */}
        {/* We use map() to loop through the activities array */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Activity Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />

              {/* Activity Content */}
              <div className="p-5">
                <h3 className="font-bold text-black text-lg mb-2 leading-snug">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-md mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <a
                  href="/activities"
                  className="text-[#0064A2] text-md font-medium hover:underline flex items-center gap-1"
                >
                  Learn more <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ---- View All Button ---- */}
        <div className="text-center mt-10">
          <a
            href="/activities"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
          >
            View All Activities <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedActivities;
