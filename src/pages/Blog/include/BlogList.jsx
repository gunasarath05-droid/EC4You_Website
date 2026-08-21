import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaArrowRight, FaClock, FaSearch } from 'react-icons/fa';
import { blogPosts, blogCategories } from '../../../data/blogData';

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-4 mb-8 md:mb-12">

          {/* Search Input — full width on mobile */}
          <div className="relative w-full md:w-72 md:self-end">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 text-sm bg-white border border-slate-200 rounded-full outline-none focus:border-[#669999] focus:ring-1 focus:ring-[#669999] text-slate-700 shadow-sm"
            />
            <FaSearch className="absolute right-4 top-3 text-slate-400 text-sm" />
          </div>

          {/* Category Pills — horizontal scroll on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#669999] text-white shadow-md shadow-[#669999]/30 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          >
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.article
                  layout
                  key={post.id}
                  className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {/* Card Image */}
                  <div className="relative overflow-hidden h-44 sm:h-48 md:h-52">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-[#669999] uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-[#669999] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-3 md:pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3 md:mb-4">
                        <span className="flex items-center gap-1.5">
                          <FaUser className="text-[#669999]" /> {post.author.name}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaClock className="text-[#669999]" /> {post.readTime}
                        </span>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        className="inline-flex items-center gap-2 text-[#669999] font-black uppercase text-xs tracking-widest group/link hover:text-slate-900 transition-colors"
                      >
                        Read Article
                        <FaArrowRight className="group-hover/link:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12 md:py-16 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-md max-w-sm md:max-w-md mx-auto px-6">
            <p className="text-base md:text-lg font-bold text-slate-700 mb-2">No articles found</p>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 md:mb-6">
              Try a different keyword or select another category.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-6 py-2 bg-[#669999] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow hover:bg-[#507d7d] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}