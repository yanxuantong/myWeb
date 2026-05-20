/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  active?: boolean;
  bullets: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  role?: string;
  period: string;
  bullets: string[];
  technologies?: string[];
  link?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
}

export interface ResearchPublication {
  id: string;
  title: string;
  institution: string;
  bullets: string[];
  publicationInfo?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  contentMarkdown: string;
  tags: string[];
}
