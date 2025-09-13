"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('past');

  // Événements passés
  const pastEvents = [
    {
      id: 1,
      date: '15 Avril 2023',
      title: 'Fondation du Nouveau Temple',
      description: 'Cérémonie de pose de la première pierre et de bénédiction du terrain pour la construction du nouveau temple.',
      image: '/images/fondation-jmi.jpg',
      type: 'construction'
    },
    {
      id: 2,
      date: '22 Novembre 2024',
      title: 'Vavaka Fisaorana',
      description: 'Culte d\'action de grâce pour célébrer l\'avancement des travaux et remercier Dieu pour sa provision.',
      image: '/images/culte.jpg',
      type: 'spiritual'
    },
    {
      id: 3,
      date: '10 Décembre 2024',
      title: '1ère Évangélisation Iarintsena',
      description: 'Première campagne d\'évangélisation dans le village d\'Iarintsena avec partage de la Parole et témoignages.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'evangelism'
    },
    {
      id: 4,
      date: '15 Janvier 2025',
      title: '1ère Évangélisation Andranoboiboika',
      description: 'Première campagne d\'évangélisation dans le village d\'Andranoboiboika avec distribution de tracts et prédication.',
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'evangelism'
    }
  ];

  // Événements à venir
  const upcomingEvents = [
    {
      id: 5,
      date: 'Mardi 09 Septembre 2025',
      title: 'Mise en place de l\'Avant-toit',
      description: 'Installation de la structure de l\'avant-toit du nouveau temple, une étape cruciale dans la construction.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'construction'
    },
    {
      id: 6,
      date: '19 Septembre 2025',
      title: '2ème Évangélisation Iarintsena',
      description: 'Deuxième campagne d\'évangélisation à Iarintsena avec programme spécial pour les enfants et les jeunes.',
      image: 'https://images.unsplash.com/photo-1415769663272-8504c6cc02b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      type: 'evangelism'
    }
  ];

  // Prochaines étapes de construction
  const nextSteps = [
    {
      id: 1,
      title: 'Dallage',
      description: 'Pose du dallage intérieur pour solidifier la structure et préparer les sols.',
      status: 'pending',
      cost: '5 000 000 Ar'
    },
    {
      id: 2,
      title: 'Lalotra (Toiture)',
      description: 'Installation complète de la toiture pour protéger l\'édifice des intempéries.',
      status: 'pending',
      cost: '8 000 000 Ar'
    },
    {
      id: 3,
      title: 'Peinture',
      description: 'Application de peinture intérieure et extérieure pour l\'esthétique et la protection.',
      status: 'pending',
      cost: '3 500 000 Ar'
    },
    {
      id: 4,
      title: 'Bancs',
      description: 'Achat et installation des bancs pour accueillir les fidèles.',
      status: 'pending',
      cost: '7 000 000 Ar'
    },
    {
      id: 5,
      title: 'Clôturage',
      description: 'Installation d\'une clôture autour du terrain pour délimiter et sécuriser l\'espace.',
      status: 'pending',
      cost: '4 500 000 Ar'
    }
  ];

  // Besoins de financement
  const fundingNeeds = [
    {
      id: 1,
      title: 'Dallage',
      amount: '5 000 000 Ar',
      progress: 30,
      contributors: 15
    },
    {
      id: 2,
      title: 'Lalotra (Toiture)',
      amount: '8 000 000 Ar',
      progress: 15,
      contributors: 8
    },
    {
      id: 3,
      title: 'Peinture',
      amount: '3 500 000 Ar',
      progress: 10,
      contributors: 5
    },
    {
      id: 4,
      title: 'Bancs',
      amount: '7 000 000 Ar',
      progress: 25,
      contributors: 12
    },
    {
      id: 5,
      title: 'Clôturage',
      amount: '4 500 000 Ar',
      progress: 20,
      contributors: 10
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'construction':
        return 'bg-blue-100 text-blue-800';
      case 'spiritual':
        return 'bg-purple-100 text-purple-800';
      case 'evangelism':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'construction':
        return '🏗️';
      case 'spiritual':
        return '🙏';
      case 'evangelism':
        return '📢';
      default:
        return '📅';
    }
  };

  return (
    <>
      <Head>
        <title>Événements - Jesosy Mamonjy Iarintsena</title>
        <meta name="description" content="Découvrez les événements passés et à venir de l'église Jesosy Mamonjy Iarintsena." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-64 flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/images/event1.jpg')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-serif font-bold mb-4">Événements</h1>
          <p className="text-xl">Découvrez la vie de notre communauté</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'past' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('past')}
          >
            Événements Passés
          </button>
          <button
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'upcoming' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Événements à Venir
          </button>
          <button
            className={`py-4 px-6 font-medium text-lg ${activeTab === 'construction' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('construction')}
          >
            Avancement du Temple
          </button>
        </div>

        {/* Past Events */}
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
                <div className="h-48 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {getEventTypeIcon(event.type)} {event.type === 'construction' ? 'Construction' : event.type === 'spiritual' ? 'Spiritualité' : 'Évangélisation'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-green-700 font-semibold mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="text-green-700 font-medium hover:underline">
                    Voir les photos →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md border-l-4 border-green-600">
                <div className="h-48 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {getEventTypeIcon(event.type)} {event.type === 'construction' ? 'Construction' : 'Évangélisation'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-green-700 font-semibold mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Temple Jesosy Mamonjy, Iarintsena
                  </div>
                  <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors duration-300">
                    S&apos;inscrire à l&apos;événement
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Construction Progress */}
        {activeTab === 'construction' && (
          <div className="space-y-12">
            {/* Prochaines Étapes */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6 text-green-800">Prochaines Étapes de Construction</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nextSteps.map(step => (
                  <div key={step.id} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                    <h3 className="text-xl font-semibold mb-3 text-green-800">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Coût estimé:</span>
                      <span className="font-semibold text-green-700">{step.cost}</span>
                    </div>
                    <div className="mt-4 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 text-right">0% complété</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Besoins de Financement */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6 text-green-800">Besoins de Financement</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Projet
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Montant nécessaire
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Progression
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contributeurs
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {fundingNeeds.map(need => (
                        <tr key={need.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{need.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-green-700 font-semibold">{need.amount}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-green-600 h-2.5 rounded-full" 
                                style={{ width: `${need.progress}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{need.progress}% collecté</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-600">{need.contributors} contributeurs</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
                              Contribuer
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-800 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Participez à l&apos;édification de notre temple</h2>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                Chaque contribution, petite ou grande, nous aide à achever la construction de notre lieu de culte. 
                Participez à cette œuvre bénie et laissez votre empreinte dans l&apos;histoire de notre église.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                  Faire un don
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                  Voir les détails du projet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}