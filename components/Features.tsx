"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Trophy, Users, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "World Class Curriculum",
    description: "Integrated programs designed to prepare students for national and international competitive exams.",
    icon: <BookOpen className="w-8 h-8 text-brand" />,
  },
  {
    title: "Olympic Champions",
    description: "Consistent track record of producing top rankers in IIT-JEE, NEET, and International Olympiads.",
    icon: <Trophy className="w-8 h-8 text-brand" />,
  },
  {
    title: "Expert Mentorship",
    description: "Highly qualified faculty dedicated to personalized student growth and conceptual clarity.",
    icon: <Users className="w-8 h-8 text-brand" />,
  },
  {
    title: "Smart Infrastructure",
    description: "Cutting-edge labs, digital classrooms, and extensive research facilities at Chittoor campus.",
    icon: <Zap className="w-8 h-8 text-brand" />,
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="programs" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter text-white mb-6">
            ACADEMIC <br /> <span className="text-brand">SUPERIORITY.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            At Narayana, we don't just teach; we shape future leaders through a 
            rigorous yet holistic approach to modern education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-surface border border-white/5 rounded-2xl hover:border-brand/50 transition-colors group cursor-default"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
