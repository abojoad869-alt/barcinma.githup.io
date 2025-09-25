import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Film, Tv } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AdminLogin from '../components/AdminLogin';
import { Movie, Series } from '../types';
import { movies as initialMovies } from '../data/movies';
import { series as initialSeries } from '../data/series';

export default function AdminPage() {
  const { t, language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [series, setSeries] = useState<Series[]>(initialSeries);
  const [activeTab, setActiveTab] = useState<'movies' | 'series'>('movies');
  const [isAddingMovie, setIsAddingMovie] = useState(false);
  const [isAddingSeries, setIsAddingSeries] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [editingSeries, setEditingSeries] = useState<Series | null>(null);

  const [newMovie, setNewMovie] = useState<Partial<Movie>>({
    title: '',
    year: new Date().getFullYear(),
    genre: [],
    rating: 0,
    poster: '',
    trailer: '',
    synopsis: '',
    downloadLinks: [{ quality: '1080p', url: '' }],
    watchLink: '',
    views: 0,
    featured: false,
    isNew: false
  });

  const [newSeries, setNewSeries] = useState<Partial<Series>>({
    title: '',
    year: new Date().getFullYear(),
    genre: [],
    rating: 0,
    cover: '',
    synopsis: '',
    episodes: [],
    views: 0
  });

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.poster) {
      const movie: Movie = {
        id: Date.now().toString(),
        title: newMovie.title!,
        year: newMovie.year!,
        genre: newMovie.genre!,
        rating: newMovie.rating!,
        poster: newMovie.poster!,
        trailer: newMovie.trailer!,
        synopsis: newMovie.synopsis!,
        downloadLinks: newMovie.downloadLinks!,
        watchLink: newMovie.watchLink!,
        views: newMovie.views!,
        featured: newMovie.featured,
        isNew: newMovie.isNew
      };
      setMovies([...movies, movie]);
      setNewMovie({
        title: '',
        year: new Date().getFullYear(),
        genre: [],
        rating: 0,
        poster: '',
        trailer: '',
        synopsis: '',
        downloadLinks: [{ quality: '1080p', url: '' }],
        watchLink: '',
        views: 0,
        featured: false,
        isNew: false
      });
      setIsAddingMovie(false);
    }
  };

  const handleAddSeries = () => {
    if (newSeries.title && newSeries.cover) {
      const series: Series = {
        id: Date.now().toString(),
        title: newSeries.title!,
        year: newSeries.year!,
        genre: newSeries.genre!,
        rating: newSeries.rating!,
        cover: newSeries.cover!,
        synopsis: newSeries.synopsis!,
        episodes: newSeries.episodes!,
        views: newSeries.views!
      };
      setSeries([...series, series]);
      setNewSeries({
        title: '',
        year: new Date().getFullYear(),
        genre: [],
        rating: 0,
        cover: '',
        synopsis: '',
        episodes: [],
        views: 0
      });
      setIsAddingSeries(false);
    }
  };

  const handleDeleteMovie = (id: string) => {
    if (confirm('Are you sure you want to delete this movie?')) {
      setMovies(movies.filter(movie => movie.id !== id));
    }
  };

  const handleDeleteSeries = (id: string) => {
    if (confirm('Are you sure you want to delete this series?')) {
      setSeries(series.filter(s => s.id !== id));
    }
  };

  const handleUpdateMovie = () => {
    if (editingMovie) {
      setMovies(movies.map(movie => 
        movie.id === editingMovie.id ? editingMovie : movie
      ));
      setEditingMovie(null);
    }
  };

  const handleUpdateSeries = () => {
    if (editingSeries) {
      setSeries(series.map(s => 
        s.id === editingSeries.id ? editingSeries : s
      ));
      setEditingSeries(null);
    }
  };

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      // حفظ حالة تسجيل الدخول في localStorage
      localStorage.setItem('adminAuthenticated', 'true');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  // التحقق من حالة تسجيل الدخول عند تحميل الصفحة
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminAuthenticated') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  // إذا لم يكن مسجل الدخول، عرض صفحة تسجيل الدخول
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${language.dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'لوحة التحكم' : 'Content Management'}
            </h1>
            <p className="text-xl text-gray-600">
              {language.code === 'ar' ? 'إدارة محتوى الأفلام والمسلسلات' : 'Manage your movies and series content'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            {language.code === 'ar' ? 'تسجيل الخروج' : 'Logout'}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('movies')}
              className={`flex items-center px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'movies'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Film className="w-5 h-5 mr-2" />
              {language.code === 'ar' ? `الأفلام (${movies.length})` : `Movies (${movies.length})`}
            </button>
            <button
              onClick={() => setActiveTab('series')}
              className={`flex items-center px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'series'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Tv className="w-5 h-5 mr-2" />
              {language.code === 'ar' ? `المسلسلات (${series.length})` : `Series (${series.length})`}
            </button>
          </div>
        </div>

        {/* Movies Tab */}
        {activeTab === 'movies' && (
          <div>
            {/* Add Movie Button */}
            <div className="mb-6">
              <button
                onClick={() => setIsAddingMovie(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                {language.code === 'ar' ? 'إضافة فيلم جديد' : 'Add New Movie'}
              </button>
            </div>

            {/* Add Movie Form */}
            {isAddingMovie && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  {language.code === 'ar' ? 'إضافة فيلم جديد' : 'Add New Movie'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={language.code === 'ar' ? 'عنوان الفيلم' : 'Movie Title'}
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="number"
                    placeholder={language.code === 'ar' ? 'السنة' : 'Year'}
                    value={newMovie.year}
                    onChange={(e) => setNewMovie({...newMovie, year: parseInt(e.target.value)})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Genres (comma separated)"
                    value={newMovie.genre?.join(', ')}
                    onChange={(e) => setNewMovie({...newMovie, genre: e.target.value.split(', ')})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Rating (0-10)"
                    value={newMovie.rating}
                    onChange={(e) => setNewMovie({...newMovie, rating: parseFloat(e.target.value)})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="url"
                    placeholder="Poster URL"
                    value={newMovie.poster}
                    onChange={(e) => setNewMovie({...newMovie, poster: e.target.value})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="url"
                    placeholder="Trailer URL"
                    value={newMovie.trailer}
                    onChange={(e) => setNewMovie({...newMovie, trailer: e.target.value})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="url"
                    placeholder="Watch Link"
                    value={newMovie.watchLink}
                    onChange={(e) => setNewMovie({...newMovie, watchLink: e.target.value})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="number"
                    placeholder="Views"
                    value={newMovie.views}
                    onChange={(e) => setNewMovie({...newMovie, views: parseInt(e.target.value)})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <textarea
                  placeholder={language.code === 'ar' ? 'الملخص' : 'Synopsis'}
                  value={newMovie.synopsis}
                  onChange={(e) => setNewMovie({...newMovie, synopsis: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 mt-4"
                  rows={3}
                />
                <div className="flex items-center space-x-4 mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newMovie.featured}
                      onChange={(e) => setNewMovie({...newMovie, featured: e.target.checked})}
                      className="mr-2"
                    />
                    {language.code === 'ar' ? 'مميز' : 'Featured'}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newMovie.isNew}
                      onChange={(e) => setNewMovie({...newMovie, isNew: e.target.checked})}
                      className="mr-2"
                    />
                    {language.code === 'ar' ? 'إصدار جديد' : 'New Release'}
                  </label>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={handleAddMovie}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {language.code === 'ar' ? 'حفظ الفيلم' : 'Save Movie'}
                  </button>
                  <button
                    onClick={() => setIsAddingMovie(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center"
                  >
                    <X className="w-4 h-4 mr-2" />
                    {language.code === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                </div>
              </div>
            )}

            {/* Movies List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.map((movie) => (
                <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{movie.year} • {movie.genre.join(', ')}</p>
                    <p className="text-gray-600 text-sm mb-4">Rating: {movie.rating}/10 • {movie.views} views</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingMovie(movie)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex items-center"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        {language.code === 'ar' ? 'تعديل' : 'Edit'}
                      </button>
                      <button
                        onClick={() => handleDeleteMovie(movie.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm flex items-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        {language.code === 'ar' ? 'حذف' : 'Delete'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Series Tab */}
        {activeTab === 'series' && (
          <div>
            {/* Add Series Button */}
            <div className="mb-6">
              <button
                onClick={() => setIsAddingSeries(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                {language.code === 'ar' ? 'إضافة مسلسل جديد' : 'Add New Series'}
              </button>
            </div>

            {/* Add Series Form */}
            {isAddingSeries && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  {language.code === 'ar' ? 'إضافة مسلسل جديد' : 'Add New Series'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={language.code === 'ar' ? 'عنوان المسلسل' : 'Series Title'}
                    value={newSeries.title}
                    onChange={(e) => setNewSeries({...newSeries, title: e.target.value})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Year"
                    value={newSeries.year}
                    onChange={(e) => setNewSeries({...newSeries, year: parseInt(e.target.value)})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Genres (comma separated)"
                    value={newSeries.genre?.join(', ')}
                    onChange={(e) => setNewSeries({...newSeries, genre: e.target.value.split(', ')})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Rating (0-10)"
                    value={newSeries.rating}
                    onChange={(e) => setNewSeries({...newSeries, rating: parseFloat(e.target.value)})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="url"
                    placeholder="Cover Image URL"
                    value={newSeries.cover}
                    onChange={(e) => setNewSeries({...newSeries, cover: e.target.value})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Views"
                    value={newSeries.views}
                    onChange={(e) => setNewSeries({...newSeries, views: parseInt(e.target.value)})}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder={language.code === 'ar' ? 'الملخص' : 'Synopsis'}
                  value={newSeries.synopsis}
                  onChange={(e) => setNewSeries({...newSeries, synopsis: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 mt-4"
                  rows={3}
                />
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={handleAddSeries}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {language.code === 'ar' ? 'حفظ المسلسل' : 'Save Series'}
                  </button>
                  <button
                    onClick={() => setIsAddingSeries(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center"
                  >
                    <X className="w-4 h-4 mr-2" />
                    {language.code === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                </div>
              </div>
            )}

            {/* Series List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {series.map((s) => (
                <div key={s.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={s.cover}
                    alt={s.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{s.year} • {s.genre.join(', ')}</p>
                    <p className="text-gray-600 text-sm mb-4">Rating: {s.rating}/10 • {s.episodes.length} episodes • {s.views} views</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingSeries(s)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex items-center"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        {language.code === 'ar' ? 'تعديل' : 'Edit'}
                      </button>
                      <button
                        onClick={() => handleDeleteSeries(s.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm flex items-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        {language.code === 'ar' ? 'حذف' : 'Delete'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Edit Movie Modal */}
        {editingMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">
                {language.code === 'ar' ? 'تعديل الفيلم' : 'Edit Movie'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={language.code === 'ar' ? 'عنوان الفيلم' : 'Movie Title'}
                  value={editingMovie.title}
                  onChange={(e) => setEditingMovie({...editingMovie, title: e.target.value})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={editingMovie.year}
                  onChange={(e) => setEditingMovie({...editingMovie, year: parseInt(e.target.value)})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Genres (comma separated)"
                  value={editingMovie.genre.join(', ')}
                  onChange={(e) => setEditingMovie({...editingMovie, genre: e.target.value.split(', ')})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="number"
                  step="0.1"
                  placeholder="Rating (0-10)"
                  value={editingMovie.rating}
                  onChange={(e) => setEditingMovie({...editingMovie, rating: parseFloat(e.target.value)})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
              <textarea
                placeholder={language.code === 'ar' ? 'الملخص' : 'Synopsis'}
                value={editingMovie.synopsis}
                onChange={(e) => setEditingMovie({...editingMovie, synopsis: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 mt-4"
                rows={3}
              />
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleUpdateMovie}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {language.code === 'ar' ? 'تحديث الفيلم' : 'Update Movie'}
                </button>
                <button
                  onClick={() => setEditingMovie(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center"
                >
                  <X className="w-4 h-4 mr-2" />
                  {language.code === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Series Modal */}
        {editingSeries && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">
                {language.code === 'ar' ? 'تعديل المسلسل' : 'Edit Series'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={language.code === 'ar' ? 'عنوان المسلسل' : 'Series Title'}
                  value={editingSeries.title}
                  onChange={(e) => setEditingSeries({...editingSeries, title: e.target.value})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={editingSeries.year}
                  onChange={(e) => setEditingSeries({...editingSeries, year: parseInt(e.target.value)})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Genres (comma separated)"
                  value={editingSeries.genre.join(', ')}
                  onChange={(e) => setEditingSeries({...editingSeries, genre: e.target.value.split(', ')})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  step="0.1"
                  placeholder="Rating (0-10)"
                  value={editingSeries.rating}
                  onChange={(e) => setEditingSeries({...editingSeries, rating: parseFloat(e.target.value)})}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder={language.code === 'ar' ? 'الملخص' : 'Synopsis'}
                value={editingSeries.synopsis}
                onChange={(e) => setEditingSeries({...editingSeries, synopsis: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 mt-4"
                rows={3}
              />
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleUpdateSeries}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {language.code === 'ar' ? 'تحديث المسلسل' : 'Update Series'}
                </button>
                <button
                  onClick={() => setEditingSeries(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center"
                >
                  <X className="w-4 h-4 mr-2" />
                  {language.code === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}