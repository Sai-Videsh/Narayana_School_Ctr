"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tile = () => {
  const tileRef = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    if (!tileRef.current) return;
    
    gsap.killTweensOf(tileRef.current);
    
    const tl = gsap.timeline();
    
    tl.to(tileRef.current, {
      rotateY: 180,
      backgroundColor: "#0EA5E9", // Sky Blue
      duration: 0.15,
      ease: "power2.out"
    })
    .to(tileRef.current, {
      rotateY: 0,
      backgroundColor: "transparent",
      duration: 0.6,
      ease: "power2.inOut",
      delay: 3
    });
  };

  return (
    <div
      ref={tileRef}
      onMouseEnter={handleHover}
      className="w-full h-full border-[0.5px] border-brand-blue/5"
      style={{ perspective: "1000px" }}
    />
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [tiles, setTiles] = useState<number[]>([]);

  useEffect(() => {
    setTiles(Array.from({ length: 150 }));

    const ctx = gsap.context(() => {
      const lines = titleRef.current?.querySelectorAll(".text-reveal-line");
      if (lines) {
        gsap.from(lines, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.5,
        });
      }

      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0 grid grid-cols-10 md:grid-cols-15 grid-rows-15 md:grid-rows-10">
        {tiles.map((_, i) => (
          <Tile key={i} />
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] z-10" />
      </div>

      <div className="container relative z-20 px-6 text-center pointer-events-none">
        {/* Larger Glowing Flag with Zero Radius */}
        <div className="mt-20 inline-block px-10 py-4 bg-brand-blue text-white text-lg font-bold rounded-none shadow-[0_0_30px_rgba(14,165,233,0.6)] mb-10 animate-pulse">
          SINCE 1979
        </div>

        <h1
          ref={titleRef}
          className="font-display font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-dark uppercase mb-6"
        >
          <span className="text-reveal-container block">
            <span className="text-reveal-line">ASIA'S LARGEST</span>
          </span>
          <span className="text-reveal-container block">
            <span className="text-reveal-line">EDUCATIONAL INSTITUTION</span>
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-brand-orange font-bold uppercase tracking-[0.4em] mb-12 opacity-0 translate-y-5"
        >
          ENABLING MILLIONS OF DREAMS
        </p>

        <p className="mt-8 text-lg text-gray-500 max-w-3xl mx-auto opacity-0 animate-fade-in [animation-delay:1.8s] [animation-fill-mode:forwards] leading-relaxed">
          From a single classroom with 7 students to 950+ campuses across India. 
          Narayana Schools has been shaping India's brightest minds for over 46 years.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center opacity-0 animate-fade-in [animation-delay:2.1s] [animation-fill-mode:forwards] pointer-events-auto">
          <a href="#programs">
            <button className="px-10 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-blue-dark transition-all duration-500 shadow-xl shadow-brand-orange/10">
              EXPLORE PROGRAMMES
            </button>
          </a>
          <a href="https://branches.narayanaschools.in/" target="_blank" rel="noopener noreferrer">
            <button className="px-10 py-4 border-2 border-brand-blue text-brand-blue font-bold rounded-full hover:bg-brand-blue hover:text-white transition-all">
              FIND A SCHOOL NEAR YOU
            </button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 pointer-events-none">
        <div className="w-6 h-10 border-2 border-brand-blue/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
