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
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560252811-ec025b65fc5c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      ],
    },
    {
      label: "25 June 2025: Visiting genocide Survivor in Musanze",
      photos: [
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
      ],
    },
  ];

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
              className="w-full px-4 py-3 border-2 border-[#0064A2]/20 rounded-full text-sm appearance-none bg-white pr-10 focus:outline-none focus:border-[#0064A2]"
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
