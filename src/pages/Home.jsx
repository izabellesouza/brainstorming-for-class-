import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroParallax from '../components/HeroParallax';

const Home = () => {
    return (
        <HeroParallax>
            <section className="w-full max-w-6xl mx-auto rounded-3xl shadow-xl p-12 text-white text-center relative overflow-hidden
            bg-gradient-to-r from-teal-500 to-indigo-600 dark:from-gray-900 dark:to-gray-900 transition-colors duration-500">

                {/* Elementos caindo (livros, lápis, computadores) */}
                <motion.div
                    className="absolute bottom-0 left-0 w-[70px] h-[70px] bg-cover bg-no-repeat"
                    style={{ backgroundImage: 'url(/path/to/book-image.png)' }} // Imagem de livro
                    animate={{
                        y: ['-100px', '100vh'],
                        x: ['-200px', '200px'],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-cover bg-no-repeat"
                    style={{ backgroundImage: 'url(/path/to/pencil-image.png)' }} // Imagem de lápis
                    animate={{
                        y: ['-50px', '100vh'],
                        x: ['-150px', '150px'],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-10 left-[40%] w-[120px] h-[120px] bg-cover bg-no-repeat"
                    style={{ backgroundImage: 'url(/path/to/computer-image.png)' }} // Imagem de computador
                    animate={{
                        y: ['-150px', '150vh'],
                        x: ['-100px', '100px'],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                />

                {/* Outros elementos decorativos */}
                <div className="absolute w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl top-20 left-[-100px] animate-pulse-slow"></div>
                <div className="absolute w-96 h-96 bg-teal-500 opacity-20 rounded-full blur-3xl bottom-20 right-[-120px] animate-pulse-slow"></div>

                {/* Título com animação */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-xl tracking-wide"
                >
                    Brainstorming for Class
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/90"
                >
                    Uma plataforma para estudantes colaborarem, aprenderem juntos e brilharem em grupo
                </motion.p>

                {/* Botão estilizado */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="transform transition-all duration-300"
                >
                    <Link to="/login">
                        <button className="bg-white/30 border border-white/50 backdrop-blur-md text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-white/40 hover:shadow-xl transition-all duration-300">
                            Começar agora
                        </button>
                    </Link>
                </motion.div>
            </section>
        </HeroParallax>
    );
};

export default Home;
