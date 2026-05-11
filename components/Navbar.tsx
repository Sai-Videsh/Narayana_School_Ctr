"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-3 glass"
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
          <span className="font-display font-bold text-lg md:text-xl tracking-tighter hidden xl:block uppercase">
            NARAYANA <span className="text-brand-orange">CHITTOOR</span>
          </span>
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-4 xl:gap-5">
        {["Home", "About", "Founders", "Methodology", "Programs", "Innovation", "Results", "Admissions"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(`#${item.toLowerCase()}`);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
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
          document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <button className="hidden md:block px-6 py-2.5 bg-brand-blue text-white text-[10px] font-bold rounded-full hover:bg-brand-blue-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20 uppercase tracking-widest whitespace-nowrap">
            APPLY NOW
          </button>
        </a>
        <button className="lg:hidden p-2 text-dark">
          <Menu size={20} />
        </button>
      </div>
    </motion.nav>
  );
}
