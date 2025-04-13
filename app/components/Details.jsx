"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Details() {
  const images = Array.from({ length: 25 }, (_, i) => ({
    id: `baby-pic-${i + 1}`,
    path: `/baby-pics/baby-pic (${i + 1}).jpg`,
  }));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 50; // pixels per second (adjust as needed)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Double the images to create seamless infinite scroll
    const doubledImages = [...images, ...images];

    let position = 0;
    const imageWidth = 300; // Adjust based on your image width + margin
    const totalWidth = imageWidth * doubledImages.length;

    const animate = () => {
      position += scrollSpeed / 60; // Divide by 60 for 60fps

      if (position >= totalWidth / 2) {
        position = 0;
      }

      scrollContainer.style.transform = `translateX(-${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images]);

  return (
    <section className="py-10 sm:py-16 bg-white">
      {/* Infinite Scroll Container - Full Width */}
      <div className="w-full overflow-hidden mb-8">
        <div ref={scrollContainerRef} className="flex w-max">
          {/* Double the images for seamless looping */}
          {[...images, ...images].map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="relative md:w-[280px] w-[250px] md:h-[280px] h-[200px] mx-2 rounded-xl overflow-hidden shadow-md border-4 my-4 border-white flex-shrink-0"
            >
              <Image
                src={image.path}
                alt={`Baby The Deer ${(index % images.length) + 1}`}
                fill
                className="object-cover"
                // priority={index < 5} // Only prioritize first few images
                sizes="(max-width: 768px) 280px, 280px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Story Content - Bottom - Max Width 6xl */}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
            Baby's Heartbreaking Story
          </h2>
          <div className="prose prose-lg text-center text-blue-800 space-y-4">
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
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white sm:px-8 sm:py-3 px-6 py-2 rounded-lg font-medium transition-colors sm:shadow-lg shadow-md hover:shadow-xl"
            >
              Read Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
