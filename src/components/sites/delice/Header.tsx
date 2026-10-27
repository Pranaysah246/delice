"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderMessage {
  icon: string;
  title: string;
  desc: string;
}

const MESSAGES: HeaderMessage[] = [
  {
    icon: "/sites/delice/assets/cocktails-1.svg",
    title: "Happy Hour",
    desc: "Tous les jours de 14 h à 18 h.",
  },
  {
    icon: "/sites/delice/assets/egg.svg",
    title: "Spéciaux du midi",
    desc: "Tous les jours de 11 h à 15 h.",
  },
  {
    icon: "/sites/delice/assets/fish.svg",
    title: "Fish & Chips",
    desc: "Tous les mardis de 11 h à 22 h.",
  },
  {
    icon: "/sites/delice/assets/pizza.svg",
    title: "Mecredélice",
    desc: "20 % de rabais en livraison et pour emporter.",
  },
  {
    icon: "/sites/delice/assets/fish.svg",
    title: "Moules & frites à volonté",
    desc: "Tous les mercredis de 16 h à 22 h.",
  },
  {
    icon: "/sites/delice/assets/wine.svg",
    title: "Vin à 1/2 prix",
    desc: "Tous les jeudis dès 11 h.",
  },
];

export function Header() {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const msg = MESSAGES[currentMsgIndex];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8efdc] text-[#de2b2b]">
      {/* Top Banner */}
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-11 text-xs uppercase tracking-wider font-medium">
          <div className="flex items-center gap-2 overflow-hidden transition-all duration-500">
            <span className="relative w-4 h-4 shrink-0 flex items-center justify-center">
              <Image
                src={msg.icon}
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain brightness-0 filter"
                style={{
                  filter:
                    "invert(23%) sepia(87%) saturate(3475%) hue-rotate(346deg) brightness(91%) contrast(92%)",
                }}
              />
            </span>
            <span className="font-semibold text-[#de2b2b]">{msg.title}</span>
            <span className="w-1 h-1 rounded-full bg-[#de2b2b]" />
            <span className="text-[#de2b2b]/90 hidden sm:inline">{msg.desc}</span>
          </div>

          <Link
            href="https://delice.ca/en/"
            className="text-xs uppercase font-medium hover:opacity-75 transition-opacity"
          >
            English
          </Link>
        </div>

        <div className="c-double-rule text-[#de2b2b]" />
      </div>

      {/* Main Navigation */}
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Mobile English link */}
          <Link
            href="https://delice.ca/en/"
            className="md:hidden text-xs uppercase font-medium"
          >
            en
          </Link>

          {/* Left Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1">
            <Link
              href="#menus"
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors"
            >
              Les menus
            </Link>
            <Link
              href="#restaurant"
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors"
            >
              Le restaurant
            </Link>
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center p-2 group"
            aria-label="Accueil Délice"
          >
            <div className="w-28 md:w-36 h-10 relative flex items-center justify-center">
              <Image
                src="/sites/delice/assets/logo.svg"
                alt="Délice Resto Lounge"
                width={139}
                height={48}
                className="w-full h-auto object-contain filter"
                style={{
                  filter:
                    "invert(23%) sepia(87%) saturate(3475%) hue-rotate(346deg) brightness(91%) contrast(92%)",
                }}
                priority
              />
            </div>
          </Link>

          {/* Right Nav (Desktop) */}
          <nav className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1">
            <Link
              href="#programmation"
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors"
            >
              Programmation
            </Link>
            <Link
              href="#salons-prives"
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors"
            >
              Salons privés
            </Link>
          </nav>

          {/* Burger button (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#de2b2b] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#de2b2b] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#de2b2b] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[110px] bottom-0 bg-[#f8efdc] border-t border-[#de2b2b]/20 p-6 flex flex-col justify-between overflow-y-auto z-40">
          <nav className="flex flex-col gap-6 text-center py-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              Accueil
            </Link>
            <Link
              href="#menus"
              onClick={() => setMenuOpen(false)}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              Les menus
            </Link>
            <Link
              href="#restaurant"
              onClick={() => setMenuOpen(false)}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              Le restaurant
            </Link>
            <Link
              href="#programmation"
              onClick={() => setMenuOpen(false)}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              Programmation
            </Link>
            <Link
              href="#salons-prives"
              onClick={() => setMenuOpen(false)}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              Salons privés
            </Link>
          </nav>

          <div className="border-t border-[#de2b2b]/20 pt-6 text-center flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-[#7c2627]">
              146 route du Président Kennedy, Lévis
            </p>
            <p className="text-sm font-semibold text-[#de2b2b]">
              <a href="tel:+14188332221">(418) 833-2221</a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

