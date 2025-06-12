'use client';

import { Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full min-h-[500px] flex flex-col items-center justify-center text-center bg-transparent px-4 py-12">
      {/* Headline */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[35px] font-semibold leading-tight text-white font-[Poppins] max-w-[700px]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        AI That Trades. Tokens That Reward. Wealth Starts at $10.
      </h1>

      {/* Subtext */}
      <p
        className="mt-4 text-sm sm:text-base md:text-[16px] text-white/70 max-w-[700px] font-[Satoshi]"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        EvoHive is your hands-free crypto trading AI that mines governance tokens while you sleep.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="bg-[#ffc107] text-black px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm hover:bg-zinc-900 transition w-full sm:w-auto">
          Start with $10
          <Zap className="w-4 h-4" fill="black" />
        </button>
        <button className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-full text-sm hover:bg-white/10 transition w-full sm:w-auto">
          Join the Hive
        </button>
      </div>
    </section>
  );
}
