import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { Globe, Cpu, Terminal, Layers, CheckCircle2, Star, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Core':
        return (
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
            Core
          </span>
        );
      case 'Intermediate':
        return (
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-violet-950/60 text-violet-300 border border-violet-800/60">
            Intermediate
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            Familiar
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center sm:items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-cyan-400 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl text-center sm:text-left">
            Foundational programming, web technologies, and generative AI concepts that I actively study and implement.
          </p>
        </div>

        {/* Categories Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-cyan-950/20 hover:-translate-y-1 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {cat.skills.length} Key Competencies
                    </p>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges and Details */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        {getLevelBadge(skill.level)}
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Continuously practicing</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick summary badges banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-800/40 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Focusing on GenAI Integration Workflows</h4>
              <p className="text-xs text-slate-400">Mastering prompt optimization, context design, and client-side web tools</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              HTML5 / CSS3
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              JavaScript
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
              Prompt Engineering
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-950/60 text-violet-300 border border-violet-800/50">
              Git & GitHub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
