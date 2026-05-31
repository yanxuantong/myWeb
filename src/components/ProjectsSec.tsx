/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CalendarRange, ScanEye } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  comingSoon?: boolean;
}

export const ProjectsSec: React.FC = () => {
  const items: ProjectItem[] = [
    {
      id: "calpal",
      title: "CalPal",
      description: "An on-device, privacy-first AI calendar for iOS utilizing local foundation parsing logic without cloud network hops.",
      link: "https://github.com/yanxuantong/Calpal-App"
    },
    {
      id: "multi-agent-job-search",
      title: "Multi-Agent Job Search Platform",
      description: "A reference AI agent platform for job-search workflows, demonstrating orchestration, HITL checkpoints, evals, tracing, and MCP-style tool boundaries.",
      link: "https://github.com/yanxuantong/multi-agent-job-search-platform"
    }
  ];

  return (
    <section className="space-y-6" id="projects">
      {/* Section Muted Header */}
      <h2 className="text-sm font-normal text-neutral-400 uppercase tracking-wider">
        Projects
      </h2>

      {/* Row Stack mimicking the screenshot exactly */}
      <div className="space-y-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-link-${item.id}`}
            className="flex items-start cursor-pointer group"
          >
            {/* Left Hand Icon */}
            {item.icon && (
              <div className="mr-4 shrink-0">
                {item.icon}
              </div>
            )}

            {/* Right Hand Project Description */}
            <div className="space-y-0.5">
              <div className="flex items-center space-x-1.5">
                <span className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 border-b border-neutral-300 pb-0.5 transition-colors duration-150">
                  {item.title}
                </span>
                {item.comingSoon && (
                  <span className="text-[10px] text-neutral-400 italic">
                    (coming soon)
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
