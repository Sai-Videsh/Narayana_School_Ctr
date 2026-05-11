"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Dr. Sindhura Narayana",
    role: "Director",
    desc: "Gold Medalist in MBBS. Joined the institution in 2011 and spearheaded expansion from 3 states to 23 states. Focused on empowering female students and has personally helped over 200,000 girls across India pursue their dreams.",
    img: "/Dr. Sindhura Narayana.png"
  },
  {
    name: "Sharani Narayana",
    role: "Director",
    desc: "MBA from Newcastle University, UK. Drives Narayana's business strategy and academic excellence initiatives. Led the introduction of integrated courses covering JEE Advanced, NEET, CA, and UPSC.",
    img: "/Sharani Narayana.png"
  },
  {
    name: "Puneet Kothapa",
    role: "Executive Leadership",
    desc: "Instrumental in scaling Narayana from a few states to 950+ campuses across 23 states in India. MBA from Newcastle University, UK.",
    img: "/Puneet Kothapa.png"
  }
];

export default function Founders() {
  return (
    <section id="founders" className="py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Decorative Parallax Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Founder Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight mb-8 uppercase">
              THE VISIONARY <br />
              <span className="text-brand-orange">DR. PONGURU NARAYANA.</span>
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                A gold medalist in Mathematics and PhD in Statistics, Dr. Ponguru Narayana 
                started a tuition centre in 1979 with just 7 students. His aspiration and commitment 
                to creating World Class Leaders has built Asia's largest educational conglomerate.
              </p>
              <div className="pt-8 border-t border-white/10">
                <p className="font-display italic text-2xl mb-4 text-white">
                  "Education is not just about learning facts, but training the mind to think."
                </p>
                <p className="text-brand-orange font-bold tracking-widest uppercase text-sm">
                  Founder & Chairman
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-700">
              <div 
                className="absolute inset-0 bg-cover bg-top transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('/Dr._Ponguru_Narayana_(cropped).jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-2xl max-w-xs border border-white/20">
              <p className="text-brand-orange font-bold text-5xl mb-2">46+</p>
              <p className="text-white text-sm font-bold leading-tight uppercase tracking-widest">Years of Global Leadership</p>
            </div>
          </motion.div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 hover:border-brand-orange/30 transition-all duration-700 group hover:shadow-2xl"
            >
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-8 shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-top grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('${leader.img}')` }}
                />
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-2">{leader.name}</h3>
              <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-6">{leader.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
