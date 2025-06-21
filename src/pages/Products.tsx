import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Filter, Search, Heart } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cleansers', name: 'Cleansers' },
    { id: 'serums', name: 'Serums' },
    { id: 'moisturizers', name: 'Moisturizers' },
    { id: 'treatments', name: 'Treatments' },
  ];

  const products = [
    {
      id: 1,
      name: 'Anti-Pimple Serum',
      category: 'Serums',
      price: 'UGX 45,000',
      originalPrice: 'UGX 55,000',
      rating: 4.8,
      reviews: 120,
      image: '/images/Anti-Pimple Serum.webp',
      tag: 'Best Seller',
      description: 'A powerful serum to target acne and prevent future breakouts.',
      benefits: ['Reduces inflammation', 'Fights acne bacteria', 'Prevents new pimples'],
    },
    {
      id: 2,
      name: 'Organic Face Moisturizer',
      category: 'Moisturizers',
      price: 'UGX 50,000',
      rating: 4.9,
      reviews: 98,
      image: '/images/Organic Face Moisturizer.webp',
      description: 'A daily moisturizer to hydrate and protect your skin.',
      benefits: ['24-hour hydration', 'Nourishes skin', 'Lightweight formula'],
      anchorId: 'organic-skincare', // Added for anchor navigation
    },
    {
      id: 3,
      name: 'Gentle Exfoliating Scrub',
      category: 'Scrubs',
      price: 'UGX 40,000',
      rating: 4.7,
      reviews: 75,
      image: '/images/Gentle Exfoliating Scrub.webp',
      description: 'A gentle scrub to remove dead skin cells and reveal brighter skin.',
      benefits: ['Removes dead skin', 'Unclogs pores', 'Smooths texture'],
    },
    {
      id: 4,
      name: 'Vitamin C Serum',
      category: 'Serums',
      price: 'UGX 60,000',
      originalPrice: 'UGX 70,000',
      rating: 4.9,
      reviews: 150,
      image: '/images/Vitamin C Serum.webp',
      tag: 'New Arrival',
      description: 'A potent Vitamin C serum to brighten skin and reduce dark spots.',
      benefits: ['Brightens complexion', 'Fades dark spots', 'Antioxidant protection'],
    },
    {
      id: 5,
      name: 'Brightening Face Mask',
      category: 'Masks',
      price: 'UGX 35,000',
      rating: 4.8,
      reviews: 88,
      image: '/images/Brightening Face Mask.webp',
      description: 'A face mask to brighten and even out your skin tone.',
      benefits: ['Evens skin tone', 'Boosts radiance', 'Hydrates skin'],
    },
    {
      id: 6,
      name: 'Deep Clean Facial Cleanser',
      category: 'Cleansers',
      price: 'UGX 30,000',
      rating: 4.6,
      reviews: 110,
      image: '/images/Deep Clean Facial Cleanser.webp',
      description: 'A deep-cleaning cleanser to remove dirt, oil, and impurities.',
      benefits: ['Deeply cleanses', 'Removes makeup', 'Refreshes skin'],
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productName: string) => {
    const message = encodeURIComponent(`Hi POP team, I'm interested in purchasing ${productName}. Can you tell me more about availability and ordering?`);
    window.open(`https://wa.me/256701673510?text=${message}`, '_blank');
  };

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
              Organic <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover our premium collection of organic skincare products, 
              carefully crafted with natural ingredients for healthy, radiant skin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  id={product.anchorId ? product.anchorId : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.tag && (
                        <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {product.tag}
                        </div>
                      )}
                      {product.originalPrice && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Sale
                        </div>
                      )}
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(product.id)
                            ? 'text-red-500 fill-current'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700 dark:text-gray-300">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAddToCart(product.name)}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Order on WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;
