import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Verifique se o componente Navbar existe
import Footer from './components/Footer';  // Verifique se o componente Footer existe

import Home from './pages/Home';  // Verifique se o arquivo Home.jsx está na pasta pages
import Forum from './pages/Forum';  // Verifique se o arquivo Forum.jsx está na pasta pages
import Grupos from './components/Grupos';  // Verifique se o componente Grupos existe
import Chat from './pages/Chat';  // Verifique se o arquivo Chat.jsx está na pasta pages
import Login from './pages/Login';  // Verifique se o arquivo Login.jsx está na pasta pages

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
