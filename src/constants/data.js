export const CONTACT_INFO = {
    whatsapp: '542926451511',
    whatsappDisplay: '2926 45-1511',
    instagram: 'institutoinavet',
    instagramUrl: 'https://instagram.com/institutoinavet',
    email: 'contacto@inavet.com', // Placeholder if needed in future
};

export const COURSE_INFO = {
    price: '$49.000',
    duration: '7 meses',
    certification: 'Certificado INAVET / Cámara Argentina para la Formación Profesional',
};

export const NAV_LINKS = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Inavet', id: 'inavet' },
    { name: 'Modalidad', id: 'modalidad' },
    { name: 'Inversión', id: 'inversion' },
    { name: 'FAQ', id: 'faq' },
];

export const FAQ_DATA = [
    {
        question: "¿Tengo que conectarme en vivo?",
        answer: "No. Las clases quedan grabadas para que las veas cuando quieras, lo que te permite organizar tus horarios con total libertad."
    },
    {
        question: "¿Necesito experiencia previa?",
        answer: "No. La formación está pensada desde un nivel inicial, ideal para quienes aman a los animales y quieren comenzar su camino profesional."
    },
    {
        question: "¿Cómo accedo al material?",
        answer: "Una vez inscripto, recibirás tus claves de acceso a nuestra plataforma online donde encontrarás todos los módulos y recursos."
    },
    {
        question: "¿El certificado tiene validez?",
        answer: "Al finalizar, recibís el certificado institucional de INAVET. Además, tenés la opción de tramitar la certificación de la Cámara Argentina para la Formación Profesional."
    }
];

export const MODALITY_DATA = {
    features: [
        {
            title: "Clases grabadas",
            description: "Disponibles las 24 hs. No es obligatorio conectarse en vivo.",
            icon: "Video"
        },
        {
            title: "Inicio flexible",
            description: "Podés comenzar en cualquier mes del año, sin esperar fechas de inscripción.",
            icon: "Calendar"
        },
        {
            title: "100% online",
            description: "Ideal para quienes trabajan o tienen otros estudios.",
            icon: "Globe"
        }
    ],
    modulesCount: 7,
    duration: COURSE_INFO.duration,
    access: "durante toda la cursada"
};
