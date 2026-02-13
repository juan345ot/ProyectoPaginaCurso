import React from 'react';
import { Video, Calendar, Globe, Award, BookOpen } from 'lucide-react';
import { MODALITY_DATA } from '../constants/data';

const iconMap = {
    Video: Video,
    Calendar: Calendar,
    Globe: Globe
};

const Modality = () => {
    return (
        <section id="modalidad" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                
                {/* MODALIDAD DE CURSADA */}
                <h2 className="text-3xl md:text-5xl font-black text-secondary mb-16 text-center uppercase tracking-tight font-display">
                    Modalidad de Cursada
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {MODALITY_DATA.features.map((feature, idx) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-soft-depth hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    {Icon && <Icon className="w-8 h-8 text-primary group-hover:text-white" />}
                                </div>
                                <h3 className="text-2xl font-black text-gray-800 mb-3 uppercase tracking-wide font-display">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CONTENIDOS */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-premium border border-gray-50 mb-20 max-w-4xl mx-auto overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"></div>
                    <h3 className="text-2xl font-extrabold text-secondary mb-8 flex items-center gap-4 font-display">
                        <div className="bg-secondary/10 p-2 rounded-xl">
                            <BookOpen size={28} />
                        </div>
                        Contenidos organizados en módulos
                    </h3>
                    <p className="text-lg text-gray-700 mb-8 font-medium">La formación se estructura en <span className="text-secondary font-black underline decoration-primary decoration-4">{MODALITY_DATA.modulesCount} módulos progresivos</span>:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Array.from({ length: MODALITY_DATA.modulesCount }, (_, i) => i + 1).map((m) => (
                            <div key={m} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center justify-center font-black text-secondary hover:bg-secondary hover:text-white transition-all cursor-default font-display">
                                Módulo {m}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* DURACIÓN */}
                    <div className="bg-secondary text-white p-10 rounded-[2.5rem] shadow-soft-depth relative overflow-hidden group">
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                        <h2 className="text-3xl font-black mb-10 uppercase tracking-widest text-primary font-display">DURACIÓN</h2>
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-2xl">
                                    <Calendar className="text-primary" size={32} />
                                </div>
                                <p className="text-xl"><strong>Duración total:</strong> {MODALITY_DATA.duration}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-2xl">
                                    <Globe className="text-primary" size={32} />
                                </div>
                                <p className="text-xl"><strong>Acceso al material:</strong> {MODALITY_DATA.access}</p>
                            </div>
                        </div>
                    </div>

                    {/* CERTIFICIACIÓN */}
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-soft-depth border border-gray-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-black text-secondary mb-10 uppercase tracking-tight font-display">CERTIFICACIÓN</h2>
                            <p className="text-lg text-gray-600 mb-8 font-bold">🎓 Al finalizar la formación se entrega:</p>
                            
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-2xl mr-5">
                                        <Award className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-gray-800 leading-tight font-display">Certificado INAVET</h4>
                                        <p className="text-gray-500 font-medium italic">Incluido, sin costo adicional.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-secondary/10 p-3 rounded-2xl mr-5">
                                        <Award className="w-8 h-8 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-gray-800 leading-tight font-display">Certificación de la Cámara Argentina para la Formación Profesional y la Capacitación Laboral</h4>
                                        <p className="text-gray-500 font-medium italic">Opcional, con costo adicional.</p>
                                    </div>
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
