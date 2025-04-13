import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-lg rounded-full px-6 py-2 w-full max-w-md border border-white/20 dark:border-white/10">
      <div className="flex items-center justify-between w-full max-w-md mx-auto">
        {/* Links */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:scale-105 transition">
            <Home size={20} />
            Home
          </Link>

          <Link to="/forum" className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:scale-105 transition">
            <MessageCircle size={20} />
            Fórum
          </Link>

          <Link to="/grupos" className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:scale-105 transition">
            <Users size={20} />
            Grupos
          </Link>
        </div>

        {/* Tema e Menu Mobile */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 text-black dark:text-white transition"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 text-black dark:text-white transition"
            aria-label="Abrir menu"
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-lg rounded-lg px-6 py-4 w-11/12 max-w-md">
          <Link to="/" className="block text-sm font-semibold text-black dark:text-white hover:scale-105 transition">
            <Home size={20} />
            Home
          </Link>
          <Link to="/forum" className="block text-sm font-semibold text-black dark:text-white hover:scale-105 transition">
            <MessageCircle size={20} />
            Fórum
          </Link>
          <Link to="/grupos" className="block text-sm font-semibold text-black dark:text-white hover:scale-105 transition">
            <Users size={20} />
            Grupos
          </Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className="mt-4 p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 text-black dark:text-white transition"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
