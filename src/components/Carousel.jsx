import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample images with 6 landscape and 3 portrait per page
  const allImages = [
    { id: 1, url: "/Images/uteInstallation.webp"},
    { id: 2, url: "/Images/Rum.webp"},
    { id: 3, url: "/Images/ElMatning.webp"},
    { id: 4, url: "/Images/ElCentral.webp"},
    { id: 5, url: "/Images/GolvVarme.webp"},
    { id: 6, url: "/Images/Badrum.webp"},
    { id: 7, url: "/Images/ElCentralArbete.webp"},
    { id: 8, url: "/Images/VagUttagNara.webp"},
    { id: 9, url: "/Images/ElHandskning.webp"},
    { id: 18, url: "/Images/ElHandskning.webp"},
    { id: 10, url: "/Images/GolvVarme.webp"},
    { id: 12, url: "/Images/ElMatning.webp"},
    { id: 13, url: "/Images/ElCentral.webp"},
    { id: 16, url: "/Images/ElCentralArbete.webp"},
    { id: 14, url: "/Images/uteInstallation.webp"},
    { id: 15, url: "/Images/Badrum.webp"},
    { id: 17, url: "/Images/VagUttagNara.webp"},
    { id: 11, url: "/Images/Rum.webp"},
  ];

  const imagesPerPage = 9;
  const totalPages = Math.ceil(allImages.length / imagesPerPage);

  const getCurrentImages = () => {
    const start = currentPage * imagesPerPage;
    return allImages.slice(start, start + imagesPerPage);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const currentImages = getCurrentImages();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-95 w-20 h-10"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-6 h-6 absolute left-2 top-1/4 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-95 w-20 h-10"
            aria-label="Next images"
          >
            <ChevronRight className="w-6 h-6 absolute right-2 top-1/4 text-white" />
          </button>

          {/* Gallery Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[1fr] lg:auto-rows-[1fr] h-auto sm:h-[520px] lg:h-[600px] transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Landscape - Large */}
            <div
              className="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[0])}
            >
              <img
                src={currentImages[0]?.url}
                alt="Gallery image 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Landscape - Small */}
            <div
              className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[1])}
            >
              <img
                src={currentImages[1]?.url}
                alt="Gallery image 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Portrait */}
            <div
              className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[2])}
            >
              <img
                src={currentImages[2]?.url}
                alt="Gallery image 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Landscape - Small */}
            <div
              className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[3])}
            >
              <img
                src={currentImages[3]?.url}
                alt="Gallery image 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Portrait */}
            <div
              className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[4])}
            >
              <img
                src={currentImages[4]?.url}
                alt="Gallery image 5"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Landscape - Medium */}
            <div
              className="col-span-2 row-span-2 md:row-span-1 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[5])}
            >
              <img
                src={currentImages[5]?.url}
                alt="Gallery image 6"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Portrait */}
            <div
              className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[6])}
            >
              <img
                src={currentImages[6]?.url}
                alt="Gallery image 7"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Landscape - Small */}
            <div
              className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[7])}
            >
              <img
                src={currentImages[7]?.url}
                alt="Gallery image 8"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Landscape - Small */}
            <div
              className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(currentImages[8])}
            >
              <img
                src={currentImages[8]?.url}
                alt="Gallery image 9"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              id="CarouselBtn"
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === currentPage ? "bg-[#66BEF0] w-8" : "bg-[#66bdf06f] hover:bg-[#66BEF0]"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
 {selectedImage &&
  createPortal(
    <div
      className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center p-4"
      onClick={() => setSelectedImage(null)}
      role="dialog"
      aria-modal="true"
      aria-label="Bildförhandsvisning"
    >
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200 w-8 h-8 flex items-center justify-center"
        aria-label="Stäng"
      >
        <X className="w-6 h-6 absolute text-white" />
      </button>

      <img
        src={selectedImage.url}
        alt="Förstorad bild"
        className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  )
}
    </div>
    
  );
};

export default Carousel;
