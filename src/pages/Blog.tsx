import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Tag, Calendar, User, Clock } from 'lucide-react';

const Blog: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
  
    const categories = [
      { id: 'all', name: 'All' },
      { id: 'acne-treatment', name: 'Acne Treatment' },
      { id: 'product-guides', name: 'Product Guides' },
      { id: 'skincare-tips', name: 'Skincare Tips' },
      { id: 'natural-remedies', name: 'Natural Remedies' }
    ];
  
    const blogPosts = [
      {
        id: 1,
        title: 'Understanding Your Skin Type: A Complete Guide',
        excerpt: 'Learn how to identify your skin type—oily, dry, combination, or sensitive—and choose the right products for your needs in Uganda.',
        content: 'Identifying your skin type is the first step towards a successful skincare regimen. In Uganda, with its unique climate, understanding your skin is even more crucial. This guide will walk you through the different skin types and how to care for them.',
        category: 'skincare-tips',
        author: 'POP Team',
        date: '2024-07-20',
        readTime: '6 min read',
        image: '/images/Understanding Your Skin Type A Complete Guide.webp',
        tags: ['Skincare', 'Guide', 'Skin Type'],
        featured: true,
      },
      {
        id: 2,
        title: 'DIY Face Masks Using Local Ugandan Ingredients',
        excerpt: 'Discover simple, effective face mask recipes using natural ingredients like avocado, honey, and charcoal, readily available in Uganda.',
        content: 'You don\'t need to look far for amazing skincare ingredients. Uganda is rich with natural resources that can be used to create nourishing DIY face masks. Here are a few of our favorite recipes using local ingredients to give your skin a healthy glow.',
        category: 'natural-remedies',
        author: 'POP Team',
        date: '2024-07-18',
        readTime: '5 min read',
        image: '/images/DIY Face Masks Using Local Ugandan Ingredients.webp',
        tags: ['DIY', 'Natural', 'Skincare'],
      },
      {
        id: 3,
        title: 'The Ultimate Guide to Organic Skincare Ingredients',
        excerpt: 'A comprehensive overview of the best organic ingredients for your skin, from shea butter to moringa oil, and their benefits.',
        content: 'Organic skincare is all about using ingredients that are kind to your skin and the environment. In this guide, we explore some of the most powerful organic ingredients, many of which are sourced locally in Uganda, and explain how they can benefit your skin.',
        category: 'product-guides',
        author: 'POP Team',
        date: '2024-07-15',
        readTime: '8 min read',
        image: '/images/The Ultimate Guide to Organic Skincare Ingredients.webp',
        tags: ['Organic', 'Ingredients', 'Guide'],
      },
      {
        id: 4,
        title: 'How to Protect Your Skin from Uganda\'s Sun',
        excerpt: 'Essential tips and product recommendations to shield your skin from the strong Ugandan sun and prevent long-term damage.',
        content: 'The sun in Uganda can be harsh on the skin. Proper sun protection is essential to prevent premature aging and skin damage. This article covers the best practices for sun protection, including the use of sunscreen and other protective measures.',
        category: 'skincare-tips',
        author: 'POP Team',
        date: '2024-07-12',
        readTime: '5 min read',
        image: '/images/How to Protect Your Skin from Ugandas Sun.webp',
        tags: ['Sunscreen', 'Protection', 'Skincare'],
      },
      {
        id: 5,
        title: 'Daily Skincare Routine for Teenagers',
        excerpt: 'A step-by-step guide for teenagers to build a healthy skincare routine that tackles acne and promotes clear, glowing skin.',
        content: 'Teenage years can be tough on the skin. This guide provides a simple, step-by-step skincare routine designed specifically for teenage skin, focusing on controlling acne and maintaining a healthy complexion during these hormonal years.',
        category: 'acne-treatment',
        author: 'POP Team',
        date: '2024-07-10',
        readTime: '7 min read',
        image: '/images/Daily Skincare Routine for Teenagers.webp',
        tags: ['Teenagers', 'Acne', 'Routine'],
      },
      {
        id: 6,
        title: '10 Natural Ways to Fight Pimples in Uganda\'s Climate',
        excerpt: 'Discover effective, natural remedies to combat pimples and breakouts, tailored for Uganda\'s unique climate and environment.',
        content: 'Pimples can be a challenge, especially in a tropical climate. This post explores 10 natural and effective ways to manage acne using ingredients and techniques that are well-suited to the Ugandan environment, helping you achieve clearer skin.',
        category: 'acne-treatment',
        author: 'POP Team',
        date: '2024-07-08',
        readTime: '6 min read',
        image: '/images/10 Natural Ways to Fight Pimples in Ugandas Climate.webp',
        tags: ['Pimples', 'Natural', 'Remedies'],
      },
    ];
  
    const filteredPosts = blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  
    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Your go-to resource for expert skincare advice, natural remedies, and product guides 
                tailored for the Ugandan climate.
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Search and Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-primary-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* Blog Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {featuredPost && searchTerm === '' && selectedCategory === 'all' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12 group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative">
                      <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <Tag className="w-4 h-4" />
                          <span>{categories.find(cat => cat.id === featuredPost.category)?.name}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <button className="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:underline">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    );
};
  
export default Blog;