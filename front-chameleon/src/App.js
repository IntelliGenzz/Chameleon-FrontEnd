// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Cabecalho';
import Chatbot from './components/Chatbot';
import Login from './components/Login'; // Certifique-se de criar o Login.js
import Admin from './components/Admin'; // Certifique-se de criar o Admin.js

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App flex flex-col h-screen">
              <Login /> {/* Exibe a tela de login na rota raiz */}
            </div>
          }
        />
        <Route
          path="/chat"
          element={
            <div className="App flex flex-col h-screen">
              <Header />
              <div className="flex-1">
                <Chatbot /> {/* Exibe o chatbot na rota /chat */}
              </div>
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <div className="App flex flex-col h-screen">
              <Header />
              <div className="flex-1">
                <Admin /> {/* Exibe a tela de admin na rota /admin */}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
