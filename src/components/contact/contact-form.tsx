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
                  <p className="text-gray-700">+261 34 12 345 67<br />+261 20 22 345 67</p>
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
                  <p className="text-gray-700">contact@eglise-jmi.mg<br />info@eglise-jmi.mg</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horaires des offices</h3>
                  <p className="text-gray-700">Dimanche: 9h - 12h<br />Mercredi: 18h - 19h30</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-green-700 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="bg-green-700 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
                <a href="#" className="bg-green-700 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
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
            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-serif text-green-800 mb-4">Nous trouver</h3>
              <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p>Carte interactive</p>
                  <p className="text-sm">(Intégrez ici votre carte Google Maps ou autre)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section équipe pastorale */}
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
        </div>
      </div>
      
        <ChurchFooter/>
    </>
  );
}