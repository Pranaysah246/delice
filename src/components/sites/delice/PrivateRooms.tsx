"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface PrivateRoom {
  id: string;
  name: string;
  capacityFr: string;
  capacityEn: string;
  size: string;
  descFr: string;
  descEn: string;
  featuresFr: string[];
  featuresEn: string[];
}

const ROOMS: PrivateRoom[] = [
  {
    id: "salon-1",
    name: "Salon 1",
    capacityFr: "16 à 40 personnes",
    capacityEn: "16 to 40 guests",
    size: "324 pi² / 30 m²",
    descFr:
      "Idéal pour les réunions corporatives, les présentations d'affaires ou les soupers intimes entre collègues.",
    descEn:
      "Ideal for corporate meetings, business presentations, or intimate dinners among colleagues.",
    featuresFr: [
      "Écran 4K 75 pouces avec connectique HDMI/AirPlay",
      "Système de sonorisation dédié",
      "Formule banquet ou cocktail dînatoire",
    ],
    featuresEn: [
      "75-inch 4K screen with HDMI/AirPlay",
      "Dedicated sound system",
      "Banquet or cocktail reception menus",
    ],
  },
  {
    id: "salon-2",
    name: "Salon 2",
    capacityFr: "16 à 30 personnes",
    capacityEn: "16 to 30 guests",
    size: "324 pi² / 30 m²",
    descFr:
      "Atmosphère feutrée et chaleureuse, parfait pour les célébrations d'anniversaire, fiançailles ou 5 à 7 privés.",
    descEn:
      "Warm and cozy ambiance, perfect for birthdays, engagement parties, or private happy hours.",
    featuresFr: [
      "Proximité immédiate du bar lounge",
      "Éclairage d'ambiance modulable",
      "Menu personnalisé par notre chef",
    ],
    featuresEn: [
      "Immediate proximity to lounge bar",
      "Dimmable mood lighting",
      "Personalized menu by our chef",
    ],
  },
  {
    id: "mezzanine",
    name: "La Mezzanine",
    capacityFr: "90 à 150 personnes",
    capacityEn: "90 to 150 guests",
    size: "1 275 pi² / 118 m²",
    descFr:
      "Notre espace événementiel d'envergure dominant la grande salle, avec bar privé dédié et piste de danse.",
    descEn:
      "Our premier large event space overlooking the main hall, with dedicated private bar and dance floor.",
    featuresFr: [
      "Bar privé complet avec barman dédié",
      "Régie de son et éclairage festif",
      "Vestiaire indépendant et salon d'accueil",
    ],
    featuresEn: [
      "Full private bar with dedicated mixologist",
      "Sound and dynamic lighting console",
      "Independent coat check and welcome lounge",
    ],
  },
  {
    id: "le-grenier",
    name: "Le Grenier",
    capacityFr: "20 à 80 personnes",
    capacityEn: "20 to 80 guests",
    size: "1 150 pi² / 107 m²",
    descFr:
      "Un cachet unique sous les combles avec poutres de bois apparentes, bar chaleureux et ambiance lounge.",
    descEn:
      "Unique architectural charm beneath cathedral wooden beams, cozy bar and chic lounge seating.",
    featuresFr: [
      "Poutres apparentes et décor chaleureux",
      "Système audiovisuel complet",
      "Idéal pour lancements et mariages intimes",
    ],
    featuresEn: [
      "Exposed wooden beams and rustic luxury",
      "Full audio-visual equipment",
      "Ideal for product launches and intimate weddings",
    ],
  },
];

