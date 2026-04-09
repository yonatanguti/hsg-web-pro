export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECCIÓN HERO */}
      <section className="bg-hsg-gray py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-hsg-red font-bold tracking-widest uppercase text-sm">
            HSG Sociedad Constructora
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-hsg-dark mt-4 leading-none italic uppercase">
            Mano de Obra <br />
            <span className="text-hsg-red not-italic">Especializada</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl leading-relaxed">
            Potenciamos su obra con cuadrillas expertas en montaje de moldajes monolíticos. 
            Eficiencia técnica y seguridad garantizada en cada m².
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-hsg-red text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-red-800 transition-all">
              Explorar Servicios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}