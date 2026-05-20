/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EXPERIENCES } from '../data.ts';

interface ExperienceSecProps {
  onOpenResume: () => void;
}

export const ExperienceSec: React.FC<ExperienceSecProps> = ({ onOpenResume }) => {
  return (
    <section className="space-y-4" id="experience">
      {/* Section Header: Muted, plain sans-serif tracking matching screenshot */}
      <h2 className="text-sm font-normal text-neutral-400 uppercase tracking-wider">
        Experience
      </h2>

      {/* Stack of experiences: extremely clean, lightweight, single row descriptions */}
      <div className="space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm text-neutral-700">
          <div>
            <span className="font-medium text-neutral-900">Amazon</span>
            <span className="text-neutral-400 mx-1.5">•</span>
            <span className="text-neutral-600">Software Engineer</span>
          </div>
          <span className="text-xs text-neutral-400 sm:font-mono mt-0.5 sm:mt-0">
            Jul 2023 – Present
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm text-neutral-700">
          <div>
            <span className="font-medium text-neutral-900">Blinkfire Analytics</span>
            <span className="text-neutral-400 mx-1.5">•</span>
            <span className="text-neutral-600">Software Engineer</span>
          </div>
          <span className="text-xs text-neutral-400 sm:font-mono mt-0.5 sm:mt-0">
            Jun 2022 – Jun 2023
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm text-neutral-700">
          <div>
            <span className="font-medium text-neutral-900">JD.com</span>
            <span className="text-neutral-400 mx-1.5">•</span>
            <span className="text-neutral-600">Software Engineering Intern</span>
          </div>
          <span className="text-xs text-neutral-400 sm:font-mono mt-0.5 sm:mt-0">
            May 2020 – Aug 2020
          </span>
        </div>
      </div>


    </section>
  );
};
