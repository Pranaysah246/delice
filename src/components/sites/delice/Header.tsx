"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeaderMessage {
  icon: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}

const MESSAGES: HeaderMessage[] = [
  {
    icon: "/sites/delice/assets/cocktails-1.svg",
    titleFr: "Happy Hour",
    titleEn: "Happy Hour",
    descFr: "Tous les jours de 14 h à 18 h.",
    descEn: "Every day from 2 p.m. to 6 p.m.",
  },
  {
    icon: "/sites/delice/assets/egg.svg",
    titleFr: "Spéciaux du midi",
    titleEn: "Lunch Specials",
    descFr: "Tous les jours de 11 h à 15 h.",
    descEn: "Every day from 11 a.m. to 3 p.m.",
  },
  {
    icon: "/sites/delice/assets/fish.svg",
    titleFr: "Fish & Chips",
    titleEn: "Fish & Chips",
    descFr: "Tous les mardis de 11 h à 22 h.",
    descEn: "Every Tuesday from 11 a.m. to 10 p.m.",
  },
  {
    icon: "/sites/delice/assets/pizza.svg",
    titleFr: "Mecredélice",
    titleEn: "Pizza Wednesday",
    descFr: "20 % de rabais en livraison et pour emporter.",
    descEn: "20% off for delivery and takeout.",
  },
  {
    icon: "/sites/delice/assets/fish.svg",
    titleFr: "Moules & frites à volonté",
    titleEn: "Unlimited Mussels & Fries",
    descFr: "Tous les mercredis de 16 h à 22 h.",
    descEn: "Every Wednesday from 4 p.m. to 10 p.m.",
  },
  {
    icon: "/sites/delice/assets/wine.svg",
    titleFr: "Vin à 1/2 prix",
    titleEn: "Half-Price Wine",
    descFr: "Tous les jeudis dès 11 h.",
    descEn: "Every Thursday starting at 11 a.m.",
  },
];

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // true  → banner hidden (user is actively scrolling past the top)
  // false → banner visible (user is at top OR has stopped scrolling)
  const [scrolled, setScrolled] = useState(false);
  // true  → entire navbar hidden (slides up while actively scrolling)
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollStopTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide the upper announcement banner after 25 px
      setScrolled(currentY > 25);

      // Hide the entire navbar while the user is actively scrolling down
      if (currentY > lastScrollY && currentY > 80) {
        setNavHidden(true);
      } else {
        // Scrolling up → show immediately
        setNavHidden(false);
      }
      lastScrollY = currentY;

      // Cancel any pending "stop" timer and restart it
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      scrollStopTimer = setTimeout(() => {
        // 150 ms after the last scroll event → user stopped → show navbar
        setNavHidden(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const msg = MESSAGES[currentMsgIndex];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#f8efdc] text-[#de2b2b] shadow-sm transition-transform duration-300 ease-in-out ${
        navHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Upper Navigation Bar / Announcement Banner - hidden on scroll down */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden border-b border-[#de2b2b]/15 ${
          scrolled
            ? "max-h-0 opacity-0 -translate-y-2 py-0 border-b-0 pointer-events-none"
            : "max-h-16 opacity-100 translate-y-0 py-0"
        }`}
      >
        <div className="max-w-[120rem] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-11 text-xs uppercase tracking-wider font-medium">
            {/* Rotating message */}
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
              <span className="font-semibold text-[#de2b2b]">
                {language === "en" ? msg.titleEn : msg.titleFr}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#de2b2b]" />
              <span className="text-[#de2b2b]/90 hidden sm:inline">
                {language === "en" ? msg.descEn : msg.descFr}
              </span>
            </div>

            {/* Language Switcher in Upper Bar */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="text-xs uppercase font-medium hover:opacity-75 transition-opacity cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#de2b2b]/30 hover:bg-[#de2b2b] hover:text-[#f8efdc]"
              title={t("Passer en anglais", "Switch to French")}
            >
              <span>{language === "fr" ? "English" : "Français"}</span>
              <span className="text-[10px] font-bold opacity-80">
                ({language === "fr" ? "EN" : "FR"})
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[120rem] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Language toggle (Visible on mobile & tablet) */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="md:hidden text-xs uppercase font-bold tracking-wider px-2 py-1 rounded border border-[#de2b2b]/40 text-[#de2b2b] hover:bg-[#de2b2b] hover:text-[#f8efdc] transition-colors"
            aria-label={t("Changer de langue", "Switch language")}
          >
            {language === "fr" ? "EN" : "FR"}
          </button>

          {/* Left Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1">
            <a
              href="#menus"
              onClick={(e) => handleNavClick(e, "menus")}
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors cursor-pointer"
            >
              {t("Les menus", "Menus")}
            </a>
            <a
              href="#restaurant"
              onClick={(e) => handleNavClick(e, "restaurant")}
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors cursor-pointer"
            >
              {t("Le restaurant", "The Restaurant")}
            </a>
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
            <a
              href="#programmation"
              onClick={(e) => handleNavClick(e, "programmation")}
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors cursor-pointer"
            >
              {t("Programmation", "What’s On")}
            </a>
            <a
              href="#salons-prives"
              onClick={(e) => handleNavClick(e, "salons-prives")}
              className="text-sm uppercase tracking-wider font-medium text-[#de2b2b] hover:text-[#7c2627] transition-colors cursor-pointer"
            >
              {t("Salons privés", "Private Rooms")}
            </a>
            {/* Desktop Language toggle pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="ml-2 text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-[#de2b2b] text-[#de2b2b] hover:bg-[#de2b2b] hover:text-[#f8efdc] transition-all cursor-pointer"
              aria-label={t("Changer de langue", "Switch language")}
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
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
        <div className="md:hidden fixed inset-x-0 top-[80px] bottom-0 bg-[#f8efdc] border-t border-[#de2b2b]/20 p-6 flex flex-col justify-between overflow-y-auto z-40">
          <nav className="flex flex-col gap-6 text-center py-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              {t("Accueil", "Home")}
            </Link>
            <a
              href="#menus"
              onClick={(e) => handleNavClick(e, "menus")}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              {t("Les menus", "Menus")}
            </a>
            <a
              href="#restaurant"
              onClick={(e) => handleNavClick(e, "restaurant")}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              {t("Le restaurant", "The Restaurant")}
            </a>
            <a
              href="#programmation"
              onClick={(e) => handleNavClick(e, "programmation")}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              {t("Programmation", "What’s On")}
            </a>
            <a
              href="#salons-prives"
              onClick={(e) => handleNavClick(e, "salons-prives")}
              className="font-ivy text-3xl font-semibold text-[#de2b2b]"
            >
              {t("Salons privés", "Private Rooms")}
            </a>
          </nav>

          <div className="border-t border-[#de2b2b]/20 pt-6 text-center flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="mx-auto text-xs uppercase font-bold tracking-widest px-4 py-2 rounded-full border border-[#de2b2b] text-[#de2b2b] hover:bg-[#de2b2b] hover:text-[#f8efdc] transition-all"
            >
              {language === "fr" ? "Switch to English" : "Passer en Français"}
            </button>
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
