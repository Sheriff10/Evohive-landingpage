'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Why EvoHive', href: '#why' },
  { label: 'How It Works', href: '#how' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Security & Transparency', href: '#security' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offsets = links
        .map(link => {
          const el = document.querySelector(link.href)
          return el
            ? { href: link.href, offsetTop: el.getBoundingClientRect().top + window.scrollY }
            : null
        })
        .filter(Boolean) as { href: string; offsetTop: number }[]

      const scrollPosition = window.scrollY + 100

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i].offsetTop) {
          setActive(offsets[i].href)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="relative z-50 max-w-[907px] w-full mx-auto mt-4 rounded-[20px] border border-white/15 bg-[#0A0A0A] backdrop-blur-sm px-4 md:px-6 text-white/70">
      {/* Main Navbar Content */}
      <div className="h-[50px] flex items-center justify-between">
        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-xs md:text-sm">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-gray-300 pb-1 ${
                active === link.href ? 'border-b-[1.2px] border-[#FFC107] text-[#FFC107]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button (Always visible) */}
        <button className="hidden md:block w-[86px] h-[28px] bg-[#FFC107] rounded-[5px] px-[10px] py-[5px] text-black text-sm font-medium ml-auto">
          Contact us
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white ml-auto"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 space-y-3 pb-4">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm px-2 py-1 rounded transition ${
                active === link.href ? 'text-[#FFC107]' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full h-[36px] bg-[#FFC107] rounded-[5px] text-black text-sm font-medium">
            Contact us
          </button>
        </div>
      )}
    </nav>
  )
}
