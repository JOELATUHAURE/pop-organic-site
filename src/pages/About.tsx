import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Leaf, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: 'Kukundakwe Yvonne',
    role: 'Director & Founder',
    image: '/images/director.webp',
    bio: 'Yvonne is the visionary behind POP ORGANIC, dedicated to bringing natural, effective skincare to Uganda.',
  },
  {
    name: 'Ahereza Desmond Joe',
    role: 'Manager',
    image: '/images/manager.webp',
    bio: 'With over 10 years of experience, Desmond leads our team of experts in providing top-tier skincare treatments.',
  },
  {
    name: 'Peace Jackline',
    role: 'Marketing Officer',
    image: '/images/marketing-officer.webp',
    bio: 'Peace is passionate about connecting with our community and sharing the benefits of organic skincare.',
  },
  {
    name: 'Topacco Regan Achelam',
    role: 'Secretary',
    image: '/images/secretary.webp',
    bio: 'Regan ensures every client has a positive and welcoming experience, managing appointments and inquiries.',
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Natural & Organic',
    description: 'We believe in the power of nature to heal and nourish your skin.',
  },
  {
    icon: Heart,
    title: 'Client-Centered Care',
    description: 'Every treatment is personalized to meet your unique skin needs.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in all our services and products.',
  },
  {
    icon: Globe,
    title: 'Community Impact',
    description: 'Supporting youth employment and sustainable practices in Uganda.',
  },
];

const milestones = [
  { year: '2020', event: 'Founded POP Skincare with UNDP youth funding' },
  { year: '2021', event: 'Opened first treatment center in Kampala' },
  { year: '2022', event: 'Launched organic product line' },
  { year: '2023', event: 'Reached 500+ satisfied clients' },
  { year: '2024', event: 'Expanded services and team' },
  { year: '2025', event: 'Leading organic skincare in East Africa' },
];

const About: React.FC = () => {
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
              About <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">POP ORGANIC</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              POP ORGANIC is a youth-driven, UNDP-funded organic skincare company dedicated to helping Ugandans achieve healthy, beautiful skin through natural solutions and professional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story: From Passion to Profession
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                POP ORGANIC was born from a desire to provide Ugandans with skincare that is both effective and natural. Our founder, a passionate advocate for organic solutions, noticed a gap in the market for high-quality, locally-suited skincare.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                What started as a small project funded by the UNDP has grown into a trusted brand known for its commitment to quality, sustainability, and community empowerment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/Natural & Organic.webp"
                alt="Organic ingredients"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our passionate team of skincare experts and business professionals working together to deliver exceptional results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From a youth initiative to Uganda's leading organic skincare company.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
