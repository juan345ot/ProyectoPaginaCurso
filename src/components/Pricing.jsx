import React from 'react';
import { CreditCard, Wallet, Banknote, Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="inversion" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* INVERSIÓN */}
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-8 text-center md:text-left">INVERSIÓN</h2>
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm h-full">
                            <div className="text-4xl font-extrabold text-primary mb-2">$49.000 <span className="text-xl text-gray-500 font-normal">ARS / mes</span></div>
                            
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-center">
                                    <Check className="text-secondary mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-semibold">Matrícula bonificada por apertura</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="text-secondary mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Posibilidad de pago mensual</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="text-secondary mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Descuento por pago del curso completo</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* MEDIOS DE PAGO */}
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-8 text-center md:text-left">MEDIOS DE PAGO</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                                <CreditCard className="text-primary w-8 h-8 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Mercado Pago</h3>
                                    <ul className="text-gray-600 space-y-1 list-disc list-inside">
                                        <li>Tarjeta de crédito</li>
                                        <li>Tarjeta de débito</li>
                                        <li>Cuotas</li>
                                        <li>Transferencia</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center">
                                <Banknote className="text-primary w-8 h-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Transferencia bancaria</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
