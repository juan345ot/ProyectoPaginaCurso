import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Inicio', id: 'inicio' },
        { name: 'Qué es INAVET', id: 'inavet' },
        { name: 'Modalidad', id: 'modalidad' },
        { name: 'Inversión', id: 'inversion' },
        { name: 'FAQ', id: 'faq' },
        { name: 'Contacto', id: 'contacto' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 text-2xl font-bold text-primary cursor-pointer" onClick={() => scrollToSection('inicio')}>
                    <Stethoscope size={32} />
                    <span>INAVET</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className={`font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-gray-800 font-medium text-lg hover:text-blue-600"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
