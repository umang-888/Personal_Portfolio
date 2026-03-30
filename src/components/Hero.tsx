import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentText = texts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="inline-block min-h-[40px] text-gradient font-bold drop-shadow-[0_0_8px_rgba(35,243,255,0.4)]">
      {texts[textIndex].substring(0, charIndex)}
      <span className="animate-pulse opacity-70">|</span>
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-blue/20 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass-panel"
          >
            <Terminal size={14} className="text-neon-blue" />
            <span className="text-xs font-mono text-gray-300 tracking-wider">Hello, World!</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            I'm <span className="text-white">Umang Mittal</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 flex justify-center items-center gap-3 h-12"
          >
            <span className="text-gray-400 font-light">I am an</span>
            <Typewriter texts={['AI Engineer', 'Full Stack Developer', 'Problem Solver']} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light mb-12"
          >
            Building Intelligent Systems. Solving Real Problems.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-hover border border-white/20 glass-panel font-medium text-white shadow-lg w-full sm:w-auto">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-semibold shadow-lg shadow-white/10 w-full sm:w-auto">
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex gap-6"
          >
            {[
              { icon: <Github size={20} />, href: "https://github.com/umang-888", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/umang-mittal-2bb1b224a/", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:umangmittal777@gmail.com", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue/50 transition-all hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer flex flex-col items-center gap-2"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
