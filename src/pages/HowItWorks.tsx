import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  UserCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Clock,
  Heart
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: 'Choose Your Treatment',
      description: 'Browse our services and select the treatment that best fits your skin needs and concerns.',
      details: [
        'Explore our range of organic treatments',
        'Read detailed service descriptions',
        'Check pricing and duration',
        'View before/after results'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 2,
      icon: Calendar,
      title: 'Book Your Appointment',
      description: 'Schedule your session at a convenient time through WhatsApp or our booking system.',
      details: [
        'Choose your preferred date and time',
        'Instant confirmation via WhatsApp',
        'Receive appointment reminders',
        'Easy rescheduling if needed'
      ],
      color: 'from-accent-500 to-accent-600'
    },
    {
      id: 3,
      icon: UserCheck,
      title: 'Professional Consultation',
      description: 'Meet with our expert for a personalized skin analysis and treatment plan.',
      details: [
        'Comprehensive skin assessment',
        'Discuss your skincare goals',
        'Identify specific concerns',
        'Create customized treatment plan'
      ],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Experience the Treatment',
      description: 'Relax and enjoy your professional organic skincare treatment in our serene environment.',
      details: [
        'Relax in our comfortable treatment room',
        'Experience organic product benefits',
        'Professional application techniques',
        'Immediate skin improvement'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      icon: Heart,
      title: 'Enjoy Your Results',
      description: 'See immediate improvements and follow your personalized aftercare routine.',
      details: [
        'Visible skin improvement',
        'Personalized home care routine',
        'Product recommendations',
        'Follow-up support'
      ],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Natural & Safe',
      description: 'All treatments use 100% organic, locally-sourced ingredients'
    },
    {
      icon: Clock,
      title: 'Quick Results',
      description: 'See visible improvements after just one session'
    },
    {
      icon: UserCheck,
      title: 'Expert Care',
      description: 'Professional skincare specialists with years of experience'
    },
    {
      icon: Heart,
      title: 'Personalized',
      description: 'Every treatment is customized for your unique skin needs'
    }
  ];

  const handleBookNow = () => {
    const message = encodeURIComponent("Hi POP team, I'd like to book a consultation to get started with my skincare journey. What are your available slots?");
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
              How It <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Your journey to healthy, radiant skin is simple. Follow these easy steps 
              to experience the best of organic skincare treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-20 last:mb-0 ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mr-4`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl font-bold text-gray-300 dark:text-gray-600">
                            {step.id.toString().padStart(2, '0')}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Step Indicator */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                    )}
                  </div>

                  {/* Visual Element */}
                  <div className={`flex-1 ${isEven ? 'pl-12' : 'pr-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className={`w-full h-64 bg-gradient-to-br ${step.color} rounded-2xl overflow-hidden shadow-2xl`}>
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-24 h-24 text-white/80" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Process?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our proven 5-step process ensures you get the best possible results 
              from your skincare journey with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start with a consultation to assess your skin and create your personalized treatment plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookNow}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;