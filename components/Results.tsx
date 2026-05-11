"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Campuses Across India", value: "950+" },
  { label: "Students Educated Daily", value: "600,000+" },
  { label: "States & UTs", value: "23" },
  { label: "Educators & Staff", value: "50,000+" },
];

const toppers = [
  { name: "G. Nilkrishna", rank: "AIR 1", exam: "JEE Main 2024", img: "/Nilkrishna.webp" },
  { name: "Bani Brata Majee", rank: "300/300", exam: "JEE Main 2025", img: "/Bani Brata Majee.webp" },
  { name: "Mrinal Kishore Jha", rank: "AIR 4", exam: "NEET UG 2025", img: "/Mrinal Kishore Jha.webp" },
  { name: "K. Jeevan Sai Kumar", rank: "AIR 18", exam: "NEET UG 2025", img: "/jeevan.webp" },
];

export default function Results() {
  return (
    <section id="results" className="py-16 md:py-24 bg-surface text-dark overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-orange/10 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-7xl leading-tight mb-6 md:mb-8 uppercase">
              RESULTS THAT <br />
              <span className="text-brand-orange uppercase">SHAPE HISTORY.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
              With 35% of all 100-percentile scorers in JEE Main 2025 coming from Narayana, 
              we continue to dominate national rankings year after year.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-5xl font-medium mb-1 text-brand-orange">{stat.value}</p>
                  <p className="text-[10px] md:text-sm font-bold opacity-70 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 w-full">
            {toppers.map((topper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-0 rounded-2xl md:rounded-3xl aspect-[4/5] flex flex-col justify-end border-2 border-transparent group hover:border-brand-orange/50 transition-all duration-700 shadow-xl overflow-hidden relative"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  style={{ backgroundImage: `url('${topper.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent z-10" />
                <div className="relative z-20 p-4 md:p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[8px] md:text-[10px] font-bold text-brand-orange uppercase mb-1 tracking-widest">{topper.exam}</p>
                  <p className="font-bold text-sm md:text-lg leading-tight mb-1">{topper.name}</p>
                  <p className="text-xl md:text-2xl font-display font-bold text-brand-blue">{topper.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
