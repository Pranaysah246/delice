"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Atmosphere() {
  return (
    <section
      id="restaurant"
      className="relative w-full bg-[#7c2627] text-[#f8efdc] overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-[120rem] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#f8efdc]/20 pb-10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f8efdc]/70 mb-3 block">
              Le restaurant
            </span>
            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#f8efdc]">
              Un classique à Lévis depuis 1970!
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-filson text-sm sm:text-base text-[#f8efdc]/85 leading-relaxed mb-6">
              Fondée sur la Côte du Passage, le Délice Resto Lounge est une
              institution. Avec ses plats savoureux, ses ambiances distinctes et
              sa terrasse unique sur le toit, nous offrons une expérience culinaire
              et festive qui évolue sans cesse pour surprendre et ravir nos
              invités.
            </p>
            <Link
              href="https://delice.ca/restaurant/"
              target="_blank"
              className="inline-block px-8 py-3.5 bg-[#f8efdc] text-[#7c2627] hover:bg-white text-xs md:text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f8efdc]/10">
            <Image
              src="/sites/delice/assets/dscf5672-2560x1920.jpg"
              alt="Terrasse et salle Délice"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          <div className="md:col-span-4 relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f8efdc]/10">
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
