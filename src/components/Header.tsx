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
        I'm Shawn (Xuantong) Yan, a backend & AI systems engineer based in Sunnyvale.
      </h1>

      <div className="space-y-5 text-neutral-600 leading-relaxed text-sm sm:text-base font-light">
        <p>
          I'm a Backend Engineer with 3.5 years of experience building and operating high-performance systems.
          I enjoy building thoughtfully crafted software. I've worked at{' '}
          <span className="text-neutral-900 font-semibold">Amazon</span> (engineering cloud optimization engines at internal fleet scale and end-to-end RAG systems) and{' '}
          <span className="text-neutral-900 font-semibold">Blinkfire</span> (developing AI-SaaS analytics metrics and PyTorch computer vision detection pipelines). 
          I am a cat person.
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
