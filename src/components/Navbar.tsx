import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 glass-panel border-b border-white/10"
    >
      <div className="text-2xl font-bold tracking-tighter">
        Umang<span className="text-neon-blue">.</span>
      </div>
      
      <div className="hidden md:flex gap-8">
        {links.map((link, idx) => (
          <a
            key={idx} 
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
      
      {/* Mobile Menu Toggle (simplified for now) */}
      <div className="md:hidden">
        <button className="text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
