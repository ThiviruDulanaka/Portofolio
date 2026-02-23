"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-primary italic">Connect</span></h3>
            <p className="text-foreground/60 max-w-lg mx-auto">
              Let’s turn your idea into a scalable, deployed solution. I'm available for full-time roles and freelance engineering projects.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 md:p-12 rounded-3xl border border-glass-border relative z-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Tell me about your project or the role you're hiring for..."
                  />
                </div>
                <button className="w-full py-4 rounded-xl bg-primary text-background font-bold text-lg hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group">
                  Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Background Accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] -z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 blur-[80px] -z-0" />
          </motion.div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-sm text-foreground/60 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <CheckCircle size={16} className="text-primary" />
              <span>Typically responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
