export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Encabezado de página */}
      <section className="py-20 px-6 bg-hsg-gray">
        <div className="max-w-7xl mx-auto">
          <span className="text-hsg-red font-bold tracking-widest uppercase text-sm">Nuestra Especialidad</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-4 italic uppercase leading-none">
            Nuestros <span className="text-hsg-red not-italic">Servicios</span>
          </h1>
          <p className="mt-6 text-gray-600 text-xl max-w-3xl leading-relaxed">
            Proveemos equipos de PRUEBA certificados para la ejecución de proyectos 
            habitacionales y comerciales de alta exigencia técnica.
          </p>
        </div>
      </section>

      {/* Grid de servicios detallados */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 border border-gray-100 bg-gray-50 hover:border-hsg-red transition-all group">
            <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-hsg-red">Montaje de Moldajes</h3>
            <p className="text-gray-600 leading-relaxed">
              Instalación precisa de sistemas monolíticos de aluminio y acero. 
              Garantizamos el plomo y la alineación según planos estructurales.
            </p>
          </div>
          
          <div className="p-10 border border-gray-100 bg-gray-50 hover:border-hsg-red transition-all group">
            <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-hsg-red">Ciclos de Hormigonado</h3>
            <p className="text-gray-600 leading-relaxed">
              Gestión eficiente del personal para cumplir con los tiempos de vaciado 
              y desmolde, optimizando el uso del equipo de moldaje.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}