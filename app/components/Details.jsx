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
    <section id="story" className="py-8 mb-10 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
            Baby's Story
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            #JUSTICEFORBABY: Nationwide Outcry After Beloved Pet Deer Seized
          </h3>
          <div className="prose prose-lg text-justify text-gray-800 space-y-4">
            <p>
              <span className="font-semibold">PENNSYLVANIA</span> - For nearly
              two years, "Baby" the deer became an integral part of a
              Pennsylvania community, his gentle presence bringing joy to
              residents of all ages. However, this heartwarming story has taken
              a tragic turn, igniting a nationwide call for justice.
            </p>
            <p>
              More than just a wild animal, Baby was family to many. Neighbors
              would often see him peering through windows, relaxing on porches,
              and playfully enjoying water. His affectionate greetings were even
              a highlight of the local mail carrier's daily route.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              February 25th: The Day the Community's Heart Broke
            </h4>
            <p>
              The peace of the community was shattered on February 25th when the
              Pennsylvania Game Commission (PGC) took drastic action. In a move
              described by witnesses as "unlawful and brutal," authorities
              seized Baby and arrested his owner, Tammy, on charges of illegal
              possession of wildlife. These charges were later dismissed, adding
              to the community's outrage.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              Proof Emerges: Baby Was Legally Owned, Not Wild
            </h4>
            <p>
              In a significant development, Baby's legal co-owner, Candi, has
              come forward with irrefutable proof that Baby was not born in the
              wild. This evidence confirms that Tammy and Candi were the
              rightful legal owners of the beloved deer, directly contradicting
              the PGC's initial justification for the seizure.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              Devastating Update: Fears Mount for Baby's Fate
            </h4>
            <p className="font-semibold text-gray-900">
              The latest information from experts paints a grim picture. Despite
              the evidence of legal ownership, professionals now believe it is
              unlikely that Baby the Deer is still alive. The very system tasked
              with protecting wildlife is now feared to be responsible for his
              demise.
            </p>
            <p>
              This devastating news has amplified the community's grief and
              fueled a growing nationwide demand for answers and accountability
              from the Pennsylvania Game Commission and all involved parties.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              A Call for Justice: #JUSTICEFORBABY Movement Gains Momentum
            </h4>
            <p>
              The hashtag #JUSTICEFORBABY is gaining traction across the country
              as animal lovers and concerned citizens rally in support of Baby
              and his owners. The community remains resolute in their fight for
              truth and justice.
            </p>
            <p className="text-center">
              The fight for truth and justice for Baby continues.
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
