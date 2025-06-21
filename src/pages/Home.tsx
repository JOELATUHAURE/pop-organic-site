import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Leaf, Users } from 'lucide-react';

const Home: React.FC = () => {

  const featuredProducts = [
    {
      name: 'Anti-Pimple Serum',
      image: '/images/Anti-Pimple Serum.webp',
      price: 'UGX 45,000',
      link: '/products',
    },
    {
      name: 'Deep Clean Facial',
      image: '/images/Deep Clean Facial.webp',
      price: 'UGX 70,000',
      link: '/services',
    },
    {
      name: 'Organic Brightening Facial',
      image: '/images/Organic Brightening Facial.webp',
      price: 'UGX 80,000',
      link: '/services',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Naturally Radiant Skin,{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Made for Uganda
              </span>
            </motion.h1>
            <motion.p 
              className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              POP ORGANIC offers professional skincare solutions using natural, organic ingredients 
              perfectly suited for Uganda's climate. Achieve clear, healthy, and glowing skin with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <Link to="/services">
                <motion.button 
                  className="bg-primary-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  className="bg-white dark:bg-gray-800 text-primary-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Why Choose POP ORGANIC?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine professional expertise with the power of nature to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Sparkles className="mx-auto w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our treatments deliver visible improvements, helping you achieve your skincare goals.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Leaf className="mx-auto w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Natural & Organic</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use high-quality, organic ingredients that are gentle on your skin and the environment.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Users className="mx-auto w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expert Care</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our certified skincare professionals provide personalized care and expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Featured Products & Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our most popular solutions for healthy, glowing skin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-accent-300 font-semibold">{product.price}</p>
                  <Link to={product.link} className="mt-4 inline-flex items-center text-white font-semibold group-hover:text-accent-300">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/Professional skincare treatment.webp"
                alt="Professional skincare treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Your Trusted Partner for Healthy Skin in Uganda
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                At POP ORGANIC, we are passionate about helping Ugandans achieve their best skin. 
                Our story began with a simple mission: to provide effective, natural, and affordable 
                skincare solutions tailored to our local environment.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We combine traditional knowledge with modern science to create products and services 
                that nourish, heal, and protect your skin.
              </p>
              <Link to="/about">
                <motion.button 
                  className="bg-primary-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;