import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accueil - Délice | Resto Lounge à Lévis",
  description:
    "Délice Resto Lounge à Lévis. Restaurant, bar, boîte de nuit, déjeuners, spectacles live et salons privés.",
  icons: {
    icon: "/sites/delice/assets/favicon-150x150.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-filson bg-[#f8efdc] text-[#273e2a]">
        {children}
      </body>
    </html>
  );
}
