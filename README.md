# Enerji Sistemleri - Yenilenebilir Enerji Web Sitesi

Güneş panelleri ve rüzgar türbinleri satan bir kuruluş için profesyonel, tek sayfalık web sitesi.

## Özellikler

- 🎨 Modern ve profesyonel UI/UX tasarımı
- 📱 Tam responsive (mobil, tablet, desktop)
- ⚡ Next.js 14 ile yüksek performans
- 🎭 Framer Motion ile akıcı animasyonlar
- 🎯 Smooth scroll navigasyon
- 🌈 Gradient renkler ve modern görsel efektler
- 📧 İletişim formu
- 🔗 WhatsApp entegrasyonu

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasyon kütüphanesi
- **Lucide React** - İkon kütüphanesi

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Yapı

```
├── app/
│   ├── globals.css      # Global stiller
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Ana sayfa
├── components/
│   ├── Header.tsx       # Header bileşeni
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # Hakkımızda bölümü
│   ├── Services.tsx     # Hizmetler bölümü
│   ├── WhyUs.tsx        # Neden Biz? bölümü
│   ├── Projects.tsx     # Projeler bölümü
│   ├── Contact.tsx      # İletişim bölümü
│   └── Footer.tsx       # Footer bileşeni
└── ...
```

## Özelleştirme

### İletişim Bilgileri

Header ve Contact bileşenlerindeki telefon numarası ve WhatsApp numarasını güncelleyin:

- `components/Header.tsx` - `whatsappNumber` ve `phoneNumber`
- `components/Contact.tsx` - İletişim bilgileri
- `components/Footer.tsx` - Footer iletişim bilgileri

### Renkler

`tailwind.config.ts` dosyasındaki renk paletini özelleştirebilirsiniz.

## Production Build

```bash
npm run build
npm start
```

## Lisans

Bu proje özel kullanım içindir.

