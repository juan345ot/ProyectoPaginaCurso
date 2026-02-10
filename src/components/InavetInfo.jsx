import React from 'react';
import { CheckCircle } from 'lucide-react';

const InavetInfo = () => {
    return (
        <section id="inavet" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* ¿QUÉ ES INAVET? */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-6 text-center">¿QUÉ ES INAVET?</h2>
                    <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed space-y-4">
                        <p>
                            INAVET es un instituto de formación dedicado a la capacitación de Auxiliares Veterinarios, con modalidad 100% online, orientado a una formación práctica, clara y accesible.
                        </p>
                        <p>
                            Nuestra propuesta está pensada para personas que desean adquirir conocimientos reales del trabajo auxiliar en el ámbito veterinario, con acompañamiento docente y contenidos organizados de forma progresiva.
                        </p>
                    </div>
                </div>

                {/* ¿PARA QUIÉN ES ESTA FORMACIÓN? */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-secondary mb-8 text-center">¿PARA QUIÉN ES ESTA FORMACIÓN?</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle className="text-primary mt-1 mr-3 shrink-0" />
                                <span className="text-gray-700">Personas sin experiencia previa</span>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="text-primary mt-1 mr-3 shrink-0" />
                                <span className="text-gray-700">Quienes trabajan y necesitan horarios flexibles</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle className="text-primary mt-1 mr-3 shrink-0" />
                                <span className="text-gray-700">Interesados en el área veterinaria</span>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="text-primary mt-1 mr-3 shrink-0" />
                                <span className="text-gray-700">Personas que buscan una salida laboral vinculada al sector salud animal</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center text-secondary font-semibold text-lg">
                        No se requieren conocimientos previos.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InavetInfo;
