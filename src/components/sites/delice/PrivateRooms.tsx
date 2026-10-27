"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function PrivateRooms() {
  return (
    <section
      id="salons-prives"
      className="relative w-full bg-[#273e2a] text-[#f8efdc] overflow-hidden py-20 md:py-32"
    >
      {/* Decorative SVG Shapes */}
      <div className="absolute top-0 right-0 pointer-events-none w-48 md:w-80">
        <Image
          src="/sites/delice/assets/media-text-s2-shape-top-right.svg"
          alt=""
          width={320}
          height={320}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none w-48 md:w-80">
        <Image
          src="/sites/delice/assets/media-text-s2-shape-bottom-left.svg"
          alt=""
          width={320}
          height={320}
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[120rem] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f8efdc]/70 mb-3">
              Salons privés
            </span>

            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#f8efdc] mb-6">
              Célébrez en grand dans nos espaces intimes
            </h2>

            <p className="font-filson text-base md:text-lg text-[#f8efdc]/80 leading-relaxed mb-8">
              Idéales pour toutes vos occasions, quelle que soit leur taille. Ici,
              vous êtes chez vous : l’endroit parfait pour se retrouver en toute
              tranquillité.
            </p>

            <Link
              href="https://delice.ca/salons-prives/"
              target="_blank"
              className="inline-block px-8 py-3.5 bg-[#f8efdc] text-[#273e2a] hover:bg-white text-xs md:text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              En savoir plus
            </Link>
          </div>

          {/* Media Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f8efdc]/10">
              <Image
                src="/sites/delice/assets/dscf5928-2560x3413.jpg"
                alt="Salons privés Délice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
