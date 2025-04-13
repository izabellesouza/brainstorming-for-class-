import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Forum from './pages/Forum';
import Grupos from './components/Grupos';
import Chat from './pages/Chat';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter basename="/brainstorming-for-class-/">
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
    </BrowserRouter>
  );
};

export default App;
