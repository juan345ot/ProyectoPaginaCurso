import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-blue-500 mb-4">VetAssistant</h3>
                        <p className="text-gray-400 max-w-sm">
                            Formando profesionales comprometidos con la salud y el bienestar animal. Tu carrera empieza acá.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#info" className="text-gray-400 hover:text-white transition-colors">Cursos</a></li>
                            <li><a href="#profesor" className="text-gray-400 hover:text-white transition-colors">Docentes</a></li>
                            <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Seguinos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} VetAssistant. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
