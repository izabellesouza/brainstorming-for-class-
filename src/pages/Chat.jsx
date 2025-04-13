import React from 'react';
import { motion } from 'framer-motion';

const Chat = () => {
    return (
        <section className="relative bg-gradient-to-br from-purple-500 via-indigo-600 to-teal-400 min-h-screen py-20 text-white overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute w-80 h-80 bg-white/10 rounded-full top-[-50px] left-[-50px] blur-3xl animate-pulse-slow"></div>
            <div className="absolute w-80 h-80 bg-white/10 rounded-full bottom-[-50px] right-[-50px] blur-3xl animate-pulse-slow"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-6 drop-shadow-lg"
                >
                    Chat em Tempo Real
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-center text-lg text-white/90 mb-10"
                >
                    Em breve, você poderá conversar com colegas e tirar dúvidas em tempo real 📱
                </motion.p>

                {/* Aqui você pode futuramente adicionar a interface de chat */}
                <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
                    <p className="text-white/80">Em desenvolvimento...</p>
                </div>
            </div>
        </section>
    );
};

export default Chat;
