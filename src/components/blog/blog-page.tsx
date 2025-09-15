"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ChurchFooter from '../ChurchFooter';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Données des articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "L'importance de la prière dans la vie chrétienne",
      excerpt: "Découvrez comment la prière peut transformer votre relation avec Dieu et renforcer votre foi au quotidien.",
      category: "spiritualite",
      author: "Pasteur Jean Rakoto",
      date: "2023-11-15",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Comment étudier la Bible efficacement",
      excerpt: "Des méthodes pratiques pour approfondir votre étude des Écritures et en tirer le maximum de bénéfices.",
      category: "education",
      author: "Pasteur Paul Randria",
      date: "2023-11-10",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Témoignage: Comment j'ai rencontré Jésus",
      excerpt: "Partage d'expérience personnelle sur une transformation radicale grâce à la rencontre avec Christ.",
      category: "temoignage",
      author: "Marie-Louise",
      date: "2023-11-05",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 4,
      title: "10 versets bibliques pour surmonter l'anxiété",
      excerpt: "Des passages bibliques puissants pour trouver la paix et la sérénité dans les moments difficiles.",
      category: "spiritualite",
      author: "Pasteur Jean Rakoto",
      date: "2023-10-28",
      readTime: "6 min",
      image: "/images/chatier2.jpg"
    },
    {
      id: 5,
      title: "L'avancement des travaux du nouveau temple",
      excerpt: "Point d'étape sur la construction de notre nouveau lieu de culte et les prochaines échéances.",
      category: "eglise",
      author: "Comité des travaux",
      date: "2023-10-20",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "La famille selon le dessein de Dieu",
      excerpt: "Réflexion biblique sur la place de la famille dans le plan divin et comment la fortifier.",
      category: "famille",
      author: "Pasteur Marie-Louise",
      date: "2023-10-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Interview avec notre responsable jeunesse",
      excerpt: "Découvrez les projets et visions de notre ministère jeunesse pour l'année à venir.",
      category: "jeunesse",
      author: "Équipe communication",
      date: "2023-10-10",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Comprendre le sens véritable du sacrifice",
      excerpt: "Une étude approfondie sur la notion de sacrifice dans l'Ancien et le Nouveau Testament.",
      category: "education",
      author: "Pasteur Paul Randria",
      date: "2023-10-05",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Catégories de blog
  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'spiritualite', name: 'Spiritualité' },
    { id: 'education', name: 'Éducation biblique' },
    { id: 'temoignage', name: 'Témoignages' },
    { id: 'eglise', name: 'Vie d\'église' },
    { id: 'famille', name: 'Famille' },
    { id: 'jeunesse', name: 'Jeunesse' }
  ];

  // Articles populaires
  const popularPosts = [
    {
      id: 1,
      title: "L'importance de la prière dans la vie chrétienne",
      date: "2023-11-15",
      reads: 245
    },
    {
      id: 3,
      title: "Témoignage: Comment j'ai rencontré Jésus",
      date: "2023-11-05",
      reads: 198
    },
    {
      id: 4,
      title: "10 versets bibliques pour surmonter l'anxiété",
      date: "2023-10-28",
      reads: 176
    }
  ];

  // Filtrer les articles selon la catégorie active et la recherche
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const searchedPosts = searchQuery 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    : filteredPosts;

  // Articles mis en avant
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Head>
        <title>Blog - Jesosy Mamonjy Iarintsena</title>
        <meta name="description" content="Découvrez les articles inspirants et édifiants de l'église Jesosy Mamonjy Iarintsena." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">Articles édifiants, témoignages et ressources pour nourrir votre foi</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-green-700 hover:text-green-800">Accueil</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">Blog</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* Articles en vedette */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl font-serif text-green-800 mb-8">Articles en Vedette</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredPosts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-56">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {categories.find(cat => cat.id === post.category)?.name}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-green-800 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Par {post.author}</span>
                          <Link href={`/blog/${post.id}`} className="text-green-700 hover:text-green-800 font-semibold text-sm">
                            Lire la suite →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Filtres et recherche */}
            <section className="mb-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm ${activeCategory === category.id ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-600 hover:text-white'}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </section>

            {/* Liste des articles */}
            <section>
              <h2 className="text-2xl font-serif text-green-800 mb-8">Tous les Articles</h2>
              
              {searchedPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-8">
                  {searchedPosts.map(post => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {categories.find(cat => cat.id === post.category)?.name}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime} de lecture</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-green-800 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Par {post.author}</span>
                          <Link href={`/blog/${post.id}`} className="text-green-700 hover:text-green-800 font-semibold text-sm">
                            Lire la suite →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun article trouvé</h3>
                  <p className="text-gray-500">Essayez de modifier vos critères de recherche ou de filtre.</p>
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
                    Précédent
                  </button>
                  <button className="px-3 py-1 rounded bg-green-700 text-white">1</button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">2</button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">3</button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">10</button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">
                    Suivant
                  </button>
                </nav>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter */}
            <div className="bg-green-700 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-serif font-bold mb-4">Restez informé</h3>
              <p className="mb-4">Abonnez-vous à notre newsletter pour recevoir les nouveaux articles directement dans votre boîte mail.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-green-700 py-2 px-4 rounded-md hover:bg-gray-100 font-semibold"
                >
                  S&apos;abonner
                </button>
              </form>
              <p className="text-green-100 text-xs mt-3">Nous respectons votre vie privée. Désabonnez-vous à tout moment.</p>
            </div>

            {/* Articles populaires */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-serif text-green-800 mb-4">Articles Populaires</h3>
              <div className="space-y-4">
                {popularPosts.map(post => {
                  const blogPost = blogPosts.find(p => p.id === post.id);
                  return (
                    <div key={post.id} className="flex items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden mr-4">
                        {blogPost && (
                          <Image
                            src={blogPost.image}
                            alt={blogPost.title}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2">{blogPost?.title}</h4>
                        <p className="text-xs text-gray-500">{post.reads} lectures</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Catégories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-serif text-green-800 mb-4">Catégories</h3>
              <ul className="space-y-2">
                {categories.filter(cat => cat.id !== 'all').map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === category.id ? 'bg-green-100 text-green-800 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {category.name}
                      <span className="float-right bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.category === category.id).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mots-clés */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif text-green-800 mb-4">Mots-clés</h3>
              <div className="flex flex-wrap gap-2">
                {['Prière', 'Bible', 'Foi', 'Famille', 'Jeunesse', 'Espoir', 'Salut', 'Louange', 'Service', 'Communion'].map(tag => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-800"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <ChurchFooter/>
    </>
  );
}