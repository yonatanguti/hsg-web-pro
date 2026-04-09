import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-hsg-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          
          {/* Columna 1: Logo y Brief */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              H<span className="text-hsg-red">S</span>G
            </Link>
            <p className="mt-6 text-gray-400 max-w-sm">
              Líderes en subcontrato de mano de obra especializada para moldajes monolíticos. 
              Calidad y seguridad garantizada en todo el territorio nacional.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-hsg-red">Navegación</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto Rápido */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-hsg-red">Contacto</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>San Bernardo, RM</li>
              <li>+56 9 4219 8695</li>
              <li className="break-all">sociedad.constructorahsgltda@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest uppercase">
          <p>© 2025 HSG Sociedad Constructora Ltda.</p>
          <p className="mt-4 md:mt-0">Desarrollado con Excelencia Técnica</p>
        </div>
      </div>
    </footer>
  );
}