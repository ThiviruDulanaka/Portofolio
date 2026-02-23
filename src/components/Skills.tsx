"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Link as LinkIcon, Code2, Cloud } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    icon: <Brain className="text-primary" />,
    skills: ["PyTorch", "TensorFlow", "Transformers", "NLP", "Scikit-Learn", "Computer Vision"],
  },
  {
    category: "Data Engineering",
    icon: <Database className="text-secondary" />,
    skills: ["Apache Spark", "Kafka", "PostgreSQL", "MongoDB", "Data Modeling", "ETL Pipelines"],
  },
  {
    category: "Blockchain & Web3",
    icon: <LinkIcon className="text-accent" />,
    skills: ["Solidity", "Ether.js", "Hardhat", "Smart Contracts", "DeFi Protocols", "The Graph"],
  },
  {
    category: "Full-Stack Development",
    icon: <Code2 className="text-primary" />,
    skills: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Deployment & Cloud",
    icon: <Cloud className="text-secondary" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel / Netlify"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary uppercase tracking-widest mb-4"
          >
            Capabilities
          </motion.h2>
          <h3 className="text-3xl md:text-5xl font-bold">Tech <span className="text-primary italic">Ecosystem</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-glass-border hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {group.icon}
                </div>
                <h4 className="text-xl font-bold">{group.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
