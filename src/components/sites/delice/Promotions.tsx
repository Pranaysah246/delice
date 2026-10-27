"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  timing: string;
  image: string;
  bgColor: string;
}

const PROMOTIONS: Promotion[] = [
  {
    id: "happy-hour",
    title: "Happy Hour",
    subtitle: "Vos fins d’après-midi, rehaussées.",
    timing: "Tous les jours de 14 h à 18 h.",
    image: "/sites/delice/assets/c712d28a-a727-465e-a475-a4712d5c12ec.png",
    bgColor: "#75c2bd", // cyan-500
  },
  {
    id: "speciaux-midi",
    title: "Spéciaux du midi",
    subtitle: "Pause lunch, à petit prix.",
    timing: "Tous les jours de 11 h à 15 h.",
    image: "/sites/delice/assets/dscf5210.png",
    bgColor: "#91964f", // secondary-500 (olive)
  },
  {
    id: "fish-chips",
    title: "Fish & Chips",
    subtitle: "Croustillant, doré, irrésistible.",
    timing: "Tous les mardis de 11 h à 22 h.",
    image: "/sites/delice/assets/dscf5208-1-2560x2560.png",
    bgColor: "#263150", // blue-500
  },
  {
    id: "mecredelice",
    title: "Mecredélice",
    subtitle: "Le mercredi, on pense pizza.",
    timing: "20 % de rabais en livraison et pour emporter.",
    image: "/sites/delice/assets/dscf5221.png",
    bgColor: "#e58833", // orange-500
  },
  {
    id: "moules-frites",
    title: "Moules & frites à volonté",
    subtitle: "Un classique sans limite.",
    timing: "Tous les mercredis de 16 h à 22 h.",
    image: "/sites/delice/assets/creation-sans-titre-6-1.png",
    bgColor: "#263150", // blue-500
  },
  {
    id: "vin-demi-prix",
    title: "Vin à 1/2 prix",
    subtitle: "Toutes nos bouteilles, à moitié prix.",
    timing: "Tous les jeudis dès 11 h.",
    image: "/sites/delice/assets/icoeua9hcrg8y02p2mir4jnspyzzq1sgw89zhpfidav2zxed.png",
    bgColor: "#de2b2b", // primary-500
  },
];

export function Promotions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePromo = PROMOTIONS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PROMOTIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PROMOTIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full text-[#f8efdc] transition-colors duration-700 overflow-hidden py-16 md:py-28"
      style={{ backgroundColor: activePromo.bgColor }}
    >
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        {/* Curved Header Title */}
        <div className="flex justify-center mb-4">
          <div className="relative w-64 h-24 md:w-96 md:h-32 flex items-center justify-center">
            <svg
              viewBox="0 0 400 140"
              className="w-full h-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="promotionsArc"
                  d="M 40, 110 A 180, 110 0 0, 1 360, 110"
                  fill="none"
                />
              </defs>
              <text
                className="font-ivy text-3xl md:text-4xl font-semibold tracking-wider"
                fill="#f8efdc"
              >
                <textPath
                  href="#promotionsArc"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Plaisirs du jour
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Featured Card Display */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-8">
          {/* Promotion Transparent Food Photo */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 shrink-0 transition-transform duration-500 hover:scale-105">
            <Image
              src={activePromo.image}
              alt={activePromo.title}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 256px, 384px"
              priority
            />
          </div>

          {/* Promotion Info */}
          <div className="flex flex-col text-center md:text-left max-w-md">
            <h3 className="font-ivy text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f8efdc] mb-3">
              {activePromo.title}
            </h3>
            <p className="font-miller text-xl sm:text-2xl text-[#f8efdc]/90 italic mb-4">
              {activePromo.subtitle}
            </p>
            <p className="font-filson text-sm sm:text-base uppercase tracking-wider font-semibold text-[#f8efdc]/80">
              {activePromo.timing}
            </p>
          </div>
        </div>

        {/* Carousel Navigation Dots & Buttons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#f8efdc]/40 hover:border-[#f8efdc] flex items-center justify-center text-[#f8efdc] hover:bg-[#f8efdc]/10 transition-colors"
            aria-label="Previous promotion"
          >
            ←
          </button>

          <div className="flex items-center gap-3">
            {PROMOTIONS.map((promo, idx) => (
              <button
                key={promo.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? "w-8 h-3 bg-[#f8efdc]"
                    : "w-3 h-3 bg-[#f8efdc]/40 hover:bg-[#f8efdc]/70"
                }`}
                aria-label={`Select ${promo.title}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#f8efdc]/40 hover:border-[#f8efdc] flex items-center justify-center text-[#f8efdc] hover:bg-[#f8efdc]/10 transition-colors"
            aria-label="Next promotion"
          >
            →
          </button>
        </div>

        {/* Quick Tabs / Strip below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-12 max-w-6xl mx-auto">
          {PROMOTIONS.map((promo, idx) => (
            <button
              key={promo.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-3 rounded-lg text-center transition-all border ${
                idx === activeIndex
                  ? "bg-[#f8efdc] text-[#273e2a] border-[#f8efdc] shadow-md font-semibold"
                  : "bg-black/10 hover:bg-black/20 text-[#f8efdc] border-white/10"
              }`}
            >
              <p className="text-xs uppercase tracking-wider truncate font-medium">
                {promo.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
