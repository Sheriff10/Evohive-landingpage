'use client'

import { Circle } from 'lucide-react'

export default function LowerBody() {
  const smallCards = [
    {
      title: "Tokenomics ($EVH)",
      points: [
        "Purpose: Governance + utility",
        "Mining: Based on 24-hour activity check-ins",
        "Referral Boost: Up to 20% more $EVH per user invite",
        "Use Cases: Voting rights, fee discounts, ecosystem access",
        "Supply: To be determined (TBD in final release)"
      ],
    },
    {
      title: "Technology Stack",
      points: [
        "AI Trading Engine: Combines scalping and sniping strategies",
        "Risk Control: Maximum 0.75% exposure per trade",
        "Transparency: All trades and profits shown in user dashboard",
        "Bot Platform: Telegram Mini App with future Web App integration"
      ],
    },
    {
      title: "User Experience",
      points: [
        "Deposit USDT and activate trading",
        "View trade history, win/loss ratios, daily profit",
        "Check in every 24 hours to mine $EVH",
        "Refer friends and track referral stats"
      ],
    },
    {
      title: "Security & Transparency",
      points: [
        "AI trades monitored and recorded in real-time",
        "View tradeNon-custodial structure (users maintain wallet control)",
        "Regular performance reports shared via X and Telegram"
      ],
    },
  ]

  return (
    <section className="px-4 md:px-12 py-16 bg-black text-white">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Trust & Control</h2>
        <p className="text-sm md:text-lg text-white/70">
          Your funds, your control. Trades are tracked live with regular performance updates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Large Introduction Card */}
        <div className="md:col-span-2 bg-[#FFC107] text-black border border-white/15 rounded-[15px] p-6 flex flex-col justify-center">
          <h3 className="text-[16px] font-semibold mb-2">Introduction</h3>
          <p className="text-[13px] text-black/70 leading-snug">
            EvoHive is a Telegram-based AI trading platform that empowers anyone to grow their crypto portfolio with as little as $10 USDT. Through advanced algorithmic trading and a unique daily check-in mining system, users profit while earning governance tokens ($EVH) without needing prior trading knowledge.
          </p>
        </div>

        {/* Small Cards Grid */}
        {smallCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0A0A0A] border border-white/15 rounded-[15px] p-6 flex flex-col justify-start"
          >
            <h3 className="text-[16px] font-semibold mb-3">{card.title}</h3>
            <ul className="space-y-2">
              {card.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-white/70 text-[12px] leading-snug">
                  <Circle fill="#FFD700" stroke="#FFD700" className="w-2 h-2 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
