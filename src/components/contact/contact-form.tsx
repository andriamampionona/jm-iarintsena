"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ChurchFooter from '../ChurchFooter';

export default function ChurchContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    
    handleFormSubmit(formData.email, formData.subject, formData.message, formData.name)
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };


    const handleFormSubmit = async (email: string,  subject: string,  message: string, name: string) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', // Assurez-vous que c'est bien un POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, subject, message }),
      });
  
      if (response.ok) {
        // console.log('Email sent successfully');
      } else {
        // console.error('Failed to send email');
      }
    } catch (error) {
      // console.error('Error sending email:', error);
    }
  };



  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; 
  const message = "Bonjour, je souhaite vous contacter !";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    const visitInfo = {
    address: "Lieu-dit Iarintsena, Ambalavao, RN7, Madagascar",
    hours: "Lundi au Samedi: 8h00 - 17h00",
    contact: "+261 38 95 207 79",
    email: "danielnomenjanahary44@gmail.com",
    instructions: "Pour des raisons de sécurité, les visites doivent être organisées à l'avance. Merci de nous contacter pour planifier votre visite."
  };

  return (
    <>


      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact</h1>
          <p className="text-xl max-w-2xl mx-auto">Nous sommes là pour vous écouter et vous accompagner</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-green-700 hover:text-green-800">Accueil</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">Contact</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif text-green-800 mb-8">Restons en contact</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-700">RN7 Iarintsena, Ambalavao<br /> Fianarantsoa,  Madagascar</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-700">+261 34 87 171 75<br />+261 38 95 207 79</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-700">danielnomenjanhary44@gmail.com<br />info@eglise-jmi.mg</p>
                </div>
              </div>
              
             
             
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ratokimiarimanana.hobisonnorbert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.1v-2.89h2.34V9.83c0-2.31 1.38-3.59 3.49-3.59.99 0 2.02.18 2.02.18v2.22h-1.14c-1.13 0-1.48.7-1.48 1.42v1.71h2.52l-.4 2.89h-2.12v6.99C18.34 21.19 22 17.06 22 12.07z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.003 2.001c-7.733 0-14 6.268-14 14 0 2.469.646 4.864 1.879 6.978L2 30l7.26-1.91c2.04 1.115 4.345 1.696 6.743 1.696h.001c7.732 0 14-6.267 14-14s-6.268-14-14.001-14zm0 25.455h-.001c-2.142 0-4.229-.573-6.053-1.657l-.433-.257-4.311 1.136 1.151-4.205-.282-.432a11.954 11.954 0 01-1.848-6.468c0-6.626 5.373-12 12.001-12 6.627 0 12 5.374 12 12s-5.373 12-12.001 12zm6.574-8.73c-.358-.179-2.122-1.046-2.45-1.163-.329-.12-.568-.179-.808.18-.238.358-.926 1.163-1.136 1.402-.21.239-.418.27-.776.09-.358-.18-1.51-.556-2.876-1.77-1.064-.949-1.782-2.12-1.991-2.479-.21-.359-.022-.553.158-.732.163-.162.359-.42.539-.629.18-.21.239-.359.359-.598.119-.239.06-.449-.03-.628-.09-.18-.808-1.94-1.107-2.658-.29-.698-.585-.6-.808-.61l-.688-.012c-.239 0-.628.09-.957.449-.329.358-1.257 1.228-1.257 2.993 0 1.765 1.287 3.465 1.466 3.704.179.239 2.537 3.878 6.145 5.433.859.37 1.529.592 2.051.758.861.274 1.646.235 2.267.143.691-.103 2.122-.867 2.422-1.705.3-.837.3-1.554.21-1.705-.09-.15-.329-.239-.688-.418z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
          
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-serif text-green-800 mb-6">Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Votre nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Votre email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d&apos;information</option>
                    <option value="prayer">Demande de prière</option>
                    <option value="visit">Demande de visite</option>
                    <option value="ministry">Question sur un ministère</option>
                    <option value="donation">Question sur les dons</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 px-4 rounded-md hover:bg-green-800 transition-colors font-semibold"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            
            {/* Carte de localisation */}
            
             <section className="mb-16">
          <h2 className="text-2xl font-serif text-green-800 mb-6">Localisation du Chantier</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.512309782644!2d47.4705!3d-19.8740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07b6c8a3e0a5f%3A0x123456789abcdef!2sIarintsena%2C%20Madagascar!5e0!3m2!1sfr!2smg!4v1726420500000!5m2!1sfr!2smg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
                  href="https://www.google.com/maps/dir/?api=1&destination=Iarintsena%2C+Madagascar"
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
          </div>
        </div>
        
        {/* Section équipe pastorale
        <div className="mt-16">
          <h2 className="text-3xl font-serif text-center text-green-800 mb-12">Notre Équipe Pastorale</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Pasteur Jean Rakoto</h3>
              <p className="text-green-700">Pasteur Principal</p>
              <p className="text-gray-600 mt-2">jean.rakoto@eglise-jmi.mg</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Pasteur Paul Randria</h3>
              <p className="text-green-700">Pasteur Jeunesse</p>
              <p className="text-gray-600 mt-2">paul.randria@eglise-jmi.mg</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Pasteur Marie-Louise</h3>
              <p className="text-green-700">Pasteure Femmes</p>
              <p className="text-gray-600 mt-2">marie.louise@eglise-jmi.mg</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Diacre Thomas</h3>
              <p className="text-green-700">Responsable Adoration</p>
              <p className="text-gray-600 mt-2">thomas@eglise-jmi.mg</p>
            </div>
          </div>
        </div> */}
        
      </div>
      
        <ChurchFooter/>
    </>
  );
}