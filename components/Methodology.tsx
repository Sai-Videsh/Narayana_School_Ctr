"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ClipboardCheck, BarChart3 } from "lucide-react";

const methods = [
  {
    title: "Common Teaching",
    desc: "Unified pedagogy with a '1+1 model' (one theory period + one practice period) ensuring consistent quality across all 950+ campuses.",
    icon: <BookOpen className="w-10 h-10" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Common Micro Schedule",
    desc: "Day-wise, subject-wise schedules shared with parents at the start of the year for full transparency and structured preparation.",
    icon: <Calendar className="w-10 h-10" />,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10"
  },
  {
    title: "Common Examination",
    desc: "Standardised assessments including CDF (Concept, Definitions & Formulae) tests and JEE/NEET-style national level papers.",
    icon: <ClipboardCheck className="w-10 h-10" />,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Common Analysis",
    desc: "Personalised error analysis and performance tracking across all campuses to identify and bridge learning gaps effectively.",
    icon: <BarChart3 className="w-10 h-10" />,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-medium text-5xl md:text-7xl tracking-tight text-dark mb-8 uppercase"
          >
            THE <span className="text-brand-orange">4Cs</span> ROADMAP.
          </motion.h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Our proprietary teaching approach ensures that every student, regardless of their location, 
            receives the same high standard of education.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Roadmap Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-blue/10 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 relative z-10">
            {methods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`flex-1 w-full p-10 bg-surface border-4 border-transparent rounded-3xl transition-all duration-700 hover:border-brand-orange hover:shadow-2xl group`}>
                  <div className={`w-20 h-20 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {method.icon}
                  </div>
                  <h3 className="font-display font-bold text-3xl text-dark mb-6 uppercase tracking-tight">{method.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{method.desc}</p>
                </div>

                {/* Center Node */}
                <div className="w-12 h-12 bg-white border-4 border-brand-orange rounded-full relative z-20 shrink-0 hidden lg:flex items-center justify-center font-bold text-dark shadow-xl">
                  {i + 1}
                </div>

                {/* Empty Space for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
