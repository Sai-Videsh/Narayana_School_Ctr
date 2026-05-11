"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const events = [
  { title: "Annual Science Fair 2024", date: "May 15, 2024", type: "Event" },
  { title: "NSAT Scholarship Test Phase 2", date: "June 02, 2024", type: "Academic" },
  { title: "Guest Lecture: Future of AI", date: "June 10, 2024", type: "Seminar" },
];

export default function NewsEvents() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight text-dark">
            NEWS & <span className="text-brand-orange">EVENTS.</span>
          </h2>
          <a href="https://www.narayanaschools.in/andhra-pradesh/chittoor" target="_blank" rel="noopener noreferrer">
            <button className="hidden md:block text-dark font-bold underline underline-offset-8 decoration-brand-orange decoration-2 uppercase tracking-widest text-xs">
              ALL UPDATES
            </button>
          </a>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-surface border border-brand-blue/10 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-brand-blue/5 transition-all shadow-lg shadow-brand-blue/5"
            >
              <div className="flex gap-6 items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center border border-brand-blue/10 group-hover:border-brand-orange/30 transition-colors">
                  <Calendar className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-1 block">{event.type}</span>
                  <h4 className="text-xl font-bold text-dark group-hover:text-brand-orange transition-colors">{event.title}</h4>
                </div>
              </div>
              <p className="text-gray-600 font-medium">{event.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
