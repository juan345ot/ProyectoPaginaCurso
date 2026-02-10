import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section id="contacto" className="py-16 bg-linear-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                    📩 ¿Querés recibir más información o inscribirte?
                </h2>
                
                <button 
                  className="bg-primary hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all transform hover:scale-105 mb-12"
                  onClick={() => window.open('https://wa.me/542926451511', '_blank')}
                >
                    Inscribirme / Pedir información
                </button>

                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                    <a 
                        href="https://wa.me/542926451511" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                    >
                        <div className="bg-green-100 p-3 rounded-full">
                            <MessageCircle size={24} className="text-green-600" />
                        </div>
                        <span className="text-xl font-medium">2926 45-1511</span>
                    </a>

                    <a 
                        href="https://instagram.com/institutoinavet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 text-gray-700 hover:text-pink-600 transition-colors"
                    >
                         <div className="bg-pink-100 p-3 rounded-full">
                            <Instagram size={24} className="text-pink-600" />
                        </div>
                        <span className="text-xl font-medium">@institutoinavet</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
