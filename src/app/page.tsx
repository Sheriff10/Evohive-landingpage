"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/top";
import LandingPageBody from "@/components/body";
import LowerBody from "@/components/lowerbody";
import Roadmap from "@/components/roadmap";
import Footer from "@/components/footer";
import DisclaimerModal from "@/components/disclaimer";

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden bg-black">
      <DisclaimerModal />
      {/* Decorative Background Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Inner Ellipse */}
        <div className="absolute top-0 -mt-[90px] left-1/2 transform -translate-x-1/2 w-[200%] max-w-[1400px] h-[200vh]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/Ellipse.png"
              alt="Decorative curve line"
              fill
              className="object-contain object-top opacity-60"
              priority
            />
          </div>
        </div>

        {/* Outer Ellipse */}
        <div className="absolute top-0 -mt-[80px] left-1/2 transform -translate-x-1/2 w-[200%] max-w-[1700px] h-[200vh] ml-[30px]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/Ellipse.png"
              alt="Decorative curve line"
              fill
              className="object-contain object-top opacity-60"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <LandingPageBody />
        <LowerBody />
        <Roadmap />
        <Footer />
      </div>
    </div>
  );
}
