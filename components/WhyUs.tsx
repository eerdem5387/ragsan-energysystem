'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle,
  Clock,
  DollarSign,
  Headphones,
  Award,
  Globe,
} from 'lucide-react';

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const advantages = [
    {
      icon: Award,
      title: 'Kaliteli Ürünler',
      description:
        'Sadece en iyi markaların ürünlerini sunuyoruz. Tüm ürünlerimiz uluslararası standartlarda sertifikalıdır.',
    },
    {
      icon: DollarSign,
      title: 'Uygun Fiyatlar',
      description:
        'Rekabetçi fiyatlar ve esnek ödeme seçenekleri. Uzun vadede enerji maliyetlerinizi önemli ölçüde düşürür.',
    },
    {
      icon: Clock,
      title: 'Hızlı Kurulum',
      description:
        'Deneyimli ekibimiz sayesinde projelerinizi zamanında ve sorunsuz bir şekilde tamamlıyoruz.',
    },
    {
      icon: Headphones,
      title: '7/24 Destek',
      description:
        'Kurulum sonrası da yanınızdayız. Teknik destek ve bakım hizmetlerimiz her zaman hazır.',
    },
    {
      icon: CheckCircle,
      title: 'Garanti',
      description:
        'Tüm ürünlerimiz için kapsamlı garanti. Performans garantisi ile güvenli yatırım.',
    },
    {
      icon: Globe,
      title: 'Çevre Dostu',
      description:
        'Sürdürülebilir enerji çözümleri ile doğaya katkıda bulunun. Karbon ayak izinizi azaltın.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Tamamlanan Proje' },
    { number: '1000+', label: 'Mutlu Müşteri' },
    { number: '15+', label: 'Yıllık Deneyim' },
    { number: '%98', label: 'Müşteri Memnuniyeti' },
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="neden-biz" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
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
            Neden Bizi Seçmelisiniz?
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Yenilenebilir enerji alanında güvenilir çözüm ortağınız. Kalite, hizmet ve
            müşteri memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5, rotate: [0, -5, 5, 0] }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 rounded-2xl p-4 sm:p-6 text-center text-white shadow-lg"
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm md:text-base opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={false}
              />
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <advantage.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">{advantage.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Hemen Başlayalım
          </motion.h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Yenilenebilir enerji yolculuğunuza bugün başlayın. Ücretsiz keşif ve teklif için
            bizimle iletişime geçin.
          </p>
          <motion.a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#iletisim');
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Ücretsiz Teklif Alın
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
