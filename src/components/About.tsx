"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Brain, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
              Background
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Learning, Building, <br />
              <span className="text-primary italic">Growing Every Day</span>
            </h3>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              A fresh CS graduate on a <span className="text-foreground font-semibold">constant learning curve in AI &amp; Data Science</span>. I build freelance and personal projects to turn theory into working software &mdash; with a strong interest in <span className="text-foreground font-semibold">Fintech, Blockchain &amp; Quantitative Trading</span>.
            </p>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
              &ldquo;I learn best by building. Every project teaches me something new &mdash; and I never stop asking why.&rdquo;
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Brain />, label: "AI & Data Science" },
                { icon: <Code2 />, label: "Full-Stack Dev" },
                { icon: <Database />, label: "Fintech & Quant Interest" },
                { icon: <Rocket />, label: "Freelance Projects" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-foreground/80">
                  <span className="text-primary">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border-2 border-glass-border relative group">
              {/* Replace with actual image later if needed, using a placeholder gradient for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
                <div className="text-primary/20">
                  <Code2 size={120} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute top-8 left-8 glass px-4 py-2 rounded-xl text-sm font-mono border border-primary/30">
                PyTorch
              </div>
              <div className="absolute bottom-12 right-12 glass px-4 py-2 rounded-xl text-sm font-mono border border-secondary/30">
                Next.js
              </div>
              <div className="absolute top-1/2 -right-4 glass px-4 py-2 rounded-xl text-sm font-mono border border-accent/30 translate-x-1/2 -translate-y-1/2">
                Pandas
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
