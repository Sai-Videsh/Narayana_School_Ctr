"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Search, Layout } from "lucide-react";

const innovations = [
  {
    title: "nLearn Platform",
    desc: "Our proprietary digital learning platform allowing real-time performance tracking and benchmarking against 600,000+ students.",
    icon: <Layout className="w-6 md:w-8 h-6 md:h-8" />
  },
  {
    title: "ASTRA",
    desc: "Advanced Student Tutoring & Resource Assistant. An AI-enabled tool for personalized practice and instant doubt-solving.",
    icon: <Cpu className="w-6 md:w-8 h-6 md:h-8" />
  },
  {
    title: "CDF Technique",
    desc: "Concepts, Definitions & Formulae method that builds deep understanding and critical thinking for complex problem-solving.",
    icon: <Zap className="w-6 md:w-8 h-6 md:h-8" />
  }
];

export default function Innovation() {
  return (
    <section id="innovation" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-brand-blue/5 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Search className="w-3 h-3" /> FUTURE-READY LEARNING
            </motion.div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl tracking-tight text-dark mb-6 md:mb-8 uppercase">
              TECHNOLOGY & <br />
              <span className="text-brand-orange">INNOVATION.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
              At Narayana, we blend 46 years of academic expertise with cutting-edge 
              AI and data analytics to provide a learning experience that is truly personalized.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              {innovations.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 md:gap-6 p-6 md:p-8 rounded-[2rem] bg-white border border-brand-blue/10 hover:border-brand-orange/30 transition-all duration-700 shadow-xl"
                >
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-sm md:text-base mb-1 uppercase">{item.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
              
              <div className="absolute top-6 md:top-10 right-6 md:right-10 glass p-4 md:p-6 rounded-2xl md:rounded-3xl border-white/20 animate-float shadow-2xl">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500" />
                  <p className="text-dark text-[10px] md:text-xs font-bold uppercase">nLearn Active</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="w-20 md:w-32 h-1.5 md:h-2 bg-dark/10 rounded-full" />
                  <div className="w-14 md:w-24 h-1.5 md:h-2 bg-dark/10 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
