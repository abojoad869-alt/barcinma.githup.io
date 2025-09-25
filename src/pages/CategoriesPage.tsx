import React from 'react';
import { Folder, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/categories';

export default function CategoriesPage() {
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen bg-gray-50 ${language.dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('browseCategories')}</h1>
          <p className="text-xl text-gray-600">{t('findContentByGenre')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Folder className={`w-8 h-8 text-red-500 ${language.dir === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {language.code === 'ar' ? category.nameAr : category.name}
                      </h3>
                      <p className="text-sm text-gray-500">{category.count} {t('items')}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors ${language.dir === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('popularThisWeek')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.slice(0, 4).map((category) => (
              <div
                key={category.id}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-4 text-center hover:from-red-600 hover:to-red-700 transition-all cursor-pointer"
              >
                <h3 className="font-semibold">{language.code === 'ar' ? category.nameAr : category.name}</h3>
                <p className="text-sm opacity-90">{category.count} {t('items')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}