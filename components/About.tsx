"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display font-medium text-3xl sm:text-5xl md:text-7xl tracking-tight text-dark mb-10 md:mb-12 uppercase leading-tight"
          >
            OUR <span className="text-brand-orange">STORY.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-gray-600 text-base md:text-xl leading-relaxed"
          >
            <p>
              In 1979, Dr. Ponguru Narayana, a gold medalist in Mathematics and PhD in Statistics, 
              started a tuition centre in a small rented room in Nellore with just 5 to 7 students. 
            </p>
            <p>
              What began as a humble coaching class has grown into one of Asia's largest educational institutions, 
              with 950+ campuses across 23 states. Today, Narayana educates over 600,000 students daily.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pt-8 md:pt-12">
              <div className="p-8 md:p-10 rounded-3xl bg-white shadow-xl shadow-brand-blue/5 border border-brand-blue/5">
                <h4 className="text-brand-orange font-bold text-3xl md:text-5xl mb-2 md:mb-4">600,000+</h4>
                <p className="text-dark font-bold uppercase tracking-widest text-[10px] md:text-sm">Students educated daily</p>
              </div>
              <div className="p-8 md:p-10 rounded-3xl bg-white shadow-xl shadow-brand-blue/5 border border-brand-blue/5">
                <h4 className="text-brand-orange font-bold text-3xl md:text-5xl mb-2 md:mb-4">50,000+</h4>
                <p className="text-dark font-bold uppercase tracking-widest text-[10px] md:text-sm">Dedicated educators</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
