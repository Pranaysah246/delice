"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface MenuItem {
  id: string;
  nameFr: string;
  nameEn: string;
  descFr: string;
  descEn: string;
  price: string;
  takeoutPrice: string;
  tagFr?: string;
  tagEn?: string;
  image?: string;
}

interface MenuCategory {
  id: string;
  titleFr: string;
  titleEn: string;
  icon: string;
  items: MenuItem[];
}

const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "a-la-carte",
    titleFr: "À la carte",
    titleEn: "À la carte",
    icon: "🍽️",
    items: [
      {
        id: "tartare-saumon",
        nameFr: "Tartare de saumon de l'Atlantique",
        nameEn: "Atlantic Salmon Tartare",
        descFr: "Concombre croquant, échalote française, ciboulette, mayonnaise yuzu et croûtons dorés.",
        descEn: "Crisp cucumber, French shallot, chives, yuzu mayonnaise and golden croutons.",
        price: "24.95 $",
        takeoutPrice: "22.45 $",
        tagFr: "Coup de cœur",
        tagEn: "Chef's Choice",
        image: "/sites/delice/assets/l1070049-2560x1708.jpg",
      },
      {
        id: "steak-frites",
        nameFr: "Bavette de bœuf Angus grillée",
        nameEn: "Grilled Angus Beef Flank Steak",
        descFr: "Échalotes confites au vin rouge, frites maison croustillantes et beurre maître d'hôtel.",
        descEn: "Shallots braised in red wine, crispy homemade fries, and maître d'hôtel herb butter.",
        price: "34.50 $",
        takeoutPrice: "31.05 $",
        image: "/sites/delice/assets/dscf4945-2560x3413.jpg",
      },
      {
        id: "poke-thon",
        nameFr: "Poké bol au thon rouge mariné",
        nameEn: "Marinated Ahi Tuna Poké Bowl",
        descFr: "Riz sushi vinaigré, avocat, edamames, mangue fraîche, sésame grillé et sauce soya-gingembre.",
        descEn: "Seasoned sushi rice, ripe avocado, edamame, fresh mango, sesame, and ginger-soy sauce.",
        price: "26.50 $",
        takeoutPrice: "23.85 $",
        tagFr: "Sans gluten",
        tagEn: "Gluten-Free",
        image: "/sites/delice/assets/l1070049-2560x1708.jpg",
      },
      {
        id: "burger-delice",
        nameFr: "Burger signature Délice",
        nameEn: "Délice Signature Burger",
        descFr: "Bœuf pur 100 %, cheddar vieilli québécois, bacon fumé à l'érable, oignons caramélisés et aïoli sur pain brioché.",
        descEn: "100% prime beef, aged Quebec cheddar, maple-smoked bacon, caramelized onions and garlic aioli on brioche.",
        price: "22.95 $",
        takeoutPrice: "20.65 $",
        tagFr: "Classique",
        tagEn: "Classic",
        image: "/sites/delice/assets/dscf4945-2560x3413.jpg",
      },
      {
        id: "cotes-levees",
        nameFr: "Côtes levées caramélisées au whisky",
        nameEn: "Whiskey Glazed Braised Ribs",
        descFr: "Cuisson lente 8 heures, sauce barbecue au whisky à l'érable, salade de chou crémeuse et frites.",
        descEn: "Slow cooked 8 hours, maple whiskey barbecue sauce, creamy coleslaw and golden fries.",
        price: "29.95 $",
        takeoutPrice: "26.95 $",
        image: "/sites/delice/assets/dscf4945-2560x3413.jpg",
      },
      {
        id: "risotto-champignons",
        nameFr: "Risotto crémeux aux champignons sauvages",
        nameEn: "Creamy Wild Mushroom Risotto",
        descFr: "Mélange de pleurotes et shiitakes, parmesan reggiano 24 mois, huile de truffe blanche.",
        descEn: "Mix of oyster and shiitake mushrooms, 24-month Parmigiano-Reggiano, white truffle oil.",
        price: "25.00 $",
        takeoutPrice: "22.50 $",
        tagFr: "Végétarien",
        tagEn: "Vegetarian",
        image: "/sites/delice/assets/l1070049-2560x1708.jpg",
      },
    ],
  },
  {
    id: "pizzas",
    titleFr: "Pizzas fines",
    titleEn: "Artisan Pizzas",
    icon: "🍕",
    items: [
      {
        id: "pizza-margherita",
        nameFr: "Margherita di Bufala",
        nameEn: "Margherita di Bufala",
        descFr: "Sauce tomate San Marzano, mozzarella di bufala fraîche, basilic du jardin, huile d'olive extra-vierge.",
        descEn: "San Marzano tomato sauce, fresh buffalo mozzarella, garden basil, extra virgin olive oil.",
        price: "19.95 $",
        takeoutPrice: "17.95 $",
        tagFr: "Végétarien",
        tagEn: "Vegetarian",
        image: "/sites/delice/assets/dscf5221.png",
      },
      {
        id: "pizza-prosciutto",
        nameFr: "Prosciutto & Roquette",
        nameEn: "Prosciutto & Arugula",
        descFr: "Mozzarella fondue, prosciutto di Parma vieilli, roquette sauvage, copeaux de parmesan et réduction balsamique.",
        descEn: "Melted mozzarella, aged Parma prosciutto, wild baby arugula, parmesan shavings and balsamic reduction.",
        price: "23.50 $",
        takeoutPrice: "21.15 $",
        tagFr: "Populaire",
        tagEn: "Popular",
        image: "/sites/delice/assets/dscf5221.png",
      },
      {
        id: "pizza-carnivore",
        nameFr: "La Grande Carnivore",
        nameEn: "The Meat Lovers Feast",
        descFr: "Pepperoni artisanal, bacon fumé, saucisse italienne piquante, bœuf haché assaisonné et mozzarella.",
        descEn: "Artisan pepperoni, smoked bacon, spicy Italian sausage, seasoned ground beef and mozzarella.",
        price: "24.95 $",
        takeoutPrice: "22.45 $",
        image: "/sites/delice/assets/dscf5221.png",
      },
      {
        id: "pizza-pesto-poulet",
        nameFr: "Poulet grillé au pesto & chèvre",
        nameEn: "Grilled Chicken, Pesto & Goat Cheese",
        descFr: "Pesto de basilic frais, lanières de poulet mariné, fromage de chèvre crémeux, tomates séchées et pignons de pin.",
        descEn: "Fresh basil pesto, marinated chicken strips, creamy goat cheese, sun-dried tomatoes and pine nuts.",
        price: "23.95 $",
        takeoutPrice: "21.55 $",
        image: "/sites/delice/assets/dscf5221.png",
      },
    ],
  },
  {
    id: "dejeuners",
    titleFr: "Déjeuners",
    titleEn: "Breakfasts",
    icon: "🍳",
    items: [
      {
        id: "grand-delice",
        nameFr: "L'Assiette Grand Délice",
        nameEn: "Grand Délice Breakfast Platter",
        descFr: "Deux œufs frais du jour au choix, bacon croustillant, saucisse de campagne, jambon fumé, fèves au lard maison, cretons, patates rissolées et rôties.",
        descEn: "Two fresh farm eggs any style, crisp bacon, country sausage, smoked ham, baked beans, cretons, breakfast potatoes and toast.",
        price: "18.95 $",
        takeoutPrice: "17.05 $",
        tagFr: "Tradition",
        tagEn: "Tradition",
        image: "/sites/delice/assets/dscf5839-2560x3413.jpg",
      },
      {
        id: "benedictine-saumon",
        nameFr: "Œufs bénédictine au saumon fumé",
        nameEn: "Smoked Salmon Eggs Benedict",
        descFr: "Deux œufs pochés sur muffin anglais grillé, généreux saumon fumé de l'Atlantique, sauce hollandaise crémeuse, câpres et fruits frais.",
        descEn: "Two poached eggs on toasted English muffin, generous smoked salmon, creamy hollandaise sauce, capers and fresh fruit bowl.",
        price: "22.95 $",
        takeoutPrice: "20.65 $",
        tagFr: "Coup de cœur",
        tagEn: "Chef's Choice",
        image: "/sites/delice/assets/dscf5839-2560x3413.jpg",
      },
      {
        id: "gaufre-fruits",
        nameFr: "Gaufre belge dorée aux fruits frais",
        nameEn: "Golden Belgian Waffle with Fresh Fruit",
        descFr: "Gaufre croustillante à l'extérieur et moelleuse à l'intérieur, montagne de fraises, bleuets, framboises, crème chantilly et sirop d'érable pur.",
        descEn: "Crisp and fluffy Belgian waffle topped with fresh strawberries, blueberries, raspberries, whipped cream and pure Quebec maple syrup.",
        price: "17.50 $",
        takeoutPrice: "15.75 $",
        tagFr: "Végétarien",
        tagEn: "Vegetarian",
        image: "/sites/delice/assets/dscf5839-2560x3413.jpg",
      },
    ],
  },
  {
    id: "speciaux-midi",
    titleFr: "Spéciaux du midi",
    titleEn: "Lunch Specials",
    icon: "🥪",
    items: [
      {
        id: "fish-and-chips",
        nameFr: "Fish & Chips croustillant à la bière",
        nameEn: "Crispy Beer-Battered Fish & Chips",
        descFr: "Filet d'aiglefin frais pané à la bière rousse locale, sauce tartare maison aux herbes, frites dorées et salade de chou.",
        descEn: "Fresh haddock fillet in local amber beer batter, homemade herb tartar sauce, golden fries and coleslaw.",
        price: "19.50 $",
        takeoutPrice: "17.55 $",
        tagFr: "Spécial midi",
        tagEn: "Lunch Special",
        image: "/sites/delice/assets/dscf5208-1-2560x2560.png",
      },
      {
        id: "club-sandwich",
        nameFr: "Club sandwich au poulet rôti Délice",
        nameEn: "Délice Roast Chicken Club Sandwich",
        descFr: "Poitrine de poulet rôtie tranchée, bacon croustillant, tomates mûres, laitue romaine croquante et mayonnaise sur pain campagnard grillé.",
        descEn: "Sliced roasted chicken breast, crispy bacon, ripe tomatoes, crisp romaine lettuce and mayo on grilled country bread.",
        price: "18.50 $",
        takeoutPrice: "16.65 $",
        image: "/sites/delice/assets/dscf4945-2560x3413.jpg",
      },
      {
        id: "salade-cesar",
        nameFr: "Salade César gourmande au poulet grillé",
        nameEn: "Gourmet Grilled Chicken Caesar Salad",
        descFr: "Cœurs de romaine, vinaigrette crémeuse à l'ail rôti, croûtons focaccia au parmesan, bacon fumé émietté et poitrine de poulet grillée.",
        descEn: "Romaine hearts, creamy roasted garlic dressing, parmesan focaccia croutons, crumbled smoked bacon and grilled chicken breast.",
        price: "19.95 $",
        takeoutPrice: "17.95 $",
        image: "/sites/delice/assets/l1070049-2560x1708.jpg",
      },
    ],
  },
  {
    id: "boissons",
    titleFr: "Cocktails & Bar",
    titleEn: "Cocktails & Drinks",
    icon: "🍸",
    items: [
      {
        id: "delice-mule",
        nameFr: "Délice Mule Signature",
        nameEn: "Signature Délice Mule",
        descFr: "Vodka premium québécoise, bière de gingembre artisanale, jus de lime fraîchement pressé et menthe fraîche du jardin.",
        descEn: "Quebec craft vodka, artisanal spicy ginger beer, freshly squeezed lime juice and fresh garden mint sprig.",
        price: "14.50 $",
        takeoutPrice: "14.50 $",
        tagFr: "Signature",
        tagEn: "Signature",
        image: "/sites/delice/assets/dscf5585-2560x3413.jpg",
      },
      {
        id: "sangria-delice",
        nameFr: "Sangria festive Délice (Pichet)",
        nameEn: "Festive Délice Sangria (Pitcher)",
        descFr: "Vin rouge ou blanc fruité, triple sec, brandy, jus d'agrumes frais, soda et abondance de fruits frais coupés.",
        descEn: "Red or white fruity wine, triple sec, brandy, fresh citrus juices, soda and abundance of diced fresh fruit.",
        price: "32.00 $",
        takeoutPrice: "32.00 $",
        tagFr: "À partager",
        tagEn: "To Share",
        image: "/sites/delice/assets/dscf5585-2560x3413.jpg",
      },
      {
        id: "margarita-epicee",
        nameFr: "Margarita épicée au piment d'Espelette",
        nameEn: "Spicy Espelette Pepper Margarita",
        descFr: "Tequila 100 % agave bleue, Cointreau, purée de mangue douce, jus de lime et bordure de sel épicé au piment d'Espelette.",
        descEn: "100% blue agave tequila, Cointreau, sweet mango purée, fresh lime juice and spicy Espelette salt rim.",
        price: "15.00 $",
        takeoutPrice: "15.00 $",
        image: "/sites/delice/assets/dscf5585-2560x3413.jpg",
      },
      {
        id: "selection-vins",
        nameFr: "Sélection de vins au verre (Importation privée)",
        nameEn: "Private Import Wine by the Glass",
        descFr: "Demandez notre carte des vins : rouges charpentés, blancs vifs et minéraux, rosés provençaux et bulles de fête.",
        descEn: "Ask for our curated cellar list: bold reds, crisp mineral whites, Provence rosés and celebratory sparkling wines.",
        price: "Dès 11.00 $",
        takeoutPrice: "Dès 11.00 $",
        image: "/sites/delice/assets/dscf5585-2560x3413.jpg",
      },
    ],
  },
  {
    id: "happy-hour",
    titleFr: "Happy Hour",
    titleEn: "Happy Hour",
    icon: "🍻",
    items: [
      {
        id: "bieres-fut",
        nameFr: "Pinte de bière de microbrasserie locale",
        nameEn: "Local Craft Draft Beer Pint",
        descFr: "Sélection de 12 bières en fût québécoises (IPA, blanche, rousse, blonde). Tous les jours de 14 h à 18 h.",
        descEn: "Selection of 12 Quebec draft beers (IPA, wheat, amber, blonde). Daily from 2 p.m. to 6 p.m.",
        price: "7.50 $",
        takeoutPrice: "7.50 $",
        tagFr: "Spécial 14h-18h",
        tagEn: "Special 2pm-6pm",
        image: "/sites/delice/assets/dscf5585-2560x3413.jpg",
      },
      {
        id: "ailes-poulet",
        nameFr: "Panier d'ailes de poulet croustillantes",
        nameEn: "Basket of Crispy Chicken Wings",
        descFr: "10 ailes de poulet fermier, choix de sauce érable chipotle ou Buffalo épicée, trempette au fromage bleu.",
        descEn: "10 farm chicken wings, choice of maple-chipotle glaze or spicy Buffalo sauce, blue cheese dip.",
        price: "12.95 $",
        takeoutPrice: "11.65 $",
        tagFr: "À partager",
        tagEn: "To Share",
        image: "/sites/delice/assets/dscf5210.png",
      },
      {
        id: "moules-frites-rabais",
        nameFr: "Casserole de moules & frites",
        nameEn: "Mussels & Fries Pot Special",
        descFr: "Moules fraîches des Îles, bouillon vin blanc, échalotes et crème fine, servies avec frites chaudes.",
        descEn: "Fresh Magdalen Islands mussels, white wine broth, shallots and sweet cream, served with golden fries.",
        price: "15.95 $",
        takeoutPrice: "14.35 $",
        image: "/sites/delice/assets/dscf5210.png",
      },
    ],
  },
];

