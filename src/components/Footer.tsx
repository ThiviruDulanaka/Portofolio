"use client";

import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = React.useState<number | string>("");

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-xl font-bold mb-2">Thiviru<span className="text-primary italic">.dev</span></div>
          <p className="text-sm text-foreground/50">
            Final year AI &amp; Data Science undergraduate at Robert Gordon University.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Mail size={20} /></a>
        </div>

        <div className="text-sm text-foreground/40">
          © {year} Thiviru. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
