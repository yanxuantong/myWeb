/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext.tsx';
import { Header } from './components/Header.tsx';
import { ExperienceSec } from './components/ExperienceSec.tsx';
import { ProjectsSec } from './components/ProjectsSec.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 border-t border-neutral-100 text-[11px] text-neutral-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <div>
        <span>Sunnyvale, California • PST</span>
      </div>
      <div>
        <span>© {new Date().getFullYear()} Shawn Yan. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* Absolute clean backdrop without artificial grid slop */}
      <div className="min-h-screen bg-[#fafbf9] text-neutral-900 transition-colors duration-300">
        
        {/* Single-column responsive layout, centered, exactly matching the screenshot structure */}
        <div className="max-w-xl mx-auto px-6 py-16 sm:py-28 space-y-16">
          {/* Conversational landing bio with reach links */}
          <Header onOpenResume={() => setIsResumeOpen(true)} />

          {/* Direct, single-line Professional experiences list */}
          <ExperienceSec onOpenResume={() => setIsResumeOpen(true)} />

          {/* Simple Projects stack with elegant vector badging */}
          <ProjectsSec />

          {/* Fine footer metadata */}
          <Footer />
        </div>

        {/* Detailed interactive Resume sheet modal triggered via secondary link click */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
