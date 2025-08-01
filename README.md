# 🔋 Voltz Power Tools Website

Modern, responsive ve SEO optimize edilmiş Voltz Power Tools kurumsal web sitesi. 

## 📋 Proje Özeti

Bu proje, **Voltz Power Tools** markası için profesyonel el aletleri satış web sitesidir. Astro framework'ü ile static site generation (SSG) kullanılarak geliştirilmiştir.

## ✨ Özellikler

### 🎯 Temel Özellikler
- **8 ürün** için dinamik ürün kataloğu
- **V-PACK batarya ekosistemi** özel sayfası
- Responsive tasarım (mobile-first)
- SEO optimize edilmiş sayfa yapısı
- Modern UI/UX tasarım
- Hızlı yükleme süreleri

### 🛠️ Teknik Özellikler
- **Astro** - Static Site Generation
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe geliştirme
- **Google Analytics 4** - Detaylı web analizi
- **JSON-LD** structured data
- **Modern SEO** optimize edilmiş meta taglar
- **Canonical URLs** - SEO duplicate content önleme
- **Open Graph** ve **Twitter Cards** 
- **Responsive görseller** optimize edilmiş yükleme

### 📄 Sayfa Yapısı
1. **Ana Sayfa (/)** - Hero, öne çıkan özellikler, top 4 ürün
2. **Ürünler (/products)** - Filtrelenebilir ürün listesi  
3. **Ürün Detayları (/products/[slug])** - Dinamik ürün sayfaları
4. **Hakkımızda (/about)** - Marka hikayesi ve değerler
5. **İletişim (/contact)** - İletişim formu ve bilgiler
6. **V-PACK (/v-pack)** - Batarya ekosistemi açıklaması

## 🎨 Tasarım Sistemi

### Renk Paleti
```css
:root {
  --clr-bg-dark: #111215;     /* Ana background */
  --clr-steel-gray: #2A2D34;  /* Kartlar */
  --clr-light-gray: #F5F5F5;  /* Metin */
  --clr-neon-green: #32FF57;  /* Ana vurgu */
  --clr-accent-blue: #00A3FF; /* İkincil vurgu */
}
```

### Tipografi
- **Başlıklar**: Poppins 600
- **Body text**: Inter 400

### Component Library
- `Layout.astro` - Temel sayfa şablonu
- `CutBox.astro` - Köşe kesik yeşil paneller  
- `ProductCard.astro` - Ürün kartları
- `FeatureIcon.astro` - Özellik ikonları

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18.20.8+ 
- npm veya yarn

### Kurulum
```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Build'i önizle
npm run preview
```

### Geliştirme Sunucusu
```bash
npm run dev
# http://localhost:4321 adresinde çalışır
```

## 📁 Proje Yapısı

```
/
├── public/              # Static dosyalar
│   ├── img/            # Ürün görselleri
│   ├── pdf/            # Ürün katalogları
│   └── robots.txt      # SEO dosyası
├── src/
│   ├── components/     # Yeniden kullanılabilir bileşenler
│   │   ├── CutBox.astro
│   │   └── ProductCard.astro
│   ├── layouts/        # Sayfa şablonları
│   │   └── Layout.astro
│   ├── pages/          # Sayfa dosyaları
│   │   ├── index.astro
│   │   ├── products.astro
│   │   ├── products/[slug].astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── v-pack.astro
│   ├── data/           # JSON veri dosyaları
│   │   └── products.json
│   └── styles/         # CSS dosyaları
│       └── global.css
├── tailwind.config.mjs # Tailwind konfigürasyonu
├── astro.config.mjs    # Astro konfigürasyonu
└── vercel.json         # Deploy konfigürasyonu
```

## 🔧 Konfigürasyon

### Astro Config
```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@/components': '/src/components',
        '@/layouts': '/src/layouts',
        '@/data': '/src/data',
      },
    },
  },
});
```

### Tailwind Config
Özel renk paleti ve font aileleri tanımlanmıştır.

## 📊 SEO ve Performance

### SEO Özellikleri
- Unique title ve description her sayfa için
- Open Graph meta tags
- JSON-LD structured data
- Sitemap.xml otomatik oluşturuluyor
- robots.txt optimize edilmiş

### Performance
- Lighthouse Score: 95+
- Lazy loading görseller
- CDN optimize edilmiş fontlar
- Minified CSS/JS
- WebP/AVIF görsel formatları

