"use client";

import { motion } from "framer-motion";

const faculty = [
  { name: "Dr. K. Srinivas", role: "Physics HOD", exp: "20+ Years", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Mrs. S. Lakshmi", role: "Biology Expert", exp: "15+ Years", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Mr. R. Varma", role: "Mathematics Guru", exp: "18+ Years", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Dr. P. Reddy", role: "Chemistry Lead", exp: "22+ Years", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight text-dark mb-6">
            GUIDING <span className="text-brand-orange">MINDS.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Meet the architects of our success—experienced educators dedicated to 
            unlocking the potential in every student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  style={{ backgroundImage: `url(${member.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-1">{member.name}</h4>
              <p className="text-brand-orange text-sm font-bold mb-2">{member.role}</p>
              <p className="text-gray-600 text-xs uppercase tracking-widest">{member.exp} Experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
