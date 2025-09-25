import React from 'react';
import { TrendingUp, Clock, Star, Mail } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import SeriesCard from '../components/SeriesCard';
import { useLanguage } from '../contexts/LanguageContext';
import { movies } from '../data/movies';
import { series } from '../data/series';
import { Movie, Series } from '../types';

interface HomePageProps {
  onMovieClick: (movie: Movie) => void;
  onSeriesClick: (series: Series) => void;
}

export default function HomePage({ onMovieClick, onSeriesClick }: HomePageProps) {
  const { t, language } = useLanguage();
  const newMovies = movies.filter(m => m.isNew);
  const featuredMovies = movies.filter(m => m.featured);
  const mostViewedMovies = movies.sort((a, b) => b.views - a.views).slice(0, 6);
  const recentSeries = series.slice(0, 4);

  return (
    <div className={`min-h-screen bg-gray-50 ${language.dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('welcomeTitleBARcinema')}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('welcomeSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('browseMovies')}
            </button>
            <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('watchSeries')}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* New Movies 2025 */}
        <section className="mb-12">
          <div className={`flex items-center mb-6 ${language.dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <Star className="w-6 h-6 text-red-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">{t('newMovies2025')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => onMovieClick(movie)}
              />
            ))}
          </div>
        </section>

        {/* Recently Added Series */}
        <section className="mb-12">
          <div className={`flex items-center mb-6 ${language.dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <Clock className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">{t('recentlyAddedSeries')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentSeries.map((s) => (
              <SeriesCard
                key={s.id}
                series={s}
                onClick={() => onSeriesClick(s)}
              />
            ))}
          </div>
        </section>

        {/* Most Viewed Movies */}
        <section className="mb-12">
          <div className={`flex items-center mb-6 ${language.dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">{t('mostViewedMovies')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mostViewedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => onMovieClick(movie)}
              />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">{t('stayUpdated')}</h3>
          <p className="mb-6">{t('subscribeText')}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('enterEmail')}
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('subscribe')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}