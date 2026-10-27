"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface EventShow {
  id: string;
  artist: string;
  genre: string;
  date: string;
  time: string;
  image: string;
}

const EVENTS: EventShow[] = [
  {
    id: "the-groove",
    artist: "The Groove",
    genre: "Rock",
    date: "06 novembre",
    time: "21h30",
    image: "/sites/delice/assets/the-groove.jpg",
  },
  {
    id: "alexis-bouchard",
    artist: "Alexis Bouchard-Leblond",
    genre: "Country",
    date: "13 novembre",
    time: "21h30",
    image: "/sites/delice/assets/alexandre-2.jpg",
  },
  {
    id: "time-machine",
    artist: "Time Machine",
    genre: "Rock classique",
    date: "27 novembre",
    time: "21h30",
    image: "/sites/delice/assets/time-machine.jpg",
  },
  {
    id: "flashback",
    artist: "Flashback",
    genre: "80s",
    date: "04 décembre",
    time: "21h30",
    image: "/sites/delice/assets/flashback.jpg",
  },
  {
    id: "les-snoro",
    artist: "Les Snoro",
    genre: "Rock classique",
    date: "05 décembre",
    time: "21h30",
    image: "/sites/delice/assets/les-snoro.jpg",
  },
  {
    id: "electric-groove",
    artist: "Electric Groove",
    genre: "Pop-Disco",
    date: "11 décembre",
    time: "21h30",
    image: "/sites/delice/assets/electric-groove.jpg",
  },
];

export function Events() {
  const [filterGenre, setFilterGenre] = useState<string>("Tous");

  const genres = ["Tous", "Rock", "Country", "80s", "Pop-Disco"];

  const filtered =
    filterGenre === "Tous"
      ? EVENTS
      : EVENTS.filter((e) =>
          filterGenre === "Rock"
            ? e.genre.includes("Rock")
            : e.genre === filterGenre
        );

  return (
    <section
      id="programmation"
      className="relative w-full bg-[#f8efdc] text-[#de2b2b] py-16 md:py-28"
    >
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#de2b2b]/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] mb-2 block">
              Spectacles
            </span>
            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#de2b2b]">
              Événements et spectacles
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-filson text-sm sm:text-base text-[#7c2627] leading-relaxed mb-4">
              Des soirées festives où la musique prend vie. Profitez de nos bands
              live et DJ tous les week-ends.
            </p>
            <Link
              href="https://delice.ca/programmation/"
              target="_blank"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#de2b2b] hover:text-[#7c2627] transition-colors"
            >
              Voir toute la programmation →
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setFilterGenre(g)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                filterGenre === g
                  ? "bg-[#de2b2b] text-[#f8efdc] shadow"
                  : "bg-[#de2b2b]/10 text-[#de2b2b] hover:bg-[#de2b2b]/20"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#de2b2b]/10 flex flex-col group"
            >
              {/* Event Card Header */}
              <div className="p-5 flex items-start justify-between border-b border-[#de2b2b]/10 bg-[#f8efdc]/40">
                <div>
                  <h3 className="font-ivy text-xl sm:text-2xl font-semibold text-[#de2b2b] group-hover:text-[#7c2627] transition-colors">
                    {item.artist}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-medium text-[#7c2627]/80 mt-1">
                    {item.genre}
                  </p>
                </div>
              </div>

              {/* Event Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.artist}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Event Card Footer */}
              <div className="p-5 mt-auto flex items-center justify-between bg-white text-xs uppercase font-medium">
                <div>
                  <span className="block text-[10px] text-[#7c2627]/70">Date</span>
                  <span className="text-sm font-semibold text-[#de2b2b]">
                    {item.date}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-[#7c2627]/70">Heure</span>
                  <span className="text-sm font-semibold text-[#de2b2b]">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
