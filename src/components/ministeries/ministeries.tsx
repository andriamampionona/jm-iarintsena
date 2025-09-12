"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ChurchFooter from '../ChurchFooter';

export default function MinistriesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

 // Données des ministères
  const ministries = [
    {
      id: 1,
      title: "Ministère des Enfants",
      category: "age",
      description: "Un programme engageant pour les enfants de 3 à 12 ans pour apprendre la parole de Dieu de manière ludique et adaptée.",
      image: "https://images.unsplash.com/photo-1534567153574-2b12153a89f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Dimanche à 10h",
      leader: "Suzanne Rakoto",
      contact: "enfant@eglise-jmi.mg"
    },
    {
      id: 2,
      title: "Ministère des Jeunes",
      category: "age",
      description: "Une communauté dynamique pour les 13-25 ans qui cherchent à grandir dans leur foi et à se connecter avec d'autres croyants.",
      image: "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Vendredi à 18h",
      leader: "Thomas Andria",
      contact: "jeunes@eglise-jmi.mg"
    },
    {
      id: 3,
      title: "Ministère des Femmes",
      category: "group",
      description: "Un espace d'échange, de soutien et d'édification pour les femmes de tous âges de notre communauté.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Samedi à 14h (bi-mensuel)",
      leader: "Marie-Louise Randria",
      contact: "femmes@eglise-jmi.mg"
    },
    {
      id: 4,
      title: "Groupe de Louange",
      category: "worship",
      description: "Notre équipe de louange qui guide la congrégation dans l'adoration à travers la musique et le chant.",
      image: "https://images.unsplash.com/photo-1509807995916-c332365e2d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Jeudi à 17h",
      leader: "David Ralison",
      contact: "louange@eglise-jmi.mg"
    },
    {
      id: 5,
      title: "Étude Biblique",
      category: "study",
      description: "Des sessions d'approfondissement de la Parole de Dieu pour ceux qui veulent grandir dans leur connaissance des Écritures.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Mardi à 18h30",
      leader: "Pasteur Jean Rakoto",
      contact: "etude-biblique@eglise-jmi.mg"
    },
    {
      id: 6,
      title: "Ministère d'Entraide",
      category: "service",
      description: "Une équipe dévouée qui apporte soutien et assistance aux membres de la communauté dans le besoin.",
      image: "https://images.unsplash.com/photo-1582212179270-1b2b5c2e15b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Sur rendez-vous",
      leader: "Joséphine Rasoa",
      contact: "entraide@eglise-jmi.mg"
    },
    {
      id: 7,
      title: "Groupe de Prière",
      category: "prayer",
      description: "Rencontres régulières pour prier ensemble pour les besoins de l'église, de la communauté et du monde.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Lundi et Mercredi à 17h",
      leader: "Pierre Rafidy",
      contact: "priere@eglise-jmi.mg"
    },
    {
      id: 8,
      title: "Ministère des Couples",
      category: "group",
      description: "Un espace pour les couples qui cherchent à renforcer leur relation à travers les principes bibliques.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      meetingTime: "Dimanche à 15h (mensuel)",
      leader: "Paul et Sarah Ranaivo",
      contact: "couples@eglise-jmi.mg"
    }
  ];


   const categories = [
    { id: 'all', name: 'Tous les ministères' },
    { id: 'age', name: 'Par âge' },
    { id: 'group', name: 'Groupes' },
    { id: 'worship', name: 'Adoration' },
    { id: 'study', name: 'Étude' },
    { id: 'service', name: 'Service' },
    { id: 'prayer', name: 'Prière' }
  ];

