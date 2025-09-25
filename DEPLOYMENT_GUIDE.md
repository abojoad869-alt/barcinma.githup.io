# 🚀 دليل نشر BARcinema على GitHub Pages

## 📋 الخطوات المطلوبة:

### 1️⃣ إنشاء Repository على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. انقر على **"New Repository"**
3. اسم المشروع: `barcinema`
4. اجعله **Public**
5. لا تضع ✅ في "Add a README file"
6. انقر **"Create Repository"**

### 2️⃣ رفع المشروع

```bash
# في مجلد المشروع، افتح Terminal/CMD واكتب:

# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# أول commit
git commit -m "Initial commit - BARcinema website"

# ربط بـ GitHub (استبدل YOUR_USERNAME باسم المستخدم)
git remote add origin https://github.com/YOUR_USERNAME/barcinema.git

# رفع الملفات
git branch -M main
git push -u origin main
```

### 3️⃣ تفعيل GitHub Pages

1. اذهب لصفحة المشروع على GitHub
2. انقر على **"Settings"**
3. من القائمة الجانبية، انقر **"Pages"**
4. في **"Source"** اختر **"GitHub Actions"**
5. سيبدأ النشر تلقائياً!

### 4️⃣ تحديث المعلومات

قبل الرفع، حدث هذه المعلومات:

**في ملف `package.json`:**
```json
"homepage": "https://YOUR_USERNAME.github.io/barcinema/"
```

**في ملف `vite.config.ts`:**
```typescript
base: '/barcinema/'
```

**في ملف `.github/workflows/deploy.yml`:**
- الملف جاهز ولا يحتاج تعديل

### 5️⃣ الموقع سيكون متاح على:
```
https://YOUR_USERNAME.github.io/barcinema/
```

## 🔧 أوامر مفيدة:

```bash
# تشغيل المشروع محلياً
npm run dev

# بناء المشروع
npm run build

# معاينة البناء
npm run preview

# نشر يدوي (اختياري)
npm run deploy
```

## 🌐 إعداد Domain مخصص (اختياري):

1. اشتري domain من Namecheap أو GoDaddy
2. في إعدادات DNS، أضف:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
3. في GitHub Pages Settings، أضف الـ domain

## 📊 إضافة Google Analytics:

1. أنشئ حساب [Google Analytics](https://analytics.google.com)
2. احصل على Tracking ID
3. استبدل `G-XXXXXXXXXX` في الكود

## ✅ التحقق من النشر:

- ✅ الموقع يفتح بدون أخطاء
- ✅ الصور تظهر بشكل صحيح  
- ✅ التنقل يعمل
- ✅ اللغة العربية تظهر بشكل صحيح
- ✅ الموقع responsive على الجوال

## 🆘 حل المشاكل الشائعة:

**المشكلة:** الصفحة فارغة
**الحل:** تأكد من `base: '/barcinema/'` في vite.config.ts

**المشكلة:** الصور لا تظهر
**الحل:** تأكد من مسارات الصور صحيحة

**المشكلة:** 404 عند التنقل
**الحل:** GitHub Pages يدعم SPA تلقائياً مع الإعداد الحالي

## 📞 الدعم:

إذا واجهت أي مشكلة، تأكد من:
1. اسم المستخدم صحيح في جميع الملفات
2. Repository اسمه `barcinema` بالضبط
3. الـ workflow يعمل في Actions tab

---
**🎬 BARcinema - Your destination for original entertainment content**