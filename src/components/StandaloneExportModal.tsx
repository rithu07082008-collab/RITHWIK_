import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, ExternalLink } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/standaloneHtmlGenerator.ts';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  linkedinUrl: string;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({
  isOpen,
  onClose,
  linkedinUrl
}) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const standaloneCode = generateStandaloneHtml(linkedinUrl);

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rithwik-portfolio-standalone.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="export-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Standalone Single-File HTML Deliverable
              </h3>
              <p className="text-xs text-slate-400">
                100% self-contained runnable code with semantic HTML5, Tailwind CDN, and vanilla JavaScript.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3 bg-slate-800/40 px-4 rounded-xl my-4 border border-slate-800">
          <div className="text-xs text-slate-300">
            Ready to deploy directly to <span className="text-cyan-300 font-semibold">GitHub Pages</span>,{' '}
            <span className="text-cyan-300 font-semibold">Netlify</span>, or any static hosting with zero build steps.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Raw Code'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download .html</span>
            </button>
            <a
              href="/portfolio.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs flex items-center gap-1 transition-colors"
              title="Open raw file in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview Tab</span>
            </a>
          </div>
        </div>

        {/* Code View Window */}
        <div className="flex-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 flex flex-col">
          <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>index.html (Semantic HTML5 + Tailwind CSS + Vanilla JS)</span>
            <span>{standaloneCode.split('\n').length} lines</span>
          </div>
          <pre className="p-4 overflow-auto text-xs font-mono text-slate-300 flex-1 leading-relaxed selection:bg-cyan-500/30 selection:text-white">
            <code>{standaloneCode}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-2 flex items-center justify-between text-xs text-slate-500">
          <span>Contains concise developer comments for updating future projects, links, and resume.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
