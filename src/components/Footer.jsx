import React from 'react';
import { Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-primary/30 pb-8">
                    <div className="col-span-1">
                        <img src={logo} alt="INAVET Logo" className="h-24 w-auto object-contain mb-4 bg-white rounded-full p-2" />
                        <p className="text-gray-200 max-w-sm">
                            Instituto de formación de Auxiliares Veterinarios.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#inicio" className="text-gray-200 hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#inavet" className="text-gray-200 hover:text-white transition-colors">Qué es INAVET</a></li>
                            <li><a href="#modalidad" className="text-gray-200 hover:text-white transition-colors">Modalidad</a></li>
                            <li><a href="#faq" className="text-gray-200 hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Seguinos</h4>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com/institutoinavet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-300 text-sm">
                    &copy; {new Date().getFullYear()} INAVET. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
