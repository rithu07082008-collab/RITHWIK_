import React from 'react';
import { PROFILE } from '../data/portfolioData.ts';
import { GraduationCap, Brain, Lightbulb, Compass, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'B.Tech CSE Foundation',
      subtitle: '1st Year Undergraduate',
      description:
        'Building rigorous fundamentals in algorithmic thinking, data structures, computational logic, and modular software design.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/30',
      borderColor: 'border-cyan-800/40'
    },
    {
      icon: Brain,
      title: 'Curiosity for GenAI & LLMs',
      subtitle: 'Emerging AI Frontiers',
      description:
        'Fascinated by generative architectures, reasoning capabilities of large language models, structured prompting, and contextual AI workflows.',
      color: 'text-violet-400',
      bgColor: 'bg-violet-950/30',
      borderColor: 'border-violet-800/40'
    },
    {
      icon: Lightbulb,
      title: 'Problem-Solving Mindset',
      subtitle: 'Iterative & Analytical',
      description:
        'Approaching engineering challenges systematically: breaking complex requirements into verifiable logical components and clean implementations.',
      color: 'text-teal-400',
      bgColor: 'bg-teal-950/30',
      borderColor: 'border-teal-800/40'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center sm:items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-cyan-400 font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl text-center sm:text-left">
            Tracing my initial steps into the tech landscape, from academic rigor to an active curiosity for artificial intelligence.
          </p>
        </div>

        {/* Grid: Narrative on Left, Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {PROFILE.bio.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Quote / Highlight Box */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800/80 border-l-4 border-cyan-400 border-t border-r border-b border-slate-800 my-6 shadow-md">
              <p className="text-sm sm:text-base text-slate-200 italic">
                &ldquo;Engineering isn&apos;t just about writing code that compiles; it&apos;s about cultivating an insatiable curiosity to understand how intelligent systems solve human problems.&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-cyan-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rithwik &bull; Personal Engineering Philosophy</span>
              </div>
            </div>

            {/* Quick check items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Active 1st-Year CSE coursework</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <span>GenAI prompt architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Clean DOM & Web logic</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Open source Git collaboration</span>
              </div>
            </div>
          </div>

          {/* Core Pillars Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-slate-900/80 border ${pillar.borderColor} shadow-lg transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${pillar.bgColor} ${pillar.color} shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold text-white">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 font-medium">
                        {pillar.subtitle}
                      </p>
                      <p className="text-sm text-slate-300 pt-1 leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
