"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Founders", "Methodology", "Programs", "Innovation", "Results", "Admissions"];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const target = document.querySelector(`#${id.toLowerCase()}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-4 py-3 md:px-8 md:py-3 glass"
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image 
                src="/logo.png" 
                alt="Narayana School Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tighter hidden lg:block uppercase">
              NARAYANA <span className="text-brand-orange">CHITTOOR</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item);
              }}
              className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest hover:text-brand-orange transition-colors relative group whitespace-nowrap"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#admissions" onClick={(e) => {
            e.preventDefault();
            scrollTo('admissions');
          }}>
            <button className="hidden md:block px-6 py-2.5 bg-brand-blue text-white text-[10px] font-bold rounded-full hover:bg-brand-blue-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20 uppercase tracking-widest whitespace-nowrap">
              APPLY NOW
            </button>
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark transition-transform active:scale-90"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left text-2xl font-display font-bold text-dark border-b border-gray-100 pb-4 uppercase tracking-tight active:text-brand-orange"
                >
                  {item}
                </button>
              ))}
              <a href="#admissions" onClick={() => setIsOpen(false)}>
                <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-2xl uppercase tracking-widest text-sm shadow-xl shadow-brand-blue/20">
                  APPLY FOR ADMISSIONS
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
