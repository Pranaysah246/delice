"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface EventShow {
  id: string;
  artist: string;
  genreFr: string;
  genreEn: string;
  dateFr: string;
  dateEn: string;
  time: string;
  descFr: string;
  descEn: string;
  image: string;
}

const EVENTS: EventShow[] = [
  {
    id: "the-groove",
    artist: "The Groove",
    genreFr: "Rock & Funk",
    genreEn: "Rock & Funk",
    dateFr: "Vendredi 06 novembre",
    dateEn: "Friday, Nov 6",
    time: "21h30",
    descFr: "Les plus grands classiques du rock et funk interprétés en live avec une énergie communicative.",
    descEn: "Timeless rock and funk anthems performed live with electrifying stage energy.",
    image: "/sites/delice/assets/the-groove.jpg",
  },
  {
    id: "alexis-bouchard",
    artist: "Alexis Bouchard-Leblond",
    genreFr: "Chansonnier Country",
    genreEn: "Acoustic Country",
    dateFr: "Vendredi 13 novembre",
    dateEn: "Friday, Nov 13",
    time: "21h30",
    descFr: "Soirée acoustique chaleureuse, succès country-folk américains et québécois pour chanter à pleins poumons.",
    descEn: "Cozy acoustic night with beloved American and Quebec country-folk hits to sing along to.",
    image: "/sites/delice/assets/alexandre-2.jpg",
  },
  {
    id: "time-machine",
    artist: "Time Machine",
    genreFr: "Rock classique 70s-80s",
    genreEn: "Classic Rock 70s-80s",
    dateFr: "Vendredi 27 novembre",
    dateEn: "Friday, Nov 27",
    time: "21h30",
    descFr: "Voyage à travers les décennies dorées du rock : Queen, Led Zeppelin, Journey et bien d'autres.",
    descEn: "Musical journey through the golden decades of rock: Queen, Led Zeppelin, Journey and more.",
    image: "/sites/delice/assets/time-machine.jpg",
  },
  {
    id: "flashback",
    artist: "Flashback",
    genreFr: "Pop 80s & Disco",
    genreEn: "80s Pop & Disco",
    dateFr: "Vendredi 04 décembre",
    dateEn: "Friday, Dec 4",
    time: "21h30",
    descFr: "Les rythmes endiablés des années 80 pour danser toute la soirée sous les projecteurs du Délice.",
    descEn: "Non-stop 80s dance beats and disco rhythms to keep you moving all night long.",
    image: "/sites/delice/assets/flashback.jpg",
  },
  {
    id: "les-snoro",
    artist: "Les Snoro",
    genreFr: "Chansonnier Rock",
    genreEn: "Rock Duo",
    dateFr: "Samedi 05 décembre",
    dateEn: "Saturday, Dec 5",
    time: "21h30",
    descFr: "Duo complice et festif qui revisite les hymnes québécois et internationaux avec humour et dynamisme.",
    descEn: "Festive duo bringing high energy and humor to Quebec and international crowd favorites.",
    image: "/sites/delice/assets/les-snoro.jpg",
  },
  {
    id: "electric-groove",
    artist: "Electric Groove",
    genreFr: "Pop-Disco & R&B",
    genreEn: "Pop-Disco & R&B",
    dateFr: "Vendredi 11 décembre",
    dateEn: "Friday, Dec 11",
    time: "21h30",
    descFr: "Formule live explosive aux sonorités modernes, funk et pop pour enflammer la piste du lounge.",
    descEn: "Explosive live lineup blending modern funk, pop, and R&B to set the lounge dancefloor on fire.",
    image: "/sites/delice/assets/electric-groove.jpg",
  },
];

