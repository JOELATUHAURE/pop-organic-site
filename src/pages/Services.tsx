import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Organic Brightening Facial',
      description: 'A luxurious facial that uses natural ingredients to brighten and even out skin tone, leaving your skin with a radiant glow.',
      image: '/images/Organic Brightening Facial.webp',
      price: 'UGX 80,000',
      duration: '60 min',
      rating: 4.9,
      details: [
        'Evens out skin tone',
        'Reduces dark spots',
        'Boosts radiance',
        'Uses 100% organic ingredients',
      ],
      process: [
        'Skin analysis and consultation',
        'Deep cleansing with organic products',
        'Gentle extraction of blackheads/whiteheads',
        'Anti-bacterial serum application',
        'Soothing mask treatment',
        'Aftercare instructions'
      ],
      popular: true,
    },
    {
      id: 2,
      title: 'Deep Clean Facial',
      description: 'A purifying treatment that detoxifies the skin, removes impurities, and reduces the appearance of pores for a clearer complexion.',
      image: '/images/Deep Clean Facial.webp',
      price: 'UGX 70,000',
      duration: '50 min',
      rating: 4.8,
      details: [
        'Removes impurities and toxins',
        'Minimizes pore appearance',
        'Controls excess oil',
        'Leaves skin feeling refreshed',
      ],
      process: [
        'Skin assessment',
        'Double cleansing process',
        'Gentle exfoliation',
        'Steam therapy',
        'Hydrating mask',
        'Moisturizer and SPF application'
      ]
    },
    {
      id: 3,
      title: 'Hydrating Treatment',
      description: 'An intensely moisturizing treatment that replenishes dry, dehydrated skin, restoring its natural suppleness and elasticity.',
      image: '/images/Hydrating Treatment.webp',
      price: 'UGX 75,000',
      duration: '55 min',
      rating: 4.7,
      details: [
        'Restores moisture balance',
        'Improves skin elasticity',
        'Soothes dry, flaky skin',
        'Provides long-lasting hydration',
      ],
      process: [
        'Skin tone analysis',
        'Brightening cleanser',
        'Vitamin C treatment',
        'Brightening mask',
        'Serum application',
        'Sun protection advice'
      ]
    },
    {
      id: 4,
      title: 'Anti-Pimple Treatment',
      description: 'A targeted treatment to combat acne, reduce inflammation, and prevent future breakouts, promoting clear and healthy skin.',
      image: '/images/Anti-Pimple Treatment.webp',
      price: 'UGX 90,000',
      duration: '60 min',
      rating: 4.6,
      details: [
        'Reduces acne and inflammation',
        'Prevents new breakouts',
        'Unclogs pores',
        'Promotes healing',
      ],
      process: [
        'Hydration assessment',
        'Gentle cleansing',
        'Hydrating serum',
        'Moisture mask therapy',
        'Barrier cream application',
        'Home care recommendations'
      ]
    },
    {
      id: 5,
      title: 'Teen Acne Program',
      description: 'A specialized program designed for teenage skin to address acne, control oiliness, and educate on proper skincare habits.',
      image: '/images/Teen Acne Program.webp',
      price: 'UGX 120,000',
      duration: '4 sessions',
      rating: 4.8,
      details: [
        'Addresses teenage acne',
        'Controls oil production',
        'Educates on skincare routines',
        'Builds skin confidence',
      ],
       process: [
        'Acne assessment',
        'Gentle acne cleansing',
        'Light extraction',
        'Anti-inflammatory treatment',
        'Oil-control mask',
        'Skincare routine guidance'
      ]
    },
    {
      id: 6,
      name: 'Consultation & Skin Analysis',
      description: 'A one-on-one consultation with our skincare experts to analyze your skin type and create a personalized treatment plan.',
      image: '/images/Consultation & Skin Analysis.webp',
      price: 'UGX 50,000',
      duration: '30 min',
      rating: 4.9,
      details: [
        'Personalized skin analysis',
        'Customized treatment plan',
        'Expert product recommendations',
        'Lifestyle and diet advice',
      ],
      process: [
        'Detailed skin examination',
        'Lifestyle assessment',
        'Skin type determination',
        'Problem identification',
        'Treatment plan creation',
        'Product recommendations'
      ]
    }
  ];

  const handleBookService = (serviceName: string, price: string) => {
    const message = encodeURIComponent(
      `Hi POP team, I'd like to book a ${serviceName} session (${price}). What are your available time slots?`
    );
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
              Our <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Professional skincare treatments using organic products and proven techniques 
              to help you achieve healthy, radiant skin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {service.popular && (
                      <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-2 rounded-full">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {service.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      What You Get:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.details.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {benefit}
                          </span>
                        </div>
                      ))}
                      {service.details.length > 3 && (
                        <button
                          onClick={() => setActiveService(
                            activeService === service.id ? null : service.id
                          )}
                          className="text-sm text-primary-600 dark:text-primary-400 hover:underline text-left"
                        >
                          {activeService === service.id ? 'Show Less' : `+${service.details.length - 3} more benefits`}
                        </button>
                      )}
                    </div>

                    {/* Expanded Benefits */}
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 space-y-2"
                      >
                        {service.details.slice(3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Process Preview */}
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Treatment Process:
                      </h4>
                      <ol className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-6 h-6 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBookService(service.title || '', service.price)}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book Now</span>
                    </motion.button>
                    <button
                      onClick={() => setActiveService(
                        activeService === service.id ? null : service.id
                      )}
                      className="px-4 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full transition-colors duration-200"
                    >
                      {activeService === service.id ? 'Less Info' : 'More Info'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Skincare Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a consultation to discuss your skin concerns and create a personalized treatment plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookService('Consultation & Skin Analysis', 'UGX 50,000')}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
