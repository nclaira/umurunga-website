// Activities Page
// Shows all activities in card format.
// To add a new activity, just add an object to the "activities" array below.

import { ArrowRight } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";

const ActivitiesPage = () => {
  // Activities data 
  // ADD NEW ACTIVITIES HERE: just copy one object and change the values
  const activities = [
    {
      date: "24 May 2025",
      title: "Umurunga Family with Street Children at Kigali city",
      description:
        "On this day, we spent quality time with street children in Kigali city, sharing meals, listening to their stories, and giving them hope for a brighter future.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    },
    {
      date: "25 June 2025",
      title: "Umurunga Family Visited genocide Survivor from Musanze",
      description:
        "We visited a genocide survivor in Musanze, offering emotional support and sharing a moment of healing and togetherness.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    },
    {
      date: "26 July 2025",
      title: "Umurunga Family paid Health insurance for 20 people families",
      description:
        "To promote better health and security, we proudly covered health insurance for 20 families, ensuring they have access to medical care.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    },
  ];

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/*  Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-4">
            Our Activities
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover the various programs and initiatives we run to support youth
            and build peaceful communities in Rwanda.
          </p>

          {/* Activities Grid  */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border">
                {/* Activity Image */}
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                {/* Activity Info */}
                <div className="p-5">
                  <p className="text-xs text-[#0064A2] font-medium mb-1">{activity.date}</p>
                  <h3 className="font-bold text-sm text-black mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {activity.description}
                  </p>
                  <a href="#" className="text-[#0064A2] text-sm font-medium hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/*  View All Button  */}
          <div className="text-center mt-10">
            <a
              href="/umurunga/gallery"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0064A2] text-white rounded-full font-medium hover:bg-[#0064A2]/90 transition-colors"
            >
              View All Activities <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default ActivitiesPage;
