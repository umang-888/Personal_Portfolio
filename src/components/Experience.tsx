import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems = [
    {
      icon: <GraduationCap size={20} className="text-neon-blue" />,
      date: "Currently Pursuing",
      title: "B.Tech in Computer Science & Engineering",
      org: "PDPM IIITDM Jabalpur",
      desc: "Laying a strong foundation in core computer science subjects, algorithms, and system design, while maintaining a robust academic track record. Actively participating in tech clubs and collaborative development."
    },
    {
      icon: <Briefcase size={20} className="text-neon-purple" />,
      date: "Ongoing",
      title: "GirlScript Contributor",
      org: "Open Source Contributor",
      desc: "Actively participating and contributing to open-source initiatives. Enhancing codebases, squashing bugs, and collaborating globally to build performant and scalable Full Stack web applications."
    },
    {
      icon: <Code size={20} className="text-emerald-400" />,
      date: "Continuous",
      title: "Competitive Programming & DSA",
      org: "Various Platforms",
      desc: "Actively engaging in problem-solving through data structures and algorithms. Consistently translating complex logic into highly optimized code, significantly enhancing my strategic programming skills."
    },
    {
      icon: <Award size={20} className="text-amber-400" />,
      date: "Recent",
      title: "Real-World Application Building",
      org: "Independent Projects",
      desc: "Developed full-stack platforms using modern technologies (Next.js, Node.js, MongoDB). Successfully integrated authentication, state management, and real-time database syncing in SaaS-based paradigms."
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[150px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Journey & Milestones</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-6 md:ml-12 text-gray-300">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              className="mb-12 ml-10 relative group"
            >
              <div className="absolute -left-16 top-1 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all z-10 glass-panel">
                 {item.icon}
              </div>

              <div className="glass-panel p-6 rounded-xl border border-white/10 group-hover:border-white/30 transition-all">
                <span className="text-xs font-mono text-neon-purple tracking-widest uppercase mb-2 block">{item.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wide">{item.org}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
