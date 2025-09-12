"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ChurchFooter from '../ChurchFooter';

export default function ChurchAboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Données pour la ligne du temps
  const timelineData = [
    {
      year: "1995",
      title: "Fondation de l'Église",
      description: "Un petit groupe de croyants commence à se réunir dans une maison privée à Iarintsena."
    },
    {
      year: "2002",
      title: "Premier Lieu de Culte",
      description: "Acquisition d&apos;un terrain et construction d&apos;un premier modeste lieu de culte."
    },
    {
      year: "2010",
      title: "Expansion des Ministères",
      description: "Développement des programmes jeunesse et des activités communautaires."
    },
    {
      year: "2018",
      title: "Lancement du Projet",
      description: "Début de la planification et de la collecte de fonds pour le nouveau temple."
    },
    {
      year: "2023",
      title: "Construction du Nouveau Temple",
      description: "Début des travaux de construction du nouveau lieu de culte."
    }
  ];

  // Données pour les responsables
  const leadersData = [
    {
      name: "Pasteur Jean Rakoto",
      role: "Pasteur Principal",
      image: "https://images.unsplash.com/photo-1580301762386-9a5db0554a75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Le Pasteur Jean Rakoto sert notre communauté depuis 15 ans avec dévouement et passion."
    },
    {
      name: "Annie Rasoa",
      role: "Responsable de la Worship",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Annie dirige notre équipe de louange avec talent et inspiration depuis 8 ans."
    },
    {
      name: "Thomas Andria",
      role: "Responsable Jeunesse",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Thomas s'engage passionnément auprès des jeunes de notre communauté depuis 5 ans."
    }
  ];

  // Données pour les valeurs
  const valuesData = [
    {
      icon: "🙏",
      title: "La Prière",
      description: "Nous croyons en la puissance de la prière comme fondement de notre relation avec Dieu."
    },
    {
      icon: "👥",
      title: "La Communauté",
      description: "Nous valorisons la fraternité et l&apos;entraide au sein de notre assemblée."
    },
    {
      icon: "📖",
      title: "l'Enseignement",
      description: "Nous nous appuyons sur l&apos;étude approfondie de la Parole de Dieu."
    },
    {
      icon: "🤝",
      title: "Le Service",
      description: "Nous encourageons chacun à servir selon ses talents et sa vocation."
    }
  ];

  return (
    <>
      <Head>
        <title>À Propos - Jesosy Mamonjy Iarintsena</title>
        <meta name="description" content="Découvrez l&apos;histoire, la vision et les valeurs de l&apos;église Jesosy Mamonjy Iarintsena." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className={`text-center text-white px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">À Propos de Notre Église</h1>
          <p className="text-xl max-w-2xl mx-auto">Découvrez l&apos;histoire, la vision et les valeurs de Jesosy Mamonjy Iarintsena</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-green-700 hover:text-green-800">Accueil</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">À Propos</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6">Notre Histoire</h2>
              <p className="text-lg mb-6">
                Fondée en 1995, l&apos;église Jesosy Mamonjy (Jésus Sauveur) d&apos;Iarintsena est née de la vision partagée 
                de quelques croyants désireux de créer une communauté de foi authentique et engagée.
              </p>
              <p className="text-lg mb-6">
                De ses humbles débuts dans un salon familial, notre église a grandi grâce à la grâce de Dieu 
                et au dévouement de ses membres. Aujourd&apos;hui, nous continuons à servir notre communauté avec 
                amour et compassion, fidèles à notre mission première.
              </p>
              <p className="text-lg">
                La construction de notre nouveau temple représente le dernier chapitre en date de cette belle 
                aventure de foi, un témoignage vivant de la fidélité de Dieu à travers les générations.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Histoire de l&apos;église Jesosy Mamonjy" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Notre Parcours</h2>
          
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            {/* Éléments de la timeline */}
            {timelineData.map((item, index) => (
              <div key={index} className={`flex w-full mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                    <div className="text-green-700 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <div className="w-6 h-6 rounded-full bg-green-700 border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Nos Valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesData.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-green-800 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold mb-4">Notre Vision</h2>
              <p className="text-lg">
                Être une lumière à Iarintsena et au-delà, en formant des disciples de Jésus-Christ engagés, 
                qui transforment leur foyer, leur communauté et leur nation par l&apos;amour de Dieu.
              </p>
            </div>
            
            <div className="bg-green-700 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold mb-4">Notre Mission</h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Adorer Dieu en esprit et en vérité</li>
                <li>Évangéliser et partager la bonne nouvelle du salut</li>
                <li>Édifier les croyants par l&apos; enseignement de la Parole</li>
                <li>Servir notre communauté avec compassion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Notre Équipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadersData.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800">{leader.name}</h3>
                  <p className="text-green-600 mb-3">{leader.role}</p>
                  <p>{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-800 text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Rejoignez-Nous</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Que vous soyez de passage ou à la recherche d&apos;une communauté spirituelle, 
            vous êtes les bienvenus à Jesosy Mamonjy Iarintsena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
              Nos Horaires
            </Link>
            <Link href="/contact" className="border-2 hover:text-green-800 border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
              Nous Contacter
            </Link>
          </div>
        </section>
      </div>
      
        <ChurchFooter />
    </>
  );
}