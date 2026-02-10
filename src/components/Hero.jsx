import React from 'react';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                    alt="Veterinary Assistant" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                    Formación Online de Auxiliar Veterinario
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
                    Estudiá desde cualquier lugar, comenzá en cualquier mes del año, con clases grabadas y certificación incluida.
                </p>
                <div className="flex flex-col items-center gap-4">
                     <p className="text-lg font-semibold text-primary">
                        👉 Sin fechas fijas. Avanzás a tu ritmo.
                    </p>
                    <button 
                        onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg mt-4"
                    >
                        Inscribirme / Pedir información
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
