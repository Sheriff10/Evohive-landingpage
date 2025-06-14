'use client';

import Image from 'next/image';
import { Zap } from 'lucide-react';

const evhCardData = [
  {
    id: 1,
    icon: "/assets/Wallet.svg",
    title: "Start with just $10 and grow with EvoHive.",
  },
  {
    id: 2,
    icon: "/assets/Chart1.svg",
    title: "Track your gains and your progress daily",
  },
  {
    id: 3,
    icon: "/assets/Chart.svg",
    title: "Share your stats, your wins and inspire others",
  },
  {
    id: 4,
    icon: "/assets/Investing.svg",
    title: "Win weekly rewards in $EVH",
  },
];

export default function LandingPageBody() {
  return (
    <div id='why' className="flex flex-col space-y-16 px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      
      {/* Why EvoHive */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Why EvoHive?</h2>
          <p className="text-base md:text-lg text-white/70 mb-4">
            EvoHive offers users an average daily profit target of 2%, powered by a smart AI trading system with a built-in risk limit of just 0.75% per trade. By simply checking in every 24 hours, users can mine <strong>$EVH governance tokens</strong> effortlessly. The platform also rewards users with up to 20% mining boosts through referrals.
          </p>
          <p className="text-base md:text-lg text-white/70">
            Best of all, EvoHive works right inside Telegram — no need to download apps or learn complex tools. Just deposit as little as $10 USDT, activate the bot, and start growing your portfolio effortlessly.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src="/assets/Bull2.png"
            alt="Why EvoHive"
            width={450}
            height={450}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* What is $EVH */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/assets/Bull.png"
            alt="What is $EVH"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="lg:w-1/2 text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">What Is $EVH?</h2>
          <p className="text-base md:text-lg text-white/70 mb-4">
            $EVH is the governance and fee token of the EvoHive ecosystem.
          </p>
          <p className="text-base md:text-lg text-white/70">
            Use $EVH to: <br />
            – Vote on future platform features <br />
            – Earn discounts on trading fees <br />
            – Participate in token burns and community programs <br />
            – Unlock exclusive features in upcoming updates
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id='how' className="flex flex-col items-center text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white">How It Works</h2>
        <div className="w-full max-w-[1102px] p-[1px] rounded-[20px] bg-[linear-gradient(93.9deg,_rgba(255,193,7,0.25)_0.73%,_rgba(0,0,0,0.25)_45.4%,_rgba(0,0,0,0.25)_55.33%,_rgba(255,193,7,0.25)_100%)]">
          <div className="rounded-[20px] px-6 py-8 bg-[linear-gradient(93.9deg,_rgba(1,1,1,1)_0%,_rgba(255,193,7,0.08)_50%,_rgba(1,1,1,1)_100%)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "/assets/Group2.png",
                  title: "Deposit",
                  desc: "No high entry needed. Simply fund your wallet to activate the bot.",
                },
                {
                  icon: "/assets/Group3.png",
                  title: "AI Trading",
                  desc: "EvoHive’s smart AI handles everything, trading automatically with a 0.75% risk limit.",
                },
                {
                  icon: "/assets/Group4.png",
                  title: "Mine & Earn",
                  desc: "Check in daily to earn profits and mine $EVH tokens.",
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-white">
                  <Image src={step.icon} alt={step.title} width={80} height={80} className="mb-3" />
                  <h3 className="text-[16px] font-semibold mb-2">{step.title}</h3>
                  <p className="text-[12px] text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evo10 Challenge */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="flex flex-col space-y-4 text-white max-w-md w-full">
          <h2 className="text-2xl md:text-[24px] font-bold">The Evo10 Challenge</h2>
          <p className="text-white/70">
            EvoHive does the trading. You just check in, refer, and grow.
          </p>
            <button
            className="bg-[#ffc107] text-black px-6 py-3 rounded-full flex items-center max-w-[160px] gap-2 text-sm hover:bg-zinc-900 transition"
            onClick={() => window.open('https://t.me/Evohive_bot', '_blank')}
            >
            Start with $10
            <Zap className="w-4 h-4" fill='black' />
            </button>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {evhCardData.map((card) => (
            <div
              key={card.id}
              className="w-[229px] h-[139px] rounded-[10px] bg-[#0A0A0A] border border-[#FFFFFF26] shadow-[inset_0px_0px_17.1px_2px_#FFFFFF33] flex flex-col items-start justify-start p-3 text-white"
            >
              <Image src={card.icon} alt={card.title} width={40} height={40} className="mb-2" />
              <p className="text-[16px] text-left font-normal text-white/70">{card.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
