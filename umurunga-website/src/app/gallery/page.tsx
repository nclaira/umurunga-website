"use client";

// Gallery Page
// Displays photos in a grid with a dropdown to filter by event.
// Add new events and photos to the "galleryEvents" array below.

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import UmurungaLayout from "@/umurunga/components/UmurungaLayout";



const GalleryPage = () => {
  //  Gallery data 
  // ADD NEW EVENTS HERE: add an object with a label and array of image URLs
  const galleryEvents = [
    {
      label: "24 May 2025: With Street Children at Kigali city",
      photos: [
        "/images/street-1.jpg",
        "/images/street-1.jpg",
        "/images/street-2.png",
        "/images/street-3.png",
        "/images/street-4.png",
        "/images/street-5.png",
        "/images/street-6.png",
        "/images/street-7.png",
        "/images/street-8.png",
        "/images/street-9.png",
        "/images/street-10.jpeg",
        "/images/street-11.jpeg",
        "/images/street-12.jpeg",
        "/images/street-13.jpeg",
        "/images/street-14.jpeg",
        "/images/street-15.jpeg",
        "/images/street-16.jpeg",
        "/images/street-17.jpeg",
        "/images/street-18.jpeg",
        "/images/street-19.jpeg",
        "/images/street-20.jpeg",
        "/images/street-21.jpeg",
        "/images/street-22.jpeg",
        "/images/street-23.jpeg",
        "/images/street-24.jpeg",
        "/images/street-25.jpeg",
        "/images/street-26.jpeg",
        "/images/street-27.jpeg",
        "/images/street-28.jpeg",
        "/images/street-29.jpeg",
        "/images/street-30.jpeg",
        "/images/street-31.jpeg",
        "/images/street-32.jpeg",
        "/images/street-33.jpeg",
        "/images/street-34.jpeg",
        "/images/street-35.jpeg",
        "/images/street-36.jpeg",
        "/images/street-37.jpeg",
        "/images/street-38.jpeg",
        "/images/street-39.jpeg",
        "/images/street-40.jpeg",
        "/images/street-41.jpeg",
      ],
    },

    {
      label: "25 June 2025: Visiting genocide Survivor in Musanze",
      photos: [
        "/images/musanze-survival-1.png",
        "/images/musanze-survival-2.png",
        "/images/musanze-survival-3.png",
        "/images/musanze-survival-4.png",
        "/images/musanze-survival-5.png",
        "/images/musanze-survival-6.png",
        "/images/musanze-survival-7.png",
        "/images/musanze-survival-8.png",
        "/images/musanze-survival-9.png",
        "/images/musanze-survival-10.jpg",
        "/images/musanze-survival-11.jpg",
        "/images/musanze-survival-12.jpg",
        "/images/musanze-survival-13.jpg",
        "/images/musanze-survival-14.jpg",
        "/images/musanze-survival-15.jpg",
        "/images/musanze-survival-16.jpg",
        "/images/musanze-survival-17.jpg",
        "/images/musanze-survival-18.jpg",
        "/images/musanze-survival-19.jpg",
        "/images/musanze-survival-20.jpg",
        "/images/musanze-survival-21.jpg",
      ],
    },

    {
      label: "26 July 2025: Paid Health insurance for 20 families",
      photos: [
        "/images/insurance-1.jpg",
        "/images/insurance-2.jpg",
        "/images/insurance-3.jpg",
        "/images/insurance-4.jpg",
        "/images/insurance-5.jpg",
        "/images/insurance-6.jpg",
        "/images/insurance-7.jpg",
      ],
    },


    //edit this for new label of pictures

    //  {
    //   label: "26 July 2025: Paid Health insurance for 20 families",
    //   photos: [
    //     "/images/insurance-1.jpg",
    //     "/images/insurance-2.jpg",
    //     "/images/insurance-3.jpg",
    //     "/images/insurance-4.jpg",
    //     "/images/insurance-5.jpg",
    //     "/images/insurance-6.jpg",
    //     "/images/insurance-7.jpg",
    //   ],
    // },

  ];


  //New gallery events will be added here,
  // i will create new label and add new photos

  // State: which event is selected (default = first one)
  const [selectedEvent, setSelectedEvent] = useState(0);

  return (
    <UmurungaLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Page Title  */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0064A2] text-center mb-8">
            Welcome in our Gallery
          </h1>

          {/* Event Dropdown  */}
          <div className="max-w-lg mx-auto mb-10 relative">
            <select
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-[#0064A2] rounded-full text-md text-[#0064A2] appearance-none bg-white pr-10 focus:outline-none focus:border-[#0064A2]"
            >
              {galleryEvents.map((event, i) => (
                <option key={i} value={i}>{event.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0064A2] pointer-events-none" />
          </div>

          {/* Photo Grid  */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryEvents[selectedEvent].photos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt={`Gallery photo ${i + 1}`}
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </section>
    </UmurungaLayout>
  );
};

export default GalleryPage;
