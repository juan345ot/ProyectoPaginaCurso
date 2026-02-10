import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-gray-800">{question}</span>
                {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
            </button>
            <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4 opacity-100 border-t border-gray-100' : 'max-h-0 py-0 opacity-0'}`}
            >
                <p className="text-gray-600">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "¿Tengo que conectarme en vivo?",
            answer: "No. Las clases quedan grabadas para que las veas cuando quieras."
        },
        {
            question: "¿Necesito experiencia previa?",
            answer: "No. La formación está pensada desde nivel inicial."
        },
        {
            question: "¿Hay prácticas presenciales?",
            answer: ""
        },
        {
            question: "¿El certificado tiene validez?",
            answer: "El certificado INAVET es institucional. La certificación UTN será opcional en caso de confirmarse."
        }
    ];

    return (
        <section id="faq" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-secondary mb-12 text-center">PREGUNTAS FRECUENTES (FAQ)</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
