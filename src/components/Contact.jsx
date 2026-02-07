import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contactanos</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-600">
                        ¿Tenés dudas? Estamos para asesorarte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                <Phone size={24} />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-gray-800">Teléfono / WhatsApp</h3>
                                <p className="text-gray-600 mt-1">+54 9 11 0000 0000</p>
                                <p className="text-sm text-gray-500">Lunes a Viernes de 9 a 18hs</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                                <p className="text-gray-600 mt-1">info@cursosveterinaria.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-gray-800">Ubicación</h3>
                                <p className="text-gray-600 mt-1">Av. Corrientes 1234, CABA</p>
                                <p className="text-sm text-gray-500">Buenos Aires, Argentina</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                            <textarea 
                                id="message" 
                                rows="4" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                placeholder="Hola, quisiera más información..."
                            ></textarea>
                        </div>
                        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                            Enviar Consulta
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
