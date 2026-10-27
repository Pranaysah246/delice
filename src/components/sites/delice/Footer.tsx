"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DaySchedule {
  day: string;
  hours: { service: string; time: string }[];
}

const SCHEDULE: DaySchedule[] = [
  {
    day: "Lundi",
    hours: [
      { service: "Salle à manger", time: "Fermé" },
      { service: "Bar", time: "Fermé" },
      { service: "Déjeuner", time: "Fermé" },
      { service: "Happy Hour", time: "Fermé" },
      { service: "À emporter", time: "Fermé" },
      { service: "Livraison", time: "Fermé" },
    ],
  },
  {
    day: "Mardi",
    hours: [
      { service: "Salle à manger", time: "07h30 à 22h00" },
      { service: "Bar", time: "11h00 à 22h00" },
      { service: "Déjeuner", time: "07h30 à 14h00" },
      { service: "Happy Hour", time: "14h00 à 18h00" },
      { service: "À emporter", time: "10h00 à 22h00" },
      { service: "Livraison", time: "11h00 à 22h00" },
    ],
  },
  {
    day: "Mercredi",
    hours: [
      { service: "Salle à manger", time: "07h30 à 22h00" },
      { service: "Bar", time: "11h00 à 22h00" },
      { service: "Déjeuner", time: "07h30 à 14h00" },
      { service: "Happy Hour", time: "14h00 à 18h00" },
      { service: "À emporter", time: "10h00 à 22h00" },
      { service: "Livraison", time: "11h00 à 22h00" },
    ],
  },
  {
    day: "Jeudi",
    hours: [
      { service: "Salle à manger", time: "07h30 à 23h00" },
      { service: "Bar", time: "11h00 à 02h00" },
      { service: "Déjeuner", time: "07h30 à 14h00" },
      { service: "Happy Hour", time: "14h00 à 18h00" },
      { service: "À emporter", time: "10h00 à 23h00" },
      { service: "Livraison", time: "11h00 à 23h00" },
    ],
  },
  {
    day: "Vendredi",
    hours: [
      { service: "Salle à manger", time: "07h30 à 23h00" },
      { service: "Bar", time: "11h00 à 02h00" },
      { service: "Déjeuner", time: "07h30 à 14h00" },
      { service: "Happy Hour", time: "14h00 à 18h00" },
      { service: "À emporter", time: "10h00 à 23h00" },
      { service: "Livraison", time: "11h00 à 23h00" },
    ],
  },
  {
    day: "Samedi",
    hours: [
      { service: "Salle à manger", time: "08h00 à 23h00" },
      { service: "Bar", time: "11h00 à 02h00" },
      { service: "Déjeuner", time: "08h00 à 15h00" },
      { service: "Happy Hour", time: "14h00 à 18h00" },
      { service: "À emporter", time: "10h00 à 23h00" },
      { service: "Livraison", time: "11h00 à 23h00" },
    ],
  },
  {
    day: "Dimanche",
    hours: [
      { service: "Salle à manger", time: "08h00 à 21h00" },
      { service: "Bar", time: "11h00 à 22h00" },
      { service: "Déjeuner", time: "08h00 à 15h00" },
      { service: "Happy Hour", time: "14h00 à 18h00" },
      { service: "À emporter", time: "10h00 à 23h00" },
      { service: "Livraison", time: "11h00 à 23h00" },
    ],
  },
];

