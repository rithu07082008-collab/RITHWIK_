import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData.ts';
import { ArrowDown, Github, Linkedin, Sparkles, Terminal, Code, Cpu, ExternalLink } from 'lucide-react';

interface HeroProps {
  linkedinUrl: string;
  onEditLinkedin?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ linkedinUrl, onEditLinkedin }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 sm:pt-36 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient glowing accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Pill Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm shadow-cyan-500/5 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-medium text-slate-200">1st Year B.Tech CSE</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400 font-medium">Aspiring AI Engineer</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              Building the Future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400">
                Artificial Intelligence
              </span>{' '}
              & Software
            </h1>

            {/* 2-3 Line Summary */}
            <p
              id="hero-summary"
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Hi, I&apos;m <span className="text-white font-semibold">{PROFILE.name}</span> — a motivated 1st-year
              Computer Science & Engineering student passionate about Generative AI, prompt architecture,
              and modern web software engineering. Driven by curiosity to transform ideas into functional systems.
            </p>

            {/* Action Buttons */}
            <div id="hero-actions" className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                id="hero-cta-linkedin"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                id="hero-cta-github"
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all duration-200"
                title="Explore GitHub Repositories"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 w-full">
              {PROFILE.stats.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm sm:text-base font-semibold text-slate-200 mt-0.5">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Column: Interactive Tech Terminal Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div
              id="hero-terminal-card"
              className="w-full max-w-md rounded-2xl bg-slate-900/90 border border-slate-700/80 p-5 sm:p-6 shadow-2xl shadow-cyan-950/40 relative group hover:border-slate-600 transition-all duration-300"
            >
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs text-slate-400 font-mono ml-2">rithwik.profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                  <Terminal className="w-3 h-3" />
                  <span>zsh</span>
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                <div>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span>{' '}
                  <span className="text-slate-500">=</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">&apos;Rithwik&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">program:</span>{' '}
                  <span className="text-emerald-300">&apos;B.Tech Computer Science&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">year:</span>{' '}
                  <span className="text-amber-300">1</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">focusAreas:</span> [
                  <div className="pl-4 text-cyan-200">
                    &apos;Generative AI&apos;,<br />
                    &apos;Prompt Engineering&apos;,<br />
                    &apos;Web Fundamentals&apos;
                  </div>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">mindset:</span>{' '}
                  <span className="text-emerald-300">&apos;Curious &bull; Analytical &bull; Builder&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">readyToCollaborate:</span>{' '}
                  <span className="text-violet-400">true</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Terminal footer status */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Terminal Active</span>
                </div>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 hover:underline"
                >
                  <span>@rithu07082008-collab</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
