import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TeacherInfo = () => {
    return (
        <section id="profesor" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
                    <div className="md:w-1/3">
                        <img 
                            src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Dr. Roberto Pérez" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Tu Instructor</div>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Dr. Roberto Pérez
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Médico Veterinario con más de 15 años de experiencia en clínica de pequeños animales y docencia. Apasionado por la formación de nuevos profesionales comprometidos con el bienestar animal.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeacherInfo;
