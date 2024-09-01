import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen w-screen bg-azul_e">
      {/* Div principal com o scroll */}
      <div className="flex flex-col items-center justify-center flex-1 pt-5 overflow-hidden">
        {/* Div interna do chat */}
        <div className="flex flex-col w-4/5 h-[70vh] max-h-[600px] border border-verde_c bg-branco rounded-lg overflow-hidden">
          {/* Área de Mensagens */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-md max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-verde_c border border-verde_e text-azul_e self-end ml-auto'
                    : 'bg-azul_c border border-verde_e text-azul_e self-start mr-auto'
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Referência para rolar */}
          </div>

          {/* Área de Entrada de Texto e Botões */}
          <div className="flex items-center p-2 bg-bege border-t border-verde_e">
            <button 
              onClick={handleSendMessage}
              className='flex items-center justify-center mr-2 bg-branco text-verde_e rounded-full border border-verde_e hover:bg-verde_c hover:text-branco'
              style={{ height: '50px', width: '50px' }}
            >
              <img
              src='assets/Mic.svg'
              alt='Audio'
              className='w-10 h-10'
              />
            </button>
            <input
              type="text"
              className="flex-1 p-2 border border-verde_e rounded-full"
              placeholder="Insira sua dúvida"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <button
              onClick={handleSendMessage}
              className="flex items-center justify-center ml-2 bg-branco text-verde_e border border-verde_e rounded-full hover:bg-verde_c hover:text-branco"
              style={{ height: '50px', width: '50px' }}
            >
              <img
              src='assets/Send.svg'
              className='w-7 h-7'
              alt='Enviar'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
