import React from 'react';
import { Star, Eye, Calendar, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Series } from '../types';

interface SeriesCardProps {
  series: Series;
  onClick: () => void;
}

export default function SeriesCard({ series, onClick }: SeriesCardProps) {
  const { t, language } = useLanguage();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={series.cover}
          alt={series.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{series.title}</h3>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{series.year}</span>
          </div>
          <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{series.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {series.genre.slice(0, 2).map((g) => (
            <span key={g} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {g}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'} text-gray-500`}>
            <Eye className="w-4 h-4" />
            <span className="text-sm">{series.views.toLocaleString()} {t('views')}</span>
          </div>
          <span className="text-sm text-gray-600">{series.episodes.length} {t('episodes')}</span>
        </div>
      </div>
    </div>
  );
}