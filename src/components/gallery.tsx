'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedImage, setSelectedImage] = useState<any>();

  // Données des images de construction
  const constructionImages = [
    {
      id: 1,
      src: "/images/fondation-jmi.jpg",
      alt: "Début des travaux de fondation",
      category: "foundation",
      title: "Début des travaux",
      date: "Janvier 2023",
      description: "Phase initiale des travaux de fondation du temple"
    },
    {
      id: 2,
      src: "/images/jmi-house.jpg",
      alt: "Travaux de maçonnerie",
      category: "construction",
      title: "Élévation des murs",
      date: "Avril 2023",
      description: "Construction des murs porteurs du sanctuaire"
    },
    {
      id: 3,
      src: "/images/chatier2.jpg",
      alt: "Auvant en cours",
      category: "auvant",
      title: "Pose de l' auvant",
      date: "Septembre 2025",
      description: "Installation des chafodage"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Travaux de finition",
      category: "finishing",
      title: "Finition intérieure",
      date: "Octobre 2025",
      description: "Travaux de plâtrerie et préparation des surfaces"
    },
    {
      id: 5,
      src: "/images/jmi-in.jpg",
      alt: "Pose des bancs",
      category: "interior",
      title: "Aménagement intérieur",
      date: "Décembre 2025",
      description: "Installation des bancs et mobilier liturgique"
    },
    // {
    //   id: 6,
    //   src: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   alt: "Extérieur du temple",
    //   category: "exterior",
    //   title: "Façade complétée",
    //   date: "Février 2024",
    //   description: "Vue extérieure du temple presque terminé"
    // }
  ];

  // Témoignages
  const testimonials = [
    {
      id: 1,
      name: "Marie-Louise",
      role: "Membre de l'église",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Quand le pasteur a annoncé que nous allions construire un temple, je n'y croyais pas. Mais aujourd'hui, je témoigne que rien n'est impossible à Dieu. Chaque don, si modeste soit-il, a contribué à ce miracle.",
      date: "15 Mars 2024"
    },
    {
      id: 2,
      name: "Jean-Pierre",
      role: "Ancien de l'église",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "J'ai vu notre communauté s'unir comme jamais auparavant. Les jeunes aidaient aux travaux, les femmes préparaient les repas, chacun donnait selon ses moyens. C'est un témoignage vivant de l'amour fraternel.",
      date: "22 Mars 2024"
    },
    {
      id: 3,
      name: "Sœur Thérèse",
      role: "Responsable des femmes",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Chaque samedi, nous nous réunissions pour prier sur le chantier. Nous avons vu Dieu pourvoir miraculeusement à nos besoins. Quand les matériaux manquaient, Dieu envoyait des dons inattendus.",
      date: "5 Avril 2024"
    }
  ];

  // Filtrer les images par catégorie
  const filteredImages = activeCategory === 'all' 
    ? constructionImages 
    : constructionImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="bg-green-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Galerie des Travaux</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Découvrez l&apos;évolution miraculeuse de la construction de notre temple et les témoignages de foi de notre communauté
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtres de catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full ${activeCategory === 'all' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            Tous
          </button>
          <button
            onClick={() => setActiveCategory('foundation')}
            className={`px-6 py-2 rounded-full ${activeCategory === 'foundation' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            Fondations
          </button>
          <button
            onClick={() => setActiveCategory('construction')}
            className={`px-6 py-2 rounded-full ${activeCategory === 'construction' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            Construction
          </button>
          <button
            onClick={() => setActiveCategory('roof')}
            className={`px-6 py-2 rounded-full ${activeCategory === 'roof' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            Toiture
          </button>
          <button
            onClick={() => setActiveCategory('finishing')}
            className={`px-6 py-2 rounded-full ${activeCategory === 'finishing' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          >
            Finition
          </button>
        </div>

        {/* Galerie d'images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-green-800">{image.title}</h3>
                <p className="text-sm text-gray-500">{image.date}</p>
                <p className="text-gray-700 mt-2 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal d'image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full overflow-auto">
              <div className="relative bg-white rounded-lg overflow-hidden">
                <div className="relative h-96">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800">{selectedImage.title}</h3>
                  <p className="text-gray-500">{selectedImage.date}</p>
                  <p className="text-gray-700 mt-2">{selectedImage.description }</p>
                  <button
                    className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Témoignages */}
        <div className="bg-green-800 text-white rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Témoignages de Foi</h2>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-green-900 rounded-xl p-6 md:p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-lg italic mb-6">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                    <p className="text-green-200">{testimonial.role}</p>
                    <p className="text-sm text-green-300 mt-2">{testimonial.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-serif text-green-800 mb-6">Vous aussi, participez à cette œuvre</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Chaque contribution, qu&apos;elle soit financière, matérielle ou en prière, nous aide à achever ce temple pour la gloire de Dieu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Faire un don
            </a>
            <a href="/contact" className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Partager votre témoignage
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #fff;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </div>
  );
}