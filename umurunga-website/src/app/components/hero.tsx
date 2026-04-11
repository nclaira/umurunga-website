"use client";

// Hero Component
// Full-screen hero section with background image, title, and call-to-action.
// This is the first thing visitors see on the homepage.

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteMedia } from "@/lib/siteMedia";

const slides = [
  {
    title: "Sustainable Peace",
    description:
      "Building peace and unity among youth in Rwanda through dialogue and community programs.",
    image: siteMedia.heroSlides[0],
  },
  {
    title: "Combating Youth Trauma",
    description:
      "Helping youth overcome trauma and find resilience through counseling and community support.",
    image: siteMedia.heroSlides[1],
  },
  {
    title: "Youth Empowerment",
    description:
      "Promoting equality and love without bias through education and advocacy programs.",
    image: siteMedia.heroSlides[2],
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[590px] h-[100svh] min-h-[500px] md:h-400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50 z-[1]" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 px-2">
          {slides[currentSlide].title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 md:mb-8 text-white/90 px-2">
          {slides[currentSlide].description}
        </p>
        <a
          href="join"
          className="px-8 py-3 bg-[#0064A2] text-white rounded-full text-lg font-medium hover:bg-[#0064A2]/70 transition-colors flex items-center gap-2"
        >
          Join Us <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
