import { useState, useEffect } from "react";
import banner1 from "../../Assest/Banner (2).png";
import banner2 from "../../Assest/Banner (3).png";
import banner3 from "../../Assest/Inner-Banner1.jpg";

const slides = [
  {
    id: 1,
    imageUrl: banner1,
    alt: "Shipping containers at Indian port - Import Export",
    caption: "Start Your Global Trade Journey Today",
    subCaption: "Simple • Fast • Reliable",
  },
  {
    id: 2,
    imageUrl: banner2,
    alt: "Cargo ship carrying goods - IEC Registration",
    caption: "Mandatory IEC for Seamless Imports & Exports",
    subCaption: "100% Online Application Process",
  },
  {
    id: 3,
    imageUrl: banner3,
    alt: "Air freight airplane - Export from India",
    caption: "Grow Your Business with IEC Today",
    subCaption: "Expert Assistance • PAN India Service",
  },
];

const NOTICE_TEXT =
  "It is mandatory to update your Importer Exporter Code (IEC) between 1st April to 30th June every year. • Notification No. 58/2015-2020 • Verify & update even if no changes.";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 md:pt-8">
      <div className="relative mx-auto w-full max-w-screen-2xl h-64 sm:h-80 md:h-[420px] lg:h-[500px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/10 bg-navy-900">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.imageUrl}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Navy overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/50 to-navy-900/15" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end z-10">
              <div className="px-5 sm:px-8 md:px-12 pb-24 md:pb-20 max-w-3xl">
                <span className="block mb-3 h-1 w-12 rounded-full bg-orange-500"></span>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
                  {slide.caption}
                </h2>

                {slide.subCaption && (
                  <p className="mt-3 text-slate-200 text-sm sm:text-base md:text-lg font-medium tracking-wide">
                    {slide.subCaption}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Marquee Notice */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-navy-950/85 backdrop-blur-sm border-t border-white/10 text-white">
          <div className="flex items-center gap-3 px-4 sm:px-6 py-2.5">
            <span className="shrink-0 rounded bg-orange-600 px-2 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              Important
            </span>
            <div className="marquee-container relative flex-1 overflow-hidden">
              <div className="marquee inline-flex whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide">
                <span className="mx-12">{NOTICE_TEXT}</span>
                <span className="mx-12">{NOTICE_TEXT}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-14 inset-x-0 md:inset-x-auto md:right-10 z-30 flex justify-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-orange-500"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}