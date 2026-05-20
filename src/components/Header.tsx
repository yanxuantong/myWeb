/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useTheme } from './ThemeContext.tsx';
import { PERSONAL_INFO } from '../data.ts';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  return (
    <header className="space-y-6">
      {/* Bio text block matching the exact phrasing & minimalist rhythm of the ericli.io screenshot */}
      <h1 className="text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight leading-snug">
        I'm Shawn (Xuantong) Yan, a backend infrastructure & AI engineer based in the Bay Area.
      </h1>

      <div className="space-y-5 text-neutral-600 leading-relaxed text-sm sm:text-base font-light">
        <p>
          I build backend infrastructure and AI systems, mostly the kind of software that sits behind the interface and quietly does the hard work. At{' '}
          <span className="text-neutral-900 font-semibold">Amazon</span>, I work on internal-scale cloud optimization and retrieval systems; before that, at{' '}
          <span className="text-neutral-900 font-semibold">Blinkfire</span>, I built analytics and computer vision pipelines for media intelligence. I like systems that are simple on the surface, reliable under load, and still pleasant to maintain. Outside of work, I spend a lot of time exploring local-first AI tools, agentic development workflows, and small software products.{' '}
          <span className="font-cat text-[1.08em] italic text-neutral-800">I also happen to be a cat person.</span>
        </p>

        <p>
          Reach me on{' '}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin-link"
            className="text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 dark:border-neutral-700 pb-0.5 transition-colors duration-150"
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="github-link"
            className="text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 dark:border-neutral-700 pb-0.5 transition-colors duration-150"
          >
            GitHub
          </a>
          , or at{' '}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            id="email-link"
            className="text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 dark:border-neutral-700 pb-0.5 transition-colors duration-150"
          >
            {PERSONAL_INFO.email}
          </a>
          .
        </p>

        <p className="text-xs pt-1.5">
          <button
            onClick={onOpenResume}
            id="open-resume-btn-inline"
            className="text-neutral-900 border-b border-neutral-900 pb-0.5 transition-colors cursor-pointer font-bold hover:text-neutral-600 hover:border-neutral-500"
          >
            View Detailed Interactive Resume
          </button>
        </p>
      </div>
    </header>
  );
};
