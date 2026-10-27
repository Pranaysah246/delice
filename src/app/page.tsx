import { Header } from "@/components/sites/delice/Header";
import { Hero } from "@/components/sites/delice/Hero";
import { Callout } from "@/components/sites/delice/Callout";
import { Promotions } from "@/components/sites/delice/Promotions";
import { Statistics } from "@/components/sites/delice/Statistics";
import { Events } from "@/components/sites/delice/Events";
import { PrivateRooms } from "@/components/sites/delice/PrivateRooms";
import { Careers } from "@/components/sites/delice/Careers";
import { Atmosphere } from "@/components/sites/delice/Atmosphere";
import { TakeoutDelivery } from "@/components/sites/delice/TakeoutDelivery";
import { Footer } from "@/components/sites/delice/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8efdc] selection:bg-[#de2b2b] selection:text-[#f8efdc]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Callout />
        <Promotions />
        <Statistics />
        <Events />
        <PrivateRooms />
        <Careers />
        <Atmosphere />
        <TakeoutDelivery />
      </main>
      <Footer />
    </div>
  );
}
