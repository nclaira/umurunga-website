// Pending Activities — upcoming events before Mission & Vision on the homepage.
// PDF: add `umurunga-annual-action-plan.pdf` under `public/documents/` (see `siteMedia.actionPlanPdf`).

import Link from "next/link";
import { CalendarClock, FileText, Heart, MapPin, Clock } from "lucide-react";
import { siteMedia } from "@/lib/siteMedia";

// ── Pending / upcoming activities — ADD NEW ONES HERE ──
const pendingActivities = [
  {
    day: "20",
    month: "June 2026",
    fullDate: "20 June 2026",
    title: "Repair of Genocide Survivor’s House",
    description:"This activity aims to support genocide survivors by repairing their houses during the 100 Days of Remembrance in Rwanda. It is part of standing in solidarity with survivors and improving their living conditions.",
    location: "Kayonza District, Eastern Province, Rwanda",
  },

  // {
  //   day: "22",
  //   month: "August 2025",
  //   fullDate: "22 August 2025",
  //   title: "Youth Leadership Workshop",
  //   description:
  //     "A one-day workshop empowering young leaders with skills in communication, teamwork, and peace-building.",
  //   location: "Huye District",
  // },
];

const PendingActivities = () => {
  if (pendingActivities.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        
        <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#0DB14B]/10 text-[#0DB14B] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DB14B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0DB14B]"></span>
              </span> Upcoming
            </span>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0064A2] mb-2">
            Pending Activities
          </h2>
          <p className="text-gray-500 text-xl">
            Activities we are preparing — mark your calendar!
          </p>
        </div>

        {/* Pending cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8 ">   {/* if there is two pending activites i will change cols-1 to cols-2 */}
          {pendingActivities.map((activity, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#0064A2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top: large day number + month */}
              <div className="bg-[#0064A2] px-6 py-5 flex items-center gap-5">
                <div className="text-center">
                  <p className="text-5xl font-black text-white leading-none">{activity.day}</p>
                  <p className="text-white/80 text-md font-medium mt-1">{activity.month}</p>
                </div>
                <div className="w-px h-14 bg-white/30" />
                <h3 className="font-bold text-white text-2xl leading-snug flex-1">
                  {activity.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 text-xl leading-relaxed mb-5">
                  {activity.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <CalendarClock className="w-3 h-3 text-[#0064A2]" />
                      <span>{activity.fullDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-3 h-3 text-[#0064A2]" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 bg-orange-100 text-orange-600 text-sm font-bold px-3 py-1.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    Pending
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
         <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-12 mt-12 justify-center items-stretch sm:items-center">
          <Link 
            href="/join" 
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0064A2] text-white rounded-full font-semibold text-md sm:text-base hover:bg-[#005080] transition-colors shadow-md"
            >
            Become a Member
            <Heart className="h-4 w-4 shrink-0 text-white" fill="currentColor" />
          </Link>

          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0DB14B] text-white rounded-full font-semibold text-md sm:text-base hover:bg-[#0a9a3e] transition-colors shadow-md"
          >
            Donate
            <Heart className="h-4 w-4 shrink-0 text-white" fill="currentColor" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PendingActivities;
