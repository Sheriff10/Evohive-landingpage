'use client'

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Q2 2025",
      subtitle: "Launch & Community Building",
    },
    {
      title: "Q3 2025",
      subtitle: "User Growth & Transparency Features",
      textAbove: true,
    },
    {
      title: "Q4 2025",
      subtitle: "Token Governance & DEX Listings",
    },
    {
      title: "Q1 2026",
      subtitle: "Layer 2 Expansion + CEX Preparation",
      textAbove: true,
    },
  ]

  return (
    <section id="roadmap" className="bg-transparent py-20 px-4 md:px-12 text-white text-center mt-10">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">Roadmap</h2>
      <p className="text-sm md:text-lg text-white/70 mb-30">
        We're building for long-term growth and transparency. Here's what's coming
      </p>

      {/* Timeline Line & Dots */}
      <div className="relative w-full max-w-[1335px] mx-auto mt-16">
        {/* Horizontal Line for md+ */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/30 z-0 transform -translate-y-1/2"></div>

        {/* Vertical Line for mobile */}
        <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/30 z-0 transform -translate-x-1/2"></div>

        {/* Roadmap Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-0 relative z-10">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative text-center">
              {/* Text above for desktop */}
              {item.textAbove && (
                <div className="hidden md:block absolute bottom-full mb-6 w-full px-2">
                  <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.subtitle}</p>
                </div>
              )}

              {/* Text above for mobile */}
              {item.textAbove && (
                <div className="md:hidden mb-4">
                  <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.subtitle}</p>
                </div>
              )}

              {/* Dot */}
              <div className="w-5 h-5 rounded-full bg-[#FFC107] border border-white z-10"></div>

              {/* Text below */}
              {!item.textAbove && (
                <div className="mt-4 md:absolute md:top-full md:mt-6 w-full px-2">
                  <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
