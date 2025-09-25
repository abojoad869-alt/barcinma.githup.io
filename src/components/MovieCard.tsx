import React from 'react';
import { Star, Eye, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  const { t, language } = useLanguage();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {movie.isNew && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            {t('new')}
          </span>
        )}
        {movie.featured && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
            {t('featured')}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{movie.year}</span>
          </div>
          <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{movie.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {movie.genre.slice(0, 2).map((g) => (
            <span key={g} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {g}
            </span>
          ))}
        </div>
        
        <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'} text-gray-500`}>
          <Eye className="w-4 h-4" />
          <span className="text-sm">{movie.views.toLocaleString()} {t('views')}</span>
        </div>
      </div>
    </div>
  );
}