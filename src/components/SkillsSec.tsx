/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data.ts';
import { ShieldCheck, Cpu, Code2, Cloud, Layers, CheckCircle2 } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="w-4 h-4 text-[#ef4444]" />,
  "Backend & Frontend": <Layers className="w-4 h-4 text-[#3b82f6]" />,
  "Cloud & Distributed Systems": <Cloud className="w-4 h-4 text-[#10b981]" />,
  "AI & LLM Systems": <Cpu className="w-4 h-4 text-[#8b5cf6]" />,
  "Workflows & Agentic dev": <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
};

export const SkillsSec: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = activeTab === "All" 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.category === activeTab);

  return (
    <section className="mb-24" id="skills">
      {/* Target heading title */}
      <div className="flex items-center space-x-3 pb-4 mb-8 border-b border-[#e5e5e0] dark:border-[#2d2d2a]">
        <ShieldCheck className="w-5 h-5 text-[#ef4444]" />
        <h2 className="font-display font-medium text-2xl text-[#1b1b1b] dark:text-[#f3f3ee]">
          Technical Arsenal
        </h2>
      </div>

      {/* Category Selection Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = cat === activeTab;
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 ${
                isActive
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-[0_2px_8px_rgba(79,70,229,0.25)]'
                  : 'bg-transparent border-[#e5e5e0] dark:border-[#2d2d2a] text-[#727271] dark:text-[#a0a09e] hover:border-[#1b1b1b] dark:hover:border-[#eaeae0]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Layout Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((catObj) => (
          <div
            key={catObj.category}
            className="p-6 rounded-2xl bg-white dark:bg-[#121211] border border-[#e5e5e0] dark:border-[#2c2c29] space-y-4 shadow-[0_1px_4px_rgba(0,0,0,0.015)] transition-all duration-300 hover:border-[#cbcbcb] dark:hover:border-[#42423e]"
          >
            {/* Category header title */}
            <div className="flex items-center justify-between pb-3 border-b border-[#fafaf7] dark:border-[#1a1a19]">
              <div className="flex items-center space-x-2">
                {CATEGORY_ICONS[catObj.category] || <ShieldCheck className="w-4 h-4 text-gray-400" />}
                <h3 className="text-sm font-semibold text-[#1b1b1b] dark:text-[#f3f3ee]">
                  {catObj.category}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#727271] dark:text-[#a0a09e]">
                {catObj.items.length} items
              </span>
            </div>

            {/* Tags items list */}
            <div className="flex flex-wrap gap-2">
              {catObj.items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-[#e5e5e0] dark:border-[#252523] bg-[#fafaf7] dark:bg-[#0d0d0c] hover:bg-[#eaeae2] dark:hover:bg-[#1e1e1d] text-[#40403e] dark:text-[#d1d1cc] font-mono text-xs transition-colors cursor-default"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
