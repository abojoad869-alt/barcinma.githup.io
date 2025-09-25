import React from 'react';
import { Film, Users, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About BARcinema</h1>
          <p className="text-xl text-gray-600">Your destination for original entertainment content</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              BARcinema is a directory platform showcasing original movies and series created by our independent production team. 
              We are passionate about creating high-quality entertainment content that tells compelling stories and connects with audiences worldwide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mission is to provide viewers with access to unique, original content that you won't find anywhere else. 
              Every movie and series on our platform is created with passion, creativity, and attention to detail by our dedicated team of filmmakers, writers, and artists.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Content Disclaimer:</strong> This site is a directory of links to our original movies and series. 
                We do not host any files on our servers; we only provide links to external hosting platforms where our content is stored. 
                All content is original and created by our production team.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Film className="w-6 h-6 text-red-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Original Content</h3>
                  <p className="text-gray-700 text-sm">Every piece of content is created from scratch by our talented team.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                  <p className="text-gray-700 text-sm">We prioritize quality over quantity in everything we produce.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Focused</h3>
                  <p className="text-gray-700 text-sm">We listen to our audience and create content that resonates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-700 text-sm">Our content is designed to appeal to audiences worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Production Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Directors & Writers</h3>
              <p className="text-gray-600 text-sm">Creative minds behind our compelling stories and visual narratives.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Production Crew</h3>
              <p className="text-gray-600 text-sm">Skilled professionals handling cinematography, sound, and post-production.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">Ensuring every release meets our high standards for entertainment value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}