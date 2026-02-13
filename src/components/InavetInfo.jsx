import React from 'react';
import { CheckCircle } from 'lucide-react';

const InavetInfo = () => {
    return (
        <section id="inavet" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* ¿QUÉ ES INAVET? */}
                <div className="mb-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-secondary mb-10 uppercase tracking-tighter">¿QUÉ ES INAVET?</h2>
                    <div className="max-w-4xl mx-auto text-gray-700 text-xl md:text-2xl leading-relaxed space-y-8 font-medium">
                        <p className="border-l-4 border-primary pl-8 text-left">
                            INAVET es un instituto de formación dedicado a la capacitación de Auxiliares Veterinarios, con modalidad 100% online, orientado a una formación práctica, clara y accesible.
                        </p>
                        <p className="bg-gray-50 p-8 rounded-4xl border border-gray-100 italic text-gray-600">
                            Nuestra propuesta está pensada para personas que desean adquirir conocimientos reales del trabajo auxiliar en el ámbito veterinario, con acompañamiento docente y contenidos organizados de forma progresiva.
                        </p>
                    </div>
                </div>

                {/* ¿PARA QUIÉN ES ESTA FORMACIÓN? */}
                <div className="bg-secondary p-10 md:p-16 rounded-4xl shadow-premium max-w-5xl mx-auto text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000"></div>
                    
                    <h2 className="text-3xl md:text-4xl font-black mb-12 text-center uppercase tracking-tight text-primary">¿PARA QUIÉN ES ESTA FORMACIÓN?</h2>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <CheckCircle className="text-primary mt-1 mr-5 shrink-0" size={32} />
                                <span className="text-xl font-bold">Personas sin experiencia previa</span>
                            </div>
                            <div className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <CheckCircle className="text-primary mt-1 mr-5 shrink-0" size={32} />
                                <span className="text-xl font-bold">Quienes trabajan y necesitan horarios flexibles</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <CheckCircle className="text-primary mt-1 mr-5 shrink-0" size={32} />
                                <span className="text-xl font-bold">Interesados en el área veterinaria</span>
                            </div>
                            <div className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <CheckCircle className="text-primary mt-1 mr-5 shrink-0" size={32} />
                                <span className="text-xl font-bold">Salida laboral vinculada al sector salud animal</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center">
                        <span className="bg-primary text-secondary px-8 py-4 rounded-full font-black text-xl uppercase tracking-widest shadow-xl inline-block transform hover:scale-105 transition-transform">
                            No se requieren conocimientos previos
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InavetInfo;
