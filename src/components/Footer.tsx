import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData.ts';
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  linkedinUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ linkedinUrl }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#0b1120] border-t border-slate-800/80 py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Logo & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">{PROFILE.name}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                CSE 1st Year
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {PROFILE.role} &bull; Building with software & artificial intelligence
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-cyan-400 hover:text-cyan-300 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Direct Email"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-xs hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Copyright and developer guidance comment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {PROFILE.name}. All rights reserved. Designed with Tailwind CSS & modern responsive layout.
          </p>

          <div className="flex items-center gap-3 text-slate-400">
            {/* Future project links and resumes can be updated in /src/data/portfolioData.ts */}
            <span className="hidden sm:inline text-slate-500 font-mono text-[11px]">Designed for B.Tech CSE</span>
            <span className="font-mono text-[11px] text-slate-500">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