export function Footer() {
  const [activeDayIndex, setActiveDayIndex] = useState(1); // default Tuesday / Mardi

  const currentDay = SCHEDULE[activeDayIndex];

  return (
    <footer className="relative w-full bg-[#f8efdc] text-[#de2b2b] overflow-hidden pt-16 md:pt-24 pb-12 border-t border-[#de2b2b]/20">
      <div className="max-w-[120rem] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Schedule Card */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#de2b2b]/15 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-[#de2b2b]/30 flex-1" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627]">
                Horaires
              </span>
              <div className="h-px bg-[#de2b2b]/30 flex-1" />
            </div>

            {/* Day Selector */}
            <div className="flex items-center justify-between mb-6 border-b border-[#de2b2b]/15 pb-4">
              <button
                onClick={() =>
                  setActiveDayIndex((prev) =>
                    prev === 0 ? SCHEDULE.length - 1 : prev - 1
                  )
                }
                className="w-8 h-8 rounded-full border border-[#de2b2b]/30 hover:bg-[#de2b2b] hover:text-[#f8efdc] flex items-center justify-center text-sm transition-colors"
                aria-label="Jour précédent"
              >
                ←
              </button>

              <span className="font-ivy text-2xl font-semibold text-[#de2b2b]">
                {currentDay.day}
              </span>

              <button
                onClick={() =>
                  setActiveDayIndex((prev) =>
                    prev === SCHEDULE.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-8 h-8 rounded-full border border-[#de2b2b]/30 hover:bg-[#de2b2b] hover:text-[#f8efdc] flex items-center justify-center text-sm transition-colors"
                aria-label="Jour suivant"
              >
                →
              </button>
            </div>

            {/* Schedule Table */}
            <div className="flex flex-col divide-y divide-[#de2b2b]/10 text-sm font-filson mb-4">
              {currentDay.hours.map((row, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between">
                  <span className="font-medium text-[#273e2a]">{row.service}</span>
                  <span
                    className={`font-semibold ${
                      row.time === "Fermé" ? "text-stone-400" : "text-[#de2b2b]"
                    }`}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#7c2627]/80 text-center italic mt-4">
              Veuillez vérifier les horaires sur Google en cas de jours fériés ou de
              périodes festives.
            </p>
          </div>

          {/* Right Column: Contact, Navigation & Socials */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] block mb-2">
                  Adresse
                </span>
                <a
                  href="https://maps.app.goo.gl/1EDA13JAa4m8kCnE6"
                  target="_blank"
                  rel="noreferrer"
                  className="font-filson text-sm text-[#de2b2b] hover:text-[#7c2627] leading-relaxed block transition-colors"
                >
                  146 route du Président Kennedy
                  <br />
                  Lévis, QC, G6V 6C9
                </a>
              </div>

              {/* Phone */}
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] block mb-2">
                  Téléphone
                </span>
                <a
                  href="tel:+14188332221"
                  className="font-filson text-base font-semibold text-[#de2b2b] hover:text-[#7c2627] transition-colors"
                >
                  (418) 833-2221
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] block mb-2">
                  Courriel
                </span>
                <a
                  href="mailto:resto@delice.ca"
                  className="font-filson text-sm font-semibold text-[#de2b2b] hover:text-[#7c2627] transition-colors"
                >
                  resto@delice.ca
                </a>
              </div>
            </div>

            {/* Links and Socials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#de2b2b]/20 pt-8 mb-12">
              <nav className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="font-ivy text-xl text-[#de2b2b] hover:text-[#7c2627] transition-colors"
                >
                  Accueil
                </Link>
                <Link
                  href="#menus"
                  className="font-ivy text-xl text-[#de2b2b] hover:text-[#7c2627] transition-colors"
                >
                  Les menus
                </Link>
                <Link
                  href="#restaurant"
                  className="font-ivy text-xl text-[#de2b2b] hover:text-[#7c2627] transition-colors"
                >
                  Le restaurant
                </Link>
                <Link
                  href="#programmation"
                  className="font-ivy text-xl text-[#de2b2b] hover:text-[#7c2627] transition-colors"
                >
                  Programmation
                </Link>
                <Link
                  href="#salons-prives"
                  className="font-ivy text-xl text-[#de2b2b] hover:text-[#7c2627] transition-colors"
                >
                  Salons privés
                </Link>
              </nav>

              <div className="flex flex-col justify-between gap-6">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/DeliceRestolounge/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#de2b2b] text-[#de2b2b] hover:bg-[#de2b2b] hover:text-[#f8efdc] flex items-center justify-center font-bold transition-colors"
                    aria-label="Facebook"
                  >
                    f
                  </a>
                  <a
                    href="https://www.instagram.com/delicerestolounge/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#de2b2b] text-[#de2b2b] hover:bg-[#de2b2b] hover:text-[#f8efdc] flex items-center justify-center font-bold transition-colors"
                    aria-label="Instagram"
                  >
                    ig
                  </a>
                </div>

                <div>
                  <Link
                    href="https://delice.ca/politique-de-confidentialite/"
                    target="_blank"
                    className="text-xs text-[#7c2627] hover:underline block mb-2"
                  >
                    Politique de confidentialité
                  </Link>
                  <p className="text-xs text-[#7c2627]/80">
                    © 2026 Délice Resto Lounge. Tous droits réservés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Corner Shape */}
      <div className="absolute -bottom-10 right-0 pointer-events-none w-48 md:w-72 opacity-30">
        <Image
          src="/sites/delice/assets/footer-shape-bottom-right.svg"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}

