// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Forum = () => {
//     const [isDark, setIsDark] = useState(() => {
//         return localStorage.getItem('theme') === 'dark';
//     });

//     useEffect(() => {
//         if (isDark) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//         localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     }, [isDark]);

//     return (
//         <section className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen py-20 text-white overflow-hidden">
//             {/* Elementos decorativos */}
//             <div className="absolute w-80 h-80 bg-white/10 rounded-full top-[-50px] left-[-50px] blur-3xl animate-pulse-slow"></div>
//             <div className="absolute w-80 h-80 bg-white/10 rounded-full bottom-[-50px] right-[-50px] blur-3xl animate-pulse-slow"></div>

//             <div className="relative z-10 max-w-7xl mx-auto px-4">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="text-4xl font-bold text-center mb-6 drop-shadow-lg text-white dark:text-white"
//                 >
//                     Fórum de Discussões
//                 </motion.h2>

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3, duration: 0.7 }}
//                     className="text-center text-lg text-white/90 dark:text-white/70 mb-10"
//                 >
//                     Participe de debates, esclareça dúvidas e troque conhecimento com a comunidade 👥
//                 </motion.p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {[1, 2, 3].map((_, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2 * i, duration: 0.6 }}
//                             className="bg-white/10 dark:bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all"
//                         >
//                             <h3 className="text-xl font-semibold mb-2 text-white dark:text-white">
//                                 Tópico de Discussão #{i + 1}
//                             </h3>
//                             <p className="text-white/80 dark:text-white/60 mb-2">
//                                 Exemplo de dúvida ou tópico interessante para iniciar o debate.
//                             </p>
//                             <a
//                                 href="#"
//                                 className="text-white font-medium underline underline-offset-4 hover:text-pink-300 dark:hover:text-pink-400 transition-colors"
//                             >
//                                 Participar
//                             </a>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Forum;
import React from 'react';
import { motion } from 'framer-motion';

const Forum = () => {
    return (
        <section className="relative bg-gradient-to-br from-teal-400 via-indigo-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-purple-700 min-h-screen py-20 text-white overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute w-80 h-80 bg-white/10 rounded-full top-[-50px] left-[-50px] blur-3xl animate-pulse-slow"></div>
            <div className="absolute w-80 h-80 bg-white/10 rounded-full bottom-[-50px] right-[-50px] blur-3xl animate-pulse-slow"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-6 drop-shadow-lg text-white dark:text-white"
                >
                    Fórum de Discussões
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-center text-lg text-white/90 mb-10 dark:text-white/80"
                >
                    Participe de debates, esclareça dúvidas e troque conhecimento com a comunidade 👥
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * i, duration: 0.6 }}
                            className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all dark:bg-gray-800"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-white dark:text-white">Tópico de Discussão #{i + 1}</h3>
                            <p className="text-white/80 mb-2 dark:text-white/70">Exemplo de dúvida ou tópico interessante para iniciar o debate.</p>
                            <a href="#" className="text-white font-medium underline underline-offset-4 hover:text-pink-300 transition-colors">Participar</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Forum;
