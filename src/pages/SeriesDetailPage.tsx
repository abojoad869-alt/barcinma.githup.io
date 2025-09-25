import React from 'react';
import { ArrowLeft, Star, Calendar, Eye, Download, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Series } from '../types';

interface SeriesDetailPageProps {
  series: Series;
  onBack: () => void;
}

export default function SeriesDetailPage({ series, onBack }: SeriesDetailPageProps) {
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
            {t('backToSeries')}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Series Cover */}
          <div className="lg:col-span-1">
            <img
              src={series.cover}
              alt={series.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Series Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{series.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{series.year}</span>
                </div>
                <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                  <span className="font-semibold">{series.rating}/10</span>
                </div>
                <div className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Eye className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{series.views.toLocaleString()} {t('views')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {series.genre.map((g) => (
                  <span key={g} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {g}
                  </span>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{t('synopsis')}</h3>
                <p className="text-gray-700 leading-relaxed">{series.synopsis}</p>
              </div>

              {/* Episodes List */}
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('episodes')} ({series.episodes.length})</h3>
                <div className="space-y-3">
                  {series.episodes.map((episode) => (
                    <div key={episode.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {t('episode')} {episode.number}: {episode.title}
                          </h4>
                        </div>
                        <div className="flex space-x-2">
                          <a
                            href={episode.watchLink}
                            className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                          >
                            <Play className={`w-4 h-4 ${language.dir === 'rtl' ? 'ml-1' : 'mr-1'}`} />
                            {t('watch')}
                          </a>
                          <a
                            href={episode.downloadLink}
                            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                          >
                            <Download className={`w-4 h-4 ${language.dir === 'rtl' ? 'ml-1' : 'mr-1'}`} />
                            {t('download')}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}