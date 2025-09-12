"use client";
import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default function NewTemplePage() {
  const [constructionProgress, setConstructionProgress] = useState(75);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Données pour la galerie de construction
  const constructionImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fondations du temple",
      date: "Janvier 2023"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503387762353-8c6637f89308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Structure principale",
      date: "Avril 2023"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Toiture en cours",
      date: "Juillet 2023"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Aménagement intérieur",
      date: "Octobre 2023"
    }
  ];

  // Données pour la timeline de construction
  const constructionTimeline = [
    {
      step: 1,
      title: "Planification et conception",
      status: "Terminé",
      date: "Jan - Mar 2022",
      description: "Élaboration des plans architecturaux et obtention des permis de construire."
    },
    {
      step: 2,
      title: "Préparation du terrain",
      status: "Terminé",
      date: "Avr - Juin 2022",
      description: "Défrichage, nivellement et préparation des fondations."
    },
    {
      step: 3,
      title: "Construction des fondations",
      status: "Terminé",
      date: "Juil - Sept 2022",
      description: "Coulage des fondations en béton et infrastructure souterraine."
    },
    {
      step: 4,
      title: "Érection de la structure",
      status: "Terminé",
      date: "Oct - Déc 2022",
      description: "Construction de l'ossature principale et de la charpente."
    },
    {
      step: 5,
      title: "Toiture et enveloppe du bâtiment",
      status: "En cours",
      date: "Jan - Mar 2023",
      description: "Pose de la toiture et fermeture des murs extérieurs."
    },
    {
      step: 6,
      title: "Travaux intérieurs",
      status: "À venir",
      date: "Avr - Sept 2023",
      description: "Aménagement des espaces intérieurs, électricité, plomberie."
    },
    {
      step: 7,
      title: "Finitions et aménagement paysager",
      status: "À venir",
      date: "Oct - Déc 2023",
      description: "Peinture, revêtements de sol et aménagement des extérieurs."
    },
    {
      step: 8,
      title: "Inauguration",
      status: "À venir",
      date: "Janvier 2024",
      description: "Cérémonie de consécration et ouverture officielle."
    }
  ];

  // Données pour les besoins de financement
  const fundingNeeds = [
    {
      item: "Bancs et sièges",
      cost: "12 000 €",
      progress: 65,
      description: "Sièges confortables pour 300 personnes"
    },
    {
      item: "Système de sonorisation",
      cost: "8 000 €",
      progress: 40,
      description: "Équipement audio professionnel"
    },
    {
      item: "Éclairage",
      cost: "5 000 €",
      progress: 30,
      description: "Système d'éclairage adapté au culte"
    },
    {
      item: "Instruments de musique",
      cost: "7 000 €",
      progress: 20,
      description: "Piano, batteries et instruments de louange"
    }
  ];

  return (
    <>
      <Head>
        <title>Nouveau Temple - Jesosy Mamonjy Iarintsena</title>
        <meta name="description" content="Suivez l'avancement de la construction du nouveau temple de Jesosy Mamonjy Iarintsena et soutenez ce projet de foi." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className={`text-center text-white px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nouveau Temple</h1>
          <p className="text-xl max-w-2xl mx-auto">Un projet de foi pour notre communauté</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-green-700 hover:text-green-800">Accueil</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">Nouveau Temple</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6">Un Rêve Devenu Réalité</h2>
              <p className="text-lg mb-6">
                Depuis plusieurs années, notre communauté rêvait d&apos;un lieu de culte plus spacieux et adapté 
                à nos besoins croissants. Aujourd&apos;hui, grâce à la grâce de Dieu et à la générosité de nos membres, 
                ce rêve devient réalité.
              </p>
              <p className="text-lg mb-6">
                Le nouveau temple de Jesosy Mamonjy n&apos;est pas simplement un bâtiment ; c&apos;est un outil pour 
                accomplir la Grande Mission, un foyer pour la famille de Dieu, et un monument à la foi qui nous anime.
              </p>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-700">
                <p className="text-green-800 font-semibold">
                  &apos;&apos;Si l&apos;Éternel ne bâtit la maison, ceux qui la bâtissent travaillent en vain.&apos;&apos; - Psaume 127:1
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-16005861162f3a34d3b64d12738fcef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Vue architecturale du nouveau temple" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Avancement de la Construction</h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Progression globale</span>
              <span className="text-lg font-bold text-green-700">{constructionProgress}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-6">
              <div 
                className="bg-green-600 h-6 rounded-full transition-all duration-1000 flex items-center justify-end" 
                style={{ width: `${constructionProgress}%` }}
              >
                <span className="text-white text-sm font-bold pr-2">{constructionProgress}%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Prochaines Étapes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <span>Installation des systèmes électriques et de climatisation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <span>Pose des revêtements de sol et finitions murales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <span>Aménagement de l&apos;autel et de la zone de chœur</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                  <span>Installation des bancs et du mobilier</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Calendrier Prévisionnel</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fin des travaux gros œuvre</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Nov 2023</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Travaux de finition</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Déc 2023</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Aménagement intérieur</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Jan 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Inauguration officielle</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Fév 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Galerie de la Construction</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {constructionImages.map((image, index) => (
              <div 
                key={image.id} 
                className="rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal de visualisation d'image */}
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
            <div className="max-w-4xl max-h-full">
              <img 
                src={constructionImages[activeImage].src} 
                alt={constructionImages[activeImage].title} 
                className="max-w-full max-h-full"
              />
              <div className="text-white mt-4 text-center">
                <h3 className="text-xl font-semibold">{constructionImages[activeImage].title}</h3>
                <p>{constructionImages[activeImage].date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Needs Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Besoins de Financement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fundingNeeds.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-green-800">{item.item}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Coût: {item.cost}</span>
                  <span className="font-bold text-green-700">{item.progress}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-600 h-3 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Donation CTA Section */}
        <section className="bg-green-800 text-white p-10 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Participez à ce Projet de Foi</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Chaque don, quelle que soit sa taille, nous aide à achever la construction de ce lieu de culte 
            qui servira les générations présentes et futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Faire un don
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Nous contacter
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 p-8 md:p-12 rounded-lg text-center max-w-6xl mx-auto shadow-md my-12">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-blue-800">Soutien par la Prière</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-900">
        La prière est le fondement invisible de tout ce bâtiment visible. Rejoignez-nous dans la prière pour ce projet.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
        {/* Première carte */}
        <div className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-blue-800">Pour les ouvriers</h3>
          </div>
          <p className="text-gray-700">Protection, force et sagesse pour tous ceux qui travaillent sur le chantier. Que Dieu les garde de tout accident et leur donne de la joie dans leur travail.</p>
        </div>
        
        {/* Deuxième carte */}
        <div className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-blue-800">Pour le projet</h3>
          </div>
          <p className="text-gray-700">Que chaque étape de construction se déroule selon les plans et dans les délais. Pour des ressources suffisantes et une gestion sage du budget alloué.</p>
        </div>
        
        {/* Troisième carte */}
        <div className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-blue-800">Pour la communauté</h3>
          </div>
          <p className="text-gray-700">Que ce lieu devienne un espace de bénédiction pour tous ceux qui le fréquenteront. Pour l&apos;unité et la coopération entre tous les membres impliqués.</p>
        </div>
      </div>
      
      <div className="mt-10 bg-blue-100 p-6 rounded-lg max-w-2xl mx-auto">
        <h3 className="font-semibold text-xl mb-3 text-blue-800">Rejoignez notre chaîne de prière</h3>
        <p className="text-gray-700 mb-4">Inscrivez-vous pour recevoir nos intentions de prière mensuelles par email</p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center">
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow max-w-md"
          />
          <button 
            type="submit" 
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            S&apos;inscrire
          </button>
        </form>
      </div>
    </section>
        </div>
    </>
  );
}