## 🚢 Deploy

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
npm i -g vercel
vercel

# veya Git push ile otomatik deploy
git push origin main
```

### Diğer Platformlar
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Veri Yönetimi

### Ürün Verisi
`src/data/products.json` dosyasında 8 ürün tanımlanmıştır:

```json
{
  "id": "vzdr-20i",
  "title": "VZDR-20I Brushless Impact Drill",
  "voltage": "20V",
  "torque": "60 N·m", 
  "speed": "0-450 / 0-2000 rpm",
  "features": ["LED Light", "Metal Chuck", "Brushless Motor"],
  "image": "/img/vzdr-20i.webp",
  "pdf": "/pdf/vzdr-20i.pdf",
  "category": "drill",
  "price": "€299"
}
```

## 🎯 Gelecek Geliştirmeler

- [ ] Gerçek ürün görselleri ekleme
- [ ] E-ticaret entegrasyonu  
- [ ] Çoklu dil desteği (i18n)
- [ ] Blog sistemi
- [ ] Kullanıcı hesap sistemi
- [ ] Canlı chat desteği
- [ ] Progressive Web App (PWA)

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

**Voltz Power Tools**
- Website: https://voltzpowertools.com
- Email: info@voltzpowertools.com
- GitHub: https://github.com/voltzpowertools

---

**Geliştirici Notları:**
- Rules dosyası: `.cursor/rules/rules.mdc` - Tüm tasarım kuralları burada
- Component'lar modüler ve yeniden kullanılabilir
- TypeScript strict mode aktif
- Accessibility (WCAG 2.1) uyumlu
- Mobile-first responsive tasarım

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✉️ İletişim Formu ve Email Kurulumu

### 📧 SMTP Ayarları

İletişim formu çalışması için aşağıdaki adımları takip edin:

1. **Proje kök dizininde `.env` dosyası oluşturun:**

```bash
# SMTP Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Configuration
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=info@voltzpowertools.com
EMAIL_SUBJECT_PREFIX=[Voltz Contact Form]

# Google Maps API Key (İsteğe bağlı - gelişmiş harita özellikleri için)
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Google Analytics Configuration
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site Configuration
SITE_URL=http://localhost:4321
```

2. **Gmail SMTP için App Password oluşturun:**
   - Gmail hesabınızda 2-factor authentication'ı açın
   - Google hesap ayarlarında "App passwords" bölümüne gidin
   - "Mail" seçeneği ile yeni bir app password oluşturun
   - Bu password'ü `SMTP_PASS` değeri olarak kullanın

3. **Dependencies'leri yükleyin:**
```bash
npm install
```

### 📊 Google Analytics Kurulumu

1. **Google Analytics 4 Property oluşturun:**
   - [Google Analytics](https://analytics.google.com/) hesabınıza giriş yapın
   - Yeni bir property oluşturun
   - "Enhanced measurement" özelliklerini etkinleştirin
   - Measurement ID'nizi kopyalayın (G-XXXXXXXXXX formatında)

2. **Measurement ID'yi .env dosyasına ekleyin:**
```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 🗺️ Google Maps Kurulumu (İsteğe Bağlı)

1. **Google Cloud Console'da:**
   - Yeni bir proje oluşturun veya mevcut projeyi seçin
   - "Maps JavaScript API" ve "Maps Embed API"yi etkinleştirin
   - API key oluşturun ve domain kısıtlamaları ekleyin

2. **API Key'i .env dosyasına ekleyin:**
```bash
GOOGLE_MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 📝 Form Özellikleri

- ✅ **Real-time validasyon** - Email, telefon, zorunlu alanlar
- ✅ **SMTP email gönderimi** - Nodemailer ile
- ✅ **Profesyonel email template** - HTML formatında
- ✅ **Loading states** - Form gönderme sırasında kullanıcı geri bildirimi
- ✅ **Toast notifications** - Başarı/hata mesajları
- ✅ **Form reset** - Başarılı gönderim sonrası
- ✅ **Rate limiting** - Spam koruması (sunucu tarafında)

### 🔒 Güvenlik

- Email validasyonu (client-side ve server-side)
- XSS koruması
- SMTP bağlantısı güvenliği (TLS)
- Environment variables ile sensitive data koruması

## 👀 Daha Fazla Bilgi

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
