// components/DisclaimerModal.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0  bg-opacity-50 flex items-baseline-last justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#212121] rounded px-10 py-4 w-full mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="flex gap-10 items-center justify-between">
              <div className="wrap">
                <p className=" text-white/70 text-sm">
                  EvoHive Mini App is not a financial advisor. Trading and token-mining features carry inherent risk of
                  loss. Use at your own discretion. <br />
                  Read our{" "}
                  <Link href="/terms-of-service" className="underline text-[#ffc107]">
                    Terms of Service
                  </Link>
                </p>
              </div>
              <div className="btn-wrap">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 font-medium shadow  text-black/70 bg-[#ffc107] rounded-full hover:bg-yellow-500 transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
