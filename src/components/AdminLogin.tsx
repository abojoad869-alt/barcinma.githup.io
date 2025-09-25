import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const { t, language } = useLanguage();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // كلمة المرور الافتراضية - يجب تغييرها في الإنتاج
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: '12345@#@#Bahaa'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // محاكاة تأخير التحقق
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      onLogin(true);
    } else {
      setError(language.code === 'ar' ? 'اسم المستخدم أو كلمة المرور غير صحيحة' : 'Invalid username or password');
      onLogin(false);
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center ${language.dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {language.code === 'ar' ? 'تقييم الموقع' : 'Rate Our Website'}
            </h1>
            <p className="text-gray-600">
              {language.code === 'ar' 
                ? 'يرجى تسجيل الدخول لتقييم موقعنا' 
                : 'Please login to rate our website'
              }
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                {language.code === 'ar' ? 'اسم المستخدم' : 'Username'}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={credentials.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder={language.code === 'ar' ? 'أدخل اسم المستخدم' : 'Enter username'}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {language.code === 'ar' ? 'كلمة المرور' : 'Password'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 ${language.dir === 'rtl' ? 'pl-10 pr-4' : 'pr-10 pl-4'} border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                  placeholder={language.code === 'ar' ? 'أدخل كلمة المرور' : 'Enter password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${language.dir === 'rtl' ? 'left-3' : 'right-3'} top-2.5 text-gray-400 hover:text-gray-600`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                language.code === 'ar' ? 'تسجيل الدخول' : 'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}