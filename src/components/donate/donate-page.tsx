"use client";

import { useState } from 'react';
import Link from 'next/link';
import ChurchFooter from '../ChurchFooter';

export default function DonatePage() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleAmountSelect = (selectedAmount: string) => {
    setAmount(selectedAmount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de traitement du don ici
    const finalAmount = amount || customAmount;
    console.log('Don soumis:', { donationType, amount: finalAmount, ...formData });
    // Rediriger vers le traitement de paiement
  };

  const donationOptions = [
    { value: '50000', label: '50 000 Ar' },
    { value: '100000', label: '100 000 Ar' },
    { value: '200000', label: '200 000 Ar' },
    { value: '500000', label: '500 000 Ar' },
    { value: '1000000', label: '1000 000 Ar' },
    { value: '2000000', label: '1000 000 Ar' },
  ];

  const projects = [
    {
      title: "Construction du Nouveau Temple",
      progress: 75,
      needed: "50 000 000 Ar",
      description: "Aidez-nous à terminer la construction de notre nouveau lieu de culte."
    },

    {
      title: "Équipement Audiovisuel",
      progress: 60,
      needed: "8 000 000 Ar",
      description: "Contribuez à l'achat de matériel audio et vidéo pour améliorer nos services."
    }
  ];

  return (
    <>


      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1574359173084-bfcee66c2c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Faire un Don</h1>
          <p className="text-xl max-w-2xl mx-auto">Votre soutien financier fait une différence dans notre mission</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-green-700 hover:text-green-800">Accueil</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">Faire un Don</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulaire de don */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-serif text-green-800 mb-6">Faire un Don</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Type de don */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Type de don</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`py-3 px-4 rounded-md border-2 text-center ${donationType === 'one-time' ? 'border-green-700 bg-green-50 text-green-800 font-semibold' : 'border-gray-300 text-gray-700 hover:border-green-500'}`}
                    >
                      Don unique
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`py-3 px-4 rounded-md border-2 text-center ${donationType === 'monthly' ? 'border-green-700 bg-green-50 text-green-800 font-semibold' : 'border-gray-300 text-gray-700 hover:border-green-500'}`}
                    >
                      Don mensuel
                    </button>
                  </div>
                </div>
                
                {/* Montant du don */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Montant du don</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {donationOptions.map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleAmountSelect(option.value)}
                        className={`py-3 px-4 rounded-md border-2 text-center ${amount === option.value ? 'border-green-700 bg-green-50 text-green-800 font-semibold' : 'border-gray-300 text-gray-700 hover:border-green-500'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">Ou spécifiez un montant personnalisé</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">Ar</span>
                      <input
                        type="number"
                        id="customAmount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Montant"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Informations personnelles */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Vos informations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Prénom</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Nom</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Message optionnel */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (optionnel)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Un message pour notre équipe..."
                  ></textarea>
                </div>
                
                {/* Bouton de soumission */}
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-4 px-4 rounded-md hover:bg-green-800 transition-colors font-semibold text-lg"
                  disabled={!amount && !customAmount}
                >
                  Procéder au paiement
                </button>
                
                <p className="text-center text-gray-600 text-sm">
                  Votre don est sécurisé et traité de manière confidentielle.
                </p>
              </form>
            </div>
            
            {/* Méthodes de paiement alternatives */}
            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-serif text-green-800 mb-4">Autres méthodes de don</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Transfert Mobile Money</h4>
                  <p className="text-gray-600 mb-2">MVola: <span className="font-mono">034 12 345 67</span></p>
                  <p className="text-gray-600">Airtel Money: <span className="font-mono">033 12 345 67</span></p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Virement Bancaire</h4>
                  <p className="text-gray-600 mb-2">Bank of Madagascar</p>
                  <p className="text-gray-600 mb-2">N° de compte: <span className="font-mono">12345 67890 12345</span></p>
                  <p className="text-gray-600">Code Swift: <span className="font-mono">BOMGMGMG</span></p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Don en main propre</h4>
                  <p className="text-gray-600">Vous pouvez déposer votre don directement au secrétariat de l&apos;église aux heures d&apos;ouverture.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Don en nature</h4>
                  <p className="text-gray-600">Nous acceptons également les dons en nature (nourriture, vêtements, matériel). Contactez-nous pour plus d&apos;informations.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Projets en cours */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-serif text-green-800 mb-6">Projets en cours</h3>
              
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progression</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600">Montant nécessaire: <span className="font-semibold">{project.needed}</span></p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Verset biblique */}
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-700">
              <p className="text-green-800 italic text-center">
                &apos;&apos;Que chacun donne comme il l&apos; a résolu en son cœur, sans tristesse ni contrainte; 
                car Dieu aime celui qui donne avec joie.&apos;&apos;
              </p>
              <p className="text-green-700 text-center mt-2">- 2 Corinthiens 9:7</p>
            </div>
            
            {/* FAQ des dons */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-serif text-green-800 mb-4">Questions fréquentes</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Mon don est-il sécurisé?</h4>
                  <p className="text-gray-600 text-sm">Oui, tous les dons en ligne sont traités de manière sécurisée via notre plateforme de paiement certifiée.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Puis-je recevoir un reçu?</h4>
                  <p className="text-gray-600 text-sm">Oui, nous envoyons un reçu officiel par email pour tous les dons, que vous pourrez utiliser pour des déductions fiscales.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Comment sont utilisés les dons?</h4>
                  <p className="text-gray-600 text-sm">Les dons sont utilisés pour soutenir les différents ministères de l&aposéglise, les projets communautaires et les frais de fonctionnement.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Puis-je annuler mon don mensuel?</h4>
                  <p className="text-gray-600 text-sm">Oui, vous pouvez annuler votre don mensuel à tout moment en nous contactant par email ou téléphone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Témoignages */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif text-center text-green-800 mb-12">Témoignages de Donateurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold mr-4">
                  JR
                </div>
                <div>
                  <h4 className="font-semibold">Jean Rakoto</h4>
                  <p className="text-sm text-gray-600">Donateur régulier</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &apos;&apos;Donner à mon église est une façon concrète de participer à l&apos; œuvre de Dieu. Chaque mois, je vois l&apos;impact de nos dons dans la communauté.&apos;&apos;
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-semibold">Marie Randria</h4>
                  <p className="text-sm text-gray-600">Donatrice</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &apos;&apos;J&apos;ai été touchée par le programme d&apos;aide alimentaire. Faire un don était ma façon de contribuer à cette belle initiative qui aide les familles dans le besoin.&apos;&apos;
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold mr-4">
                  TR
                </div>
                <div>
                  <h4 className="font-semibold">Thomas Rahery</h4>
                  <p className="text-sm text-gray-600">Donateur</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &apos;&apos;La transparence dans l&apos;utilisation des fonds m&apos;a convaincu de donner régulièrement. Je sais exactement comment mon don est utilisé pour servir la communauté.&apos;&apos;
              </p>
            </div>
          </div>
        </div>
      </div>
      
        <ChurchFooter/>
    </>
  );
}