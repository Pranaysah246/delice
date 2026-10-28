"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Atmosphere() {
  const { language, t } = useLanguage();
  const [activeAmbiance, setActiveAmbiance] = useState<number>(0);

  const ambiances = [
    {
      titleFr: "Le Resto",
      titleEn: "The Restaurant",
      descFr:
        "Une salle à manger lumineuse et chaleureuse pour savourer nos déjeuners généreux, nos dîners d'affaires ou un souper en famille aux saveurs du terroir québécois.",
      descEn:
        "A bright, inviting dining room perfect for generous breakfasts, business lunches, or family dinners celebrating local Quebec flavors.",
      image: "/sites/delice/assets/dscf5672-2560x1920.jpg",
      badgeFr: "Salle à manger principale",
      badgeEn: "Main Dining Room",
    },
    {
      titleFr: "Le Lounge",
      titleEn: "The Lounge",
      descFr:
        "Un bar chic et animé avec nos barmen experts, cocktails d'auteur, carte des vins soignée et ambiance festive qui monte en soirée avec nos chansonniers et DJ.",
      descEn:
        "A chic, vibrant bar area featuring master mixologists, signature cocktails, curated wines, and an energetic nightlife vibe with live music and DJs.",
      image: "/sites/delice/assets/dscf5754-2560x3413.jpg",
      badgeFr: "Bar & Mixologie",
      badgeEn: "Bar & Mixology",
    },
    {
      titleFr: "La Terrasse",
      titleEn: "The Rooftop Terrace",
      descFr:
        "Notre terrasse panoramique chauffée sur le toit, l'une des plus belles de la rive sud de Québec, ouverte dès les premiers beaux jours pour vos 5 à 7 inoubliables.",
      descEn:
        "Our heated rooftop panoramic terrace, one of the South Shore's premier outdoor destinations, open in season for unforgettable sunset happy hours.",
      image: "/sites/delice/assets/dscf5189-2560x1920.jpg",
      badgeFr: "Toit panoramique",
      badgeEn: "Panoramic Rooftop",
    },
  ];

  return (
    <section
      id="restaurant"
      className="scroll-mt-24 relative w-full bg-[#7c2627] text-[#f8efdc] overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-[120rem] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#f8efdc]/20 pb-10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f8efdc]/70 mb-3 block">
              {t("Le restaurant", "The Restaurant")}
            </span>
            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#f8efdc]">
              {t(
                "Un classique à Lévis depuis 1970!",
                "A Lévis Classic Since 1970!"
              )}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-filson text-sm sm:text-base text-[#f8efdc]/85 leading-relaxed mb-6">
              {t(
                "Fondé sur la Côte du Passage, le Délice Resto Lounge est une institution. Avec ses plats savoureux, ses ambiances distinctes et sa terrasse unique sur le toit, nous offrons une expérience culinaire et festive qui évolue sans cesse pour surprendre et ravir nos invités.",
                "Founded on Côte du Passage, Délice Resto Lounge is a true culinary landmark. With flavorful cuisine, distinct atmospheres, and a unique rooftop terrace, we offer an evolving festive and dining experience to enchant our guests."
              )}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:+14188332221"
                className="inline-block px-7 py-3 bg-[#f8efdc] text-[#7c2627] hover:bg-white text-xs md:text-sm uppercase tracking-widest font-bold rounded-full shadow-lg transition-all duration-300"
              >
                {t("Réserver une table", "Reserve a Table")}
              </a>
            </div>
          </div>
        </div>

        {/* 3 Ambiances Interactive Selector */}
        <div className="mb-12">
          <h3 className="font-ivy text-2xl md:text-3xl font-semibold text-[#f8efdc] mb-6">
            {t(
              "Trois ambiances, une même destination",
              "Three Atmospheres, One Great Destination"
            )}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {ambiances.map((amb, idx) => {
              const isSelected = activeAmbiance === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveAmbiance(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#f8efdc] text-[#7c2627] border-white shadow-xl scale-[1.02]"
                      : "bg-[#f8efdc]/10 text-[#f8efdc] border-[#f8efdc]/20 hover:bg-[#f8efdc]/20"
                  }`}
                >
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-3 ${
                      isSelected
                        ? "bg-[#7c2627] text-[#f8efdc]"
                        : "bg-[#f8efdc]/20 text-[#f8efdc]"
                    }`}
                  >
                    {language === "en" ? amb.badgeEn : amb.badgeFr}
                  </span>
                  <h4 className="font-ivy text-xl md:text-2xl font-bold mb-2">
                    {language === "en" ? amb.titleEn : amb.titleFr}
                  </h4>
                  <p className="font-filson text-xs md:text-sm leading-relaxed opacity-90">
                    {language === "en" ? amb.descEn : amb.descFr}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f8efdc]/15 transition-all duration-500">
            <Image
              src={ambiances[activeAmbiance].image}
              alt={
                language === "en"
                  ? ambiances[activeAmbiance].titleEn
                  : ambiances[activeAmbiance].titleFr
              }
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="font-ivy text-2xl md:text-3xl text-white font-bold drop-shadow-md">
                {language === "en"
                  ? ambiances[activeAmbiance].titleEn
                  : ambiances[activeAmbiance].titleFr}
              </span>
            </div>
          </div>

          <div className="md:col-span-4 relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f8efdc]/15">
            <Image
              src="/sites/delice/assets/dscf5754-2560x3413.jpg"
              alt="Bar et ambiance Délice"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave Shape */}
      <div className="w-full mt-12 pointer-events-none opacity-20">
        <Image
          src="/sites/delice/assets/medias-shape-bottom.svg"
          alt=""
          width={1440}
          height={160}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
