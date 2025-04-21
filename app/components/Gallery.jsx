"use client";

import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const images = Array.from({ length: 25 }, (_, i) => ({
    id: `baby-pic-${i + 1}`,
    path: `/baby-pics/baby-pic (${i + 1}).jpg`,
  }));

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex = selectedImage === 0 ? images.length - 1 : selectedImage - 1;
    } else {
      newIndex = selectedImage === images.length - 1 ? 0 : selectedImage + 1;
    }
    setSelectedImage(newIndex);
  };

  return (
    <div className="py-10 md:py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Baby's Photo Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md border-4 border-white cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openImage(index)}
            >
              <Image
                src={image.path}
                alt={`Baby The Deer ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-4xl z-50"
            onClick={closeImage}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl z-50 md:left-8"
            onClick={() => navigateImage("prev")}
          >
            &#10094;
          </button>

          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Image
              src={images[selectedImage].path}
              alt={`Baby The Deer ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            className="absolute right-4 text-white text-4xl z-50 md:right-8"
            onClick={() => navigateImage("next")}
          >
            &#10095;
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
