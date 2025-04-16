import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para cadastrar o usuário
    };

    return (
        <section className="relative bg-gradient-to-br from-teal-400 to-indigo-600 dark:from-gray-900 dark:to-gray-900 min-h-screen flex items-center justify-center py-20 text-white overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl top-10 left-[-80px] animate-pulse-slow"></div>
            <div className="absolute w-96 h-96 bg-teal-500 opacity-20 rounded-full blur-3xl bottom-10 right-[-100px] animate-pulse-slow"></div>

            <div className="relative z-10 max-w-lg mx-auto px-6 sm:px-8 bg-white/20 dark:bg-black/20 p-8 rounded-3xl shadow-lg backdrop-blur-sm">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl sm:text-5xl font-semibold text-center mb-8 drop-shadow-xl text-white dark:text-white"
                >
                    Crie sua conta
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <label htmlFor="email" className="block text-lg font-medium text-white dark:text-white">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 mt-2 text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        <label htmlFor="password" className="block text-lg font-medium text-white dark:text-white">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 mt-2 text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        <label htmlFor="confirmPassword" className="block text-lg font-medium text-white dark:text-white">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 mt-2 text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-teal-500 dark:bg-teal-600 text-white rounded-md shadow-lg hover:bg-teal-600 dark:hover:bg-teal-700 transition-all duration-300"
                    >
                        Criar Conta
                    </motion.button>
                </form>

                <p className="mt-6 text-center text-white/80 dark:text-white/70">
                    Já tem uma conta?{' '}
                    <Link to="/login" className="text-teal-300 hover:text-teal-400">
                        Faça login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Signup;
