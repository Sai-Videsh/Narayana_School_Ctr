import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Results from "@/components/Results";
import Admissions from "@/components/Admissions";
import CampusGallery from "@/components/CampusGallery";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import SmoothScroll from "@/components/SmoothScroll";
import Founders from "@/components/Founders";
import Methodology from "@/components/Methodology";
import Innovation from "@/components/Innovation";
import SpecialProgrammes from "@/components/SpecialProgrammes";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-white text-dark selection:bg-brand-blue selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Founders />
        <Methodology />
        <Programs />
        <Innovation />
        <Results />
        <SpecialProgrammes />
        <Admissions />
        <CampusGallery />
        <Testimonials />
        <NewsEvents />
        
        {/* Simple Footer */}
        <footer className="py-20 bg-surface border-t border-brand-blue/10">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image src="/logo.png" alt="Narayana Logo" fill className="object-contain" />
                </div>
                <span className="font-display font-bold text-lg tracking-tight uppercase">NARAYANA <span className="text-brand-orange">CHITTOOR</span></span>
              </div>
              <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
                Chittoor Campus, Andhra Pradesh. Empowering the leaders of tomorrow with world-class education and values since 1979.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-dark mb-2 uppercase tracking-widest text-xs">QUICK LINKS</h4>
              <a href="https://www.narayanaschools.in/admission-enquiry-form" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-orange text-sm transition-colors">Admissions 2024-25</a>
              <a href="#programs" className="text-gray-600 hover:text-brand-orange text-sm transition-colors">Academic Programmes</a>
              <a href="#methodology" className="text-gray-600 hover:text-brand-orange text-sm transition-colors">4Cs Methodology</a>
              <a href="https://www.narayanaschools.in/andhra-pradesh/chittoor" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-orange text-sm transition-colors">Chittoor Portal</a>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-dark mb-4 uppercase tracking-widest text-xs">CONTACT FOR ADMISSIONS (IN CHITTOOR)</h4>
                <a href="tel:+919703174756" className="group flex flex-col gap-1">
                  <span className="text-brand-orange font-bold text-xl group-hover:underline">K Suresh</span>
                  <span className="text-gray-600 text-lg font-bold transition-colors group-hover:text-brand-blue">+91 9703174756</span>
                </a>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-brand-blue/5">
                <h4 className="font-bold text-dark mb-2 uppercase tracking-widest text-[10px] opacity-50">General Support</h4>
                <p className="text-gray-600 text-sm font-medium">Toll-Free: 1800 102 3344</p>
                <p className="text-gray-600 text-sm font-medium">info@narayanagroup.com</p>
              </div>
              
              <a href="https://www.narayanaschools.in/nconnect/" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold text-sm hover:underline uppercase tracking-widest text-xs">nConnect Parent App</a>
            </div>
          </div>
          
          <div className="container mx-auto px-6 mt-20 pt-8 border-t border-brand-blue/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">© 2018 NARAYANA EDUCATIONAL INSTITUTIONS. ALL RIGHTS RESERVED.</p>
              <p className="text-brand-orange text-[9px] font-bold tracking-[0.2em] uppercase italic">developed by sai videsh</p>
            </div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/thenarayanagroup" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-blue text-xs transition-colors">INSTAGRAM</a>
              <a href="https://facebook.com/TheNarayanaGroup" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-blue text-xs transition-colors">FACEBOOK</a>
              <a href="#" className="text-gray-600 hover:text-brand-blue text-xs transition-colors">PRIVACY POLICY</a>
            </div>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
