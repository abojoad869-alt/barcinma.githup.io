import React from 'react';
import { TrendingUp, Trophy } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import SeriesCard from '../components/SeriesCard';
import { movies } from '../data/movies';
import { series } from '../data/series';
import { Movie, Series } from '../types';

interface MostViewedPageProps {
  onMovieClick: (movie: Movie) => void;
  onSeriesClick: (series: Series) => void;
}

export default function MostViewedPage({ onMovieClick, onSeriesClick }: MostViewedPageProps) {
  const topMovies = movies.sort((a, b) => b.views - a.views).slice(0, 10);
  const topSeries = series.sort((a, b) => b.views - a.views).slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-yellow-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Most Viewed Content</h1>
          </div>
          <p className="text-xl text-gray-600">The most popular movies and series on our platform</p>
        </div>

        {/* Top Movies */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="w-6 h-6 text-red-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Top 10 Movies</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {topMovies.map((movie, index) => (
              <div key={movie.id} className="relative">
                <div className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                <MovieCard movie={movie} onClick={() => onMovieClick(movie)} />
              </div>
            ))}
          </div>
        </section>

        {/* Top Series */}
        <section>
          <div className="flex items-center mb-8">
            <TrendingUp className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Top 10 Series</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {topSeries.map((s, index) => (
              <div key={s.id} className="relative">
                <div className="absolute -top-2 -left-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                <SeriesCard series={s} onClick={() => onSeriesClick(s)} />
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Platform Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">
                  {movies.reduce((sum, movie) => sum + movie.views, 0).toLocaleString()}
                </div>
                <div className="text-gray-300">Total Movie Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {series.reduce((sum, s) => sum + s.views, 0).toLocaleString()}
                </div>
                <div className="text-gray-300">Total Series Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {movies.length + series.length}
                </div>
                <div className="text-gray-300">Total Content</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}