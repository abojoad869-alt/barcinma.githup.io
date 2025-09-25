import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage';
import MostViewedPage from './pages/MostViewedPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SeriesDetailPage from './pages/SeriesDetailPage';
import AdminPage from './pages/AdminPage';
import SEOHead from './components/SEOHead';
import { Movie, Series } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedMovie(null);
    setSelectedSeries(null);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setCurrentPage('movie-detail');
  };

  const handleSeriesClick = (series: Series) => {
    setSelectedSeries(series);
    setCurrentPage('series-detail');
  };

  const handleBack = () => {
    setSelectedMovie(null);
    setSelectedSeries(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'movies':
        return <HomePage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
      case 'series':
        return <HomePage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
      case 'anime':
        return <HomePage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
      case 'most-viewed':
        return <MostViewedPage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
      case 'movie-detail':
        return selectedMovie ? <MovieDetailPage movie={selectedMovie} onBack={handleBack} /> : <HomePage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
      case 'series-detail':
        return selectedSeries ? <SeriesDetailPage series={selectedSeries} onBack={handleBack} /> : <HomePage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage onMovieClick={handleMovieClick} onSeriesClick={handleSeriesClick} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <SEOHead />
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        <main>
          {renderPage()}
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;