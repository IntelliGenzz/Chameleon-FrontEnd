// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Cabecalho'; // Certifique-se de que o Header está no caminho correto

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica de autenticação
    if (username === '123' && password === '123') {
      navigate('/chat'); // Redireciona para a tela do Chatbot
    } else if (username === '321' && password === '321') {
      navigate('/admin'); // Redireciona para a tela de Admin
    } else {
      // Pode adicionar lógica para mostrar uma mensagem de erro
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header /> {/* Exibe o Header na tela de login */}
      <div className="flex-1 flex items-center justify-center bg-azul_e">
        <div className="w-full max-w-sm bg-bege p-8 rounded-lg shadow-lg">
          <img 
            src="assets/Camaleao.svg" // Substitua pelo caminho da sua imagem
            alt="Login"
            className="mx-auto mb-6 w-1/2 h-auto" // Ajuste a largura da imagem para 50% da largura do contêiner
          />
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <div className="mb-4 w-full">
              <label htmlFor="email" className="block text-azul_e text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="w-full p-2 border border-verde_e rounded-full bg-branco"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="senha" className="block text-azul_e text-sm font-medium mb-2">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                className="w-full p-2 border border-verde_e rounded-full bg-branco"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-[30%] text-azul p-2 rounded-full bg-branco border border-verde_e"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;