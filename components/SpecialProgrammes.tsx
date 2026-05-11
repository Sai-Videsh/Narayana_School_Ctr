"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, Trophy, Sun, MessageSquare, Star, Users, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const specials = [
  { title: "Disha", desc: "Mental Wellness & Counselling", icon: <Heart className="w-5 md:w-6 h-5 md:h-6" /> },
  { title: "nSports", desc: "Holistic Physical Growth", icon: <Trophy className="w-5 md:w-6 h-5 md:h-6" /> },
  { title: "Yoga Veekshan", desc: "Mindfulness & Balance", icon: <Sun className="w-5 md:w-6 h-5 md:h-6" /> },
  { title: "Soft Skills", desc: "Leadership & Communication", icon: <MessageSquare className="w-5 md:w-6 h-5 md:h-6" /> },
  { title: "Olympiads", desc: "Advanced National Prep", icon: <Star className="w-5 md:w-6 h-5 md:h-6" /> },
  { title: "Adoption Calling", desc: "Personalised Academic Care", icon: <Users className="w-5 md:w-6 h-5 md:h-6" /> },
  { title: "TEDxNarayana", desc: "Student Leadership Platform", icon: <Lightbulb className="w-5 md:w-6 h-5 md:h-6" /> },
];

const bgImages = [
  "/toppers_jeemain_2025.avif",
  "/neet_2025_toppers.jpg"
];

export default function SpecialProgrammes() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="special" className="py-20 md:py-32 bg-brand-blue text-white overflow-hidden relative">
      {/* Background Slideshow - Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center grayscale-0"
            style={{ backgroundImage: `url('${bgImages[currentBg]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-transparent to-brand-blue/80" />
        <div className="absolute inset-0 bg-brand-blue/40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-medium text-3xl sm:text-5xl md:text-7xl tracking-tight mb-6 md:mb-8 uppercase leading-tight"
          >
            BEYOND THE <br /> <span className="text-brand-orange">CLASSROOM.</span>
          </motion.h2>
          <p className="text-white text-sm md:text-xl leading-relaxed font-medium bg-brand-blue/20 backdrop-blur-sm inline-block px-4 py-2">
            Our holistic initiatives ensure that every student grows into a well rounded leader.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {specials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group cursor-default shadow-2xl"
            >
              <div className="w-10 md:w-14 h-10 md:h-14 rounded-xl md:rounded-2xl bg-brand-orange text-white flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl">
                {item.icon}
              </div>
              <h3 className="font-bold text-sm md:text-base mb-1 md:mb-2">{item.title}</h3>
              <p className="text-[8px] md:text-[10px] text-white/70 uppercase tracking-widest font-bold">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
