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

export const MODALITY_DATA = {
    features: [
        {
            title: "Clases en vivo grabadas",
            description: "Disponibles las 24 hs. No es obligatorio conectarse al vivo.",
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
