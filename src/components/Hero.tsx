"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import HeroBg from "./HeroBg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 z-0">
        <HeroBg />
        {/* Centre vignette so text stays readable */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/40 to-background/90" />
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-6">
            <Terminal size={14} />
            <span>Final Year · AI &amp; Data Science · RGU</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Hi, I&apos;m <span className="text-primary italic">Thiviru</span>
            <br />
            AI &amp; Data Science <span className="text-secondary">Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            On a <span className="text-foreground font-semibold">constant learning curve</span> — building projects in AI, data science, and full-stack development, with growing interests in <span className="text-primary font-semibold">Fintech, Blockchain & Quantitative Trading</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-background font-bold text-lg hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group">
              Hire Me <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl glass font-bold text-lg hover:bg-white/5 transition-all duration-300">
              View Projects
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
