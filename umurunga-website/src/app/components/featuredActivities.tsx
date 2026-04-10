// Featured Activities Component
// Displays impact counters and activity cards.
// HOW TO ADD A NEW ACTIVITY:
// Just add a new object to the "activities" array below!
// Each activity needs: title, image, description

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type ImpactStat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: ImpactStat[] = [
  { label: "Youth Reached", value: 300, suffix: "+" },
  { label: "Families Supported", value: 20 },
  { label: "Communities Served", value: 5, suffix: "+" },
];

// ACTIVITIES DATA - Add new activities here!
const activities = [
  {
    category: "Community Outreach",
    title: "24 May 2025: Umurunga Family with Street Children at Kigali city.",
    image: "/images/activity1_StreetChildren.jpg",
    description:
      "On this day, we spent quality time with street children in Kigali city, sharing meals, listening to their stories, and giving them hope for a brighter future.",
  },
  {
    category: "Trauma Support",
    title: "25 June 2025: Umurunga Family Visited genocide Survivor from Musanze",
    image: "/images/activity2_genoSurvivor.jpg",
    description:
      "We visited a genocide survivor in Musanze, offering emotional support and sharing a moment of healing and togetherness.",
  },
  {
    category: "Health & Welfare",
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

const categoryColors: Record<string, string> = {
  "Community Outreach": "bg-white/50 text-[#0DB14B]",
  "Trauma Support": "bg-white/50 text-[#0DB14B]",
  "Health & Welfare": "bg-white/50 text-[#0DB14B]",
};

const FeaturedActivities = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  // animKey increments every time section enters view — triggers re-animation
  const [animKey, setAnimKey] = useState(0);
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0));
  const durations = useMemo(() => stats.map((_, index) => 1400 + index * 200), []);

  // Watch for section entering AND leaving viewport — reset each time it enters
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Reset counts to 0 then trigger new animation
          setCounts(stats.map(() => 0));
          setAnimKey((k) => k + 1);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Re-run animation every time animKey changes
  useEffect(() => {
    if (animKey === 0) return;

    const delayMs = 400;
    const startAt = performance.now() + delayMs;
    let rafId = 0;

    const animate = (now: number) => {
      if (now < startAt) {
        rafId = window.requestAnimationFrame(animate);
        return;
      }

      let allDone = true;
      const next = stats.map((stat, index) => {
        const elapsed = now - startAt;
        const progress = Math.min(elapsed / durations[index], 1);
        const value = Math.floor(progress * stat.value);
        if (progress < 1) allDone = false;
        return value;
      });

      setCounts(next);

      if (allDone) {
        setCounts(stats.map((stat) => stat.value));
        return;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, [animKey, durations]);

  return (
    <section id="activities" className="py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="bg-[#0064A2] py-14 rounded-2xl mb-12">
          <div className="text-center text-white mb-10 px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Activities</h2>
            <p className="text-white/85 mt-2 max-w-2xl text-2xl mx-auto">
              Discover our impactful programs and initiatives that are making a
              difference in communities across Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-[#0064A2]/8 rounded-xl p-5 text-center border border-white/20 transition-transform duration-300 hover:-translate-y-2 shadow-xl"
              >
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {counts[index].toLocaleString()}
                  {stat.suffix ?? ""}
                </p>
                <p className="text-white/90 text-sm md:text-base mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Section Header ---- */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0064A2] mb-2">
            Recent Activity Highlights
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-md">
            A closer look at recent programs delivered by Umurunga Family.
          </p>
        </div>

        {/* ---- Activity Cards Grid ---- */}
        {/* We use map() to loop through the activities array */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 shadow-xl"
            >
              {/* Activity Image */}
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-1 left-3 text-sm font-semibold px-4 rounded-full ${categoryColors[activity.category]}`}
                >
                  {activity.category}
                </span>
              </div>

              {/* Activity Content */}
              <div className="p-5">
                <h3 className="font-bold text-black text-xl mb-2 leading-snug">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
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
