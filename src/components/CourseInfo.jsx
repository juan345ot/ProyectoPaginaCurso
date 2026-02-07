import React from 'react';
import { CheckCircle, Clock, Award, BookOpen } from 'lucide-react';

const CourseInfo = () => {
    const modules = [
        "Introducción a la Veterinaria",
        "Anatomía y Fisiología Animal",
        "Enfermería Veterinaria Básica",
        "Nutrición y Alimentación",
        "Atención al Cliente en Clínicas",
        "Primeros Auxilios Veterinarios"
    ];

    return (
        <section id="info" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Información del Curso</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Un programa integral diseñado para brindarte las herramientas esenciales para trabajar en clínicas veterinarias, refugios y tiendas de mascotas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1 */}
                    <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-blue-100">
                        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                            <Clock size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Duración</h3>
                        <p className="text-gray-600">
                            6 Meses de cursada intensiva con clases teóricas y prácticas.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-green-100">
                        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white mb-6">
                            <BookOpen size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Modalidad</h3>
                        <p className="text-gray-600">
                            100% Online con clases en vivo y material grabado disponible 24/7.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-purple-100">
                        <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white mb-6">
                            <Award size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Certificación</h3>
                        <p className="text-gray-600">
                            Certificado de finalización avalado para potenciar tu salida laboral.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">¿Qué vas a aprender?</h3>
                            <ul className="space-y-4">
                                {modules.map((mod, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">{mod}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                Solicitar Programa Completo
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-gray-200">
                            <img 
                                src="https://images.unsplash.com/photo-1628009368231-76033d0738cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                                alt="Clase de veterinaria" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseInfo;
