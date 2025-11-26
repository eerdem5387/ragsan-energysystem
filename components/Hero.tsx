'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Wind, Zap, Battery, Leaf, Sparkles } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);


  // Animasyonlu arka plan iconları
  const floatingIcons = [
    { Icon: Sun, x: '10%', y: '20%', delay: 0, duration: 15, size: 60 },
    { Icon: Wind, x: '85%', y: '15%', delay: 2, duration: 18, size: 50 },
    { Icon: Zap, x: '20%', y: '70%', delay: 1, duration: 20, size: 45 },
    { Icon: Battery, x: '75%', y: '65%', delay: 3, duration: 16, size: 55 },
    { Icon: Leaf, x: '50%', y: '10%', delay: 1.5, duration: 22, size: 40 },
    { Icon: Sparkles, x: '15%', y: '50%', delay: 2.5, duration: 17, size: 35 },
    { Icon: Sun, x: '90%', y: '50%', delay: 0.5, duration: 19, size: 50 },
    { Icon: Wind, x: '5%', y: '80%', delay: 3.5, duration: 21, size: 45 },
    { Icon: Zap, x: '60%', y: '25%', delay: 1, duration: 14, size: 40 },
    { Icon: Battery, x: '40%', y: '85%', delay: 2, duration: 23, size: 50 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-10 w-96 h-96 bg-accent-200 dark:bg-accent-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-primary-300 dark:bg-primary-800/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 dark:opacity-15"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: item.duration / 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay,
              }}
              className="text-primary-400 dark:text-primary-500"
            >
              <item.Icon
                size={item.size}
                className="drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Particle Effect - Bağımsız animasyonlu baloncuklar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDuration = Math.random() * 4 + 3; // 3-7 saniye arası
          const randomDelay = Math.random() * 3;
          const randomXMovement = (Math.random() - 0.5) * 200; // -100 ile 100 arası
          const randomYMovement = (Math.random() - 0.5) * 200;
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full opacity-20"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              animate={{
                x: [0, randomXMovement, 0, -randomXMovement * 0.5, 0],
                y: [0, randomYMovement, 0, -randomYMovement * 0.5, 0],
                opacity: [0.1, 0.4, 0.2, 0.3, 0.1],
                scale: [0.5, 1.2, 0.8, 1, 0.5],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <div className="flex justify-center items-center space-x-4 mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-white/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Sun className="w-12 h-12 text-accent-500 dark:text-accent-400" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-white/20"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <Wind className="w-12 h-12 text-primary-500 dark:text-primary-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          <motion.span
            className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent block"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Yenilenebilir Enerji
          </motion.span>
          <motion.span
            className="text-gray-800 dark:text-gray-200 block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Geleceğiniz İçin
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Güneş panelleri ve rüzgar türbinleri ile sürdürülebilir enerji çözümleri.
          <br className="hidden sm:block" />
          <span className="block sm:inline"> Doğaya saygılı, ekonomik ve verimli enerji sistemleri.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
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
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
          >
            Hemen İletişime Geçin
          </motion.a>
          <motion.a
            href="#hizmetler"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#hizmetler');
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
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-primary-600 dark:border-primary-400 w-full sm:w-auto"
          >
            Hizmetlerimizi Keşfedin
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
