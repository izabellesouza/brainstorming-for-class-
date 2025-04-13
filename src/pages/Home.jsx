import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#6a11cb] to-[#2575fc] min-h-screen text-white flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Elementos decorativos (pode ser substituído por SVGs futuramente) */}
            <div className="absolute w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl top-10 left-[-80px] animate-pulse-slow"></div>
            <div className="absolute w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl bottom-10 right-[-100px] animate-pulse-slow"></div>

            {/* Título com animação */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold text-center mb-6 drop-shadow-xl"
            >
                Brainstorming for Class
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-center max-w-2xl mb-10 text-white/90"
            >
                Uma plataforma para estudantes colaborarem, aprenderem juntos e brilharem em grupo 🚀
            </motion.p>

            {/* Botão estilizado */}
            <motion.a
                href="/login"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 border border-white/30 backdrop-blur-md text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-white/30 hover:shadow-lg transition-all duration-300"
            >
                Começar agora
            </motion.a>
        </section>
    );
};

export default Home;
