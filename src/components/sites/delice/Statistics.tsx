"use client";

import React from "react";
import Image from "next/image";

interface StatItem {
  number: string;
  label: string;
}

const STATS: StatItem[] = [
  { number: "160", label: "Passionnés dans l’équipe" },
  { number: "1970", label: "Année de fondation" },
  { number: "700", label: "Places en intérieur" },
  { number: "300", label: "Places en terrasse" },
];

export function Statistics() {
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
            Notre histoire
          </span>
          <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#de2b2b]">
            Plus de 50 ans de passion et de fête
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
                className="bg-[#de2b2b] text-[#f8efdc] rounded-full aspect-square flex flex-col items-center justify-center p-4 text-center shadow-lg transform hover:-translate-y-1 transition-transform"
              >
                <span className="font-ivy text-3xl sm:text-4xl lg:text-5xl font-bold leading-none mb-2">
                  {stat.number}
                </span>
                <span className="font-filson text-xs sm:text-sm font-medium tracking-wide max-w-[14ch] leading-tight text-[#f8efdc]/90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Media Card */}
          <div className="md:col-span-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-[#de2b2b]/10">
              <Image
                src="/sites/delice/assets/dscf5821-2560x3413.jpg"
                alt="Soirée festive au Délice"
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

