import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
