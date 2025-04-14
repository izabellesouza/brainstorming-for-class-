import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Forum from './pages/Forum';
import Grupos from './components/Grupos';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen 
      bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      text-black dark:text-white transition-colors duration-500"
    >
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
