@@ .. @@
-# BARcinema - Movie Distribution Platform
+# 🎬 BARcinema - Movie Distribution Platform

-A modern movie and series streaming platform built with React, TypeScript, and Tailwind CSS.
+A modern movie and series streaming platform built with **Vite.js**, **React**, **TypeScript**, and **Tailwind CSS**.

 ## ✨ Features

-- 🎬 Movie and series catalog
-- 🌐 Bilingual support (English/Arabic)
-- 📱 Responsive design
-- 🔍 Search functionality
-- ⭐ Rating system
-- 📊 Admin panel for content management
+- 🎬 **Movie and series catalog** with detailed information
+- 🌐 **Bilingual support** (English/Arabic) with RTL layout
+- 📱 **Responsive design** for all devices
+- 🔍 **Advanced search** functionality
+- ⭐ **Rating and review system**
+- 📊 **Admin panel** for content management
+- 🚀 **PWA support** for mobile installation
+- ⚡ **Optimized performance** with lazy loading
+- 🔒 **Secure authentication** system

 ## 🚀 Getting Started

 ### Prerequisites
-- Node.js 18+ 
-- npm or yarn
+- **Node.js 18+**
+- **npm** or **yarn**

 ### Installation

 ```bash
-# Clone the repository
+# 1. Clone the repository
 git clone https://github.com/yourusername/barcinema.git
 cd barcinema

-# Install dependencies
+# 2. Install dependencies
 npm install

-# Start development server
+# 3. Start development server
 npm run dev
 ```

+### 🌐 Deployment to GitHub Pages

+```bash
+# 1. Build for production
+npm run build

+# 2. Deploy to GitHub Pages
+npm run deploy
+```

+### 📦 Available Scripts

+- `npm run dev` - Start development server
+- `npm run build` - Build for production
+- `npm run preview` - Preview production build
+- `npm run deploy` - Deploy to GitHub Pages
+- `npm run lint` - Run ESLint

 ## 🛠 Tech Stack

-- **Frontend**: React 18, TypeScript, Tailwind CSS
-- **Build Tool**: Vite
-- **Icons**: Lucide React
-- **Database**: Supabase (optional)
+- **Frontend**: React 18, TypeScript, Tailwind CSS
+- **Build Tool**: Vite.js
+- **Routing**: React Router DOM
+- **HTTP Client**: Axios
+- **Icons**: Lucide React
+- **Database**: Supabase
+- **Deployment**: GitHub Pages
+- **PWA**: Service Worker + Web App Manifest

+## 📁 Project Structure

+```
+barcinema/
+├── public/
+│   ├── icons/
+│   ├── sw.js
+│   ├── manifest.json
+│   └── robots.txt
+├── src/
+│   ├── components/
+│   ├── pages/
+│   ├── contexts/
+│   ├── hooks/
+│   ├── utils/
+│   ├── data/
+│   └── types/
+├── .github/
+│   └── workflows/
+└── dist/ (build output)
+```

+## 🔧 Configuration

+### Environment Variables
+Create a `.env` file:
+```env
+VITE_SUPABASE_URL=your_supabase_url
+VITE_SUPABASE_ANON_KEY=your_supabase_key
+VITE_GA_TRACKING_ID=your_ga_id
+VITE_FB_PIXEL_ID=your_pixel_id
+```

+### GitHub Pages Setup
+1. Go to repository Settings
+2. Navigate to Pages section
+3. Select "GitHub Actions" as source
+4. Push to main branch to trigger deployment

 ## 📄 License

 This project is licensed under the MIT License.