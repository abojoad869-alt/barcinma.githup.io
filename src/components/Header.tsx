import React, { useState } from 'react';
import { Search, Menu, X, Film } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { id: 'home', label: t('home') },
    { id: 'movies', label: t('movies') },
    { id: 'series', label: t('series') },
    { id: 'anime', label: t('anime') },
    { id: 'categories', label: t('categories') },
    { id: 'contact', label: t('contact') }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className={`bg-gray-900 text-white shadow-lg sticky top-0 z-50 ${language.dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className={`flex items-center ${language.dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'} cursor-pointer`}
            onClick={() => onPageChange('home')}
          >
            <Film className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold">BARcinema</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 py-2 ${language.dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'} bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                />
                <Search className={`absolute ${language.dir === 'rtl' ? 'right-3' : 'left-3'} top-2.5 w-4 h-4 text-gray-400`} />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex ${language.dir === 'rtl' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2 ${language.dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'} bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
              />
              <Search className={`absolute ${language.dir === 'rtl' ? 'right-3' : 'left-3'} top-2.5 w-4 h-4 text-gray-400`} />
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-2 pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}