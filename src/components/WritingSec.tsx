/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BLOG_POSTS } from '../data.ts';
import { BlogPost } from '../types.ts';
import { ArrowLeft } from 'lucide-react';

export const WritingSec: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Cleaner, simpler markdown parse render
  const renderMarkdownText = (text: string) => {
    const lines = text.split('\n');
    let inList = false;
    let listItems: string[] = [];
    const elements: React.ReactNode[] = [];

    const flushList = (key: number) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-5 space-y-2 my-4 text-sm sm:text-base text-neutral-600 font-sans font-light">
            {listItems.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('###')) {
        flushList(index);
        elements.push(
          <h3 key={index} className="text-base sm:text-lg font-medium text-neutral-900 mt-6 mb-3 tracking-tight">
            {trimmed.substring(3).trim()}
          </h3>
        );
        return;
      }
      if (trimmed.startsWith('##')) {
        flushList(index);
        elements.push(
          <h2 key={index} className="text-lg sm:text-xl font-medium text-neutral-900 mt-8 mb-4 tracking-tight border-b border-neutral-100 pb-1.5">
            {trimmed.substring(2).trim()}
          </h2>
        );
        return;
      }

      if (trimmed.startsWith('-') || trimmed.startsWith('1.') || trimmed.startsWith('*')) {
        inList = true;
        const cleaned = trimmed.replace(/^[-*]|\d+\./, '').trim();
        listItems.push(cleaned);
        return;
      }

      if (trimmed === '') {
        flushList(index);
        return;
      }

      if (inList && !trimmed.startsWith('-') && !trimmed.startsWith('1.') && !trimmed.startsWith('*')) {
        flushList(index);
      }

      // Inline formatter helper
      const renderFormattedSpan = (contentStr: string) => {
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;
        const combinedRegex = /(\*\*.*?\*\*|`.*?`)/g;
        let match;

        while ((match = combinedRegex.exec(contentStr)) !== null) {
          const matchStr = match[0];
          const textBefore = contentStr.substring(lastIndex, match.index);
          if (textBefore) {
            parts.push(textBefore);
          }

          if (matchStr.startsWith('**') && matchStr.endsWith('**')) {
            parts.push(
              <strong key={match.index} className="font-semibold text-neutral-950">
                {matchStr.substring(2, matchStr.length - 2)}
              </strong>
            );
          } else if (matchStr.startsWith('`') && matchStr.endsWith('`')) {
            parts.push(
              <code key={match.index} className="px-1 py-0.5 rounded bg-neutral-100 text-neutral-800 font-mono text-xs">
                {matchStr.substring(1, matchStr.length - 1)}
              </code>
            );
          }
          lastIndex = combinedRegex.lastIndex;
        }

        if (lastIndex < contentStr.length) {
          parts.push(contentStr.substring(lastIndex));
        }

        return parts.length > 0 ? <React.Fragment>{parts}</React.Fragment> : contentStr;
      };

      elements.push(
        <p key={index} className="text-sm sm:text-base leading-relaxed text-neutral-600 font-light mb-4">
          {renderFormattedSpan(trimmed)}
        </p>
      );
    });

    flushList(lines.length);
    return elements;
  };

  return (
    <section className="space-y-6" id="writing">
      {/* Section Muted Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-normal text-neutral-400 uppercase tracking-wider">
          Writing
        </h2>
        {activePost && (
          <button
            onClick={() => setActivePost(null)}
            className="flex items-center space-x-1 text-xs text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            id="back-to-all-writing"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>BACK</span>
          </button>
        )}
      </div>

      {activePost ? (
        /* Immersive inline reading wrapper */
        <article className="max-w-2xl animate-fadeIn">
          <div className="mb-6 pb-4 border-b border-neutral-100">
            <h1 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2 leading-tight">
              {activePost.title}
            </h1>
            <div className="flex space-x-3 text-xs text-neutral-400">
              <span>{activePost.date}</span>
              <span>•</span>
              <span>{activePost.readTime}</span>
            </div>
          </div>

          <div className="prose prose-neutral">
            {renderMarkdownText(activePost.contentMarkdown)}
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-100">
            <button
              onClick={() => {
                setActivePost(null);
                const elem = document.getElementById('writing');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors border-b border-dotted border-neutral-300 pb-0.5"
            >
              ← Back to articles
            </button>
          </div>
        </article>
      ) : (
        /* Articles list stack styled exactly like the screenshot */
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.slug}
              onClick={() => {
                setActivePost(post);
                const elem = document.getElementById('writing');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group cursor-pointer select-none"
              id={`writing-row-${post.slug}`}
            >
              <h3 className="text-sm sm:text-base font-normal text-neutral-900 group-hover:text-neutral-600 border-b border-transparent group-hover:border-neutral-300 inline-block leading-snug transition-colors duration-150">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                {post.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
