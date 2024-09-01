// src/components/Admin.js

import React from 'react';

const Admin = () => {
  return (
    <div className="flex flex-col h-screen bg-azul_e text-branco">
      <header className="fixed top-0 left-0 right-0 bg-verde_e p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/assets/Logo.svg"
              alt="Logo"
            />
          </div>
        </div>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center pt-20">
        <div className="w-full max-w-4xl bg-bege p-12 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <img 
                src="assets/Camaleao.svg" // Substitua pelo caminho da sua imagem
                alt="Imagem"
                className="mx-auto mb-6 w-40 h-auto" // Ajuste a largura da imagem para 40% da largura do contêiner
            />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <label className='text-verde_e text-lg font-medium'>
                  Informações
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full p-3 border border-verde_e rounded-md bg-branco text-verde_e rounded-full"
                  />
                </div>
                <button
                  className="flex items-center justify-center bg-branco text-verde_e border border-verde_e rounded-full hover:bg-verde_c hover:text-branco"
                  style={{ height: '50px', width: '50px' }}
                >
                  <img
                    src='assets/Mic.svg'
                    alt='Microfone'
                    className='w-10 h-10' // Ajuste o tamanho da imagem conforme necessário
                  />
                </button>
              </div>
              <input
                type="file"
                multiple
                className="w-full p-3 border border-verde_e rounded-md bg-branco text-verde_e rounded-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              className="w-[30%] bg-branco text-azul_e p-3 border border-verde_e rounded-full"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
