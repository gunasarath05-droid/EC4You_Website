import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCalendar, FaUser, FaClock, FaArrowLeft, FaTag, FaSearch,
  FaChevronRight, FaArrowRight
} from 'react-icons/fa';
import { blogPosts, blogCategories } from '../../data/blogData';
import NewsletterSection from '../../components/Newsletter/Newsletter';
import SEO from '../../components/SEO';

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const post = blogPosts.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-24">
        <SEO
          title="Article Not Found"
          description="The requested blog post could not be found."
          robots="noindex, nofollow"
        />
        <div className="text-center max-w-sm w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <div className="w-16 h-16 bg-[#669999]/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-2xl">📄</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">Article Not Found</h2>
          <p className="text-slate-500 text-sm mb-7">The article you are looking for does not exist or may have been moved.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#669999] text-white font-bold rounded-xl shadow-md hover:bg-[#507d7d] transition-all text-sm"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "EC4YOU Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EC4YOU",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ec4you.in/icon.png"
      }
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ec4you.in/blog/${post.id}`
    }
  };

  const relatedPosts = blogPosts.filter((b) => b.id !== post.id && b.category === post.category).slice(0, 3);
  const fallbackRelated = blogPosts.filter((b) => b.id !== post.id).slice(0, 3);
  const displayRelated = relatedPosts.length > 0 ? relatedPosts : fallbackRelated;
  const recentPosts = blogPosts.filter((b) => b.id !== post.id).slice(0, 4);

  const currentIndex = blogPosts.findIndex((b) => b.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        canonical={`https://www.ec4you.in/blog/${post.id}`}
        ogType="article"
        schema={articleSchema}
      />

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-[#669999] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-white py-8 md:py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5 md:mb-8 flex-wrap">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-[#669999] transition-colors">Home</Link>
            <FaChevronRight className="text-[8px]" />
            <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-[#669999] transition-colors">Blog</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#669999] truncate max-w-[160px] sm:max-w-xs normal-case">{post.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">

            {/* Left: Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <span className="inline-block mb-3 bg-[#ffe3d5] text-[#669999] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                {post.category}
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
                {post.title}
              </h1>

              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                {post.excerpt}
              </p>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-3 md:gap-5">
                <button
                  onClick={() => navigate('/blog')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#669999] uppercase tracking-widest transition-colors"
                >
                  <FaArrowLeft /> Back
                </button>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <FaCalendar className="text-[#669999]" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <FaClock className="text-[#669999]" /> {post.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <FaUser className="text-[#669999]" /> {post.author.name}
                </span>
              </div>
            </motion.div>

            {/* Right: Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl shadow-slate-300/40 border border-white">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Article Body */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8 space-y-6 md:space-y-8"
            >
              {/* Key Quote Box */}
              <div className="bg-gradient-to-r from-[#669999]/10 to-[#4ade80]/5 border-l-4 border-[#669999] p-5 md:p-8 rounded-r-2xl md:rounded-r-3xl">
                <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed italic">
                  "{post.excerpt}"
                </p>
              </div>

              {/* Article Content Card */}
              <div className="bg-white p-5 sm:p-7 md:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
                <div
                  className="prose prose-slate max-w-none
                    text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed
                    prose-headings:text-slate-900 prose-headings:font-black
                    prose-h3:text-lg prose-h3:sm:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:mb-4 prose-p:leading-relaxed
                    prose-ul:pl-5 prose-li:mb-2
                    prose-blockquote:border-l-4 prose-blockquote:border-[#669999]
                    prose-blockquote:bg-[#669999]/5 prose-blockquote:pl-5 prose-blockquote:md:pl-6
                    prose-blockquote:py-3 prose-blockquote:rounded-r-xl prose-blockquote:md:rounded-r-2xl
                    prose-blockquote:text-slate-600 prose-blockquote:italic prose-blockquote:my-6
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Tags */}
              <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-md">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-black text-slate-400 uppercase tracking-widest mr-1">
                    <FaTag className="text-[#669999]" /> Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs font-bold px-3 md:px-4 py-1.5 rounded-lg hover:bg-[#669999] hover:text-white transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.id}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all group flex items-center gap-3 md:gap-4"
                  >
                    <FaArrowLeft className="text-[#669999] flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Previous</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#669999] truncate transition-colors">{prevPost.title}</p>
                    </div>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link
                    to={`/blog/${nextPost.id}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all group flex items-center gap-3 md:gap-4 sm:flex-row-reverse text-right"
                  >
                    <FaArrowRight className="text-[#669999] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Next</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#669999] truncate transition-colors">{nextPost.title}</p>
                    </div>
                  </Link>
                ) : <div />}
              </div>

            </motion.article>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-5 md:space-y-6">
              <div className="lg:sticky lg:top-6 space-y-5 md:space-y-6">

                {/* Search */}
                <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
                  <h3 className="text-sm md:text-base font-black text-slate-900 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wider">
                    Search
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2.5 pr-10 text-sm border border-slate-200 rounded-xl outline-none focus:border-[#669999] focus:ring-1 focus:ring-[#669999] text-slate-700"
                    />
                    <FaSearch className="absolute right-3.5 top-3.5 text-slate-400 text-sm" />
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
                  <h3 className="text-sm md:text-base font-black text-slate-900 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wider">
                    Recent Articles
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((rPost) => (
                      <Link
                        key={rPost.id}
                        to={`/blog/${rPost.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                        className="flex gap-3 group items-center"
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                          <img
                            src={rPost.image}
                            alt={rPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#669999] transition-colors line-clamp-2 leading-snug">
                            {rPost.title}
                          </h4>
                          <span className="text-xs text-slate-400 font-medium mt-0.5 block">{rPost.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#669999] via-[#507d7d] to-[#3d6360] p-6 md:p-8 rounded-2xl md:rounded-3xl text-white shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-black mb-2 leading-tight">Need Marketing Help?</h3>
                    <p className="text-xs sm:text-sm text-white/85 mb-5 md:mb-6 leading-relaxed">
                      Our digital marketing experts can help grow your brand visibility.
                    </p>
                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                      className="block w-full text-center py-2.5 md:py-3 bg-white text-[#4a7c77] font-black text-sm rounded-xl shadow hover:bg-slate-50 transition-all hover:shadow-md"
                    >
                      Contact Us Today →
                    </Link>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-10 md:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-7 md:mb-10">
            <div>
              <p className="text-xs font-black text-[#669999] uppercase tracking-widest mb-1">Keep Reading</p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Related Articles</h2>
            </div>
            <Link
              to="/blog"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#669999] hover:text-slate-900 transition-colors"
            >
              View All <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {displayRelated.map((relPost, i) => (
              <motion.div
                key={relPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${relPost.id}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="group flex flex-col bg-slate-50 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <div className="overflow-hidden h-40 sm:h-44 md:h-48">
                    <img
                      src={relPost.image}
                      alt={relPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-black text-[#669999] uppercase tracking-wider">{relPost.category}</span>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mt-1.5 mb-2 md:mb-3 group-hover:text-[#669999] transition-colors leading-snug line-clamp-2">
                        {relPost.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-semibold pt-3 md:pt-4 border-t border-slate-100">
                      <span className="flex items-center gap-1.5">
                        <FaCalendar className="text-[#669999]" /> {relPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-[#669999]" /> {relPost.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
