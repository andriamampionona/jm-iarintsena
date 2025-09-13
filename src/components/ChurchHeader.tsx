"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ChurchHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [constructionProgress] = useState(75); // Progression à 75%

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo et nom de l'église */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/images/jm-logo.png" alt="logo" className='h-12 w-12 rounded-2xl' />
  
              </Link>
            </div>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</Link>
              <Link href="/new-temple" className="flex items-center text-blue-600 font-medium">
                Nouveau Temple
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {constructionProgress}%
                </span>
              </Link>
              <Link href="/ministries" className="text-gray-700 hover:text-blue-600 transition-colors">Ministères</Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 transition-colors">Événements</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/visit" className="text-gray-700 hover:text-blue-600 transition-colors">Visite</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>

            {/* Bouton de don - Desktop */}
            <div className="hidden md:flex items-center">
              <Link href="/donate" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                Faire un don
              </Link>
            </div>

            {/* Menu mobile button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Ouvrir le menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Accueil</Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">À propos</Link>
              <Link href="/new-temple" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">
                Nouveau Temple
                <span className="ml-2 bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {constructionProgress}%
                </span>
              </Link>
              <Link href="/ministries" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Ministères</Link>
              <Link href="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Événements</Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Blog</Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Contact</Link>
              <div className="pt-2">
                <Link href="/donate" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                  Faire un don
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Barre de progression de la construction */}
      <div className="w-full bg-gray-200 h-2">
        <div 
          className="bg-green-600 h-2 transition-all duration-500" 
          style={{ width: `${constructionProgress}%` }}
        ></div>
      </div>
    </>
  );
}