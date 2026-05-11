"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Scoring 498 in Class 10 was a dream come true. The consistent mentoring and custom learning plans supported my progress every day.",
    author: "Parth Bansal",
    role: "Class 10 Topper",
  },
  {
    quote: "Narayana gave me the structure, focus and confidence I needed to excel. Scoring 495 was not just about hard work, it was about smart strategy.",
    author: "S. Vakhin",
    role: "Class 12 Topper",
  },
  {
    quote: "The daily tests, in-depth discussions, and personalised guidance made a significant impact. Our teachers refined our exam strategies.",
    author: "Bani Brata Majee",
    role: "JEE 100 Percentile",
  },
  {
    quote: "The integrated model made managing boards and competitive exams manageable. Tools like ASTRA and nLearn were powerful.",
    author: "Reyansh Devnani",
    role: "Class 10 Topper",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight text-dark uppercase">
            VOICES OF <br /> <span className="text-brand-orange">SUCCESS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-10 bg-white rounded-3xl relative border-4 border-transparent hover:border-black transition-all duration-700 shadow-xl"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand-orange opacity-10" />
              <p className="text-gray-600 text-lg mb-8 relative z-10 italic leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="text-dark font-bold">{t.author}</p>
                <p className="text-brand-orange text-sm font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
