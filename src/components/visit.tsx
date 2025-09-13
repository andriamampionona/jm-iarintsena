"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export default function SiteVisitPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Images de la galerie
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fondation du Temple',
      date: '15 Avril 2023',
      category: 'foundation'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Travaux de Maçonnerie',
      date: 'Juin 2023',
      category: 'construction'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Élévation des Murs',
      date: 'Août 2023',
      category: 'construction'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1503387762353-8c6637f89308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Pose de la Charpente',
      date: 'Octobre 2023',
      category: 'roof'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Avancement des Travaux',
      date: 'Décembre 2023',
      category: 'construction'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Vue Intérieure',
      date: 'Février 2024',
      category: 'interior'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Travaux de Toiture',
      date: 'Avril 2024',
      category: 'roof'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1503387762353-8c6637f89308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'État Actuel du Chantier',
      date: 'Juin 2024',
      category: 'construction'
    }
  ];

  // Filtrage des images par catégorie
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  // Catégories disponibles
  const categories = [
    { id: 'all', name: 'Toutes les photos' },
    { id: 'foundation', name: 'Fondation' },
    { id: 'construction', name: 'Construction' },
    { id: 'roof', name: 'Toiture' },
    { id: 'interior', name: 'Intérieur' }
  ];

  // Informations de visite
  const visitInfo = {
    address: "Lieu-dit Iarintsena, Route d'Antananarivo, Madagascar",
    hours: "Lundi au Samedi: 8h00 - 17h00",
    contact: "+261 34 12 345 67",
    email: "contact@jesosymamonjy-iarintsena.mg",
    instructions: "Pour des raisons de sécurité, les visites doivent être organisées à l'avance. Merci de nous contacter pour planifier votre visite."
  };

  
  return (
    <>
      <Head>
        <title>Visite du Chantier - Jesosy Mamonjy Iarintsena</title>
        <meta name="description" content="Découvrez l'avancement de la construction de notre nouveau temple à travers notre galerie photos et planifiez votre visite." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-serif font-bold mb-4">Visite du Chantier</h1>
          <p className="text-xl">Découvrez l&apos;avancement de la construction de notre nouveau temple</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Galerie Principale avec Swiper */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center text-green-800 mb-8">Galerie du Chantier</h2>
          
          <div className="mb-6 flex justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Swiper Principal */}
          <div className="mb-4">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs, Autoplay]}
              autoplay={{ delay: 5000 }}
              className="h-96 w-full rounded-lg"
            >
              {filteredImages.map(image => (
                <SwiperSlide key={image.id} className="relative">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                    <p className="text-sm">{image.date}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Swiper Miniature */}
          <Swiper
            // onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper"
          >
            {filteredImages.map(image => (
              <SwiperSlide key={image.id} className="cursor-pointer">
                <div className="relative h-20">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Informations de Visite */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif text-green-800 mb-6">Planifiez Votre Visite</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-gray-600">{visitInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Heures de Visite</h3>
                      <p className="text-gray-600">{visitInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Contact</h3>
                      <p className="text-gray-600">{visitInfo.contact}</p>
                      <p className="text-gray-600">{visitInfo.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">{visitInfo.instructions}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-green-800 mb-6">Formulaire de Visite</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="+261 34 12 345 67"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date souhaitée</label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Informations supplémentaires..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-4 rounded-md transition-colors duration-300"
                  >
                    Demander une visite
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Carte de Localisation */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-green-800 mb-6">Localisation du Chantier</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.755996572882!2d47.51631431540208!3d-18.91489099100024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07ddf2d2f3b3f%3A0xcd0e2e3d68f47f2f!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sen!2sus!4v1633456789012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Temple Jesosy Mamonjy Iarintsena</h3>
                  <p className="text-gray-600">{visitInfo.address}</p>
                </div>
                <a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Itinéraire
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Prochaines Étapes */}
        <section className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif text-green-800 mb-6 text-center">Prochaines Étapes de Construction</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Dallage Intérieur</h3>
              <p className="text-gray-600">Prévu pour Septembre 2024</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-semibold mb-2">Travaux de Finition</h3>
              <p className="text-gray-600">Prévu pour Novembre 2024</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">Inauguration</h3>
              <p className="text-gray-600">Prévue pour Décembre 2024</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .thumbs-swiper .swiper-slide-thumb-active {
          opacity: 1;
          border: 2px solid #4c7a34;
        }
        
        .thumbs-swiper .swiper-slide {
          opacity: 0.6;
          transition: opacity 0.3s;
        }
        
        .thumbs-swiper .swiper-slide:hover {
          opacity: 1;
        }
      `}</style>
    </>
  );
}