import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Target, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Brain size={24} className="text-neon-purple" />,
      title: "Interested in AI",
      desc: "Fascinated by artificial intelligence, constantly exploring its potential to create innovative, data-driven solutions."
    },
    {
      icon: <Code size={24} className="text-neon-blue" />,
      title: "Full Stack Developer",
      desc: "Creating scalable, robust, and visually stunning web applications."
    },
    {
      icon: <Target size={24} className="text-emerald-400" />,
      title: "Problem Solver",
      desc: "Approaching challenges logically to yield optimal, efficient solutions."
    },
    {
      icon: <Trophy size={24} className="text-amber-400" />,
      title: "Football Enthusiast",
      desc: "Passionate about the beautiful game, bringing teamwork and strategy to code."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden text-gray-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed relative"
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-neon-blue/50 to-transparent"></div>
            
            <p>
              I am <span className="text-white font-semibold">Umang Mittal</span>, a passionate Full Stack Developer and tech enthusiast with a strong interest in AI. I am currently pursuing my studies at <span className="text-neon-blue font-medium">PDPM IIITDM Jabalpur</span>.
            </p>
            
            <p>
              My journey into technology began with a deep-seated curiosity about how things work. Today, that curiosity drives me to build <span className="text-white font-medium">scalable, intelligent systems</span> that not only function beautifully but also solve complex, real-world problems.
            </p>
            
            <p>
              I thrive at the intersection of logic and creativity—whether it's architecting robust backend APIs, training machine learning models, or crafting pixel-perfect, highly interactive frontend user interfaces. My ambition is to continuously push boundaries.
            </p>

            <p className="pt-4 border-t border-white/10 italic text-gray-400">
              When I'm not writing code or analyzing data, you'll probably find me on the pitch or analyzing a <strong className="text-white font-normal">football</strong> match. The sport teaches me the values of strategy, quick decision-making, and teamwork—principles I apply to every engineering endeavor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all shadow-lg hover:shadow-neon-blue/10 bg-white/[0.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
