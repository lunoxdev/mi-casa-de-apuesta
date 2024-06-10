import { useState } from 'react';
import '../styles/header/style.css';

const Navbar: React.FC = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <header id="header-nav" className="sticky z-50 top-0 flex justify-between items-center w-full p-4 text-[#f0f3ff] text-opacity-90">
       <a href="/" className='hover:scale-110 hover:rounded-full hover:shadow-[#8678f9] hover:shadow-sm'>
          <img
            src="/logo.svg"
            alt="Mi casa de apuesta Logo"
            title='Mi casa de apuesta Logo'
            width="40"
            height="40"
            decoding="async" 
            loading="eager"
          />
        </a>
        <nav className="hidden md:flex flex-grow basis-0 w-full space-x-5 md:justify-center">
          <a className="font-light relative bg-[linear-gradient(#616161,#616161),linear-gradient(#8678f9,#8678f9)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]" href="#casas">
            Lista de Casas
          </a>
          <a className="font-light relative bg-[linear-gradient(#616161,#616161),linear-gradient(#8678f9,#8678f9)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]" href="#elegir">
            ¿Cómo elegir?
          </a>
          <a className="font-light relative bg-[linear-gradient(#616161,#616161),linear-gradient(#8678f9,#8678f9)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]" href="#apostar">
            ¿Cómo Apostar?
          </a>
          <a className="font-light relative bg-[linear-gradient(#616161,#616161),linear-gradient(#8678f9,#8678f9)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]" href="#faq">
            FAQ
          </a>
          <a className="font-light relative bg-[linear-gradient(#616161,#616161),linear-gradient(#8678f9,#8678f9)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]" href="#footer">
            Nosotros
          </a>
        </nav>

        <button
          id="menu-toggle"
          className="flex flex-grow basis-0 justify-end text-2xl md:hidden z-50"
          onClick={toggleMobileMenu}
        >
          <span id="menu-icon">{isMobileMenuVisible ? '✕' : '☰'}</span>
        </button>

        <nav
          id="mobile-menu"
          className={`${
            isMobileMenuVisible ? 'flex' : 'hidden'
          } bg-black backdrop-blur-3xl w-full flex-col items-center text-center text-2xl fixed top-0 left-0 right-0 min-h-screen place-content-center`}
        >
          <a className="my-2 hover:underline hover:underline-offset-8" href="#operadores" onClick={closeMobileMenu}>
            Lista de Operadores
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#consideraciones" onClick={closeMobileMenu}>
            Consideraciones
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#apostar" onClick={closeMobileMenu}>
            ¿Cómo Apostar?
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#faq" onClick={closeMobileMenu}>
            FAQ
          </a>
          <a className="my-2 hover:underline hover:underline-offset-8" href="#footer" onClick={closeMobileMenu}>
            Nosotros
          </a>
        </nav>
    </header>
  );
};

export default Navbar;
