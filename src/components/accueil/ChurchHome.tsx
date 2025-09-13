"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ChurchFooter from '../ChurchFooter';

export default function ChurchHomePage() {
  const [constructionProgress, setConstructionProgress] = useState(75);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>

      {/* Hero Section avec image de fond */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className={`text-center text-white px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Jesosy Mamonjy</h1>
          <p className="text-xl md:text-2xl mb-8">Iarintsena</p>
          <p className="text-lg md:text-xl italic max-w-2xl mx-auto mb-10">
            &apos;&apos;Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos&apos;&apos; - Matthieu 11:28
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/new-temple" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Projet du Temple
            </Link>
            <Link href="/ministries" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 hover:text-green-800 px-6 py-3 rounded-full transition-all duration-300">
              Nos Activités
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Notre Église</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Bienvenue à l&apos;église Jesosy Mamonjy (Jésus Sauveur) d&apos;Iarintsena. Nous sommes une communauté de foi, d&apos;espérance et d&apos;amour, rassemblée autour de la parole de Dieu et de l&apos; enseignement de Jésus-Christ.
              </p>
              <p className="text-lg mb-6">
                Fondée sur des valeurs chrétiennes solides, notre église se consacre à servir la communauté et à répandre l&apos;amour de Dieu à travers des actions concrètes et un accompagnement spirituel.
              </p>
              <p className="text-lg mb-8">
                Rejoignez-nous pour vivre une expérience transformative de la grâce de Dieu, au sein d&apos;une communauté chaleureuse et accueillante.
              </p>
              <Link href="/about" className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition-colors duration-300">
                En savoir plus
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/fjm-iarintsena.jpg" 
                  alt="Communauté de l'église Jesosy Mamonjy" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Progress Section */}
      <section id="construction" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-4">Avancement du Nouveau Temple</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Suivez l&apos;avancement de la construction de notre nouveau lieu de culte, un projet rendu possible par la grâce de Dieu et la générosité de notre communauté.
          </p>
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-between mb-2">
              <span>Progression</span>
              <span>{constructionProgress}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-4">
              <div 
                className="bg-green-600 h-4 rounded-full transition-all duration-1000" 
                style={{ width: `${constructionProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-green-700 text-4xl mb-4">
                <i className="fas fa-praying-hands"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fondations Posées</h3>
              <p className="text-gray-600">Les bases solides de notre nouveau temple ont été établies, littéralement et spirituellement.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-green-700 text-4xl mb-4">
                <i className="fas fa-hammer"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Structure Érigée</h3>
              <p className="text-gray-600">La charpente et les murs sont maintenant visibles, donnant forme à notre future maison de prière.</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-green-700 text-4xl mb-4">
                <i className="fas fa-paint-roller"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Finition en Cours</h3>
              <p className="text-gray-600">Nous travaillons actuellement sur les finitions intérieures et l&apos;aménagement des espaces.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/new-temple" className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full transition-colors duration-300">
              Voir les détails du projet
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-4">Nos Activités</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Rejoignez-nous pour grandir ensemble dans la foi et former une communauté solidaire.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Culte du Dimanche</h3>
                <p className="text-gray-600 mb-4">Chaque dimanche à 9h 30 minite, venez participer à notre culte hebdomadaire rempli de louanges et d&apos;enseignements bibliques.</p>
                <Link href="/services" className="text-green-700 font-semibold hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Étude Biblique</h3>
                <p className="text-gray-600 mb-4">Rejoignez nos groupes d&apos;étude biblique en semaine pour approfondir votre connaissance des Écritures.</p>
                <Link href="/services" className="text-green-700 font-semibold hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Groupe de Jeunesse</h3>
                <p className="text-gray-600 mb-4">Notre groupe de jeunes se réunit régulièrement pour des activités spirituelles et sociales enrichissantes.</p>
                <Link href="/services" className="text-green-700 font-semibold hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Rejoignez-Nous Pour l&apos;Inauguration</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Nous finalisons la construction de notre nouveau temple. Soyez des nôtres pour célébrer cette nouvelle étape de notre histoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Voir le programme
            </Link>
            <Link href="/donate" className="border-2 hover:text-green-800 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Soutenir le projet
            </Link>
          </div>
        </div>
      </section>
      
        <ChurchFooter/>
    </>
  );
}