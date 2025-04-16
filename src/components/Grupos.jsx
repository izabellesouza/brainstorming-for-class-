// import React from 'react';
// import { motion } from 'framer-motion';

// const Grupos = () => {
//     return (
//         <section className="relative bg-gradient-to-br from-teal-400 via-indigo-600 to-purple-500 min-h-screen py-20 text-white overflow-hidden dark:bg-gradient-to-br dark:from-teal-600 dark:via-indigo-800 dark:to-purple-700">
//             {/* Elementos decorativos */}
//             <div className="absolute w-80 h-80 bg-teal-500 opacity-20 rounded-full top-[-50px] left-[-50px] blur-3xl animate-pulse-slow dark:bg-teal-500 dark:opacity-10"></div>
//             <div className="absolute w-80 h-80 bg-white/10 rounded-full bottom-[-50px] right-[-50px] blur-3xl animate-pulse-slow dark:bg-white/20 dark:opacity-10"></div>

//             <div className="relative z-10 max-w-7xl mx-auto px-4">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="text-4xl font-bold text-center mb-6 drop-shadow-lg"
//                 >
//                     Grupos de Estudo
//                 </motion.h2>

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3, duration: 0.7 }}
//                     className="text-center text-lg text-white/90 mb-10"
//                 >
//                     Participe de grupos colaborativos para compartilhar ideias e aprender juntos 💬
//                 </motion.p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {[1, 2, 3].map((_, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2 * i, duration: 0.6 }}
//                             className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all dark:bg-white/20 dark:bg-opacity-40"
//                         >
//                             <h3 className="text-xl font-semibold mb-2">Grupo de Estudo #{i + 1}</h3>
//                             <p className="text-white/80 mb-2">Discussões sobre tópicos específicos e apoio mútuo.</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Grupos;
import React from 'react';
import { motion } from 'framer-motion';

const Grupos = () => {
    return (
        <section className="relative bg-gradient-to-br from-teal-400 via-indigo-600 to-purple-500 dark:from-gray-900 dark:via-gray-800 dark:to-purple-700 min-h-screen py-20 text-white overflow-hidden">
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
                    Grupos de Estudo
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-center text-lg text-white/90 mb-10 dark:text-white/80"
                >
                    Participe de grupos colaborativos para compartilhar ideias e aprender juntos 💬
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
                            <h3 className="text-xl font-semibold mb-2 text-white dark:text-white">Grupo de Estudo #{i + 1}</h3>
                            <p className="text-white/80 mb-2 dark:text-white/70">Discussões sobre tópicos específicos e apoio mútuo.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Grupos;
