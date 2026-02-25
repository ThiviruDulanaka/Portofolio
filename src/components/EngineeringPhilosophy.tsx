"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Zap, Cpu, BarChart3, Globe } from "lucide-react";

const EngineeringPhilosophy = () => {
  const principles = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Architecture",
      desc: "Turning abstract business requirements into robust, modular, and scalable system designs.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Clean & Testable Code",
      desc: "Writing maintainable, self-documenting code with comprehensive testing to ensure reliability.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      desc: "Fine-tuning every layer of the stack to deliver lightning-fast, high-efficiency solutions.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      desc: "Seamlessly embedding model inference into production environments for real-world impact.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Lifecycle Delivery",
      desc: "Taking ownership of the entire pipeline, from initial architecture to final cloud deployment.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Continuous Learning",
      desc: "Constantly exploring new fields — from AI and data science to fintech, blockchain, and quantitative trading.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary uppercase tracking-widest mb-4"
          >
            Philosophy
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Engineering <span className="text-primary italic">Beyond</span> the Code
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Every project is approached as a full lifecycle: idea → architecture → scalable implementation → deployment → iteration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className="text-primary mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {p.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h4>
              <p className="text-foreground/60 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
