'use client'; // Importante para la interactividad

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900">
              H<span className="text-hsg-red">S</span>G
            </Link>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/servicios" className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-hsg-red transition-colors">Servicios</Link>
            <Link href="/proyectos" className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-hsg-red transition-colors">Proyectos</Link>
            <Link href="/nosotros" className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-hsg-red transition-colors">Nosotros</Link>
            <Link 
              href="/contacto" 
              className="bg-[#A62F1B] text-white px-6 py-3 rounded-md text-sm font-extrabold uppercase tracking-widest hover:bg-black transition-all"
            >
              Cotizar
            </Link>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-gray-700 border-b border-gray-50 uppercase">Servicios</Link>
          <Link href="/proyectos" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-gray-700 border-b border-gray-50 uppercase">Proyectos</Link>
          <Link href="/nosotros" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-gray-700 border-b border-gray-50 uppercase">Nosotros</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="block w-full text-center bg-[#A62F1B] text-white px-3 py-4 rounded-md font-bold uppercase">Cotizar Ahora</Link>
        </div>
      )}
    </nav>
  );
}