import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: 'transparent' } },
                particles: {
                    number: {
                        value: 80,
                        density: { enable: true, area: 800 },
                    },
                    color: {
                        value: ['#8b5cf6', '#38bdf8'], // Roxo e azul
                        animation: {
                            enable: true,
                            speed: 5,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        color: '#a855f7',
                        opacity: 0.3,
                        distance: 120,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        outModes: { default: 'bounce' },
                    },
                    size: { value: 2 },
                    opacity: {
                        value: 0.4,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.2,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'grab' },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 150,
                            links: { opacity: 0.5 },
                        },
                    },
                },
            }}
            className="absolute inset-0 z-0"
        />
    );
};

export default ParticleBackground;
