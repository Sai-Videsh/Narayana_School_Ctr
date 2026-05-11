"use client";

import { motion } from "framer-motion";

const campuses = [
  {
    name: "Main Architecture",
    category: "Infrastructure",
    img: "/narayana School Architecture.png",
  },
  {
    name: "Digital Library",
    category: "Knowledge Hub",
    img: "/Library.webp",
  },
  {
    name: "Sports Complex",
    category: "Narayana Sports",
    img: "/sports.webp",
  },
  {
    name: "Innovation Lab",
    category: "Advanced Labs",
    img: "/innovation lab.webp",
  },
];

export default function CampusGallery() {
  return (
    <section id="campus" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight text-dark mb-6 uppercase">
              OUR <span className="text-brand-orange">WORLD.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the state-of-the-art facilities at our Chittoor campus 
              designed to inspire and motivate students.
            </p>
          </div>
          <a href="https://www.narayanaschools.in/andhra-pradesh/chittoor" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 border-2 border-brand-orange text-brand-orange font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all uppercase tracking-widest text-xs">
              VIEW ALL FACILITIES
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campuses.map((campus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${campus.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <p className="text-brand-orange font-bold text-xs mb-3 tracking-widest uppercase">
                  {campus.category}
                </p>
                <h3 className="text-white font-display font-medium text-4xl tracking-tight uppercase">
                  {campus.name}
                </h3>
                
                <div className="mt-6 flex items-center gap-2 text-white/0 group-hover:text-white/100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm font-bold underline underline-offset-8 uppercase tracking-widest">Explore Facility</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
