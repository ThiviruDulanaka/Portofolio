"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Cpu } from "lucide-react";

interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  github?: string;
  demo?: string;
  type: "AI" | "Full-Stack";
}

const projects: Project[] = [
  {
    title: "Predictive Supply Chain Optimizer",
    category: "AI & Data Science",
    problem: "Manufacturers struggled with 15% inventory waste due to volatile demand signals.",
    solution: "Engineered a Transformer-based forecasting engine with automated data pipelines and a React-based monitoring dashboard.",
    tech: ["Python", "PyTorch", "AWS Lambda", "PostgreSQL", "React"],
    impact: "Reduced waste by 12% and improved fulfillment speed by 20% in production tests.",
    github: "#",
    demo: "#",
    type: "AI",
  },

  {
    title: "Enterprise SaaS Infrastructure",
    category: "Full-Stack",
    problem: "Legacy monolithic system couldn't scale to meet growing multi-region demand.",
    solution: "Architected a microservices-based platform with robust authentication, real-time sync, and automated CI/CD pipelines.",
    tech: ["Next.js", "Node.js", "Redis", "Docker", "Kubernetes"],
    impact: "Supported 50k+ concurrent users with 99.9% uptime during peak loads.",
    github: "#",
    demo: "#",
    type: "Full-Stack",
  },
];

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row gap-8 p-6 md:p-8"
  >
    <div className="md:w-1/2">
      <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.type === "AI" && <Cpu size={80} className="text-primary/40" />}

        {project.type === "Full-Stack" && <Code2 size={80} className="text-accent/40" />}

        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-mono border border-white/10 uppercase tracking-tighter">
          {project.category}
        </div>
      </div>
    </div>

    <div className="md:w-1/2 flex flex-col">
      <h4 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h4>

      <div className="space-y-4 flex-grow">
        <div>
          <span className="text-xs font-mono text-primary uppercase block mb-1">Problem Context</span>
          <p className="text-foreground/70 text-sm leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-secondary uppercase block mb-1">System Architecture</span>
          <p className="text-foreground/70 text-sm leading-relaxed">{project.solution}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-accent uppercase block mb-1">Business Impact</span>
          <p className="text-foreground font-medium text-sm leading-relaxed">{project.impact}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {project.github && (
          <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
            <Github size={18} /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
            <ExternalLink size={18} /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Engineering Cases</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Featured <span className="text-primary italic">Solutions</span></h3>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} project={p} idx={idx} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            These are representative projects showcasing end-to-end engineering. I focus on building reliable systems that survive production scale.
          </p>
          <button className="px-8 py-3 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all duration-300">
            View Full Documentation on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
