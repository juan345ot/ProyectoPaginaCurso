import React from 'react';
import { Video, Calendar, Globe, HelpCircle, Award } from 'lucide-react';

const Modality = () => {
    return (
        <section id="modalidad" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                
                {/* MODALIDAD DE CURSADA */}
                <h2 className="text-3xl font-bold text-secondary mb-12 text-center">MODALIDAD DE CURSADA</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <Video className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Clases grabadas</h3>
                        <p className="text-gray-600">Disponibles las 24 hs. No es obligatorio conectarse en vivo.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <Calendar className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Inicio flexible</h3>
                        <p className="text-gray-600">Podés comenzar en cualquier mes del año, sin esperar fechas de inscripción.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <Globe className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">100% online</h3>
                        <p className="text-gray-600">Ideal para quienes trabajan o tienen otros estudios.</p>
                    </div>
                </div>

                {/* CONTENIDOS */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-16 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                        📚 Contenidos organizados en módulos
                    </h3>
                    <p className="text-gray-700 mb-4">La formación se estructura en 7 módulos progresivos:</p>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 italic">
                        Módulos: […] […] […] […] […] […] […]
                    </div>
                </div>

                {/* DURACIÓN */}
                <div className="mb-16 text-center">
                   <h2 className="text-3xl font-bold text-secondary mb-8">DURACIÓN</h2>
                   <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-md border-l-4 border-primary text-left">
                        <p className="text-lg text-gray-800 mb-2"><strong>⏳ Duración total:</strong> 7 meses</p>
                        <p className="text-lg text-gray-800"><strong>📖 Acceso al material:</strong> durante toda la cursada</p>
                   </div>
                </div>

                {/* CERTIFICIACIÓN */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-secondary mb-8 text-center">CERTIFICACIÓN</h2>
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                        <p className="text-lg text-gray-700 mb-6">🎓 Al finalizar la formación se entrega:</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Award className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">Certificado INAVET</h4>
                                    <p className="text-gray-600">Incluido, sin costo adicional.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <Award className="w-8 h-8 text-secondary mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">Certificación de la Cámara Argentina para la Formación Profesional y la Capacitación Laboral</h4>
                                    <p className="text-gray-600">Opcional, con costo adicional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Modality;
