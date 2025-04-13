import React, { useEffect, useRef } from 'react';

const HeroParallax = ({ children }) => {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 20;
            const y = (e.clientY / innerHeight - 0.5) * 20;
            parallaxRef.current.style.transform = `rotateY(${x}deg) rotateX(${y * -1}deg)`;
        };

        const ref = parallaxRef.current;
        ref.addEventListener('mousemove', handleMouseMove);
        return () => ref.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={parallaxRef}
            className="w-full h-screen flex items-center justify-center transition-transform duration-700 ease-out"
            style={{
                perspective: '1500px',
                transition: 'transform 0.2s ease-out',
            }}
        >
            <div className="transform-style-3d">{children}</div>
        </div>
    );
};

export default HeroParallax;
