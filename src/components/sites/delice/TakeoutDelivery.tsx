"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function TakeoutDelivery() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Card 1: Takeout / Delivery */}
        <Link
          href="https://web.isf.ca.payfacto.cloud/#/restodelice/orderType"
          target="_blank"
          className="group relative bg-[#de2b2b] text-[#f8efdc] py-20 px-6 sm:px-12 flex flex-col items-center justify-between min-h-[520px] transition-colors"
        >
          <div className="relative flex flex-col items-center justify-center my-auto">
            {/* Curved SVG Title */}
            <div className="w-64 h-32 sm:w-80 sm:h-36 -mb-6 relative flex items-center justify-center">
              <svg
                viewBox="0 0 360 140"
                className="w-full h-full overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="arcTakeout"
                    d="M 30, 110 A 150, 100 0 0, 1 330, 110"
                    fill="none"
                  />
                </defs>
                <text
                  className="font-ivy text-2xl sm:text-3xl font-semibold tracking-wider"
                  fill="#f8efdc"
                >
                  <textPath
                    href="#arcTakeout"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    À emporter ou en livraison
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Circle photo */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[#7c2627] p-4 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/sites/delice/assets/03.png"
                alt="Repas pour emporter Délice"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 208px, 256px"
              />
            </div>
          </div>

          <span className="mt-8 px-8 py-3.5 bg-[#f8efdc] text-[#de2b2b] group-hover:bg-white text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg transition-all duration-300">
            Commander en ligne
          </span>
        </Link>

        {/* Card 2: Gift Card */}
        <Link
          href="https://www.freebeespoints.com/fr/PointSale/Purchase/3880"
          target="_blank"
          className="group relative bg-[#91964f] text-[#f8efdc] py-20 px-6 sm:px-12 flex flex-col items-center justify-between min-h-[520px] transition-colors"
        >
          <div className="relative flex flex-col items-center justify-center my-auto">
            {/* Curved SVG Title */}
            <div className="w-64 h-32 sm:w-80 sm:h-36 -mb-6 relative flex items-center justify-center">
              <svg
                viewBox="0 0 360 140"
                className="w-full h-full overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="arcGiftcard"
                    d="M 30, 110 A 150, 100 0 0, 1 330, 110"
                    fill="none"
                  />
                </defs>
                <text
                  className="font-ivy text-2xl sm:text-3xl font-semibold tracking-wider"
                  fill="#f8efdc"
                >
                  <textPath
                    href="#arcGiftcard"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    Partagez l’expérience
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Circle photo */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[#273e2a] p-4 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/sites/delice/assets/delice_cartecadeau_mockup2.png"
                alt="Carte cadeau Délice"
                fill
                className="object-contain p-4"
                sizes="(max-width: 640px) 208px, 256px"
              />
            </div>
          </div>

          <span className="mt-8 px-8 py-3.5 bg-[#f8efdc] text-[#273e2a] group-hover:bg-white text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg transition-all duration-300">
            Acheter une carte cadeau
          </span>
        </Link>
      </div>
    </section>
  );
}
