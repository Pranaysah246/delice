"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatItem {
  number: string;
  labelFr: string;
  labelEn: string;
}

const STATS: StatItem[] = [
  { number: "160", labelFr: "Passionnés dans l’équipe", labelEn: "Passionate team members" },
  { number: "1970", labelFr: "Année de fondation", labelEn: "Year of foundation" },
  { number: "500", labelFr: "Places en intérieur", labelEn: "Indoor dining seats" },
  { number: "300", labelFr: "Places en terrasse", labelEn: "Rooftop terrace seats" },
];

export function Statistics() {
  const { language, t } = useLanguage();

  return (
    <section className="relative w-full bg-[#f8efdc] text-[#de2b2b] overflow-hidden py-16 md:py-28">
      {/* Wave shape decoration */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40">
        <Image
          src="/sites/delice/assets/statistics-shape.svg"
          alt=""
          width={1440}
          height={320}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-[120rem] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] mb-2 block">
            {t("Notre histoire", "Our Story")}
          </span>
          <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#de2b2b]">
            {t(
              "Plus de 50 ans de passion et de fête",
              "Over 50 Years of Passion & Festivity"
            )}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Media Card */}
          <div className="md:col-span-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-[#de2b2b]/10">
              <Image
                src="/sites/delice/assets/dscf5189-2560x1920.jpg"
                alt="Ambiance restaurant Délice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>

          {/* Center 4 Stamps Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-white/60 border border-[#de2b2b]/20 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="font-ivy text-4xl sm:text-5xl lg:text-6xl font-bold text-[#de2b2b] mb-2">
                  {stat.number}
                </span>
                <span className="font-filson text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7c2627]">
                  {language === "en" ? stat.labelEn : stat.labelFr}
                </span>
              </div>
            ))}
          </div>

          {/* Right Media Card */}
          <div className="md:col-span-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-[#de2b2b]/10">
              <Image
                src="/sites/delice/assets/dscf5821-2560x3413.jpg"
                alt="Équipe Délice Resto Lounge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