export function PrivateRooms() {
  const { language, t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<string>("salon-1");
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeRoom = ROOMS.find((r) => r.id === selectedRoom) || ROOMS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
    }, 2500);
  };

  return (
    <section
      id="salons-prives"
      className="scroll-mt-24 relative w-full bg-[#273e2a] text-[#f8efdc] overflow-hidden py-20 md:py-32"
    >
      {/* Decorative SVG Shapes */}
      <div className="absolute top-0 right-0 pointer-events-none w-48 md:w-80 opacity-40">
        <Image
          src="/sites/delice/assets/media-text-s2-shape-top-right.svg"
          alt=""
          width={320}
          height={320}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none w-48 md:w-80 opacity-40">
        <Image
          src="/sites/delice/assets/media-text-s2-shape-bottom-left.svg"
          alt=""
          width={320}
          height={320}
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[120rem] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f8efdc]/70 mb-3 px-3 py-1 rounded-full border border-[#f8efdc]/30 bg-[#f8efdc]/10">
              {t("Salons privés & Événements", "Private Rooms & Events")}
            </span>

            <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#f8efdc] mb-6">
              {t(
                "Célébrez en grand dans nos espaces intimes",
                "Celebrate Big in Our Intimate Spaces"
              )}
            </h2>

            <p className="font-filson text-base md:text-lg text-[#f8efdc]/85 leading-relaxed mb-8">
              {t(
                "Idéaux pour toutes vos occasions, de 16 à 150 personnes. Réceptions corporatives, anniversaires, mariages intimes ou 5 à 7 festifs : nos 4 salons privés sont entièrement équipés et adaptables à vos besoins.",
                "Perfect for all your gatherings, from 16 to 150 guests. Corporate receptions, birthdays, intimate weddings, or festive happy hours: our 4 private rooms are fully equipped and tailored to your needs."
              )}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-8 py-3.5 bg-[#f8efdc] text-[#273e2a] hover:bg-white text-xs md:text-sm uppercase tracking-widest font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {t("Demande de réservation", "Request a Reservation")}
              </button>
              <a
                href="tel:+14188332221"
                className="px-6 py-3.5 border border-[#f8efdc]/40 text-[#f8efdc] hover:bg-[#f8efdc]/10 text-xs md:text-sm uppercase tracking-widest font-semibold rounded-full transition-all"
              >
                (418) 833-2221
              </a>
            </div>
          </div>

          {/* Media Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f8efdc]/15">
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

        {/* 4 Private Rooms Interactive Cards Grid */}
        <div className="pt-8 border-t border-[#f8efdc]/20">
          <h3 className="font-ivy text-2xl md:text-3xl font-semibold text-[#f8efdc] mb-8">
            {t("Nos 4 salons au choix", "Our 4 Private Lounges")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOMS.map((room) => {
              const isSelected = selectedRoom === room.id;
              return (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#f8efdc] text-[#273e2a] border-white shadow-2xl scale-[1.02]"
                      : "bg-[#f8efdc]/10 text-[#f8efdc] border-[#f8efdc]/20 hover:bg-[#f8efdc]/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-ivy text-2xl font-bold">{room.name}</h4>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#273e2a] text-[#f8efdc]"
                            : "bg-[#f8efdc]/20 text-[#f8efdc]"
                        }`}
                      >
                        {room.size}
                      </span>
                    </div>

                    <div
                      className={`text-sm font-semibold mb-3 ${
                        isSelected ? "text-[#7c2627]" : "text-[#f8efdc]/90"
                      }`}
                    >
                      {language === "en" ? room.capacityEn : room.capacityFr}
                    </div>

                    <p
                      className={`text-xs leading-relaxed mb-4 ${
                        isSelected ? "text-[#273e2a]/85" : "text-[#f8efdc]/80"
                      }`}
                    >
                      {language === "en" ? room.descEn : room.descFr}
                    </p>

                    <ul className="space-y-1.5 mb-6 text-xs">
                      {(language === "en"
                        ? room.featuresEn
                        : room.featuresFr
                      ).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRoom(room.id);
                      setModalOpen(true);
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#273e2a] text-[#f8efdc] hover:bg-[#1a2c1d]"
                        : "bg-[#f8efdc]/20 text-[#f8efdc] hover:bg-[#f8efdc] hover:text-[#273e2a]"
                    }`}
                  >
                    {t("Réserver ce salon", "Book this room")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reservation Inquiry Dialog */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-[#f8efdc] text-[#273e2a] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#273e2a]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-2xl font-bold text-[#273e2a] hover:opacity-60 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-[#273e2a]/10"
              aria-label="Fermer"
            >
              &times;
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-ivy text-3xl font-bold text-[#273e2a] mb-2">
                  {t("Demande reçue!", "Request Received!")}
                </h3>
                <p className="font-filson text-sm text-[#273e2a]/80">
                  {t(
                    "Notre coordonnateur d'événements communiquera avec vous sous 24 heures ouvrables.",
                    "Our event coordinator will contact you within 24 business hours."
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c2627]">
                    {t("Réservation événementielle", "Event Booking")}
                  </span>
                  <h3 className="font-ivy text-2xl md:text-3xl font-bold text-[#273e2a]">
                    {t("Réserver", "Book")} {activeRoom.name}
                  </h3>
                  <p className="font-filson text-xs text-[#273e2a]/70">
                    {language === "en" ? activeRoom.capacityEn : activeRoom.capacityFr} (
                    {activeRoom.size})
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#273e2a] mb-1">
                      {t("Nom complet", "Full Name")} *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Marie Tremblay"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-[#273e2a]/30 bg-white text-[#273e2a] focus:outline-none focus:ring-2 focus:ring-[#273e2a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#273e2a] mb-1">
                      {t("Téléphone", "Phone Number")} *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(418) 555-0123"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-[#273e2a]/30 bg-white text-[#273e2a] focus:outline-none focus:ring-2 focus:ring-[#273e2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#273e2a] mb-1">
                    {t("Courriel professionnel", "Email Address")} *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="marie@entreprise.ca"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-[#273e2a]/30 bg-white text-[#273e2a] focus:outline-none focus:ring-2 focus:ring-[#273e2a]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#273e2a] mb-1">
                      {t("Date souhaitée", "Desired Date")} *
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-[#273e2a]/30 bg-white text-[#273e2a] focus:outline-none focus:ring-2 focus:ring-[#273e2a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#273e2a] mb-1">
                      {t("Nombre d'invités", "Guest Count")} *
                    </label>
                    <input
                      required
                      type="number"
                      min={10}
                      max={150}
                      defaultValue={25}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-[#273e2a]/30 bg-white text-[#273e2a] focus:outline-none focus:ring-2 focus:ring-[#273e2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#273e2a] mb-1">
                    {t("Détails ou formule (optionnel)", "Notes / Requirements (Optional)")}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t(
                      "Type d'événement, besoins audiovisuels, allergies...",
                      "Event type, AV needs, dietary requirements..."
                    )}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-[#273e2a]/30 bg-white text-[#273e2a] focus:outline-none focus:ring-2 focus:ring-[#273e2a]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#273e2a] text-[#f8efdc] hover:bg-[#1b2b1d] text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  {t("Envoyer ma demande", "Submit My Request")}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
