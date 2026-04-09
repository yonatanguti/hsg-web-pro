import Link from 'next/link';

export default function ProyectosPage() {
  const proyectos = [
    { id: 'cP7A9JYOE5s', titulo: 'Moldaje Monolítico en Proceso', desc: 'Equipo HSG · Obra en curso' },
    { id: '8Jxk2y7i5co', titulo: 'Avance Estructural', desc: 'Sistema muros y losas' },
    { id: 'I30PPTYdXqg', titulo: 'Proceso Constructivo', desc: 'Detalle de precisión HSG' },
    { id: 'ugOJPzirxvk', titulo: 'Obra San Bernardo', desc: 'Proyecto habitacional RM' },
    { id: 'QJEzRAdRWCY', titulo: 'Resultado Final', desc: 'Entrega conforme de moldaje' },
    { id: 'xGKFA0XqrSo', titulo: 'Detalle de Sistema', desc: 'Encofrado de alta eficiencia' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header de Proyectos */}
      <section className="py-20 px-6 bg-hsg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-hsg-red font-bold tracking-widest uppercase text-sm">Evidencia en Terreno</span>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase mt-4">
            Nuestros <span className="text-hsg-red not-italic">Trabajos</span>
          </h1>
          <p className="mt-6 text-gray-400 text-xl max-w-2xl leading-relaxed">
            Un registro visual de nuestra capacidad operativa y la calidad del acabado 
            en cada uno de nuestros proyectos.
          </p>
        </div>
      </section>

      {/* Galería de Videos */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {proyectos.map((pro) => (
            <div key={pro.id} className="group cursor-pointer">
              {/* Contenedor del Video / Thumbnail */}
              <Link href={`https://www.youtube.com/watch?v=${pro.id}`} target="_blank">
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  <img 
                    src={`https://img.youtube.com/vi/${pro.id}/maxresdefault.jpg`}
                    alt={pro.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay de Play */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-hsg-red rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.5 3.5v13L16.5 10 4.5 3.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-gray-900 group-hover:text-hsg-red transition-colors">
                    {pro.titulo}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mt-1">
                    {pro.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-hsg-gray text-center">
        <h2 className="text-3xl font-black uppercase italic">¿Listo para ver estos resultados en su obra?</h2>
        <Link href="/contacto" className="inline-block mt-8 bg-hsg-red text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">
          Solicitar Presupuesto
        </Link>
      </section>
    </div>
  );
}