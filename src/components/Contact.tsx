import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const contactLinks = [
    { icon: <Mail size={24} />, href: "mailto:umangmittal777@gmail.com", label: "Email", value: "umangmittal777@gmail.com" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/umang-mittal-2bb1b224a/", label: "LinkedIn", value: "linkedin.com/in/umang-mittal" },
    { icon: <Github size={24} />, href: "https://github.com/umang-888", label: "GitHub", value: "github.com/umang-888" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Whether you have an interesting project, a job opportunity, or just want to chat about AI and football, my inbox is always open.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center p-4 glass-panel border border-white/5 rounded-2xl hover:border-white/20 hover:bg-white/5 transition-all w-full"
              >
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all mr-6">
                  {link.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{link.label}</h4>
                  <p className="text-gray-400 text-sm md:text-xs xl:text-sm font-mono mt-1 break-all">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3 glass-panel p-8 rounded-3xl border border-white/10 relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-[50px] mix-blend-screen pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 uppercase tracking-wider">Name</label>
                  <input required type="text" id="name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors focus:shadow-[0_0_10px_rgba(0,243,255,0.2)]" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 uppercase tracking-wider">Email</label>
                  <input required type="email" id="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors focus:shadow-[0_0_10px_rgba(188,19,254,0.2)]" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300 uppercase tracking-wider">Subject</label>
                <input required type="text" id="subject" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors focus:shadow-[0_0_10px_rgba(0,243,255,0.2)]" placeholder="Collaboration / Opportunity" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 uppercase tracking-wider">Message</label>
                <textarea required id="message" rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors focus:shadow-[0_0_10px_rgba(188,19,254,0.2)] resize-none" placeholder="Let's build something amazing together..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg ${isSent ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500' : 'bg-gradient-hover border border-white/20 glass-panel text-white hover:border-white/40'} disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending Protocol Initiated...</span>
                ) : isSent ? (
                  <span>Message Transmitted Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
