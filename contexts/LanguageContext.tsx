'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  tr: {
    // Navigation
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.whyUs': 'Neden Biz?',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.title1': 'Yenilenebilir Enerji',
    'hero.title2': 'Geleceğiniz İçin',
    'hero.description1': 'Güneş panelleri ve rüzgar türbinleri ile sürdürülebilir enerji çözümleri.',
    'hero.description2': 'Doğaya saygılı, ekonomik ve verimli enerji sistemleri.',
    'hero.cta1': 'Hemen İletişime Geçin',
    'hero.cta2': 'Hizmetlerimizi Keşfedin',
    
    // About
    'about.title': 'Hakkımızda',
    'about.subtitle': 'RAGSAN Renewable Energy Systems olarak, yenilenebilir enerji alanında öncü bir firma olarak müşterilerimize en kaliteli güneş paneli ve rüzgar türbini çözümlerini sunuyoruz.',
    'about.heading': 'Geleceği Şekillendiriyoruz',
    'about.text1': 'Yılların deneyimi ve teknolojik yenilikleri bir araya getirerek, sürdürülebilir enerji çözümleri sunuyoruz. Güneş panelleri ve rüzgar türbinleri konusunda uzmanlaşmış ekibimiz, her projeyi titizlikle planlar ve hayata geçirir.',
    'about.text2': 'Müşterilerimizin enerji ihtiyaçlarını analiz ederek, en uygun ve verimli çözümleri öneriyoruz. Kalite, güvenilirlik ve müşteri memnuniyeti bizim için önceliktir.',
    'about.text3': 'Doğaya saygılı, ekonomik ve uzun ömürlü enerji sistemleri ile hem çevrenizi koruyun hem de enerji maliyetlerinizi düşürün.',
    'about.stats.projects': 'Tamamlanan Proje',
    'about.stats.experience': 'Yıllık Deneyim',
    'about.stats.customers': 'Mutlu Müşteri',
    'about.stats.support': 'Destek Hizmeti',
    'about.features.expert': 'Uzman Ekip',
    'about.features.expert.desc': 'Yılların deneyimine sahip profesyonel ekibimizle hizmetinizdeyiz.',
    'about.features.quality': 'Kalite Garantisi',
    'about.features.quality.desc': 'Tüm ürünlerimiz uluslararası standartlarda kalite sertifikalarına sahiptir.',
    'about.features.target': 'Hedef Odaklı',
    'about.features.target.desc': 'Müşteri memnuniyetini ön planda tutarak çözümler üretiyoruz.',
    'about.features.sustainability': 'Sürdürülebilirlik',
    'about.features.sustainability.desc': 'Çevreye duyarlı, sürdürülebilir enerji çözümleri sunuyoruz.',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Yenilenebilir enerji alanında kapsamlı hizmetler sunuyoruz. İhtiyaçlarınıza özel çözümler üretiyoruz.',
    'services.solar.title': 'Güneş Paneli Sistemleri',
    'services.solar.desc': 'Yüksek verimli güneş panelleri ile elektrik üretimi. Ev, iş yeri ve endüstriyel uygulamalar için özel çözümler.',
    'services.solar.feature1': 'Monokristal ve Polikristal seçenekleri',
    'services.solar.feature2': '25 yıl garanti',
    'services.solar.feature3': 'Yüksek verimlilik oranları',
    'services.solar.feature4': 'Kolay kurulum ve bakım',
    'services.wind.title': 'Rüzgar Türbini Sistemleri',
    'services.wind.desc': 'Modern rüzgar türbinleri ile sürekli enerji üretimi. Küçük ve büyük ölçekli projeler için uygun çözümler.',
    'services.wind.feature1': 'Düşük ve yüksek rüzgar hızlarında çalışma',
    'services.wind.feature2': 'Sessiz ve verimli tasarım',
    'services.wind.feature3': 'Uzun ömürlü yapı',
    'services.wind.feature4': 'Otomatik rüzgar yönü takibi',
    'services.hybrid.title': 'Hibrit Enerji Sistemleri',
    'services.hybrid.desc': 'Güneş ve rüzgar enerjisini birleştiren akıllı hibrit sistemler. Kesintisiz enerji sağlama.',
    'services.hybrid.feature1': 'Güneş + Rüzgar kombinasyonu',
    'services.hybrid.feature2': 'Akıllı enerji yönetimi',
    'services.hybrid.feature3': 'Batarya depolama seçenekleri',
    'services.hybrid.feature4': '7/24 enerji üretimi',
    'services.installation.title': 'Kurulum ve Bakım',
    'services.installation.desc': 'Profesyonel kurulum ekibimiz ve düzenli bakım hizmetlerimiz ile sistemlerinizin optimal çalışmasını garanti ediyoruz.',
    'services.installation.feature1': 'Uzman kurulum ekibi',
    'services.installation.feature2': 'Düzenli bakım programları',
    'services.installation.feature3': '7/24 teknik destek',
    'services.installation.feature4': 'Uzaktan izleme sistemleri',
    'services.warranty.title': 'Garanti ve Sigorta',
    'services.warranty.desc': 'Tüm ürünlerimiz için kapsamlı garanti ve sigorta seçenekleri. Güvenli yatırım garantisi.',
    'services.warranty.feature1': 'Ürün garantisi',
    'services.warranty.feature2': 'Performans garantisi',
    'services.warranty.feature3': 'Sigorta kapsamı',
    'services.warranty.feature4': 'Hızlı yedek parça temini',
    'services.consulting.title': 'Enerji Danışmanlığı',
    'services.consulting.desc': 'Enerji ihtiyaçlarınızı analiz ederek en uygun çözümü sunuyoruz. ROI hesaplamaları ve finansman seçenekleri.',
    'services.consulting.feature1': 'Detaylı enerji analizi',
    'services.consulting.feature2': 'ROI hesaplamaları',
    'services.consulting.feature3': 'Finansman seçenekleri',
    'services.consulting.feature4': 'Proje yönetimi',
    
    // WhyUs
    'whyUs.title': 'Neden Bizi Seçmelisiniz?',
    'whyUs.subtitle': 'Yenilenebilir enerji alanında güvenilir çözüm ortağınız. Kalite, hizmet ve müşteri memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz.',
    'whyUs.stats.projects': 'Tamamlanan Proje',
    'whyUs.stats.customers': 'Mutlu Müşteri',
    'whyUs.stats.experience': 'Yıllık Deneyim',
    'whyUs.stats.satisfaction': 'Müşteri Memnuniyeti',
    'whyUs.advantages.quality.title': 'Kaliteli Ürünler',
    'whyUs.advantages.quality.desc': 'Sadece en iyi markaların ürünlerini sunuyoruz. Tüm ürünlerimiz uluslararası standartlarda sertifikalıdır.',
    'whyUs.advantages.price.title': 'Uygun Fiyatlar',
    'whyUs.advantages.price.desc': 'Rekabetçi fiyatlar ve esnek ödeme seçenekleri. Uzun vadede enerji maliyetlerinizi önemli ölçüde düşürür.',
    'whyUs.advantages.fast.title': 'Hızlı Kurulum',
    'whyUs.advantages.fast.desc': 'Deneyimli ekibimiz sayesinde projelerinizi zamanında ve sorunsuz bir şekilde tamamlıyoruz.',
    'whyUs.advantages.support.title': '7/24 Destek',
    'whyUs.advantages.support.desc': 'Kurulum sonrası da yanınızdayız. Teknik destek ve bakım hizmetlerimiz her zaman hazır.',
    'whyUs.advantages.warranty.title': 'Garanti',
    'whyUs.advantages.warranty.desc': 'Tüm ürünlerimiz için kapsamlı garanti. Performans garantisi ile güvenli yatırım.',
    'whyUs.advantages.environment.title': 'Çevre Dostu',
    'whyUs.advantages.environment.desc': 'Sürdürülebilir enerji çözümleri ile doğaya katkıda bulunun. Karbon ayak izinizi azaltın.',
    'whyUs.cta.title': 'Hemen Başlayalım',
    'whyUs.cta.subtitle': 'Yenilenebilir enerji yolculuğunuza bugün başlayın. Ücretsiz keşif ve teklif için bizimle iletişime geçin.',
    'whyUs.cta.button': 'Ücretsiz Teklif Alın',
    
    // Projects
    'projects.title': 'Tamamlanan Projelerimiz',
    'projects.subtitle': 'Başarıyla tamamladığımız projelerden örnekler. Her proje, kalite ve müşteri memnuniyeti odaklı yaklaşımımızın bir yansımasıdır.',
    'projects.capacity': 'Kapasite',
    'projects.details': 'Detaylar',
    'projects.cta': 'Projenizi Planlayalım',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Sorularınız, önerileriniz veya proje talepleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.',
    'contact.info.title': 'İletişim Bilgilerimiz',
    'contact.info.subtitle': 'Size yardımcı olmak için buradayız. Aşağıdaki kanallardan bize ulaşabilirsiniz.',
    'contact.form.title': 'Bize Mesaj Gönderin',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Mesajınız',
    'contact.form.send': 'Mesaj Gönder',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.success': 'Mesaj Gönderildi!',
    'contact.form.success.message': 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    'contact.hours.title': 'Çalışma Saatleri',
    'contact.hours.weekday': 'Pazartesi - Cuma: 09:00 - 18:00',
    'contact.hours.saturday': 'Cumartesi: 10:00 - 16:00',
    'contact.hours.sunday': 'Pazar: Kapalı',
    
    // Footer
    'footer.description': 'Yenilenebilir enerji çözümleri ile sürdürülebilir gelecek için çalışıyoruz.',
    'footer.quickLinks': 'Hızlı Linkler',
    'footer.services': 'Hizmetlerimiz',
    'footer.contact': 'İletişim',
    'footer.whatsapp': 'WhatsApp ile İletişim',
    'footer.copyright': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Koşulları',
  },
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.whyUs': 'Why Us',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title1': 'Renewable Energy',
    'hero.title2': 'For Your Future',
    'hero.description1': 'Sustainable energy solutions with solar panels and wind turbines.',
    'hero.description2': 'Nature-friendly, economical and efficient energy systems.',
    'hero.cta1': 'Contact Us Now',
    'hero.cta2': 'Discover Our Services',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'As RAGSAN Renewable Energy Systems, we offer the highest quality solar panel and wind turbine solutions to our customers as a leading company in the field of renewable energy.',
    'about.heading': 'Shaping the Future',
    'about.text1': 'We offer sustainable energy solutions by combining years of experience and technological innovations. Our team specialized in solar panels and wind turbines carefully plans and implements each project.',
    'about.text2': 'We analyze our customers\' energy needs and recommend the most suitable and efficient solutions. Quality, reliability and customer satisfaction are our priorities.',
    'about.text3': 'Protect your environment and reduce your energy costs with nature-friendly, economical and long-lasting energy systems.',
    'about.stats.projects': 'Completed Projects',
    'about.stats.experience': 'Years of Experience',
    'about.stats.customers': 'Happy Customers',
    'about.stats.support': 'Support Service',
    'about.features.expert': 'Expert Team',
    'about.features.expert.desc': 'We are at your service with our professional team with years of experience.',
    'about.features.quality': 'Quality Guarantee',
    'about.features.quality.desc': 'All our products have quality certificates in international standards.',
    'about.features.target': 'Goal Oriented',
    'about.features.target.desc': 'We produce solutions by keeping customer satisfaction in the foreground.',
    'about.features.sustainability': 'Sustainability',
    'about.features.sustainability.desc': 'We offer environmentally friendly, sustainable energy solutions.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive services in the field of renewable energy. We produce solutions tailored to your needs.',
    'services.solar.title': 'Solar Panel Systems',
    'services.solar.desc': 'Electricity generation with high-efficiency solar panels. Special solutions for home, business and industrial applications.',
    'services.solar.feature1': 'Monocrystalline and Polycrystalline options',
    'services.solar.feature2': '25 year warranty',
    'services.solar.feature3': 'High efficiency rates',
    'services.solar.feature4': 'Easy installation and maintenance',
    'services.wind.title': 'Wind Turbine Systems',
    'services.wind.desc': 'Continuous energy generation with modern wind turbines. Suitable solutions for small and large scale projects.',
    'services.wind.feature1': 'Operation at low and high wind speeds',
    'services.wind.feature2': 'Quiet and efficient design',
    'services.wind.feature3': 'Long-lasting structure',
    'services.wind.feature4': 'Automatic wind direction tracking',
    'services.hybrid.title': 'Hybrid Energy Systems',
    'services.hybrid.desc': 'Smart hybrid systems that combine solar and wind energy. Providing uninterrupted energy.',
    'services.hybrid.feature1': 'Solar + Wind combination',
    'services.hybrid.feature2': 'Smart energy management',
    'services.hybrid.feature3': 'Battery storage options',
    'services.hybrid.feature4': '24/7 energy generation',
    'services.installation.title': 'Installation and Maintenance',
    'services.installation.desc': 'We guarantee the optimal operation of your systems with our professional installation team and regular maintenance services.',
    'services.installation.feature1': 'Expert installation team',
    'services.installation.feature2': 'Regular maintenance programs',
    'services.installation.feature3': '24/7 technical support',
    'services.installation.feature4': 'Remote monitoring systems',
    'services.warranty.title': 'Warranty and Insurance',
    'services.warranty.desc': 'Comprehensive warranty and insurance options for all our products. Safe investment guarantee.',
    'services.warranty.feature1': 'Product warranty',
    'services.warranty.feature2': 'Performance warranty',
    'services.warranty.feature3': 'Insurance coverage',
    'services.warranty.feature4': 'Fast spare parts supply',
    'services.consulting.title': 'Energy Consulting',
    'services.consulting.desc': 'We analyze your energy needs and offer the most suitable solution. ROI calculations and financing options.',
    'services.consulting.feature1': 'Detailed energy analysis',
    'services.consulting.feature2': 'ROI calculations',
    'services.consulting.feature3': 'Financing options',
    'services.consulting.feature4': 'Project management',
    
    // WhyUs
    'whyUs.title': 'Why Choose Us?',
    'whyUs.subtitle': 'Your trusted solution partner in the field of renewable energy. We make a difference with our quality, service and customer satisfaction-oriented approach.',
    'whyUs.stats.projects': 'Completed Projects',
    'whyUs.stats.customers': 'Happy Customers',
    'whyUs.stats.experience': 'Years of Experience',
    'whyUs.stats.satisfaction': 'Customer Satisfaction',
    'whyUs.advantages.quality.title': 'Quality Products',
    'whyUs.advantages.quality.desc': 'We only offer products from the best brands. All our products are certified to international standards.',
    'whyUs.advantages.price.title': 'Affordable Prices',
    'whyUs.advantages.price.desc': 'Competitive prices and flexible payment options. Significantly reduces your energy costs in the long run.',
    'whyUs.advantages.fast.title': 'Fast Installation',
    'whyUs.advantages.fast.desc': 'Thanks to our experienced team, we complete your projects on time and without problems.',
    'whyUs.advantages.support.title': '24/7 Support',
    'whyUs.advantages.support.desc': 'We are with you after installation. Our technical support and maintenance services are always ready.',
    'whyUs.advantages.warranty.title': 'Warranty',
    'whyUs.advantages.warranty.desc': 'Comprehensive warranty for all our products. Safe investment with performance guarantee.',
    'whyUs.advantages.environment.title': 'Environmentally Friendly',
    'whyUs.advantages.environment.desc': 'Contribute to nature with sustainable energy solutions. Reduce your carbon footprint.',
    'whyUs.cta.title': 'Let\'s Get Started',
    'whyUs.cta.subtitle': 'Start your renewable energy journey today. Contact us for a free consultation and quote.',
    'whyUs.cta.button': 'Get Free Quote',
    
    // Projects
    'projects.title': 'Our Completed Projects',
    'projects.subtitle': 'Examples from the projects we have successfully completed. Each project is a reflection of our quality and customer satisfaction-oriented approach.',
    'projects.capacity': 'Capacity',
    'projects.details': 'Details',
    'projects.cta': 'Plan Your Project',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us for your questions, suggestions or project requests. We will get back to you as soon as possible.',
    'contact.info.title': 'Contact Information',
    'contact.info.subtitle': 'We are here to help you. You can reach us through the channels below.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message Sent!',
    'contact.form.success.message': 'Your message has been sent successfully! We will get back to you as soon as possible.',
    'contact.hours.title': 'Working Hours',
    'contact.hours.weekday': 'Monday - Friday: 09:00 - 18:00',
    'contact.hours.saturday': 'Saturday: 10:00 - 16:00',
    'contact.hours.sunday': 'Sunday: Closed',
    
    // Footer
    'footer.description': 'We work for a sustainable future with renewable energy solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact',
    'footer.whatsapp': 'Contact via WhatsApp',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else if (navigator.language.startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

