export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 px-6 bg-hsg-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-hsg-red font-bold tracking-[0.3em] uppercase text-xs">Trayectoria y Confianza</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic mt-6 leading-none">
            Más que una <span className="text-hsg-red not-italic">Constructora</span>
          </h1>
          <p className="mt-8 text-xl text-gray-400 leading-relaxed">
            Desde San Bernardo para todo Chile, HSG nace con la misión de profesionalizar 
            el subcontrato de mano de obra en moldajes industriales.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-black uppercase italic italic text-gray-900 leading-none">
            Nuestra <span className="text-hsg-red not-italic">Visión</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            En HSG nos enfocamos en tres pilares: seguridad del personal, cumplimiento 
            estricto de los plazos de obra y calidad técnica en el acabado del hormigón. 
            Sabemos que el moldaje es el corazón de la estructura, y lo tratamos como tal.
          </p>
          <div className="mt-10 p-8 border-l-4 border-hsg-red bg-gray-50">
            <p className="italic text-gray-700 text-lg">
              "Nuestra meta es ser el aliado estratégico de las grandes constructoras del país, 
              aportando eficiencia en cada ciclo de hormigonado."
            </p>
            <p className="mt-4 font-bold uppercase tracking-widest text-sm">— Leonardo Quiroz, Director HSG</p>
          </div>
        </div>
        <div className="bg-hsg-gray aspect-square flex items-center justify-center p-12">
            {/* Aquí iría una foto del equipo o del dueño en obra */}
            <p className="text-gray-400 font-bold uppercase tracking-widest text-center border-2 border-dashed border-gray-300 p-10">
                Imagen Corporativa <br/> Próximamente
            </p>
        </div>
      </section>
    </div>
  );
}