// Filtrer les ministères selon la catégorie active
  const filteredMinistries = activeCategory === 'all' 
    ? ministries 
    : ministries.filter(ministry => ministry.category === activeCategory);

  return (
    <>
      <Head>
        <title>Ministères - Jesosy Mamonjy Iarintsena</title>
        <meta name="description" content="Découvrez les différents ministères de l&apos;église Jesosy Mamonjy Iarintsena et trouvez votre place dans notre communauté." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1415795854641-f4a487a0fdc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nos Ministères</h1>
          <p className="text-xl max-w-2xl mx-auto">Trouvez votre place et servez selon vos talents</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-green-700 hover:text-green-800">Accueil</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">Ministères</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-green-800 mb-6">Servir selon ses talents</h2>
          <p className="text-lg mb-6">
            Chez Jesosy Mamonjy, nous croyons que chaque membre a reçu des talents et des dons particuliers 
            pour édifier le corps de Christ. Nos différents ministères sont conçus pour vous aider à trouver 
            votre place et à servir selon vos capacités.
          </p>
          <p className="text-lg">
            Que vous soyez passionné par l&apos; enseignement, la musique, le service ou la prière, 
            il y a une place pour vous dans notre communauté.
          </p>
        </section>

        {/* Category Filters */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-600 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMinistries.map(ministry => (
              <div key={ministry.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-56">
                  <Image
                    src={ministry.image}
                    alt={ministry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-green-800 mb-3">{ministry.title}</h3>
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="text-green-700 font-semibold mr-2">Quand:</span>
                      <span>{ministry.meetingTime}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-700 font-semibold mr-2">Responsable:</span>
                      <span>{ministry.leader}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-700 font-semibold mr-2">Contact:</span>
                      <span className="break-all">{ministry.contact}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button className="px-4 py-2 bg-green-700 text-white rounded-md text-sm hover:bg-green-800 transition-colors">
                      Plus d&apos;infos
                    </button>
                    <button className="px-4 py-2 border border-green-700 text-green-700 rounded-md text-sm hover:bg-green-50 transition-colors">
                      Rejoindre
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-800 text-white p-10 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Vous ne trouvez pas votre place?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nous sommes ouverts à lancer de nouveaux ministères selon les talents et les passions 
            des membres de notre communauté. Parlons-en ensemble!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Nous contacter
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              En savoir plus
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-green-800 mb-12">Témoignages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold mr-4">
                  LR
                </div>
                <div>
                  <h4 className="font-semibold">Lydia Rakoto</h4>
                  <p className="text-sm text-gray-600">Ministère des Femmes</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &apos;&apos;Rejoindre le ministère des femmes a transformé ma vie spirituelle. J&apos;ai trouvé une communauté 
                de sœurs qui me soutient et m&apos;encourage dans mon cheminement avec Christ.&apos;&apos;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-semibold">Marc Ravalison</h4>
                  <p className="text-sm text-gray-600">Groupe de Louange</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &apos;&apos;Servir dans l&apos;équipe de louange m&apos;a permis d&apos;utiliser mon talent musical pour glorifier Dieu 
                et d&apos;être béni en retour. C&apos;est une expérience incroyable de voir comment Dieu touche les cœurs 
                à travers la louange.&apos;&apos;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold mr-4">
                  SR
                </div>
                <div>
                  <h4 className="font-semibold">Sandra Randria</h4>
                  <p className="text-sm text-gray-600">Ministère d&apos;Entraide</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &apos;&apos;Le ministère d&apos;entraide m&apos;a appris à servir comme Jésus l&apos;a fait. Chaque fois que j&apos;aide 
                quelqu&apos;un dans le besoin, je sens que je sers le Christ lui-même. C&apos;est une bénédiction 
                immense dans ma vie.&apos;&apos;
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-blue-800 mb-8">Événements des Ministères</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Retraite des Jeunes</h3>
              <p className="text-gray-600 mb-2">15-17 Décembre 2023</p>
              <p className="mb-4">Week-end spirituel au centre Bethanie pour les 13-25 ans avec enseignement, louange et activités.</p>
              <button className="text-blue-700 font-semibold text-sm hover:underline">
                Plus d&apos;informations →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Conférence des Femmes</h3>
              <p className="text-gray-600 mb-2">25 Novembre 2023</p>
              <p className="mb-4">Journée d&apos;édification sur le thème &apos;&apos;Femme de foi dans un monde en mutation&apos;&apos;.</p>
              <button className="text-blue-700 font-semibold text-sm hover:underline">
                Plus d&apos;informations →
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/events" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Voir tous les événements
            </Link>
          </div>
        </section>

      </div>

        <ChurchFooter/>
    </>
  );
}