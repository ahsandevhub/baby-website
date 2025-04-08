"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Details() {
  // Array of image paths with unique IDs
  const images = Array.from({ length: 25 }, (_, i) => ({
    id: `baby-pic-${i + 1}`,
    path: `/baby-pics/baby-pic (${i + 1}).jpg`,
  }));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const carouselRef = useRef(null);

  // Auto-advance carousel with card stack effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setVisibleCards((prev) => {
        const nextIndex = (prev[0] + 1) % images.length;
        return [nextIndex, prev[0], prev[1]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Stacked Card Carousel - Top */}
        <div
          className="w-full relative h-96 md:h-[500px] mb-12"
          ref={carouselRef}
        >
          {visibleCards.map((imgIndex, stackPosition) => {
            const image = images[imgIndex];
            return (
              <div
                key={`${image.id}-${stackPosition}`} // Unique key combining image ID and position
                className={`absolute inset-x-0 mx-auto transition-all duration-500 ease-in-out ${
                  stackPosition === 0
                    ? "top-0 z-30 scale-100"
                    : stackPosition === 1
                    ? "top-2 z-20 scale-95 rotate-1"
                    : "top-4 z-10 scale-90 rotate-2"
                }`}
                style={{
                  width: `${100 - stackPosition * 5}%`,
                  transform: `rotate(${
                    stackPosition === 0 ? 0 : stackPosition === 1 ? 1 : 2
                  }deg)`,
                }}
              >
                <div className="relative h-full rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={image.path}
                    alt={`Baby The Deer ${imgIndex + 1}`}
                    fill
                    className="object-cover"
                    priority={imgIndex === 0}
                  />
                </div>
              </div>
            );
          })}

          {/* Navigation dots - now using image IDs for keys */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-40">
            {images.slice(0, 5).map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setVisibleCards([
                    index,
                    (index - 1 + images.length) % images.length,
                    (index - 2 + images.length) % images.length,
                  ]);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex % 5
                    ? "bg-blue-600 w-6"
                    : "bg-blue-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Story Content - Bottom */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
            Baby's Heartbreaking Story
          </h2>
          <div className="prose prose-lg text-blue-800 space-y-4">
            <p>
              For nearly two years, Baby the deer was a beloved member of a
              Pennsylvania community. He wasn't just a wild animal - he was
              family.
            </p>
            <p>
              Baby spent his days peering through windows, lounging on porches,
              and playing in the water. The entire neighborhood adored him, from
              children to mail carriers.
            </p>
            <p>
              On February 25th, the Pennsylvania Game Commission brutally seized
              Baby and arrested his owner Tammy on false charges (later
              dismissed). The community was devastated.
            </p>
            <p className="font-semibold text-blue-900 text-center">
              Experts now believe Baby is likely dead - taken by the very system
              meant to protect wildlife.
            </p>
            <p className="text-center">
              We demand answers and accountability from the PA Game Commission.
            </p>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://babythedeer.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Read Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
