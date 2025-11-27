'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Target, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      titleKey: 'about.features.expert',
      descKey: 'about.features.expert.desc',
    },
    {
      icon: Award,
      titleKey: 'about.features.quality',
      descKey: 'about.features.quality.desc',
    },
    {
      icon: Target,
      titleKey: 'about.features.target',
      descKey: 'about.features.target.desc',
    },
    {
      icon: Leaf,
      titleKey: 'about.features.sustainability',
      descKey: 'about.features.sustainability.desc',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hakkimizda" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 md:order-1"
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about.heading')}
            </motion.h3>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('about.text1')}
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('about.text2')}
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('about.text3')}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-1 md:order-2"
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                {[
                  { number: '100', labelKey: 'about.stats.projects' },
                  { number: '5+', labelKey: 'about.stats.experience' },
                  { number: '100', labelKey: 'about.stats.customers' },
                  { number: '24/7', labelKey: 'about.stats.support' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.labelKey}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg text-center border border-gray-100 dark:border-gray-700"
                  >
                    <motion.div
                      className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t(stat.labelKey)}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{t(feature.titleKey)}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
