'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sun, Wind, Zap, Settings, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const services = [
    {
      icon: Sun,
      titleKey: 'services.solar.title',
      descKey: 'services.solar.desc',
      featureKeys: [
        'services.solar.feature1',
        'services.solar.feature2',
        'services.solar.feature3',
        'services.solar.feature4',
      ],
      color: 'from-accent-500 to-accent-700',
    },
    {
      icon: Wind,
      titleKey: 'services.wind.title',
      descKey: 'services.wind.desc',
      featureKeys: [
        'services.wind.feature1',
        'services.wind.feature2',
        'services.wind.feature3',
        'services.wind.feature4',
      ],
      color: 'from-primary-500 to-primary-700',
    },
    {
      icon: Zap,
      titleKey: 'services.hybrid.title',
      descKey: 'services.hybrid.desc',
      featureKeys: [
        'services.hybrid.feature1',
        'services.hybrid.feature2',
        'services.hybrid.feature3',
        'services.hybrid.feature4',
      ],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Settings,
      titleKey: 'services.installation.title',
      descKey: 'services.installation.desc',
      featureKeys: [
        'services.installation.feature1',
        'services.installation.feature2',
        'services.installation.feature3',
        'services.installation.feature4',
      ],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Shield,
      titleKey: 'services.warranty.title',
      descKey: 'services.warranty.desc',
      featureKeys: [
        'services.warranty.feature1',
        'services.warranty.feature2',
        'services.warranty.feature3',
        'services.warranty.feature4',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: TrendingUp,
      titleKey: 'services.consulting.title',
      descKey: 'services.consulting.desc',
      featureKeys: [
        'services.consulting.feature1',
        'services.consulting.feature2',
        'services.consulting.feature3',
        'services.consulting.feature4',
      ],
      color: 'from-orange-500 to-orange-700',
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hizmetler" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
            {t('services.title')}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                className={`bg-gradient-to-br ${service.color} p-6 relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-12 h-12 text-white relative z-10" />
                </motion.div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {t(service.descKey)}
                </p>
                <ul className="space-y-2">
                  {service.featureKeys.map((featureKey, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                    >
                      <motion.span
                        className="text-primary-600 dark:text-primary-400 mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      >
                        ✓
                      </motion.span>
                      <span>{t(featureKey)}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
