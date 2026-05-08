import React, { useState } from 'react';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="bg-neutral-950/80 backdrop-blur-md text-neutral-300 sticky top-0 z-50 border-b border-neutral-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center font-['Poppins']">
          
          <div className="logo md:ml-12">
            <a 
              href="#home" 
              style={{ 
                fontFamily: "'Archivo Black', sans-serif", 
                fontWeight: 900,
                WebkitTextStroke: "1px white" 
              }}
              className="text-4xl md:text-[47px] text-white leading-none border-2 border-white px-2 py-1 inline-block"
            >
              RLS
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="font-menu flex space-x-10 text-sm md:text-base font-semibold tracking-wide">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#historia" className="hover:text-white transition-colors">História</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </nav>

          <button 
            className="md:hidden text-3xl text-neutral-400 hover:text-white transition-colors z-50"
            onClick={() => setMenuAberto(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {menuAberto && (
        <div className="fixed inset-0 z-[9999999] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setMenuAberto(false)}
          ></div>
          
          <div className="relative bg-neutral-950 border-l border-neutral-800 w-[70%] sm:w-[50%] h-full flex flex-col p-8 animate-slide-in-right shadow-2xl">
            <button 
              className="text-neutral-500 hover:text-white text-3xl self-end mb-12 transition-colors"
              onClick={() => setMenuAberto(false)}
            >
              ✕
            </button>
            <nav className="text-right">
              <ul className="font-menu flex flex-col space-y-6 text-lg font-semibold text-neutral-400">
                <li><a href="#home" onClick={() => setMenuAberto(false)} className="hover:text-white hover:bg-neutral-800 p-3 rounded-lg block transition-all">Home</a></li>
                <li><a href="#servicos" onClick={() => setMenuAberto(false)} className="hover:text-white hover:bg-neutral-800 p-3 rounded-lg block transition-all">Serviços</a></li>
                <li><a href="#historia" onClick={() => setMenuAberto(false)} className="hover:text-white hover:bg-neutral-800 p-3 rounded-lg block transition-all">História</a></li>
                <li><a href="#portfolio" onClick={() => setMenuAberto(false)} className="hover:text-white hover:bg-neutral-800 p-3 rounded-lg block transition-all">Portfólio</a></li>
                <li><a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-white hover:bg-neutral-800 p-3 rounded-lg block transition-all">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;