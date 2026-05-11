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
    <section id="campus" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-7xl tracking-tight text-dark mb-4 md:mb-6 uppercase">
              OUR <span className="text-brand-orange">WORLD.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Experience the state-of-the-art facilities at our Chittoor campus 
              designed to inspire and motivate students.
            </p>
          </div>
          <a href="https://www.narayanaschools.in/andhra-pradesh/chittoor" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-3.5 md:px-8 md:py-4 border-2 border-brand-orange text-brand-orange font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all uppercase tracking-widest text-[10px] md:text-xs">
              VIEW ALL FACILITIES
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {campuses.map((campus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] group cursor-pointer shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${campus.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-transparent to-transparent opacity-70 md:opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-5 md:p-10 w-full">
                <p className="text-brand-orange font-bold text-[10px] md:text-xs mb-2 md:mb-3 tracking-widest uppercase">
                  {campus.category}
                </p>
                <h3 className="text-white font-display font-medium text-2xl md:text-4xl tracking-tight uppercase">
                  {campus.name}
                </h3>
                
                <div className="mt-4 md:mt-6 flex items-center gap-2 text-white/100 md:text-white/0 md:group-hover:text-white/100 transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                  <span className="text-[10px] md:text-sm font-bold underline underline-offset-8 uppercase tracking-widest">Explore Facility</span>
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
