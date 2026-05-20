/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Mail, Phone, Github, Linkedin, MapPin, Briefcase, GraduationCap, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_HISTORY, PROJECTS, RESEARCH_PUBLICATIONS, SKILL_CATEGORIES } from '../data.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Absolute click-outside dismiss indicator */}
      <div className="absolute inset-0 cursor-default" onClick={onClose}></div>

      {/* Main Resume Sheet container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl border border-neutral-200 shadow-2xl p-6 sm:p-10 md:p-12 text-neutral-800 z-10 animate-scaleUp">
        
        {/* Top Dismiss Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Dismiss resume view"
          id="close-resume-modal"
        >
          <X className="w-5 h-5 text-neutral-500" />
        </button>

        {/* Resume Header */}
        <div className="border-b border-neutral-100 pb-8 mb-8">
          <h1 className="font-medium text-3xl sm:text-4xl text-neutral-900 tracking-tight mb-3">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-sm text-indigo-600 font-medium mb-4 tracking-wider uppercase">
            {PERSONAL_INFO.title}
          </p>

          <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-neutral-500">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-500 underline decoration-dotted">{PERSONAL_INFO.email}</a>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.phone}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Github className="w-3.5 h-3.5" />
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 underline decoration-dotted">GitHub</a>
            </span>
            <span className="flex items-center space-x-1">
              <Linkedin className="w-3.5 h-3.5" />
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 underline decoration-dotted">LinkedIn</a>
            </span>
          </div>
        </div>

        {/* Summary bio block */}
        <div className="mb-10 text-sm leading-relaxed text-neutral-600 font-light max-w-3xl">
          <p>{PERSONAL_INFO.about}</p>
        </div>

        {/* Main Grid: Left Column Experiences & research, Right Column Education & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Experiences) */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-xs tracking-wider text-neutral-400 uppercase pb-2 border-b border-neutral-100 mb-6 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-indigo-500" />
                <span>Professional Experience</span>
              </h2>

              <div className="space-y-8">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative pl-1">
                    <div className="flex flex-wrap justify-between items-baseline gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-base text-neutral-900">
                          {exp.company}
                        </h3>
                        <p className="text-xs text-indigo-600 font-normal">
                          {exp.role}
                        </p>
                      </div>
                      <span className="text-xs text-neutral-500">
                        {exp.period} | {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs leading-relaxed text-neutral-600 font-light">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-indigo-500 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.technologies.map(t => (
                          <span key={t} className="px-2 py-0.5 text-[10px] bg-neutral-50 text-neutral-500 rounded border border-neutral-100">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Research and Publications */}
            <div>
              <h2 className="text-xs tracking-wider text-neutral-400 uppercase pb-2 border-b border-neutral-100 mb-6 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-emerald-500" />
                <span>Research & Publications</span>
              </h2>

              <div className="space-y-6">
                {RESEARCH_PUBLICATIONS.map((pub) => (
                  <div key={pub.id} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2.5">
                    <h3 className="font-bold text-xs text-neutral-900">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-indigo-500 italic">
                      {pub.institution}
                    </p>
                    <ul className="space-y-1 text-xs text-neutral-500 leading-relaxed font-light">
                      {pub.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-1.5 text-emerald-500 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {pub.publicationInfo && (
                      <p className="text-[10px] text-neutral-400 italic pt-1.5 border-t border-neutral-100">
                        {pub.publicationInfo}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Skills & Education) */}
          <div className="lg:col-span-4 space-y-10">
            {/* Education */}
            <div>
              <h2 className="text-xs tracking-wider text-neutral-400 uppercase pb-2 border-b border-neutral-100 mb-6 flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-indigo-500" />
                <span>Education</span>
              </h2>

              <div className="space-y-6">
                {EDUCATION_HISTORY.map((edu) => (
                  <div key={edu.id} className="relative pl-3 border-l border-neutral-200">
                    <h3 className="font-semibold text-xs text-neutral-900 leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">
                      {edu.period} • {edu.location}
                    </p>
                    {edu.gpa && (
                      <p className="text-xs text-emerald-600 font-medium mt-1">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills categorised */}
            <div>
              <h2 className="text-xs tracking-wider text-neutral-400 uppercase pb-2 border-b border-neutral-100 mb-6 flex items-center">
                <span>Core Skill Matrix</span>
              </h2>

              <div className="space-y-4">
                {SKILL_CATEGORIES.map((catObj) => (
                  <div key={catObj.category} className="space-y-1.5">
                    <h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                      {catObj.category}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {catObj.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-0.5 text-[10px] bg-neutral-50 text-neutral-600 rounded border border-neutral-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action Download / Close Info panel */}
            <div className="pt-6 border-t border-neutral-100">
              <button 
                onClick={onClose}
                className="w-full text-center py-2.5 rounded-xl text-xs border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-white transition-all pointer-events-auto"
              >
                Close Resume View
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
