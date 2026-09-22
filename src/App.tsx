/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { StandaloneExportModal } from './components/StandaloneExportModal.tsx';
import { SOCIAL_LINKS } from './data/portfolioData.ts';

export default function App() {
  const [linkedinUrl, setLinkedinUrl] = useState<string>(SOCIAL_LINKS.linkedin);
  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Responsive Navigation Bar */}
      <Navbar
        linkedinUrl={linkedinUrl}
        onOpenExport={() => setExportModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          linkedinUrl={linkedinUrl}
          onEditLinkedin={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects />

        {/* 5. Contact Section */}
        <Contact
          linkedinUrl={linkedinUrl}
          setLinkedinUrl={setLinkedinUrl}
        />
      </main>

      {/* Footer */}
      <Footer linkedinUrl={linkedinUrl} />

      {/* Standalone Single-File HTML Exporter / Viewer */}
      <StandaloneExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        linkedinUrl={linkedinUrl}
      />
    </div>
  );
}
