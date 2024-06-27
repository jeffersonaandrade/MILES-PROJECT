import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-gray-500 p-4 flex justify-between items-center w-full">
        <div><strong>Vupt!</strong></div>
        <nav className="hidden md:flex">
          <ol className="list-none flex p-0 m-0 items-center">
            <li className="mr-12"><a href="#" className="text-black no-underline transition duration-300 hover:text-white">Home</a></li>
            <li className="mr-12"><a href="#" className="text-black no-underline transition duration-300 hover:text-white">Produto</a></li>
            <li className="mr-12"><a href="#" className="text-black no-underline transition duration-300 hover:text-white">Sobre</a></li>
          </ol>
        </nav>
        <div className="flex items-center">
          <div className="flex items-center ml-4">
            <i className="fa fa-search text-black"></i>
            <a href="#" className="text-black ml-2 no-underline transition duration-300 hover:text-white">Buscar</a>
          </div>
          <div className="flex items-center ml-4">
            <i className="fa fa-plus text-black"></i>
            <a href="/anunciar" className="text-black ml-2 no-underline transition duration-300 hover:text-white">Anunciar</a>
          </div>
        </div>
        <button className="text-white text-2xl bg-none border-none cursor-pointer md:hidden ml-4" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </header>
      {menuOpen && (
        <div className="fixed top-0 right-0 w-3/5 h-full bg-black bg-opacity-70 flex flex-col items-center text-2xl pt-8">
          <button className="text-white text-2xl bg-none border-none absolute top-4 left-4" onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ol className="flex flex-col text-center gap-4 w-4/5 mt-8 list-none p-0">
            <li className="border-b border-gray-700 pb-4"><a href="#" className="text-white no-underline transition duration-300">Home</a></li>
            <li className="border-b border-gray-700 pb-4"><a href="#" className="text-white no-underline transition duration-300">Produto</a></li>
            <li className="border-b border-gray-700 pb-4"><a href="#" className="text-white no-underline transition duration-300">Sobre</a></li>
            <li className="border-b border-gray-700 pb-4"><a href="#" className="text-white no-underline transition duration-300">Buscar</a></li>
            <li className="border-b border-gray-700 pb-4"><a href="#" className="text-white no-underline transition duration-300">Anunciar</a></li>
          </ol>
        </div>
      )}
    </>
  );
}

export default Header;
