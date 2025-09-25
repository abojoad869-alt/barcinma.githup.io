# 🚀 BARcinema - Local Setup Guide

## 📋 Prerequisites
- **Node.js 18+** (Download from: https://nodejs.org/)
- **Git** (Download from: https://git-scm.com/)
- **Code Editor** (VS Code recommended)

## 🛠 Local Setup Steps

### 1. Download/Clone the Project
```bash
# Option 1: Download ZIP and extract
# Option 2: Clone with Git
git clone https://github.com/yourusername/barcinema.git
cd barcinema
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Project
```bash
npm run build
```

### 4. Test Locally (Optional)
```bash
npm run preview
```

## 📁 After Build - You'll Get:
- **`dist/` folder** - This contains your website files
- Upload the entire `dist/` folder contents to your hosting

## 🌐 GitHub Pages Setup

### Method 1: Manual Upload
1. Build the project: `npm run build`
2. Go to your GitHub repository
3. Go to **Settings** → **Pages**
4. Choose **Upload a folder** or use GitHub Desktop
5. Upload the `dist/` folder contents

### Method 2: Automatic Deployment
1. Push your code to GitHub
2. Go to **Settings** → **Pages**
3. Choose **GitHub Actions** as source
4. The site will auto-deploy on every push

## 🔧 Configuration

### Update Your Domain
In `vite.config.ts`, change:
```typescript
base: '/your-repo-name/',
```

In `package.json`, change:
```json
"homepage": "https://yourusername.github.io/your-repo-name/"
```

### Custom Domain (Optional)
1. Add your domain to `public/CNAME`
2. Configure DNS settings with your domain provider

## ✅ Verification Checklist
- [ ] Node.js installed
- [ ] `npm install` completed successfully
- [ ] `npm run build` creates `dist/` folder
- [ ] All files in `dist/` folder
- [ ] Repository created on GitHub
- [ ] GitHub Pages configured

## 🆘 Troubleshooting

### Build Fails?
```bash
# Clear cache and reinstall
npm run clean
rm -rf node_modules
npm install
npm run build
```

### Missing Dependencies?
```bash
npm install --legacy-peer-deps
```

### Port Issues?
```bash
# Try different port
npm run dev -- --port 3001
```

## 📞 Support
If you encounter any issues:
1. Check Node.js version: `node --version` (should be 18+)
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall

---
**🎬 Your BARcinema website will be live at:**
`https://yourusername.github.io/barcinema/`