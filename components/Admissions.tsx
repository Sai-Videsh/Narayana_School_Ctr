"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  { num: "01", title: "Registration", desc: "Submit the online enquiry form or visit the campus." },
  { num: "02", title: "Entrance Test", desc: "Appear for the Narayana Talent Scholarship Test (NSAT)." },
  { num: "03", title: "Interview", desc: "Personal interaction with academic counselors." },
  { num: "04", title: "Enrollment", desc: "Complete documentation and secure your future." },
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    grade: "Select Class",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "9703174756";
    const text = `Hello Narayana Schools Chittoor,%0A%0A*Admission Enquiry*%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Class:* ${formData.grade}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/91${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="admissions" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl tracking-tight text-dark mb-10 md:mb-12 uppercase leading-tight">
              ADMISSION <br /> <span className="text-brand-orange">PROCESS.</span>
            </h2>
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 md:gap-8 items-start group"
                >
                  <span className="text-3xl md:text-5xl font-display font-bold text-brand-orange/10 group-hover:text-brand-orange transition-colors duration-500">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-dark mb-1 md:mb-2 uppercase">{step.title}</h4>
                    <p className="text-gray-600 text-sm md:text-lg">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass border border-brand-blue/10 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl transition-all duration-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-dark mb-8 md:mb-10 uppercase tracking-tighter">ENQUIRY FORM</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="bg-surface border-2 border-brand-blue/10 p-4 md:p-5 rounded-xl md:rounded-2xl text-sm md:text-base text-dark outline-none focus:border-brand-orange transition-colors" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="bg-surface border-2 border-brand-blue/10 p-4 md:p-5 rounded-xl md:rounded-2xl text-sm md:text-base text-dark outline-none focus:border-brand-orange transition-colors" 
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-surface border-2 border-brand-blue/10 p-4 md:p-5 rounded-xl md:rounded-2xl text-sm md:text-base text-dark outline-none focus:border-brand-orange transition-colors" 
              />
              <select 
                value={formData.grade}
                onChange={(e) => setFormData({...formData, grade: e.target.value})}
                className="w-full bg-surface border-2 border-brand-blue/10 p-4 md:p-5 rounded-xl md:rounded-2xl text-sm md:text-base text-dark outline-none focus:border-brand-orange transition-colors"
              >
                <option disabled>Select Class</option>
                <option>Class 6th-10th</option>
                <option>Class 11th-12th</option>
              </select>
              <textarea 
                placeholder="Message" 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-surface border-2 border-brand-blue/10 p-4 md:p-5 rounded-xl md:rounded-2xl text-sm md:text-base text-dark outline-none focus:border-brand-orange transition-colors"
              ></textarea>
              <button type="submit" className="w-full py-4 md:py-5 bg-brand-orange text-white font-bold rounded-xl md:rounded-2xl hover:bg-brand-blue-dark transition-all shadow-xl shadow-brand-orange/10 mb-4 md:mb-6 uppercase tracking-widest text-xs md:text-sm">
                SUBMIT VIA WHATSAPP
              </button>
              <div className="text-center">
                <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">OR</span>
                <a 
                  href="https://www.narayanaschools.in/admission-enquiry-form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-4 text-brand-blue font-bold text-[10px] md:text-sm hover:underline uppercase tracking-widest"
                >
                  VISIT OFFICIAL ENQUIRY PORTAL
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
