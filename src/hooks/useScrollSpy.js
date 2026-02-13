import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, offset = 150) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Calculate active section
            const currentSection = sectionIds.find(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= offset && rect.bottom >= offset;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return { activeSection, scrollProgress };
};

export default useScrollSpy;
