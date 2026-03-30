import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Box, Clock } from 'lucide-react';
import { Github } from './Icons';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [

    {
      title: "LaundryX",
      type: "Service Platform",
      image: "",
      icon: <Box className="w-8 h-8 text-neon-blue" />,
      desc: "An end-to-end laundry service platform that allows users to schedule pickups, track order progress in real-time, and make secure payments, while providing launderers with a powerful dashboard for managing operations.",
      techStack: ["React.js", "Chakra UI", "Express.js", "MongoDB", "Razorpay", "JWT"],
      features: ["Pickup Scheduling & Order Tracking","Secure Online Payments (Razorpay)","Real-Time Status Updates","Launderer Dashboard for Order Management","JWT Authentication with Cookie-Based Sessions"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "MERN Chat",
      type: "Real-Time Messaging App",
      image: "/MERNCHAT.png",
      icon: <Clock className="w-8 h-8 text-neon-blue" />,
      desc: "A full-featured real-time chat application enabling seamless one-to-one and group communication with instant message delivery, live typing indicators, and dynamic conversation updates powered by WebSockets.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT"],
      features: ["Real-Time Messaging (Socket.io)","Group Chats & Typing Indicators","JWT Authentication & Secure Sessions","Dynamic Chat UI with Smooth Updates"],
      github: "https://github.com", 
      demo: "https://demo.com"
    },
    {
      title: "Endeavours",
      type: "SaaS Platform",
      image: "/Endeavours.png",
      icon: <Box className="w-8 h-8 text-neon-blue" />,
      desc: "A comprehensive SaaS project management platform designed to streamline task management, facilitate real-time team collaboration, and provide actionable insights via a powerful analytics dashboard.",
      techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      features: ["Advanced Task Workflows", "Real-Time Collaboration", "Analytics Dashboard"],
      github: "https://github.com",
      demo: "https://demo.com"
    }

  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-24 text-gray-300">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const isComingSoon = project.type === "Coming Soon";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Visual Representation Area */}
                <div className="w-full lg:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                    style={{ perspective: 1000 }}
                    className={`relative w-full aspect-video rounded-xl glass-panel flex items-center justify-center border border-white/10 group overflow-hidden ${isComingSoon ? 'opacity-70 grayscale' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-50"></div>
                    
                    {/* Render image or fallback to icon */}
                    {project.image ? (
                        <div className="absolute inset-0 w-full h-full p-2 z-10 flex items-center justify-center">
                           <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg border border-white/5 group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" />
                           {isComingSoon && <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs border border-white/20 rounded-full bg-black/60 backdrop-blur-sm text-white">In Development</div>}
                        </div>
                    ) : (
                        <div className="z-10 flex flex-col items-center justify-center p-8 text-center transition-transform group-hover:scale-110 duration-700">
                           {project.icon}
                           <h3 className="mt-4 text-2xl font-bold text-white tracking-widest uppercase opacity-80">{project.title}</h3>
                           {isComingSoon && <div className="mt-4 px-4 py-1 text-xs border border-white/20 rounded-full bg-black/40">In Development</div>}
                        </div>
                    )}

                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-blue rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-purple rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  </motion.div>
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="text-neon-blue text-sm font-mono tracking-wider">{project.type}</span>
                    <h3 className="text-3xl font-bold text-white mt-2">{project.title}</h3>
                  </div>

                  <div className="glass-panel p-6 rounded-xl border border-white/5 relative">
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {project.desc}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400 font-mono">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="flex items-center gap-1.5 break-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2 pt-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-emerald-400/80">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 pt-4">
                    <a href={project.github} className={`flex items-center gap-2 text-sm font-medium hover:text-white transition-colors ${isComingSoon ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}>
                      <Github size={18} /> Code
                    </a>
                    <a href={project.demo} className={`flex items-center gap-2 text-sm font-medium hover:text-neon-blue transition-colors ${isComingSoon ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}>
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
