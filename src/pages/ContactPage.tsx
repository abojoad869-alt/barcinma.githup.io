import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${language.dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('contactUs')}</h1>
          <p className="text-xl text-gray-600">{t('getInTouchTeam')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sendMessage')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fullName')} {t('required')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder={t('enterFullName')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('emailAddress')} {t('required')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder={t('enterEmail')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subject')} {t('required')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">{t('selectSubject')}</option>
                  <option value="general">{t('generalInquiry')}</option>
                  <option value="technical">{t('technicalSupport')}</option>
                  <option value="content">{t('contentSuggestion')}</option>
                  <option value="partnership">{t('partnershipOpportunity')}</option>
                  <option value="feedback">{t('feedback')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')} {t('required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder={t('enterMessage')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className={`w-5 h-5 ${language.dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                {t('sendMessageBtn')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className={`w-6 h-6 text-red-500 ${language.dir === 'rtl' ? 'ml-4' : 'mr-4'} mt-1`} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@barcinema.com</p>
                    <p className="text-gray-600">support@barcinema.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className={`w-6 h-6 text-red-500 ${language.dir === 'rtl' ? 'ml-4' : 'mr-4'} mt-1`} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className={`w-6 h-6 text-red-500 ${language.dir === 'rtl' ? 'ml-4' : 'mr-4'} mt-1`} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Entertainment Blvd<br />
                      Los Angeles, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions Box */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
              <div className="flex items-center mb-4">
                <MessageCircle className={`w-8 h-8 ${language.dir === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                <h3 className="text-xl font-bold">Suggest Content</h3>
              </div>
              <p className="mb-4">
                Have an idea for a movie or series you'd like to see? We love hearing from our audience!
              </p>
              <p className="text-sm opacity-90">
                Send us your suggestions and we might just make it happen. Your feedback helps us create better content.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">How can I request a specific movie?</h4>
                  <p className="text-sm text-gray-600">Use the contact form above with "Content Suggestion" as the subject.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Are all movies original content?</h4>
                  <p className="text-sm text-gray-600">Yes, all content on our platform is created by our production team.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">How often do you release new content?</h4>
                  <p className="text-sm text-gray-600">We typically release new movies monthly and series episodes weekly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}