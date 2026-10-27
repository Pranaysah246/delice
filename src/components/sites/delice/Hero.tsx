"use client";

import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-[#de2b2b] text-[#f8efdc] overflow-hidden pt-8 md:pt-16 pb-12 md:pb-24">
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text / Typography */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center">
            {/* Tagline Vector Typography */}
            <div className="w-full max-w-[528px] mb-6">
              <Image
                src="/sites/delice/assets/hero-tagline.svg"
                alt="Le restaurant lounge par excellence"
                width={528}
                height={312}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <h1 className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#f8efdc]/90 mb-2">
              Pizza Délice depuis 1970
            </h1>
            <p className="font-filson text-base md:text-lg text-[#f8efdc]/80 max-w-[48ch] leading-relaxed">
              Au cœur de Lévis, alliant chaleur, grandeur et convivialité dans une
              ambiance vibrante et accueillante.
            </p>
          </div>

          {/* Right Media (Arch Visual) */}
          <div className="lg:col-span-6 relative aspect-[1.1/1] w-full max-w-[680px] mx-auto lg:ml-auto">
            <div className="relative w-full h-full rounded-t-[14rem] overflow-hidden shadow-2xl">
              {/* Background Photo */}
              <Image
                src="/sites/delice/assets/full-scaled.jpg"
                alt="Ambiance Délice Resto Lounge"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Cutout Mask Layer */}
              <Image
                src="/sites/delice/assets/mask-scaled.png"
                alt=""
                fill
                className="object-cover object-center pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

