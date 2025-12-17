import React, { useState } from "react";

const ServiceCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Laddstolpar",
      image: "/Images/uteInstallation2.webp",
      description: "Installation och service av laddstolpar för hem och företag.",
    },
    {
      id: 2,
      title: "Byggström",
      image: "/Images/byggström.jpg",
      description: "Tillfälliga el-lösningar och byggström för projekt.",
    },
    {
      id: 3,
      title: "Smarta lösningar",
      image: "/Images/Rum.webp",
      description: "Smarta hem-lösningar för bättre komfort och energieffektivitet.",
    },
    {
      id: 4,
      title: "Felsökningar",
      image: "/Images/felsokningReparationer.webp",
      description: "Snabb felsökning och åtgärd av elproblem.",
    },
    {
      id: 5,
      title: "Konsultation",
      image: "/Images/VägUttagNära.webp",
      description: "Rådgivning och planering inför elinstallationer.",
    },
       {
      id: 6,
      title: "Elinstallationer",
      image: "/Images/ElHandskning.webp",
      description: "Installationer av alla möjliga slag..",
    },
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {services.slice(0,65).map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              data-expanded={expandedCard === service.id}
              className={`group relative h-96 w-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ease-out
                ${expandedCard === service.id ? "h-[640px] z-50 md:h-80" : ""}
                md:hover:w-[140%] md:hover:z-50
                  `}
            >
              {/* Background Image */}
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />

              {/* Overlay with blur */}
              <div
                className={`absolute inset-0 transition-all duration-500
                ${expandedCard === service.id ? "bg-black/20 backdrop-blur-none" : "bg-black/40 backdrop-blur-sm"}
                md:hover:backdrop-blur-none md:hover:bg-black/20
              `}
              />

              {/* Number Badge */}
              <div className="absolute top-6 left-6 text-white font-bold text-5xl opacity-90">0{index + 1}.</div>

              {/* Hover/Active Description */}
              <p
                className={`absolute left-6 right-6 bottom-20 text-white/95 text-sm md:text-base leading-snug transition-all duration-300
                ${expandedCard === service.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                md:group-hover:opacity-100 md:group-hover:translate-y-0`}
              >
                {service.description}
              </p>

              {/* Title */}
              <div className="absolute bottom-6 left-6 text-white font-semibold text-2xl">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
