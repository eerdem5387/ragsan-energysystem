'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Bağ Villa Güneş Enerjisi Sistemi',
      location: 'Türkiye',
      date: '2024',
      description:
        'Villa için özel tasarlanmış güneş enerjisi sistemi. Estetik ve verimlilik bir arada.',
      image: '/images/bağ-villa-ges.jpg',
      type: 'Güneş Paneli',
      capacity: '50 kW',
    },
    {
      title: 'Bağ Villa Rüzgar Enerjisi Sistemi',
      location: 'Türkiye',
      date: '2024',
      description:
        'Villa için küçük ölçekli rüzgar türbini sistemi. Sessiz ve verimli çalışma.',
      image: '/images/bağ-villa-res.png',
      type: 'Rüzgar Türbini',
      capacity: '20 kW',
    },
    {
      title: 'Enerji Üretim Santrali GES',
      location: 'Türkiye',
      date: '2024',
      description:
        'Büyük ölçekli güneş enerjisi santrali. Yüksek kapasiteli ve verimli enerji üretimi.',
      image: '/images/enerji-üretim-santrali-ges.jpg',
      type: 'Güneş Paneli',
      capacity: '5 MW',
    },
    {
      title: 'Fabrika Güneş Enerjisi Sistemi',
      location: 'Türkiye',
      date: '2023',
      description:
        'Endüstriyel tesis için güneş paneli kurulumu. Çatı ve açık alan kullanımı.',
      image: '/images/fabrika-ges.jpg',
      type: 'Güneş Paneli',
      capacity: '2 MW',
    },
    {
      title: 'Fabrika Rüzgar Enerjisi Sistemi',
      location: 'Türkiye',
      date: '2023',
      description:
        'Fabrika kompleksi için rüzgar türbini kurulumu. Sürekli enerji üretimi.',
      image: '/images/fabrika-res.jpg',
      type: 'Rüzgar Türbini',
      capacity: '1.5 MW',
    },
    {
      title: 'GES Çelik Konstrüksiyon',
      location: 'Türkiye',
      date: '2024',
      description:
        'Sağlam çelik konstrüksiyon üzerine kurulu güneş enerjisi sistemi. Dayanıklı ve uzun ömürlü.',
      image: '/images/ges-çelik-konstriksiyon.jpg',
      type: 'Güneş Paneli',
      capacity: '3 MW',
    },
    {
      title: 'Hibrit RES-GES Sistemi',
      location: 'Türkiye',
      date: '2024',
      description:
        'Güneş ve rüzgar enerjisini birleştiren hibrit sistem. 7/24 kesintisiz enerji.',
      image: '/images/hibrit-res-ges.jpg',
      type: 'Hibrit Sistem',
      capacity: '500 kW',
    },
    {
      title: 'Rüzgar Enerjisi Santrali',
      location: 'Türkiye',
      date: '2023',
      description:
        'Büyük ölçekli rüzgar enerjisi santrali. Yüksek verimlilik ve güvenilirlik.',
      image: '/images/res-santrali.jpg',
      type: 'Rüzgar Türbini',
      capacity: '10 MW',
    },
    {
      title: 'Tarla Güneş Enerjisi Sistemi',
      location: 'Türkiye',
      date: '2024',
      description:
        'Tarım arazisi üzerine kurulu güneş enerjisi sistemi. Tarım ve enerji üretimi birlikte.',
      image: '/images/tarla-ges.webp',
      type: 'Güneş Paneli',
      capacity: '1 MW',
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
    <section id="projeler" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
            Tamamlanan Projelerimiz
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Başarıyla tamamladığımız projelerden örnekler. Her proje, kalite ve müşteri
            memnuniyeti odaklı yaklaşımımızın bir yansımasıdır.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    {project.type}
                  </span>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
              <div className="p-4 sm:p-6">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2 text-xs sm:text-sm">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-sm">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span>{project.date}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Kapasite</div>
                    <motion.div
                      className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.capacity}
                    </motion.div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors text-sm sm:text-base"
                  >
                    <span>Detaylar</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
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
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Projenizi Planlayalım
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
