import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-md mb-6">
        Brainstorming for Class
      </h1>
      <p className="text-lg md:text-xl font-light max-w-2xl">
        Uma plataforma para estudantes colaborarem, aprenderem juntos e brilharem em grupo 🚀
      </p>
      <Link to="/login">
        <button className="mt-8 px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-md hover:scale-105 hover:bg-indigo-100 transition duration-300">
          Começar agora
        </button>
      </Link>
    </section>
  );
};

export default Hero;
