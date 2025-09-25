import React from 'react';
import { ArrowLeft, Star, Calendar, Eye, Download, Play, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Movie } from '../types';

interface MovieDetailPageProps {
  movie: Movie;
  onBack: () => void;
}

export default function MovieDetailPage({ movie, onBack }: MovieDetailPageProps) {
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen bg-gray-50 ${language.dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className={`flex items-center text-gray-600 hover:text-gray-900 transition-colors ${language.dir === 'rtl' ? 'flex-row-reverse' : ''}`}
          >
            <ArrowLeft className={`w-5 h-5 ${language.dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {t('backToMovies')}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{movie.year}</span>
                </div>
                <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                  <span className="font-semibold">{movie.rating}/10</span>
                </div>
                <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Eye className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{movie.views.toLocaleString()} {t('views')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((g) => (
                  <span key={g} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {g}
                  </span>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{t('synopsis')}</h3>
                <p className="text-gray-700 leading-relaxed">{movie.synopsis}</p>
              </div>

              {/* Trailer */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{t('trailer')}</h3>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    src={movie.trailer}
                    title={`${movie.title} Trailer`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Download and Watch Links */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">{t('watchDownload')}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Watch Live */}
                  <a
                    href={movie.watchLink}
                    className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Play className={`w-5 h-5 ${language.dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    {t('watchLive')}
                  </a>

                  {/* Download Links */}
                  {movie.downloadLinks.map((link) => (
                    <a
                      key={link.quality}
                      href={link.url}
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Download className={`w-5 h-5 ${language.dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                      {t('download')} {link.quality}
                    </a>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <ExternalLink className={`w-5 h-5 text-blue-500 ${language.dir === 'rtl' ? 'ml-2' : 'mr-2'} mt-0.5`} />
                    <div>
                      <p className="text-sm text-blue-800 font-medium">{t('externalLinksNotice')}</p>
                      <p className="text-sm text-blue-700 mt-1">
                        {t('externalLinksText')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}