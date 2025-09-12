import Link from 'next/link'
import React from 'react'

export default function ChurchFooter() {
  return (
          <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Jesosy Mamonjy Iarintsena</h3>
              <p className="mb-4">Une communauté de foi au service de Christ et des personnes.</p>
              <p>RN7 Iarintsena, Ambalavao<br /> Fianarantsoa,  Madagascar</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-green-300">À propos</Link></li>
                <li><Link href="/ministries" className="hover:text-green-300">Ministères</Link></li>
                <li><Link href="/events" className="hover:text-green-300">Événements</Link></li>
                <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Restons Connectés</h3>
              <p className="mb-4">Inscrivez-vous à notre newsletter pour suivre l&apos;avancement du projet.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-green-700 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  {/* Icône Facebook */}
                </a>
                <a href="#" className="bg-green-700 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="sr-only">Instagram</span>
                  {/* Icône Instagram */}
                </a>
                <a href="#" className="bg-green-700 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="sr-only">YouTube</span>
                  {/* Icône YouTube */}
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Jesosy Mamonjy Iarintsena. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
)
}
