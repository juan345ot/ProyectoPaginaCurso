import { Instagram, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import { CONTACT_INFO, NAV_LINKS } from '../constants/data';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-24 pb-12 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-4xl inline-block mb-8 shadow-premium">
                            <img src={logo} alt="INAVET Logo" className="h-32 object-contain" />
                        </div>
                        <p className="text-gray-300 text-lg font-medium leading-relaxed">
                            Formando profesionales en el cuidado animal con pasión, flexibilidad y excelencia académica.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-primary font-black text-xl mb-8 uppercase tracking-widest">Navegación</h4>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    <a 
                                        href={`#${link.id}`} 
                                        className="text-gray-200 hover:text-white transition-all flex items-center group font-bold"
                                        aria-label={`Navegar a ${link.name}`}
                                    >
                                        <div className="w-0 group-hover:w-4 h-0.5 bg-primary mr-0 group-hover:mr-3 transition-all"></div>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-primary font-black text-xl mb-8 uppercase tracking-widest">Contacto</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 group">
                                <div className="bg-white/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                                    <Phone size={20} className="text-primary" />
                                </div>
                                <span className="text-gray-300 font-bold group-hover:text-white transition-colors">
                                    {CONTACT_INFO.whatsappDisplay}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-primary font-black text-xl mb-8 uppercase tracking-widest">Seguinos</h4>
                        <div className="flex gap-4">
                            <a 
                                href={CONTACT_INFO.instagramUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-linear-to-tr hover:from-yellow-400 hover:to-purple-600 transition-all shadow-lg transform hover:-translate-y-2"
                                aria-label="Seguir en Instagram"
                            >
                                <Instagram size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-6 text-gray-400 font-medium text-center">
                    <p>&copy; {new Date().getFullYear()} INAVET. Todos los derechos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