export function Events() {
  const { language, t } = useLanguage();
  const [filterGenre, setFilterGenre] = useState<string>("Tous");
  const [bookedShow, setBookedShow] = useState<string | null>(null);

  const genres = [
    { id: "Tous", labelFr: "Tous les spectacles", labelEn: "All Shows" },
    { id: "Rock", labelFr: "Rock", labelEn: "Rock" },
    { id: "Country", labelFr: "Country", labelEn: "Country" },
    { id: "80s", labelFr: "Années 80", labelEn: "80s Hits" },
    { id: "Pop", labelFr: "Pop-Disco", labelEn: "Pop-Disco" },
  ];

  const filtered =
    filterGenre === "Tous"
      ? EVENTS
      : EVENTS.filter((e) =>
          e.genreFr.toLowerCase().includes(filterGenre.toLowerCase()) ||
          e.genreEn.toLowerCase().includes(filterGenre.toLowerCase())
        );

  return (
    <section
      id="programmation"
      className="scroll-mt-24 relative w-full bg-[#f8efdc] text-[#de2b2b] py-16 md:py-28"
    >
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#de2b2b]/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#7c2627] mb-2 block">
              {t("Spectacles live", "Live Shows")}
            </span>
            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#de2b2b]">
              {t("Événements et spectacles", "Events & Live Shows")}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-filson text-sm sm:text-base text-[#7c2627] leading-relaxed mb-4">
              {t(
                "Des soirées festives où la musique prend vie. Profitez de nos chansonniers et groupes en direct tous les vendredis et samedis dès 21 h 30.",
                "Festive evenings where live music takes center stage. Enjoy talented acoustic performers and full bands every Friday and Saturday from 9:30 p.m."
              )}
            </p>
            <a
              href="tel:+14188332221"
              className="inline-block text-xs uppercase font-bold tracking-wider text-[#de2b2b] hover:text-[#7c2627] underline"
            >
              {t(
                "Réserver pour un spectacle : (418) 833-2221",
                "Reserve for a Show: (418) 833-2221"
              )}
            </a>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {genres.map((g) => {
            const isSelected = filterGenre === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setFilterGenre(g.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-[#de2b2b] text-[#f8efdc] shadow-md"
                    : "bg-[#de2b2b]/10 text-[#de2b2b] hover:bg-[#de2b2b]/20"
                }`}
              >
                {language === "en" ? g.labelEn : g.labelFr}
              </button>
            );
          })}
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white/70 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#de2b2b]/15 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.artist}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-[#de2b2b] text-[#f8efdc] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md">
                  {language === "en" ? item.genreEn : item.genreFr}
                </span>
                <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {item.time}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-bold text-[#7c2627] tracking-wider mb-1">
                    {language === "en" ? item.dateEn : item.dateFr}
                  </div>
                  <h3 className="font-ivy text-2xl font-bold text-[#de2b2b] mb-2 group-hover:text-[#7c2627] transition-colors">
                    {item.artist}
                  </h3>
                  <p className="font-filson text-xs text-[#7c2627]/90 leading-relaxed mb-4">
                    {language === "en" ? item.descEn : item.descFr}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#de2b2b]/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#273e2a]">
                    {t("Entrée libre", "Free Admission")}
                  </span>
                  <button
                    type="button"
                    onClick={() => setBookedShow(item.artist)}
                    className="px-4 py-2 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] rounded-full text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                  >
                    {t("Réserver une table", "Book Table")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking confirmation notice */}
      {bookedShow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setBookedShow(null)}
        >
          <div
            className="bg-[#f8efdc] text-[#273e2a] rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#de2b2b]/20 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-ivy text-3xl font-bold text-[#de2b2b] mb-2">
              {t("Réservation pour", "Reservation for")} {bookedShow}
            </h4>
            <p className="font-filson text-sm mb-6 text-[#7c2627]">
              {t(
                "Pour assurer les meilleures places en salle pour ce spectacle, contactez-nous directement par téléphone ou en ligne :",
                "To secure the best seating for this live show, please contact our team directly by phone or reserve online:"
              )}
            </p>
            <div className="space-y-3">
              <a
                href="tel:+14188332221"
                className="block w-full py-3 bg-[#de2b2b] text-[#f8efdc] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#7c2627] transition-all"
              >
                (418) 833-2221
              </a>
              <button
                type="button"
                onClick={() => setBookedShow(null)}
                className="block w-full py-2.5 border border-[#273e2a]/30 text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-black/5"
              >
                {t("Fermer", "Close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
