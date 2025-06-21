import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Nakamya',
      title: 'Glowing Results!',
      company: 'Local Artisan, Kampala',
      testimonial: 'POP ORGANIC\'s products have transformed my skin! The Anti-Pimple Serum cleared up my breakouts in just a few weeks. My skin has never felt so smooth and healthy. I highly recommend their services to anyone struggling with acne.',
      beforeImage: '/images/Sarah Nakamya.webp',
      afterImage: '/images/Sarah Nakamya.webp',
      rating: 5,
      treatment: 'Anti-Pimple Treatment',
      duration: '3 months',
      results: '90% reduction in breakouts',
    },
    {
      id: 2,
      name: 'David Mukasa',
      title: 'Finally Found What Works',
      company: 'University Student, Mukono',
      testimonial: 'As a student, stress and late nights were taking a toll on my skin. The Deep Clean Facial is a lifesaver! It keeps my pores clean and my skin looking fresh. The team is so professional and knowledgeable.',
      beforeImage: '/images/David Mukasa.webp',
      afterImage: '/images/David Mukasa.webp',
      rating: 5,
      treatment: 'Deep Clean Facial',
      duration: '1 session',
      results: 'Visibly brighter skin',
    },
    {
      id: 3,
      name: 'Grace Namatovu',
      title: 'A True Organic Experience',
      company: 'Entrepreneur, Entebbe',
      testimonial: "I love that all their products are organic and locally sourced. The Organic Brightening Facial gave my skin an incredible glow. It's amazing to find a brand that truly cares about natural ingredients and delivering visible results.",
      beforeImage: '/images/Grace Namatovu.webp',
      afterImage: '/images/Grace Namatovu.webp',
      rating: 5,
      treatment: 'Teen Acne Program',
      duration: '2 months',
      results: 'Clear, healthy skin',
    },
    {
      id: 4,
      name: 'James Okello',
      title: 'Professional and Effective',
      company: 'Marketing Executive, Kampala',
      testimonial: 'I was struggling with uneven skin tone for years. After a consultation and using their recommended products, my skin has improved dramatically. The team is professional, and their advice is always on point.',
      beforeImage: '/images/James Okello.webp',
      afterImage: '/images/James Okello.webp',
      rating: 5,
      treatment: 'Organic Brightening Facial',
      duration: '6 sessions',
      results: 'Even skin tone',
    },
    {
      id: 5,
      name: 'Mary Nakato',
      title: 'My Skin Has Never Been Better!',
      company: 'Teacher, Jinja',
      testimonial: 'The Hydrating Treatment is perfect for my dry skin. It feels so soft and supple after each session. I appreciate the personalized care and attention to detail from the POP ORGANIC team.',
      beforeImage: '/images/Mary Nakato.webp',
      afterImage: '/images/Mary Nakato.webp',
      rating: 5,
      treatment: 'Hydrating Treatment',
      duration: '4 sessions',
      results: 'Deep hydration achieved',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '95%', label: 'Repeat Clients' }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleBookConsultation = () => {
    const message = encodeURIComponent("Hi POP team, I've read the amazing testimonials and would like to book a consultation to discuss my skincare goals!");
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
              Client <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Real results from real people. See how POP Skincare has transformed 
              the lives and confidence of our amazing clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-primary-600 mb-4" />
                      <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        "{testimonials[activeTestimonial].testimonial}"
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-600 dark:text-gray-400">
                        ({testimonials[activeTestimonial].rating}/5)
                      </span>
                    </div>

                    {/* Client Info */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      <div className="text-gray-600 dark:text-gray-400 space-y-1">
                        <p>{testimonials[activeTestimonial].company}</p>
                        <p>Treatment: {testimonials[activeTestimonial].treatment}</p>
                        <p>Duration: {testimonials[activeTestimonial].duration}</p>
                        <p className="font-semibold text-primary-600 dark:text-primary-400">
                          Result: {testimonials[activeTestimonial].results}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={testimonials[activeTestimonial].afterImage}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Results Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-xl">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          ✨ {testimonials[activeTestimonial].results}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          in {testimonials[activeTestimonial].duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/20"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeTestimonial
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/20"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their skin with our organic treatments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.afterImage}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  "{testimonial.testimonial.length > 120 
                    ? testimonial.testimonial.substring(0, 120) + "..."
                    : testimonial.testimonial}"
                </p>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <p className="font-semibold text-primary-600 dark:text-primary-400">
                    {testimonial.results}
                  </p>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of satisfied clients and start your journey to healthier, more radiant skin today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookConsultation}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;