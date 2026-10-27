"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Callout() {
  return (
    <section
      id="menus"
      className="relative w-full bg-[#de2b2b] text-[#f8efdc] overflow-hidden py-24 md:py-36"
    >
      {/* Floating circular photos */}
      <div className="absolute inset-0 pointer-events-none max-w-[120rem] mx-auto overflow-hidden">
        {/* Circle 1 - Top Left */}
        <div className="absolute -top-6 -left-6 md:top-8 md:left-8 w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[#de2b2b]/50">
          <Image
            src="/sites/delice/assets/l1070049-2560x1708.jpg"
            alt="Plat Délice"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 176px, 288px"
          />
        </div>

        {/* Circle 2 - Top Right */}
        <div className="absolute top-12 right-2 md:top-16 md:right-16 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-[#de2b2b]/50">
          <Image
            src="/sites/delice/assets/dscf5585-2560x3413.jpg"
            alt="Cocktail signature"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 224px"
          />
        </div>

        {/* Circle 3 - Bottom Left */}
        <div className="absolute bottom-8 left-4 md:bottom-16 md:left-24 w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-4 border-[#de2b2b]/50">
          <Image
            src="/sites/delice/assets/dscf5839-2560x3413.jpg"
            alt="Déjeuner Délice"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 112px, 192px"
          />
        </div>

        {/* Circle 4 - Bottom Right */}
        <div className="absolute -bottom-6 right-2 md:bottom-12 md:right-32 w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-[#de2b2b]/50">
          <Image
            src="/sites/delice/assets/dscf4945-2560x3413.jpg"
            alt="Repas gourmand"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 144px, 240px"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#f8efdc]/80 mb-4">
          Les menus
        </span>

        <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#f8efdc] mb-6">
          Un choix pour tous les goûts
        </h2>

        <p className="font-filson text-base md:text-lg text-[#f8efdc]/85 leading-relaxed max-w-xl mb-10">
          Des saveurs du monde, des ingrédients frais, et des plats pensés pour vous
          régaler. Pour les lève-tôt, nos déjeuners Délice vous attendent fruités,
          variés et colorés.
        </p>

        <Link
          href="https://delice.ca/les-menus/"
          target="_blank"
          className="inline-block px-8 py-3.5 bg-[#f8efdc] text-[#de2b2b] hover:bg-white text-xs md:text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Découvrir nos menus
        </Link>
      </div>
    </section>
  );
}

