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
                    Tu Futuro Cuidando a los que Más Amamos
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
                    Formate como Auxiliar Veterinario y convertí tu pasión por los animales en tu profesión.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                        onClick={() => document.getElementById('info').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        Ver Programa
                    </button>
                    <button 
                        onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition-all"
                    >
                        Inscribirme Ahora
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
