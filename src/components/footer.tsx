"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#FFFFFF29] bg-[#0A0A0A] px-6 py-4 text-white/70 text-sm mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Text */}
        <div className="flex items-center space-x-2">
          <span>COPYRIGHT © 2025</span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://x.com/evohiveai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Image src="/assets/twitter.png" alt="X" width={20} height={20} />
          </Link>
          <Link href="https://t.me/evohiveai" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <Image src="/assets/telegram.png" alt="Telegram" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
