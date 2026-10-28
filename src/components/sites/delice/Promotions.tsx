"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface Promotion {
  id: string;
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  timingFr: string;
  timingEn: string;
  image: string;
  bgColor: string;
}

const PROMOTIONS: Promotion[] = [
  {
    id: "happy-hour",
    titleFr: "Happy Hour",
    titleEn: "Happy Hour",
    subtitleFr: "Vos fins d’après-midi, rehaussées.",
    subtitleEn: "Your late afternoons, elevated.",
    timingFr: "Tous les jours de 14 h à 18 h.",
    timingEn: "Every day from 2 p.m. to 6 p.m.",
    image: "/sites/delice/assets/c712d28a-a727-465e-a475-a4712d5c12ec.png",
    bgColor: "#75c2bd", // cyan-500
  },
  {
    id: "speciaux-midi",
    titleFr: "Spéciaux du midi",
    titleEn: "Lunch Specials",
    subtitleFr: "Pause lunch, à petit prix.",
    subtitleEn: "Lunch break, at friendly prices.",
    timingFr: "Tous les jours de 11 h à 15 h.",
    timingEn: "Every day from 11 a.m. to 3 p.m.",
    image: "/sites/delice/assets/dscf5210.png",
    bgColor: "#91964f", // secondary-500 (olive)
  },
  {
    id: "fish-chips",
    titleFr: "Fish & Chips",
    titleEn: "Fish & Chips",
    subtitleFr: "Croustillant, doré, irrésistible.",
    subtitleEn: "Crisp, golden, irresistible.",
    timingFr: "Tous les mardis de 11 h à 22 h.",
    timingEn: "Every Tuesday from 11 a.m. to 10 p.m.",
    image: "/sites/delice/assets/dscf5208-1-2560x2560.png",
    bgColor: "#263150", // blue-500
  },
  {
    id: "mecredelice",
    titleFr: "Mecredélice",
    titleEn: "Pizza Wednesday",
    subtitleFr: "Le mercredi, on pense pizza.",
    subtitleEn: "Wednesdays are made for pizza.",
    timingFr: "20 % de rabais en livraison et pour emporter.",
    timingEn: "20% off for takeout and delivery.",
    image: "/sites/delice/assets/dscf5221.png",
    bgColor: "#e58833", // orange-500
  },
  {
    id: "moules-frites",
    titleFr: "Moules & frites à volonté",
    titleEn: "All-You-Can-Eat Mussels & Fries",
    subtitleFr: "À déguster sans modération.",
    subtitleEn: "Enjoy without limits.",
    timingFr: "Tous les mercredis de 16 h à 22 h.",
    timingEn: "Every Wednesday from 4 p.m. to 10 p.m.",
    image: "/sites/delice/assets/creation-sans-titre-6-1.png",
    bgColor: "#91964f", // secondary-500
  },
  {
    id: "vin-moitie-prix",
    titleFr: "Vin à 1/2 prix",
    titleEn: "Half-Price Wine",
    subtitleFr: "Célébrez l'arrivée de la fin de semaine.",
    subtitleEn: "Toast to the approaching weekend.",
    timingFr: "Tous les jeudis dès 11 h.",
    timingEn: "Every Thursday starting at 11 a.m.",
    image: "/sites/delice/assets/icoeua9hcrg8y02p2mir4jnspyzzq1sgw89zhpfidav2zxed.png",
    bgColor: "#7c2627", // primary-900
  },
];

export function Promotions() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? PROMOTIONS.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === PROMOTIONS.length - 1 ? 0 : i + 1));
  };

  const current = PROMOTIONS[currentIndex];

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-28 transition-colors duration-700" style={{ backgroundColor: current.bgColor }}>
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 border-b border-[#f8efdc]/30 pb-6 text-[#f8efdc]">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold opacity-80 block mb-2">
              {t("Plaisirs quotidiens", "Daily Highlights")}
            </span>
            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              {t("Plaisirs du jour", "Daily Pleasures")}
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#f8efdc]/40 flex items-center justify-center text-[#f8efdc] hover:bg-[#f8efdc] hover:text-[#273e2a] transition-all cursor-pointer"
              aria-label="Promotion précédente"
            >
              &larr;
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#f8efdc]/40 flex items-center justify-center text-[#f8efdc] hover:bg-[#f8efdc] hover:text-[#273e2a] transition-all cursor-pointer"
              aria-label="Promotion suivante"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-[#f8efdc]">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#f8efdc]/20 border border-[#f8efdc]/30">
                {language === "en" ? current.timingEn : current.timingFr}
              </span>
            </div>

            <h3 className="font-ivy text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              {language === "en" ? current.titleEn : current.titleFr}
            </h3>

            <p className="font-filson text-lg md:text-xl text-[#f8efdc]/90 mb-8 max-w-lg">
              {language === "en" ? current.subtitleEn : current.subtitleFr}
            </p>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {PROMOTIONS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-8 bg-[#f8efdc]" : "w-2 bg-[#f8efdc]/40"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Floating Cutout Dish Media */}
          <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] drop-shadow-2xl transition-all duration-700 transform hover:scale-105">
              <Image
                src={current.image}
                alt={language === "en" ? current.titleEn : current.titleFr}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 288px, 448px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
