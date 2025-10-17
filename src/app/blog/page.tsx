'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Временные данные - позже будут из API/Google Sheets
const blogPosts = [
  {
    slug: 'logistics',
    title: 'Logistics Case Study',
    type: 'case' as const,
    description: 'How we helped a logistics company improve their operations',
    date: '2024-10-16',
  },
  {
    slug: 'customer',
    title: 'Customer Success Story',
    type: 'article' as const,
    description: 'Understanding customer needs and delivering value',
    date: '2024-10-07',
  },
];

type FilterType = 'all' | 'case' | 'article';

export default function BlogPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mt-2 text-lg text-gray-600">
            Cases and articles about our work
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('case')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              filter === 'case'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Cases
          </button>
          <button
            onClick={() => setFilter('article')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              filter === 'article'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Articles
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.type === 'case'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {post.type === 'case' ? 'Case Study' : 'Article'}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No {filter === 'all' ? 'posts' : filter === 'case' ? 'cases' : 'articles'} found
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
