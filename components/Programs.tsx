"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Microscope, Trophy, Users, GraduationCap as School } from "lucide-react";

const programs = [
  {
    title: "eKidz (Pre-Primary)",
    desc: "Ages 3–6. A joyful start focusing on early childhood development through play-based, curiosity-driven learning.",
    icon: <GraduationCap className="w-8 md:w-10 h-8 md:h-10" />,
    accent: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "eChamps (Primary)",
    desc: "Ages 6–11 | Classes 1–5. Builds a strong foundation with personalised academic support and fosters creativity.",
    icon: <Brain className="w-8 md:w-10 h-8 md:h-10" />,
    accent: "bg-green-500/10 text-green-500",
  },
  {
    title: "eTechno (Middle & Secondary)",
    desc: "Ages 11–18 | Classes 6–12. Blends CBSE with early competitive orientation (JEE, NEET, Olympiads).",
    icon: <Microscope className="w-8 md:w-10 h-8 md:h-10" />,
    accent: "bg-blue-500/10 text-blue-500",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-brand-blue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-medium text-3xl sm:text-5xl md:text-7xl tracking-tight text-white uppercase mb-6 md:mb-8"
          >
            ACADEMIC <span className="text-brand-orange">PROGRAMMES.</span>
          </motion.h2>
          <p className="text-white/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            From foundation to focus, our integrated curriculum ensures success in 
            both board exams and national level competitive challenges.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div>
            <h3 className="text-white/60 text-sm md:text-base uppercase tracking-widest font-bold mb-6 md:mb-8">Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {programs.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="p-6 md:p-10 bg-white rounded-[2rem] md:rounded-3xl border border-black/10 hover:border-black/30 transition-all duration-700 shadow-2xl group"
                >
                  <div className={`w-14 md:w-20 h-14 md:h-20 rounded-2xl ${p.accent} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                    {p.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-dark mb-4 group-hover:text-brand-orange transition-colors uppercase">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 md:mb-8">{p.desc}</p>
                  <a 
                    href="https://www.narayanaschools.in/andhra-pradesh/chittoor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue font-bold text-[10px] md:text-xs uppercase tracking-widest hover:underline"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white/60 text-sm md:text-base uppercase tracking-widest font-bold mb-6 md:mb-8">Programs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-6 md:p-8 bg-brand-orange/10 rounded-2xl md:rounded-3xl border border-brand-orange/30 flex flex-row items-center gap-4 md:gap-6"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-7 h-7 md:w-8 md:h-8 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-display font-bold text-white mb-1 uppercase">Olympiads</h3>
                  <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                    National & International level preparation for Math, Science, and Cyber Olympiads. JEE Advanced preparation available for classes 6-12.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-6 md:p-8 bg-brand-orange/10 rounded-2xl md:rounded-3xl border border-brand-orange/30 flex flex-row items-center gap-4 md:gap-6"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-display font-bold text-white mb-1 uppercase">CO Batch</h3>
                  <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                    Advanced batch for students who completed E1-E5 levels in JEE/NEET preparation.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="p-6 md:p-8 bg-brand-orange/10 rounded-2xl md:rounded-3xl border border-brand-orange/30 flex flex-row items-center gap-4 md:gap-6"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <School className="w-7 h-7 md:w-8 md:h-8 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-display font-bold text-white mb-1 uppercase">CBSE Curriculum</h3>
                  <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                    CBSE-affiliated programs across all grades with national recognition.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