export function Callout() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("a-la-carte");
  const [diningMode, setDiningMode] = useState<"on_site" | "takeout" | "delivery">("on_site");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const currentCategory =
    MENU_CATEGORIES.find((c) => c.id === activeCategory) || MENU_CATEGORIES[0];

  return (
    <section
      id="menus"
      className="scroll-mt-24 relative w-full bg-[#de2b2b] text-[#f8efdc] overflow-hidden py-20 md:py-32"
    >
      {/* Decorative Food Circle Images (Background Accent) */}
      <div className="absolute inset-0 pointer-events-none max-w-[120rem] mx-auto overflow-hidden opacity-25 lg:opacity-35">
        <div className="absolute -top-6 -left-6 md:top-8 md:left-8 w-44 h-44 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#f8efdc]/20">
          <Image
            src="/sites/delice/assets/l1070049-2560x1708.jpg"
            alt="Plat Délice"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 176px, 256px"
          />
        </div>
        <div className="absolute top-12 right-2 md:top-16 md:right-16 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#f8efdc]/20">
          <Image
            src="/sites/delice/assets/dscf5585-2560x3413.jpg"
            alt="Cocktail"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 224px"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#f8efdc]/80 mb-3 inline-block px-3 py-1 rounded-full border border-[#f8efdc]/30 bg-[#f8efdc]/10">
            {t("Les menus complets", "Our Complete Menus")}
          </span>

          <h2 className="font-ivy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#f8efdc] mb-5">
            {t("Un choix pour tous les goûts", "A Choice for Every Taste")}
          </h2>

          <p className="font-filson text-base md:text-lg text-[#f8efdc]/90 leading-relaxed max-w-2xl mx-auto">
            {t(
              "Des saveurs du monde, des ingrédients frais, et des plats pensés pour vous régaler. Pour les lève-tôt, nos déjeuners Délice vous attendent fruités, variés et colorés.",
              "Flavors from around the world, fresh ingredients, and dishes crafted to delight you. For early birds, our Délice breakfasts await with fresh fruit, variety, and color."
            )}
          </p>

          {/* Dining Mode Toggle (On-site / Takeout / Delivery) */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#f8efdc]/15 border border-[#f8efdc]/30 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setDiningMode("on_site")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                diningMode === "on_site"
                  ? "bg-[#f8efdc] text-[#de2b2b] shadow-md"
                  : "text-[#f8efdc] hover:text-white"
              }`}
            >
              {t("Sur place", "Dine-In")}
            </button>
            <button
              type="button"
              onClick={() => setDiningMode("takeout")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                diningMode === "takeout"
                  ? "bg-[#f8efdc] text-[#de2b2b] shadow-md"
                  : "text-[#f8efdc] hover:text-white"
              }`}
            >
              {t("Pour emporter (-10 %)", "Takeout (-10%)")}
            </button>
            <button
              type="button"
              onClick={() => setDiningMode("delivery")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                diningMode === "delivery"
                  ? "bg-[#f8efdc] text-[#de2b2b] shadow-md"
                  : "text-[#f8efdc] hover:text-white"
              }`}
            >
              {t("Livraison", "Delivery")}
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#f8efdc] text-[#de2b2b] shadow-lg scale-105"
                    : "bg-[#f8efdc]/15 text-[#f8efdc] hover:bg-[#f8efdc]/25 border border-[#f8efdc]/20"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{language === "en" ? cat.titleEn : cat.titleFr}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.items.map((item) => {
            const displayPrice =
              diningMode === "takeout" ? item.takeoutPrice : item.price;
            const tag = language === "en" ? item.tagEn : item.tagFr;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-[#f8efdc]/10 hover:bg-[#f8efdc]/20 border border-[#f8efdc]/25 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer flex flex-col justify-between backdrop-blur-sm hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-ivy text-xl md:text-2xl font-semibold text-[#f8efdc] group-hover:text-white leading-snug">
                      {language === "en" ? item.nameEn : item.nameFr}
                    </h3>
                    <span className="font-filson text-lg font-bold text-[#f8efdc] shrink-0 bg-[#f8efdc]/20 px-2.5 py-1 rounded-lg">
                      {displayPrice}
                    </span>
                  </div>

                  <p className="font-filson text-xs md:text-sm text-[#f8efdc]/85 leading-relaxed mb-4">
                    {language === "en" ? item.descEn : item.descFr}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#f8efdc]/20 mt-auto">
                  {tag ? (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#f8efdc] text-[#de2b2b]">
                      {tag}
                    </span>
                  ) : (
                    <span className="text-[10px] text-[#f8efdc]/70 uppercase tracking-wider">
                      Délice Resto
                    </span>
                  )}

                  <span className="text-xs uppercase tracking-wider font-semibold text-[#f8efdc] flex items-center gap-1 group-hover:underline">
                    {t("Détails", "Details")} &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Actions */}
        <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+14188332221"
            className="px-8 py-3.5 bg-[#f8efdc] text-[#de2b2b] hover:bg-white text-xs md:text-sm uppercase tracking-widest font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {t("Réserver une table : (418) 833-2221", "Book a Table: (418) 833-2221")}
          </a>
          <a
            href="https://delice.ca/wp-content/uploads/2026/03/menu_regulier_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-transparent border-2 border-[#f8efdc] text-[#f8efdc] hover:bg-[#f8efdc]/20 text-xs md:text-sm uppercase tracking-widest font-bold rounded-full transition-all"
          >
            {t("Télécharger le menu PDF", "Download PDF Menu")}
          </a>
        </div>
      </div>

      {/* Dish Details Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#f8efdc] text-[#273e2a] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#de2b2b]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 text-2xl font-bold text-[#de2b2b] hover:opacity-70 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-[#de2b2b]/10"
              aria-label="Fermer"
            >
              &times;
            </button>

            {selectedItem.image && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-md border border-[#273e2a]/10">
                <Image
                  src={selectedItem.image}
                  alt={language === "en" ? selectedItem.nameEn : selectedItem.nameFr}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-ivy text-2xl md:text-3xl font-bold text-[#de2b2b]">
                {language === "en" ? selectedItem.nameEn : selectedItem.nameFr}
              </h3>
              <span className="font-filson text-xl font-bold text-[#de2b2b] bg-[#de2b2b]/10 px-3 py-1 rounded-xl shrink-0">
                {diningMode === "takeout"
                  ? selectedItem.takeoutPrice
                  : selectedItem.price}
              </span>
            </div>

            <p className="font-filson text-sm md:text-base text-[#273e2a]/90 leading-relaxed mb-6">
              {language === "en" ? selectedItem.descEn : selectedItem.descFr}
            </p>

            <div className="p-4 rounded-xl bg-[#de2b2b]/5 border border-[#de2b2b]/15 flex items-center justify-between text-xs font-medium text-[#7c2627]">
              <span>
                {t(
                  "Disponible sur place, à emporter et en livraison.",
                  "Available for dine-in, takeout, and delivery."
                )}
              </span>
              <a
                href="tel:+14188332221"
                className="text-[#de2b2b] font-bold underline hover:opacity-80"
              >
                {t("Commander", "Order now")}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
