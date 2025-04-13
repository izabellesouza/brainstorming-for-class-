import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-teal-500 to-indigo-600 text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
        Brainstorming for Class
      </h1>
      <p className="text-lg md:text-xl font-light max-w-2xl mb-8">
        Uma plataforma para estudantes colaborarem, aprenderem juntos e brilharem em grupo 🚀
      </p>
      <Link to="/brainstorming-for-class-/login">
        <button className="mt-8 px-10 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-xl hover:bg-indigo-100 hover:scale-105 transition-all duration-300">
          Começar agora
        </button>
      </Link>
    </section>
  );
};

export default Hero;
