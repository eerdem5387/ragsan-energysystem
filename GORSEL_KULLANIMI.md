# Görsel Kullanım Kılavuzu

## Görselleri Nereye Koymalıyım?

Tüm görselleri şu klasöre koyun:
```
public/images/
```

## Örnek Klasör Yapısı

```
public/
  images/
    logo.png              # Logo için
    logo-white.png        # Beyaz logo (footer için)
    hero-bg.jpg           # Hero section arka plan
    project-1.jpg         # Proje görselleri
    project-2.jpg
    project-3.jpg
    service-solar.jpg     # Hizmet görselleri
    service-wind.jpg
    about-image.jpg       # Hakkımızda görseli
    team.jpg              # Ekip fotoğrafı
```

## Kodda Nasıl Kullanılır?

### Yöntem 1: Basit img Tag (Mevcut Kod)

```tsx
// public/images/project-1.jpg dosyası için:
<img src="/images/project-1.jpg" alt="Proje 1" />

// veya background-image olarak:
<div style={{ backgroundImage: 'url(/images/project-1.jpg)' }} />
```

### Yöntem 2: Next.js Image Component (Önerilen - Optimize)

```tsx
import Image from 'next/image';

<Image 
  src="/images/project-1.jpg" 
  alt="Proje 1"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## Mevcut Kodda Görsel Değiştirme

### Projects.tsx - Proje Görselleri

Şu anda placeholder URL'ler kullanılıyor. Kendi görsellerinizi eklemek için:

```tsx
const projects = [
  {
    title: 'Endüstriyel Güneş Enerjisi Santrali',
    // ...
    image: '/images/project-1.jpg',  // Buraya kendi görselinizi ekleyin
  },
  // ...
];
```

### Header.tsx - Logo

Logo eklemek için:

```tsx
// Mevcut kod:
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg">
  <span className="text-white font-bold text-xl">ES</span>
</div>

// Logo görseli ile değiştirmek için:
<Image 
  src="/images/logo.png" 
  alt="Enerji Sistemleri Logo"
  width={40}
  height={40}
/>
```

## Görsel Boyutları Önerileri

- **Logo**: 200x200px (PNG, şeffaf arka plan)
- **Hero Background**: 1920x1080px (JPG)
- **Proje Görselleri**: 800x600px (JPG)
- **Hizmet Görselleri**: 600x400px (JPG)
- **Ekip/About Görselleri**: 800x800px (JPG)

## Görsel Formatları

- **PNG**: Logo, ikonlar (şeffaf arka plan için)
- **JPG**: Fotoğraflar, arka planlar
- **WebP**: Daha küçük dosya boyutu (önerilen)

## Notlar

- Görsel dosya adlarında Türkçe karakter kullanmayın (ı, ş, ğ, ü, ö, ç)
- Boşluk yerine tire (-) veya alt çizgi (_) kullanın
- Dosya adlarını küçük harfle yazın (logo.png, project-1.jpg)

